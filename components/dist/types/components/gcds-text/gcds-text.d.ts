import { SpacingValues } from '../../utils/types/spacing';
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
    marginTop?: SpacingValues;
    validateMarginTop(newValue: string): void;
    /**
     * Adds margin below the text.
     */
    marginBottom?: SpacingValues;
    validateMarginBottom(newValue: string): void;
    /**
     * Sets the appropriate HTML tags for the selected size.
     */
    size?: 'body' | 'small';
    validateSize(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
