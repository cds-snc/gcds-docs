import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

const I18N = {
  en: {
    term: 'Date modified:',
  },
  fr: {
    term: 'Date de modification :',
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
        return (h(Host, null, h("dl", { class: "gcds-date-modified" }, h("dt", null, h("gcds-text", { display: "inline", "margin-bottom": "0" }, type === 'version' ? 'Version ' : I18N[lang].term)), h("dd", null, h("gcds-text", { display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null))))))));
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