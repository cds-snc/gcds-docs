import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
export declare class GcdsSelect {
    el: HTMLElement;
    internals: ElementInternals;
    private initialValue?;
    private shadowElement?;
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
     * Value for a select element.
     */
    value?: string;
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
    gcdsChange: EventEmitter;
    /**
     * Emitted when the select has received input.
     */
    gcdsInput: EventEmitter;
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
    formResetCallback(): void;
    formStateRestoreCallback(state: any): void;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentWillUpdate(): void;
    render(): any;
}
