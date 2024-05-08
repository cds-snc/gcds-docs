import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsNavGroup {
    el: HTMLElement;
    private triggerElement?;
    /**
     *  Label for the expanded button trigger
     */
    closeTrigger?: string;
    /**
     * Label for the nav group menu
     */
    menuLabel: string;
    /**
     *  Label for the collapsed button trigger
     */
    openTrigger: string;
    /**
     * Has the nav group been expanded
     */
    open: boolean;
    /**
     * Emitted when the button has been clicked.
     */
    gcdsClick: EventEmitter<void>;
    /**
     * Emitted when the button has been focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the button blurs.
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
    focusOutListener(e: any): Promise<void>;
    /**
     * Focus button element
     */
    focusTrigger(): Promise<void>;
    /**
     * Toggle the nav open or closed
     */
    toggleNav(): Promise<void>;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}
