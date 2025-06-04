import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
import { CheckboxObject } from './checkbox';
export declare class GcdsCheckboxes {
    el: HTMLInputElement;
    internals: ElementInternals;
    private initialState?;
    private shadowElement?;
    private optionsArr;
    private isGroup;
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
     * Emmitted when a checkbox has been inputted.
     */
    gcdsInput: EventEmitter;
    /**
     * Emmitted when a checkbox has been changed.
     */
    gcdsChange: EventEmitter;
    /**
     * Emitted when the input has a validation error.
     */
    gcdsError: EventEmitter<object>;
    /**
     * Emitted when the input has a validation error.
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
    watchLang(newValue: any, oldValue: any): void;
    private validateRequiredProps;
    componentWillLoad(): Promise<void>;
    componentWillUpdate(): void;
    componentDidUpdate(): Promise<void>;
    private handleInput;
    private assignOptionsArray;
    render(): any;
}
