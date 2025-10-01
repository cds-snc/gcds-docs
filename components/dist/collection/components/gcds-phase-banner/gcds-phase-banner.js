import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * Phase banner displays a banner indicating the current phase of a project or feature, with optional icons and call-to-action elements.
 *
 * @slot banner-cta - Slot for the call-to-action element in the banner.
 * @slot banner-icon-left - Slot for displaying an icon/image on the left of the banner.
 * @slot banner-icon-right - Slot for displaying an icon/image on the right of the banner.
 * @slot banner-text - Slot for the main content of the banner.
 */
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
        return (h(Host, { key: '9e22cdaf600a5c04b1a6866e7ca6386a1c52b22f' }, h("div", { key: '8815335957b79321257d2652ab9412071678c835', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": i18n[lang].label }, h("gcds-container", { key: 'f2ea1e5e0462f877f5f220762dc2ba0731177956', size: container, centered: true }, h("div", { key: '8f53b7147fa6cda3d0c93e48d1af7e7ee5e939b3', class: "banner__content" }, h("figure", { key: '065b45c6af563cde9a1239e0d156e7851cd5ec9b', class: "banner__icon icon--left" }, h("slot", { key: '0ebff7836c9f90e51d99ce83ade049a4560061a9', name: "banner-icon-left" })), h("div", { key: '75c91c8cefc6258a786d7a8a5bb0a12192701555', class: "banner__details" }, h("slot", { key: '02d2d3d4bc23219520073a35c14da40e4a98df44', name: "banner-text" }), h("slot", { key: 'd23c8e87203df30dfbb97682fc610acbb4477b90', name: "banner-cta" })), h("figure", { key: 'eb80fcd4a211eae36bfeaf198c75f6fdf0eac375', class: "banner__icon icon--right" }, h("slot", { key: 'ab144b1be3f32ab0efdb19ad5be68f12b342e745', name: "banner-icon-right" })))))));
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
