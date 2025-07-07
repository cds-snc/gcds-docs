import { getParametersByName } from '@aws-lambda-powertools/parameters/ssm';
import express from 'express';
import { encode } from 'html-entities';
import { redirectUser } from './utils.js';
import { sendEmail } from './notify.js';
import { createTicket } from './freshdesk.js';

const app = express();
const port = process.env['PORT'] || 8080;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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
  let origin = req.get('origin');

  const body = req.body ? req.body : {};
  const forwardedHost = req.get('x-forwarded-host');
  const forwardedProto = req.get('x-forwarded-proto');

  const forwardedOrigin =
    forwardedHost && forwardedProto
      ? `${forwardedProto}://${forwardedHost}`
      : null;

  // Get the language to figure out which domain to redirect the user to
  // Form name is in the format "contactEN" or "contactFR"
  let lang = 'en';
  try {
    lang = body['form-name'].slice(-2).toLowerCase();
  } catch (e) {
    console.warn(
      `[WARN] Unable to determine language from form name, using default ${lang}`,
    );
  }

  // Extract the fields from the form submission
  let { name, email, message, familiarityGCDS, honeypot, unsubscribe } = body;

  const learnMore = [];
  if (body['learn-more-mailing-list']) {
    learnMore.push('mailing_list');
  }
  if (body['learn-more-demo']) {
    learnMore.push('demo');
  }
  if (body['learn-more-research']) {
    learnMore.push('usability_research');
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
      },
    };
  } else {
    // Get parameters from AWS SSM
    try {
      parameters = await getParametersByName(
        {
          'gc-design-system-config': { transform: 'json' },
        },
        { decrypt: true },
      );
    } catch (e) {
      // Log the error, but return the user back to the site (thank you page)
      console.error('[ERROR] Failed to get parameters from SSM', e);
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
      redirectUser(origin, forwardedOrigin, lang, res, unsubscribe);
      return;
    }
  }

  const {
    EMAIL_TARGET,
    NOTIFY_API_KEY,
    NOTIFY_TEMPLATE_ID,
    FRESHDESK_API_KEY,
  } = parameters['gc-design-system-config'];

  // Honeypot check
  if (honeypot && honeypot.length > 0) {
    console.warn('[WARN] Honeypot detected');
    res.status(204).send();
    return;
  }

  // Check for required fields
  if (unsubscribe) {
    // For unsubscribe requests, only email and form-name are required
    if (!email || !body['form-name']) {
      console.warn('[WARN] Missing required fields for unsubscribe request');
      res.status(204).send();
      return;
    }
  } else {
    // For regular contact form, name, email, and familiarityGCDS are required
    if (!name || !email || !familiarityGCDS) {
      console.warn('[WARN] Missing required fields');
      res.status(204).send();
      return;
    }
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
  redirectUser(origin, forwardedOrigin, lang, res, unsubscribe);
});

// Only start the server if this file is run directly from the command line (not imported as a module).
// This prevents the server from starting during tests or when imported elsewhere.
if (process.argv[1] === new URL(import.meta.url).pathname) {
  app.listen(port, () => {
    console.log(`[INFO] API listening at http://localhost:${port}`);
  });
}

export default app;
