import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
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
        return (h(Host, { key: 'e7c2600f42e0d941cbaef4e2599645dfdd65348a' }, h("div", { key: 'f4794500d6da469c8a39ec04a21ce636b40d64ea', class: "gcds-lang-toggle" }, h("gcds-sr-only", { key: '9d6672ff42b404b7af4c9689cfc38197dda42cca', id: "lang-toggle__heading", tag: "h2" }, i18n[lang].heading), h("gcds-link", { key: '247e2ee655c2f9e16e7b6e19320864ef06bd8280', size: "regular", href: href, lang: i18n[lang].abbreviation }, h("span", { key: 'da07bdf4b438ad9144e5ba301a73b83c2aabf713' }, i18n[lang].language), h("abbr", { key: '10363892959c246a591463fbdbd42f605c5a164b', title: i18n[lang].language }, i18n[lang].abbreviation)))));
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-lang-toggle.js.map
