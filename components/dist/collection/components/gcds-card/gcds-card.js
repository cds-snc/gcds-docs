import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsCard {
    constructor() {
        this.cardTitle = undefined;
        this.href = undefined;
        this.cardTitleTag = 'a';
        this.description = undefined;
        this.badge = undefined;
        this.imgSrc = undefined;
        this.imgAlt = undefined;
        this.lang = undefined;
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
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-card', this.errors, ['badge']);
        }
    }
    get renderDescription() {
        if (this.el.innerHTML.trim() != '') {
            return h("div", { class: "gcds-card__description" }, h("slot", null));
        }
        else if (this.description) {
            return h("div", { class: "gcds-card__description" }, h("gcds-text", { "margin-bottom": '0' }, this.description));
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
            return (h(Host, { key: '124e17eb577553da16ff506265dd5d7cba152b4b' }, h("div", { key: '97a3007905773f8d492d2e922db6492e754bee78', class: "gcds-card" }, badge && !errors.includes('badge') && (h("gcds-text", { key: 'a80df555afd0a45a199647e81ee2dec228802612', id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "small" }, h("strong", { key: 'f12b963c86c4d79ad42b58fefffb6421d636bfc8' }, h("gcds-sr-only", { key: '1a803e937a2f52812f3b89bcd496b3181f933f6c' }, i18n[lang].tagged), badge))), imgSrc && (h("img", { key: 'b4a7c3d05fca6a235690d216e0ea9803a478f5b4', src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), Element != 'a' ? (h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), h("gcds-link", { href: href }, cardTitle))) : (h("gcds-link", Object.assign({ href: href, class: "gcds-card__title" }, taggedAttr), cardTitle)), renderDescription)));
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
                "attribute": "card-title",
                "reflect": true
            },
            "href": {
                "type": "string",
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
                "attribute": "href",
                "reflect": true
            },
            "cardTitleTag": {
                "type": "string",
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
                    "text": "The card title tag attribute specifies HTML element the title renders as"
                },
                "attribute": "card-title-tag",
                "reflect": false,
                "defaultValue": "'a'"
            },
            "description": {
                "type": "string",
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
                "attribute": "description",
                "reflect": true
            },
            "badge": {
                "type": "string",
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
                "attribute": "badge",
                "reflect": true
            },
            "imgSrc": {
                "type": "string",
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
                "attribute": "img-src",
                "reflect": true
            },
            "imgAlt": {
                "type": "string",
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
                "attribute": "img-alt",
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
                    "text": "Emitted when the card has been clicked."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
