import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
export declare class GcdsCheckbox {
    el: HTMLElement;
    private shadowElement?;
    _validator: Validator<unknown>;
    /**
     * Props
     */
    /**
     * Id attribute for an input element.
     */
    checkboxId: string;
    /**
     * Form field label
     */
    label: string;
    /**
     * Name attribute for an input element.
     */
    name: string;
    /**
     * Specifies if a form field is required or not.
     */
    required: boolean;
    /**
     * Specifies if an input element is disabled or not.
     */
    disabled: boolean;
    validateDisabledCheckbox(): void;
    /**
     * Value for an input element.
     */
    value: string;
    /**
     * Specifies if an input element is checked.
     */
    checked: boolean;
    /**
     * Error message for an invalid input element.
     */
    errorMessage: string;
    validateErrorMessage(): void;
    /**
     * Hint displayed below the label.
     */
    hint: string;
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
     * Event listener for gcds-fieldset errors
     */
    gcdsGroupError(e: any): void;
    gcdsGroupErrorClear(e: any): void;
    /**
     * Custom callback function on click event
     */
    clickHandler: Function;
    /**
     * Custom callback function on focus event
     */
    focusHandler: Function;
    /**
     * Custom callback function on blur event
     */
    blurHandler: Function;
    /**
     * State to handle when errors are passed down to component
     */
    parentError: string;
    /**
     * Set additional HTML attributes not available in component properties
     */
    inheritedAttributes: Object;
    /**
     * Specifies if the checkbox is invalid.
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
     * Emitted when the checkbox has focus.
     */
    gcdsFocus: EventEmitter<void>;
    private onFocus;
    /**
     * Emitted when the checkbox loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    /**
     * Update value based on user input.
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
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentWillUpdate(): void;
    private onChange;
    render(): any;
}
