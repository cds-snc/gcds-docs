import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsPhaseBanner {
    constructor() {
        this.bannerRole = 'primary';
        this.container = 'xl';
        this.isFixed = undefined;
        this.lang = undefined;
    }
    /**
     * Events
     */
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
        const { bannerRole, container, isFixed, lang } = this;
        return (h(Host, { key: '7a9ab092fa24decf0cbb189ff423a00a590a9353' }, h("div", { key: '9abd59ac3f9f36c00f29df649ddcc4a0ba40fd12', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": i18n[lang].label }, h("gcds-container", { key: 'c753160aee35e77486e88bb29267765418284187', size: container, centered: true }, h("div", { key: '0aac78887062cdc82bb882a4d886ecd2c4cb0537', class: "banner__content" }, h("figure", { key: '13b9b8d23f68dc271ef15a913da44720ef87f3aa', class: "banner__icon icon--left" }, h("slot", { key: '86153fa07f9421599dd010f2aaed32b73c74d416', name: "banner-icon-left" })), h("div", { key: '974677e29dc9ee44f7709283b553ae791c2a2843', class: "banner__details" }, h("slot", { key: 'd485fcdd5578ac584ec5d1f2ea8a271bb8b4528a', name: "banner-text" }), h("slot", { key: 'ee3c3e130c8476298fee89ce36ea6316efc7a747', name: "banner-cta" })), h("figure", { key: '8e84fd783b06c179748c0370c9e4fa7362972a3c', class: "banner__icon icon--right" }, h("slot", { key: '553594a2b70c69ac1e46847425b934ccd7087462', name: "banner-icon-right" })))))));
    }
    static get is() { return "gcds-phase-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-phase-banner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-phase-banner.css"]
        };
    }
    static get properties() {
        return {
            "bannerRole": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary'",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines banner role."
                },
                "attribute": "banner-role",
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "container": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'",
                    "resolved": "\"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the container width of the phase banner content"
                },
                "attribute": "container",
                "reflect": false,
                "defaultValue": "'xl'"
            },
            "isFixed": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines if the banner's position is fixed."
                },
                "attribute": "is-fixed",
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
//# sourceMappingURL=gcds-phase-banner.js.map
