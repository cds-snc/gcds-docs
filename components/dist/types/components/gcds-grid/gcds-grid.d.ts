export type ContentValues = 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
export type GridGapValues = '150' | '175' | '200' | '225' | '250' | '300' | '350' | '400' | '450' | '500' | '550' | '600' | '650' | '700' | '750' | '800';
/**
 * A grid is a responsive, flexible column layout to position elements on a page.
 *
 * @slot default - Slot for the main content of the grid.
 */
export declare class GcdsGrid {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines the default number of grid columns for all viewports if columns-tablet
     * and columns-desktop are not defined. Option to set different layouts for
     * desktop with columns-desktop and for tablet with columns-tablet.
     */
    columns?: string;
    /**
     * Provides option to set a different number of grid columns for tablet screens.
     * If columns-desktop is not defined, columns-tablet will be used to define the
     * number of columns for desktop as well.
     */
    columnsTablet?: string;
    /**
     * Provides option to set a different number of grid columns for desktop screens.
     */
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
     * Defines the horizontal and vertical spacing between items in
     * a grid container for all viewports if gap-tablet and gap-desktop
     * are not defined. Option to set different spacing for desktop
     * with gap-desktop and for tablet with gap-tablet.
     */
    gap?: GridGapValues;
    validateGap(newValue: string): void;
    /**
     * Provides option to set horizontal and vertical spacing between items in a
     * grid container for tablet screens. If gap-desktop is not defined, gap-tablet
     * will be used to define the spacing for desktop screens as well.
     */
    gapTablet?: GridGapValues;
    validateGapTablet(newValue: string): void;
    /**
     * Provides option to set horizontal and vertical spacing between items
     * in a grid container for desktop screens.
     */
    gapDesktop?: GridGapValues;
    validateGapDesktop(newValue: string): void;
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
