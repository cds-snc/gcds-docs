import { Host, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import { handleKeyDownNav, getNavItems } from '../../utils/menus/utils';
import I18N from './i18n/i18n';
export class GcdsSideNav {
  constructor() {
    this.label = undefined;
    this.lang = undefined;
    this.navItems = [];
    this.navSize = undefined;
  }
  async focusOutListener(e) {
    if (!this.el.contains(e.relatedTarget)) {
      if (this.navSize == "mobile") {
        if (this.mobile.hasAttribute("open")) {
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
      if (e.target == this.el && this.navSize == "mobile") {
        await this.updateNavItemQueue(e.target);
        // Update tab queue when clicking dropdown
      }
      else if (e.target.nodeName == "GCDS-NAV-GROUP" && !e.target.hasAttribute("open")) {
        await this.updateNavItemQueue(this.el);
      }
    }
  }
  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
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
      let childElements = await getNavItems(el);
      this.navItems = [el, ...childElements];
    }
    else {
      this.navItems = await getNavItems(el);
    }
    if (this.navSize == "mobile") {
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
    mediaQuery.addEventListener("change", async function (e) {
      if (e.matches) {
        nav.updateNavSize("desktop");
        await nav.updateNavItemQueue(nav);
        if (mobileTrigger.hasAttribute("open")) {
          mobileTrigger.toggleNav();
        }
      }
      else {
        nav.updateNavSize("mobile");
        await nav.updateNavItemQueue(nav);
      }
    });
  }
  render() {
    const { label, lang } = this;
    return (h(Host, null, h("nav", { "aria-label": `${label}${I18N[lang].navLabel}` }, h("h2", { class: "gcds-side-nav__heading" }, label), h("gcds-nav-group", { menuLabel: "Menu", closeTrigger: lang == 'fr' ? 'Fermer' : 'Close', openTrigger: "Menu", class: "gcds-mobile-nav", role: "menu", ref: element => this.mobile = element, lang: lang }, h("slot", null)))));
  }
  static get is() { return "gcds-side-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-side-nav.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-side-nav.css"]
    };
  }
  static get properties() {
    return {
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Label for navigation landmark"
        },
        "attribute": "label",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "lang": {},
      "navItems": {},
      "navSize": {}
    };
  }
  static get methods() {
    return {
      "getNavSize": {
        "complexType": {
          "signature": "() => Promise<\"desktop\" | \"mobile\">",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<\"desktop\" | \"mobile\">"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "updateNavSize": {
        "complexType": {
          "signature": "(size: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "updateNavItemQueue": {
        "complexType": {
          "signature": "(el: any, includeElement?: boolean) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "focusout",
        "method": "focusOutListener",
        "target": "document",
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "keyDownListener",
        "target": "document",
        "capture": false,
        "passive": false
      }, {
        "name": "gcdsClick",
        "method": "gcdsClickListener",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
