// Same rule as isGcEmail in api/src/validation.js, which is what's enforced;
// this copy only gives instant feedback in the form. Keep the two in sync.
export const ALLOWED_EMAIL_DOMAINS = ['gc.ca', 'canada.ca', 'cds-snc.ca'];

// name@domain.tld: common local-part characters, domain labels of letters,
// digits and inner hyphens, and a letters-only top-level domain.
const EMAIL_PATTERN =
  /^([a-z0-9!#$%&'*+/=?^_`{|}~.-]+)@((?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63})$/;

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
 * True for a well-formed address on an allowed GC domain or a subdomain of one.
 * "x@tbs-sct.gc.ca" passes; "x@notgc.ca" and "x@gc.ca.evil.com" don't.
 */
export const isGcEmail = email => {
  const [local, domain] = parseEmail(email) || [];
  return (
    !!domain &&
    ALLOWED_EMAIL_DOMAINS.some(d => domain === d || domain.endsWith(`.${d}`)) &&
    !looksGenerated(local)
  );
};
