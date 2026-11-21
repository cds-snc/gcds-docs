import { ALLOWED_EMAIL_DOMAINS, ALLOWED_ORIGINS } from './constants.js';

// The forms this API accepts. Each lists every field it posts and which of
// them are required. Keep in sync with the forms in docs/src.
const CONTACT = {
  type: 'contact',
  fields: [
    'form-name', 'honeypot', 'bot-field', 'name', 'email', 'message', 'familiarityGCDS',
    'learn-more-mailing-list', 'learn-more-research', 'learn-more-gcds-forum',
  ],
  required: ['name', 'email', 'familiarityGCDS'],
};

const UNSUBSCRIBE = {
  type: 'unsubscribe',
  fields: ['form-name', 'honeypot', 'unsubscribe', 'email'],
  required: ['email'],
};

export const FORMS = {
  contactEN: { ...CONTACT, lang: 'en' },
  contactFR: { ...CONTACT, lang: 'fr' },
  unsubscribeEN: { ...UNSUBSCRIBE, lang: 'en' },
  unsubscribeFR: { ...UNSUBSCRIBE, lang: 'fr' },
};

/**
 * Returns which of our forms the body came from, or null if it isn't exactly
 * one of them (unknown form name, extra fields, or repeated/nested fields).
 */
export const FORM_NAMES = Object.keys(FORMS); // contactEN, contactFR, unsubscribeEN, unsubscribeFR

export const identifyForm = (body = {}) => {
  const formName = body['form-name'];
  if (!FORM_NAMES.includes(formName)) return null;

  const form = FORMS[formName];
  const isOurs = Object.entries(body).every(
    ([key, value]) => form.fields.includes(key) && typeof value === 'string',
  );
  return isOurs ? form : null;
};

/**
 * Returns { field: errorCode } for each problem, or {} when the submission is valid.
 * Codes: "required", "gcEmail" (contact form), "invalidEmail" (unsubscribe form,
 * which takes any well-formed address).
 */
export const validateSubmission = (body, form) => {
  const errors = {};
  for (const field of form.required) {
    if (!body[field]?.trim()) errors[field] = 'required';
  }
  if (!errors.email) {
    if (form.type === 'contact' && !isGcEmail(body.email)) errors.email = 'gcEmail';
    if (form.type === 'unsubscribe' && !isValidEmail(body.email)) errors.email = 'invalidEmail';
  }
  return errors;
};

// name@domain.tld: common local-part characters, domain labels of letters,
// digits and inner hyphens, and a letters-only top-level domain.
const EMAIL_PATTERN =
  /^([a-z0-9!#$%&'*+/=?^_`{|}~.-]+)@((?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63})$/;

const isInDomain = (domain, list) => list.some(d => domain === d || domain.endsWith(`.${d}`));

// Bot-generated addresses often contain a random hex string, like the
// "adc90bad56" in "0008_solver_adc90bad56@gmail.com": 10+ characters of 0-9
// and a-f that switch between letters and digits at least 3 times. A name plus
// a number ("dee5551234", "abe19850101") only switches once, so it passes.
const looksGenerated = local =>
  (local.match(/[0-9a-f]{10,}/g) || []).some(
    run => (run.match(/[a-f](?=[0-9])|[0-9](?=[a-f])/g) || []).length >= 3,
  );

/** Splits a well-formed email address into [local, domain] (lowercased), or returns null. */
const parseEmail = email => {
  if (typeof email !== 'string') return null;
  const value = email.trim().toLowerCase();
  const [, local, domain] = EMAIL_PATTERN.exec(value) || [];
  const localOk = local && local.length <= 64 && !/^\.|\.$|\.\./.test(local);
  return localOk && value.length <= 254 ? [local, domain] : null;
};

/**
 * True for any well-formed address. Used for unsubscribe, so it deliberately
 * skips the looksGenerated heuristic: blocking a real subscriber from leaving
 * the list is worse than a junk request.
 */
export const isValidEmail = email => !!parseEmail(email);

/**
 * True for a well-formed address on an allowed GC domain or a subdomain of one.
 * "x@tbs-sct.gc.ca" passes; "x@notgc.ca" and "x@gc.ca.evil.com" don't.
 */
export const isGcEmail = email => {
  const [local, domain] = parseEmail(email) || [];
  return !!domain && isInDomain(domain, ALLOWED_EMAIL_DOMAINS) && !looksGenerated(local);
};

/**
 * Turns the EXTRA_ALLOWED_ORIGINS setting from the SSM config (a comma-separated
 * string) into a list of origins, ignoring spaces and empty entries.
 * Example: "https://astro-staging.design-system.canada.ca, https://astro-staging.systeme-design.canada.ca"
 */
export const parseOriginList = (value = '') =>
  String(value).split(',').map(origin => origin.trim()).filter(Boolean);

export const isAllowedOrigin = (origin, extraOrigins = []) =>
  [...ALLOWED_ORIGINS, ...extraOrigins].includes(origin);

/**
 * True when the browser says the request came from another website.
 *
 * Our site sends "Referrer-Policy: no-referrer", so our own form posts arrive
 * with "Origin: null". We only reject what the browser marks as foreign. Non-
 * browser clients can fake these headers, so this stops other sites' pages
 * from posting to us; it doesn't authenticate anyone.
 */
export const isFromAnotherSite = ({ origin, secFetchSite }, extraOrigins = []) =>
  secFetchSite?.toLowerCase() === 'cross-site' ||
  (!!origin && origin !== 'null' && !isAllowedOrigin(origin, extraOrigins));
