/**
 * Label for form fields, providing accessibility and context for users.
 *
 * @slot - Slot for the label content.
 */
export declare class GcdsLabel {
    el: HTMLElement;
    /**
     * Props
     */
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
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}
