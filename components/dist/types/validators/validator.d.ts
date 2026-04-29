/**
 * This was for backwards compatibility with 0.35.0
 * @deprecated This type will be removed in the next major release.
 * Use `Validator` instead.
 */
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
export type ValidationContext = {
    component?: string;
    lang?: 'en' | 'fr';
    params?: Record<string, unknown>;
};
export interface Validator<A> {
    validate: (x: A, context?: ValidationContext) => ValidatorReturn;
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
