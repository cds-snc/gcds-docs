import { EventEmitter } from '../../stencil-public-runtime';
/**
 * A card is a box containing structured, actionable content on a single topic.
 *
 * @slot default - Slot for the card description. Will overwrite the description prop if used.
 */
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
     * The card title tag property specifies the HTML heading element for the title.
     * This property does not modify the font size. It is used to assign the heading level
     * in order to maintain heading hierarchy and accessibility for assistive technologies.
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
     * The rel attribute specifies the relationship between the current document and the linked document
     */
    rel?: string | undefined;
    /**
     * The target attribute specifies where to open the linked document
     */
    target?: string;
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
     * Emitted when the card has been clicked. Contains the href in the event detail.
     */
    gcdsClick: EventEmitter<string>;
    updateLang(): void;
    private validateRequiredProps;
    componentWillLoad(): Promise<void>;
    private get renderDescription();
    render(): any;
}
