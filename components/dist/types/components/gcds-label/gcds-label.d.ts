export declare class GcdsLabel {
    el: HTMLElement;
    private focusEl?;
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
    /**
     * Click label if host element is clicked
     */
    private clickEl;
    private onClick;
    render(): any;
}
