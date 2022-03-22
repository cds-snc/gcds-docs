export declare class GcdsSiteMenu {
  private lang;
  el: HTMLElement;
  /**
   * Desktop layout
   */
  menuDesktopLayout: 'topbar' | 'sidebar';
  validateDesktopLayout(newValue: string): void;
  /**
   * Mobile layout
   */
  menuMobileLayout: 'drawer';
  validateMobileLayout(newValue: string): void;
  /**
   * Menu alignment
   */
  menuAlignment: 'left' | 'center' | 'right' | 'split';
  /**
   * Sticky navigation flag
   */
  menuPosition: 'static' | 'sticky';
  /**
   * Method to apply multiple attriibutes to an element
   * @param el - HTML element
   * @param attrs - Object of attributes and values
   */
  private setAttributes;
  /**
   * Method to apply sub menu trigger button
   * @param el - <a> tag
   */
  private appendSubMenuButton;
  private configureMenu;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
}
