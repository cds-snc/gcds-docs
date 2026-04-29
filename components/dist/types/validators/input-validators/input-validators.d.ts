import { Validator } from '../validator';
export declare const requiredField: Validator<string>;
export declare const requiredEmailField: Validator<string>;
export declare const requiredFileInput: Validator<FileList>;
export declare const requiredSelectField: Validator<string>;
export declare const dateInputErrorMessage: {
    en: {
        all: string;
        missingmonthinput: string;
        missingmonth: string;
        missingyear: string;
        missingday: string;
        missingmonthday: string;
        missingmonthyear: string;
        missingmonthinputday: string;
        missingmonthinputyear: string;
        missingdayyear: string;
        invalidyearlength: string;
        invalidyear: string;
        invalidmonth: string;
        invalidday: string;
    };
    fr: {
        all: string;
        missingmonthinput: string;
        missingmonth: string;
        missingyear: string;
        missingday: string;
        missingmonthday: string;
        missingmonthyear: string;
        missingmonthinputday: string;
        missingmonthinputyear: string;
        missingdayyear: string;
        invalidyearlength: string;
        invalidyear: string;
        invalidmonth: string;
        invalidday: string;
    };
};
export declare const requiredDateInput: Validator<string>;
export declare const getDateInputError: (dateValues: {
    day: string | undefined;
    month: string | undefined;
    year: string | undefined;
}, format: "full" | "compact" | "iso") => {
    valid: boolean;
    errors: {
        day: boolean;
        month: boolean;
        year: boolean;
    };
    reason: {
        en: string;
        fr: string;
    };
};
export declare const requiredRadio: Validator<string>;
export declare const requiredCheckboxGroup: Validator<Array<string>>;
export declare const requiredCheckboxSingle: Validator<Array<string>>;
