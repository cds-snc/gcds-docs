export function isSuggestionObject(obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    const validKeys = ['value', 'label'];
    const objKeys = Object.keys(obj);
    const hasValidTypes = typeof obj.label === 'string' &&
        (obj.value === undefined || typeof obj.value === 'string');
    const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));
    return hasValidTypes && hasOnlyValidKeys;
}
//# sourceMappingURL=suggestion-option.js.map
