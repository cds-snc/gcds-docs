import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsTextarea {
  el: HTMLElement;
  private lang;
  /**
   * Textarea props
   */
  /**
   * Default value for textarea cols (the min-width for textarea's is 50%).
   */
  cols?: number;
  /**
   * Specifies if a textarea element is disabled or not.
   */
  disabled?: boolean;
  /**
   * Error message for an invalid textarea element.
   */
  errorMessage?: string;
  /**
   * Specifies if the label is hidden or not.
   */
  hideLabel?: boolean;
  /**
   * Hint displayed below the label and above the textarea field.
   */
  hint?: string;
  /**
   * Form field label
   */
  label: string;
  /**
    * Specifies if a form field is required or not.
    */
  required?: boolean;
  /**
   * Default value for textarea rows.
   */
  rows?: number;
  /**
   * Sets the maxlength attribute for the textarea element.
   */
  textareaCharacterCount?: number;
  /**
   * Id + name attribute for a textarea element.
   */
  textareaId: string;
  /**
   * Default value for an input element.
   */
  value: string;
  /**
  * Events
  */
  /**
    * Emitted when the textarea has focus.
    */
  gcdsFocus: EventEmitter<void>;
  private onFocus;
  /**
    * Emitted when the textarea loses focus.
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
