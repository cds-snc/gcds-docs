/**
 * Creates a new ticket in Freshdesk
 * API Docs - https://developers.freshdesk.com/api/
 * @param settings
 * @param data
 * @returns {Promise<Response>}
 */

// Constants
const FRESHDESK_URL = 'https://cds-snc.freshdesk.com/api/v2/tickets';
const BASE_TAGS = ['z_skip_opsgenie', 'z_skip_urgent_escalation'];

// Ticket configuration by type and language
const TICKET_CONFIG = {
  unsubscribe: {
    en: {
      subject: 'GC Design System Unsubscribe Request',
      description: (email) => `Unsubscribe request<br>Email: ${email}`,
    },
    fr: {
      subject: 'Demande de désabonnement GCSD',
      description: (email) => `Demande de désabonnement<br>Courriel: ${email}`,
    },
  },
  contact: {
    en: {
      subject: 'GC Design System Contact Form',
      description: (data) => `Name: ${data.name}<br>Email: ${data.email}<br>Message: <pre>${data.message}</pre><br>Learn More: ${data.learnMore}<br>Familiarity with GC Design System: ${data.familiarityGCDS}`,
    },
    fr: {
      subject: 'Formulaire de contact Système de design GC',
      description: (data) => `Nom: ${data.name}<br>Courriel: ${data.email}<br>Message: <pre>${data.message}</pre><br>En savoir plus: ${data.learnMore}<br>Familiarité avec le Système de design GC: ${data.familiarityGCDS}`,
    },
  },
};

// Helper functions
const buildTags = (learnMore) => {
  const tags = [...BASE_TAGS];
  
  const tagMapping = {
    mailing_list: 'Design_Request_MailingList',
    demo: 'Design_Request_Demo',
    usability_research: 'Design_Request_Research',
  };
  
  if (learnMore && Array.isArray(learnMore)) {
    learnMore.forEach(item => {
      if (tagMapping[item]) {
        tags.push(tagMapping[item]);
      }
    });
  }
  
  tags.push(process.env.NODE_ENV === 'development' ? 'Design_Staging' : 'Design_Production');
  
  return tags;
};

const getLanguageField = (lang) => ({
  cf_language: lang === 'fr' ? 'Français' : 'English',
});

const getTicketConfig = (data, lang) => {
  const ticketType = data.gcds_unsubscribe ? 'unsubscribe' : 'contact';
  return TICKET_CONFIG[ticketType][lang] || TICKET_CONFIG[ticketType].en;
};

export const createTicket = async (settings, data, lang) => {
  const { name, email, message, learnMore, familiarityGCDS } = data;
  const { FRESHDESK_API_KEY } = settings;

  if (!FRESHDESK_API_KEY) {
    console.error('[ERROR] Missing Freshdesk API Key');
    return Promise.resolve({ status: 400, ok: false });
  }

  const config = getTicketConfig(data, lang);
  const tags = buildTags(learnMore);
  const customFields = getLanguageField(lang);
  
  const description = config.description(data.gcds_unsubscribe ? email : { name, email, message, learnMore, familiarityGCDS });

  const postData = JSON.stringify({
    name: name || 'Anonymous',
    email: email || '',
    type: 'Question',
    source: 2,
    priority: 1,
    status: 2,
    product_id: 61000003764,
    tags,
    group_id: 61000175431,
    subject: config.subject,
    description,
    custom_fields: customFields,
  });

  console.log('[INFO] Sending to Freshdesk API: ', postData);

  try {
    const response = await fetch(FRESHDESK_URL, {
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
