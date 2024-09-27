import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsHeader {
    constructor() {
        this.langHref = undefined;
        this.signatureVariant = undefined;
        this.signatureHasLink = true;
        this.skipToHref = undefined;
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
    get renderSkipToNav() {
        if (this.el.querySelector('[slot="skip-to-nav"]')) {
            return h("slot", { name: "skip-to-nav" });
        }
        else if (this.skipToHref) {
            return (h("nav", { class: "gcds-header__skip-to-nav", "aria-label": i18n[this.lang].skipLabel }, h("gcds-link", { href: this.skipToHref }, i18n[this.lang].skip)));
        }
        else {
            return;
        }
    }
    get renderToggle() {
        if (this.el.querySelector('[slot="toggle"]')) {
            return h("slot", { name: "toggle" });
        }
        else if (this.langHref) {
            return (h("section", { class: "brand__toggle" }, h("gcds-lang-toggle", { lang: this.lang, href: this.langHref })));
        }
        else {
            return;
        }
    }
    get renderSignature() {
        const signVariant = this.signatureVariant
            ? this.signatureVariant
            : 'colour';
        if (this.el.querySelector('[slot="signature"]')) {
            return h("slot", { name: "signature" });
        }
        else {
            return (h("div", { class: "brand__signature" }, h("gcds-signature", { type: "signature", variant: signVariant, "has-link": this.signatureHasLink, lang: this.lang })));
        }
    }
    get renderSearch() {
        if (this.el.querySelector('[slot="search"]')) {
            return (h("div", { class: "brand__search" }, h("slot", { name: "search" })));
        }
        else {
            return;
        }
    }
    get hasSearch() {
        return !!this.el.querySelector('[slot="search"]');
    }
    get hasBanner() {
        return !!this.el.querySelector('[slot="banner"]');
    }
    get hasBreadcrumb() {
        return !!this.el.querySelector('[slot="breadcrumb"]');
    }
    render() {
        const { renderSkipToNav, renderToggle, renderSignature, renderSearch, hasSearch, hasBanner, hasBreadcrumb, } = this;
        return (h(Host, { key: 'f52ff86ea5f438fa5b8b91a2aa2dbbda002e5302', role: "banner" }, renderSkipToNav, hasBanner ? h("slot", { name: "banner" }) : null, h("div", { key: '7e518fb76a2727b298079f283d15acf91e83d4d1', class: "gcds-header__brand" }, h("div", { key: 'f667c6c6cf241700dcc03086fbca4fa2d3f3ea4b', class: `brand__container ${!hasSearch ? 'container--simple' : ''}` }, renderToggle, renderSignature, renderSearch)), h("slot", { key: 'a31b379ff70560651143c9d5f9299128b13eeff4', name: "menu" }), hasBreadcrumb ? (h("div", { class: "gcds-header__container" }, h("slot", { name: "breadcrumb" }))) : null));
    }
    static get is() { return "gcds-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-header.css"]
        };
    }
    static get properties() {
        return {
            "langHref": {
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
                    "text": "GcdsLangToggle - The href attribute specifies the URL of the opposite language page"
                },
                "attribute": "lang-href",
                "reflect": true
            },
            "signatureVariant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'colour'\n    | 'white'",
                    "resolved": "\"colour\" | \"white\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "GcdsSignature - The variant of the Government of Canada signature"
                },
                "attribute": "signature-variant",
                "reflect": false
            },
            "signatureHasLink": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "GcdsSignature - GCDS signature links to Canada.ca"
                },
                "attribute": "signature-has-link",
                "reflect": false,
                "defaultValue": "true"
            },
            "skipToHref": {
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
                    "text": "Top navigation - Skip to content href"
                },
                "attribute": "skip-to-href",
                "reflect": false
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
//# sourceMappingURL=gcds-header.js.map
