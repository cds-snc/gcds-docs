export interface Validator<A> {
    validate: (x: A) => any;
    errorMessage?: object;
}
export interface ValidatorEntry {
    name: string;
    options?: any;
}
export interface GcdsErrorInterface {
    id: string;
    message: string;
}
export declare const defaultValidator: Validator<any>;
export declare function combineValidators<A>(v1: Validator<A>, v2: Validator<A>): Validator<A>;
export declare function requiredValidator(element: any, type: any, subtype?: any): void;
