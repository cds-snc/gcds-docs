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
        return (h(Host, { key: '03d1a8de7df2a91d9a8b79cca4bef17377585269' }, h("div", { key: 'e6194d8cf29385c2c6079393ff7c235735d7d807', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": i18n[lang].label }, h("gcds-container", { key: '5b05537336d102ca070af8199acdf2444f729de8', size: container, centered: true }, h("div", { key: '8ac815e722f021f7d23f7b23267410f1dbefd613', class: "banner__content" }, h("figure", { key: 'afec7938dc8628e23a73b46baa6f01490d9d1d6c', class: "banner__icon icon--left" }, h("slot", { key: '749ff139daab3c0d92cc1bcc707d36beb860c6eb', name: "banner-icon-left" })), h("div", { key: '17adb8cb3b7f9b0a076407c611748e1f665e7eca', class: "banner__details" }, h("slot", { key: '8482f2af1178f5f070f81c54c0e4f7e886055a14', name: "banner-text" }), h("slot", { key: '6b240f9a45c7466b145610020cc45bacf23c82d7', name: "banner-cta" })), h("figure", { key: '15046443505ce0469c648d914b14f990a1c61a8c', class: "banner__icon icon--right" }, h("slot", { key: 'e539510f180473f2497c2634b16e91202af86cdf', name: "banner-icon-right" })))))));
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
