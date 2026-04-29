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
        return (h(Host, { key: '62aa9c22bff1a0f8778c5835f7e63646cbfe1a46' }, h("div", { key: '88d41598195886ac785f5892a98b21b4ec6305a1', class: "gcds-lang-toggle" }, h("gcds-sr-only", { key: '6237c11ac97300f34d12b1514353715ff08cc3c7', id: "lang-toggle__heading", tag: "h2" }, i18n[lang].heading), h("gcds-link", { key: 'd71e4738bf386fce9bd917c7ebad9996e668c109', size: "regular", href: href, lang: i18n[lang].abbreviation }, h("span", { key: 'ad354cf5d68967abc49af62bd13dcb403f1247b0' }, i18n[lang].language), h("abbr", { key: '5d4d1a9b12e51c2fdb1740aea1d0a237b926ba85', title: i18n[lang].language }, i18n[lang].abbreviation)))));
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
