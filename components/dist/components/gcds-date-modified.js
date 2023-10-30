import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';

const I18N = {
  en: {
    term: 'Date modified:',
  },
  fr: {
    term: 'Date de modification :',
  },
};

const gcdsDateModifiedCss = ".sc-gcds-date-modified-h{color:var(--gcds-date-modified-text);display:block;font:var(--gcds-date-modified-font);margin:var(--gcds-date-modified-margin)}.sc-gcds-date-modified-h .gcds-date-modified.sc-gcds-date-modified dd.sc-gcds-date-modified,.sc-gcds-date-modified-h .gcds-date-modified.sc-gcds-date-modified dt.sc-gcds-date-modified{display:inline}.sc-gcds-date-modified-h .gcds-date-modified.sc-gcds-date-modified dd.sc-gcds-date-modified{margin:var(--gcds-date-modified-description-margin)}";

const GcdsDateModified$1 = /*@__PURE__*/ proxyCustomElement(class GcdsDateModified extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    return (h(Host, null, h("dl", { class: "gcds-date-modified" }, h("dt", null, type === 'version' ? 'Version ' : I18N[lang].term), h("dd", null, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null)))))));
  }
  get el() { return this; }
  static get style() { return gcdsDateModifiedCss; }
}, [6, "gcds-date-modified", {
    "type": [1025],
    "lang": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-date-modified"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-date-modified":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsDateModified$1);
      }
      break;
  } });
}

const GcdsDateModified = GcdsDateModified$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsDateModified, defineCustomElement };

//# sourceMappingURL=gcds-date-modified.js.map