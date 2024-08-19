import { Validator } from '../validator';
export declare const requiredField: Validator<string>;
export declare const requiredEmailField: Validator<string>;
export declare const requiredFileInput: Validator<FileList>;
export declare const requiredSelectField: Validator<string>;
export declare const dateInputErrorMessage: {
    en: {
        all: string;
        missingmonth: string;
        missingyear: string;
        missingday: string;
        missingmonthday: string;
        missingmonthyear: string;
        missingdayyear: string;
        invalidyearlength: string;
        invalidyear: string;
        invalidday: string;
    };
    fr: {
        all: string;
        missingmonth: string;
        missingyear: string;
        missingday: string;
        missingmonthday: string;
        missingmonthyear: string;
        missingdayyear: string;
        invalidyearlength: string;
        invalidyear: string;
        invalidday: string;
    };
};
export declare const requiredDateInput: Validator<string>;
