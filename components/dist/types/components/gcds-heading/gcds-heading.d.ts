export declare class GcdsHeading {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Sets the appropriate HTML tag for the selected level.
     */
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    validateTag(newValue: string): void;
    /**
     * Sets the line length to a maximum amount of characters per line for
     * each heading level, ensuring a comfortable, accessible reading length.
     */
    characterLimit?: boolean;
    /**
     * Adds margin above the heading. The default margin-top for h1 is set to 0,
     * while for h2 to h6 headings, it's 500.
     */
    marginTop?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';
    validateMarginTop(newValue: string): void;
    /**
     * Adds margin below the heading. The default margin-botttom is 400.
     */
    marginBottom?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';
    validateMarginBottom(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
