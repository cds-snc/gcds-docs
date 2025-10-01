import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * The language toggle is a link to the same content in the other Official Language.
 */
export class GcdsLangToggle {
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
    render() {
        const { lang, href } = this;
        return (h(Host, { key: 'abb80842d149c0505fdfaeb1bea1d693f8ab7acd' }, h("div", { key: '544f51158c13552ca6d918a976851ae114d8b15b', class: "gcds-lang-toggle" }, h("gcds-sr-only", { key: 'ad847ef3d7b32528ac5a02d86907e7646a6133b6', id: "lang-toggle__heading", tag: "h2" }, i18n[lang].heading), h("gcds-link", { key: '7ed33cd0eee4468e60294eb449627a546128f9b8', size: "regular", href: href, lang: i18n[lang].abbreviation }, h("span", { key: 'd1586f4d7c5b2b0b16f5e123e0dbc1715e9a7616' }, i18n[lang].language), h("abbr", { key: '38bfded01448eeccd475feca0275d34cbb8745b3', title: i18n[lang].language }, i18n[lang].abbreviation)))));
    }
    static get is() { return "gcds-lang-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-lang-toggle.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-lang-toggle.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The href attribute specifies the URL of the opposite language page"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "lang": {}
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
                    "text": "Emitted when the link has focus."
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
                    "text": "Emitted when the link loses focus."
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
                    "text": "Emitted when the link has been clicked. Contains the href in the event detail."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-lang-toggle.js.map
