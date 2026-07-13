/**
 * Centralized validation error messages.
 *
 * Single source of truth for all validation error messages used
 * across components
 *
 * Messages are grouped by language (`en`, `fr`) at the top level. For
 * keys that expose multiple message variants (e.g. `typeMismatch`,
 * `dateInput`), the value is a nested object keyed by variant.
 *
 * To add or update a validation message, edit it here and reference it
 * from the validators / utilities rather than hard-coding strings.
 */
export declare const validationErrors: {
    readonly en: {
        readonly valueMissing: "Enter information to continue.";
        readonly typeMismatch: {
            readonly email: "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.";
            readonly url: "Enter a URL in the specified format to continue.";
        };
        readonly patternMismatch: "Use the specified format to continue.";
        readonly tooLong: "Enter {max} characters or less to continue. You've entered {current} characters.";
        readonly tooShort: "Enter at least {min} characters to continue. You've entered {current} characters.";
        readonly rangeUnderflow: "Enter a number that's {min} or more to continue.";
        readonly rangeOverflow: "Enter a number that's {max} or less to continue.";
        readonly stepMismatch: "Enter a number from the specified options to continue. The closest numbers to what you entered are {lower} and {upper}. ";
        readonly badInput: "Enter a number to continue.";
        readonly required: "Enter information to continue.";
        readonly requiredEmail: "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.";
        readonly requiredFile: "You must upload a file to continue.";
        readonly requiredSelect: "Choose an option to continue.";
        readonly requiredRadio: "Choose an option to continue.";
        readonly requiredCheckboxGroup: "Choose an option to continue.";
        readonly requiredCheckboxSingle: "You must check the box to continue.";
        readonly dateInput: {
            readonly all: "Enter the date.";
            readonly missingmonthinput: "Enter the month.";
            readonly missingmonth: "Select the month.";
            readonly missingyear: "Enter the year.";
            readonly missingday: "Enter the day.";
            readonly missingmonthday: "Select the month and enter the day.";
            readonly missingmonthyear: "Select the month and enter the year.";
            readonly missingmonthinputday: "Enter the month and day.";
            readonly missingmonthinputyear: "Enter the year and month.";
            readonly missingdayyear: "Enter the day and year.";
            readonly invalidyearlength: "Year must be 4 digits.";
            readonly invalidyear: "Enter a valid year.";
            readonly invalidmonth: "Enter a valid month.";
            readonly invalidday: "Enter a valid day.";
        };
    };
    readonly fr: {
        readonly valueMissing: "Saisissez des renseignements pour continuer.";
        readonly typeMismatch: {
            readonly email: "Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.";
            readonly url: "Saisissez une adresse Web dans le format indiqué pour continuer.";
        };
        readonly patternMismatch: "Utilisez le format indiqué pour continuer.";
        readonly tooLong: "Saisissez {max} caractères ou moins pour continuer. Vous avez saisi {current} caractères.";
        readonly tooShort: "Saisissez au moins {min} caractères pour continuer. Vous avez saisi {current} caractères.";
        readonly rangeUnderflow: "Saisissez un nombre égal ou supérieur à {min} pour continuer.";
        readonly rangeOverflow: "Saisissez un nombre égal ou inférieur à {max} pour continuer.";
        readonly stepMismatch: "Saisissez un nombre parmi les options disponibles pour continuer. Les nombres les plus proches de celui que vous avez saisi sont {lower} et {upper}.";
        readonly badInput: "Entrez un nombre pour continuer.";
        readonly required: "Saisissez des renseignements pour continuer.";
        readonly requiredEmail: "Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.";
        readonly requiredFile: "Vous devez téléverser un fichier pour continuer.";
        readonly requiredSelect: "Choisissez une option pour continuer.";
        readonly requiredRadio: "Choisissez une option pour continuer.";
        readonly requiredCheckboxGroup: "Choisissez une option pour continuer.";
        readonly requiredCheckboxSingle: "Vous devez cocher la case pour continuer.";
        readonly dateInput: {
            readonly all: "Saisissez la date.";
            readonly missingmonthinput: "Saisissez le mois.";
            readonly missingmonth: "Sélectionnez un mois.";
            readonly missingyear: "Saisissez l'année.";
            readonly missingday: "Saisissez le jour.";
            readonly missingmonthday: "Saisissez le jour et sélectionnez un mois.";
            readonly missingmonthyear: "Sélectionnez un mois et saisissez l'année.";
            readonly missingmonthinputday: "Saisissez le mois et le jour.";
            readonly missingmonthinputyear: "Saisissez l'année et le mois.";
            readonly missingdayyear: "Saisissez le jour et l'année.";
            readonly invalidyearlength: "L'année doit inclure 4 chiffres.";
            readonly invalidyear: "Saisissez une année valide.";
            readonly invalidmonth: "Saisissez un mois valide.";
            readonly invalidday: "Saisissez un jour valide.";
        };
    };
};
/**
 * Lookup mapping each form component to the validation error message keys
 * (top-level keys of `validationErrors.en` / `validationErrors.fr`) it can
 * surface. Useful for documentation, testing, and ensuring this file stays
 * in sync with the components that depend on it.
 */
export declare const componentValidationErrors: {
    readonly 'gcds-input': readonly ["valueMissing", "typeMismatch", "patternMismatch", "tooLong", "tooShort", "rangeUnderflow", "rangeOverflow", "stepMismatch", "badInput", "required", "requiredEmail"];
    readonly 'gcds-textarea': readonly ["valueMissing", "patternMismatch", "tooLong", "tooShort", "required"];
    readonly 'gcds-select': readonly ["valueMissing", "requiredSelect"];
    readonly 'gcds-file-uploader': readonly ["valueMissing", "requiredFile"];
    readonly 'gcds-radios': readonly ["requiredRadio"];
    readonly 'gcds-checkboxes': readonly ["requiredCheckboxGroup", "requiredCheckboxSingle"];
    readonly 'gcds-date-input': readonly ["rangeUnderflow", "rangeOverflow", "dateInput"];
};
