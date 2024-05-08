import { Host, h, Fragment, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsCard {
    constructor() {
        this.type = 'link';
        this.cardTitle = undefined;
        this.titleElement = 'a';
        this.href = undefined;
        this.description = undefined;
        this.tag = undefined;
        this.imgSrc = undefined;
        this.imgAlt = undefined;
        this.lang = undefined;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    get hasCardFooter() {
        return !!this.el.querySelector('[slot="footer"]');
    }
    render() {
        const { type, cardTitle, titleElement, href, description, tag, imgSrc, imgAlt, hasCardFooter, lang, } = this;
        const Element = titleElement;
        const taggedAttr = {};
        if (tag) {
            taggedAttr['aria-describedby'] = 'gcds-card__tag';
        }
        return (h(Host, null, h("div", { class: `gcds-card gcds-card--${type}` }, imgSrc && (h("img", { src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), tag && (h("gcds-text", { id: "gcds-card__tag", class: "gcds-card__tag", "text-role": "secondary", size: "caption" }, h("gcds-sr-only", null, i18n[lang].tagged), tag)), Element != 'a' ? (h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), h("gcds-link", { href: href }, cardTitle))) : (h("gcds-link", Object.assign({ href: href, class: "gcds-card__title" }, taggedAttr), cardTitle)), description && (h("gcds-text", { class: "gcds-card__description" }, description)), hasCardFooter && (h(Fragment, null, h("div", { class: "gcds-card__spacer" }), h("slot", { name: "footer" }))))));
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
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'link' | 'action'",
                    "resolved": "\"action\" | \"link\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type attribute specifies how the card renders as a link"
                },
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'link'"
            },
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
            "titleElement": {
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
                    "text": "The title element attribute specifies HTML element the title renders as"
                },
                "attribute": "title-element",
                "reflect": false,
                "defaultValue": "'a'"
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
            "tag": {
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
                    "text": "The tag attribute specifies the tag text that appears above the card title"
                },
                "attribute": "tag",
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
            "lang": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-card.js.map
