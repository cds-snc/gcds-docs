export declare class GcdsText {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Sets the main style of the text.
     */
    textRole?: 'light' | 'primary' | 'secondary';
    validateTextRole(newValue: string): void;
    /**
     * Sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length.
     */
    characterLimit?: boolean;
    /**
     * Specifies the display behaviour of the text.
     */
    display?: 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex' | 'none';
    validateDisplay(newValue: string): void;
    /**
     * Adds margin above the text.
     */
    marginTop?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';
    validateMarginTop(newValue: string): void;
    /**
     * Adds margin below the text.
     */
    marginBottom?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';
    validateMarginBottom(newValue: string): void;
    /**
     * Sets the appropriate HTML tags for the selected size.
     */
    size?: 'body' | 'caption';
    validateSize(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
