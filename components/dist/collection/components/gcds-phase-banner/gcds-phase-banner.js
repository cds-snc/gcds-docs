import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsPhaseBanner {
    constructor() {
        /**
         * Props
         */
        /**
         * Defines banner role.
         */
        this.bannerRole = 'primary';
        /**
         * Defines the container width of the phase banner content
         */
        this.container = 'xl';
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
        return (h(Host, { key: '3ef9d402ed5d00edcca05e2a45ed8e0e14675dd1' }, h("div", { key: '1173d307a0e98624faba72445afad7534d115ffa', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": i18n[lang].label }, h("gcds-container", { key: 'b538a1a6155d73d5353389a393cf0fc00dd86201', size: container, centered: true }, h("div", { key: 'eb803333e6e5ef41b52510fc23ad3ac831bb45a5', class: "banner__content" }, h("figure", { key: '1831215c9c766c79abebfeee59a96f4bff0058b2', class: "banner__icon icon--left" }, h("slot", { key: '617504c5372c05f86e8300b1ad4ec65088f28fa4', name: "banner-icon-left" })), h("div", { key: '79212595540aaf4ecec3daa82ec9a76279b614c1', class: "banner__details" }, h("slot", { key: '6ecf5dd32ae92e2a5f829790300d56b23208cda0', name: "banner-text" }), h("slot", { key: '97750bdbf20710cd924d51325d8d322833194bbc', name: "banner-cta" })), h("figure", { key: '4f041c68abc255bd0633a0c28f63bb38b30ea2a6', class: "banner__icon icon--right" }, h("slot", { key: '199acb4e29bc22e2b32b4e8d3e6f3caf6e4c21f6', name: "banner-icon-right" })))))));
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
                "attribute": "banner-role",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "container": {
                "type": "string",
                "attribute": "container",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'xl'"
            },
            "isFixed": {
                "type": "boolean",
                "attribute": "is-fixed",
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-phase-banner.js.map
