import fetch from 'node-fetch';
const { EMAIL_TARGET, API_KEY, TEMPLATE_ID } = process.env
exports.handler = async event => {
  const name = JSON.parse(event.body).payload.name
  const email = JSON.parse(event.body).payload.email
  const message = JSON.parse(event.body).payload.message
  console.log(`Recieved a submission: ${email}`)
  return fetch('https://api.notification.canada.ca/v2/notifications/email', {
    method: 'POST',
    headers: {
      Authorization: `ApiKey-v1 ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: {
        "email_address": EMAIL_TARGET,
        "template_id": TEMPLATE_ID,
        "personalisation": {
            name,
            email,
            message
          }
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Notify:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}