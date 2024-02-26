import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsLink {
    el: HTMLElement;
    private shadowElement?;
    /**
     * Props
     */
    /**
     * Sets the main style of the link.
     */
    variant?: 'default' | 'light';
    validateVariant(newValue: string): void;
    /**
     * Set the link size
     */
    size?: 'regular' | 'small' | 'inherit';
    validateSize(newValue: string): void;
    /**
     * Sets the display behavior of the link
     */
    display?: 'block' | 'inline';
    validateDisplay(newValue: string): void;
    /**
     * The href attribute specifies the URL of the page the link goes to
     */
    href: string;
    /**
     * The rel attribute specifies the relationship between the current document and the linked document
     */
    rel?: string | undefined;
    /**
     * The target attribute specifies where to open the linked document
     */
    target?: string;
    /**
     * Whether the link is external or not
     */
    external?: boolean;
    /**
     * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
     */
    download?: string | undefined;
    /**
     * The type specifies the media type of the linked document
     */
    type?: string | undefined;
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
     * Emitted when the link has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the link loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    /**
     * Emitted when the link has been clicked.
     */
    gcdsClick: EventEmitter<void>;
    updateLang(): void;
    componentWillLoad(): void;
    render(): any;
}
