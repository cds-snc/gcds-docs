export declare class GcdsTopicMenu {
    el: HTMLGcdsTopicMenuElement;
    private listItems;
    private themeList?;
    private menuButton?;
    /**
     * Props
     */
    /**
     * Sets the homepage styling
     */
    home: boolean;
    /**
     * States
     */
    /**
     * Open state of menu
     */
    open: boolean;
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
    /**
     * Keyboard controls of theme and topic menu
     */
    keyDownListener(e: any): Promise<void>;
    /**
     * Close all theme menus
     */
    closeAllMenus(): Promise<void>;
    /**
     * Toggle open theme and topic menu
     */
    toggleNav(): Promise<void>;
    updateNavSize(size: any): Promise<void>;
    getNavSize(): Promise<"desktop" | "mobile">;
    /**
     * Update keyboard focus queue
     */
    updateNavItemQueue(parent: any): Promise<void>;
    /**
     * Focus menu link
     */
    private focusMenuLink;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): Promise<void>;
    render(): any;
}
