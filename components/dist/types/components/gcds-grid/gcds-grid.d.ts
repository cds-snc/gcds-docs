export declare class GcdsGrid {
  el: HTMLElement;
  /**
   * Grid props
   */
  /**
   * Defines grid container size
   */
  gridContainer?: 'fluid' | 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Defines element as grid or inline-grid container
   */
  gridDisplay?: 'grid' | 'inline-grid';
  /**
   * Set tag for grid container
   */
  gridTag: string;
  /**
   * Defines the columns of the grid
   * Option to set different layouts for desktop | tablet | default
   */
  gridTemplateColumns?: string;
  gridTemplateColumnsTablet?: string;
  gridTemplateColumnsDesktop?: string;
  /**
   * Shorthand for column-gap + row-gap
   * Specifies the width of the gutters between columns and rows
   */
  gap?: 'spacing-50' | 'spacing-100' | 'spacing-200' | 'spacing-300' | 'spacing-400' | 'spacing-500' | 'spacing-600' | 'spacing-700' | 'spacing-800' | 'spacing-900' | 'spacing-1000';
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
