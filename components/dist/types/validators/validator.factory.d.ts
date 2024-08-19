import { Validator, ValidatorEntry } from './validator';
export declare enum ValidatorsName {
    requiredField = "requiredField",
    requiredEmailField = "requiredEmailField",
    requiredCheck = "requiredCheck",
    requiredFieldset = "requiredFieldset",
    requiredFileInput = "requiredFileInput",
    requiredSelectField = "requiredSelectField",
    requiredDateInput = "requiredDateInput"
}
export declare function getValidator<A>(list: Array<string | ValidatorEntry | Validator<A>>): Validator<A>;
export declare function validatorFactory(name: string, options: any): Validator<any>;
