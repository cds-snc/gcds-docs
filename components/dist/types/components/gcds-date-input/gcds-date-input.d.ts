import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
/**
 * A date input is a space to enter a known date.
 */
export declare class GcdsDateInput {
    el: HTMLElement;
    internals: ElementInternals;
    private initialValue?;
    private fieldset?;
    private yearInput?;
    private monthSelect?;
    private dayInput?;
    private htmlValidationErrors;
    _validator: Validator<string>;
    /**
     * Name attribute for the date input.
     */
    name: string;
    validateName(): void;
    /**
     * Fieldset legend
     */
    legend: string;
    validateLegend(): void;
    /**
     * Set this property to full to show month, day, and year form elements. Set it to compact to show only the month and year form elements.
     */
    format: 'full' | 'compact';
    validateFormat(): void;
    /**
     * Combined date value from the two/three form elements. Format: YYYY-MM-DD or YYYY-MM
     */
    value?: string;
    watchValue(): void;
    /**
     * Specifies if a form field is required or not.
     */
    required?: boolean;
    /**
     * Hint displayed below the legend and above form fields.
     */
    hint?: string;
    /**
     * Error message displayed below the legend and above form fields.
     */
    errorMessage?: string;
    /**
     * Specifies if the date input is disabled or not.
     */
    disabled?: boolean;
    /**
     * If true, the date-input will be focused on component render
     */
    autofocus: boolean;
    /**
     * The maximum date that the date-input field can accept.
     * Format: YYYY-MM-DD or YYYY-MM
     */
    max?: string;
    /**
     * The minimum date that the date-input field can accept.
     * Format: YYYY-MM-DD or YYYY-MM
     */
    min?: string;
    /**
     * The ID of the form that the date-input field belongs to.
     */
    form?: string;
    /**
     * Read-only property of the date-input, returns a ValidityState object that represents the validity states this element is in.
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
     * States
     */
    /**
     * State to track individual month value
     */
    monthValue: string;
    /**
     * State to track individual month value
     */
    dayValue: string;
    /**
     * State to track individual month value
     */
    yearValue: string;
    /**
     * Specifies if the date input is invalid.
     */
    hasError: object;
    /**
     * State to track validation on properties
     * Contains a list of properties that have an error associated with them
     */
    errors: Array<string>;
    /**
     * Language of rendered date input
     */
    lang: string;
    /**
     * Events
     */
    /**
     * Emitted when a date-input has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when a date-input loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    /**
     * Emitted when the date-input has received input. Contains the new value in the event detail.
     */
    gcdsInput: EventEmitter<string>;
    /**
     * Emitted when a date-input has changed. Contains the new value in the event detail.
     */
    gcdsChange: EventEmitter<string>;
    /**
     * Emitted when a date-input has a validation error.
     */
    gcdsError: EventEmitter<object>;
    /**
     * Emitted when a date-input has validated.
     */
    gcdsValid: EventEmitter<object>;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
    /**
     * Check the validity of gcds-date-input
     */
    checkValidity(): Promise<boolean>;
    /**
     * Get validationMessage of gcds-date-input
     */
    getValidationMessage(): Promise<string>;
    submitListener(e: any): Promise<void>;
    formResetCallback(): void;
    formStateRestoreCallback(state: any): void;
    private checkAndValidateValidity;
    /**
     * Update gcds-date-input's validity using internal form elements
     */
    private updateValidity;
    updateLang(): void;
    private handleInput;
    /**
     * Logic to combine all input values together based on format
     */
    private setValue;
    /**
     * Split value into parts depending on format
     */
    private splitFormValue;
    private validateRequiredProps;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): Promise<void>;
    render(): any;
}
