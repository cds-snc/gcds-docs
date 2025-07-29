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
        return (h(Host, { key: '90f8fa237ca8093b35ae49b783e23d48cc75d30d' }, h("div", { key: 'cf38cfd545beb3bb1291336348930ff27dfcbeab', class: "gcds-lang-toggle" }, h("gcds-sr-only", { key: '82943994e5442fd5ad133c5f2d2cfdfa3f93817e', id: "lang-toggle__heading", tag: "h2" }, i18n[lang].heading), h("gcds-link", { key: '9f4a16f9f8bfe97a11790f5ad3665cfaff77837f', size: "regular", href: href, lang: i18n[lang].abbreviation }, h("span", { key: 'de2f6c64c38024281c1e9b6778daabe77bbfbb33' }, i18n[lang].language), h("abbr", { key: '0af8c87a23d7ff5b0c8031edff0a0f83b4cc8f67', title: i18n[lang].language }, i18n[lang].abbreviation)))));
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
