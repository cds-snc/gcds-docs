import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$1 } from './gcds-icon2.js';

const gcdsNavGroupCss = "@layer reset, defaults, variants, mobile, state.hover, state.focus;@layer reset{:host *{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}}@layer defaults{:host{-ms-flex-item-align:end;align-self:flex-end;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}:host .gcds-nav-group__trigger{-ms-flex-align:center;align-items:center;background:transparent;border:none;color:var(--gcds-nav-group-trigger-text);cursor:pointer;display:-ms-flexbox;display:flex;font:var(--gcds-nav-group-trigger-font);padding:var(--gcds-nav-group-trigger-padding);text-align:left;width:100%}@media only screen and (width >= 64em){:host .gcds-nav-group__trigger{max-width:var(--gcds-nav-group-trigger-max-width)}}:host .gcds-nav-group__trigger[aria-expanded=false]+.gcds-nav-group__list{display:none}:host .gcds-nav-group__trigger-desc{display:none}}@layer variants{:host .gcds-trigger--dropdown{-webkit-border-after:var(--gcds-nav-group-top-nav-trigger-border-width) solid transparent;border-block-end:var(--gcds-nav-group-top-nav-trigger-border-width) solid transparent;-webkit-margin-start:var(--gcds-nav-group-top-nav-trigger-margin-inline-start);margin-inline-start:var(--gcds-nav-group-top-nav-trigger-margin-inline-start);padding:var(--gcds-nav-group-top-nav-trigger-padding);-webkit-text-decoration:underline solid currentColor var(--gcds-nav-group-top-nav-trigger-decoration-thickness);text-decoration:underline solid currentColor var(--gcds-nav-group-top-nav-trigger-decoration-thickness);-webkit-text-decoration-color:transparent;text-decoration-color:transparent;text-underline-offset:var(--gcds-nav-group-top-nav-trigger-underline-offset);-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}:host .gcds-trigger--dropdown gcds-icon{-webkit-margin-start:var(--gcds-nav-group-top-nav-trigger-icon-margin);margin-inline-start:var(--gcds-nav-group-top-nav-trigger-icon-margin);-ms-flex-order:2;order:2}:host .gcds-trigger--dropdown[aria-expanded=true]{background-color:var(--gcds-nav-group-top-nav-trigger-expanded-background-color)}@media only screen and (width >= 64em){:host .gcds-nav--dropdown{background-color:var(--gcds-nav-group-top-nav-dropdown-background);border-radius:var(--gcds-border-radius-md);-webkit-box-shadow:var(--gcds-nav-group-top-nav-dropdown-box-shadow);box-shadow:var(--gcds-nav-group-top-nav-dropdown-box-shadow);-webkit-margin-before:var(--gcds-spacing-200);margin-block-start:var(--gcds-spacing-200);padding:var(--gcds-nav-group-top-nav-dropdown-padding);position:absolute;top:100%;width:var(--gcds-nav-group-top-nav-dropdown-width);z-index:1}}@media only screen and (width >= 64em) and (width < 96em){:host .gcds-nav--dropdown{right:0}}:host .gcds-trigger--expandable{font-weight:var(--gcds-nav-group-side-nav-trigger-font-weight);-webkit-margin-after:var(--gcds-nav-group-side-nav-trigger-margin);margin-block-end:var(--gcds-nav-group-side-nav-trigger-margin)}:host .gcds-trigger--expandable gcds-icon{-webkit-margin-end:var(--gcds-nav-group-side-nav-trigger-icon-margin);margin-inline-end:var(--gcds-nav-group-side-nav-trigger-icon-margin)}@media only screen and (width >= 64em){:host .gcds-nav--expandable{-webkit-padding-start:var(--gcds-nav-group-side-nav-dropdown-padding);padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}}}@layer mobile{:host(.gcds-mobile-nav){width:100%}:host(.gcds-mobile-nav.gcds-nav-group-expanded){background-color:var(--gcds-nav-group-mobile-background);height:100vh;left:0;overflow-y:scroll;padding:var(--gcds-nav-group-mobile-padding);position:fixed;top:0;width:100%;z-index:100}@media only screen and (width < 64em){:host(.gcds-nav-group-expanded:not(.gcds-mobile-nav)) .gcds-nav-group__list{-webkit-padding-start:var(--gcds-nav-group-side-nav-dropdown-padding);padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}}:host(.gcds-mobile-nav) .gcds-trigger--expandable{border:var(--gcds-nav-group-mobile-trigger-border-width) solid;border-radius:var(--gcds-nav-group-mobile-trigger-border-radius);color:var(--gcds-nav-group-mobile-trigger-text);-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:center;justify-content:center;-webkit-margin-before:var(--gcds-nav-group-mobile-trigger-margin);margin-block-start:var(--gcds-nav-group-mobile-trigger-margin);text-align:center}@media only screen and (width >= 64em){:host(.gcds-mobile-nav) .gcds-trigger--expandable{display:none}}@media only screen and (48em < width < 64em){:host(.gcds-mobile-nav) .gcds-trigger--expandable{-ms-flex-item-align:start;align-self:flex-start;width:auto}}:host(.gcds-mobile-nav) .gcds-trigger--expandable gcds-icon{display:none}@media only screen and (width >= 64em){:host(.gcds-mobile-nav)>.gcds-nav--expandable{display:block;padding:0}}@media only screen and (width < 64em){:host(.gcds-mobile-nav)>.gcds-nav--expandable{margin:var(--gcds-nav-group-mobile-list-margin)}}@media only screen and (width >= 64em){:host(.gcds-mobile-nav-topnav)>.gcds-nav--expandable{display:-ms-flexbox;display:flex}}}@layer state.hover{@media (hover:hover){:host .gcds-nav-group__trigger:hover{color:var(--gcds-nav-group-trigger-hover-text)}:host .gcds-trigger--dropdown:hover{color:var(--gcds-nav-group-top-nav-trigger-hover-text);-webkit-text-decoration-color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-thickness:var(--gcds-nav-group-top-nav-trigger-hover-decoration-thickness)}:host .gcds-trigger--expandable:hover{background-color:var(--gcds-nav-group-side-nav-trigger-hover-background)}}}@layer state.focus{:host .gcds-nav-group__trigger:focus{background-color:var(--gcds-nav-group-trigger-focus-background);border-color:var(--gcds-nav-group-trigger-focus-background);border-radius:var(--gcds-nav-group-trigger-focus-border-radius);-webkit-box-shadow:var(--gcds-nav-group-trigger-focus-box-shadow);box-shadow:var(--gcds-nav-group-trigger-focus-box-shadow);color:var(--gcds-nav-group-trigger-focus-text);outline:var(--gcds-nav-group-trigger-focus-outline);outline-offset:var(--gcds-nav-group-trigger-focus-outline-offset);text-decoration:none}}";

const GcdsNavGroup = /*@__PURE__*/ proxyCustomElement(class GcdsNavGroup extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = createEvent(this, "gcdsClick", 7);
    this.closeTrigger = undefined;
    this.menuLabel = undefined;
    this.openTrigger = undefined;
    this.open = false;
    this.lang = undefined;
    this.navStyle = undefined;
  }
  /**
   * Focus button element
   */
  async focusTrigger() {
    this.triggerElement.focus();
  }
  /**
   * Toggle the nav open or closed
   */
  async toggleNav() {
    this.open = !this.open;
    // Close any child nav-groups
    for (let i = 0; i < this.el.children.length; i++) {
      if (this.el.children[i].nodeName == 'GCDS-NAV-GROUP' &&
        this.el.children[i].hasAttribute('open')) {
        this.el.children[i].toggleNav();
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
      this.navStyle = 'dropdown';
      if (this.open) {
        this.open = false;
      }
    }
    else {
      this.navStyle = 'expandable';
    }
    if (this.el.parentNode.nodeName == 'GCDS-NAV-GROUP' &&
      !this.el.parentNode.classList.contains('gcds-mobile-nav') &&
      this.el.closest('gcds-top-nav')) {
      this.el.remove();
    }
  }
  render() {
    const { closeTrigger, menuLabel, open, openTrigger } = this;
    const roleAttr = {
      role: 'menuitem',
    };
    if (this.el.classList.contains('gcds-mobile-nav')) {
      delete roleAttr['role'];
    }
    return (h(Host, { role: "presentation", open: open, class: open && 'gcds-nav-group-expanded' }, h("button", Object.assign({ "aria-haspopup": "true", "aria-expanded": open.toString() }, roleAttr, { ref: element => (this.triggerElement = element), class: `gcds-nav-group__trigger gcds-trigger--${this.navStyle}`, onClick: () => {
        this.toggleNav();
        this.gcdsClick.emit();
      } }), h("gcds-icon", { name: open ? 'angle-up' : 'angle-down' }), closeTrigger && open ? closeTrigger : openTrigger), h("ul", { role: "menu", "aria-label": menuLabel, class: `gcds-nav-group__list gcds-nav--${this.navStyle}` }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return gcdsNavGroupCss; }
}, [1, "gcds-nav-group", {
    "closeTrigger": [513, "close-trigger"],
    "menuLabel": [513, "menu-label"],
    "openTrigger": [513, "open-trigger"],
    "open": [1540],
    "lang": [32],
    "navStyle": [32],
    "focusTrigger": [64],
    "toggleNav": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-nav-group", "gcds-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-nav-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsNavGroup);
      }
      break;
    case "gcds-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GcdsNavGroup as G, defineCustomElement as d };

//# sourceMappingURL=gcds-nav-group2.js.map