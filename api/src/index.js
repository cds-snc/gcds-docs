import { getParametersByName } from '@aws-lambda-powertools/parameters/ssm';
import express from 'express';
import { encode } from 'html-entities';
import { getRedirectPath, redirectUser } from './utils.js';
import { sendEmail } from './notify.js';
import { createTicket } from './freshdesk.js';
import {
  identifyForm,
  isFromAnotherSite,
  parseOriginList,
  validateSubmission,
} from './validation.js';

// Cache the SSM config in a warm Lambda instead of fetching it on every request,
// so a burst of submissions doesn't turn into a burst of SSM calls.
const CONFIG_CACHE_SECONDS = 300;

// Only decides how to answer one of our forms, never whether to process it.
// A native HTML form post (no JavaScript) asks for HTML and is redirected to a
// page; the contact form's JavaScript asks for JSON so it can show errors on
// the fields without losing the visitor's answers.
const wantsHtml = req => (req.get('accept') || '').includes('text/html');

// Our forms are small: a few short fields and one message. Matches the WAF's
// 20 KB body limit, which doesn't apply to direct calls to the function URL.
const MAX_BODY = '20kb';

const app = express();
const port = process.env['PORT'] || 8080;

// Only HTML form encoding is accepted: no JSON, multipart or nested fields.
app.use(
  express.urlencoded({ extended: false, limit: MAX_BODY, parameterLimit: 20 }),
);

// SIGTERM Handler
process.on('SIGTERM', async () => {
  console.info('[express] SIGTERM received');

  console.info('[express] cleaning up');
  // perform actual clean up work here.
  await new Promise(resolve => setTimeout(resolve, 100));

  console.info('[express] exiting');
  process.exit(0);
});

app.post('/submission', async (req, res) => {
  // Only a form post from one of our forms is processed; anything else is
  // rejected here with no details and no redirect.
  if (!req.is('application/x-www-form-urlencoded')) {
    console.warn(`[WARN] Rejected content type: ${req.get('content-type') || 'none'}`);
    res.status(415).send();
    return;
  }

  const form = identifyForm(req.body);
  if (!form) {
    console.warn('[WARN] Rejected request that is not one of our forms', {
      formName: typeof req.body?.['form-name'] === 'string' ? req.body['form-name'] : null,
      fields: Object.keys(req.body || {}),
    });
    res.status(400).send();
    return;
  }

  let origin = req.get('origin');

  const body = req.body;
  const forwardedHost = req.get('x-forwarded-host');
  const forwardedProto = req.get('x-forwarded-proto');

  const forwardedOrigin =
    forwardedHost && forwardedProto
      ? `${forwardedProto}://${forwardedHost}`
      : null;

  // The form name decides the language and whether this is an unsubscribe
  // request; the "unsubscribe" field itself can't switch a contact submission
  // to the lighter unsubscribe checks.
  const { lang, type } = form;
  const unsubscribe = type === 'unsubscribe';

  // Extract the fields from the form submission
  let { name, email, message, familiarityGCDS, honeypot } = body;

  const learnMore = [];
  if (body['learn-more-mailing-list']) {
    learnMore.push('mailing_list');
  }
  if (body['learn-more-research']) {
    learnMore.push('usability_research');
  }
  if (body['learn-more-gcds-forum']) {
    learnMore.push('gcds_forum');
  }

  // Header values only, no form data: helps confirm what Amplify forwards.
  const secFetchSite = req.get('sec-fetch-site');
  console.log('[INFO] Request source', {
    origin: origin || null,
    forwardedHost: forwardedHost || null,
    secFetchSite: secFetchSite || null,
  });

  let extraOrigins = [];

  // Sends the user back to the form (JSON) or to an error page (HTML).
  const reject = (statusCode, errors) => {
    if (wantsHtml(req)) {
      redirectUser(origin, forwardedOrigin, lang, res, unsubscribe, 'invalid', extraOrigins);
    } else {
      res.status(statusCode).json({ ok: false, errors });
    }
  };

  // Sends the user to the thank you / success page.
  const succeed = () => {
    if (wantsHtml(req)) {
      redirectUser(origin, forwardedOrigin, lang, res, unsubscribe, 'success', extraOrigins);
    } else {
      res.status(200).json({ ok: true, redirect: getRedirectPath(lang, type, 'success') });
    }
  };

  // Cheapest checks first, so junk is rejected before any network calls.

  // Honeypot check
  if (honeypot && honeypot.length > 0) {
    console.warn('[WARN] Honeypot detected');
    res.status(204).send();
    return;
  }

  // Required fields, and a GC email address for the contact form
  const errors = validateSubmission(body, form);
  if (Object.keys(errors).length > 0) {
    console.warn('[WARN] Invalid submission', errors);
    reject(400, errors);
    return;
  }

  let parameters;
  if (process.env['NODE_ENV'] === 'development') {
    console.log(`[DEBUG] Running in development mode, using mock parameters`);
    parameters = {
      'gc-design-system-config': {
        EMAIL_TARGET: '',
        FRESHDESK_API_KEY: process.env['FRESHDESK_API_KEY'],
        NOTIFY_API_KEY: '',
        NOTIFY_TEMPLATE_ID: '',
        EXTRA_ALLOWED_ORIGINS: 'http://localhost:4321',
      },
    };
  } else {
    // Get parameters from AWS SSM
    try {
      parameters = await getParametersByName(
        {
          'gc-design-system-config': { transform: 'json' },
        },
        { decrypt: true, maxAge: CONFIG_CACHE_SECONDS },
      );
    } catch (e) {
      // Log the error. Unsubscribe requests go to the unsubscribe error page so
      // the person can try again; contact submissions are logged below and the
      // user is sent to the thank you page.
      console.error('[ERROR] Failed to get parameters from SSM', e);
      if (unsubscribe) {
        if (wantsHtml(req)) {
          redirectUser(origin, forwardedOrigin, lang, res, true, 'error', extraOrigins);
        } else {
          res.status(500).json({ ok: false });
        }
        return;
      }
      console.log(
        '[INFO] Redirecting user back to the site, user information:',
        {
          name,
          email,
          message,
          learnMore,
          familiarityGCDS,
        },
      );
      succeed();
      return;
    }
  }

  const {
    EMAIL_TARGET,
    NOTIFY_API_KEY,
    NOTIFY_TEMPLATE_ID,
    FRESHDESK_API_KEY,
    ORIGIN_CHECK,
    EXTRA_ALLOWED_ORIGINS,
  } = parameters['gc-design-system-config'];

  extraOrigins = parseOriginList(EXTRA_ALLOWED_ORIGINS);

  // Reject submissions a browser says came from another website.
  // Log-only until ORIGIN_CHECK is set to "enforce" in the SSM config.
  if (isFromAnotherSite({ origin, secFetchSite }, extraOrigins)) {
    if (ORIGIN_CHECK === 'enforce') {
      console.warn('[WARN] Rejected request from another site');
      reject(403, { form: 'origin' });
      return;
    }
    console.warn('[WARN] Request from another site (log only)');
  }

  message = message ? encode(message) : '';

  // Send to freshdesk, if it fails, send to notify
  const freshdeskResponse = await createTicket(
    {
      FRESHDESK_API_KEY,
    },
    {
      name,
      email,
      message,
      learnMore,
      familiarityGCDS,
      unsubscribe,
    },
    lang,
  );

  console.log(
    `[INFO] Freshdesk response: ${freshdeskResponse.status} ${freshdeskResponse.ok}`,
  );
  if (freshdeskResponse?.ok === false) {
    console.error('[ERROR] Failed to send to Freshdesk, sending to Notify');
    const response = await sendEmail(
      {
        EMAIL_TARGET,
        NOTIFY_API_KEY,
        NOTIFY_TEMPLATE_ID,
      },
      {
        name,
        email,
        message,
        learnMore,
        familiarityGCDS,
        unsubscribe,
      },
      lang,
    );

    console.log(`[INFO] Notify response: ${response.status}`);
  }

  // Redirect user once we're finished processing the request, regardless whether it was successful or not.
  succeed();
});

// Reject any non-POST requests to /submission
app.all('/submission', (req, res) => {
  res.set('Allow', 'POST').status(405).send();
});

// Reject any further requests to other paths
app.use((req, res) => {
  res.status(404).send();
});

// Malformed or oversized bodies: answer with the status only. Don't respond with a stack trace.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  console.warn(`[WARN] Rejected request: ${err.type || err.message}`);
  res.status(status >= 400 && status < 600 ? status : 500).send();
});

// Only start the server if this file is run directly from the command line (not imported as a module).
// This prevents the server from starting during tests or when imported elsewhere.
if (process.argv[1] === new URL(import.meta.url).pathname) {
  app.listen(port, () => {
    console.log(`[INFO] API listening at http://localhost:${port}`);
  });
}

export default app;
