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
        return (h(Host, { key: '79bc4dc615e909274744d7c9658fbe004c2bf6bc' }, h("details", { key: '0e01a3f845f9f882c07b1c34ab51a2f381c8bf5f', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: '60a371e675c308932c2f5af336c6e81035ca01f2', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: '7b0def4d6a9a4eb3a313fff1fe66a0bc6b1f051a', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: 'a074a77e354a0166aa6770f32fd83d1cdbd8532a' }, h("small", { key: '1acc5177f5d3ba56d97816fe2f99a7568107e433' }, i18n[lang].summary.text), h("button", { key: 'ec6a3f1625d23552f8d31c0cde5803ddc2a77272', class: "verify-banner__toggle" }, h("small", { key: '3f6d49e3165de7c1c6b2e7d6d06d274f0fbdd56a' }, i18n[lang].summary.link), h("span", { key: '153fc0c626c8a986db416c5ac29713a2ac0fcdf1', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: 'e81165bfd96795ccf462da1d4a1dda868395cce5', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: '22045e8846b47339074fd5f38f031ca4b8959d8d' }, h("small", { key: '473ff5b3a65b167204a67097f66a6d84d0a4ce23' }, i18n[lang].content.description)), h("br", { key: '15af7e05f46d20060c48a59474588e60831a094e' }), h("gcds-grid", { key: '709f44671c2d73683385dbf9621718d9c20bc289', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'f65ebc8634708bc47b1a32e92782555083685064' }, h("h4", { key: '6c4cf0f3461551b7a0f6c1ab98a00d027f1dd5a2' }, i18n[lang].content.url.heading), h("p", { key: '85f95f3ca4a0fba659d60f6145d3e37089a8ecd4' }, h("small", { key: '1b105c8da0a8976ab8c4e1bad11447be51a65c8f' }, i18n[lang].content.url.text))), h("li", { key: '93c3f0c0487ba36d347f58bffc777ce66de6f3fd' }, h("h4", { key: 'f8481a2a32400da5a36109fa56a962593e0312e2' }, i18n[lang].content.languages.heading), h("p", { key: 'd9596aee415d7c38b2dc9a573805baae85d05a38' }, h("small", { key: '904e6811890b96a3bd96dea52204a6d15e3b44ac' }, i18n[lang].content.languages.text))), h("li", { key: '7844b115d12d5071d9d23ee3f7fef4507461b607' }, h("h4", { key: '36843578e05e2c110e759355324dc428c1902e7b' }, i18n[lang].content.https.heading), h("p", { key: '70cf52e7807ff64061d0ca654f5295e94bb32fd1' }, h("small", { key: '1764d52ed82aecfcf0ca8f533848d08114852403' }, i18n[lang].content.https.text, " ", h("strong", { key: '6675bf241c5f83bb100ccd15d78cd1d6351fdc37' }, "https://"), "."))), h("li", { key: '8779e017066292331a05451847ac7c3d5865999a' }, h("h4", { key: 'd82025f6d665cc8df4ddb97cc73e539c058ae1b0' }, i18n[lang].content.contact.heading), h("p", { key: '391899c66d166527c07eebaa1a017b665a45e354' }, h("small", { key: 'ea86b227a962ba2bfe0784d6bf89b24c592c26ba' }, i18n[lang].content.contact.text))))))));
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
