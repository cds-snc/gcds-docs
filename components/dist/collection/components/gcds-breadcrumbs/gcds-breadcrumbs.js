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
        return (h(Host, { key: 'b491e1522dfdc3320619a47f4de098ba18948fc2' }, h("nav", { key: '448a711e139c76385faa9dc68a9fc848b8756fae', "aria-label": i18n[lang].label, class: "gcds-breadcrumbs" }, h("ol", { key: 'a2a2793c7ffc1ffe313d97be01d038d6367994fc', class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ? (h("gcds-breadcrumbs-item", { href: i18n[lang].link }, "Canada.ca")) : null, h("slot", { key: 'cecaeb514adb99fc32d0edc9692290832292a853' })))));
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
