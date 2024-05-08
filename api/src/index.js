import { getParametersByName } from '@aws-lambda-powertools/parameters/ssm';

import express from 'express';
import axios from 'axios';

const app = express()
const port = process.env['PORT'] || 8080

const DOMAIN_EN = 'https://design-system.alpha.canada.ca'
const DOMAIN_FR = 'https://systeme-design.alpha.canada.ca'

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// SIGTERM Handler
process.on('SIGTERM', async () => {
    console.info('[express] SIGTERM received');

    console.info('[express] cleaning up');
    // perform actual clean up work here.
    await new Promise(resolve => setTimeout(resolve, 100));

    console.info('[express] exiting');
    process.exit(0)
});

const redirectUser = (origin, forwardedOrigin, lang, res) => {
    // Attempt to get origin URL from request. If origin is null, use the default domains (en or fr) based on language
    origin = origin && origin !== 'null' ? origin : forwardedOrigin
    origin = origin && origin !== 'null' ? origin : lang === 'en' ? DOMAIN_EN : DOMAIN_FR

    const contactPath = lang == 'en' ? '/en/contact/thanks' : '/fr/contactez/merci'
    const redirectTo = origin + contactPath
    console.log(`[INFO] Redirecting to ${redirectTo}`)
    res.redirect(303, redirectTo)
}

app.post('/submission', async (req, res) => {
    let origin = req.get('origin');

    const body = (req.body) ? req.body : {}
    const forwardedHost = req.get('x-forwarded-host')
    const forwardedProto = req.get('x-forwarded-proto')

    const forwardedOrigin = forwardedHost && forwardedProto ? `${forwardedProto}://${forwardedHost}` : null

    // Get the language to figure out which domain to redirect the user to
    // Form name is in the format "contactEN" or "contactFR"
    let lang = "en"
    try {
        lang = body["form-name"].slice(-2).toLowerCase()
    } catch (e) {
        console.warn(`[WARN] Unable to determine language from form name, using default ${lang}`)
    }

    let parameters
    if( process.env['NODE_ENV'] === 'development' ) {
        parameters = {
            'gc-design-system-config': {
                EMAIL_TARGET: '',
                NOTIFY_API_KEY: '',
                NOTIFY_TEMPLATE_ID: ''
            }
        }
    } else {
        try {
            parameters = await getParametersByName({
                'gc-design-system-config': {transform: 'json'}
            }, {decrypt: true});
        } catch (e) {
            // Log the error, but return the user back to the site (thank you page)
            console.error('[ERROR] Failed to get parameters from SSM', e)
            redirectUser(origin, forwardedOrigin, lang, res)
        }
    }

    const { EMAIL_TARGET, NOTIFY_API_KEY, NOTIFY_TEMPLATE_ID } = parameters['gc-design-system-config'];

    const {name, email, message, reasonForContact, honeypot} = body

    // Honeypot check
    if (honeypot && honeypot.length > 0) {
        console.warn('[WARN] Honeypot detected')
        res.status(204).send()
        return
    }

    // Check for required fields
    if(!name || !email || !message || !reasonForContact) {
        console.warn('[WARN] Missing required fields')
        res.status(204).send()
        return
    }

    // Send to Notify
    const headData = {
        'Authorization': `ApiKey-v1 ${NOTIFY_API_KEY}`,
        'Content-Type': 'application/json',
    };

    const postData = JSON.stringify({
        email_address: EMAIL_TARGET,
        template_id: NOTIFY_TEMPLATE_ID,
        personalisation: {
            name: name,
            email: email,
            message: message,
            reasonForContact: reasonForContact
        },
    });

    console.log('[INFO] Sending to Notify: ', postData)

    await axios
        .post(
            'https://api.notification.canada.ca/v2/notifications/email',
            postData,
            {headers: headData},
        )
        .then(res => {
            console.log('[INFO] Successfully sent to Notify. Status: ', res.status);
        })
        .catch(err => {
            console.error('[ERROR] Failed to send to Notify', err)
        });

    redirectUser(origin, forwardedOrigin, lang, res)
})

app.listen(port, () => {
    console.log(`[INFO] API listening at http://localhost:${port}`)
})