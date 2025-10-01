/**
 * Phase banner displays a banner indicating the current phase of a project or feature, with optional icons and call-to-action elements.
 *
 * @slot banner-cta - Slot for the call-to-action element in the banner.
 * @slot banner-icon-left - Slot for displaying an icon/image on the left of the banner.
 * @slot banner-icon-right - Slot for displaying an icon/image on the right of the banner.
 * @slot banner-text - Slot for the main content of the banner.
 */
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
