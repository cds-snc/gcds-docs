import { EventEmitter } from '../../stencil-public-runtime';
import { RadioObject } from './radio';
import { Validator, ValidatorEntry } from '../../validators';
export declare class GcdsRadios {
    el: HTMLElement;
    internals: ElementInternals;
    private shadowElement?;
    private initialValue?;
    private optionsArr;
    _validator: Validator<string>;
    /**
     * Props
     */
    /**
     * Options to render radio buttons
     */
    options: string | Array<RadioObject>;
    validateOptions(): void;
    /**
     * The `name` attribute for the <gcds-radios>, used to group radio elements together
     */
    name: string;
    validateName(): void;
    /**
     * Label or legend for the group of radio elements
     */
    legend: string;
    validateLegend(): void;
    /**
     * Specifies if a form field is required or not.
     */
    required: boolean;
    /**
     * Hint displayed below the label and above the radio elements
     */
    hint: string;
    /**
     * Set this to display an error message for invalid <gcds-radios>
     */
    errorMessage: string;
    validateErrorMessage(): void;
    /**
     * Specifies if an input element is disabled or not.
     */
    disabled: boolean;
    /**
     * Default value for the element
     */
    value: string;
    validateValue(): void;
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
     * Specifies if the radio is invalid.
     */
    hasError: boolean;
    /**
     * Set additional HTML attributes not available in component properties
     */
    inheritedAttributes: Object;
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
     * Call any active validators
     */
    validate(): Promise<void>;
    /**
     * Events
     */
    /**
     * Emitted when <gcds-radios> has been changed as a direct result of a user action (a radio option has been selected)
     */
    gcdsInput: EventEmitter<void>;
    /**
     * Emitted when a <gcds-radios> option is checked (but not when unchecked)
     */
    gcdsChange: EventEmitter<void>;
    /**
     * Emitted when <gcds-radios> has received focus
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the <gcds-radios> has lost focus
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    private onBlurValidate;
    /**
     * Emitted when <gcds-radios> has passed validation
     */
    gcdsValid: EventEmitter<void>;
    /**
     * Emitted when <gcds-radios> has a validation error
     */
    gcdsError: EventEmitter<object>;
    submitListener(e: any): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: any): void;
    watchLang(newValue: any, oldValue: any): void;
    private handleInput;
    private validateRequiredProps;
    componentWillLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    render(): any;
}
