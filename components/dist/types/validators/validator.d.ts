export interface ValidatorOld<A> {
    validate: (x: A) => any;
    errorMessage?: object;
}
export interface ValidatorReturn {
    valid: boolean;
    reason: {
        en: string;
        fr: string;
    };
    errors?: object;
}
export interface Validator<A> {
    validate: (x: A) => ValidatorReturn;
}
export interface ValidatorEntry {
    name: string;
    options?: unknown;
}
export interface GcdsErrorInterface {
    id: string;
    message: string;
}
export declare const defaultValidator: Validator<any>;
export declare function combineValidators<A>(v1: Validator<A> | ValidatorOld<A>, v2: Validator<A> | ValidatorOld<A>): Validator<A>;
export declare function requiredValidator(element: any, type: any, subtype?: any): void;
