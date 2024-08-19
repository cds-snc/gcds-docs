import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsCard {
    el: HTMLElement;
    /**
     * The card title attribute specifies the title that appears on the card
     */
    cardTitle: string;
    validateCardTitle(): void;
    /**
     * The href attribute specifies the URL of the page the link goes to
     */
    href: string;
    validateHref(): void;
    /**
     * The card title tag attribute specifies HTML element the title renders as
     */
    cardTitleTag: 'h3' | 'h4' | 'h5' | 'h6' | 'a';
    /**
     * The description attribute specifies the body of text that appears on the card
     */
    description: string;
    /**
     * The badge attribute specifies the badge text that appears in the top left corner of the card. 20 character limit.
     */
    badge: string;
    validateBadge(): void;
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
    /**
     * State to track validation on properties
     * Contains a list of properties that have an error associated with them
     */
    errors: Array<string>;
    /**
     * Events
     */
    /**
     * Emitted when the card has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the card loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    /**
     * Emitted when the card has been clicked.
     */
    gcdsClick: EventEmitter<void>;
    updateLang(): void;
    private validateRequiredProps;
    componentWillLoad(): Promise<void>;
    private get renderDescription();
    render(): any;
}
