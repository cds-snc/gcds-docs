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
   * Shorthand for column-gap + row-gap
   * Specifies the width of the gutters between columns and rows
   */
  gap?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';
  /**
   * Set tag for grid container
   */
  tag?: string;
  /**
   * If total grid size is less than the size of its grid container,
   * this property aligns the grid along the block (column) axis
   */
  alignContent?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
  /**
   * If total grid size is less than the size of its grid container,
   * this property aligns the grid along the inline (row) axis
   */
  justifyContent?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
  /**
   * Sets both the align-content + justify-content properties
   */
  placeContent?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
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
  render(): any;
}
