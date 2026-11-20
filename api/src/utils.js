import { DOMAIN_EN, DOMAIN_FR } from './constants.js';
import { isAllowedOrigin } from './validation.js';

export const getRedirectPath = (lang, type, status) => {
  if (type === 'unsubscribe') {
    if (status === 'error' || status === 'invalid') {
      return lang === 'en' ? '/en/unsubscribe/error' : '/fr/se-desabonner/erreur';
    }
    return lang === 'en' ? '/en/unsubscribe/success' : '/fr/se-desabonner/succes';
  } else {
    // Submissions that fail validation go to a page explaining how to fix them.
    if (status === 'invalid') {
      return lang === 'en' ? '/en/contact/error' : '/fr/contactez/erreur';
    }
    // Otherwise the contact form always redirects to the success page; delivery
    // errors are logged but not shown to the user.
    return lang === 'en' ? '/en/contact/thanks' : '/fr/contactez/merci';
  }
};

/**
 * Picks the site to send the user back to. Only allowlisted origins are used,
 * so a forged Origin or X-Forwarded-Host can't turn the redirect into an open
 * redirect to another website.
 */
export const resolveRedirectOrigin = (origin, forwardedOrigin, lang, extraOrigins = []) => {
  // Attempt to get origin URL from request. If origin is null, use the default domains (en or fr) based on language
  for (const candidate of [origin, forwardedOrigin]) {
    if (isAllowedOrigin(candidate, extraOrigins)) {
      return candidate;
    }
  }
  return lang === 'en' ? DOMAIN_EN : DOMAIN_FR;
};

export const redirectUser = (
  origin,
  forwardedOrigin,
  lang,
  res,
  unsubscribe = false,
  status = 'success',
  extraOrigins = [],
) => {
  const base = resolveRedirectOrigin(origin, forwardedOrigin, lang, extraOrigins);
  const type = unsubscribe ? 'unsubscribe' : 'contact';
  const redirectTo = base + getRedirectPath(lang, type, status);
  console.log(`[INFO] Redirecting to ${redirectTo}`);
  res.redirect(303, redirectTo);
};
