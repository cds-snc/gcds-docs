import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
import CanadaFlag from "./assets/canada-flag.svg";
import ContentToggleArrow from "./assets/content-toggle-arrow.svg";
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
        return (h(Host, { key: 'a1fa4411e430e6270a71312a39c7da3a1796d4aa' }, h("details", { key: '9f97424d74107c83c28ee4d98cc53ff4e26ec825', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: 'f118fbf0db3564f65e95a1769749793b7bd87b1c', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: '6bbcd4a7db902d2c35555b3cf1547c8226a49f6c', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: 'b2fda9a60af81005e8107802a50dec1544bb2bc1' }, h("small", { key: '668150e500c11383741a7781a659629c2356726b' }, i18n[lang].summary.text), h("button", { key: 'c8ab76181aae1bd0066eac3d3a8294d91c14f4ea', class: "verify-banner__toggle" }, h("small", { key: 'e54914223c79d92900fca9362b37c578e4a19167' }, i18n[lang].summary.link), h("span", { key: '1b9e90e0594e202b2fd5aa0155c331a4232e309b', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: '9268da2d8b1059a2c5cfbbb3b827850a6b250407', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: 'c1d4d84a58fe5c97decd2ea1f108297dcef1b37a' }, h("small", { key: '9bb09c3f25ad8f5047c7061a73460b12d5085e24' }, i18n[lang].content.description)), h("br", { key: '6acd0a0c911cf4c456562734b6d06de389b3d62e' }), h("gcds-grid", { key: '539b2271bfdb85e66ad3477103deaba798fe850b', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'dde8404c54ed2798afd7b6225d94f5e079063043' }, h("h4", { key: '91f46d91fb3f0e4ecf81b3c7267fb994e2a33551' }, i18n[lang].content.url.heading), h("p", { key: 'ab8a2320d0edfa8c0e086bf10d224838b5bf2624' }, h("small", { key: '05b61b363777a9d96a562a76e39b886e85b5f80e' }, i18n[lang].content.url.text))), h("li", { key: 'd580a759c50805c449fedaf81b0281bc5a989b25' }, h("h4", { key: '32c261e0c5e42645f3fd896c1ee7f9d411518362' }, i18n[lang].content.languages.heading), h("p", { key: '7a7f21f9e0671bbd143105a0574188644dbf2274' }, h("small", { key: '7cdf32c6502cfe83a0e918002349eb0cc1b79a38' }, i18n[lang].content.languages.text))), h("li", { key: '160e19553b5cdacc8773c61a9c57a8cc00cf7fbd' }, h("h4", { key: '0721bd211cbe6709caff113eff7a3c28dd0202bb' }, i18n[lang].content.https.heading), h("p", { key: '8ebc8920a3d01ee425d07c28754849ce178303c2' }, h("small", { key: '9d300b938d0ae4b3be25aafcc40d8e1938ce9797' }, i18n[lang].content.https.text, " ", h("strong", { key: 'a8ecbbe76c5283347e2cc786c096e2e8d29a0f33' }, "https://"), "."))), h("li", { key: '1e2ca8ec9302fe090d09e9783886078a1b5a8720' }, h("h4", { key: '9ceeeac4ef3a6a44fd41a54202e4148cb07a567c' }, i18n[lang].content.contact.heading), h("p", { key: '4ecf998fdac036b9b7e4383b840ec643bfc6c393' }, h("small", { key: '27255f82990a0cabfe15358448fa9690572473b8' }, i18n[lang].content.contact.text))))))));
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
