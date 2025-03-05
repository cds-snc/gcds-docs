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
        return (h(Host, { key: '01721695ba82d2faad63aabf1308ab32a2277576' }, h("div", { key: '8f863517645dfd61949cc28d8fe4e4bfdb471734', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": i18n[lang].label }, h("gcds-container", { key: 'e09458246e2769bff036529d6ea7cdd12c4c78f0', size: container, centered: true }, h("div", { key: 'c52e8231ee66f8e68c85ca6d0dc98eb7343e94d9', class: "banner__content" }, h("figure", { key: '0360d88ce03c0ed816f700930bf2d7647cad3d87', class: "banner__icon icon--left" }, h("slot", { key: 'c59ff70d5fba77c3cb060674c3d61b5f427b3eb0', name: "banner-icon-left" })), h("div", { key: '89b3f4e118778f91983b3114fb134679d9b5be4d', class: "banner__details" }, h("slot", { key: 'dd5cc8315c49b2b10564ea9240f336ac9d0e79c9', name: "banner-text" }), h("slot", { key: '6d1f17700cc66416b93f2c80a6e4d6da3f4d5602', name: "banner-cta" })), h("figure", { key: '9596f293b8bed55c2738504f98b4827f21ce40ea', class: "banner__icon icon--right" }, h("slot", { key: '0355ed216936f151188a800fe50ebc4443ecccb6', name: "banner-icon-right" })))))));
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
