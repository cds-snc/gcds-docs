import { EventEmitter } from '../../stencil-public-runtime';
/**
 * An error summary is a list of user errors in a form.
 */
export declare class GcdsErrorSummary {
    el: HTMLElement;
    private shadowElement?;
    /**
     * Set error summary heading
     */
    heading?: string;
    /**
     * Specifies if the error summary should listen for GcdsError event to generate error list.
     */
    listen?: boolean;
    listenChanged(): void;
    /**
     * Object of list items for error list. Format: { link-href: link-label }
     */
    errorLinks: string | object;
    errorLinksObject: object;
    /**
     * Convert contextual links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    errorLinksChanged(newErrorLinks: string | object): void;
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
    gcdsClick: EventEmitter<string>;
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * Queue of erros
     */
    errorQueue: object;
    hasSubmitted: boolean;
    errorListener(e: any): void;
    validListener(e: any): void;
    submitListener(e: any): void;
    sortErrors(): {};
    focusElement(id: any): void;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}
