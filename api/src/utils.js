import { DOMAIN_EN, DOMAIN_FR } from './constants.js';

export const redirectUser = (origin, forwardedOrigin, lang, res, unsubscribe = false) => {
  // Attempt to get origin URL from request. If origin is null, use the default domains (en or fr) based on language
  origin = origin && origin !== 'null' ? origin : forwardedOrigin;
  origin =
    origin && origin !== 'null'
      ? origin
      : lang === 'en'
        ? DOMAIN_EN
        : DOMAIN_FR;

  let path;
  if (unsubscribe) {
    path = lang === 'en' ? '/en/unsubscribe/success' : '/fr/unsubscribe/success';
  } else {
    path = lang === 'en' ? '/en/contact/thanks' : '/fr/contactez/merci';
  }
  
  const redirectTo = origin + path;
  console.log(`[INFO] Redirecting to ${redirectTo}`);
  res.redirect(303, redirectTo);
};
