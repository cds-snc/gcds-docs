export function format(label) {
  return (label ? ` ${label}` : 'Fallback Button Label');
}
export const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
