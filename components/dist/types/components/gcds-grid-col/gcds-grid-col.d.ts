export declare class GcdsGridCol {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Set tag for grid column
     */
    tag?: string;
    /**
     * Optimize grid column size for tablet (768px - 1023px).
     * Tablet grid column sizes are based on a 6 column grid.
     * The tablet size will also be used for desktop, if desktop is undefined.
     */
    tablet?: 1 | 2 | 3 | 4 | 5 | 6;
    validateTablet(newValue: number): void;
    /**
     * Optimize grid column size for desktop (1024px and above).
     * Desktop grid column sizes are based on a 12 column grid.
     */
    desktop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    validateDesktop(newValue: number): void;
    componentWillLoad(): void;
    render(): any;
}
