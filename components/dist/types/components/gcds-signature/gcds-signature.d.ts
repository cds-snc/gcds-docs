export declare class GcdsSignature {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * The type of graphic to render
     */
    type: 'signature' | 'wordmark';
    validateType(newValue: string): void;
    /**
     * The colour variant to render
     */
    variant: 'colour' | 'white';
    validateVariant(newValue: string): void;
    /**
     * Has link to canada.ca. Only applies to signature
     */
    hasLink: boolean;
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    private get selectSVG();
    render(): any;
}
