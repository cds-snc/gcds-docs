import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
import SignatureEn from "./assets/sig-blk-en.svg";
import SignatureFr from "./assets/sig-blk-fr.svg";
import WordmarkEn from "./assets/wmms-spl-en.svg";
import WordmarkFr from "./assets/wmms-spl-fr.svg";
/**
 * The signature is the Government of Canada landmark identifier found in the header or footer.
 */
export class GcdsSignature {
    constructor() {
        /**
         * Props
         */
        /**
         * The type of graphic to render
         */
        this.type = 'signature';
        /**
         * The colour variant to render
         */
        this.variant = 'colour';
        /**
         * Has link to canada.ca. Only applies to signature
         */
        this.hasLink = false;
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
    render() {
        const { type, hasLink, lang, selectSVG } = this;
        const sigAttrs = {
            class: 'gcds-signature',
        };
        const Tag = hasLink ? 'a' : 'div';
        if (Tag === 'a') {
            sigAttrs['href'] = i18n[lang].link;
        }
        return (h(Host, { key: '9371550c9068d0041b6c661746206cd0f9eab90b' }, type === 'signature' ? (h(Tag, Object.assign({}, sigAttrs), h("div", { innerHTML: selectSVG }))) : (h("div", { class: "gcds-signature", innerHTML: selectSVG }))));
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
                "attribute": "type",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'signature'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'colour'"
            },
            "hasLink": {
                "type": "boolean",
                "attribute": "has-link",
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
                "getter": false,
                "setter": false,
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
