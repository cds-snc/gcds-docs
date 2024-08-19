import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
export declare class GcdsInput {
    el: HTMLElement;
    internals: ElementInternals;
    private initialValue?;
    private shadowElement?;
    _validator: Validator<string>;
    /**
     * Props
     */
    /**
     * Specifies if an input element is disabled or not.
     */
    disabled?: boolean;
    validateDisabledInput(): void;
    /**
     * Error message for an invalid input element.
     */
    errorMessage?: string;
    validateErrorMessage(): void;
    /**
     * Specifies if the label is hidden or not.
     */
    hideLabel?: boolean;
    /**
     * Hint displayed below the label and above the input field.
     */
    hint?: string;
    /**
     * Id  attribute for an input element.
     */
    inputId: string;
    /**
     * Name attribute for an input element.
     */
    name: string;
    /**
     * Form field label
     */
    label: string;
    /**
     * Specifies if a form field is required or not.
     */
    required?: boolean;
    /**
     * Size attribute for an input element.
     * Defines max-length as well.
     */
    size?: number;
    /**
     * Set Input types
     */
    type?: 'email' | 'number' | 'password' | 'search' | 'text' | 'url';
    /**
     * Default value for an input element.
     */
    value?: string;
    /**
     * String to have autocomplete enabled
     */
    autocomplete?: string;
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
     * Specifies if the input is invalid.
     */
    hasError: boolean;
    validateHasError(): void;
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * Watch HTML attributes to inherit changes
     */
    ariaInvalidWatcher(): void;
    ariaDescriptiondWatcher(): void;
    /**
     * Events
     */
    /**
     * Emitted when the input has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the input loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    /**
     * Emitted when the element has received input.
     */
    gcdsInput: EventEmitter;
    private handleInput;
    /**
     * Emitted when the input has changed.
     */
    gcdsChange: EventEmitter;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
    /**
     * Emitted when the input has a validation error.
     */
    gcdsError: EventEmitter<object>;
    /**
     * Emitted when the input has a validation error.
     */
    gcdsValid: EventEmitter<object>;
    submitListener(e: any): void;
    keyDownListener(e: any): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: any): void;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentWillUpdate(): void;
    render(): any;
}
