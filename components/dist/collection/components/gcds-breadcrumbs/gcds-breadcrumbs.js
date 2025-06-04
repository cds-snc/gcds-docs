import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsBreadcrumbs {
    constructor() {
        this.hideCanadaLink = false;
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
    render() {
        const { hideCanadaLink, lang } = this;
        return (h(Host, { key: '3cebead5d49755452f7dbf0a8292b38e86d481c9' }, h("nav", { key: '17a5ccde070a513bf3f37aae1cda845ed4e547fd', "aria-label": i18n[lang].label, class: "gcds-breadcrumbs" }, h("ol", { key: '74eaf642af3397da9f222499713148f50ae4ee99', class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ? (h("gcds-breadcrumbs-item", { href: i18n[lang].link }, "Canada.ca")) : null, h("slot", { key: '8c90086d5e3bd78cda3594f7ac8d57feb7a58020' })))));
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
                "attribute": "hide-canada-link",
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
