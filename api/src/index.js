import { getParametersByName } from '@aws-lambda-powertools/parameters/ssm';

import express from 'express';
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
  const { name, email, message, learnMore, familiarityGCDS, honeypot } = body;

  let parameters;
  if (process.env['NODE_ENV'] === 'development') {
    parameters = {
      'gc-design-system-config': {
        EMAIL_TARGET: '',
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
      redirectUser(origin, forwardedOrigin, lang, res);
    }
  }

  const { EMAIL_TARGET, NOTIFY_API_KEY, NOTIFY_TEMPLATE_ID } =
    parameters['gc-design-system-config'];

  // Honeypot check
  if (honeypot && honeypot.length > 0) {
    console.warn('[WARN] Honeypot detected');
    res.status(204).send();
    return;
  }

  // Check for required fields
  if (!name || !email || !familiarityGCDS) {
    console.warn('[WARN] Missing required fields');
    res.status(204).send();
    return;
  }

  // Send to Notify
  // Change to create ticket on freshdesk, and then send to notify
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
    },
  );

  console.log(`[INFO] Notify response: ${response.status}`);

  redirectUser(origin, forwardedOrigin, lang, res);
});

app.listen(port, () => {
  console.log(`[INFO] API listening at http://localhost:${port}`);
});
