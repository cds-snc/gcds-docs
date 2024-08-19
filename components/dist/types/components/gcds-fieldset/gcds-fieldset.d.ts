import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
export declare class GcdsFieldset {
    el: HTMLElement;
    private shadowElement?;
    isDateInput: boolean;
    _validator: Validator<string>;
    /**
     * Props
     */
    /**
     * The unique identifier for the component
     */
    fieldsetId: string;
    /**
     * The title for the contents of the fieldset
     */
    legend: string;
    /**
     * Flag the contents are required
     */
    required: boolean;
    /**
     * Error message for invalid form elements in group.
     */
    errorMessage: string;
    validateErrorMessage(): void;
    /**
     * Hint displayed below the legend.
     */
    hint: string;
    /**
     * Flag to disable fieldset and its contents
     */
    disabled: boolean;
    validateDisabledFieldset(): void;
    handleDisabledChange(newValue: boolean, _oldValue: boolean): void;
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
     * State to handle errors
     */
    hasError: boolean;
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * Set additional HTML attributes not available in component properties
     */
    inheritedAttributes: Object;
    /**
     * Events
     */
    /**
     * Emitted when the fieldset has a validation error.
     */
    gcdsGroupError: EventEmitter<string>;
    /**
     * Emitted when the fieldset has a validation error.
     */
    gcdsGroupErrorClear: EventEmitter<void>;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
    blurValidate(): void;
    /**
     * Event listener for gcds-fieldset errors
     */
    gcdsParentGroupError(e: any): void;
    gcdsParentGroupErrorClear(e: any): void;
    /**
     * Emitted when the fieldset has a validation error.
     */
    gcdsError: EventEmitter<object>;
    /**
     * Emitted when the fieldset has a validation error.
     */
    gcdsValid: EventEmitter<object>;
    submitListener(e: any): void;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentWillUpdate(): void;
    render(): any;
}
