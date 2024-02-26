export declare class GcdsFooter {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Display mode of the footer
     */
    display?: 'compact' | 'full';
    /**
     * GcdsSignature - The variant of the Government of Canada wordmark
     */
    wordmarkVariant: 'colour' | 'white';
    /**
     * Heading for contextual slot and nav landmark
     */
    contextualHeading: string;
    /**
     * Object of list items for contextual band. Format: { link-label: link-href }
     */
    contextualLinks: string | object;
    contextualLinksObject: object;
    /**
     * Convert contextual links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    contextualLinksChanged(newContextualLinks: string | object): void;
    /**
     * Object of list items for sub-footer. Format: { link-label: link-href }
     */
    subLinks: string | object;
    subLinksObject: object;
    /**
     * Convert sub links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    subLinksChanged(newSubLinks: string | object): void;
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    private get renderSignature();
    render(): any;
}
