import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The language toggle is a link to the same content in the other Official Language.
 */
export declare class GcdsLangToggle {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * The href attribute specifies the URL of the opposite language page
     */
    href: string;
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
     * Emitted when the link has been clicked. Contains the href in the event detail.
     */
    gcdsClick: EventEmitter<string>;
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}
