import { isValidDate, isValidDay } from "../../utils/utils";
import { validationErrors } from "../../utils/i18n/validation-errors";
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const requiredField = {
    validate: (value) => {
        return {
            valid: value != null && value.trim() != '',
            reason: {
                en: validationErrors.en.required,
                fr: validationErrors.fr.required,
            },
        };
    },
};
export const requiredEmailField = {
    validate: (value) => {
        return {
            valid: value != null &&
                value.trim() != '' &&
                (value.toLowerCase().match(emailPattern) ? true : false),
            reason: {
                en: validationErrors.en.requiredEmail,
                fr: validationErrors.fr.requiredEmail,
            },
        };
    },
};
export const requiredFileInput = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: validationErrors.en.requiredFile,
                fr: validationErrors.fr.requiredFile,
            },
        };
    },
};
export const requiredSelectField = {
    validate: (value) => {
        return {
            valid: value != null && value.trim() != '',
            reason: {
                en: validationErrors.en.requiredSelect,
                fr: validationErrors.fr.requiredSelect,
            },
        };
    },
};
export const requiredDateInput = {
    validate: (date, context) => {
        var _a, _b;
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
        // Backwards compatibility if params.format is not supplied
        const inferredFormat = splitDate.length === 3 ? 'full' : 'compact';
        const format = (_b = (_a = context === null || context === void 0 ? void 0 : context.params) === null || _a === void 0 ? void 0 : _a.format) !== null && _b !== void 0 ? _b : inferredFormat;
        return getDateInputError(dateObject, format);
    },
};
export const getDateInputError = (dateValues, format) => {
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
        errorResponse.reason.en = validationErrors.en.dateInput.all;
        errorResponse.reason.fr = validationErrors.fr.dateInput.all;
        // No day set
    }
    else if (!day && month && year && (format === 'full' || format === 'iso')) {
        errorResponse.errors.day = true;
        errorResponse.reason.en = validationErrors.en.dateInput.missingday;
        errorResponse.reason.fr = validationErrors.fr.dateInput.missingday;
        // No month set
    }
    else if ((day && !month && year) ||
        (!day && !month && year && format === 'compact')) {
        errorResponse.errors.month = true;
        if (format === 'iso') {
            errorResponse.reason.en = validationErrors.en.dateInput.missingmonthinput;
            errorResponse.reason.fr = validationErrors.fr.dateInput.missingmonthinput;
        }
        else {
            errorResponse.reason.en = validationErrors.en.dateInput.missingmonth;
            errorResponse.reason.fr = validationErrors.fr.dateInput.missingmonth;
        }
        // No year set
    }
    else if ((day && month && !year) ||
        (!day && month && !year && format === 'compact')) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = validationErrors.en.dateInput.missingyear;
        errorResponse.reason.fr = validationErrors.fr.dateInput.missingyear;
        // No day and month set
    }
    else if (!day && !month && year) {
        errorResponse.errors.day = true;
        errorResponse.errors.month = true;
        if (format === 'iso') {
            errorResponse.reason.en =
                validationErrors.en.dateInput.missingmonthinputday;
            errorResponse.reason.fr =
                validationErrors.fr.dateInput.missingmonthinputday;
        }
        else {
            errorResponse.reason.en = validationErrors.en.dateInput.missingmonthday;
            errorResponse.reason.fr = validationErrors.fr.dateInput.missingmonthday;
        }
        // No day and year set
    }
    else if (!day && month && !year) {
        errorResponse.errors.day = true;
        errorResponse.errors.year = true;
        errorResponse.reason.en = validationErrors.en.dateInput.missingdayyear;
        errorResponse.reason.fr = validationErrors.fr.dateInput.missingdayyear;
        // No month and year set
    }
    else if (day && !month && !year) {
        errorResponse.errors.year = true;
        errorResponse.errors.month = true;
        if (format === 'iso') {
            errorResponse.reason.en =
                validationErrors.en.dateInput.missingmonthinputyear;
            errorResponse.reason.fr =
                validationErrors.fr.dateInput.missingmonthinputyear;
        }
        else {
            errorResponse.reason.en = validationErrors.en.dateInput.missingmonthyear;
            errorResponse.reason.fr = validationErrors.fr.dateInput.missingmonthyear;
        }
        // Year is formatted incorrectly
    }
    else if (year.toString().length != 4) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = validationErrors.en.dateInput.invalidyearlength;
        errorResponse.reason.fr = validationErrors.fr.dateInput.invalidyearlength;
        // Year format
    }
    else if (Number(year) < 0 || Number(year) > 9999) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = validationErrors.en.dateInput.invalidyear;
        errorResponse.reason.fr = validationErrors.fr.dateInput.invalidyear;
        // Invalid month
    }
    else if (Number(month) < 1 || Number(month) > 12) {
        errorResponse.errors.month = true;
        errorResponse.reason.en = validationErrors.en.dateInput.invalidmonth;
        errorResponse.reason.fr = validationErrors.fr.dateInput.invalidmonth;
        // Invalid day
    }
    else if (!isValidDay(`${year}-${month}-${day}`)) {
        errorResponse.errors.day = true;
        errorResponse.reason.en = validationErrors.en.dateInput.invalidday;
        errorResponse.reason.fr = validationErrors.fr.dateInput.invalidday;
    }
    return errorResponse;
};
export const requiredRadio = {
    validate: (value) => {
        return {
            valid: value != null && value != '',
            reason: {
                en: validationErrors.en.requiredRadio,
                fr: validationErrors.fr.requiredRadio,
            },
        };
    },
};
export const requiredCheckboxGroup = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: validationErrors.en.requiredCheckboxGroup,
                fr: validationErrors.fr.requiredCheckboxGroup,
            },
        };
    },
};
export const requiredCheckboxSingle = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: validationErrors.en.requiredCheckboxSingle,
                fr: validationErrors.fr.requiredCheckboxSingle,
            },
        };
    },
};
