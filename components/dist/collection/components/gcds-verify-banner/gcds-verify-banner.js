import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
import CanadaFlag from "./assets/canada-flag.svg";
import ContentToggleArrow from "./assets/content-toggle-arrow.svg";
export class GcdsVerifyBanner {
    constructor() {
        this.container = 'xl';
        this.isFixed = false;
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
        const { container, isFixed, lang } = this;
        return (h(Host, null, h("details", { class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { class: "svg-container", innerHTML: CanadaFlag }), h("p", null, h("small", null, i18n[lang].summary.text), h("button", { class: "verify-banner__toggle" }, h("small", null, i18n[lang].summary.link), h("span", { class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", null, h("small", null, i18n[lang].content.description)), h("br", null), h("gcds-grid", { tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", null, h("h4", null, i18n[lang].content.url.heading), h("p", null, h("small", null, i18n[lang].content.url.text))), h("li", null, h("h4", null, i18n[lang].content.languages.heading), h("p", null, h("small", null, i18n[lang].content.languages.text))), h("li", null, h("h4", null, i18n[lang].content.https.heading), h("p", null, h("small", null, i18n[lang].content.https.text, " ", h("strong", null, "https://"), "."))), h("li", null, h("h4", null, i18n[lang].content.contact.heading), h("p", null, h("small", null, i18n[lang].content.contact.text))))))));
    }
    static get is() { return "gcds-verify-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-verify-banner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-verify-banner.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Defines the container width of the verify banner content"
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
//# sourceMappingURL=gcds-verify-banner.js.map
