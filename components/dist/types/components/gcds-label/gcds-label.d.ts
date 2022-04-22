export declare class GcdsLabel {
  el: HTMLElement;
  private lang;
  /**
   * Specifies if the label is hidden or not.
   */
  hideLabel?: boolean;
  /**
   * Form field label
   */
  label: string;
  /**
   * Defines the label's for attribute.
   */
  labelFor: string;
  /**
   * Specifies if a form field is required or not.
   */
  required?: boolean;
  componentWillLoad(): Promise<void>;
  render(): any;
}
