import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsNavLink {
    el: HTMLElement;
    private linkElement;
    /**
     * Link href
     */
    href: string;
    /**
     * Current page flag
     */
    current: boolean;
    /**
     * Emitted when the link has been clicked.
     */
    gcdsClick: EventEmitter<void>;
    /**
     * Emitted when the link has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the link loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * Style of nav to render based on parent
     */
    navStyle: string;
    /**
     * Focus the link element
     */
    focusLink(): Promise<void>;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}
