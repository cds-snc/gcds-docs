import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The button is an interactive object that emphasizes an action.
 *
 * @slot default - Slot for the button/link label.
 */
export declare class GcdsButton {
    el: HTMLElement;
    private shadowElement?;
    /**
     * Props
     */
    /**
     * Set button types
     */
    type: 'submit' | 'reset' | 'button' | 'link';
    validateType(newValue: string): void;
    /**
     * Set the main style
     */
    buttonRole: 'start' | 'primary' | 'secondary' | 'danger';
    validateButtonRole(newValue: string): void;
    /**
     * Set the button size
     */
    size: 'regular' | 'small';
    validateSize(newValue: string): void;
    /**
     * The buttonId attribute specifies the id for a <button> element.
     */
    buttonId: string;
    /**
     * The name attribute specifies the name for a <button> element.
     */
    name: string | undefined;
    /**
     * The disabled attribute for a <button> element.
     */
    disabled: boolean;
    validateDisabled(newValue: boolean): void;
    /**
     * The value attribute specifies the value for a <button> element.
     */
    value: string;
    /**
     * Link props
     */
    /**
     * The href attribute specifies the URL of the page the link goes to
     */
    href: string | undefined;
    /**
     * The rel attribute specifies the relationship between the current document and the linked document
     */
    rel: string | undefined;
    /**
     * The target attribute specifies where to open the linked document
     */
    target: string | undefined;
    /**
     * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
     */
    download: string | undefined;
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
     * Emitted when the button has been clicked. Contains the value or href in the event detail.
     */
    gcdsClick: EventEmitter<string | void>;
    /**
     * Emitted when the button has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the button loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    updateLang(): void;
    componentWillLoad(): void;
    private handleClick;
    render(): any;
}
