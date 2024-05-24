/**
 * Send an email using the Notify API
 * API Docs - https://documentation.notification.canada.ca/
 * @param message
 * @returns {Promise<Response>}
 */
export const sendEmail = async (settings, data) => {
  const { EMAIL_TARGET, NOTIFY_TEMPLATE_ID, NOTIFY_API_KEY } = settings;
  const { name, email, message, learnMore, familiarityGCDS } = data;

  const headers = {
    'Authorization': `ApiKey-v1 ${NOTIFY_API_KEY}`,
    'Content-Type': 'application/json',
  };

  const postData = JSON.stringify({
    email_address: EMAIL_TARGET,
    template_id: NOTIFY_TEMPLATE_ID,
    personalisation: {
      name: name,
      email: email,
      message: message ? message : '',
      learnMore: learnMore ? learnMore : '',
      familiarityGCDS: familiarityGCDS ? familiarityGCDS : '',
    },
  });

  console.log('[INFO] Sending to Notify: ', postData);
  const response = await fetch(
    'https://api.notification.canada.ca/v2/notifications/email',
    {
      method: 'POST',
      headers: headers,
      body: postData,
    },
  );

  if (response?.ok === false) {
    console.error('[ERROR] Failed to send to Notify');
    const errorDetail = await response.text();
    console.error('[ERROR] Notify error detail: ', errorDetail);
  }

  return response;
};
