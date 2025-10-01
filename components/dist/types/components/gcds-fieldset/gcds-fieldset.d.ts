/**
 * A fieldset is a group of multiple form components or elements.
 *
 * @slot default - Slot for the form elements.
 */
export declare class GcdsFieldset {
    el: HTMLElement;
    private shadowElement?;
    /**
     * Props
     */
    /**
     * Hint displayed below the legend.
     */
    hint: string;
    /**
     * The title for the contents of the fieldset
     */
    legend: string;
    /**
     * Sets the appropriate font size for the fieldset legend.
     */
    legendSize: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    validateLegendSize(newValue: string): void;
    /**
     * Set additional HTML attributes not available in component properties
     */
    inheritedAttributes: Object;
    componentWillLoad(): Promise<void>;
    render(): any;
}
