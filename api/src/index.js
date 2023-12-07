const express = require('express')
const axios = require("axios");

const app = express()
const port = process.env['PORT'] || 8080

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

app.post('/submission', async (req, res) => {
    const origin = req.get('origin');
    const body = req.body

    // Form name is in the format "contactEN" or "contactFR"
    const lang = body["form-name"].slice(-2).toLowerCase()

    const { EMAIL_TARGET, NOTIFY_API_KEY, NOTIFY_TEMPLATE_ID } = process.env;

    const {name, email, message, reasonForContact, honeypot} = body


    // Honeypot check
    if (honeypot && honeypot.length > 0) {
        console.error('Honeypot detected')
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

    await axios
        .post(
            'https://api.notification.canada.ca/v2/notifications/email',
            postData,
            {headers: headData},
        )
        .then(res => {
            console.log('RESPONSE RECEIVED: ', res);
        })
        .catch(err => {
            console.log('AXIOS ERROR: ', err);
        });

    const contactPath = lang == 'en' ? '/en/contact/thanks' : '/fr/contactez/merci'
    const redirectTo = origin + contactPath
    res.redirect(303, redirectTo)
})

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
})