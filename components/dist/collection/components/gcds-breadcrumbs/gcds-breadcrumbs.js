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
        return (h(Host, { key: 'f0eefe430929add48ae1206e8d6df0e3d04ceb65' }, h("nav", { key: '6080bc827624fe8711ced9bd3b53defda780be6f', "aria-label": i18n[lang].label, class: "gcds-breadcrumbs" }, h("ol", { key: '734f991a4ede7c602d744d2b40dd92da2d419faf', class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ? (h("gcds-breadcrumbs-item", { href: i18n[lang].link }, "Canada.ca")) : null, h("slot", { key: '7204e441446c6640b0530a98ac1439c4d1185b35' })))));
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
                "attribute": "hide-canada-link",
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
