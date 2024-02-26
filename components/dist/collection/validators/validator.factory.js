import { defaultValidator, combineValidators, } from "./validator";
import { requiredField, requiredEmailField, requiredFileInput, requiredSelectField, } from "./input-validators/input-validators";
import { requiredCheck } from "./checkbox-validators/checkbox-validators";
import { requiredFieldset } from "./fieldset-validators/fieldset-validators";
export var ValidatorsName;
(function (ValidatorsName) {
    ValidatorsName["requiredField"] = "requiredField";
    ValidatorsName["requiredEmailField"] = "requiredEmailField";
    ValidatorsName["requiredCheck"] = "requiredCheck";
    ValidatorsName["requiredFieldset"] = "requiredFieldset";
    ValidatorsName["requiredFileInput"] = "requiredFileInput";
    ValidatorsName["requiredSelectField"] = "requiredSelectField";
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
        case ValidatorsName.requiredCheck:
            return requiredCheck;
        case ValidatorsName.requiredFieldset:
            return requiredFieldset;
        case ValidatorsName.requiredFileInput:
            return requiredFileInput;
        default:
            return defaultValidator;
    }
}
//# sourceMappingURL=validator.factory.js.map
