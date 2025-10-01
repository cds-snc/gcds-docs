import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * The header is the responsive Government of Canada branded header landmark.
 *
 * @slot banner - Slot to add a banner across the top of the header.
 * @slot breadcrumb - Slot to add breadcrumbs at the bottom of the header.
 * @slot menu - Slot to add a menu below the divider line.
 * @slot search - Slot to add a search field to the right of the header.
 * @slot skip-to-nav - Slot to add a hidden skip to content navigation at the top of the header.
 * @slot signature - Slot to replace Government of Canada signature.
 * @slot toggle - Slot to add a custom language toggle in the top-right of the header.
 */
export class GcdsHeader {
    constructor() {
        /**
         * GcdsSignature - GCDS signature links to Canada.ca
         */
        this.signatureHasLink = true;
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
        return (h(Host, { key: 'a7aec791ab78ca2491fd9dfc043e3b42453de2a4', role: "banner" }, renderSkipToNav, hasBanner ? h("slot", { name: "banner" }) : null, h("div", { key: '1ffdfb16dbd583dc45d65edde526f10ca5445d3d', class: "gcds-header__brand" }, h("div", { key: 'fd921bdd08e088d99849ee37e67ff70502630cfb', class: `brand__container ${!hasSearch ? 'container--simple' : ''}` }, renderToggle, renderSignature, renderSearch)), h("slot", { key: '6ace8183cce4cf7de0c04c99763194f002ea4e3f', name: "menu" }), hasBreadcrumb ? (h("div", { class: "gcds-header__container" }, h("slot", { name: "breadcrumb" }))) : null));
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
                "attribute": "lang-href",
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
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "signatureVariant": {
                "type": "string",
                "attribute": "signature-variant",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "signatureHasLink": {
                "type": "boolean",
                "attribute": "signature-has-link",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "skipToHref": {
                "type": "string",
                "attribute": "skip-to-href",
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
                "getter": false,
                "setter": false,
                "reflect": false
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
//# sourceMappingURL=gcds-header.js.map
