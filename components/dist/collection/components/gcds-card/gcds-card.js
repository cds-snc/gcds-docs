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
        const { cardTitle, cardTitleTag, href, badge, imgSrc, imgAlt, rel, target, renderDescription, lang, errors, } = this;
        const Element = cardTitleTag;
        const taggedAttr = {};
        if (badge) {
            taggedAttr['aria-describedby'] = 'gcds-badge';
        }
        if (this.validateRequiredProps()) {
            return (h(Host, { key: '63362d1b4d0400fd13351181755b50976372b01c' }, h("div", { key: 'da6b99dc52d26f393c46f411cb886a76f29bb89d', class: "gcds-card" }, badge && !errors.includes('badge') && (h("gcds-text", { key: 'd6fb663560860206c180a33bd4fd0379a9d14a79', id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "small" }, h("strong", { key: 'd80f3a9c559224d534fa6918bc7871f2125dc5ef' }, h("gcds-sr-only", { key: '6aeed4c241c3fe00e95f1f7f98f8c59bd3bd5fce', tag: "span" }, i18n[lang].tagged), badge))), imgSrc && (h("img", { key: '924bcbb696ef0a579370e2986e7cc4daa4580d1b', src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), Element != 'a' ? (h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), h("gcds-link", { href: href }, cardTitle))) : (h("gcds-link", Object.assign({ href: href, class: "gcds-card__title", rel: rel, target: target }, taggedAttr), cardTitle)), renderDescription)));
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
            },
            "rel": {
                "type": "string",
                "attribute": "rel",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The rel attribute specifies the relationship between the current document and the linked document"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "target": {
                "type": "string",
                "attribute": "target",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The target attribute specifies where to open the linked document"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
