import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsInput {
  el: HTMLElement;
  private lang;
  /**
   * Input props
   */
  /**
   * Specifies if an input element is disabled or not.
   */
  disabled?: boolean;
  /**
   * Error message for an invalid input element.
   */
  errorMessage?: string;
  /**
   * Specifies if the label is hidden or not.
   */
  hideLabel?: boolean;
  /**
   * Hint displayed below the label and above the input field.
   */
  hint?: string;
  /**
   * Id + name attribute for an input element.
   */
  inputId: string;
  /**
   * Form field label
   */
  label: string;
  /**
   * Specifies if a form field is required or not.
   */
  required?: boolean;
  /**
   * Size attribute for an input element.
   * Defines max-length as well.
   */
  size?: number;
  /**
   * Set Input types
   */
  type: 'email' | 'number' | 'password' | 'search' | 'text' | 'url';
  /**
   * Default value for an input element.
   */
  value: string;
  /**
  * Events
  */
  /**
    * Emitted when the input has focus.
    */
  gcdsFocus: EventEmitter<void>;
  private onFocus;
  /**
    * Emitted when the input loses focus.
    */
  gcdsBlur: EventEmitter<void>;
  private onBlur;
  /**
    * Update value based on user input.
    */
  gcdsChange: EventEmitter;
  handleChange(e: any): void;
  componentWillLoad(): Promise<void>;
  render(): any;
}
