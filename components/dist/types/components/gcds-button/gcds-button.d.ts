import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsButton {
  private shadowElement?;
  el: HTMLElement;
  /**
   * Button props
   */
  /**
   * Set button types
   */
  buttonType: 'submit' | 'reset' | 'button' | 'link';
  validateButtonType(newValue: string): void;
  /**
   * Set the main style
   */
  buttonRole: 'primary' | 'secondary' | 'destructive' | 'skip-to-content';
  validateButtonRole(newValue: string): void;
  /**
   * Set the style variant
   */
  buttonStyle: 'solid' | 'outline' | 'text-only';
  validateButtonStyle(newValue: string): void;
  /**
   * The name attribute specifies the name for a <button> element.
   */
  name: string | undefined;
  /**
   * The disabled attribute for a <button> element.
   */
  disabled: boolean;
  /**
   * Link props
   */
  /**
   * The href attribute specifies the URL of the page the link goes to
   */
  href: string | undefined;
  /**
   * The rel attribute specifies the relationship between the current document and the linked document
   */
  rel: string | undefined;
  /**
   * The target attribute specifies where to open the linked document
   */
  target: string | undefined;
  /**
 * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
 */
  download: string | undefined;
  /**
   * Style props
   */
  /**
   * StyleAPI: custom border weight.
   */
  customBorderWeight: string | undefined;
  /**
   * StyleAPI: custom border style.
   */
  customBorderStyle: string | undefined;
  /**
   * StyleAPI: custom border color.
   */
  customBorderColor: string | undefined;
  /**
   * StyleAPI: custom margin.
   */
  customMargin: string | undefined;
  /**
   * StyleAPI: custom display.
   */
  customDisplay: string | undefined;
  /**
   * StyleAPI: custom background color.
   */
  customBackgroundColor: string | undefined;
  /**
   * StyleAPI: custom box shadow.
   */
  customBoxShadow: string | undefined;
  /**
   * StyleAPI: custom btext transform.
   */
  customCapitalization: string | undefined;
  inheritedAttributes: Object;
  /**
   * Events
   */
  /**
   * Emitted when the button has focus.
   */
  gcdsFocus: EventEmitter<void>;
  /**
   * Emitted when the button loses focus.
   */
  gcdsBlur: EventEmitter<void>;
  componentWillLoad(): void;
  componentDidLoad(): void;
  /**
    * Focus element
    */
  focusElement(): Promise<void>;
  private handleClick;
  private onFocus;
  private onBlur;
  render(): any;
}
