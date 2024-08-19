import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
export declare class GcdsDateInput {
    el: HTMLElement;
    internals: ElementInternals;
    private initialValue?;
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
     * Default value for the date input element. Format: YYYY-MM-DD
     */
    value?: string;
    validateValue(): void;
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
     * Emitted when an element has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when an element loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    /**
     * Emitted when the element has received input.
     */
    gcdsInput: EventEmitter;
    /**
     * Emitted when an element has changed.
     */
    gcdsChange: EventEmitter;
    /**
     * Emitted when an element has a validation error.
     */
    gcdsError: EventEmitter<object>;
    /**
     * Emitted when an element has validated.
     */
    gcdsValid: EventEmitter<object>;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
    submitListener(e: any): Promise<void>;
    formResetCallback(): void;
    formStateRestoreCallback(state: any): void;
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
    /**
     * Format day input value to add 0 to single digit values
     */
    private formatDay;
    private validateRequiredProps;
    componentWillLoad(): Promise<void>;
    componentWillUpdate(): void;
    render(): any;
}
