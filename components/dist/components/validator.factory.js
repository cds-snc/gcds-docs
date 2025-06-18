import { d as isValidDate } from './utils.js';

const defaultValidator = {
    validate: () => {
        return {
            valid: true,
            reason: {
                en: '',
                fr: '',
            },
        };
    },
};
function combineValidators(v1, v2) {
    return {
        validate: (x) => {
            const res1 = v1.validate(x);
            const res2 = v2.validate(x);
            if ((typeof res1 === 'object' && !res1.valid) ||
                (typeof res1 === 'boolean' && !res1)) {
                return typeof res1 === 'object'
                    ? res1
                    : { valid: res1, reason: v1.errorMessage };
            }
            else if ((typeof res2 === 'object' && !res2.valid) ||
                (typeof res2 === 'boolean' && !res2)) {
                return typeof res2 === 'object'
                    ? res2
                    : { valid: res2, reason: v2.errorMessage };
            }
            else {
                return {
                    valid: true,
                    reason: {
                        en: '',
                        fr: '',
                    },
                };
            }
        },
    };
}
function requiredValidator(element, type, subtype) {
    if (element.required) {
        switch (type) {
            // Components all validate the "value" property
            case 'input':
                switch (subtype) {
                    case 'email':
                        if (element.validator) {
                            element.validator.unshift('requiredEmailField');
                        }
                        else {
                            element.validator = ['requiredEmailField'];
                        }
                        break;
                    default:
                        if (element.validator) {
                            element.validator.unshift('requiredField');
                        }
                        else {
                            element.validator = ['requiredField'];
                        }
                        break;
                }
                break;
            case 'select':
                if (element.validator) {
                    element.validator.unshift('requiredSelectField');
                }
                else {
                    element.validator = ['requiredSelectField'];
                }
                break;
            case 'textarea':
                if (element.validator) {
                    element.validator.unshift('requiredField');
                }
                else {
                    element.validator = ['requiredField'];
                }
                break;
            case 'file':
                if (element.validator) {
                    element.validator.unshift('requiredFileInput');
                }
                else {
                    element.validator = ['requiredFileInput'];
                }
                break;
            case 'date-input':
                if (element.validator) {
                    element.validator.unshift('requiredDateInput');
                }
                else {
                    element.validator = ['requiredDateInput'];
                }
                break;
            case 'radio':
                if (element.validator) {
                    element.validator.unshift('requiredRadio');
                }
                else {
                    element.validator = ['requiredRadio'];
                }
                break;
            case 'checkboxGroup':
                if (element.validator) {
                    element.validator.unshift('requiredCheckboxGroup');
                }
                else {
                    element.validator = ['requiredCheckboxGroup'];
                }
                break;
            case 'checkboxSingle':
                if (element.validator) {
                    element.validator.unshift('requiredCheckboxSingle');
                }
                else {
                    element.validator = ['requiredCheckboxSingle'];
                }
                break;
        }
    }
}
/*
Example of parameter validator

export function getLengthValidator(min: number, max: number): Validator<string> {
    // Create errorMessage object
    let errorMessage = {};
    if (min && max) {
        errorMessage["en"] = `You must enter between ${min} and ${max} characters`;
        errorMessage["fr"] = `French You must enter between ${min} and ${max} characters`;
    } else if (min) {
        errorMessage["en"] = `You must enter at least ${min} characters`;
        errorMessage["fr"] = `French You must enter at least ${min} characters`;
    } else if (max) {
        errorMessage["en"] = `You must enter less than ${max} characters`;
        errorMessage["fr"] = `French You must enter less than ${max} characters`;
    }
    return {
        validate: (value: string) => {
            value = value || '';
            if (min && max) {
                return min <= value.length && value.length <= max;
            }
            if (min) {
                return min <= value.length;
            }
            if (max) {
                return value.length <= max;
            }
            return true;
        },
        errorMessage
    };
}
*/

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const requiredField = {
    validate: (value) => {
        return {
            valid: value != null && value.trim() != '',
            reason: {
                en: 'Enter information to continue.',
                fr: 'Saisissez des renseignements pour continuer.',
            },
        };
    },
};
const requiredEmailField = {
    validate: (value) => {
        return {
            valid: value != null &&
                value.trim() != '' &&
                (value.toLowerCase().match(emailPattern) ? true : false),
            reason: {
                en: 'Enter a valid email address to continue. Use a standard format. Example: name@address.ca.',
                fr: 'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
            },
        };
    },
};
const requiredFileInput = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: 'You must upload a file to continue.',
                fr: 'Vous devez téléverser un fichier pour continuer.',
            },
        };
    },
};
const requiredSelectField = {
    validate: (value) => {
        return {
            valid: value != null && value.trim() != '',
            reason: {
                en: 'Choose an option to continue.',
                fr: 'Choisissez une option pour continuer.',
            },
        };
    },
};
/*
 * Date input validators
 */
const dateInputErrorMessage = {
    en: {
        all: 'Enter the date.',
        missingmonth: 'Select the month.',
        missingyear: 'Enter the year.',
        missingday: 'Enter the day.',
        missingmonthday: 'Select the month and enter the day.',
        missingmonthyear: 'Select the month and enter the year.',
        missingdayyear: 'Enter the day and year.',
        invalidyearlength: 'Year must be 4 digits.',
        invalidyear: 'Enter a valid year.',
        invalidday: 'Enter a valid day.',
    },
    fr: {
        all: 'Saisissez la date.',
        missingmonth: 'Sélectionnez un mois.',
        missingyear: "Saisissez l'année.",
        missingday: 'Saisissez le jour.',
        missingmonthday: 'Saisissez le jour et sélectionnez un mois.',
        missingmonthyear: "Sélectionnez un mois et saisissez l'année.",
        missingdayyear: "Saisissez le jour et l'année.",
        invalidyearlength: "L'année doit inclure 4 chiffres.",
        invalidyear: 'Entrez une année valide.',
        invalidday: 'Saisissez un jour valide.',
    },
};
const requiredDateInput = {
    validate: (date) => {
        if (isValidDate(date)) {
            return {
                valid: true,
                reason: {
                    en: '',
                    fr: '',
                },
            };
        }
        const splitDate = date.split('-');
        const dateObject = {
            day: splitDate[2],
            month: splitDate[1],
            year: splitDate[0],
        };
        const format = splitDate.length === 3 ? 'full' : 'compact';
        const error = getDateInputError(dateObject, format);
        return error;
    },
};
const getDateInputError = (dateValues, format) => {
    const { day, month, year } = dateValues;
    const errorResponse = {
        valid: false,
        errors: {
            day: false,
            month: false,
            year: false,
        },
        reason: {
            en: '',
            fr: '',
        },
    };
    // No values set
    if (!day && !month && !year) {
        errorResponse.errors.day = true;
        errorResponse.errors.month = true;
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.all;
        errorResponse.reason.fr = dateInputErrorMessage.fr.all;
        // No day set
    }
    else if (!day && month && year) {
        errorResponse.errors.day = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingday;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingday;
        // No month set
    }
    else if ((day && !month && year) ||
        (!day && !month && year && format === 'compact')) {
        errorResponse.errors.month = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingmonth;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonth;
        // No year set
    }
    else if ((day && month && !year) ||
        (!day && month && !year && format === 'compact')) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingyear;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingyear;
        // No day and month set
    }
    else if (!day && !month && year) {
        errorResponse.errors.day = true;
        errorResponse.errors.month = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingmonthday;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonthday;
        // No day and year set
    }
    else if (!day && month && !year) {
        errorResponse.errors.day = true;
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingdayyear;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingdayyear;
        // No month and year set
    }
    else if (day && !month && !year) {
        errorResponse.errors.year = true;
        errorResponse.errors.month = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingmonthyear;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonthyear;
        // Year is formatted incorrectly
    }
    else if (year.length != 4) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.invalidyearlength;
        errorResponse.reason.fr = dateInputErrorMessage.fr.invalidyearlength;
        // Year format
    }
    else if (year < 0 || year > 9999) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.invalidyear;
        errorResponse.reason.fr = dateInputErrorMessage.fr.invalidyear;
        // Invalid day
    }
    else {
        errorResponse.errors.day = true;
        errorResponse.reason.en = dateInputErrorMessage.en.invalidday;
        errorResponse.reason.fr = dateInputErrorMessage.fr.invalidday;
    }
    return errorResponse;
};
const requiredRadio = {
    validate: (value) => {
        return {
            valid: value != null && value != '',
            reason: {
                en: 'Choose an option to continue.',
                fr: 'Choisissez une option pour continuer.',
            },
        };
    },
};
const requiredCheckboxGroup = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: 'Choose an option to continue.',
                fr: 'Choisissez une option pour continuer.',
            },
        };
    },
};
const requiredCheckboxSingle = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: 'You must check the box to continue.',
                fr: 'Vous devez cocher la case pour continuer.',
            },
        };
    },
};

var ValidatorsName;
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
function getValidator(list) {
    return (list || [])
        .map(v => {
        if (typeof v === 'string') {
            return validatorFactory(v);
        }
        else if (v && v.name) {
            v = v;
            return validatorFactory(v.name);
        }
        else {
            return v;
        }
    })
        .reduce(combineValidators, defaultValidator);
}
function validatorFactory(name, options) {
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

export { defaultValidator as d, getValidator as g, requiredValidator as r };

//# sourceMappingURL=validator.factory.js.map