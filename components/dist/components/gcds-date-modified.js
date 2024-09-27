import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

const I18N = {
  en: {
    date: 'Date modified:',
    version: 'Version ',
  },
  fr: {
    date: 'Date de modification :',
    version: 'Version ',
  },
};

const gcdsDateModifiedCss = "@layer reset, default;@layer reset{:host{display:block}:host dl{margin:0}:host slot{display:initial}}@layer default{:host .gcds-date-modified{margin:var(--gcds-date-modified-margin)}:host .gcds-date-modified :is(dt,gcds-text,dd){display:inline}:host .gcds-date-modified dd{margin:var(--gcds-date-modified-description-margin)}}";
const GcdsDateModifiedStyle0 = gcdsDateModifiedCss;

const GcdsDateModified$1 = /*@__PURE__*/ proxyCustomElement(class GcdsDateModified extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = 'date';
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
        const { lang, type } = this;
        return (h(Host, { key: '6a35ef0fbee9deb64fb76fb14179eb7f92258671' }, h("dl", { key: '0b9057598c023a246c5f0afea8a7d8943cd947ef', class: "gcds-date-modified" }, h("dt", { key: 'ce426d33cbb358b0fd2fefe9328b2eebbb998196' }, h("gcds-text", { key: 'f11bc0d5d3737efa8ff9e3555668d854bb84e9ec', display: "inline", "margin-bottom": "0" }, type === 'version' ? I18N[lang].version : I18N[lang].date)), h("dd", { key: '4ef846ec165917abc28ba20e5343c513430d3da0' }, h("gcds-text", { key: '656ce0d42ed450dd316947c5473c3ea5703b8c76', display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null))))))));
    }
    get el() { return this; }
    static get style() { return GcdsDateModifiedStyle0; }
}, [1, "gcds-date-modified", {
        "type": [1025],
        "lang": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-date-modified", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-date-modified":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsDateModified$1);
            }
            break;
        case "gcds-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsDateModified = GcdsDateModified$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsDateModified, defineCustomElement };

//# sourceMappingURL=gcds-date-modified.js.map