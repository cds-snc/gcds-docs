/**
 * Creates a new ticket in Freshdesk
 * API Docs - https://developers.freshdesk.com/api/
 * @param settings
 * @param data
 * @returns {Promise<Response>}
 */
export const createTicket = async (settings, data, lang) => {
  const { name, email, message, learnMore, familiarityGCDS } = data;
  const { FRESHDESK_API_KEY } = settings;
  const url = `https://cds-snc.freshdesk.com/api/v2/tickets`;

  if (!FRESHDESK_API_KEY) {
    console.error('[ERROR] Missing Freshdesk API Key');
    return Promise.resolve({ status: 400, ok: false });
  }

  // Tags for Freshdesk
  const tags = ['z_skip_opsgenie', 'z_skip_urgent_escalation'];
  if (learnMore.includes('mailing_list')) {
    tags.push('Design_Request_MailingList');
  }
  if (learnMore.includes('demo')) {
    tags.push('Design_Request_Demo');
  }
  if (learnMore.includes('usability_research')) {
    tags.push('Design_Request_Research');
  }

  if (process.env.NODE_ENV === 'development') {
    tags.push('Design_Staging');
  } else {
    tags.push('Design_Production');
  }

  // Build the description field
  let description = `Name: ${name}<br>Email: ${email}<br>Message: <pre>${message}</pre><br>Learn More: ${learnMore}<br>Familiarity with GC Design System: ${familiarityGCDS}`;
  let subject = 'GC Design System Contact Form';
  let customFields = {
    cf_language: 'English',
  };

  // Update the fields for French
  if (lang === 'fr') {
    subject = 'Formulaire de contact Système de design GC';
    customFields = {
      cf_language: 'Français',
    };
    description = `Nom: ${name}<br>Courriel: ${email}<br>Message: <pre>${message}</pre><br>En savoir plus: ${learnMore}<br>Familiarité avec le Système de design GC: ${familiarityGCDS}`;
  }

  const postData = JSON.stringify({
    name: name ? name : 'Anonymous',
    email: email ? email : '',
    type: 'Question',
    source: 2,
    priority: 1,
    status: 2,
    product_id: 61000003764,
    tags: tags,
    group_id: 61000175431,
    subject: subject,
    description: description,
    custom_fields: customFields,
  });

  console.log('[INFO] Sending to Freshdesk API: ', postData);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${FRESHDESK_API_KEY}:x`)}`,
      },
      body: postData,
    });
    if (response?.ok === false) {
      console.error(
        `[ERROR] Failed to send to Freshdesk [${response.status}] - ${email} - ${postData}`,
      );
      const errorDetail = response.text();
      throw new Error(`Freshdesk error with response: ${errorDetail}`);
    } else {
      console.log(`[INFO] Successfully sent to Freshdesk`);
      return response;
    }
  } catch (e) {
    console.error('[ERROR] Failed to send to Freshdesk', e);
    return Promise.resolve({ status: 500, ok: false });
  }
};
