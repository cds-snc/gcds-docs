/**
 * The notice is a short, prominent message that’s part of the page content.
 *
 * @slot default - Slot for the main content of the notice.
 */
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
     * The notice title tag property specifies the HTML heading element for the title.
     * This property does not modify the font size. It is used to assign the heading level
     * in order to maintain heading hierarchy and accessibility for assistive technologies.
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
