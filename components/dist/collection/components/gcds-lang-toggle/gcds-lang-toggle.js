import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsLangToggle {
    constructor() {
        this.href = undefined;
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
    render() {
        const { lang, href } = this;
        return (h(Host, { key: 'eb21f31e07263f63e9e6bd81e03b7d69e7fc5c22' }, h("div", { key: 'f259bdd2095c8fbec75ac4958192de54f1446efd', class: "gcds-lang-toggle" }, h("gcds-sr-only", { key: '5f1c04d337fd5b8b190be3e9c5731f640b80f89c', id: "lang-toggle__heading", tag: "h2" }, i18n[lang].heading), h("gcds-link", { key: 'c0343104552957383ad0e0c06929cb7987f568b1', size: "regular", href: href, lang: i18n[lang].abbreviation }, h("span", { key: 'dbf125e2a0b95bcab90bc38ba8a508b18cdbe1a0' }, i18n[lang].language), h("abbr", { key: '4959f73d060789b0666d0cae393833437c54de5c', title: i18n[lang].language }, i18n[lang].abbreviation)))));
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
                "attribute": "href",
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
//# sourceMappingURL=gcds-lang-toggle.js.map
