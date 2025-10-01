import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
import CanadaFlag from "./assets/canada-flag.svg";
import ContentToggleArrow from "./assets/content-toggle-arrow.svg";
/**
 * Verify banner helps users verify they are on an official Government of Canada website by providing clear information on how to recognize legitimate Government of Canada domains and secure connections.
 */
export class GcdsVerifyBanner {
    constructor() {
        /**
         * Props
         */
        /**
         * Defines the container width of the verify banner content
         */
        this.container = 'xl';
        /**
         * Defines if the banner's position is fixed.
         */
        this.isFixed = false;
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
        return (h(Host, { key: '81973537a21ff8bc06d7af751286180909137d4f' }, h("details", { key: 'ea98f8b396c065be3338f62f1b4bdfbffddc6d68', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: 'b83b678363782e280872028016c1830f057f79a5', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: 'ea8489486256e7cf983ea62b534b3b953ffbdfd9', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: '441d0f62bfaa8232766fa25d4f293856d5919fc5' }, h("small", { key: 'fd9985644c5d448e783fe121392dcc752a11894c' }, i18n[lang].summary.text), h("button", { key: 'e367c1f16b77914512d7191d9c4acb979da28898', class: "verify-banner__toggle" }, h("small", { key: '1b7cec1da1f70df3108188f67c58df05e9f43265' }, i18n[lang].summary.link), h("span", { key: '88387f3e006781d43354182badf4db34ac890752', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: '2a90d1b70f1ccf1c08f2d887f6bd4ec89138362a', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: 'c70e302d34681c52dbb2157020955821de2e66a0' }, h("small", { key: '91e86ac20f3241a976463438b7164183e16584ec' }, i18n[lang].content.description)), h("br", { key: '802f4c5b24f4b63b9764056638329a1be0580e2a' }), h("gcds-grid", { key: 'c9347190bdd322599825eb56bc78e63fcf28702f', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'bcbd1951e53638d63f335c3960c3be067f674f25' }, h("h4", { key: '093d8a04f8eb8ddb1d3b8aa07e430f2cc0ddc76d' }, i18n[lang].content.url.heading), h("p", { key: 'd5c47c818ecde61d8ef45138408231ec8332eee9' }, h("small", { key: '21e821fe073fa5260ba129da8e53f226e5f7922d' }, i18n[lang].content.url.text))), h("li", { key: '6bf334ae274e581dc7e7529b8e078123aa501836' }, h("h4", { key: '38001a7718f7a4384d8dbd7816285e193bd80f0f' }, i18n[lang].content.languages.heading), h("p", { key: 'a42c56b425effc00caf0a2b2d3c79aea52c7a4d5' }, h("small", { key: 'c05571e761970df2293667ca25f91d657d7784ff' }, i18n[lang].content.languages.text))), h("li", { key: 'f6c5b8619a5014470dd835c684244ac145f2c5fd' }, h("h4", { key: '3ac2cf2d08c5f94d07bcd7fbe1786b7a138d4f0d' }, i18n[lang].content.https.heading), h("p", { key: '596499c8b77e7260776da2ab782670820687a2b0' }, h("small", { key: '9b81bf698364397d705d0c20df078cb5f2f97171' }, i18n[lang].content.https.text, " ", h("strong", { key: 'b187d642957907d9501d13c617e3e54c1fa11887' }, "https://"), "."))), h("li", { key: '086c41a49bebea39aa287aa213e288ddd4c4d2f8' }, h("h4", { key: 'dd45cc64f0ad0779e28f228fdee78d6216c4c747' }, i18n[lang].content.contact.heading), h("p", { key: '745ab9a7fcfff95e6df069e182f334ecda0b27dd' }, h("small", { key: '7c7ae86324f385e9b23461126a418ecbb8f09a16' }, i18n[lang].content.contact.text))))))));
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
                    "text": "Defines the container width of the verify banner content"
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
