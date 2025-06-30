/**
 * Send an email using the Notify API
 * API Docs - https://documentation.notification.canada.ca/
 * @param settings
 * @param data
 * @returns {Promise<Response>}
 */
import { learnMoreOptions } from './constants.js';
export const sendEmail = async (settings, data, lang) => {
  const { EMAIL_TARGET, NOTIFY_TEMPLATE_ID, NOTIFY_API_KEY } = settings;
  const { name, email, message, learnMore, familiarityGCDS } = data;

  const headers = {
    'Authorization': `ApiKey-v1 ${NOTIFY_API_KEY}`,
    'Content-Type': 'application/json',
  };

  let learnMoreStringArray = [];
  if (learnMore) {
    learnMore.forEach(answer => {
      let learnMoreOption = learnMoreOptions[lang].options.find(
        option => option.value === answer,
      );

      // Get the label for a human-readable description
      if (learnMoreOption) {
        learnMoreStringArray.push(learnMoreOption.label);
      }
    });
  }

  const postData = JSON.stringify({
    email_address: EMAIL_TARGET,
    template_id: NOTIFY_TEMPLATE_ID,
    personalisation: {
      name: name,
      email: email,
      message: message ? message : '',
      learnMore: learnMoreStringArray,
      familiarityGCDS: familiarityGCDS,
    },
  });

  console.log('[INFO] Sending to Notify: ', postData);
  
  try {
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
    } else {
      console.log(`[INFO] Successfully sent to Notify`);
    }

    return response;
  } catch (e) {
    console.error('[ERROR] Failed to send to Notify', e);
    return Promise.resolve({ status: 500, ok: false });
  }
};
