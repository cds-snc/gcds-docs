import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';

const gcdsNavLinkCss = "@layer reset, defaults, variants, state.hover, state.active, state.focus;@layer reset{:host a{-webkit-box-sizing:border-box;box-sizing:border-box}}@layer defaults{:host a{border-inline:var(--gcds-nav-link-border-width) solid transparent;color:var(--gcds-nav-link-default-text);display:-ms-flexbox;display:flex;font:var(---gcds-nav-link-font);-webkit-margin-after:var(--gcds-nav-link-margin);margin-block-end:var(--gcds-nav-link-margin);padding:var(--gcds-nav-link-padding);-webkit-text-decoration:underline solid currentColor var( --gcds-nav-link-default-decoration-thickness);text-decoration:underline solid currentColor var( --gcds-nav-link-default-decoration-thickness);text-underline-offset:var(--gcds-nav-link-default-underline-offset);-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}@media only screen and (width < 64em){:host a{min-width:50%}}@media only screen and (width > 48em){:host a{max-width:var(--gcds-nav-link-default-max-width)}}:host a[aria-current=page]{pointer-events:none;text-decoration:none}}@layer variants{@media only screen and (width >= 64em){:host(.gcds-nav-link--topnav)>a{-webkit-border-after:var(--gcds-nav-link-border-width) solid transparent;border-block-end:var(--gcds-nav-link-border-width) solid transparent;border-inline:0;color:var(--gcds-nav-link-top-nav-text);margin:0;padding:var(--gcds-nav-link-top-nav-padding)}:host(.gcds-nav-link--topnav)>a:not(:hover){-webkit-text-decoration-color:transparent;text-decoration-color:transparent}:host(.gcds-nav-link--home)>a{font:var(--gcds-nav-link-top-nav-home-font);padding:var(--gcds-nav-link-top-nav-home-padding)}}:host(.gcds-nav-link--sidenav)>a{padding:var(--gcds-nav-link-side-nav-padding)}}@layer state.hover{@media (hover:hover){:host a:hover{text-decoration-thickness:var(--gcds-nav-link-hover-decoration-thickness)}:host(.gcds-nav-link--dropdown)>a:hover,:host(.gcds-nav-link--sidenav)>a:hover{color:var(--gcds-nav-link-hover-text)}:host(.gcds-nav-link--sidenav)>a:hover{background-color:var(--gcds-nav-link-side-nav-hover-background)}:host(.gcds-nav-link--dropdown)>a:hover{background-color:var(--gcds-nav-link-top-nav-hover-background)}}}@layer state.active{:host a[aria-current=page]{background-color:var(--gcds-nav-link-active-background);border-inline-start-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-active-text);font-weight:var(--gcds-nav-link-active-font-weight)}@media only screen and (width >= 64em){:host(.gcds-nav-link--topnav)>a[aria-current=page]{background-color:transparent;border-block-end-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-top-nav-text);font:var(--gcds-nav-link-font)}}}@layer state.focus{:host a:focus{background-color:var(--gcds-nav-link-focus-background);border-color:var(--gcds-nav-link-focus-background);border-radius:var(--gcds-nav-link-focus-border-radius);color:var(--gcds-nav-link-focus-text);outline:var(--gcds-nav-link-focus-outline);outline-offset:var(--gcds-nav-link-focus-outline-offset);text-decoration:none}}";

const GcdsNavLink$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = createEvent(this, "gcdsClick", 7);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.onClick = (e) => {
      this.gcdsClick.emit(e);
    };
    this.onFocus = (e) => {
      this.gcdsFocus.emit(e);
    };
    this.onBlur = (e) => {
      this.gcdsBlur.emit(e);
    };
    this.href = undefined;
    this.current = undefined;
    this.lang = undefined;
    this.navStyle = undefined;
  }
  /**
  * Focus the link element
  */
  async focusLink() {
    this.linkElement.focus();
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    if (this.el.closest("gcds-top-nav")) {
      if (this.el.parentNode.nodeName == "GCDS-TOP-NAV") {
        this.navStyle = this.el.slot == "home" ? "topnav gcds-nav-link--home" : "topnav";
      }
      else {
        this.navStyle = "dropdown";
      }
    }
    else {
      this.navStyle = "sidenav";
    }
  }
  render() {
    const { current, href } = this;
    let linkAttrs = {};
    if (current) {
      linkAttrs["aria-current"] = "page";
    }
    return (h(Host, { role: "presentation", class: `gcds-nav-link--${this.navStyle}` }, h("a", Object.assign({ class: "gcds-nav-link", href: href }, linkAttrs, { role: "menuitem", onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onClick: (e) => this.onClick(e), ref: element => this.linkElement = element }), h("slot", null))));
  }
  get el() { return this; }
  static get style() { return gcdsNavLinkCss; }
}, [1, "gcds-nav-link", {
    "href": [513],
    "current": [516],
    "lang": [32],
    "navStyle": [32],
    "focusLink": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-nav-link"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-nav-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsNavLink$1);
      }
      break;
  } });
}

const GcdsNavLink = GcdsNavLink$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsNavLink, defineCustomElement };
