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
        return (h(Host, { key: '3a359e2f739de9f0b5b1f4875616f13d926b7c93' }, h("details", { key: '36dbad0f247d5adac5600c345547210b703be94c', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: 'a4258b57b63a5634a3e2dd3784718b5767e022da', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: 'b2ce523e45247b183eff7b85e717688b5b09d3f3', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: '9dc5c963bd59d2bcd9e2cf32d99c82e2212ca498' }, h("small", { key: '0ec143a4ce1d9f50a914ce8e5e37bb5e486ef3aa' }, i18n[lang].summary.text), h("button", { key: '438d1af370ab648eec84b2c66e13a12f0537752c', class: "verify-banner__toggle" }, h("small", { key: '5399bf38ac46c84510385c5e04783035eadf9d4f' }, i18n[lang].summary.link), h("span", { key: '4bd05582cd3ce82b6bd25c8ece8fd6d5319d561a', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: 'c14eb05c5bee6b7539f0299d94a85022949d208f', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: 'da5a85d1cee0a3661bd40f3ad0d6998e5ac073a3' }, h("small", { key: 'ea5f95f05be7a82ff58036ef11cdc7eac9d9887d' }, i18n[lang].content.description)), h("br", { key: 'b8d3cb8a7af7710da4ec26a814080f910d144fed' }), h("gcds-grid", { key: '7ce30265f4350c92837edfea5f223384ec19382d', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'dbaa8b5b0d85c9d804938b2bd702dc9419fbdc41' }, h("h4", { key: 'a5870058080d105ef5df2a5ada92e4d0efca49fd' }, i18n[lang].content.url.heading), h("p", { key: 'ed2d3d9b33b44a04e4416d87c4b1e8f08170dfa2' }, h("small", { key: 'a63c2b37cf7398b54cb56ddcabae8ff5591e3b78' }, i18n[lang].content.url.text))), h("li", { key: '8848fb6834f7028e73758c519ad5b90d6488b006' }, h("h4", { key: '96515dba93042ab9174ab69ea79a25ce4369ec78' }, i18n[lang].content.languages.heading), h("p", { key: '762995079f47a4e2bd0045743ffd3cc7c4768a11' }, h("small", { key: '18342f031772a082604902ff4fe7abd0c6b43eb2' }, i18n[lang].content.languages.text))), h("li", { key: '8742fec5049734b9de8047aaa9625fa3d10e8af9' }, h("h4", { key: 'ef9ec15f10461f9c31e68784dea1f1b1704a8f58' }, i18n[lang].content.https.heading), h("p", { key: '5be480efae55e752f52da02182c800f6dfb3011c' }, h("small", { key: '4bd5c68679d42da7a34935d2ce0f5a6cd5ecd20f' }, i18n[lang].content.https.text, " ", h("strong", { key: 'bc02af8813d9e4cdeffdca40b36c9a633f120ed3' }, "https://"), "."))), h("li", { key: 'f17b0baad7117c8def9625ff3c53576b14e063e2' }, h("h4", { key: 'e884b635d63c1b510f6b01c00d19e8c3c55fc8e7' }, i18n[lang].content.contact.heading), h("p", { key: '9285d3c76b451350428bc82172bee2d3328b2413' }, h("small", { key: '713bcafc07cf60dfcb02c8d6868fa94c7a02026e' }, i18n[lang].content.contact.text))))))));
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
