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
        return (h(Host, { key: '48153c15ce4d671d0bf60ddbe3d336e5e0be81af' }, h("details", { key: '2e617043b0000ff20429eb9a46324a2f40fb1a95', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: '4fa310845587a590815de9ffcb7e7c50354020b9', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: '094552cb86ed9ac56935441e352e2ea9ec4671c8', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: '813aa039eddf1b68d3db854e90165f9314a59888' }, h("small", { key: '2161ed4e25a9680194da06614344365fafe327d1' }, i18n[lang].summary.text), h("button", { key: '5192428be907c4e5d951b5871fd5af436b40c4fd', class: "verify-banner__toggle" }, h("small", { key: 'b18b2fccc1b7bd85dacd2a07a590cad716fe8bc9' }, i18n[lang].summary.link), h("span", { key: '53007393e80408a5486ed2539ca8abdfb2e3808a', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: 'e7737a8d5fbc9f70aa1579d5258dd5e8053b849c', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: '474171c6a6bbbb8772e7f0485dfffb51a864ff05' }, h("small", { key: '3bf99ee8fcf04df4f1fdce2e637b561137c38188' }, i18n[lang].content.description)), h("br", { key: 'fd2af592a4462cf079ee227bbe15934fb8d4d5b4' }), h("gcds-grid", { key: '2c3f42400363486e7b662dbc70b4a4a9c873255a', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'e251f3f8663eebe19d3a59aa9d46822bdc097273' }, h("h4", { key: '277e4d0462a8b78280e5636d87026998efeb9361' }, i18n[lang].content.url.heading), h("p", { key: '8e0b9981deaf0221533ceb24f2f733eec19825f7' }, h("small", { key: 'be67900e62262b8d019e7bdeee7b63e90a1075b3' }, i18n[lang].content.url.text))), h("li", { key: '0893412462dfff8f9f214395295447d9fdd34f16' }, h("h4", { key: '7d3562b810abdd8d961744cb239181e2e1b50580' }, i18n[lang].content.languages.heading), h("p", { key: '0aba8b207788f423a8e4566fccf77d86d3e56ef8' }, h("small", { key: 'c9b4012e2ed096b86a5eefa1f7fe917daa573049' }, i18n[lang].content.languages.text))), h("li", { key: 'e232beacff8ce2f22889e661dbbb0d866f029e28' }, h("h4", { key: '4303bdb3c1209eceba4076dc53162d62d9671a8d' }, i18n[lang].content.https.heading), h("p", { key: '5807627918a98faa18893bd85829561afb3d5746' }, h("small", { key: '7d1b8e8e56cade3c18cac32837c3d5adc3c88889' }, i18n[lang].content.https.text, " ", h("strong", { key: 'f4fcc669ccaa40756d3d69a23b8466188e78a47c' }, "https://"), "."))), h("li", { key: '5e388710ae4ef3923909cc9f0442a18a185243f0' }, h("h4", { key: 'c92b10a99089c96363e126358acf26d2c6098404' }, i18n[lang].content.contact.heading), h("p", { key: '9a6736ffdd9bbd9111411c4aaddbe97256b0db21' }, h("small", { key: 'b7d1b456d226778ecb8087f4086f9cef5dd7593b' }, i18n[lang].content.contact.text))))))));
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
