export type ContentValues = 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
export declare class GcdsGrid {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines the columns of the grid
     * Option to set different layouts for desktop | tablet | default (includes mobile)
     */
    columns?: string;
    columnsTablet?: string;
    columnsDesktop?: string;
    /**
     * Defines grid container size
     */
    container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    /**
     * Defines if grid container is centered or not
     */
    centered?: boolean;
    /**
     * Defines element as grid or inline-grid container
     */
    display?: 'grid' | 'inline-grid';
    /**
     * Sets all grid items to have an equal height,
     * based on the tallest item.
     */
    equalRowHeight?: boolean;
    /**
     * Set tag for grid container
     */
    tag?: 'article' | 'aside' | 'div' | 'dl' | 'main' | 'nav' | 'ol' | 'section' | 'ul';
    validateTag(newValue: string): void;
    /**
     * If total grid size is less than the size of its grid container,
     * this property aligns the grid along the block (column) axis
     */
    alignContent?: ContentValues;
    /**
     * If total grid size is less than the size of its grid container,
     * this property aligns the grid along the inline (row) axis
     */
    justifyContent?: ContentValues;
    /**
     * Sets both the align-content + justify-content properties
     */
    placeContent?: ContentValues;
    /**
     * Aligns grid items along the block (column) axis
     */
    alignItems?: 'baseline' | 'center' | 'end' | 'start' | 'stretch';
    /**
     * Aligns grid items along the inline (row) axis
     */
    justifyItems?: 'center' | 'end' | 'start' | 'stretch';
    /**
     * Sets both the align-items + justify-items properties
     */
    placeItems?: 'center' | 'end' | 'start' | 'stretch';
    componentWillLoad(): void;
    render(): any;
}
