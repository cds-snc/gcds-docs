export declare class GcdsDateModified {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Set date modified type. Default is date.
     */
    type: 'date' | 'version';
    /**
     * State to track validation on properties
     * Contains a list of properties that have an error associated with them
     */
    errors: Array<string>;
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    private validateChildren;
    private validateRequiredProps;
    componentWillLoad(): Promise<void>;
    render(): any;
}
