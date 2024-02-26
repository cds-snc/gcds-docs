import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsRadio {
    el: HTMLElement;
    private shadowElement?;
    /**
     * Props
     */
    /**
     * Id attribute for an input element.
     */
    radioId: string;
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
    /**
     * Specifies if an input element is checked.
     */
    checked: boolean;
    /**
     * Value for an input element.
     */
    value: string;
    /**
     * Hint displayed below the label.
     */
    hint: string;
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
     * Specifies if the radio is invalid.
     */
    hasError: boolean;
    validateHasError(): void;
    /**
     * State to handle when errors are passed down to component
     */
    parentError: string;
    /**
     * Set additional HTML attributes not available in component properties
     */
    inheritedAttributes: Object;
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * Events
     */
    /**
     * Emitted when the radio button is checked
     */
    gcdsRadioChange: EventEmitter<void>;
    /**
     * Emitted when the radio has focus.
     */
    gcdsFocus: EventEmitter<void>;
    private onFocus;
    /**
     * Emitted when the radio loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    private onChange;
    gcdsradioChangeEventHandler(event: any): void;
    /**
     * Event listener for gcds-fieldset errors
     */
    gcdsGroupError(e: any): void;
    gcdsGroupErrorClear(e: any): void;
    render(): any;
}
