import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { i as inheritAttributes, o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$1 } from './gcds-icon2.js';

const I18N = {
  en: {
    label: 'Opens in a new tab.',
  },
  fr: {
    label: "S'ouvre dans un nouvel onglet.",
  },
};

const gcdsButtonCss = ":host a,:host button{border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;font:var(--gcds-button-font);padding:var(--gcds-button-padding);text-align:center;text-decoration:none;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;width:var(--gcds-button-width)}:host a slot,:host button slot{display:inherit}:host a.button--role-danger,:host button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host a.button--role-danger:hover,:host button.button--role-danger:hover{background-color:var(--gcds-button-danger-hover-background)}:host a.button--role-danger:focus,:host button.button--role-danger:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);-webkit-box-shadow:var(--gcds-button-shared-focus-box-shadow);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}:host a.button--role-danger:active,:host button.button--role-danger:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}:host a.button--role-primary,:host button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host a.button--role-primary:hover,:host button.button--role-primary:hover{background-color:var(--gcds-button-primary-hover-background)}:host a.button--role-primary:focus,:host button.button--role-primary:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);-webkit-box-shadow:var(--gcds-button-shared-focus-box-shadow);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}:host a.button--role-primary:active,:host button.button--role-primary:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}:host a.button--role-secondary,:host button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}:host a.button--role-secondary:hover,:host button.button--role-secondary:hover{background-color:var(--gcds-button-secondary-hover-background);border-color:var(--gcds-button-secondary-default-text);color:var(--gcds-button-secondary-default-text)}:host a.button--role-secondary:focus,:host button.button--role-secondary:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);-webkit-box-shadow:var(--gcds-button-shared-focus-box-shadow);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}:host a.button--role-secondary:focus:hover,:host button.button--role-secondary:focus:hover{border-color:var(--gcds-button-shared-focus-background)}:host a.button--role-secondary:active,:host button.button--role-secondary:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)!important}:host a.button--text-only,:host button.button--text-only{background-color:var(--gcds-button-text-only-default-background);color:var(--gcds-button-text-only-default-text)}:host a.button--text-only:not([aria-disabled=true]),:host button.button--text-only:not([aria-disabled=true]){text-decoration:underline;-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-button-text-only-default-decoration-thickness);text-underline-offset:.2em}:host a.button--text-only:hover,:host button.button--text-only:hover{background-color:var(--gcds-button-text-only-default-background);color:var(--gcds-button-text-only-hover-text);text-decoration-thickness:var(--gcds-button-text-only-hover-decoration-thickness)}:host a.button--text-only:focus,:host button.button--text-only:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);-webkit-box-shadow:var(--gcds-button-shared-focus-box-shadow);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width);text-decoration:none}:host a.button--text-only:active,:host button.button--text-only:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}:host a.button--role-skip-to-content,:host button.button--role-skip-to-content{left:0;position:absolute;top:var(--gcds-button-skip-top);width:inherit;z-index:3}:host a.button--role-skip-to-content:not(:focus),:host button.button--role-skip-to-content:not(:focus){clip:rect(0,0,0,0);height:0;margin:0;overflow:hidden;padding:0;width:0}:host a.button--role-skip-to-content:focus,:host button.button--role-skip-to-content:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);-webkit-box-shadow:var(--gcds-button-shared-focus-box-shadow);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width);text-decoration:none}:host a.button--role-skip-to-content:active,:host button.button--role-skip-to-content:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}:host a[aria-disabled=true],:host button[aria-disabled=true]{background-color:var(--gcds-button-shared-disabled-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-shared-disabled-text);cursor:not-allowed;pointer-events:none}:host a.button--small,:host button.button--small{font:var(--gcds-button-small-font);padding:var(--gcds-button-small-padding)}@media screen and (max-width:30rem){:host a:not(.button--text-only),:host button:not(.button--text-only){margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}";

const GcdsButton = /*@__PURE__*/ proxyCustomElement(class GcdsButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.handleClick = (e) => {
      if (this.clickHandler) {
        this.clickHandler(e);
      }
      else {
        if (!this.disabled && this.type != 'button' && this.type != 'link') {
          // Attach button to form
          const form = this.el.closest('form');
          if (form) {
            e.preventDefault();
            const formButton = document.createElement('button');
            formButton.type = this.type;
            if (this.name) {
              formButton.name = this.name;
            }
            formButton.style.display = 'none';
            form.appendChild(formButton);
            formButton.click();
            formButton.remove();
          }
        }
      }
      // Has any inherited attributes changed on click
      this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    };
    this.onFocus = e => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = e => {
      if (this.blurHandler) {
        this.blurHandler(e);
      }
      this.gcdsBlur.emit();
    };
    this.type = 'button';
    this.buttonRole = 'primary';
    this.buttonStyle = 'solid';
    this.size = 'regular';
    this.buttonId = undefined;
    this.name = undefined;
    this.disabled = undefined;
    this.href = undefined;
    this.rel = undefined;
    this.target = undefined;
    this.download = undefined;
    this.clickHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
  }
  validateType(newValue) {
    const values = ['submit', 'reset', 'button', 'link'];
    if (!values.includes(newValue)) {
      this.type = 'button';
    }
  }
  validateButtonRole(newValue) {
    const values = ['primary', 'secondary', 'danger', 'skip-to-content'];
    if (!values.includes(newValue)) {
      this.buttonRole = 'primary';
    }
  }
  validateButtonStyle(newValue) {
    const values = ['solid', 'text-only'];
    if (!values.includes(newValue)) {
      this.buttonStyle = 'solid';
    }
  }
  validateSize(newValue) {
    const values = ['regular', 'small'];
    if (!values.includes(newValue)) {
      this.size = 'regular';
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
  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateType(this.type);
    this.validateButtonRole(this.buttonRole);
    this.validateButtonStyle(this.buttonStyle);
    this.validateSize(this.size);
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
  }
  /**
   * Focus element
   */
  async focusElement() {
    this.shadowElement.focus();
  }
  render() {
    const { type, buttonRole, buttonStyle, size, buttonId, disabled, lang, name, href, rel, target, download, inheritedAttributes, } = this;
    const Tag = type != 'link' ? 'button' : 'a';
    const attrs = Tag === 'button'
      ? {
        type: type,
        ariaDisabled: disabled,
        name,
      }
      : {
        href,
        rel,
        target,
        download,
      };
    return (h(Host, null, h(Tag, Object.assign({}, attrs, { id: buttonId, onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onClick: e => this.handleClick(e), class: `button--role-${buttonRole} button--${buttonStyle} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), h("slot", { name: "left" }), h("slot", null), type === 'link' && target === '_blank' ? (h("gcds-icon", { name: "external-link", label: I18N[lang].label, "margin-left": "200" })) : (h("slot", { name: "right" })))));
  }
  get el() { return this; }
  static get watchers() { return {
    "type": ["validateType"],
    "buttonRole": ["validateButtonRole"],
    "buttonStyle": ["validateButtonStyle"],
    "size": ["validateSize"]
  }; }
  static get style() { return gcdsButtonCss; }
}, [1, "gcds-button", {
    "type": [1025],
    "buttonRole": [1025, "button-role"],
    "buttonStyle": [1025, "button-style"],
    "size": [1025],
    "buttonId": [1, "button-id"],
    "name": [1],
    "disabled": [4],
    "href": [1],
    "rel": [1],
    "target": [1],
    "download": [1],
    "clickHandler": [16],
    "focusHandler": [16],
    "blurHandler": [16],
    "inheritedAttributes": [32],
    "lang": [32],
    "focusElement": [64]
  }, undefined, {
    "type": ["validateType"],
    "buttonRole": ["validateButtonRole"],
    "buttonStyle": ["validateButtonStyle"],
    "size": ["validateSize"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-button", "gcds-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsButton);
      }
      break;
    case "gcds-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GcdsButton as G, defineCustomElement as d };

//# sourceMappingURL=gcds-button2.js.map