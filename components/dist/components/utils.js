const inheritAttributes = (el, shadowElement, attributes = []) => {
    const attributeObject = {};
    // Check for any aria or data attributes
    for (let i = 0; i < el.attributes.length; i++) {
        const attr = el.attributes[i];
        if (attr.name.includes('aria-')) {
            attributeObject[attr.name] = attr.value;
            el.removeAttribute(attr.name);
        }
    }
    // Check for attributes defined by component
    attributes.forEach(attr => {
        if (el.hasAttribute(attr) ||
            (shadowElement && shadowElement.hasAttribute(attr))) {
            const value = el.getAttribute(attr) || shadowElement.getAttribute(attr);
            if (value !== null) {
                attributeObject[attr] =
                    el.getAttribute(attr) || shadowElement.getAttribute(attr);
            }
            el.removeAttribute(attr);
        }
    });
    return attributeObject;
};
const assignLanguage = (el) => {
    var _a;
    let lang = '';
    if (!el.getAttribute('lang')) {
        const closestLangAttribute = (_a = closestElement('[lang]', el)) === null || _a === void 0 ? void 0 : _a.getAttribute('lang');
        if (closestLangAttribute == 'en' || !closestLangAttribute) {
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
// Allows use of closest() function across shadow boundaries
const closestElement = (selector, el) => {
    if (el) {
        return ((el &&
            el != document &&
            typeof window != 'undefined' &&
            el != window &&
            el.closest(selector)) ||
            closestElement(selector, el.getRootNode().host));
    }
    return null;
};
const observerConfig = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['lang'],
};
// For validation - check if element has a checked checkbox/radio sibling
const elementGroupCheck = name => {
    let hasCheck = false;
    const element = document.querySelectorAll(`input[name=${name}]`);
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            hasCheck = true;
        }
    }
    return !hasCheck;
};
// Emit event with logic to cancel HTML events
// Returns false if event has been prevented
const emitEvent = (e, customEvent, value) => {
    const event = customEvent.emit(value);
    // Was the custom or native event interrupted
    if (event.defaultPrevented || e.defaultPrevented) {
        // Stop native HTML event in shadow-dom
        e.preventDefault();
        return false;
    }
    return true;
};

export { assignLanguage as a, elementGroupCheck as b, emitEvent as e, inheritAttributes as i, observerConfig as o };

//# sourceMappingURL=utils.js.map