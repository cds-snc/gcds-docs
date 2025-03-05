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
        return (h(Host, { key: '05fc4f7ec61276b9e15ccb9fe75f257049bf3577' }, h("div", { key: 'dc156971e988f7c4024ad760777e27f65c30b533', class: "gcds-lang-toggle" }, h("gcds-sr-only", { key: 'dae3c2e582bbe214f9ec8422bacc3f6bb5f61dfe', id: "lang-toggle__heading", tag: "h2" }, i18n[lang].heading), h("gcds-link", { key: '6bf0e599cace009ab90efce6a355389b3374e8a7', size: "regular", href: href, lang: i18n[lang].abbreviation }, h("span", { key: 'cba5121aac09ac07fabc7c409653d83126f1da9d' }, i18n[lang].language), h("abbr", { key: 'bf8fc9ac514ed5c243c52d63be1cef06cb024b9e', title: i18n[lang].language }, i18n[lang].abbreviation)))));
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
