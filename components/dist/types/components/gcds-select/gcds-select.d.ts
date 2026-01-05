import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
/**
 * A select provides a large list of options for single selection.
 *
 * @slot default - Slot for options and option groups.
 */
export declare class GcdsSelect {
    el: HTMLElement;
    internals: ElementInternals;
    private initialValue?;
    private shadowElement?;
    private selectTitle;
    _validator: Validator<string>;
    /**
     * Props
     */
    /**
     * Id attribute for a select element.
     */
    selectId: string;
    /**
     * Form field label.
     */
    label: string;
    /**
     * Specifies if the label is hidden or not.
     */
    hideLabel?: boolean;
    /**
     * Name attribute for select form element.
     */
    name: string;
    /**
     * Specifies if a form field is required or not.
     */
    required?: boolean;
    /**
     * Specifies if a select element is disabled or not.
     */
    disabled?: boolean;
    validateDisabledSelect(): void;
    /**
     * The default value is an optional value that gets displayed before the user selects an option.
     */
    defaultValue?: string;
    /**
     * If true, the select will be focused on component render
     */
    autofocus: boolean;
    /**
     * The ID of the form that the select field belongs to.
     */
    form?: string;
    /**
     * String to have autocomplete enabled.
     */
    autocomplete?: string;
    /**
     * Value for a select element.
     */
    value?: string;
    watchValue(val: any): void;
    /**
     * Error message for an invalid select element.
     */
    errorMessage?: string;
    validateErrorMessage(): void;
    /**
     * Hint displayed below the label.
     */
    hint?: string;
    /**
     * Read-only property of the select, returns a ValidityState object that represents the validity states this element is in.
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
     * Specifies if the select is invalid.
     */
    hasError: boolean;
    validateHasError(): void;
    /**
     * Set additional HTML attributes not available in component properties
     */
    inheritedAttributes: Object;
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * List of passed options
     */
    options: Element[];
    /**
     * Watch HTML attribute aria-invalid to inherit changes
     */
    ariaInvalidWatcher(): void;
    ariaDescriptiondWatcher(): void;
    /**
     * Events
     */
    /**
     * Emitted when the select value has changed.
     */
    gcdsChange: EventEmitter<string>;
    /**
     * Emitted when the select has received input.
     */
    gcdsInput: EventEmitter<string>;
    private handleInput;
    /**
     * Emitted when the select has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the select loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
    /**
     * Check the validity of gcds-select
     */
    checkValidity(): Promise<boolean>;
    /**
     * Get validationMessage of gcds-select
     */
    getValidationMessage(): Promise<string>;
    /**
     * Emitted when the select has a validation error.
     */
    gcdsError: EventEmitter<object>;
    /**
     * Emitted when the select has a validation error.
     */
    gcdsValid: EventEmitter<object>;
    submitListener(e: any): void;
    /**
     * Check if an option is selected or value matches an option's value
     */
    private checkValueOrSelected;
    private checkIfValidValue;
    formResetCallback(): void;
    formStateRestoreCallback(state: any): void;
    /**
     * Update gcds-select's validity using internal select
     */
    private updateValidity;
    observeOptions(): void;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): Promise<void>;
    render(): any;
}
