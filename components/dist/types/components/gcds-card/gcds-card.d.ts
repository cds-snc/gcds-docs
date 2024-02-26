export declare class GcdsCard {
    el: HTMLElement;
    /**
     * The type attribute specifies how the card renders as a link
     */
    type: 'link' | 'action';
    /**
     * The card title attribute specifies the title that appears on the card
     */
    cardTitle: string;
    /**
     * The title element attribute specifies HTML element the title renders as
     */
    titleElement: 'h3' | 'h4' | 'h5' | 'h6' | 'a';
    /**
     * The href attribute specifies the URL of the page the link goes to
     */
    href: string;
    /**
     * The description attribute specifies the body of text that appears on the card
     */
    description: string;
    /**
     * The tag attribute specifies the tag text that appears above the card title
     */
    tag: string;
    /**
     * The img src attribute specifies the path to the image
     */
    imgSrc: string;
    /**
     * The img alt attribute specifies the alt text for the image provided, if none, image will be decorative
     */
    imgAlt: string;
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    private get hasCardFooter();
    render(): any;
}
