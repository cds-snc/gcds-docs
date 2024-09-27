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
        return (h(Host, { key: '115fc253ff9bf972f3a5c1ac88792278947f97b4' }, h("div", { key: '5fd1243f57780af9046a29989167dc56af32bb2a', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": i18n[lang].label }, h("gcds-container", { key: 'ee27279607ed91875a9f18232b726f21d57e5688', size: container, centered: true }, h("div", { key: '271c53ac57814749faed00240ed1b5f538b08a33', class: "banner__content" }, h("figure", { key: '112b823a737c1f02de75505a7c25af6ca64f080c', class: "banner__icon icon--left" }, h("slot", { key: '398cc31934e1af546e69ed292cf8af638c682cab', name: "banner-icon-left" })), h("div", { key: 'b8b8669f9ba0a24d6e14d266799238613916f687', class: "banner__details" }, h("slot", { key: 'f16b4f5258f493866f361c26a9e9641273ccb9ec', name: "banner-text" }), h("slot", { key: '9660cdfcba47c12f3f51758ad6015a6845f2a154', name: "banner-cta" })), h("figure", { key: '9e7e29bf2afce3ce401663786e95970a20b0a0a8', class: "banner__icon icon--right" }, h("slot", { key: 'e976f308e03921088da7ef482d809adac7723e33', name: "banner-icon-right" })))))));
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
