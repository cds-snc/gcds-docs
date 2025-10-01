import { SpacingValues } from '../../utils/types/spacing';
/**
 * A heading is a title that establishes levels of hierarchy to organize page content into a structure and matches Canada.ca typography styles.
 *
 * @slot default - Slot for the heading content
 */
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
     * while for h2 to h6 headings, it's 600.
     */
    marginTop?: SpacingValues;
    validateMarginTop(newValue: string): void;
    /**
     * Adds margin below the heading. The default margin-botttom is 300.
     */
    marginBottom?: SpacingValues;
    validateMarginBottom(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
