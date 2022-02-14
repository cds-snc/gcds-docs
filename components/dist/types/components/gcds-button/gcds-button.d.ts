import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsButton {
  el: HTMLElement;
  /**
   * The button label
   */
  label: string;
  /**
   * Button props
   */
  /**
   * Set button types
   */
  type: 'submit' | 'reset' | 'button' | 'link';
  /**
   * Set component states
   */
  state: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
  /**
   * Set the main style
   */
  task: 'primary' | 'secondary' | 'danger' | 'skip-to-content';
  /**
   * Set the style variant
   */
  variant: 'solid' | 'outline' | 'text-only';
  /**
   * The name attribute specifies the name for a <button> element.
   */
  name: string | undefined;
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
  private handleClick;
  private onFocus;
  private onBlur;
  componentWillLoad(): void;
  componentDidLoad(): void;
  render(): any;
}
