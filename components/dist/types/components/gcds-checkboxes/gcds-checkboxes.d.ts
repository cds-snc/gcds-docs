import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
import { CheckboxObject } from './checkbox';
/**
 * Checkboxes provide a set of options for multiple responses.
 */
export declare class GcdsCheckboxes {
    el: HTMLGcdsCheckboxesElement;
    internals: ElementInternals;
    private initialState?;
    private shadowElement?;
    private optionsArr;
    private isGroup;
    private checkboxTitle;
    _validator: Validator<string | string[]>;
    /**
     * Props
     */
    /**
     * Name attribute for a checkboxes element.
     */
    name: string;
    validateName(): void;
    /**
     * Set the legend for fieldset form group.
     */
    legend: string;
    validateLegend(): void;
    /**
     * Options to render checkboxes buttons
     */
    options: string | Array<CheckboxObject>;
    validateOptions(): void;
    /**
     * Specifies if the checkboxes are required or not.
     */
    required: boolean;
    /**
     * Specifies if the checkboxes are disabled or not.
     */
    disabled: boolean;
    validateDisabledCheckbox(): void;
    /**
   * If true, the checkobox will be focused on component render
   */
    autofocus: boolean;
    /**
     * The ID of the form that the checkboxes belong to.
     */
    form?: string;
    /**
     * For single checkbox, specifies if the label is hidden or not.
     */
    hideLabel?: boolean;
    /**
     * For checkbox groups, specifies if the legend is hidden or not.
     */
    hideLegend?: boolean;
    /**
     * Value for checkboxes component.
     */
    value: string | Array<string>;
    validateValue(newValue: any): void;
    /**
     * Set this to display an error message for invalid <gcds-checkboxes>
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
       * Read-only property of the checkboxes, returns a ValidityState object that represents the validity states this element is in.
       */
    get validity(): ValidityState;
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
     * State to track validation on properties
     * Contains a list of properties that have an error associated with them
     */
    errors: Array<string>;
    /**
     * Events
     */
    /**
     * Emitted when the checkbox has been clicked.
     */
    gcdsClick: EventEmitter<void>;
    /**
     * Emitted when the checkbox has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the checkbox loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlurValidate;
    /**
     * Emitted when a checkbox has been inputted. Contains the new value in the event detail.
     */
    gcdsInput: EventEmitter<string[]>;
    /**
     * Emitted when a checkbox has been changed. Contains the new value in the event detail.
     */
    gcdsChange: EventEmitter<string[]>;
    /**
     * Emitted when the checkbox has a validation error.
     */
    gcdsError: EventEmitter<object>;
    /**
     * Emitted when the checkbox has a validation error.
     */
    gcdsValid: EventEmitter<object>;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
    formdataListener(e: any): void;
    submitListener(e: any): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: any): void;
    /**
     * Check the validity of gcds-checkboxes
     */
    checkValidity(): Promise<boolean>;
    /**
     * Get validationMessage of gcds-checkboxes
     */
    getValidationMessage(): Promise<string>;
    /**
     * Update gcds-checkboxes's validity using internal input
     */
    private updateValidity;
    watchLang(newValue: any, oldValue: any): void;
    private validateRequiredProps;
    componentWillLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    componentDidLoad(): Promise<void>;
    private handleInput;
    private assignOptionsArray;
    render(): any;
}
