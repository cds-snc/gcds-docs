import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * Breadcrumbs is a path to the current page from each preceding level of the site's hierarchy.
 *
 * @slot default - Slot for the breadcrumb items.
 */
export class GcdsBreadcrumbs {
    constructor() {
        /**
         * Props
         */
        /**
         * Defines if the default canada.ca link is displayed or omitted.
         */
        this.hideCanadaLink = false;
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
        const { hideCanadaLink, lang } = this;
        return (h(Host, { key: '03039bf66fd3e4f7939818708e4b2e3eecb9ea16' }, h("nav", { key: 'a544a335b8a3308bac153517792c2ff9b24cc436', "aria-label": i18n[lang].label, class: "gcds-breadcrumbs" }, h("ol", { key: 'f4daf2765861e5b362e50c5197e34457c2088aa4', class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ? (h("gcds-breadcrumbs-item", { href: i18n[lang].link }, "Canada.ca")) : null, h("slot", { key: '0001a34312ea97c7e9c4f41f656051482184142e' })))));
    }
    static get is() { return "gcds-breadcrumbs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-breadcrumbs.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-breadcrumbs.css"]
        };
    }
    static get properties() {
        return {
            "hideCanadaLink": {
                "type": "boolean",
                "attribute": "hide-canada-link",
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
                    "text": "Defines if the default canada.ca link is displayed or omitted."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
//# sourceMappingURL=gcds-breadcrumbs.js.map
