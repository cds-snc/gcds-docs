import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, l as logError } from './utils.js';
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

const gcdsDateModifiedCss = "@layer reset, default;@layer reset{:host{display:block}:host dl{margin:0}:host slot{display:initial}}@layer default{:host .gcds-date-modified{margin:var(--gcds-date-modified-margin)}:host .gcds-date-modified :is(dt,gcds-text,dd){display:inline}:host .gcds-date-modified dd{margin:var(--gcds-date-modified-description-margin)}:host .gcds-date-modified gcds-text::part(text){font:var(--gcds-date-modified-font)}}";
const GcdsDateModifiedStyle0 = gcdsDateModifiedCss;

const GcdsDateModified$1 = /*@__PURE__*/ proxyCustomElement(class GcdsDateModified extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = 'date';
        this.errors = [];
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
    validateChildren() {
        if (this.el.innerHTML.trim() == '') {
            this.errors.push('children');
        }
        else if (this.errors.includes('children')) {
            this.errors.splice(this.errors.indexOf('children'), 1);
        }
    }
    validateRequiredProps() {
        this.validateChildren();
        if (this.errors.includes('children')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-date-modified', this.errors);
        }
    }
    render() {
        const { lang, type } = this;
        return (h(Host, { key: 'ae1d5ceeefb2826a675edeca1f2fa0c81828b425' }, this.validateRequiredProps() && (h("dl", { key: '989b2ca91b4887f0a47c956c022550b475221a7d', class: "gcds-date-modified" }, h("dt", { key: '1d05ceb07362ad9b010769489ad3b0a057d9d754' }, h("gcds-text", { key: '61bb8fbe85f6614eeec0ebb9fabacc7b710dfc8d', display: "inline", "margin-bottom": "0" }, type === 'version' ? I18N[lang].version : I18N[lang].date)), h("dd", { key: '45cdfd7944ba0ca7ea4251d673eaf2f59f2346a0' }, h("gcds-text", { key: 'f2c0744b1a28ff5cd98ff8e3da8ce44384656b4d', display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null)))))))));
    }
    get el() { return this; }
    static get style() { return GcdsDateModifiedStyle0; }
}, [1, "gcds-date-modified", {
        "type": [1025],
        "errors": [32],
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