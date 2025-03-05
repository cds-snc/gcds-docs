import { Host, h, Fragment, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
import SignatureEn from "./assets/sig-blk-en.svg";
import SignatureFr from "./assets/sig-blk-fr.svg";
import WordmarkEn from "./assets/wmms-spl-en.svg";
import WordmarkFr from "./assets/wmms-spl-fr.svg";
export class GcdsSignature {
    constructor() {
        this.type = 'signature';
        this.variant = 'colour';
        this.hasLink = false;
        this.lang = undefined;
    }
    validateType(newValue) {
        if (newValue != 'signature' && newValue != 'wordmark') {
            this.type = 'signature';
        }
    }
    validateVariant(newValue) {
        if (newValue != 'colour' && newValue != 'white') {
            this.variant = 'colour';
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.validateType;
        this.validateVariant;
        this.updateLang();
    }
    get selectSVG() {
        switch (this.type) {
            case 'wordmark':
                if (this.lang == 'en') {
                    return WordmarkEn;
                }
                else {
                    return WordmarkFr;
                }
            case 'signature':
            default:
                if (this.lang == 'en') {
                    return SignatureEn;
                }
                else {
                    return SignatureFr;
                }
        }
    }
    get svgLabel() {
        let altText = '';
        if (this.lang === 'en') {
            altText = (h(Fragment, null, i18n['en'].gc, " / ", h("span", { lang: "fr" }, i18n['fr'].gc)));
        }
        else {
            altText = (h(Fragment, null, i18n['fr'].gc, " / ", h("span", { lang: "en" }, i18n['en'].gc)));
        }
        return (h("gcds-sr-only", { tag: "span", id: "signature-title" }, altText));
    }
    render() {
        const { type, hasLink, lang, selectSVG, svgLabel } = this;
        const sigAttrs = {
            class: 'gcds-signature',
        };
        const Tag = hasLink ? 'a' : 'div';
        if (Tag === 'a') {
            sigAttrs['href'] = i18n[lang].link;
        }
        return (h(Host, { key: '47d75f32629a27d13f1026f00a584a9f8b580f05' }, type === 'signature' ? (h(Tag, Object.assign({}, sigAttrs), h("div", { innerHTML: selectSVG }), svgLabel)) : (h("div", { class: "gcds-signature", innerHTML: selectSVG }))));
    }
    static get is() { return "gcds-signature"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-signature.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-signature.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'signature' | 'wordmark'",
                    "resolved": "\"signature\" | \"wordmark\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of graphic to render"
                },
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'signature'"
            },
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'colour' | 'white'",
                    "resolved": "\"colour\" | \"white\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The colour variant to render"
                },
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "'colour'"
            },
            "hasLink": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Has link to canada.ca. Only applies to signature"
                },
                "attribute": "has-link",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "lang": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "validateType"
            }, {
                "propName": "variant",
                "methodName": "validateVariant"
            }];
    }
}
//# sourceMappingURL=gcds-signature.js.map
