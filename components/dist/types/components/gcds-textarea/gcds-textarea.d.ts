import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
export declare class GcdsTextarea {
    el: HTMLElement;
    internals: ElementInternals;
    private initialValue?;
    private shadowElement?;
    _validator: Validator<string>;
    /**
     * Props
     */
    /**
     * Sets the maxlength attribute for the textarea element.
     */
    characterCount?: number;
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
     * Array of validators
     */
    validator: Array<string | ValidatorEntry | Validator<string>>;
    validateValidator(): void;
    /**
     * Set event to call validator
     */
    validateOn: 'blur' | 'submit' | 'other';
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
    gcdsChange: EventEmitter;
    /**
     * Emitted when the textarea has received input.
     */
    gcdsInput: EventEmitter;
    private handleInput;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
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
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentWillUpdate(): void;
    render(): any;
}
