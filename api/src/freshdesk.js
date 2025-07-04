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

// Ticket message formatting by type and language
// At the moment, we have two types of tickets:
// - unsubscribe request (form submission) and
// - contact us form submissions
const TICKET_FORMAT = {
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

// Helper function to build tags based on learnMore selections and environment
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

export const createTicket = async (settings, data, lang) => {
  const { name, email, message, learnMore, familiarityGCDS, unsubscribe } = data;
  const { FRESHDESK_API_KEY } = settings;

  if (!FRESHDESK_API_KEY) {
    console.error('[ERROR] Missing Freshdesk API Key');
    return Promise.resolve({ status: 400, ok: false });
  }

  // Determine the ticket type (unsubscribe request or contact form)
  const ticketType = unsubscribe ? 'unsubscribe' : 'contact';
  
  const ticket = TICKET_FORMAT[ticketType][lang] || TICKET_FORMAT[ticketType].en;
  const tags = buildTags(learnMore);
  const customFields = {
    cf_language: lang === 'fr' ? 'Français' : 'English',
  };

  // Build the description field
  const description = ticket.description(
    unsubscribe ? email : { name, email, message, learnMore, familiarityGCDS }
  );

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
    subject: ticket.subject,
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
