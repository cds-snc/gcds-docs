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
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}
