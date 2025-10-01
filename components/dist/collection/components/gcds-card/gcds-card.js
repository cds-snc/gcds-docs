import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * A card is a box containing structured, actionable content on a single topic.
 *
 * @slot default - Slot for the card description. Will overwrite the description prop if used.
 */
export class GcdsCard {
    constructor() {
        /**
         * The card title tag property specifies the HTML heading element for the title.
         * This property does not modify the font size. It is used to assign the heading level
         * in order to maintain heading hierarchy and accessibility for assistive technologies.
         */
        this.cardTitleTag = 'a';
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
    }
    validateCardTitle() {
        if (!this.cardTitle || this.cardTitle.trim() == '') {
            this.errors.push('cardTitle');
        }
        else if (this.errors.includes('cardTitle')) {
            this.errors.splice(this.errors.indexOf('cardTitle'), 1);
        }
    }
    validateHref() {
        if (!this.href || this.href.trim() == '') {
            this.errors.push('href');
        }
        else if (this.errors.includes('href')) {
            this.errors.splice(this.errors.indexOf('href'), 1);
        }
    }
    validateBadge() {
        if (this.badge && this.badge.length > 20) {
            console.error(`${i18n['en'].badgeError} | ${i18n['fr'].badgeError}`);
            this.errors.push('badge');
        }
        else if (this.errors.includes('badge')) {
            this.errors.splice(this.errors.indexOf('badge'), 1);
        }
    }
    /*
     * Observe lang attribute change
     */
    updateLang() {
        const observer = new MutationObserver(mutations => {
            if (mutations[0].oldValue != this.el.lang) {
                this.lang = this.el.lang;
            }
        });
        observer.observe(this.el, observerConfig);
    }
    /*
     * Validate required properties
     */
    validateRequiredProps() {
        this.validateCardTitle();
        this.validateHref();
        if (this.errors.includes('href') || this.errors.includes('cardTitle')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateBadge();
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-card', this.errors, ['badge']);
        }
    }
    get renderDescription() {
        if (this.el.innerHTML.trim() != '') {
            return (h("div", { class: "gcds-card__description" }, h("slot", null)));
        }
        else if (this.description) {
            return (h("div", { class: "gcds-card__description" }, h("gcds-text", { "margin-bottom": "0" }, this.description)));
        }
        else {
            return null;
        }
    }
    render() {
        const { cardTitle, cardTitleTag, href, badge, imgSrc, imgAlt, renderDescription, lang, errors, } = this;
        const Element = cardTitleTag;
        const taggedAttr = {};
        if (badge) {
            taggedAttr['aria-describedby'] = 'gcds-badge';
        }
        if (this.validateRequiredProps()) {
            return (h(Host, { key: 'e2311efdcaaadb272a36f44c3e3eb051b4767b5d' }, h("div", { key: '234bde32e565a54786b2f872762ed95c19c821cc', class: "gcds-card" }, badge && !errors.includes('badge') && (h("gcds-text", { key: '844bfe328181351d24e68b83f57b7d4f9a9a3b75', id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "small" }, h("strong", { key: '565872d89c99d6c4541b2ec494b8abdbfc79d035' }, h("gcds-sr-only", { key: '30196619952eb4d38d677db62184d9491e458c19', tag: "span" }, i18n[lang].tagged), badge))), imgSrc && (h("img", { key: 'b233e6e13e836831ab9c207483529a7424b5c887', src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), Element != 'a' ? (h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), h("gcds-link", { href: href }, cardTitle))) : (h("gcds-link", Object.assign({ href: href, class: "gcds-card__title" }, taggedAttr), cardTitle)), renderDescription)));
        }
    }
    static get is() { return "gcds-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-card.css"]
        };
    }
    static get properties() {
        return {
            "cardTitle": {
                "type": "string",
                "attribute": "card-title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The card title attribute specifies the title that appears on the card"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "href": {
                "type": "string",
                "attribute": "href",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The href attribute specifies the URL of the page the link goes to"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "cardTitleTag": {
                "type": "string",
                "attribute": "card-title-tag",
                "mutable": false,
                "complexType": {
                    "original": "'h3' | 'h4' | 'h5' | 'h6' | 'a'",
                    "resolved": "\"a\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The card title tag property specifies the HTML heading element for the title.\nThis property does not modify the font size. It is used to assign the heading level\nin order to maintain heading hierarchy and accessibility for assistive technologies."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'a'"
            },
            "description": {
                "type": "string",
                "attribute": "description",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The description attribute specifies the body of text that appears on the card"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "badge": {
                "type": "string",
                "attribute": "badge",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The badge attribute specifies the badge text that appears in the top left corner of the card. 20 character limit."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "imgSrc": {
                "type": "string",
                "attribute": "img-src",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The img src attribute specifies the path to the image"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "imgAlt": {
                "type": "string",
                "attribute": "img-alt",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The img alt attribute specifies the alt text for the image provided, if none, image will be decorative"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "lang": {},
            "errors": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsFocus",
                "name": "gcdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the card has focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsBlur",
                "name": "gcdsBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the card loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsClick",
                "name": "gcdsClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the card has been clicked. Contains the href in the event detail."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "cardTitle",
                "methodName": "validateCardTitle"
            }, {
                "propName": "href",
                "methodName": "validateHref"
            }, {
                "propName": "badge",
                "methodName": "validateBadge"
            }];
    }
}
//# sourceMappingURL=gcds-card.js.map
