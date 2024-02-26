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
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}
