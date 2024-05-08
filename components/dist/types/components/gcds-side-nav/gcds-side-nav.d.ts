export declare class GcdsSideNav {
    el: HTMLElement;
    private mobile?;
    /**
     * Label for navigation landmark
     */
    label: string;
    /**
     * Sticky navigation flag
     */
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * Queue of nav items for keyboard navigation
     */
    navItems: any[];
    /**
     * Current size based on window size
     */
    navSize: 'desktop' | 'mobile';
    focusInListener(e: any): Promise<void>;
    focusOutListener(e: any): Promise<void>;
    keyDownListener(e: any): Promise<void>;
    gcdsClickListener(e: any): Promise<void>;
    updateLang(): void;
    getNavSize(): Promise<"desktop" | "mobile">;
    updateNavSize(size: any): Promise<void>;
    updateNavItemQueue(el: any, includeElement?: boolean): Promise<void>;
    componentWillLoad(): Promise<void>;
    render(): any;
}
