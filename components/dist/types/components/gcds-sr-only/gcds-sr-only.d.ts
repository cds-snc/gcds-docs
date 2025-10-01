/**
 * The screenreader-only component is text information only accessible with assistive technologies.
 *
 * @slot default - Slot for the hidden accessible content.
 */
export declare class GcdsSrOnly {
    /**
     * Sets the appropriate HTML tag for the content.
     */
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    validateTag(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
