import { defaultValidator, combineValidators, } from "./validator";
import { requiredField, requiredEmailField, requiredFileInput, requiredSelectField, requiredDateInput, requiredRadio, requiredCheckboxGroup, requiredCheckboxSingle, } from "./input-validators/input-validators";
export var ValidatorsName;
(function (ValidatorsName) {
    ValidatorsName["requiredField"] = "requiredField";
    ValidatorsName["requiredEmailField"] = "requiredEmailField";
    ValidatorsName["requiredCheck"] = "requiredCheck";
    ValidatorsName["requiredFileInput"] = "requiredFileInput";
    ValidatorsName["requiredSelectField"] = "requiredSelectField";
    ValidatorsName["requiredDateInput"] = "requiredDateInput";
    ValidatorsName["requiredRadio"] = "requiredRadio";
    ValidatorsName["requiredCheckboxGroup"] = "requiredCheckboxGroup";
    ValidatorsName["requiredCheckboxSingle"] = "requiredCheckboxSingle";
})(ValidatorsName || (ValidatorsName = {}));
export function getValidator(list) {
    return (list || [])
        .map(v => {
        if (typeof v === 'string') {
            return validatorFactory(v, null);
        }
        else if (v && v.name) {
            v = v;
            return validatorFactory(v.name, v.options);
        }
        else {
            return v;
        }
    })
        .reduce(combineValidators, defaultValidator);
}
export function validatorFactory(name, options) {
    options ? options : {};
    switch (name) {
        case ValidatorsName.requiredField:
            return requiredField;
        case ValidatorsName.requiredEmailField:
            return requiredEmailField;
        case ValidatorsName.requiredSelectField:
            return requiredSelectField;
        case ValidatorsName.requiredDateInput:
            return requiredDateInput;
        case ValidatorsName.requiredFileInput:
            return requiredFileInput;
        case ValidatorsName.requiredRadio:
            return requiredRadio;
        case ValidatorsName.requiredCheckboxGroup:
            return requiredCheckboxGroup;
        case ValidatorsName.requiredCheckboxSingle:
            return requiredCheckboxSingle;
        default:
            return defaultValidator;
    }
}
//# sourceMappingURL=validator.factory.js.map
