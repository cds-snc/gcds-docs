import axios from "axios";
const { EMAIL_TARGET, API_KEY, TEMPLATE_ID, ACCESS_TOKEN } = process.env;
exports.handler = async (event, context) => {
  const name = JSON.parse(event.body).payload.name;
  const email = JSON.parse(event.body).payload.email;
  const message = JSON.parse(event.body).payload.body;
  const submission_id = JSON.parse(event.body).payload.id;

  const headData = {
    'Authorization': `ApiKey-v1 ${API_KEY}`,
    'Content-Type': 'application/json'
  }

  const postData = JSON.stringify({
    "email_address": EMAIL_TARGET,
    "template_id": TEMPLATE_ID,
    "personalisation":  {
        "name": name,
        "email": email,
        "message": message
      }
  });

  await axios.post('https://api.notification.canada.ca/v2/notifications/email', postData, {headers: headData})
  .then((res) => {
    console.log("RESPONSE RECEIVED: ", res);
  })
  .catch((err) => {
    console.log("AXIOS ERROR: ", err);
  })

  const deleteHeader = {
    'Authorization': `Bearer ${ACCESS_TOKEN}`
  }

  const res = await axios.delete(`https://api.netlify.com/api/v1/submissions/${submission_id}`, { headers: deleteHeader });
}