import { EventEmitter } from '../stencil-public-runtime';
import { ValidatorReturn } from '../validators';
export declare function format(label: string): string;
export declare const inheritAttributes: (el: HTMLElement, shadowElement: HTMLElement, attributes?: string[]) => {};
export declare const assignLanguage: (el: HTMLElement) => string;
export declare const closestElement: (selector: any, el: any) => any;
export declare const observerConfig: {
    attributes: boolean;
    attributeOldValue: boolean;
    attributeFilter: string[];
};
export declare const elementGroupCheck: (name: any) => boolean;
export declare const emitEvent: (e: Event, customEvent: EventEmitter, value?: unknown) => boolean;
export declare const logError: (name: string, errorArr: string[], optionalAttrsArrToRemove?: string[]) => void;
export declare const handleErrors: (errors: string[], propertyName: string, property: string | boolean | object, external?: boolean) => string[];
export declare const isValid: (errors: string[], requiredProps: string[]) => boolean;
export declare const isValidDate: (dateString: string, forceFormat?: "full" | "compact") => boolean;
export declare function isValidDay(date: any): boolean;
export declare function handleValidationResult(element: HTMLGcdsInputElement | HTMLGcdsDateInputElement | HTMLGcdsRadiosElement | HTMLGcdsCheckboxesElement | HTMLGcdsFileUploaderElement | HTMLGcdsSelectElement | HTMLGcdsTextareaElement, validationResult: ValidatorReturn, label: string, errorEv: EventEmitter, validEv: EventEmitter, lang: string, errors?: object): object;
/**
 * Format HTML error message based off assigned attributes
 * This lets us assign custom error messages
 *
 * @param error - the HTML validation error type
 * @param lang - the current language
 * @param el - the gcds form element that is being validated
 */
export declare function formatHTMLErrorMessage(error: any, lang: any, el: any): any;
/**
 * Compare validity of radio buttons/checkboxes in a group
 * @param elements - array of HTMLInputElements in the group
 * @returns validity state object
 */
export declare function validateRadioCheckboxGroup(elements: HTMLInputElement[]): ValidityState;
