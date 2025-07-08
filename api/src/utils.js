import { DOMAIN_EN, DOMAIN_FR } from './constants.js';

export const getRedirectPath = (lang, type, status) => {
  if (type === 'unsubscribe') {
    if (status === 'error') {
      return lang === 'en' ? '/en/unsubscribe/error' : '/fr/se-desabonner/erreur';
    }
    return lang === 'en' ? '/en/unsubscribe/success' : '/fr/se-desabonner/succes';
  } else {
    if (status === 'error') {
      return lang === 'en' ? '/en/unsubscribe/error' : '/fr/se-desabonner/erreur';
    }
    return lang === 'en' ? '/en/contact/thanks' : '/fr/contactez/merci';
  }
};

export const redirectUser = (origin, forwardedOrigin, lang, res, unsubscribe = false, status = 'success') => {
  // Attempt to get origin URL from request. If origin is null, use the default domains (en or fr) based on language
  origin = origin && origin !== 'null' ? origin : forwardedOrigin;
  origin =
    origin && origin !== 'null'
      ? origin
      : lang === 'en'
        ? DOMAIN_EN
        : DOMAIN_FR;

  let type = unsubscribe ? 'unsubscribe': 'contact'
  let path = getRedirectPath(lang, type, status);
  
  const redirectTo = origin + path;
  console.log(`[INFO] Redirecting to ${redirectTo}`);
  res.redirect(303, redirectTo);
};
