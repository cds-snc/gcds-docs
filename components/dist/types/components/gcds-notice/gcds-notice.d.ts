export declare class GcdsNotice {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Set notice type.
     */
    type: 'danger' | 'info' | 'success' | 'warning';
    validateType(): void;
    /**
     * Set the notice title.
     */
    noticeTitle: string;
    validateNoticeTitle(): void;
    /**
     * Set notice title heading tag.
     */
    noticeTitleTag: 'h2' | 'h3' | 'h4' | 'h5';
    validateNoticeTitleTag(): void;
    /**
     * States
     */
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