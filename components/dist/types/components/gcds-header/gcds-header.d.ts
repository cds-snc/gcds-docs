import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The header is the responsive Government of Canada branded header landmark.
 *
 * @slot banner - Slot to add a banner across the top of the header.
 * @slot breadcrumb - Slot to add breadcrumbs at the bottom of the header.
 * @slot menu - Slot to add a menu below the divider line.
 * @slot search - Slot to add a search field to the right of the header.
 * @slot skip-to-nav - Slot to add a hidden skip to content navigation at the top of the header.
 * @slot signature - Slot to replace Government of Canada signature.
 * @slot toggle - Slot to add a custom language toggle in the top-right of the header.
 */
export declare class GcdsHeader {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * GcdsLangToggle - The href attribute specifies the URL of the opposite language page
     */
    langHref: string;
    /**
     * GcdsSignature - The variant of the Government of Canada signature
     */
    signatureVariant: 'colour' | 'white';
    /**
     * GcdsSignature - GCDS signature links to Canada.ca
     */
    signatureHasLink: boolean;
    /**
     * Top navigation - Skip to content href
     */
    skipToHref: string;
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
    private get renderSkipToNav();
    private get renderToggle();
    private get renderSignature();
    private get renderSearch();
    private get hasSearch();
    private get hasBanner();
    private get hasBreadcrumb();
    render(): any;
}
