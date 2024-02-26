export declare class GcdsVerifyBanner {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines the container width of the verify banner content
     */
    container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    /**
     * Defines if the banner's position is fixed.
     */
    isFixed?: boolean;
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}
