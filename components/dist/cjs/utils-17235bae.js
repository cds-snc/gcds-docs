'use strict';

const inheritAttributes = (el, shadowElement, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr) || (shadowElement && shadowElement.hasAttribute(attr))) {
      const value = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const assignLanguage = (el) => {
  let lang = "";
  if (!el.getAttribute('lang')) {
    if (document.documentElement.getAttribute('lang') == 'en' || !document.documentElement.getAttribute('lang')) {
      lang = 'en';
    }
    else {
      lang = 'fr';
    }
  }
  else if (el.getAttribute('lang') == 'en') {
    lang = 'en';
  }
  else {
    lang = 'fr';
  }
  return lang;
};

exports.assignLanguage = assignLanguage;
exports.inheritAttributes = inheritAttributes;
