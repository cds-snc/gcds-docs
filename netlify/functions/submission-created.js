import fetch from 'node-fetch';
const { EMAIL_TARGET, API_KEY, TEMPLATE_ID, ACCESS_TOKEN } = process.env;
exports.handler = async event => {
  const name = JSON.parse(event.body).payload.name;
  const email = JSON.parse(event.body).payload.email;
  const message = JSON.parse(event.body).payload.body;
  const submission_id = JSON.parse(event.body).payload.id;
  await fetch('https://api.notification.canada.ca/v2/notifications/email', {
    method: 'POST',
    headers: {
      Authorization: `ApiKey-v1 ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "email_address": EMAIL_TARGET,
        "template_id": TEMPLATE_ID,
        "personalisation":  {
            "name": name,
            "email": email,
            "message": message
          }
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (!data.status_code) {
            console.log(`Submitted to Notify`)
        } else {
            console.log(`Error - Status code: ${data.status_code}`);
            for (const errors of data.errors) {
                console.log(`Message: ${errors.message}`);
            }
        }
    });

    await fetch(`https://api.netlify.com/api/v1/submissions/${submission_id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: null
    });
}