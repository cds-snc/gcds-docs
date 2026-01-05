import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry, ValidatorOld } from '../../validators';
import { SuggestionOption } from './suggestion-option';
/**
 * An input is a space to enter short-form information in response to a question or instruction.
 */
export declare class GcdsInput {
    el: HTMLElement;
    internals: ElementInternals;
    private initialValue?;
    private shadowElement?;
    private htmlValidationErrors;
    private inputTitle;
    private suggestionsArr;
    _validator: Validator<string> | ValidatorOld<string>;
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
     * Size attribute for an input element to provide a visual indication
     * of the expected text length to the user.
     */
    size?: number;
    /**
     * Set Input types
     */
    type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
    inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    /**
     * Default value for an input element.
     */
    value?: string;
    watchValue(val: any): void;
    /**
     * String to have autocomplete enabled.
     */
    autocomplete?: string;
    /**
     * If true, the input will be focused on component render
     */
    autofocus: boolean;
    /**
     * The ID of the form that the input field belongs to.
     */
    form?: string;
    /**
     * The maximum value that the input field can accept.
     * Only applies to number input type.
     */
    max?: number | string;
    /**
     * The maximum number of characters that the input field can accept.
     */
    maxlength?: number;
    /**
     * The minimum value that the input field can accept.
     * Only applies to number input type.
     */
    min?: number | string;
    /**
     * The minimum number of characters that the input field can accept.
     */
    minlength?: number;
    /**
     * Specifies a regular expression the form control's value should match.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
     */
    pattern?: string;
    /**
     * If true, the input field cannot be modified.
     */
    readonly?: boolean;
    /**
     * A number that specifies the granularity that the value must adhere to.
     * Valid for number type.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
     */
    step?: number | 'any';
    /**
     * Read-only property of the input, returns a ValidityState object that represents the validity states this element is in.
     */
    get validity(): ValidityState;
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
     * Array of suggestion options. This creates a datalist element with options to represent permissible or recommended options available to choose from.
     */
    suggestions?: string | Array<SuggestionOption>;
    validateSuggestions(): void;
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
    gcdsInput: EventEmitter<string>;
    /**
     * Emitted when a suggestion is selected.
     */
    gcdsSuggestionSelected: EventEmitter<string>;
    /**
     * Handling input and change events on input
     */
    private handleInput;
    /**
     * Emitted when the input has changed.
     */
    gcdsChange: EventEmitter<string>;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
    /**
     * Check the validity of gcds-input
     */
    checkValidity(): Promise<boolean>;
    /**
     * Get validationMessage of gcds-input
     */
    getValidationMessage(): Promise<string>;
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
    /**
     * Update gcds-input's validity using internal input
     */
    private updateValidity;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    render(): any;
}
