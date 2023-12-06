import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { h as handleKeyDownNav, g as getNavItems } from './utils2.js';
import { d as defineCustomElement$3 } from './gcds-icon2.js';
import { d as defineCustomElement$2 } from './gcds-nav-group2.js';

const I18N = {
  en: {
    navLabel:
      ' - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.',
  },
  fr: {
    navLabel:
      " - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement.",
  },
};

const gcdsSideNavCss = "@layer reset, defaults;@layer reset{:host *{box-sizing:border-box;margin:0}}@layer defaults{:host{display:block;width:100%}@media only screen and (width >= 64em){:host{max-width:var(--gcds-side-nav-max-width)}}:host .gcds-side-nav__heading{font:var(--gcds-side-nav-heading-font);margin-block-end:var(--gcds-side-nav-heading-margin);padding:var(--gcds-side-nav-heading-padding)}@media only screen and (width < 64em){:host .gcds-side-nav__heading{display:block;height:0;margin:0;overflow:hidden;padding:0;width:0}}}";

const GcdsSideNav$1 = /*@__PURE__*/ proxyCustomElement(class GcdsSideNav extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.label = undefined;
    this.lang = undefined;
    this.navItems = [];
    this.navSize = undefined;
  }
  async focusOutListener(e) {
    if (!this.el.contains(e.relatedTarget)) {
      if (this.navSize == 'mobile') {
        if (this.mobile.hasAttribute('open')) {
          await this.mobile.toggleNav();
        }
      }
    }
  }
  async keyDownListener(e) {
    if (this.el.contains(document.activeElement)) {
      handleKeyDownNav(e, this.el, this.navItems);
    }
  }
  async gcdsClickListener(e) {
    if (this.el.contains(e.target)) {
      // Update tab queue when clicking mobile menu
      if (e.target == this.el && this.navSize == 'mobile') {
        await this.updateNavItemQueue(e.target);
        // Update tab queue when clicking dropdown
      }
      else if (e.target.nodeName == 'GCDS-NAV-GROUP' &&
        !e.target.hasAttribute('open')) {
        await this.updateNavItemQueue(this.el);
      }
    }
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
  /*
   * Get current navSize state
   */
  async getNavSize() {
    return this.navSize;
  }
  /*
   * Pass new window size: desktop or mobile
   */
  async updateNavSize(size) {
    this.navSize = size;
  }
  /*
   * Update item queue for keyboard navigation based on passed element
   */
  async updateNavItemQueue(el, includeElement) {
    if (includeElement) {
      const childElements = await getNavItems(el);
      this.navItems = [el, ...childElements];
    }
    else {
      this.navItems = await getNavItems(el);
    }
    if (this.navSize == 'mobile') {
      this.navItems = [...this.navItems, this.mobile];
    }
  }
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
    if (mediaQuery.matches) {
      this.navSize = 'desktop';
    }
    else {
      this.navSize = 'mobile';
    }
  }
  async componentDidLoad() {
    const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
    const nav = this.el;
    const mobileTrigger = this.mobile;
    await this.updateNavItemQueue(this.el);
    mediaQuery.addEventListener('change', async function (e) {
      if (e.matches) {
        nav.updateNavSize('desktop');
        await nav.updateNavItemQueue(nav);
        if (mobileTrigger.hasAttribute('open')) {
          mobileTrigger.toggleNav();
        }
      }
      else {
        nav.updateNavSize('mobile');
        await nav.updateNavItemQueue(nav);
      }
    });
  }
  render() {
    const { label, lang } = this;
    return (h(Host, null, h("nav", { "aria-label": `${label}${I18N[lang].navLabel}` }, h("h2", { class: "gcds-side-nav__heading" }, label), h("gcds-nav-group", { menuLabel: "Menu", closeTrigger: lang == 'fr' ? 'Fermer' : 'Close', openTrigger: "Menu", class: "gcds-mobile-nav", role: "menu", ref: element => (this.mobile = element), lang: lang }, h("slot", null)))));
  }
  get el() { return this; }
  static get style() { return gcdsSideNavCss; }
}, [1, "gcds-side-nav", {
    "label": [1],
    "lang": [32],
    "navItems": [32],
    "navSize": [32],
    "getNavSize": [64],
    "updateNavSize": [64],
    "updateNavItemQueue": [64]
  }, [[4, "focusout", "focusOutListener"], [4, "keydown", "keyDownListener"], [4, "gcdsClick", "gcdsClickListener"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-side-nav", "gcds-icon", "gcds-nav-group"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-side-nav":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsSideNav$1);
      }
      break;
    case "gcds-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gcds-nav-group":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcdsSideNav = GcdsSideNav$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsSideNav, defineCustomElement };

//# sourceMappingURL=gcds-side-nav.js.map