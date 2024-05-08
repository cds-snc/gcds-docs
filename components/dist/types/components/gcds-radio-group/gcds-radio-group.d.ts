import { EventEmitter } from '../../stencil-public-runtime';
export type RadioObject = {
    id: string;
    label: string;
    value: string;
    hint?: string;
    checked?: boolean;
    required?: boolean;
    disabled?: boolean;
};
export declare class GcdsRadioGroup {
    el: HTMLElement;
    internals: ElementInternals;
    private shadowElement?;
    private optionObject;
    /**
     * Props
     */
    /**
     * Options to render radio buttons
     */
    options: string | Array<RadioObject>;
    validateOptions(): void;
    /**
     * Name attribute for an input element.
     */
    name: string;
    /**
     * Specifies if the radio is invalid.
     */
    hasError: boolean;
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
    gcdsChange: EventEmitter<void>;
    /**
     * Emitted when the radio has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the radio loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    private onChange;
    /**
     * Event listener for gcds-fieldset errors
     */
    gcdsGroupError(e: any): void;
    gcdsGroupErrorClear(e: any): void;
    render(): any;
}
