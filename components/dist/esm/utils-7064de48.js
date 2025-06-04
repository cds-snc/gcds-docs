const inheritAttributes = (el, shadowElement, attributes = []) => {
    let attributeObject = {};
    // Check for any aria attributes
    for (let i = 0; i < el.attributes.length; i++) {
        const attr = el.attributes[i];
        if (attr.name.includes('aria-')) {
            attributeObject[attr.name] = attr.value;
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
/* Log validation error for required properties in components
 * @param name - name of the component i.e. <gcds-*>
 * @param errorArr - array of attributes with errors
 * @param optionalAttrsArrToRemove - array of optional attributes with errors to be removed from this error message
 */
const logError = (name, errorArr, optionalAttrsArrToRemove) => {
    let engMsg = 'Render error, please check required properties.';
    let frMsg = 'Erreur de rendu, veuillez vérifier les propriétés requises.';
    let errors = [...errorArr];
    // remove any potential optional attributes from errors array
    if (optionalAttrsArrToRemove && optionalAttrsArrToRemove.length > 0) {
        for (const optionalAttr of optionalAttrsArrToRemove) {
            if (errors.includes(optionalAttr)) {
                errors.splice(errors.indexOf(optionalAttr), 1);
            }
        }
    }
    console.error(`${name}: ${engMsg} (${errors}) | ${name}: ${frMsg} (${errors})`);
};
/* Log validation error for required properties in components
 * @param errors - array of attributes with errors
 * @param propertyName - name of the property being checked
 * @param property - value of the property being checked
 * @param external - boolean value for an external check on property value
 * @returns modified array of errors
 */
const handleErrors = (errors, propertyName, property, external = false) => {
    if ((property && typeof property === 'string' && property.trim() === '') ||
        !property ||
        property === '' ||
        external) {
        if (!errors.includes(propertyName)) {
            errors.push(propertyName);
        }
    }
    else if (errors.includes(propertyName)) {
        errors.splice(errors.indexOf(propertyName), 1);
    }
    return errors;
};
/* Compare errors array to required props array
 * @param errors - array of attributes with errors
 * @param requiredProps - array of required properties to check against
 * @returns boolean if no matching errors
 */
const isValid = (errors, requiredProps) => {
    const intersection = errors.filter(x => requiredProps.includes(x));
    return intersection.length > 0 ? false : true;
};
/* Check for valid date
 * @param dateString - the date to check
 */
const isValidDate = (dateString, forceFormat) => {
    // Define regex pattern to match YYYY-MM-DD format
    let fullregex = /^\d{4}-\d{2}-\d{2}$/;
    let compactregex = /^\d{4}-\d{2}$/;
    let format = '';
    // Check if the format matches the regex
    if (fullregex.test(dateString)) {
        format = 'full';
    }
    else if (compactregex.test(dateString)) {
        format = 'compact';
    }
    else {
        return false;
    }
    if (forceFormat && format != forceFormat) {
        return false;
    }
    // Parse the date string into a Date object
    const formattedDate = `${dateString}${format === 'compact' ? '-15' : ''}`;
    // Check if the date is valid
    const [year, month, day] = formattedDate.split('-').map(Number);
    const thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
    const thirtyDays = [4, 6, 9, 11];
    if (month < 1 || month > 12) {
        return false;
    }
    else if (thirtyDays.includes(month) && (day < 1 || day > 30)) {
        return false;
    }
    else if (thirtyOneDays.includes(month) && (day < 1 || day > 31)) {
        return false;
    }
    else if (!isLeapYear(year) && month === 2 && (day < 1 || day > 28)) {
        return false;
    }
    else if (isLeapYear(year) && month === 2 && (day < 1 || day > 29)) {
        return false;
    }
    return true;
};
function isLeapYear(y) {
    return !(y & 3 || (!(y % 25) && y & 15));
}

export { assignLanguage as a, isValidDate as b, isValid as c, closestElement as d, emitEvent as e, handleErrors as h, inheritAttributes as i, logError as l, observerConfig as o };

//# sourceMappingURL=utils-7064de48.js.map