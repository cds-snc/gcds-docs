export declare class GcdsPhaseBanner {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines banner role.
     */
    bannerRole?: 'primary' | 'secondary';
    /**
     * Defines the container width of the phase banner content
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
    /**
     * Events
     */
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}
