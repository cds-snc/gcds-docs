import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
/**
 * A text area is a space to enter long-form information in response to a question or instruction.
 */
export declare class GcdsTextarea {
    el: HTMLElement;
    internals: ElementInternals;
    private initialValue?;
    private shadowElement?;
    private htmlValidationErrors;
    private textareaTitle;
    _validator: Validator<string>;
    /**
     * Props
     */
    /**
     * If true, the input will be focused on component render
     */
    autofocus: boolean;
    /**
     * Sets the maxlength attribute for the textarea element.
     */
    characterCount?: number;
    /**
     * The minimum number of characters that the input field can accept.
     */
    minlength?: number;
    /**
     * Defines width for textarea cols (the min-width for textarea's is 50%).
     */
    cols?: number;
    /**
     * Specifies if a textarea element is disabled or not.
     */
    disabled?: boolean;
    validateDisabledTextarea(): void;
    /**
     * Error message for an invalid textarea element.
     */
    errorMessage?: string;
    validateErrorMessage(): void;
    /**
     * Specifies if the label is hidden or not.
     */
    hideLabel?: boolean;
    /**
     * Hint displayed below the label and above the textarea field.
     */
    hint?: string;
    /**
     * Form field label
     */
    label: string;
    /**
     * Name attribute for a textarea element.
     */
    name: string;
    /**
     * Specifies if a form field is required or not.
     */
    required?: boolean;
    /**
     * Default value for textarea rows.
     */
    rows?: number;
    /**
     * Id attribute for a textarea element.
     */
    textareaId: string;
    /**
     * Default value for an input element.
     */
    value?: string;
    /**
     * Set value on internal textarea to allow proper resets
     */
    watchValue(val: any): void;
    /**
     * Array of validators
     */
    validator: Array<string | ValidatorEntry | Validator<string>>;
    validateValidator(): void;
    /**
     * Set event to call validator
     */
    validateOn: 'blur' | 'submit' | 'other';
    /**
     * Read-only property of the textarea, returns a ValidityState object that represents the validity states this element is in.
     */
    get validity(): ValidityState;
    /**
     * Set additional HTML attributes not available in component properties
     */
    inheritedAttributes: Object;
    /**
     * Specifies if the textarea is invalid.
     */
    hasError: boolean;
    validateHasError(): void;
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * Events
     */
    /**
     * Emitted when the textarea has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the textarea loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    /**
     * Emitted when the textarea has changed.
     */
    gcdsChange: EventEmitter<string>;
    /**
     * Emitted when the textarea has received input.
     */
    gcdsInput: EventEmitter<string>;
    private handleInput;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
    /**
     * Check the validity of gcds-textarea
     */
    checkValidity(): Promise<boolean>;
    /**
     * Get validationMessage of gcds-textarea
     */
    getValidationMessage(): Promise<string>;
    /**
     * Emitted when the textarea has a validation error.
     */
    gcdsError: EventEmitter<object>;
    /**
     * Emitted when the textarea has a validation error.
     */
    gcdsValid: EventEmitter<object>;
    submitListener(e: any): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: any): void;
    /**
     * Update gcds-textarea's validity using internal textarea validity
     */
    private updateValidity;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    render(): any;
}
