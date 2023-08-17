import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
export declare class GcdsInput {
  el: HTMLElement;
  private shadowElement?;
  _validator: Validator<string>;
  /**
   * Props
   */
  /**
   * Specifies if an input element is disabled or not.
   */
  disabled?: boolean;
  validateDisabledInput(): void;
  /**
   * Error message for an invalid input element.
   */
  errorMessage?: string;
  validateErrorMessage(): void;
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
  type?: 'email' | 'number' | 'password' | 'search' | 'text' | 'url';
  /**
   * Default value for an input element.
   */
  value?: string;
  /**
   * String to have autocomplete enabled
   */
  autocomplete?: 'on' | 'off';
  /**
   * Custom callback function on change event
   */
  changeHandler: Function;
  /**
   * Custom callback function on focus event
   */
  focusHandler: Function;
  /**
   * Custom callback function on blur event
   */
  blurHandler: Function;
  /**
   * Array of validators
   */
  validator: Array<string | ValidatorEntry | Validator<string>>;
  validateValidator(): void;
  /**
   * Set event to call validator
   */
  validateOn: 'blur' | 'submit' | 'other';
  /**
   * Set additional HTML attributes not available in component properties
   */
  inheritedAttributes: Object;
  /**
   * Specifies if the input is invalid.
   */
  hasError: boolean;
  validateHasError(): void;
  /**
  * Language of rendered component
  */
  lang: string;
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
  /**
    * Call any active validators
    */
  validate(): Promise<void>;
  /**
    * Emitted when the input has a validation error.
    */
  gcdsError: EventEmitter<object>;
  /**
    * Emitted when the input has a validation error.
    */
  gcdsValid: EventEmitter<object>;
  submitListener(e: any): void;
  handleChange(e: any): void;
  updateLang(): void;
  componentWillLoad(): Promise<void>;
  componentWillUpdate(): void;
  render(): any;
}
