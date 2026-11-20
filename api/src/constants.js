export const DOMAIN_EN = 'https://design-system.canada.ca';
export const DOMAIN_FR = 'https://systeme-design.canada.ca';

export const learnMoreOptions = {
  en: {
    options: [
      {
        id: 'learnMoreMailingList',
        label: 'Sign me up for the mailing list.',
        value: 'mailing_list',
      },
      {
        id: 'learnMoreDemo',
        label: 'Contact me for a demo.',
        value: 'demo',
      },
      {
        id: 'learnMoreResearch',
        label: 'Contact me for usability research.',
        value: 'usability_research',
      },
    ],
  },
  fr: {
    options: [
      {
        id: 'learnMoreMailingList',
        label: "Ajoutez-moi à votre liste d'envoi.",
        value: 'mailing_list',
      },
      {
        id: 'learnMoreDemo',
        label: 'Contactez-moi pour une démo.',
        value: 'demo',
      },
      {
        id: 'learnMoreResearch',
        label: "Contactez-moi pour les études sur l'utilisabilité.",
        value: 'usability_research',
      },
    ],
  },
};

// Sites the forms live on. Used to validate where a submission came from and
// where the user is redirected back to. Extra origins (staging, Amplify
// previews) can be added at runtime with EXTRA_ALLOWED_ORIGINS in the SSM config.
export const ALLOWED_ORIGINS = [DOMAIN_EN, DOMAIN_FR];

// Email domains accepted on the contact form. Subdomains match too
// (e.g. tbs-sct.gc.ca matches gc.ca).
// Keep in sync with docs/src/components/ContactForm/validation.js.
export const ALLOWED_EMAIL_DOMAINS = ['gc.ca', 'canada.ca', 'cds-snc.ca'];
