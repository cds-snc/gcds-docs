import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$2 } from './gcds-breadcrumbs-item2.js';

const I18N = {
  en: {
    label: 'Breadcrumb',
    link: 'https://www.canada.ca/en.html',
  },
  fr: {
    label: 'Chemin de navigation',
    link: 'https://www.canada.ca/fr.html',
  },
};

const gcdsBreadcrumbsCss = ":host .gcds-breadcrumbs ol{font:var(--gcds-breadcrumbs-font);list-style:none;margin:var(--gcds-breadcrumbs-margin);overflow-x:hidden;padding:var(--gcds-breadcrumbs-padding)}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child,:host .gcds-breadcrumbs ol:not(.has-canada-link) ::slotted(:first-child){margin:var(--gcds-breadcrumbs-item-first-child-margin)!important}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before{display:none}";

const GcdsBreadcrumbs$1 = /*@__PURE__*/ proxyCustomElement(class GcdsBreadcrumbs extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.hideCanadaLink = false;
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
    const { hideCanadaLink, lang } = this;
    return (h(Host, null, h("nav", { "aria-label": I18N[lang].label, class: "gcds-breadcrumbs" }, h("ol", { class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ? (h("gcds-breadcrumbs-item", { href: I18N[lang].link }, "Canada.ca")) : null, h("slot", null)))));
  }
  get el() { return this; }
  static get style() { return gcdsBreadcrumbsCss; }
}, [1, "gcds-breadcrumbs", {
    "hideCanadaLink": [4, "hide-canada-link"],
    "lang": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-breadcrumbs", "gcds-breadcrumbs-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-breadcrumbs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsBreadcrumbs$1);
      }
      break;
    case "gcds-breadcrumbs-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcdsBreadcrumbs = GcdsBreadcrumbs$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsBreadcrumbs, defineCustomElement };

//# sourceMappingURL=gcds-breadcrumbs.js.map