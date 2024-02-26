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
