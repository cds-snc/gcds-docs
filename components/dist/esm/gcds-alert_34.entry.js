import { r as registerInstance, c as createEvent, h, H as Host, g as getElement, F as Fragment } from './index-5d717a3a.js';

const inheritAttributes = (el, shadowElement, attributes = []) => {
  const attributeObject = {};
  // Check for any aria or data attributes
  for (let i = 0; i < el.attributes.length; i++) {
    let attr = el.attributes[i];
    if (attr.name.includes("aria-") || attr.name.includes("data-")) {
      attributeObject[attr.name] = attr.value;
      el.removeAttribute(attr.name);
    }
  }
  // Check for attributes defined by component
  attributes.forEach(attr => {
    if (el.hasAttribute(attr) || (shadowElement && shadowElement.hasAttribute(attr))) {
      const value = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const assignLanguage = (el) => {
  let lang = "";
  if (!el.getAttribute('lang')) {
    if (document.documentElement.getAttribute('lang') == 'en' || !document.documentElement.getAttribute('lang')) {
      lang = 'en';
    }
    else {
      lang = 'fr';
    }
  }
  else if (el.getAttribute('lang') == 'en') {
    lang = 'en';
  }
  else {
    lang = 'fr';
  }
  return lang;
};
const observerConfig = {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ['lang']
};
// For validation - check if element has a checked checkbox/radio sibling
const elementGroupCheck = (name) => {
  let hasCheck = false;
  const element = document.querySelectorAll(`input[name=${name}]`);
  for (var i = 0; i < element.length; i++) {
    if (element[i].checked) {
      hasCheck = true;
    }
  }
  return !hasCheck;
};

const I18N$i = {
  "en": {
    label: {
      danger: "This is a critical alert.",
      info: "This is an info alert.",
      success: "This is a success alert.",
      warning: "This is a warning alert.",
    },
    closeBtn: "Close alert.",
  },
  "fr": {
    label: {
      danger: "Ceci est une alerte d'effacement.",
      info: "Ceci est une alerte d'information.",
      success: "Ceci est une alerte de succès.",
      warning: "Ceci est une alerte d'avertissement.",
    },
    closeBtn: "Fermer l'alerte.",
  }
};

const gcdsAlertCss = ":host .gcds-alert{-webkit-border-start:var(--gcds-alert-border-width) solid transparent;border-inline-start:var(--gcds-alert-border-width) solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--gcds-alert-text);font:var(--gcds-alert-font);padding:var(--gcds-alert-padding);text-align:left}:host .gcds-alert.alert--is-fixed{border:0;position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:9999}:host .gcds-alert.alert--role-danger{background-color:var(--gcds-alert-danger-background);border-color:var(--gcds-alert-danger-icon);color:var(--gcds-alert-danger-text)}:host .gcds-alert.alert--role-danger .alert__icon{color:var(--gcds-alert-danger-icon)}:host .gcds-alert.alert--role-info{background-color:var(--gcds-alert-info-background);border-color:var(--gcds-alert-info-icon);color:var(--gcds-alert-info-text)}:host .gcds-alert.alert--role-info .alert__icon{color:var(--gcds-alert-info-icon)}:host .gcds-alert.alert--role-success{background-color:var(--gcds-alert-success-background);border-color:var(--gcds-alert-success-icon);color:var(--gcds-alert-success-text)}:host .gcds-alert.alert--role-success .alert__icon{color:var(--gcds-alert-success-icon)}:host .gcds-alert.alert--role-warning{background-color:var(--gcds-alert-warning-background);border-color:var(--gcds-alert-warning-icon);color:var(--gcds-alert-warning-text)}:host .gcds-alert.alert--role-warning .alert__icon{color:var(--gcds-alert-warning-icon)}@media only screen and (width >= 36em){:host .gcds-alert .alert__container{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex}}:host .gcds-alert .alert__icon{display:inline-block;margin:var(--gcds-alert-icon-margin)}@media only screen and (width < 36em){:host .gcds-alert .alert__icon{margin:var(--gcds-alert-icon-mobile-margin)}}:host .gcds-alert .alert__content{-ms-flex:1 1 auto;flex:1 1 auto}:host .gcds-alert .alert__content .alert__heading{font:var(--gcds-alert-content-heading-font);margin:var(--gcds-alert-content-heading-margin)}@media only screen and (width < 36em){:host .gcds-alert .alert__content .alert__heading{margin:var(--gcds-alert-content-heading-mobile-margin)}}:host .gcds-alert .alert__content ::slotted(*){-webkit-margin-before:0;margin-block-start:0}:host .gcds-alert .alert__content ::slotted(:last-child){-webkit-margin-after:0;margin-block-end:0}:host .gcds-alert .alert__content ::slotted(:not(:last-child)){-webkit-margin-after:var(--gcds-alert-content-slotted-margin);margin-block-end:var(--gcds-alert-content-slotted-margin)}:host .gcds-alert .alert__content ::slotted(ol),:host .gcds-alert .alert__content ::slotted(ul){-webkit-margin-start:var(--gcds-alert-content-slotted-list-margin);margin-inline-start:var(--gcds-alert-content-slotted-list-margin);padding:0}:host .gcds-alert .alert__close-btn{background-color:var(--gcds-alert-button-default-background);border:var(--gcds-alert-button-border-width) solid transparent;border-radius:var(--gcds-alert-button-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--gcds-alert-button-default-text);cursor:pointer;margin:var(--gcds-alert-button-margin);padding:0;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}@media only screen and (width < 36em){:host .gcds-alert .alert__close-btn{margin:var(--gcds-alert-button-mobile-margin)}}:host .gcds-alert .alert__close-btn gcds-icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:var(--gcds-alert-button-icon-width-and-height);-ms-flex-pack:center;justify-content:center;padding:var(--gcds-alert-button-icon-padding);width:var(--gcds-alert-button-icon-width-and-height)}:host .gcds-alert .alert__close-btn:active,:host .gcds-alert .alert__close-btn:hover{border-color:currentColor}:host .gcds-alert .alert__close-btn:focus{background-color:var(--gcds-alert-button-focus-background);border-color:var(--gcds-alert-button-focus-background);-webkit-box-shadow:0 0 0 var(--gcds-alert-button-border-width) var(--gcds-alert-button-focus-text);box-shadow:0 0 0 var(--gcds-alert-button-border-width) var(--gcds-alert-button-focus-text);color:var(--gcds-alert-button-focus-text);outline:var(--gcds-alert-button-outline-width) solid var(--gcds-alert-button-focus-background);outline-offset:var(--gcds-alert-button-border-width)}";

const GcdsAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsDismiss = createEvent(this, "gcdsDismiss", 7);
    this.onDismiss = (e) => {
      this.gcdsDismiss.emit();
      if (this.dismissHandler) {
        this.dismissHandler(e);
      }
      else {
        this.isOpen = false;
      }
    };
    this.alertRole = 'info';
    this.container = 'full';
    this.dismissHandler = undefined;
    this.heading = undefined;
    this.hideCloseBtn = false;
    this.hideRoleIcon = false;
    this.isFixed = false;
    this.isOpen = true;
    this.lang = undefined;
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
  }
  render() {
    const { alertRole, container, heading, hideCloseBtn, hideRoleIcon, isFixed, isOpen, lang } = this;
    return (h(Host, null, isOpen ?
      h("div", { class: `gcds-alert alert--role-${alertRole} ${isFixed ? 'alert--is-fixed' : ''}`, role: "alert", "aria-label": alertRole === 'danger' ? I18N$i[lang].label.danger
          : alertRole === 'info' ? I18N$i[lang].label.info
            : alertRole === 'success' ? I18N$i[lang].label.success
              : alertRole === 'warning' ? I18N$i[lang].label.warning
                : null }, h("gcds-container", { size: isFixed ? container : 'full', centered: true }, h("div", { class: "alert__container" }, (!hideRoleIcon &&
        h("gcds-icon", { "aria-hidden": "true", class: "alert__icon", size: "h5", name: alertRole === 'danger' ? 'exclamation-circle'
            : alertRole === 'info' ? 'info-circle'
              : alertRole === 'success' ? 'check-circle'
                : alertRole === 'warning' ? 'exclamation-triangle'
                  : null })), h("div", { class: "alert__content" }, h("p", { class: "alert__heading" }, h("strong", null, heading)), h("slot", null)), (!hideCloseBtn &&
        h("button", { class: "alert__close-btn", onClick: (e) => this.onDismiss(e), "aria-label": I18N$i[lang].closeBtn }, h("gcds-icon", { "aria-hidden": "true", name: "times", size: "text" }))))))
      : null));
  }
  get el() { return getElement(this); }
};
GcdsAlert.style = gcdsAlertCss;

const I18N$h = {
  "en": {
    label: "Breadcrumb",
  },
  "fr": {
    label: "Chemin de navigation",
  }
};

const gcdsBreadcrumbsCss = ":host .gcds-breadcrumbs ol{font:var(--gcds-breadcrumbs-font);list-style:none;margin:var(--gcds-breadcrumbs-margin);overflow-x:hidden;padding:var(--gcds-breadcrumbs-padding)}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child,:host .gcds-breadcrumbs ol:not(.has-canada-link) ::slotted(:first-child){margin:var(--gcds-breadcrumbs-item-first-child-margin)!important}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before{display:none}";

const GcdsBreadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hideCanadaLink = false;
    this.lang = undefined;
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
  }
  render() {
    const { hideCanadaLink, lang } = this;
    return (h(Host, null, h("nav", { "aria-label": I18N$h[lang].label, class: "gcds-breadcrumbs" }, h("ol", { class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ?
      h("gcds-breadcrumbs-item", { href: `https://www.canada.ca/${lang == 'fr' ? 'fr' : 'en'}.html` }, "Canada.ca")
      : null, h("slot", null)))));
  }
  get el() { return getElement(this); }
};
GcdsBreadcrumbs.style = gcdsBreadcrumbsCss;

const gcdsBreadcrumbsItemCss = ":host(.gcds-breadcrumbs-item){display:inline-block;padding:var(--gcds-breadcrumbs-item-padding)!important;position:relative}:host(.gcds-breadcrumbs-item):before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"12\" viewBox=\"0 0 8 14\"><path fill=\"26374a\" d=\"M7.7 6.3c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L5.6 7 .3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0l6 6z\"/></svg>');left:var(--gcds-breadcrumbs-item-arrow-left);position:absolute;top:var(--gcds-breadcrumbs-item-arrow-top)}:host(.gcds-breadcrumbs-item) a{color:var(--gcds-breadcrumbs-default-text);display:inline-block;margin:var(--gcds-breadcrumbs-item-margin);outline:0;padding:var(--gcds-breadcrumbs-item-link-padding);-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-breadcrumbs-default-decoration-thickness);text-underline-offset:.2em;-webkit-transition:background .15s ease-in-out,color .15s ease-in-out;transition:background .15s ease-in-out,color .15s ease-in-out;white-space:normal}:host(:focus) a{background-color:var(--gcds-breadcrumbs-focus-background);border-radius:var(--gcds-breadcrumbs-focus-border-radius);-webkit-box-shadow:var(--gcds-breadcrumbs-focus-box-shadow);box-shadow:var(--gcds-breadcrumbs-focus-box-shadow);color:var(--gcds-breadcrumbs-focus-text);outline:var(--gcds-breadcrumbs-focus-outline);outline-offset:var(--gcds-breadcrumbs-focus-outline-offset);text-decoration:none}:host(:not(:focus)) a:hover{color:var(--gcds-breadcrumbs-hover-text);text-decoration-thickness:var(--gcds-breadcrumbs-hover-decoration-thickness)}";

const GcdsBreadcrumbsItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = undefined;
  }
  render() {
    const { href } = this;
    return (h(Host, { role: "listitem", class: "gcds-breadcrumbs-item" }, h("a", { href: href }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
GcdsBreadcrumbsItem.style = gcdsBreadcrumbsItemCss;

const I18N$g = {
  "en": {
    label: "Opens in a new tab.",
  },
  "fr": {
    label: "S'ouvre dans un nouvel onglet.",
  }
};

const gcdsButtonCss = ":host a,:host button{border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;font:var(--gcds-button-font);padding:var(--gcds-button-padding);text-align:center;text-decoration:none;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;width:var(--gcds-button-width)}:host a.button--role-danger,:host button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host a.button--role-danger:hover,:host button.button--role-danger:hover{background-color:var(--gcds-button-danger-hover-background)}:host a.button--role-danger:focus,:host button.button--role-danger:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}:host a.button--role-danger:active,:host button.button--role-danger:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}:host a.button--role-primary,:host button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host a.button--role-primary:hover,:host button.button--role-primary:hover{background-color:var(--gcds-button-primary-hover-background)}:host a.button--role-primary:focus,:host button.button--role-primary:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}:host a.button--role-primary:active,:host button.button--role-primary:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}:host a.button--role-secondary,:host button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}:host a.button--role-secondary:hover,:host button.button--role-secondary:hover{background-color:var(--gcds-button-secondary-hover-background);border-color:var(--gcds-button-secondary-default-text);color:var(--gcds-button-secondary-default-text)}:host a.button--role-secondary:focus,:host button.button--role-secondary:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}:host a.button--role-secondary:focus:hover,:host button.button--role-secondary:focus:hover{border-color:var(--gcds-button-shared-focus-background)}:host a.button--role-secondary:active,:host button.button--role-secondary:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)!important}:host a.button--text-only,:host button.button--text-only{background-color:var(--gcds-button-text-only-default-background);color:var(--gcds-button-text-only-default-text)}:host a.button--text-only:not([aria-disabled=true]),:host button.button--text-only:not([aria-disabled=true]){text-decoration:underline;-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-button-text-only-default-decoration-thickness);text-underline-offset:.2em}:host a.button--text-only:hover,:host button.button--text-only:hover{background-color:var(--gcds-button-text-only-default-background);color:var(--gcds-button-text-only-hover-text);text-decoration-thickness:var(--gcds-button-text-only-hover-decoration-thickness)}:host a.button--text-only:focus,:host button.button--text-only:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width);text-decoration:none}:host a.button--text-only:active,:host button.button--text-only:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}:host a.button--role-skip-to-content,:host button.button--role-skip-to-content{left:0;position:absolute;top:var(--gcds-button-skip-top);width:inherit;z-index:3}:host a.button--role-skip-to-content:not(:focus),:host button.button--role-skip-to-content:not(:focus){clip:rect(0,0,0,0);height:0;margin:0;overflow:hidden;padding:0;width:0}:host a.button--role-skip-to-content:focus,:host button.button--role-skip-to-content:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width);text-decoration:none}:host a.button--role-skip-to-content:active,:host button.button--role-skip-to-content:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}:host a[aria-disabled=true],:host button[aria-disabled=true]{background-color:var(--gcds-button-shared-disabled-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-shared-disabled-text);cursor:not-allowed;pointer-events:none}:host a.button--small,:host button.button--small{font:var(--gcds-button-small-font);padding:var(--gcds-button-small-padding)}@media screen and (max-width:30rem){:host a:not(.button--text-only),:host button:not(.button--text-only){margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}";

const GcdsButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    this.onFocus = (e) => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = (e) => {
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
    const observer = new MutationObserver((mutations) => {
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
    const { type, buttonRole, buttonStyle, size, buttonId, disabled, lang, name, href, rel, target, download, inheritedAttributes } = this;
    const Tag = type != 'link' ? 'button' : 'a';
    const attrs = (Tag === 'button') ? {
      type: type,
      ariaDisabled: disabled,
      name
    } : {
      href,
      rel,
      target,
      download
    };
    return (h(Host, null, h(Tag, Object.assign({}, attrs, { id: buttonId, onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onClick: (e) => this.handleClick(e), class: `button--role-${buttonRole} button--${buttonStyle} button--${size}`, ref: element => this.shadowElement = element }, inheritedAttributes, { part: "button" }), h("slot", { name: "left" }), h("slot", null), type === 'link' && target === '_blank' ?
      h("gcds-icon", { name: "external-link", label: I18N$g[lang].label, "margin-left": "200" })
      : h("slot", { name: "right" }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "type": ["validateType"],
    "buttonRole": ["validateButtonRole"],
    "buttonStyle": ["validateButtonStyle"],
    "size": ["validateSize"]
  }; }
};
GcdsButton.style = gcdsButtonCss;

const gcdsCardCss = "@layer reset, defaults, slot, link, state.hover, state.focus;@layer reset{:host *{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}}@layer defaults{:host{display:block}:host .gcds-card{background-color:var(--gcds-card-background-color);border:var(--gcds-card-border);border-radius:var(--gcds-card-border-radius);color:var(--gcds-card-color);display:block;height:100%;padding:var(--gcds-card-padding);position:relative}:host .gcds-card>:not(slot):not(.gcds-card__spacer){display:block;margin:var(--gcds-card-margin)}:host .gcds-card .gcds-card__image{width:100%}:host .gcds-card .gcds-card__tag{color:var(--gcds-card-tag-color);font:var(--gcds-card-tag-font)}:host .gcds-card .gcds-card__title,:host .gcds-card .gcds-card__title>a{color:var(--gcds-card-title-color);font:var(--gcds-card-title-font);-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-card-title-text-decoration-thickness);text-underline-offset:var(--gcds-card-title-text-underline-offset);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host .gcds-card .gcds-card__description{max-width:var(--gcds-card-description-max-width)}}@layer slot{:host .gcds-card:has(slot){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host .gcds-card:has(slot) .gcds-card__spacer{-ms-flex:1;flex:1}:host .gcds-card:has(slot) ::slotted(*){color:var(--gcds-card-slot-color);font:var(--gcds-card-slot-font)!important;z-index:2}}@layer link{:host .gcds-card--link .gcds-card__title>a:after,:host .gcds-card--link a.gcds-card__title:after{bottom:0;content:\"\";left:0;pointer-events:auto;position:absolute;right:0;top:0;z-index:1}}@layer state.hover{:host .gcds-card--link:hover{background-color:var(--gcds-card-hover-background-color);-webkit-box-shadow:var(--gcds-card-hover-box-shadow);box-shadow:var(--gcds-card-hover-box-shadow);cursor:pointer}:host .gcds-card--link:hover .gcds-card__title>a,:host .gcds-card--link:hover a.gcds-card__title{color:var(--gcds-card-hover-title-color);text-decoration-thickness:var(--gcds-card-hover-title-text-decoration-thickness)}:host .gcds-card__title>a:hover,:host a.gcds-card__title:hover{color:var(--gcds-card-hover-title-color);text-decoration-thickness:var(--gcds-card-hover-title-text-decoration-thickness)}}@layer state.focus{:host .gcds-card__title>a:focus,:host a.gcds-card__title:focus{background-color:var(--gcds-card-focus-background);border-radius:var(--gcds-card-focus-border-radius);-webkit-box-shadow:var(--gcds-card-focus-box-shadow);box-shadow:var(--gcds-card-focus-box-shadow);color:var(--gcds-card-focus-color);outline:var(--gcds-card-focus-outline);outline-offset:var(--gcds-card-focus-outline-offset);text-decoration:none}}";

const GcdsCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'link';
    this.cardTitle = undefined;
    this.titleElement = 'a';
    this.href = undefined;
    this.description = undefined;
    this.tag = undefined;
    this.imgSrc = undefined;
    this.imgAlt = undefined;
  }
  get hasCardFooter() {
    return !!this.el.querySelector('[slot="footer"]');
  }
  render() {
    const { type, cardTitle, titleElement, href, description, tag, imgSrc, imgAlt, hasCardFooter } = this;
    const Element = titleElement;
    return (h(Host, null, h("div", { class: `gcds-card gcds-card--${type}` }, imgSrc &&
      h("img", { src: imgSrc, alt: imgAlt ? imgAlt : "", class: "gcds-card__image" }), tag &&
      h("span", { class: "gcds-card__tag" }, tag), Element != 'a' ?
      h(Element, { class: "gcds-card__title" }, h("a", { href: href }, cardTitle))
      :
        h("a", { href: href, class: "gcds-card__title" }, cardTitle), description &&
      h("p", { class: "gcds-card__description" }, description), hasCardFooter &&
      h(Fragment, null, h("div", { class: "gcds-card__spacer" }), h("slot", { name: "footer" })))));
  }
  get el() { return getElement(this); }
};
GcdsCard.style = gcdsCardCss;

const defaultValidator = {
  validate: (_x) => true
};
function combineValidators(v1, v2) {
  let combined;
  combined = {
    validate: (x) => {
      const res1 = v1.validate(x);
      const res2 = v2.validate(x);
      if (!res1) {
        combined.errorMessage = v1.errorMessage;
      }
      else if (!res2) {
        combined.errorMessage = v2.errorMessage;
      }
      return res1 && res2;
    },
  };
  return combined;
}
function requiredValidator(element, type, subtype) {
  if (element.required) {
    switch (type) {
      // Components all validate the "value" property
      case ("input"):
        switch (subtype) {
          case ("email"):
            if (element.validator) {
              element.validator.unshift("requiredEmailField");
            }
            else {
              element.validator = ["requiredEmailField"];
            }
            break;
          default:
            if (element.validator) {
              element.validator.unshift("requiredField");
            }
            else {
              element.validator = ["requiredField"];
            }
            break;
        }
        break;
      case ("select"):
        if (element.validator) {
          element.validator.unshift("requiredSelectField");
        }
        else {
          element.validator = ["requiredSelectField"];
        }
        break;
      case ("textarea"):
        if (element.validator) {
          element.validator.unshift("requiredField");
        }
        else {
          element.validator = ["requiredField"];
        }
        break;
      case ("file"):
        if (element.validator) {
          element.validator.unshift("requiredFileInput");
        }
        else {
          element.validator = ["requiredFileInput"];
        }
        break;
      case ("checkbox"):
        if (element.validator) {
          element.validator.unshift("requiredCheck");
        }
        else {
          element.validator = ["requiredCheck"];
        }
        break;
      case ("fieldset"):
        if (element.validator) {
          element.validator.unshift("requiredFieldset");
        }
        else {
          element.validator = ["requiredFieldset"];
        }
        break;
    }
  }
}
/*
Example of parameter validator

export function getLengthValidator(min: number, max: number): Validator<string> {
    // Create errorMessage object
    let errorMessage = {};
    if (min && max) {
        errorMessage["en"] = `You must enter between ${min} and ${max} characters`;
        errorMessage["fr"] = `French You must enter between ${min} and ${max} characters`;
    } else if (min) {
        errorMessage["en"] = `You must enter at least ${min} characters`;
        errorMessage["fr"] = `French You must enter at least ${min} characters`;
    } else if (max) {
        errorMessage["en"] = `You must enter less than ${max} characters`;
        errorMessage["fr"] = `French You must enter less than ${max} characters`;
    }
    return {
        validate: (value: string) => {
            value = value || '';
            if (min && max) {
                return min <= value.length && value.length <= max;
            }
            if (min) {
                return min <= value.length;
            }
            if (max) {
                return value.length <= max;
            }
            return true;
        },
        errorMessage
    };
}
*/

let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const requiredField = {
  validate: (value) => value != null && value.trim() != "",
  errorMessage: {
    "en": "Enter information to continue.",
    "fr": "Saisissez des renseignements pour continuer."
  }
};
const requiredEmailField = {
  validate: (value) => (value != null && value.trim() != "") && (value.toLowerCase().match(emailPattern) ? true : false),
  errorMessage: {
    "en": "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.",
    "fr": "Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca."
  }
};
const requiredFileInput = {
  validate: (value) => value.length > 0,
  errorMessage: {
    "en": "You must upload a file to continue.",
    "fr": "Vous devez téléverser un fichier pour continuer."
  }
};
const requiredSelectField = {
  validate: (value) => value != null && value.trim() != "",
  errorMessage: {
    "en": "Choose an option to continue.",
    "fr": "Choisissez une option pour continuer."
  }
};

const requiredCheck = {
  validate: (value) => value,
  errorMessage: {
    "en": "You must check the box to continue.",
    "fr": "Vous devez cocher la case pour continuer."
  }
};

const requiredFieldset = {
  validate: (id) => {
    const el = document.querySelector(`#${id}`);
    const elChildren = el.children;
    let isValid = validateFieldsetElements(el, elChildren);
    return !isValid.includes(false);
  },
  errorMessage: {
    "en": "Choose an option to continue.",
    "fr": "Choisissez une option pour continuer."
  }
};
function validateFieldsetElements(element, nodeList) {
  let isValid = [];
  for (let i = 0; i < nodeList.length; i++) {
    switch (nodeList[i].nodeName) {
      case ('GCDS-FIELDSET'):
        let validFieldsetChildren = validateFieldsetElements(nodeList[i], nodeList[i].children);
        isValid = isValid.concat(validFieldsetChildren);
        break;
      case ('GCDS-CHECKBOX'):
      case ('GCDS-RADIO'):
        // Radio/checkbox can share name property
        let inputName = nodeList[i].getAttribute('name');
        // Find all inputs with shared name
        const sameNameInputs = element.querySelectorAll(`[name=${inputName}]`);
        let childGroupValid = false;
        // Check if there is more than one input with this name
        if (sameNameInputs.length > 1) {
          // Validate as group
          for (let c = 0; c < sameNameInputs.length; c++) {
            if (sameNameInputs[c].hasAttribute("checked")) {
              childGroupValid = true;
            }
          }
          isValid.push(childGroupValid);
        }
        else {
          // Validate as single input
          isValid.push(nodeList[i].hasAttribute('checked') ? true : false);
        }
        break;
    }
  }
  return isValid;
}

var ValidatorsName;
(function (ValidatorsName) {
  ValidatorsName["requiredField"] = "requiredField";
  ValidatorsName["requiredEmailField"] = "requiredEmailField";
  ValidatorsName["requiredCheck"] = "requiredCheck";
  ValidatorsName["requiredFieldset"] = "requiredFieldset";
  ValidatorsName["requiredFileInput"] = "requiredFileInput";
  ValidatorsName["requiredSelectField"] = "requiredSelectField";
})(ValidatorsName || (ValidatorsName = {}));
function getValidator(list) {
  return (list || []).map(v => {
    if (typeof v === 'string') {
      return validatorFactory(v);
    }
    else if (v && v.name) {
      v = v;
      return validatorFactory(v.name);
    }
    else {
      return v;
    }
  }).reduce(combineValidators, defaultValidator);
}
function validatorFactory(name, options) {
  switch (name) {
    case (ValidatorsName.requiredField):
      return requiredField;
    case (ValidatorsName.requiredEmailField):
      return requiredEmailField;
    case (ValidatorsName.requiredSelectField):
      return requiredSelectField;
    case (ValidatorsName.requiredCheck):
      return requiredCheck;
    case (ValidatorsName.requiredFieldset):
      return requiredFieldset;
    case (ValidatorsName.requiredFileInput):
      return requiredFileInput;
    /*
    Formatting for parameter validator
    
    case (ValidatorsName.length):
        return getLengthValidator(options.min, options.max);
    */
    default:
      return defaultValidator;
  }
}

const gcdsCheckboxCss = ".sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox{color:var(--gcds-checkbox-default-text);font:var(--gcds-checkbox-font);margin:var(--gcds-checkbox-margin);max-width:90%;padding:0;position:relative;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox:focus-within{color:var(--gcds-checkbox-focus-text)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox:focus-within gcds-hint.sc-gcds-checkbox{color:currentColor}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox{color:var(--gcds-checkbox-disabled-text)}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox{color:var(--gcds-checkbox-disabled-text)}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:before{background-color:var(--gcds-checkbox-disabled-background);border-color:currentcolor;cursor:not-allowed}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:after{cursor:not-allowed}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox gcds-hint.sc-gcds-checkbox{color:currentColor}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--error.sc-gcds-checkbox:not(:focus-within) input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:before{border-color:var(--gcds-checkbox-danger-border)}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--error.sc-gcds-checkbox:not(:focus-within) input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:after{color:var(--gcds-checkbox-danger-border)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox{height:var(--gcds-checkbox-input-height-and-width);left:0;opacity:0;position:absolute;top:var(--gcds-checkbox-top);width:var(--gcds-checkbox-input-height-and-width)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox:checked+gcds-label.sc-gcds-checkbox:after{opacity:1}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:after,.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:before{-webkit-box-sizing:border-box;box-sizing:border-box;content:\"\";cursor:pointer;position:absolute}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:before{border:var(--gcds-checkbox-input-border-width) solid;border-radius:var(--gcds-checkbox-input-border-radius);height:var(--gcds-checkbox-input-height-and-width);left:0;top:var(--gcds-checkbox-top);width:var(--gcds-checkbox-input-height-and-width)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:after{border:var(--gcds-checkbox-check-border-width) solid;border-left:0;border-top:0;color:currentcolor;height:var(--gcds-checkbox-check-height);left:var(--gcds-checkbox-check-left);opacity:0;top:var(--gcds-checkbox-check-top);-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;width:var(--gcds-checkbox-check-width)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox:focus+gcds-label.sc-gcds-checkbox:before{outline:var( --gcds-checkbox-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-checkbox-input-border-width)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox:focus+gcds-label.sc-gcds-checkbox:after{color:var(--gcds-checkbox-focus-text)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox gcds-hint.sc-gcds-checkbox,.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox gcds-label.sc-gcds-checkbox{display:block;padding:var(--gcds-checkbox-label-padding)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox gcds-hint.sc-gcds-checkbox{font:var(--gcds-checkbox-hint-font);line-height:var(--gcds-checkbox-hint-line-height)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox gcds-error-message.sc-gcds-checkbox{display:inline-block;padding:var(--gcds-checkbox-error-padding)}";

const GcdsCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsChange = createEvent(this, "gcdsChange", 7);
    this.gcdsError = createEvent(this, "gcdsError", 7);
    this.gcdsValid = createEvent(this, "gcdsValid", 7);
    this._validator = defaultValidator;
    this.onFocus = (e) => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = (e) => {
      if (this.blurHandler) {
        this.blurHandler(e);
      }
      else {
        if (this.validateOn == "blur") {
          this.validate();
        }
      }
      this.gcdsBlur.emit();
    };
    this.onChange = () => {
      this.checked = !this.checked;
      this.gcdsChange.emit(this.checked);
    };
    this.checkboxId = undefined;
    this.label = undefined;
    this.name = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.value = undefined;
    this.checked = undefined;
    this.errorMessage = undefined;
    this.hint = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.clickHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.parentError = undefined;
    this.inheritedAttributes = {};
    this.hasError = undefined;
    this.lang = undefined;
  }
  validateDisabledCheckbox() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    }
    else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
    else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }
  /**
  * Event listener for gcds-fieldset errors
  */
  gcdsGroupError(e) {
    if (e.srcElement.contains(this.el) && elementGroupCheck(this.name)) {
      this.hasError = true;
      this.parentError = e.detail;
    }
    else if (!elementGroupCheck(this.name)) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  gcdsGroupErrorClear(e) {
    if (e.srcElement.contains(this.el) && this.hasError) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.checked) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({ id: `#${this.checkboxId}`, message: `${this.label} - ${this.errorMessage}` });
    }
    else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.checkboxId}` });
    }
  }
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    this.validateDisabledCheckbox();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, "checkbox");
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { lang, checkboxId, label, name, required, disabled, value, checked, hint, errorMessage, hasError, parentError, inheritedAttributes } = this;
    const attrsInput = Object.assign({ name,
      disabled,
      required,
      value,
      checked }, inheritedAttributes);
    const attrsLabel = {
      label,
      required,
    };
    if (hint || errorMessage || parentError) {
      let hintID = hint ? `hint-${checkboxId} ` : "";
      let errorID = errorMessage ? `error-message-${checkboxId} ` : "";
      let parentErrorID = parentError ? `parent-error-${checkboxId} ` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${parentErrorID}${attrsInput["aria-describedby"] ? `${attrsInput["aria-describedby"]}` : ""}`;
    }
    if (hasError) {
      attrsInput["aria-invalid"] = "true";
    }
    return (h(Host, null, h("div", { class: `gcds-checkbox ${disabled ? 'gcds-checkbox--disabled' : ''} ${hasError ? 'gcds-checkbox--error' : ''}` }, h("input", Object.assign({ id: checkboxId, type: "checkbox" }, attrsInput, { onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onChange: () => this.onChange(), onClick: (e) => { this.clickHandler && this.clickHandler(e); }, ref: element => this.shadowElement = element })), h("gcds-label", Object.assign({}, attrsLabel, { "label-for": checkboxId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": checkboxId }) : null, errorMessage ? h("gcds-error-message", { messageId: checkboxId, message: errorMessage }) : null, parentError ? h("span", { id: `parent-error-${checkboxId}`, hidden: true }, parentError) : null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["validateDisabledCheckbox"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }; }
};
GcdsCheckbox.style = gcdsCheckboxCss;

const gcdsContainerCss = ":host .gcds-container{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;padding:0}:host .gcds-container.container-border{border:var(--gcds-container-border)}:host .gcds-container.container-centered{margin-inline:auto!important}:host .gcds-container.m-0{margin:var(--gcds-container-spacing-0)}:host .gcds-container.m-50{margin:var(--gcds-container-spacing-50)}:host .gcds-container.m-100{margin:var(--gcds-container-spacing-100)}:host .gcds-container.m-150{margin:var(--gcds-container-spacing-150)}:host .gcds-container.m-200{margin:var(--gcds-container-spacing-200)}:host .gcds-container.m-250{margin:var(--gcds-container-spacing-250)}:host .gcds-container.m-300{margin:var(--gcds-container-spacing-300)}:host .gcds-container.m-400{margin:var(--gcds-container-spacing-400)}:host .gcds-container.m-450{margin:var(--gcds-container-spacing-450)}:host .gcds-container.m-500{margin:var(--gcds-container-spacing-500)}:host .gcds-container.m-550{margin:var(--gcds-container-spacing-550)}:host .gcds-container.m-600{margin:var(--gcds-container-spacing-600)}:host .gcds-container.m-700{margin:var(--gcds-container-spacing-700)}:host .gcds-container.m-800{margin:var(--gcds-container-spacing-800)}:host .gcds-container.m-900{margin:var(--gcds-container-spacing-900)}:host .gcds-container.m-1000{margin:var(--gcds-container-spacing-1000)}:host .gcds-container.p-0{padding:var(--gcds-container-spacing-0)}:host .gcds-container.p-50{padding:var(--gcds-container-spacing-50)}:host .gcds-container.p-100{padding:var(--gcds-container-spacing-100)}:host .gcds-container.p-150{padding:var(--gcds-container-spacing-150)}:host .gcds-container.p-200{padding:var(--gcds-container-spacing-200)}:host .gcds-container.p-250{padding:var(--gcds-container-spacing-250)}:host .gcds-container.p-300{padding:var(--gcds-container-spacing-300)}:host .gcds-container.p-400{padding:var(--gcds-container-spacing-400)}:host .gcds-container.p-450{padding:var(--gcds-container-spacing-450)}:host .gcds-container.p-500{padding:var(--gcds-container-spacing-500)}:host .gcds-container.p-550{padding:var(--gcds-container-spacing-550)}:host .gcds-container.p-600{padding:var(--gcds-container-spacing-600)}:host .gcds-container.p-700{padding:var(--gcds-container-spacing-700)}:host .gcds-container.p-800{padding:var(--gcds-container-spacing-800)}:host .gcds-container.p-900{padding:var(--gcds-container-spacing-900)}:host .gcds-container.p-1000{padding:var(--gcds-container-spacing-1000)}:host .gcds-container[class*=size]{width:var(--gcds-container-size-full)}:host .gcds-container.size-xl{max-width:var(--gcds-container-size-xl)}:host .gcds-container.size-lg{max-width:var(--gcds-container-size-lg)}:host .gcds-container.size-md{max-width:var(--gcds-container-size-md)}:host .gcds-container.size-sm{max-width:var(--gcds-container-size-sm)}:host .gcds-container.size-xs{max-width:var(--gcds-container-size-xs)}";

const GcdsContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.border = false;
    this.centered = false;
    this.margin = undefined;
    this.padding = undefined;
    this.size = 'full';
    this.tag = 'div';
  }
  render() {
    const { border, centered, margin, padding, size, tag } = this;
    const Tag = tag;
    return (h(Host, null, h(Tag, { class: `
            gcds-container
            ${border ? `container-border` : ''}
            ${centered ? `container-centered` : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
GcdsContainer.style = gcdsContainerCss;

const I18N$f = {
  "en": {
    term: "Date modified:",
  },
  "fr": {
    term: "Date de modification :",
  }
};

const gcdsDateModifiedCss = ".sc-gcds-date-modified-h{color:var(--gcds-date-modified-text);display:block;font:var(--gcds-date-modified-font);margin:var(--gcds-date-modified-margin)}.sc-gcds-date-modified-h .gcds-date-modified.sc-gcds-date-modified dd.sc-gcds-date-modified,.sc-gcds-date-modified-h .gcds-date-modified.sc-gcds-date-modified dt.sc-gcds-date-modified{display:inline}.sc-gcds-date-modified-h .gcds-date-modified.sc-gcds-date-modified dd.sc-gcds-date-modified{margin:var(--gcds-date-modified-description-margin)}";

const GcdsDateModified = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'date';
    this.lang = undefined;
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
  }
  render() {
    const { lang, type } = this;
    return (h(Host, null, h("dl", { class: "gcds-date-modified" }, h("dt", null, type === 'version' ? 'Version ' : I18N$f[lang].term), h("dd", null, type === 'version' ?
      h("slot", null)
      :
        h("time", null, h("slot", null))))));
  }
  get el() { return getElement(this); }
};
GcdsDateModified.style = gcdsDateModifiedCss;

const gcdsDetailsCss = ":host .gcds-details{font:var(--gcds-details-font)}:host .gcds-details summary{color:var(--gcds-details-default-text);cursor:pointer;display:inline-block;padding:var(--gcds-details-summary-padding);position:relative;-webkit-transition:background-color .15s ease-in-out,color .15s ease-in-out;transition:background-color .15s ease-in-out,color .15s ease-in-out}:host .gcds-details summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);-webkit-box-shadow:var(--gcds-details-focus-box-shadow);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset)}:host .gcds-details summary:focus p{text-decoration:none}:host .gcds-details summary:before{-webkit-border-after:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;-webkit-border-before:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;-webkit-border-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:\"\";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out, -webkit-transform .15s ease-in-out;width:0}:host .gcds-details summary p{display:inline-block;font:var(--gcds-details-font);margin:var(--gcds-details-summary-text-margin);text-decoration:underline;-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-details-default-decoration-thickness);text-underline-offset:.2em}:host .gcds-details .details__panel{-webkit-border-start:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);border-inline-start:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);margin:var(--gcds-spacing-200) 0 0 0;padding:var(--gcds-details-panel-padding)}:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font);margin:0 0 var(--gcds-details-panel-slotted-margin)}:host .gcds-details .details__panel ::slotted(:first-child){-webkit-margin-before:0;margin-block-start:0}:host .gcds-details .details__panel ::slotted(:last-child){-webkit-margin-after:0;margin-block-end:0}:host .gcds-details .details__panel ::slotted(ol),:host .gcds-details .details__panel ::slotted(ul){-webkit-margin-start:var(--gcds-details-panel-slotted-margin);margin-inline-start:var(--gcds-details-panel-slotted-margin);padding:0}:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small)}:host .gcds-details:hover summary:not(:focus):before{color:var(--gcds-details-hover-text)}:host .gcds-details:hover summary:not(:focus) p{color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness);text-underline-offset:.2em}:host .gcds-details[open] summary:before{-webkit-transform:rotate(90deg);transform:rotate(90deg)}";

const GcdsDetails = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.detailsTitle = undefined;
    this.open = false;
  }
  render() {
    const { detailsTitle, open } = this;
    return (h(Host, null, h("details", { class: "gcds-details", open: open ? true : false }, h("summary", null, h("p", null, detailsTitle)), h("div", { class: "details__panel" }, h("slot", null)))));
  }
  get el() { return getElement(this); }
};
GcdsDetails.style = gcdsDetailsCss;

const gcdsErrorMessageCss = ":host{display:inline-block}:host .error-message{background:var(--gcds-error-message-background);-webkit-border-start:var(--gcds-error-message-border-width) solid var(--gcds-error-message-border-color);border-inline-start:var(--gcds-error-message-border-width) solid var(--gcds-error-message-border-color);color:var(--gcds-error-message-text);font:var(--gcds-error-message-font);margin:var(--gcds-error-message-margin);padding:var(--gcds-error-message-padding)}";

const GcdsErrorMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.messageId = undefined;
    this.message = undefined;
  }
  render() {
    const { messageId, message } = this;
    return (h(Host, { id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("p", { class: "error-message", role: "alert" }, message)));
  }
  get el() { return getElement(this); }
};
GcdsErrorMessage.style = gcdsErrorMessageCss;

const I18N$e = {
  "en": {
    heading: "There was a problem",
    subheading: "Errors were found on this page:"
  },
  "fr": {
    heading: "Un problème est survenu",
    subheading: "Des erreurs ont été trouvées sur cette page :"
  }
};

const gcdsErrorSummaryCss = ":host .gcds-error-summary{border:var(--gcds-error-summary-border-width) solid var(--gcds-error-summary-border-color);color:var(--gcds-error-summary-text);display:none;margin:var(--gcds-error-summary-margin);padding:var( --gcds-error-summary-padding);-webkit-transition:background .15s ease-in-out,border .15s ease-in-out,color .15s ease-in-out;transition:background .15s ease-in-out,border .15s ease-in-out,color .15s ease-in-out}:host .gcds-error-summary.gcds-show{display:block}:host .gcds-error-summary:focus,:host .gcds-error-summary:has(:focus-within){border-color:var(--gcds-error-summary-focus-color)}:host .gcds-error-summary:focus .summary__heading,:host .gcds-error-summary:has(:focus-within) .summary__heading{color:var(--gcds-error-summary-focus-color)}:host .gcds-error-summary .summary__heading{font:var(--gcds-error-summary-heading-font);margin:0;-webkit-padding-after:var(--gcds-error-summary-heading-padding-bottom);padding-block-end:var(--gcds-error-summary-heading-padding-bottom)}:host .gcds-error-summary .summary__errorlist{margin:var(--gcds-error-summary-list-margin);padding:0}:host .gcds-error-summary .summary__errorlist .summary__listitem{max-width:var(--gcds-error-summary-max-width)}:host .gcds-error-summary .summary__errorlist .summary__listitem:not(:last-child){padding:var(--gcds-error-summary-list-item-padding)}:host .gcds-error-summary .summary__errorlist .summary__listitem .summary__link{color:var(--gcds-error-summary-link-color);text-decoration-thickness:var(--gcds-error-summary-link-thickness)}:host .gcds-error-summary .summary__errorlist .summary__listitem .summary__link:hover{text-decoration-thickness:var(--gcds-error-summary-hover-link-thickness)}:host .gcds-error-summary .summary__errorlist .summary__listitem .summary__link:focus{background-color:var(--gcds-error-summary-focus-link-background-color);border-radius:var(--gcds-error-summary-focus-link-border-radius);-webkit-box-shadow:none;box-shadow:none;color:var(--gcds-error-summary-focus-link-text);outline:var(--gcds-error-summary-focus-link-outline);outline-offset:var(--gcds-error-summary-focus-link-outline-offset);text-decoration:none}@media screen and (max-width:30rem){:host .gcds-error-summary{padding:var(--gcds-error-summary-mobile-padding)}}";

const GcdsErrorSummary = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.errorLinksObject = {};
    this.heading = undefined;
    this.listen = true;
    this.errorLinks = undefined;
    this.lang = undefined;
    this.errorQueue = {};
    this.hasSubmitted = false;
  }
  listenChanged() {
    if (this.errorLinks) {
      this.listen = false;
    }
  }
  /**
   * Convert contextual links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  errorLinksChanged(newErrorLinks) {
    if (typeof newErrorLinks == "string") {
      this.errorLinks = JSON.parse(newErrorLinks);
    }
    else if (typeof newErrorLinks == "object") {
      this.errorLinks = newErrorLinks;
    }
    // Turn off listen if error-links is being used
    if (this.listen) {
      this.listen = false;
    }
  }
  errorListener(e) {
    if (this.listen && e.target.closest("form") == this.el.closest("form")) {
      this.errorLinksObject[e.detail.id] = e.detail.message;
    }
  }
  validListener(e) {
    if (this.listen && e.target.closest("form") == this.el.closest("form")) {
      if (this.errorLinksObject && this.errorLinksObject[e.detail.id]) {
        delete this.errorLinksObject[e.detail.id];
      }
      if (this.errorQueue) {
        const sortedErrorList = this.sortErrors();
        this.errorQueue = Object.assign({}, sortedErrorList);
      }
    }
  }
  submitListener(e) {
    if (this.listen && e.target.closest("form") == this.el.closest("form")) {
      this.hasSubmitted = true;
      // Time out to collect gcdsError events before rendering
      setTimeout(() => {
        const sortedErrorList = this.sortErrors();
        this.errorQueue = Object.assign({}, sortedErrorList);
        // Time out to let list render
        setTimeout(() => {
          this.shadowElement.focus();
        }, 50);
      }, 100);
    }
  }
  /*
  * Sort error object based on the order form compoennts appear in the form
  */
  sortErrors() {
    let sortable = [];
    for (let id in this.errorLinksObject) {
      sortable.push([id, this.errorLinksObject[id], document.querySelector(id).getBoundingClientRect().y]);
    }
    sortable.sort(function (a, b) {
      return a[2] - b[2];
    });
    let objSorted = {};
    sortable.forEach(function (item) {
      objSorted[item[0]] = item[1];
    });
    return objSorted;
  }
  /*
  * Focus element on error link click with label visible
  */
  focusElement(event, id) {
    event.preventDefault();
    let element = document.querySelector(id);
    let target = `[for=${id.replace('#', '')}]`;
    if (element.nodeName == "FIELDSET") {
      target = `#legend-${id.replace('#', '')}`;
    }
    element.closest('form').querySelector(target).scrollIntoView();
    element.focus();
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
    this.listenChanged();
    // Format error-links string / object
    if (this.errorLinks && typeof this.errorLinks == "string") {
      this.errorQueue = Object.assign({}, JSON.parse(this.errorLinks));
    }
    else if (this.errorLinks && typeof this.errorLinks == "object") {
      this.errorQueue = Object.assign({}, this.errorLinks);
    }
  }
  render() {
    const { heading, errorQueue, lang, hasSubmitted, errorLinks } = this;
    return (h(Host, null, h("div", { role: "alert", tabindex: "-1", ref: element => this.shadowElement = element, class: `gcds-error-summary ${(hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0 ? 'gcds-show' : ''}` }, h("h2", { class: "summary__heading" }, heading !== null && heading !== void 0 ? heading : I18N$e[lang].heading), h("ol", { class: "summary__errorlist" }, ((hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0) && Object.keys(errorQueue).map((key) => {
      return (h("li", { class: "summary__listitem" }, h("a", { onClick: (e) => this.focusElement(e, key), class: "summary__link", href: key }, errorQueue[key])));
    })))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "listen": ["listenChanged"],
    "errorLinks": ["errorLinksChanged"]
  }; }
};
GcdsErrorSummary.style = gcdsErrorSummaryCss;

const I18N$d = {
  "en": {
    required: "required",
  },
  "fr": {
    required: "obligatoire",
  }
};

const gcdsFieldsetCss = ".sc-gcds-fieldset-h{display:block}.sc-gcds-fieldset-h .gcds-fieldset.sc-gcds-fieldset{border:none;color:var(--gcds-fieldset-default-text);padding:0}.sc-gcds-fieldset-h .gcds-fieldset.sc-gcds-fieldset>legend.sc-gcds-fieldset{color:inherit;font:var(--gcds-fieldset-font);margin:var(--gcds-fieldset-legend-margin)}.sc-gcds-fieldset-h .gcds-fieldset.sc-gcds-fieldset:focus-within{color:var(--gcds-fieldset-focus-text)}.sc-gcds-fieldset-h .gcds-fieldset.sc-gcds-fieldset:disabled{color:var(--gcds-fieldset-disabled-text)}.sc-gcds-fieldset-h .legend__required.sc-gcds-fieldset{margin:var(--gcds-fieldset-legend-required-margin)}.sc-gcds-fieldset-h slot.sc-gcds-fieldset{display:block;margin:0}";

const GcdsFieldset = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsGroupError = createEvent(this, "gcdsGroupError", 7);
    this.gcdsGroupErrorClear = createEvent(this, "gcdsGroupErrorClear", 7);
    this.gcdsError = createEvent(this, "gcdsError", 7);
    this.gcdsValid = createEvent(this, "gcdsValid", 7);
    this._validator = defaultValidator;
    this.fieldsetId = undefined;
    this.legend = undefined;
    this.required = undefined;
    this.errorMessage = undefined;
    this.hint = undefined;
    this.disabled = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.hasError = undefined;
    this.lang = undefined;
    this.inheritedAttributes = {};
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    }
    else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
    else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  validateDisabledFieldset() {
    if (this.required) {
      this.disabled = false;
    }
    if (this.disabled == true) {
      for (var i = 0; i < this.el.children.length; i++) {
        this.el.children[i].setAttribute("disabled", "");
      }
    }
  }
  handleDisabledChange(newValue, _oldValue) {
    if (_oldValue && newValue != _oldValue) {
      for (var i = 0; i < this.el.children.length; i++) {
        this.el.children[i].removeAttribute("disabled");
      }
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.fieldsetId) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsGroupError.emit(this.errorMessage);
      this.gcdsError.emit({ id: `#${this.fieldsetId}`, message: `${this.legend} - ${this.errorMessage}` });
    }
    else {
      this.errorMessage = "";
      this.gcdsGroupErrorClear.emit();
      this.gcdsValid.emit({ id: `#${this.fieldsetId}` });
    }
  }
  blurValidate() {
    if (this.validator && this.validateOn == "blur" && !this.el.matches(':focus-within')) {
      this.validate();
    }
  }
  /**
   * Event listener for gcds-fieldset errors
   */
  gcdsParentGroupError(e) {
    if (e.srcElement == this.el && validateFieldsetElements(this.el, this.el.children).includes(false)) {
      this.hasError = true;
    }
  }
  gcdsParentGroupErrorClear(e) {
    if (e.srcElement == this.el && this.hasError) {
      this.hasError = false;
    }
  }
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    this.validateDisabledFieldset();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, "fieldset");
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { lang, fieldsetId, legend, required, errorMessage, hasError, hint, disabled, inheritedAttributes } = this;
    const fieldsetAttrs = Object.assign({ disabled }, inheritedAttributes);
    if (errorMessage) {
      fieldsetAttrs["aria-describedby"] = `error-message-${fieldsetId} ${fieldsetAttrs["aria-describedby"] ? ` ${fieldsetAttrs["aria-describedby"]}` : ""}`;
    }
    return (h(Host, null, h("fieldset", Object.assign({ class: `gcds-fieldset ${hasError ? "gcds-fieldset--error" : ''}`, id: fieldsetId }, fieldsetAttrs, { "aria-labelledby": hint ? `legend-${fieldsetId} hint-${fieldsetId}` : `legend-${fieldsetId}`, tabindex: "-1", ref: element => this.shadowElement = element }), h("legend", { id: `legend-${fieldsetId}` }, legend, required ?
      h("strong", { class: "legend__required" }, "(", I18N$d[lang].required, ")")
      : null), hint ? h("gcds-hint", { hint: hint, "hint-id": fieldsetId }) : null, errorMessage ? h("gcds-error-message", { messageId: fieldsetId, message: errorMessage }) : null, h("slot", null))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "errorMessage": ["validateErrorMessage"],
    "disabled": ["validateDisabledFieldset", "handleDisabledChange"],
    "validator": ["validateValidator"]
  }; }
};
GcdsFieldset.style = gcdsFieldsetCss;

const I18N$c = {
  "en": {
    button: {
      remove: "Remove",
      upload: "Choose file",
    },
    summary: {
      selected: "Currently selected:",
      unselected: "No file currently selected.",
    },
    removeFile: "Remove file",
  },
  "fr": {
    button: {
      remove: "Supprimer",
      upload: "Choisir un fichier",
    },
    summary: {
      selected: "Actuellement sélectionné:",
      unselected: "Aucun fichier actuellement sélectionné.",
    },
    removeFile: "Supprimer le fichier",
  }
};

const gcdsFileUploaderCss = ".sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.sc-gcds-file-uploader{-ms-flex-align:start;align-items:flex-start;border:0;color:var(--gcds-file-uploader-default-text);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font:var(--gcds-file-uploader-font);margin:0;max-width:90%;padding:0;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.sc-gcds-file-uploader:focus-within{color:var(--gcds-file-uploader-focus-text)}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader{color:var(--gcds-file-uploader-disabled-text)}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__input.sc-gcds-file-uploader input.sc-gcds-file-uploader,.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader,.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader gcds-icon.sc-gcds-file-uploader{cursor:not-allowed}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__input.sc-gcds-file-uploader button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-disabled-background);border-color:var(--gcds-file-uploader-disabled-text);color:inherit;outline:0}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader{color:inherit}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader{color:inherit}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:focus{background:transparent}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-error.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader:not(:focus){border-color:var(--gcds-file-uploader-file-danger-border-color)}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader:focus-within,.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-error.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader:focus-within{border-color:var(--gcds-file-uploader-file-focus-border-color)}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader{display:inline-block;position:relative}.sc-gcds-file-uploader-h .file-uploader__input.uploaded-files.sc-gcds-file-uploader{margin:var(--gcds-file-uploader-button-margin)}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-button-background);border:var(--gcds-file-uploader-button-border-width) solid var(--gcds-file-uploader-button-text);border-radius:var(--gcds-file-uploader-button-border-radius);color:var(--gcds-file-uploader-button-text);font-family:inherit;font-size:inherit;font-weight:var(--gcds-file-uploader-button-font-weight);line-height:inherit;padding:var(--gcds-file-uploader-button-padding);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader input.sc-gcds-file-uploader{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader #file-uploader__summary.sc-gcds-file-uploader{height:0;margin:0;overflow:hidden;visibility:hidden}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader:hover button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-hover-button-background)}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader:focus-within button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-focus-button-background);border-color:currentColor;color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-button-outline-width) solid var(--gcds-file-uploader-focus-button-background)}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader:active button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-active-button-background);color:var(--gcds-file-uploader-active-button-text)}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader{-ms-flex-align:center;align-items:center;border:var(--gcds-file-uploader-file-border-width) solid var(--gcds-file-uploader-file-border-color);color:var(--gcds-file-uploader-default-text);cursor:pointer;display:-ms-flexbox;display:flex;font:inherit;font-weight:var(--gcds-file-uploader-button-font-weight);-ms-flex-pack:justify;justify-content:space-between;max-width:var(--gcds-file-uploader-file-max-width);padding:var(--gcds-file-uploader-file-padding);width:100%}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader:not(:last-of-type){-webkit-border-after:0;border-block-end:0}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader span.sc-gcds-file-uploader{overflow:hidden;-webkit-padding-end:0;padding-inline-end:0;text-overflow:ellipsis;white-space:nowrap}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader{-ms-flex-align:center;align-items:center;background:transparent;border-radius:var(--gcds-file-uploader-file-button-border-radius);color:var(--gcds-file-uploader-file-button-default-text);display:-ms-flexbox;display:flex;font:inherit;margin:var(--gcds-file-uploader-file-button-margin);outline:0;padding:var(--gcds-file-uploader-file-button-padding);-webkit-transition:color .35s;transition:color .35s}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:not(:focus) span.sc-gcds-file-uploader{overflow:visible;text-decoration:underline;text-decoration-thickness:var(--gcds-file-uploader-file-button-default-decoration-thickness);text-underline-offset:var(--gcds-file-uploader-file-button-underline-offset);-webkit-transition:-webkit-box-shadow .35s;transition:-webkit-box-shadow .35s;transition:box-shadow .35s;transition:box-shadow .35s, -webkit-box-shadow .35s}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:hover{color:var(--gcds-file-uploader-file-button-hover-text)}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:hover span.sc-gcds-file-uploader{text-decoration-thickness:var(--gcds-file-uploader-file-button-hover-decoration-thickness)}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:focus{background-color:var(--gcds-file-uploader-focus-button-background);border-color:var(--gcds-file-uploader-focus-button-background);color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-focus-button-outline-width) solid var(--gcds-file-uploader-focus-button-background);outline-offset:var(--gcds-file-uploader-focus-button-outline-offset);-webkit-text-decoration-color:transparent;text-decoration-color:transparent}";

const GcdsFileUploader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsFileUploaderChange = createEvent(this, "gcdsFileUploaderChange", 7);
    this.gcdsRemoveFile = createEvent(this, "gcdsRemoveFile", 7);
    this.gcdsError = createEvent(this, "gcdsError", 7);
    this.gcdsValid = createEvent(this, "gcdsValid", 7);
    this._validator = defaultValidator;
    this.onFocus = (e) => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = (e) => {
      if (this.blurHandler) {
        this.blurHandler(e);
      }
      else {
        if (this.validateOn == "blur") {
          this.validate();
        }
      }
      this.gcdsBlur.emit();
    };
    this.handleChange = (e) => {
      if (this.changeHandler) {
        this.changeHandler(e);
      }
      else {
        let filesContainer = [];
        let files = e.target.files;
        for (let i = 0; i < files.length; i++) {
          filesContainer.push(files[i].name);
        }
        this.value = [...filesContainer];
        // Validate since the input loses focus when dialog opens
        if (this.validateOn == "blur") {
          this.validate();
        }
      }
      this.gcdsFileUploaderChange.emit(this.value);
    };
    this.removeFile = (e) => {
      e.preventDefault();
      let filesContainer = this.value;
      const file = filesContainer.indexOf(e.target.closest('.file-uploader__uploaded-file').childNodes[0].textContent);
      if (file > -1) {
        filesContainer.splice(file, 1);
      }
      this.value = [...filesContainer];
      this.gcdsRemoveFile.emit(this.value);
    };
    this.uploaderId = undefined;
    this.label = undefined;
    this.required = false;
    this.disabled = false;
    this.value = [];
    this.accept = undefined;
    this.multiple = undefined;
    this.errorMessage = undefined;
    this.hint = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.changeHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.hasError = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
  }
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    }
    else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
    else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.shadowElement.files) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({ id: `#${this.uploaderId}`, message: `${this.label} - ${this.errorMessage}` });
    }
    else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.uploaderId}` });
    }
  }
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, "file");
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { accept, disabled, errorMessage, hasError, hint, label, lang, multiple, required, uploaderId, value, inheritedAttributes } = this;
    const attrsInput = Object.assign(Object.assign({ accept,
      disabled,
      multiple,
      required,
      value }, inheritedAttributes), { "aria-describedby": `${inheritedAttributes["aria-describedby"] ? `${inheritedAttributes["aria-describedby"]} ` : ''}file-uploader__summary` });
    const attrsLabel = {
      label,
      required,
    };
    if (hint || errorMessage) {
      let hintID = hint ? `hint-${uploaderId} ` : "";
      let errorID = errorMessage ? `error-message-${uploaderId} ` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${attrsInput["aria-describedby"]}`;
    }
    return (h(Host, null, h("div", { class: `gcds-file-uploader-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "label-for": uploaderId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": uploaderId }) : null, errorMessage ?
      h("gcds-error-message", { messageId: uploaderId, message: errorMessage })
      : null, h("div", { class: `file-uploader__input ${value.length > 0 ? "uploaded-files" : ''}` }, h("button", { type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, I18N$c[lang].button.upload), h("input", Object.assign({ type: "file", id: uploaderId, name: uploaderId }, attrsInput, { onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onChange: (e) => this.handleChange(e), "aria-invalid": hasError ? 'true' : 'false', ref: element => this.shadowElement = element })), value.length > 0 ?
      h("p", { id: "file-uploader__summary" }, h("span", null, I18N$c[lang].summary.selected, " "), value.map(file => (h("span", null, file, " "))))
      :
        h("p", { id: "file-uploader__summary" }, I18N$c[lang].summary.unselected)), value.length > 0 ? value.map(file => (h("div", { class: "file-uploader__uploaded-file", "aria-label": `${I18N$c[lang].removeFile} ${file}.` }, h("span", null, file), h("button", { onClick: (e) => this.removeFile(e) }, h("span", null, I18N$c[lang].button.remove), h("gcds-icon", { name: "times", size: "text", "margin-left": "200" }))))) : null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["validateDisabledSelect"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }; }
};
GcdsFileUploader.style = gcdsFileUploaderCss;

const I18N$b = {
    "en": {
        gov: {
            heading: "Government of Canada",
            menu: {
                contacts: {
                    text: "All Contacts",
                    link: "https://www.canada.ca/en/contact.html"
                },
                dept: {
                    text: "Departments and agencies",
                    link: "https://www.canada.ca/en/government/dept.html"
                },
                about: {
                    text: "About government",
                    link: "https://www.canada.ca/en/government/system.html"
                }
            }
        },
        themes: {
            heading: "Themes and topics",
            menu: {
                jobs: {
                    text: "Jobs",
                    link: "https://www.canada.ca/en/services/jobs.html"
                },
                immigration: {
                    text: "Immigration and citizenship",
                    link: "https://www.canada.ca/en/services/immigration-citizenship.html"
                },
                travel: {
                    text: "Travel and tourism",
                    link: "https://travel.gc.ca/"
                },
                business: {
                    text: "Business",
                    link: "https://www.canada.ca/en/services/business.html"
                },
                benefits: {
                    text: "Benefits",
                    link: "https://www.canada.ca/en/services/benefits.html"
                },
                health: {
                    text: "Health",
                    link: "https://www.canada.ca/en/services/health.html"
                },
                taxes: {
                    text: "Taxes",
                    link: "https://www.canada.ca/en/services/taxes.html"
                },
                enviro: {
                    text: "Environment and natural resources",
                    link: "https://www.canada.ca/en/services/environment.html"
                },
                defence: {
                    text: "National security and defence",
                    link: "https://www.canada.ca/en/services/defence.html"
                },
                culture: {
                    text: "Culture, history and sport",
                    link: "https://www.canada.ca/en/services/culture.html"
                },
                policing: {
                    text: "Policing, justice and emergencies",
                    link: "https://www.canada.ca/en/services/policing.html"
                },
                transport: {
                    text: "Transport and infrastructure",
                    link: "https://www.canada.ca/en/services/transport.html"
                },
                world: {
                    text: "Canada and the world",
                    link: "https://international.gc.ca/world-monde/index.aspx?lang=eng"
                },
                finance: {
                    text: "Money and finance",
                    link: "https://www.canada.ca/en/services/finance.html"
                },
                science: {
                    text: "Science and innovation",
                    link: "https://www.canada.ca/en/services/science.html"
                },
                indigenous: {
                    text: "Indigenous peoples",
                    link: "https://www.canada.ca/en/services/indigenous-peoples.html"
                },
                veterans: {
                    text: "Veterans and military",
                    link: "https://www.canada.ca/en/services/veterans.html"
                },
                youth: {
                    text: "Youth",
                    link: "https://www.canada.ca/en/services/youth.html"
                },
            },
        },
        site: {
            heading: "Government of Canada Corporate",
            menu: {
                social: {
                    text: "Social media",
                    link: "https://www.canada.ca/en/social.html"
                },
                mobile: {
                    text: "Mobile applications",
                    link: "https://www.canada.ca/en/mobile.html"
                },
                about: {
                    text: "About Canada.ca",
                    link: "https://www.canada.ca/en/government/about.html"
                },
                terms: {
                    text: "Terms and conditions",
                    link: "https://www.canada.ca/en/transparency/terms.html"
                },
                privacy: {
                    text: "Privacy",
                    link: "https://www.canada.ca/en/transparency/privacy.html"
                }
            }
        },
        about: "About this site",
        topofpage: "Top of page",
    },
    "fr": {
        gov: {
            heading: "Gouvernement du Canada",
            menu: {
                contacts: {
                    text: "Toutes les coordonnées",
                    link: "https://www.canada.ca/fr/contact.html"
                },
                dept: {
                    text: "Ministères et organismes",
                    link: "https://www.canada.ca/fr/gouvernement/min.html"
                },
                about: {
                    text: "À propos du gouvernement",
                    link: "https://www.canada.ca/fr/gouvernement/systeme.html"
                }
            }
        },
        themes: {
            heading: "Thèmes et sujets",
            menu: {
                jobs: {
                    text: "Emplois",
                    link: "https://www.canada.ca/fr/services/emplois.html"
                },
                immigration: {
                    text: "Immigration et citoyenneté",
                    link: "https://www.canada.ca/fr/services/immigration-citoyennete.html"
                },
                travel: {
                    text: "Voyage et tourisme",
                    link: "https://voyage.gc.ca/"
                },
                business: {
                    text: "Entreprises",
                    link: "https://www.canada.ca/fr/services/entreprises.html"
                },
                benefits: {
                    text: "Prestations",
                    link: "https://www.canada.ca/fr/services/prestations.html"
                },
                health: {
                    text: "Santé",
                    link: "https://www.canada.ca/fr/services/sante.html"
                },
                taxes: {
                    text: "Impôts",
                    link: "https://www.canada.ca/fr/services/impots.html"
                },
                enviro: {
                    text: "Environnement et ressources naturelles",
                    link: "https://www.canada.ca/fr/services/environnement.html"
                },
                defence: {
                    text: "Sécurité nationale et défense",
                    link: "https://www.canada.ca/fr/services/defense.html"
                },
                culture: {
                    text: "Culture, histoire et sport",
                    link: "https://www.canada.ca/fr/services/culture.html"
                },
                policing: {
                    text: "Services de police, justice et urgences",
                    link: "https://www.canada.ca/fr/services/police.html"
                },
                transport: {
                    text: "Transport et infrastructure",
                    link: "https://www.canada.ca/fr/services/transport.html"
                },
                world: {
                    text: " Le Canada et le monde",
                    link: "https://www.international.gc.ca/world-monde/index.aspx?lang=fra"
                },
                finance: {
                    text: "Argent et finance",
                    link: "https://www.canada.ca/fr/services/finance.html"
                },
                science: {
                    text: "Science et innovation",
                    link: "https://www.canada.ca/fr/services/science.html"
                },
                indigenous: {
                    text: "Autochtones",
                    link: "https://www.canada.ca/fr/services/autochtones.html"
                },
                veterans: {
                    text: "Vétérans et militaires",
                    link: "https://www.canada.ca/fr/services/veterans.html"
                },
                youth: {
                    text: "Jeunesse",
                    link: "https://www.canada.ca/fr/services/jeunesse.html"
                },
            },
        },
        site: {
            heading: "Organisation du gouvernement du Canada",
            menu: {
                social: {
                    text: "Médias sociaux",
                    link: "https://www.canada.ca/fr/sociaux.html"
                },
                mobile: {
                    text: "Applications mobiles",
                    link: "https://www.canada.ca/fr/mobile.html"
                },
                about: {
                    text: "À propos de Canada.ca",
                    link: "https://www.canada.ca/fr/gouvernement/a-propos.html"
                },
                terms: {
                    text: "Avis",
                    link: "https://www.canada.ca/fr/transparence/avis.html"
                },
                privacy: {
                    text: "Confidentialité",
                    link: "https://www.canada.ca/fr/transparence/confidentialite.html"
                }
            }
        },
        about: "À propos de ce site",
        topofpage: "Haut de la page",
    }
};

const gcdsFooterCss = ":host{display:block;font:var(--gcds-footer-font)}:host .gcds-footer__header,:host .sub__header,:host .themenav__header{clip:rect(1px,1px,1px,1px);height:1px;margin:0;overflow:hidden;position:absolute;width:1px}:host [class$=__container]{-ms-flex-pack:justify;justify-content:space-between;margin:var(--gcds-footer-container-margin);max-width:var(--gcds-footer-container-width);width:90%}:host nav{position:relative}:host nav li{margin:var(--gcds-footer-listitem-margin)}:host [class$=__list]{grid-gap:var(--gcds-footer-list-grid-gap);display:grid;grid-template-columns:1fr;list-style:none;padding:var(--gcds-footer-list-padding)}:host [class$=__list] li a{color:var(--gcds-footer-main-text);text-underline-position:under}:host [class$=__list] li a:not(:hover){text-decoration:none}:host [class$=__list] li a:focus{background-color:var(--gcds-footer-link-focus-background);border-radius:var(--gcds-footer-link-focus-radius);-webkit-box-shadow:var(--gcds-footer-link-focus-box-shadow);box-shadow:var(--gcds-footer-link-focus-box-shadow);color:var(--gcds-footer-link-focus-text);outline:var(--gcds-footer-link-focus-outline);outline-offset:var(--gcds-footer-link-focus-outline-offset);text-decoration:none}@media screen and (min-width:48em){:host [class$=__list]{grid-template-columns:1fr 1fr}}@media screen and (min-width:64em){:host [class$=__list]{grid-template-columns:1fr 1fr 1fr}}:host .gcds-footer__contextual{background-color:var(--gcds-footer-contextual-background);color:var(--gcds-footer-contextual-text);padding:var(--gcds-footer-contextual-padding)}:host .gcds-footer__main{background-color:var(--gcds-footer-main-background);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAAC9CAMAAAAwXXHOAAAAe1BMVEUAAAAYJjgbKDogIDkcOTkgMDgoKEMdJzgdKDcAAAAgKTkfLj4gKDgfKjgeJjgeKjgcKDgfJzhAQEAfKzceKDgdKDcdKjcAVVUhN0MeKDceKzcAAFUdKjgcKzkeLTwaMzMdKjcfKTYZJjIcKzkaKDgcKDgYKjgbKTgYKDjo9/gwAAAAKXRSTlMASTkoCSATe/8BUCHNSWXct1sEU+D9nQMXeIoD8zYiCsN1PST/bZK221OBjhQAAA8qSURBVHgB7NVVAUNRDAWwPr5jZp5/jwMR/Us0HAgAAAAAAAAAAAAAAAAAAAAgS1U3TRt/XdNHEqiGUurReBIxLUOQSNBm88VytRa0ZIK22Zbd/iBo2Vzn8XS+hKCRqDpdr7e4PyKe11ckger9Zdc+bGULYSAMj2uZMab/Bl/mJoWXLiuvNV8HiH/PYgSGMIdmFvhjZg7NHJoZEcRtZmQEbjOj5NDMoZlDM3No1kxIidvMUlowuy2lgtltS9qE2WUlTwN2H7fGTQMkrBtqYGhBWDMhjRs7KcKaSWnc2BkOrZ8lSRujpALWMjQOW1PCmil9F8PWtNCQbzekHLamgvUSmhda9DsLWOqHmramgHUMbU+bbxLWypLGjZ3V7wraSj/FsPmm0JCHTimHzTc7YI2E5oWWjRfk0Na00AKNWOqXcmgX2ZLuj50OzUoHh/14Em1Y5NaRgSGq26HTUm/UrBubTZhDe8CiAheZQ1uPuBk0hxaPGKPNobHZciz4PjSmv2gXWOmDTQ8DduMa4KOYFFqiBQsdVXvQ3lTPZwJ+xL1IxJzbdO53w42RPUJbQACsKXsTzU6cDm3pbEec/dl4fvn+xGmMZIPQCj9D45TQlo6EgVnKDjuyfjQ/KLTSsWAAI7PLXyeCI/46480scE6cRAs+o+ln7lwDQstz1nwzDSR6cGh7EYilIV+01KtoFJpDk3bVloZ80ZZeJcBEEw7teP7QikDp1QJi+bl+Ep/NoXHrVQFZvt8Ih/a5vrJ3J8iJK0EQQCvPkplVdf8T/rBFB61vYYStMWCTMYA2b82j1Qti2A5rSuMFLcKMOwZVvQGtKhnPGmpAG0HkayIK94Vm5AY0w4xnDVSRmpNRr4moRNw3/m2nTqtZmlPsF7QXtKNjbcWvXide0A5NvqBthDIfAFq5ytnv988OrbSV+vPQKh4AGoLjH+u5obG1lWbcP68ajXFOqn9dE+31/kf/ROvhBe3VSKsXtB9oor0aaUjJeEE7LmhtpxF/ON5TqTv8gnZ7hdZlzcn4u2G9oP2TPmdXGkEtsV1/u9+JXZ/mWd0vaHuTGn8Ps7WEoy38Z2MT16u0Ur2g3dbpBJylke7uPz2+wUKA14bS2Gq+oO0MtJ0/DQ1CICj5WtE5vpoXtHb/dWi5QCMyLoeWlIwb8oJWTI048o9DY5FEIGB+7kwy/ym0mtK/ABrCtE7mgv23oUEIMBCQr54K/Hqb0A3QGAyfCy7/MDRGpDygZQTvCq0M1/vdnaBhvfJtaDGgYSz+VWhkyeEIBGHyvtAQEXBEsO4DzeuVY6CNRfxlaJKIBVqAKdwVGge0uBO05LzygnZYqKJjQAsLsRVCOro3AD4gtMJ5mfUNsBehOf5koIwFmhnmJWjQiOOo2I8Hje0YCTe/DvYitPqr0IpFNqIcKf1xaFDOvxIOaAnkq0abBRmdURfLAVLa6d8OzXOFk/KrjfYPhq8a/Rk0RAR/O7RUcyyzlS9ox0Jrd7sq+97QAMAJAPeBVhMESv2CdiC0ZmZUhSvqX0LjuF/CLnyA5rekfaeZAc6vNEjNx4BGgPF0sWOEASnDiHIgwxL+GTSP+yUp1aVTJxZoxTu0WHP+jXBEZ+AAaBLj6QLEEhphyZGMdLACljfn1iFVZta3oPEtu6ClluAODYmah8L8GNAs5RPXaBTYSkZFlCOKkSpCvNDrtOsb0Fpvae6AVlriO0BLTtBya84udgRHQmNLxXi2ZK4Ko4K5QLNHk3z71ImI/DY07YDGPvqKIe+/Sgdz8xUbFnFcG42xI6xeGhLxXGHVqjAc9glajuuh7gvtH1xtm/t7nZwaRrVFsWIz4M3QiJuGOhlPFai5LoxEvN/YDO+p0bhoI/GFSx25vJBRUuEKtGZ8P+Q7NB8AjWGpHdysNG+GBt801Il4qiw9y3PrgWySCZICKUn5CbQ0gx0Rkb2cWjjcxhL6tM7zIyLQo7jYCL6v1SVoR5YtHChGHQDNWZIqt4AUbm6juX4ztJSWko+l0LIqz3fVkvoTaNKAVpISgI33JN5CuPiezOWxEJERqSUZkIPaBc3x/djVatfuNtrlcTRfbjuyfTO0auzDv8RPd1V6BevcrbLfln2qypFS7YHm1s50MokeazxD6/bn0PK4WbY6YHjDl9uOVt06qc7eY4edlqRMM54oXJ7rikCDzYjigLbwIwufQatgB7P19VTmkPQ5tIrvp3Z/ugprOo4tqbgJrRng5VnSwUsgUHpPvmUNzbv+PmRw+TriCWfRmyyHvehaoC3mkOHiJ9Aa7Codk21oR/YGsH+sBJokbI30pE5BJDcnr0a84wLi2qMfVcSpyZHJZ/wM3yKLEfYZ2gKPkb4IbeRnoMk2D/qDi/ug5apOiiksnWK2Pw71fnYBcb1FkjDblHe/TipsxBNCay+eEmdoyIhwBhv3hzaCoz5L1vtq+5oLynFJjz8Ua/MytI3OgPe1DWZoT/kGtAo2Y7kb0FjvdwwXfwZafXz3Rh4KzRpR3QStPpxv2RegjV3YD21Ibvx6aFhwOeMMLZLLJpZ/CFqeUroUHPURn43boXnjzLmk/OEE50+hcQVtsM1fD62rGRGJGZodSyWHRkzJ46Ft5Xhobp2T+9tom52B1Bx/8MxPoeWAtjqi+cuhjZIqztCQY9o9ay62flZoqSnNPdD8BWi+XqO5sYKWV/88cgWNzwUNGilOb+UoTxMpaIPKGGHpSaGxt2wcX6NRb8m9n4+GStZ2NevyWMx2eK6S8zmheSF1AjbA1fu9iu7yVAsOaOXM0V7PsdynhXTXer9G1JnLv/pBaNYqxX3Q3N09+uZ7oGHUmPvG0WY97VVSg1OWHP20n+jtdYU2iqtrnn7D22qNP5k9QcsAhlaM5Qpw6TDUej9XzwsjOCZi0EvRWWN1PC5uM13O+jo0AhG1H+0MDXMt4vRWZ0Bd57QkMLu6q97u+lNo0TtGfEoyW3Pq2Wq0ZLVXb+PrHA651NoMdGFZ0QwN9kmHPJbrtGBUrfdvVABYlNcYY1mqgtTyWEt5EhGIwJehoVS31WhTrxMzp1ZXdXW3Pg0itSMgydbllAe0D2k+WY3GcMdiiOOSpIhJHoSIHKfXGdrN2YZ2+lYZUWN1PC7Q/C1orJJMUqs49kCDSzdnQDsgnbwATc8HLTNIogTAdqr9FljJt8gRHLPCzwctv9TcS30nRumTJOq20cXe2sHngobwtTNBV5VGjoCWPiUljT5BZfZYPf/QApyAAR8KrXk0tP0pBkvfzvNBU6XtUgIArSLeYtl2tmoN8bmGN3gBWtwPmiPC+ka6+qmgYfmrfRquFdafokNhtN2I1BTDQOlH0tXVN0IDpmXdAVqxr1RF0MWYLTWtOY1pPQP9dNBwGVpjQIvwsXhqvCyvJgNRRdB7odFlg2P5SGiVWVlVWedfvqpWt7dk9Mbez6E1OXaXlAHNqeDsOOoZT50DGtfQYgx7XIZWrrHY6ezTQvWy0/OG+ZAgu4KLdBCWigBLTYA5VsdHWFfc0BkYw3Ek0tIx0Exa8scZejPI6ZaSTqOrydUeXoEWu6FpBzQ8HrS8Bg2XqvriAKj2fN2cW0pGcN7QY0F9GhbGVOy5PL01X/af16DBhZjDjUbZMdAi1tDyvGOEY/uAFqv8KLTsR4NGtBwR7P4/tMrlqOIlaOftOb6jV9eqcWzI88IZGr8HjU6J6w2gtSfNGCHSV6FVVUk9ZexYZ1TmvbHrMrQVpXRJ5dScct4Cza0HnIJaoKljA9rAw3ECAQ6DNmagAEsFAKUGgByry49kFkmvoY2qC4kATSCQ2h/O3wY/2uvcbopUWntT1VegSfEwQc8TtD5DqwGtlsPW/6cM90DLz6GNfGt4g1qSJ7BZX/lWbkkwgjSJa52BVme936RyjW2n28hYHijKdRXakeNozAeC5p6bVyz5/1clun2SlhHuAe37NZoyO6uzDoFmWrcn17PjRUqS19DM1hKAHj0nywEta2pGje0aWfaryK5lf34JWldfh0YsRW1yHk94OGfKpbybA9pYOk+3N5ai91sOqNEYDjqgkXOvEzBLSp78NNBmJlMSGOdY30luVouFNbSoM3FIDAjB99uypgq6GRaDGsGynBGZERY9gyFWv3yyB+qmNdK0KnLynqwBeRpHQypP7VVj6ZO47wmNxLSSvWoWW8qPl7+WihHBvjBrUnbeCs1LG80Ra2g5/c/GOdWdFVEIYzl4ftXWhp6sL0KrU4HcBo1SZakjLHwCbbMLO4LI5aFWfcsMqsf7wmscOJ6yAS2yJJDQW8oEy6U7QqNV2JqX8ekE4o8X9KeEsxJrM9+Axv9/g7wGTUozgsSWMyGsnSkjIgitU7wIjVvQ3nIztMK8jZHjIcPb0HL113VwQMvWhcR9gpREbjR1x1Pqc42GiJUOS833e9tuzfnJGm1Qy9R2TGp3ENxwSeKWU+eoYSwE9kLTRWiTm+Jn0LQUMEsPBW38QpUkQdRoBEg9RnUcLOP0LC8Z9Rwk5Tu0ZeuqF7Yk8ZaUjLfUacHnDedD1EACxg3QDOvgmOnSxyQHNJ0PSNuSnUpb6dSyNvbWqmeZ9qlpUTWOmtPchLZx3DVoejRoWjLXzfW+XEMSAlKaE7ScoBVT6mF2eiUflK6q6vGgestpe1f1MW8E25cB7YeyDW1kExoHND8uNGjEYalBBi3J5ocxJsmrrkOTqM1e54PEAX07noc3Nh2XS4cFN0IbIeF6NGj+2C0zF0j8WGr48KldpTnfhVakpSRTByeD+nZyo42mJtQMH+d5xK7boY08ADQmyLkrsD1NzPpkXPRwaOsuXEAHx5n/ClpANQoSpI4OXNeg8RGhwWPYiUB//taLi9BqQOsngXZI0t6G1oTukanqfzho41ezndrOdWgsJf8eNKm8eep8qsQPhLFtaO/oJhkRXCrFdETwAjTAvwza/k7sCxozsaeAMlIX0mmjRs8rgjo0/x6aXol/HLoOuYLiHAd9NDRSAuH/2rtXI4tiIAaidizSfPKPcGvBpQ9ZrA+ZBLqGykg5YeXXpsdv7a4Rlv9nSSC0K527jgKhadw1TgCh6buSY0BodWtuSe0cENr9xlvbOSA0+V/XHceA0DROA6HptNNAaJoqh4HQ1E4CoamqZ9c5IDTVrMNAaBrHgdDuOg+E1s4DoWmcBkJTrdNAaGrngdDaT4DQ9jc/AULzM8Af2qL98u71t1EAAAAASUVORK5CYII=);background-position:100% 100%;background-repeat:no-repeat;color:var(--gcds-footer-main-text)}:host .gcds-footer__main nav:first-of-type:after{border-bottom:var(--gcds-footer-main-nav-first-after-border-width) solid var(--gcds-footer-main-nav-first-after-border-color);content:\"\";display:block;width:var(--gcds-footer-main-nav-first-after-width)}:host .gcds-footer__main nav.main__govnav{padding:var(--gcds-footer-main-govnav-padding)}:host .gcds-footer__main nav.main__themenav{padding:var(--gcds-footer-main-themenav-padding)}:host .gcds-footer__main nav.main__themenav .themenav__list{display:grid;grid-auto-flow:column;grid-template-rows:repeat(18,1fr)}@media screen and (min-width:48em){:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(9,1fr)}}@media screen and (min-width:64em){:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(6,1fr)}}:host .gcds-footer__sub{background-color:var(--gcds-footer-sub-background)}:host .gcds-footer__sub .sub__container{grid-gap:var(--gcds-footer-sub-grid-gap);display:grid;grid-template-areas:\"list wordmark\";grid-template-columns:3fr 1fr}:host .gcds-footer__sub .sub__container nav{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;grid-area:list;padding:var(--gcds-footer-sub-nav-padding)}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:-ms-flexbox;display:flex;grid-area:wordmark}:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{-ms-flex-item-align:end;align-self:end;width:var(--gcds-footer-sub-signature-md-width)}@media screen and (min-width:30em){:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{margin:var(--gcds-footer-sub-signature-margin);min-width:var(--gcds-footer-sub-signature-lg-min-width);width:var(--gcds-footer-sub-signature-lg-width)}}@media screen and (max-width:20em){:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{width:var(--gcds-footer-sub-signature-sm-width)}}@media screen and (min-width:64em){:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:inline-block}:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{margin:var(--gcds-footer-sub-signature-lg-margin)}}:host .gcds-footer__sub .sub__container a{color:var(--gcds-footer-sub-text);text-decoration:none}:host .gcds-footer__sub .sub__container a:hover{color:var(--gcds-footer-sub-hover-text);text-decoration:underline;text-decoration-thickness:var(--gcds-footer-sub-hover-decoration-thickness);text-underline-offset:.2em}:host .gcds-footer__sub .sub__container a:focus{background-color:var(--gcds-footer-link-focus-background);border-radius:var(--gcds-footer-link-focus-radius);-webkit-box-shadow:var(--gcds-footer-link-focus-box-shadow);box-shadow:var(--gcds-footer-link-focus-box-shadow);color:var(--gcds-footer-link-focus-text);outline:var(--gcds-footer-link-focus-outline);outline-offset:var(--gcds-footer-link-focus-outline-offset);text-decoration:none}:host .gcds-footer__sub ul{list-style-type:none;margin:0;padding:0}:host .gcds-footer__sub ul li{display:block}@media screen and (min-width:64em){:host .gcds-footer__sub ul li{display:inline-block;margin-bottom:0}}@media screen and (min-width:64em){:host .gcds-footer__sub ul li:first-of-type:before{content:\"\";margin:0}:host .gcds-footer__sub ul li:before{content:\"\\2022\";display:inline;margin:var(--gcds-footer-sub-listitem-before-margin)}}:host .gcds-footer__sub ul li a{text-decoration:none;-webkit-transition:color .15s;transition:color .15s}";

const GcdsFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.display = undefined;
    this.wordmarkVariant = undefined;
    this.contextualHeading = undefined;
    this.contextualLinks = undefined;
    this.subLinks = undefined;
    this.lang = undefined;
  }
  validateDisplay(newValue) {
    if (newValue != 'compact' && newValue != 'full') {
      this.display = 'compact';
    }
  }
  /**
   * Convert contextual links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  contextualLinksChanged(newContextualLinks) {
    if (typeof newContextualLinks == "string") {
      this.contextualLinksObject = JSON.parse(newContextualLinks);
    }
    else if (typeof newContextualLinks == "object") {
      this.contextualLinksObject = newContextualLinks;
    }
  }
  /**
   * Convert sub links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  subLinksChanged(newSubLinks) {
    if (typeof newSubLinks == "string") {
      this.subLinksObject = JSON.parse(newSubLinks);
    }
    else if (typeof newSubLinks == "object") {
      this.subLinksObject = newSubLinks;
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    if (this.contextualLinks && typeof this.contextualLinks == "string") {
      this.contextualLinksObject = JSON.parse(this.contextualLinks);
    }
    else if (this.contextualLinks && typeof this.contextualLinks == "object") {
      this.contextualLinksObject = this.contextualLinks;
    }
    if (this.subLinks && typeof this.subLinks == "string") {
      this.subLinksObject = JSON.parse(this.subLinks);
    }
    else if (this.subLinks && typeof this.subLinks == "object") {
      this.subLinksObject = this.subLinks;
    }
  }
  get renderSignature() {
    let signVariant = this.wordmarkVariant ? this.wordmarkVariant : "colour";
    if (!!this.el.querySelector('[slot="signature"]')) {
      return h("slot", { name: "wordmark" });
    }
    else {
      return (h("div", { class: "sub__wordmark" }, h("gcds-signature", { type: "wordmark", variant: signVariant, lang: this.lang })));
    }
  }
  render() {
    const { lang, display, contextualHeading, contextualLinksObject, subLinks, subLinksObject, renderSignature } = this;
    const govNav = I18N$b[lang].gov.menu;
    const themeNav = I18N$b[lang].themes.menu;
    const siteNav = I18N$b[lang].site.menu;
    let contextualLinkCount = 0;
    let subLinkCount = 0;
    return (h(Host, { role: "contentinfo" }, h("h2", { class: "gcds-footer__header" }, I18N$b[lang].about), (contextualLinksObject && contextualHeading) &&
      h("div", { class: "gcds-footer__contextual" }, h("div", { class: "contextual__container" }, h("nav", { "aria-label": contextualHeading }, h("h3", { class: "contextual__header" }, contextualHeading), h("ul", { class: "contextual__list" }, Object.keys(contextualLinksObject).map((key) => {
        if (contextualLinkCount < 3) {
          contextualLinkCount++;
          return (h("li", null, h("a", { href: contextualLinksObject[key] }, key)));
        }
      }))))), display === "full" ?
      (h("div", { class: "gcds-footer__main" }, h("div", { class: "main__container" }, h("nav", { class: "main__govnav", "aria-label": I18N$b[lang].gov.heading }, h("h3", null, I18N$b[lang].gov.heading), h("ul", { class: "govnav__list" }, Object.keys(govNav).map((value) => h("li", null, h("a", { href: govNav[value].link }, govNav[value].text))))), h("nav", { class: "main__themenav", "aria-label": I18N$b[lang].themes.heading }, h("h4", { class: "themenav__header" }, I18N$b[lang].themes.heading), h("ul", { class: "themenav__list" }, Object.keys(themeNav).map((value) => h("li", null, h("a", { href: themeNav[value].link }, themeNav[value].text))))))))
      : null, h("div", { class: "gcds-footer__sub" }, h("div", { class: "sub__container" }, h("nav", { "aria-label": I18N$b[lang].site.heading }, h("h3", { class: "sub__header" }, I18N$b[lang].site.heading), h("ul", null, subLinks ?
      Object.keys(subLinksObject).map((key) => {
        if (subLinkCount < 5) {
          subLinkCount++;
          return (h("li", null, h("a", { href: subLinksObject[key] }, key)));
        }
      })
      :
        Object.keys(siteNav).map((value) => {
          return (h("li", null, h("a", { href: siteNav[value].link }, siteNav[value].text)));
        }))), renderSignature))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "display": ["validateDisplay"],
    "contextualLinks": ["contextualLinksChanged"],
    "subLinks": ["subLinksChanged"]
  }; }
};
GcdsFooter.style = gcdsFooterCss;

const gcdsGridCss = ":host .gcds-grid{grid-template-columns:var(--gcds-grid-columns,1fr);margin:0;padding:0}:host .gcds-grid.display-grid{display:grid}:host .gcds-grid.display-inline-grid{display:inline-grid}:host .gcds-grid.gap-0{gap:var(--gcds-grid-gap-0)}:host .gcds-grid.gap-50{gap:var(--gcds-grid-gap-50)}:host .gcds-grid.gap-100{gap:var(--gcds-grid-gap-100)}:host .gcds-grid.gap-150{gap:var(--gcds-grid-gap-150)}:host .gcds-grid.gap-200{gap:var(--gcds-grid-gap-200)}:host .gcds-grid.gap-250{gap:var(--gcds-grid-gap-250)}:host .gcds-grid.gap-300{gap:var(--gcds-grid-gap-300)}:host .gcds-grid.gap-400{gap:var(--gcds-grid-gap-400)}:host .gcds-grid.gap-450{gap:var(--gcds-grid-gap-450)}:host .gcds-grid.gap-500{gap:var(--gcds-grid-gap-500)}:host .gcds-grid.gap-550{gap:var(--gcds-grid-gap-550)}:host .gcds-grid.gap-600{gap:var(--gcds-grid-gap-600)}:host .gcds-grid.gap-700{gap:var(--gcds-grid-gap-700)}:host .gcds-grid.gap-800{gap:var(--gcds-grid-gap-800)}:host .gcds-grid.gap-900{gap:var(--gcds-grid-gap-900)}:host .gcds-grid.gap-1000{gap:var(--gcds-grid-gap-1000)}:host .gcds-grid.align-content-center{-ms-flex-line-pack:center;align-content:center}:host .gcds-grid.align-content-end{-ms-flex-line-pack:end;align-content:end}:host .gcds-grid.align-content-space-around{-ms-flex-line-pack:distribute;align-content:space-around}:host .gcds-grid.align-content-space-between{-ms-flex-line-pack:justify;align-content:space-between}:host .gcds-grid.align-content-space-evenly{-ms-flex-line-pack:space-evenly;align-content:space-evenly}:host .gcds-grid.align-content-start{-ms-flex-line-pack:start;align-content:start}:host .gcds-grid.align-content-stretch{-ms-flex-line-pack:stretch;align-content:stretch}:host .gcds-grid.justify-content-center{-ms-flex-pack:center;justify-content:center}:host .gcds-grid.justify-content-end{-ms-flex-pack:end;justify-content:end}:host .gcds-grid.justify-content-space-around{-ms-flex-pack:distribute;justify-content:space-around}:host .gcds-grid.justify-content-space-between{-ms-flex-pack:justify;justify-content:space-between}:host .gcds-grid.justify-content-space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}:host .gcds-grid.justify-content-start{-ms-flex-pack:start;justify-content:start}:host .gcds-grid.justify-content-stretch{-ms-flex-pack:stretch;justify-content:stretch}:host .gcds-grid.place-content-center{place-content:center}:host .gcds-grid.place-content-end{place-content:end}:host .gcds-grid.place-content-space-around{place-content:space-around}:host .gcds-grid.place-content-space-between{place-content:space-between}:host .gcds-grid.place-content-space-evenly{place-content:space-evenly}:host .gcds-grid.place-content-start{place-content:start}:host .gcds-grid.place-content-stretch{place-content:stretch}:host .gcds-grid.align-items-baseline{-ms-flex-align:baseline;align-items:baseline}:host .gcds-grid.align-items-center{-ms-flex-align:center;align-items:center}:host .gcds-grid.align-items-end{-ms-flex-align:end;align-items:end}:host .gcds-grid.align-items-start{-ms-flex-align:start;align-items:start}:host .gcds-grid.align-items-stretch{-ms-flex-align:stretch;align-items:stretch}:host .gcds-grid.justify-items-center{justify-items:center}:host .gcds-grid.justify-items-end{justify-items:end}:host .gcds-grid.justify-items-start{justify-items:start}:host .gcds-grid.justify-items-stretch{justify-items:stretch}:host .gcds-grid.place-items-center{place-items:center}:host .gcds-grid.place-items-end{place-items:end}:host .gcds-grid.place-items-start{place-items:start}:host .gcds-grid.place-items-stretch{place-items:stretch}@media screen and (min-width:48em){:host .gcds-grid{grid-template-columns:var(--gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr))}}@media screen and (min-width:64em){:host .gcds-grid{grid-template-columns:var(--gcds-grid-columns-desktop,var(--gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr)))}}";

const GcdsGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.columns = undefined;
    this.columnsTablet = undefined;
    this.columnsDesktop = undefined;
    this.container = undefined;
    this.centered = false;
    this.display = 'grid';
    this.gap = undefined;
    this.tag = 'div';
    this.alignContent = undefined;
    this.justifyContent = undefined;
    this.placeContent = undefined;
    this.alignItems = undefined;
    this.justifyItems = undefined;
    this.placeItems = undefined;
  }
  render() {
    const { alignContent, alignItems, columns, columnsDesktop, columnsTablet, container, centered, display, gap, justifyContent, justifyItems, placeContent, placeItems, tag } = this;
    const Tag = tag;
    const classNames = `
      gcds-grid
      ${alignContent ? `align-content-${alignContent}` : ''}
      ${alignItems ? `align-items-${alignItems}` : ''}
      ${gap ? `gap-${gap}` : ''}
      ${display ? `display-${display}` : ''}
      ${justifyContent ? `justify-content-${justifyContent}` : ''}
      ${justifyItems ? `justify-items-${justifyItems}` : ''}
      ${placeContent ? `place-content-${placeContent}` : ''}
      ${placeItems ? `place-items-${placeItems}` : ''}
    `;
    // Set CSS variables in style attribute based on passed column properties
    function handleColumns() {
      let responsiveColumns = {};
      if (columnsDesktop) {
        responsiveColumns["--gcds-grid-columns-desktop"] = columnsDesktop;
      }
      if (columnsTablet) {
        responsiveColumns["--gcds-grid-columns-tablet"] = columnsTablet;
      }
      if (columns) {
        responsiveColumns["--gcds-grid-columns"] = columns;
      }
      return responsiveColumns;
    }
    return (h(Host, null, container ?
      h("gcds-container", { size: container, centered: centered }, h(Tag, { class: classNames, style: handleColumns() }, h("slot", null)))
      :
        h(Tag, { class: classNames, style: handleColumns() }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
GcdsGrid.style = gcdsGridCss;

const gcdsHeaderCss = ":host{display:block;margin:var(--gcds-header-margin)!important}:host .gcds-header__container{-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__brand{-webkit-border-after:var(--gcds-header-brand-border-width) solid var(--gcds-header-brand-border-color);border-block-end:var(--gcds-header-brand-border-width) solid var(--gcds-header-brand-border-color);margin:var(--gcds-header-brand-margin);padding:var(--gcds-header-brand-padding)}:host .gcds-header__brand .brand__container{grid-gap:var(--gcds-header-brand-grid-gap);display:grid;grid-template-areas:\"signature toggle\" \"search search\";grid-template-columns:1fr .1fr;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__brand .brand__container.container--simple{grid-template-areas:\"signature toggle\"}:host .gcds-header__brand .brand__container .brand__toggle,:host .gcds-header__brand .brand__container slot[name=toggle]{grid-area:toggle;text-align:right}:host .gcds-header__brand .brand__container .brand__signature,:host .gcds-header__brand .brand__container slot[name=signature]{grid-area:signature}:host .gcds-header__brand .brand__container .brand__signature gcds-signature,:host .gcds-header__brand .brand__container slot[name=signature] gcds-signature{margin:var( --gcds-header-brand-signature-margin)}:host .gcds-header__brand .brand__container .brand__search{display:block;grid-area:search;max-width:100%}@media screen and (min-width:64em){:host .gcds-header__brand .brand__container{grid-template-areas:\"toggle toggle\" \"signature search\";grid-template-columns:1fr 1fr}:host .gcds-header__brand .brand__container .brand__search,:host .gcds-header__brand .brand__container slot[name=search]{-webkit-margin-start:auto;margin-inline-start:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}:host .gcds-header__skip-to-nav{margin-inline:auto;position:absolute;text-align:center;top:var(--gcds-header-skiptonav-top);width:100%}";

const i18n = {
  "en": {
    "skip": "Skip to main content"
  },
  "fr": {
    "skip": "Passer au contenu principal"
  }
};
const GcdsHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.langHref = undefined;
    this.signatureVariant = undefined;
    this.signatureHasLink = true;
    this.skipToHref = undefined;
    this.lang = undefined;
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
  }
  get renderSkipToNav() {
    if (!!this.el.querySelector('[slot="skip-to-nav"]')) {
      return h("slot", { name: "skip-to-nav" });
    }
    else if (this.skipToHref) {
      return (h("nav", { "aria-label": i18n[this.lang].skip, class: "gcds-header__skip-to-nav" }, h("gcds-button", { type: "link", "button-role": "skip-to-content", href: this.skipToHref }, i18n[this.lang].skip)));
    }
    else {
      return;
    }
  }
  get renderToggle() {
    if (!!this.el.querySelector('[slot="toggle"]')) {
      return h("slot", { name: "toggle" });
    }
    else if (this.langHref) {
      return (h("section", { class: "brand__toggle" }, h("gcds-lang-toggle", { lang: this.lang, href: this.langHref })));
    }
    else {
      return;
    }
  }
  get renderSignature() {
    let signVariant = this.signatureVariant ? this.signatureVariant : "colour";
    if (!!this.el.querySelector('[slot="signature"]')) {
      return h("slot", { name: "signature" });
    }
    else {
      return (h("div", { class: "brand__signature" }, h("gcds-signature", { type: "signature", variant: signVariant, "has-link": this.signatureHasLink, lang: this.lang })));
    }
  }
  get renderSearch() {
    if (!!this.el.querySelector('[slot="search"]')) {
      return h("div", { class: "brand__search" }, h("slot", { name: "search" }));
    }
    else {
      return;
    }
  }
  get hasSearch() {
    return !!this.el.querySelector('[slot="search"]');
  }
  get hasBanner() {
    return !!this.el.querySelector('[slot="banner"]');
  }
  get hasBreadcrumb() {
    return !!this.el.querySelector('[slot="breadcrumb"]');
  }
  render() {
    const { renderSkipToNav, renderToggle, renderSignature, renderSearch, hasSearch, hasBanner, hasBreadcrumb } = this;
    return (h(Host, { role: "banner" }, renderSkipToNav, hasBanner ?
      h("slot", { name: "banner" })
      :
        null, h("div", { class: "gcds-header__brand" }, h("div", { class: `brand__container ${!hasSearch ? 'container--simple' : ''}` }, renderToggle, renderSignature, renderSearch)), h("slot", { name: "menu" }), hasBreadcrumb ?
      h("div", { class: "gcds-header__container" }, h("slot", { name: "breadcrumb" }))
      :
        null));
  }
  get el() { return getElement(this); }
};
GcdsHeader.style = gcdsHeaderCss;

const gcdsHintCss = ".sc-gcds-hint-h .gcds-hint.sc-gcds-hint{font:var(--gcds-hint-font);margin:var(--gcds-hint-margin)}";

const GcdsHint = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hint = undefined;
    this.hintId = undefined;
  }
  render() {
    const { hint, hintId } = this;
    return (h(Host, { id: `hint-${hintId}` }, h("p", { class: "gcds-hint" }, hint)));
  }
  get el() { return getElement(this); }
};
GcdsHint.style = gcdsHintCss;

const gcdsIconCss = "/*!\n * Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n * Copyright 2023 Fonticons, Inc.\n */.fa{font-family:var(--fa-style-family, \"Font Awesome 6 Free\");font-weight:var(--fa-style, 900)}.fa,.fa-brands,.fa-classic,.fa-regular,.fa-sharp,.fa-solid,.fab,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display, inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-classic,.fa-regular,.fa-solid,.far,.fas{font-family:\"Font Awesome 6 Free\"}.fa-brands,.fab{font-family:\"Font Awesome 6 Brands\"}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:0.625em;line-height:0.1em;vertical-align:0.225em}.fa-xs{font-size:0.75em;line-height:0.08333em;vertical-align:0.125em}.fa-sm{font-size:0.875em;line-height:0.07143em;vertical-align:0.05357em}.fa-lg{font-size:1.25em;line-height:0.05em;vertical-align:-0.075em}.fa-xl{font-size:1.5em;line-height:0.04167em;vertical-align:-0.125em}.fa-2xl{font-size:2em;line-height:0.03125em;vertical-align:-0.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin, 2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width, 2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width, 2em);line-height:inherit}.fa-border{border-radius:var(--fa-border-radius, 0.1em);border:var(--fa-border-width, 0.08em) var(--fa-border-style, solid) var(--fa-border-color, #eee);padding:var(--fa-border-padding, 0.2em 0.25em 0.15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin, 0.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin, 0.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay, 0s);animation-delay:var(--fa-animation-delay, 0s);-webkit-animation-direction:var(--fa-animation-direction, normal);animation-direction:var(--fa-animation-direction, normal);-webkit-animation-duration:var(--fa-animation-duration, 1s);animation-duration:var(--fa-animation-duration, 1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-iteration-count:var(--fa-animation-iteration-count, infinite);-webkit-animation-timing-function:var(--fa-animation-timing, ease-in-out);animation-timing-function:var(--fa-animation-timing, ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay, 0s);animation-delay:var(--fa-animation-delay, 0s);-webkit-animation-direction:var(--fa-animation-direction, normal);animation-direction:var(--fa-animation-direction, normal);-webkit-animation-duration:var(--fa-animation-duration, 1s);animation-duration:var(--fa-animation-duration, 1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-iteration-count:var(--fa-animation-iteration-count, infinite);-webkit-animation-timing-function:var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));animation-timing-function:var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-iteration-count:var(--fa-animation-iteration-count, infinite);-webkit-animation-timing-function:var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));animation-timing-function:var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1))}.fa-beat-fade,.fa-fade{-webkit-animation-delay:var(--fa-animation-delay, 0s);animation-delay:var(--fa-animation-delay, 0s);-webkit-animation-direction:var(--fa-animation-direction, normal);animation-direction:var(--fa-animation-direction, normal);-webkit-animation-duration:var(--fa-animation-duration, 1s);animation-duration:var(--fa-animation-duration, 1s)}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-iteration-count:var(--fa-animation-iteration-count, infinite);-webkit-animation-timing-function:var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));animation-timing-function:var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay, 0s);animation-delay:var(--fa-animation-delay, 0s);-webkit-animation-direction:var(--fa-animation-direction, normal);animation-direction:var(--fa-animation-direction, normal);-webkit-animation-duration:var(--fa-animation-duration, 1s);animation-duration:var(--fa-animation-duration, 1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-iteration-count:var(--fa-animation-iteration-count, infinite);-webkit-animation-timing-function:var(--fa-animation-timing, ease-in-out);animation-timing-function:var(--fa-animation-timing, ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-duration:var(--fa-animation-duration, 1s);animation-duration:var(--fa-animation-duration, 1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-iteration-count:var(--fa-animation-iteration-count, infinite);-webkit-animation-timing-function:var(--fa-animation-timing, linear);animation-timing-function:var(--fa-animation-timing, linear)}.fa-shake,.fa-spin{-webkit-animation-delay:var(--fa-animation-delay, 0s);animation-delay:var(--fa-animation-delay, 0s);-webkit-animation-direction:var(--fa-animation-direction, normal);animation-direction:var(--fa-animation-direction, normal)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-duration:var(--fa-animation-duration, 2s);animation-duration:var(--fa-animation-duration, 2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-iteration-count:var(--fa-animation-iteration-count, infinite);-webkit-animation-timing-function:var(--fa-animation-timing, linear);animation-timing-function:var(--fa-animation-timing, linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction, normal);animation-direction:var(--fa-animation-direction, normal);-webkit-animation-duration:var(--fa-animation-duration, 1s);animation-duration:var(--fa-animation-duration, 1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-iteration-count:var(--fa-animation-iteration-count, infinite);-webkit-animation-timing-function:var(--fa-animation-timing, steps(8));animation-timing-function:var(--fa-animation-timing, steps(8))}@media (prefers-reduced-motion: reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale, 1.25));transform:scale(var(--fa-beat-scale, 1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale, 1.25));transform:scale(var(--fa-beat-scale, 1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));transform:scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound, -0.125em));transform:scale(1) translateY(var(--fa-bounce-rebound, -0.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));transform:scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound, -0.125em));transform:scale(1) translateY(var(--fa-bounce-rebound, -0.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity, 0.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity, 0.4)}}@-webkit-keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity, 0.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale, 1.125));transform:scale(var(--fa-beat-fade-scale, 1.125))}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity, 0.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale, 1.125));transform:scale(var(--fa-beat-fade-scale, 1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));transform:rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));transform:rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle, none));transform:rotate(var(--fa-rotate-angle, none))}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%;z-index:var(--fa-stack-z-index, auto)}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:var(--fa-inverse, #fff)}.fa-0:before{content:\"0\"}.fa-1:before{content:\"1\"}.fa-2:before{content:\"2\"}.fa-3:before{content:\"3\"}.fa-4:before{content:\"4\"}.fa-5:before{content:\"5\"}.fa-6:before{content:\"6\"}.fa-7:before{content:\"7\"}.fa-8:before{content:\"8\"}.fa-9:before{content:\"9\"}.fa-fill-drip:before{content:\"\\f576\"}.fa-arrows-to-circle:before{content:\"\\e4bd\"}.fa-chevron-circle-right:before,.fa-circle-chevron-right:before{content:\"\\f138\"}.fa-at:before{content:\"@\"}.fa-trash-alt:before,.fa-trash-can:before{content:\"\\f2ed\"}.fa-text-height:before{content:\"\\f034\"}.fa-user-times:before,.fa-user-xmark:before{content:\"\\f235\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-comment-alt:before,.fa-message:before{content:\"\\f27a\"}.fa-info:before{content:\"\\f129\"}.fa-compress-alt:before,.fa-down-left-and-up-right-to-center:before{content:\"\\f422\"}.fa-explosion:before{content:\"\\e4e9\"}.fa-file-alt:before,.fa-file-lines:before,.fa-file-text:before{content:\"\\f15c\"}.fa-wave-square:before{content:\"\\f83e\"}.fa-ring:before{content:\"\\f70b\"}.fa-building-un:before{content:\"\\e4d9\"}.fa-dice-three:before{content:\"\\f527\"}.fa-calendar-alt:before,.fa-calendar-days:before{content:\"\\f073\"}.fa-anchor-circle-check:before{content:\"\\e4aa\"}.fa-building-circle-arrow-right:before{content:\"\\e4d1\"}.fa-volleyball-ball:before,.fa-volleyball:before{content:\"\\f45f\"}.fa-arrows-up-to-line:before{content:\"\\e4c2\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-circle-minus:before,.fa-minus-circle:before{content:\"\\f056\"}.fa-door-open:before{content:\"\\f52b\"}.fa-right-from-bracket:before,.fa-sign-out-alt:before{content:\"\\f2f5\"}.fa-atom:before{content:\"\\f5d2\"}.fa-soap:before{content:\"\\e06e\"}.fa-heart-music-camera-bolt:before,.fa-icons:before{content:\"\\f86d\"}.fa-microphone-alt-slash:before,.fa-microphone-lines-slash:before{content:\"\\f539\"}.fa-bridge-circle-check:before{content:\"\\e4c9\"}.fa-pump-medical:before{content:\"\\e06a\"}.fa-fingerprint:before{content:\"\\f577\"}.fa-hand-point-right:before{content:\"\\f0a4\"}.fa-magnifying-glass-location:before,.fa-search-location:before{content:\"\\f689\"}.fa-forward-step:before,.fa-step-forward:before{content:\"\\f051\"}.fa-face-smile-beam:before,.fa-smile-beam:before{content:\"\\f5b8\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-football-ball:before,.fa-football:before{content:\"\\f44e\"}.fa-school-circle-exclamation:before{content:\"\\e56c\"}.fa-crop:before{content:\"\\f125\"}.fa-angle-double-down:before,.fa-angles-down:before{content:\"\\f103\"}.fa-users-rectangle:before{content:\"\\e594\"}.fa-people-roof:before{content:\"\\e537\"}.fa-people-line:before{content:\"\\e534\"}.fa-beer-mug-empty:before,.fa-beer:before{content:\"\\f0fc\"}.fa-diagram-predecessor:before{content:\"\\e477\"}.fa-arrow-up-long:before,.fa-long-arrow-up:before{content:\"\\f176\"}.fa-burn:before,.fa-fire-flame-simple:before{content:\"\\f46a\"}.fa-male:before,.fa-person:before{content:\"\\f183\"}.fa-laptop:before{content:\"\\f109\"}.fa-file-csv:before{content:\"\\f6dd\"}.fa-menorah:before{content:\"\\f676\"}.fa-truck-plane:before{content:\"\\e58f\"}.fa-record-vinyl:before{content:\"\\f8d9\"}.fa-face-grin-stars:before,.fa-grin-stars:before{content:\"\\f587\"}.fa-bong:before{content:\"\\f55c\"}.fa-pastafarianism:before,.fa-spaghetti-monster-flying:before{content:\"\\f67b\"}.fa-arrow-down-up-across-line:before{content:\"\\e4af\"}.fa-spoon:before,.fa-utensil-spoon:before{content:\"\\f2e5\"}.fa-jar-wheat:before{content:\"\\e517\"}.fa-envelopes-bulk:before,.fa-mail-bulk:before{content:\"\\f674\"}.fa-file-circle-exclamation:before{content:\"\\e4eb\"}.fa-circle-h:before,.fa-hospital-symbol:before{content:\"\\f47e\"}.fa-pager:before{content:\"\\f815\"}.fa-address-book:before,.fa-contact-book:before{content:\"\\f2b9\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-k:before{content:\"K\"}.fa-landmark-flag:before{content:\"\\e51c\"}.fa-pencil-alt:before,.fa-pencil:before{content:\"\\f303\"}.fa-backward:before{content:\"\\f04a\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-comments:before{content:\"\\f086\"}.fa-file-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-code-pull-request:before{content:\"\\e13c\"}.fa-clipboard-list:before{content:\"\\f46d\"}.fa-truck-loading:before,.fa-truck-ramp-box:before{content:\"\\f4de\"}.fa-user-check:before{content:\"\\f4fc\"}.fa-vial-virus:before{content:\"\\e597\"}.fa-sheet-plastic:before{content:\"\\e571\"}.fa-blog:before{content:\"\\f781\"}.fa-user-ninja:before{content:\"\\f504\"}.fa-person-arrow-up-from-line:before{content:\"\\e539\"}.fa-scroll-torah:before,.fa-torah:before{content:\"\\f6a0\"}.fa-broom-ball:before,.fa-quidditch-broom-ball:before,.fa-quidditch:before{content:\"\\f458\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-archive:before,.fa-box-archive:before{content:\"\\f187\"}.fa-person-drowning:before{content:\"\\e545\"}.fa-arrow-down-9-1:before,.fa-sort-numeric-desc:before,.fa-sort-numeric-down-alt:before{content:\"\\f886\"}.fa-face-grin-tongue-squint:before,.fa-grin-tongue-squint:before{content:\"\\f58a\"}.fa-spray-can:before{content:\"\\f5bd\"}.fa-truck-monster:before{content:\"\\f63b\"}.fa-w:before{content:\"W\"}.fa-earth-africa:before,.fa-globe-africa:before{content:\"\\f57c\"}.fa-rainbow:before{content:\"\\f75b\"}.fa-circle-notch:before{content:\"\\f1ce\"}.fa-tablet-alt:before,.fa-tablet-screen-button:before{content:\"\\f3fa\"}.fa-paw:before{content:\"\\f1b0\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-trowel-bricks:before{content:\"\\e58a\"}.fa-face-flushed:before,.fa-flushed:before{content:\"\\f579\"}.fa-hospital-user:before{content:\"\\f80d\"}.fa-tent-arrow-left-right:before{content:\"\\e57f\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-box-tissue:before{content:\"\\e05b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-bell-concierge:before,.fa-concierge-bell:before{content:\"\\f562\"}.fa-pen-ruler:before,.fa-pencil-ruler:before{content:\"\\f5ae\"}.fa-people-arrows-left-right:before,.fa-people-arrows:before{content:\"\\e068\"}.fa-mars-and-venus-burst:before{content:\"\\e523\"}.fa-caret-square-right:before,.fa-square-caret-right:before{content:\"\\f152\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-sun-plant-wilt:before{content:\"\\e57a\"}.fa-toilets-portable:before{content:\"\\e584\"}.fa-hockey-puck:before{content:\"\\f453\"}.fa-table:before{content:\"\\f0ce\"}.fa-magnifying-glass-arrow-right:before{content:\"\\e521\"}.fa-digital-tachograph:before,.fa-tachograph-digital:before{content:\"\\f566\"}.fa-users-slash:before{content:\"\\e073\"}.fa-clover:before{content:\"\\e139\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f3e5\"}.fa-star-and-crescent:before{content:\"\\f699\"}.fa-house-fire:before{content:\"\\e50c\"}.fa-minus-square:before,.fa-square-minus:before{content:\"\\f146\"}.fa-helicopter:before{content:\"\\f533\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-down:before,.fa-square-caret-down:before{content:\"\\f150\"}.fa-file-circle-question:before{content:\"\\e4ef\"}.fa-laptop-code:before{content:\"\\f5fc\"}.fa-swatchbook:before{content:\"\\f5c3\"}.fa-prescription-bottle:before{content:\"\\f485\"}.fa-bars:before,.fa-navicon:before{content:\"\\f0c9\"}.fa-people-group:before{content:\"\\e533\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-heart-broken:before,.fa-heart-crack:before{content:\"\\f7a9\"}.fa-external-link-square-alt:before,.fa-square-up-right:before{content:\"\\f360\"}.fa-face-kiss-beam:before,.fa-kiss-beam:before{content:\"\\f597\"}.fa-film:before{content:\"\\f008\"}.fa-ruler-horizontal:before{content:\"\\f547\"}.fa-people-robbery:before{content:\"\\e536\"}.fa-lightbulb:before{content:\"\\f0eb\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-circle-exclamation:before,.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-school-circle-xmark:before{content:\"\\e56d\"}.fa-arrow-right-from-bracket:before,.fa-sign-out:before{content:\"\\f08b\"}.fa-chevron-circle-down:before,.fa-circle-chevron-down:before{content:\"\\f13a\"}.fa-unlock-alt:before,.fa-unlock-keyhole:before{content:\"\\f13e\"}.fa-cloud-showers-heavy:before{content:\"\\f740\"}.fa-headphones-alt:before,.fa-headphones-simple:before{content:\"\\f58f\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-circle-dollar-to-slot:before,.fa-donate:before{content:\"\\f4b9\"}.fa-memory:before{content:\"\\f538\"}.fa-road-spikes:before{content:\"\\e568\"}.fa-fire-burner:before{content:\"\\e4f1\"}.fa-flag:before{content:\"\\f024\"}.fa-hanukiah:before{content:\"\\f6e6\"}.fa-feather:before{content:\"\\f52d\"}.fa-volume-down:before,.fa-volume-low:before{content:\"\\f027\"}.fa-comment-slash:before{content:\"\\f4b3\"}.fa-cloud-sun-rain:before{content:\"\\f743\"}.fa-compress:before{content:\"\\f066\"}.fa-wheat-alt:before,.fa-wheat-awn:before{content:\"\\e2cd\"}.fa-ankh:before{content:\"\\f644\"}.fa-hands-holding-child:before{content:\"\\e4fa\"}.fa-asterisk:before{content:\"*\"}.fa-check-square:before,.fa-square-check:before{content:\"\\f14a\"}.fa-peseta-sign:before{content:\"\\e221\"}.fa-header:before,.fa-heading:before{content:\"\\f1dc\"}.fa-ghost:before{content:\"\\f6e2\"}.fa-list-squares:before,.fa-list:before{content:\"\\f03a\"}.fa-phone-square-alt:before,.fa-square-phone-flip:before{content:\"\\f87b\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-circle-dot:before,.fa-dot-circle:before{content:\"\\f192\"}.fa-dizzy:before,.fa-face-dizzy:before{content:\"\\f567\"}.fa-egg:before{content:\"\\f7fb\"}.fa-house-medical-circle-xmark:before{content:\"\\e513\"}.fa-campground:before{content:\"\\f6bb\"}.fa-folder-plus:before{content:\"\\f65e\"}.fa-futbol-ball:before,.fa-futbol:before,.fa-soccer-ball:before{content:\"\\f1e3\"}.fa-paint-brush:before,.fa-paintbrush:before{content:\"\\f1fc\"}.fa-lock:before{content:\"\\f023\"}.fa-gas-pump:before{content:\"\\f52f\"}.fa-hot-tub-person:before,.fa-hot-tub:before{content:\"\\f593\"}.fa-map-location:before,.fa-map-marked:before{content:\"\\f59f\"}.fa-house-flood-water:before{content:\"\\e50e\"}.fa-tree:before{content:\"\\f1bb\"}.fa-bridge-lock:before{content:\"\\e4cc\"}.fa-sack-dollar:before{content:\"\\f81d\"}.fa-edit:before,.fa-pen-to-square:before{content:\"\\f044\"}.fa-car-side:before{content:\"\\f5e4\"}.fa-share-alt:before,.fa-share-nodes:before{content:\"\\f1e0\"}.fa-heart-circle-minus:before{content:\"\\e4ff\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-microscope:before{content:\"\\f610\"}.fa-sink:before{content:\"\\e06d\"}.fa-bag-shopping:before,.fa-shopping-bag:before{content:\"\\f290\"}.fa-arrow-down-z-a:before,.fa-sort-alpha-desc:before,.fa-sort-alpha-down-alt:before{content:\"\\f881\"}.fa-mitten:before{content:\"\\f7b5\"}.fa-person-rays:before{content:\"\\e54d\"}.fa-users:before{content:\"\\f0c0\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-flask-vial:before{content:\"\\e4f3\"}.fa-hand-paper:before,.fa-hand:before{content:\"\\f256\"}.fa-om:before{content:\"\\f679\"}.fa-worm:before{content:\"\\e599\"}.fa-house-circle-xmark:before{content:\"\\e50b\"}.fa-plug:before{content:\"\\f1e6\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-hand-spock:before{content:\"\\f259\"}.fa-stopwatch:before{content:\"\\f2f2\"}.fa-face-kiss:before,.fa-kiss:before{content:\"\\f596\"}.fa-bridge-circle-xmark:before{content:\"\\e4cb\"}.fa-face-grin-tongue:before,.fa-grin-tongue:before{content:\"\\f589\"}.fa-chess-bishop:before{content:\"\\f43a\"}.fa-face-grin-wink:before,.fa-grin-wink:before{content:\"\\f58c\"}.fa-deaf:before,.fa-deafness:before,.fa-ear-deaf:before,.fa-hard-of-hearing:before{content:\"\\f2a4\"}.fa-road-circle-check:before{content:\"\\e564\"}.fa-dice-five:before{content:\"\\f523\"}.fa-rss-square:before,.fa-square-rss:before{content:\"\\f143\"}.fa-land-mine-on:before{content:\"\\e51b\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-stamp:before{content:\"\\f5bf\"}.fa-stairs:before{content:\"\\e289\"}.fa-i:before{content:\"I\"}.fa-hryvnia-sign:before,.fa-hryvnia:before{content:\"\\f6f2\"}.fa-pills:before{content:\"\\f484\"}.fa-face-grin-wide:before,.fa-grin-alt:before{content:\"\\f581\"}.fa-tooth:before{content:\"\\f5c9\"}.fa-v:before{content:\"V\"}.fa-bangladeshi-taka-sign:before{content:\"\\e2e6\"}.fa-bicycle:before{content:\"\\f206\"}.fa-rod-asclepius:before,.fa-rod-snake:before,.fa-staff-aesculapius:before,.fa-staff-snake:before{content:\"\\e579\"}.fa-head-side-cough-slash:before{content:\"\\e062\"}.fa-ambulance:before,.fa-truck-medical:before{content:\"\\f0f9\"}.fa-wheat-awn-circle-exclamation:before{content:\"\\e598\"}.fa-snowman:before{content:\"\\f7d0\"}.fa-mortar-pestle:before{content:\"\\f5a7\"}.fa-road-barrier:before{content:\"\\e562\"}.fa-school:before{content:\"\\f549\"}.fa-igloo:before{content:\"\\f7ae\"}.fa-joint:before{content:\"\\f595\"}.fa-angle-right:before{content:\"\\f105\"}.fa-horse:before{content:\"\\f6f0\"}.fa-q:before{content:\"Q\"}.fa-g:before{content:\"G\"}.fa-notes-medical:before{content:\"\\f481\"}.fa-temperature-2:before,.fa-temperature-half:before,.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-dong-sign:before{content:\"\\e169\"}.fa-capsules:before{content:\"\\f46b\"}.fa-poo-bolt:before,.fa-poo-storm:before{content:\"\\f75a\"}.fa-face-frown-open:before,.fa-frown-open:before{content:\"\\f57a\"}.fa-hand-point-up:before{content:\"\\f0a6\"}.fa-money-bill:before{content:\"\\f0d6\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-align-justify:before{content:\"\\f039\"}.fa-umbrella-beach:before{content:\"\\f5ca\"}.fa-helmet-un:before{content:\"\\e503\"}.fa-bullseye:before{content:\"\\f140\"}.fa-bacon:before{content:\"\\f7e5\"}.fa-hand-point-down:before{content:\"\\f0a7\"}.fa-arrow-up-from-bracket:before{content:\"\\e09a\"}.fa-folder-blank:before,.fa-folder:before{content:\"\\f07b\"}.fa-file-medical-alt:before,.fa-file-waveform:before{content:\"\\f478\"}.fa-radiation:before{content:\"\\f7b9\"}.fa-chart-simple:before{content:\"\\e473\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-vial:before{content:\"\\f492\"}.fa-dashboard:before,.fa-gauge-med:before,.fa-gauge:before,.fa-tachometer-alt-average:before{content:\"\\f624\"}.fa-magic-wand-sparkles:before,.fa-wand-magic-sparkles:before{content:\"\\e2ca\"}.fa-e:before{content:\"E\"}.fa-pen-alt:before,.fa-pen-clip:before{content:\"\\f305\"}.fa-bridge-circle-exclamation:before{content:\"\\e4ca\"}.fa-user:before{content:\"\\f007\"}.fa-school-circle-check:before{content:\"\\e56b\"}.fa-dumpster:before{content:\"\\f793\"}.fa-shuttle-van:before,.fa-van-shuttle:before{content:\"\\f5b6\"}.fa-building-user:before{content:\"\\e4da\"}.fa-caret-square-left:before,.fa-square-caret-left:before{content:\"\\f191\"}.fa-highlighter:before{content:\"\\f591\"}.fa-key:before{content:\"\\f084\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-globe:before{content:\"\\f0ac\"}.fa-synagogue:before{content:\"\\f69b\"}.fa-person-half-dress:before{content:\"\\e548\"}.fa-road-bridge:before{content:\"\\e563\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-c:before{content:\"C\"}.fa-tablet-button:before{content:\"\\f10a\"}.fa-building-lock:before{content:\"\\e4d6\"}.fa-pizza-slice:before{content:\"\\f818\"}.fa-money-bill-wave:before{content:\"\\f53a\"}.fa-area-chart:before,.fa-chart-area:before{content:\"\\f1fe\"}.fa-house-flag:before{content:\"\\e50d\"}.fa-person-circle-minus:before{content:\"\\e540\"}.fa-ban:before,.fa-cancel:before{content:\"\\f05e\"}.fa-camera-rotate:before{content:\"\\e0d8\"}.fa-air-freshener:before,.fa-spray-can-sparkles:before{content:\"\\f5d0\"}.fa-star:before{content:\"\\f005\"}.fa-repeat:before{content:\"\\f363\"}.fa-cross:before{content:\"\\f654\"}.fa-box:before{content:\"\\f466\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-arrow-pointer:before,.fa-mouse-pointer:before{content:\"\\f245\"}.fa-expand-arrows-alt:before,.fa-maximize:before{content:\"\\f31e\"}.fa-charging-station:before{content:\"\\f5e7\"}.fa-shapes:before,.fa-triangle-circle-square:before{content:\"\\f61f\"}.fa-random:before,.fa-shuffle:before{content:\"\\f074\"}.fa-person-running:before,.fa-running:before{content:\"\\f70c\"}.fa-mobile-retro:before{content:\"\\e527\"}.fa-grip-lines-vertical:before{content:\"\\f7a5\"}.fa-spider:before{content:\"\\f717\"}.fa-hands-bound:before{content:\"\\e4f9\"}.fa-file-invoice-dollar:before{content:\"\\f571\"}.fa-plane-circle-exclamation:before{content:\"\\e556\"}.fa-x-ray:before{content:\"\\f497\"}.fa-spell-check:before{content:\"\\f891\"}.fa-slash:before{content:\"\\f715\"}.fa-computer-mouse:before,.fa-mouse:before{content:\"\\f8cc\"}.fa-arrow-right-to-bracket:before,.fa-sign-in:before{content:\"\\f090\"}.fa-shop-slash:before,.fa-store-alt-slash:before{content:\"\\e070\"}.fa-server:before{content:\"\\f233\"}.fa-virus-covid-slash:before{content:\"\\e4a9\"}.fa-shop-lock:before{content:\"\\e4a5\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-blender-phone:before{content:\"\\f6b6\"}.fa-building-wheat:before{content:\"\\e4db\"}.fa-person-breastfeeding:before{content:\"\\e53a\"}.fa-right-to-bracket:before,.fa-sign-in-alt:before{content:\"\\f2f6\"}.fa-venus:before{content:\"\\f221\"}.fa-passport:before{content:\"\\f5ab\"}.fa-heart-pulse:before,.fa-heartbeat:before{content:\"\\f21e\"}.fa-people-carry-box:before,.fa-people-carry:before{content:\"\\f4ce\"}.fa-temperature-high:before{content:\"\\f769\"}.fa-microchip:before{content:\"\\f2db\"}.fa-crown:before{content:\"\\f521\"}.fa-weight-hanging:before{content:\"\\f5cd\"}.fa-xmarks-lines:before{content:\"\\e59a\"}.fa-file-prescription:before{content:\"\\f572\"}.fa-weight-scale:before,.fa-weight:before{content:\"\\f496\"}.fa-user-friends:before,.fa-user-group:before{content:\"\\f500\"}.fa-arrow-up-a-z:before,.fa-sort-alpha-up:before{content:\"\\f15e\"}.fa-chess-knight:before{content:\"\\f441\"}.fa-face-laugh-squint:before,.fa-laugh-squint:before{content:\"\\f59b\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-arrow-circle-up:before,.fa-circle-arrow-up:before{content:\"\\f0aa\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-person-walking:before,.fa-walking:before{content:\"\\f554\"}.fa-l:before{content:\"L\"}.fa-fire:before{content:\"\\f06d\"}.fa-bed-pulse:before,.fa-procedures:before{content:\"\\f487\"}.fa-shuttle-space:before,.fa-space-shuttle:before{content:\"\\f197\"}.fa-face-laugh:before,.fa-laugh:before{content:\"\\f599\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-heart-circle-plus:before{content:\"\\e500\"}.fa-code-fork:before{content:\"\\e13b\"}.fa-city:before{content:\"\\f64f\"}.fa-microphone-alt:before,.fa-microphone-lines:before{content:\"\\f3c9\"}.fa-pepper-hot:before{content:\"\\f816\"}.fa-unlock:before{content:\"\\f09c\"}.fa-colon-sign:before{content:\"\\e140\"}.fa-headset:before{content:\"\\f590\"}.fa-store-slash:before{content:\"\\e071\"}.fa-road-circle-xmark:before{content:\"\\e566\"}.fa-user-minus:before{content:\"\\f503\"}.fa-mars-stroke-up:before,.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-champagne-glasses:before,.fa-glass-cheers:before{content:\"\\f79f\"}.fa-clipboard:before{content:\"\\f328\"}.fa-house-circle-exclamation:before{content:\"\\e50a\"}.fa-file-arrow-up:before,.fa-file-upload:before{content:\"\\f574\"}.fa-wifi-3:before,.fa-wifi-strong:before,.fa-wifi:before{content:\"\\f1eb\"}.fa-bath:before,.fa-bathtub:before{content:\"\\f2cd\"}.fa-underline:before{content:\"\\f0cd\"}.fa-user-edit:before,.fa-user-pen:before{content:\"\\f4ff\"}.fa-signature:before{content:\"\\f5b7\"}.fa-stroopwafel:before{content:\"\\f551\"}.fa-bold:before{content:\"\\f032\"}.fa-anchor-lock:before{content:\"\\e4ad\"}.fa-building-ngo:before{content:\"\\e4d7\"}.fa-manat-sign:before{content:\"\\e1d5\"}.fa-not-equal:before{content:\"\\f53e\"}.fa-border-style:before,.fa-border-top-left:before{content:\"\\f853\"}.fa-map-location-dot:before,.fa-map-marked-alt:before{content:\"\\f5a0\"}.fa-jedi:before{content:\"\\f669\"}.fa-poll:before,.fa-square-poll-vertical:before{content:\"\\f681\"}.fa-mug-hot:before{content:\"\\f7b6\"}.fa-battery-car:before,.fa-car-battery:before{content:\"\\f5df\"}.fa-gift:before{content:\"\\f06b\"}.fa-dice-two:before{content:\"\\f528\"}.fa-chess-queen:before{content:\"\\f445\"}.fa-glasses:before{content:\"\\f530\"}.fa-chess-board:before{content:\"\\f43c\"}.fa-building-circle-check:before{content:\"\\e4d2\"}.fa-person-chalkboard:before{content:\"\\e53d\"}.fa-mars-stroke-h:before,.fa-mars-stroke-right:before{content:\"\\f22b\"}.fa-hand-back-fist:before,.fa-hand-rock:before{content:\"\\f255\"}.fa-caret-square-up:before,.fa-square-caret-up:before{content:\"\\f151\"}.fa-cloud-showers-water:before{content:\"\\e4e4\"}.fa-bar-chart:before,.fa-chart-bar:before{content:\"\\f080\"}.fa-hands-bubbles:before,.fa-hands-wash:before{content:\"\\e05e\"}.fa-less-than-equal:before{content:\"\\f537\"}.fa-train:before{content:\"\\f238\"}.fa-eye-low-vision:before,.fa-low-vision:before{content:\"\\f2a8\"}.fa-crow:before{content:\"\\f520\"}.fa-sailboat:before{content:\"\\e445\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-plus-square:before,.fa-square-plus:before{content:\"\\f0fe\"}.fa-torii-gate:before{content:\"\\f6a1\"}.fa-frog:before{content:\"\\f52e\"}.fa-bucket:before{content:\"\\e4cf\"}.fa-image:before{content:\"\\f03e\"}.fa-microphone:before{content:\"\\f130\"}.fa-cow:before{content:\"\\f6c8\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-screwdriver:before{content:\"\\f54a\"}.fa-folder-closed:before{content:\"\\e185\"}.fa-house-tsunami:before{content:\"\\e515\"}.fa-square-nfi:before{content:\"\\e576\"}.fa-arrow-up-from-ground-water:before{content:\"\\e4b5\"}.fa-glass-martini-alt:before,.fa-martini-glass:before{content:\"\\f57b\"}.fa-rotate-back:before,.fa-rotate-backward:before,.fa-rotate-left:before,.fa-undo-alt:before{content:\"\\f2ea\"}.fa-columns:before,.fa-table-columns:before{content:\"\\f0db\"}.fa-lemon:before{content:\"\\f094\"}.fa-head-side-mask:before{content:\"\\e063\"}.fa-handshake:before{content:\"\\f2b5\"}.fa-gem:before{content:\"\\f3a5\"}.fa-dolly-box:before,.fa-dolly:before{content:\"\\f472\"}.fa-smoking:before{content:\"\\f48d\"}.fa-compress-arrows-alt:before,.fa-minimize:before{content:\"\\f78c\"}.fa-monument:before{content:\"\\f5a6\"}.fa-snowplow:before{content:\"\\f7d2\"}.fa-angle-double-right:before,.fa-angles-right:before{content:\"\\f101\"}.fa-cannabis:before{content:\"\\f55f\"}.fa-circle-play:before,.fa-play-circle:before{content:\"\\f144\"}.fa-tablets:before{content:\"\\f490\"}.fa-ethernet:before{content:\"\\f796\"}.fa-eur:before,.fa-euro-sign:before,.fa-euro:before{content:\"\\f153\"}.fa-chair:before{content:\"\\f6c0\"}.fa-check-circle:before,.fa-circle-check:before{content:\"\\f058\"}.fa-circle-stop:before,.fa-stop-circle:before{content:\"\\f28d\"}.fa-compass-drafting:before,.fa-drafting-compass:before{content:\"\\f568\"}.fa-plate-wheat:before{content:\"\\e55a\"}.fa-icicles:before{content:\"\\f7ad\"}.fa-person-shelter:before{content:\"\\e54f\"}.fa-neuter:before{content:\"\\f22c\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-marker:before{content:\"\\f5a1\"}.fa-face-laugh-beam:before,.fa-laugh-beam:before{content:\"\\f59a\"}.fa-helicopter-symbol:before{content:\"\\e502\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-chevron-circle-up:before,.fa-circle-chevron-up:before{content:\"\\f139\"}.fa-lari-sign:before{content:\"\\e1c8\"}.fa-volcano:before{content:\"\\f770\"}.fa-person-walking-dashed-line-arrow-right:before{content:\"\\e553\"}.fa-gbp:before,.fa-pound-sign:before,.fa-sterling-sign:before{content:\"\\f154\"}.fa-viruses:before{content:\"\\e076\"}.fa-square-person-confined:before{content:\"\\e577\"}.fa-user-tie:before{content:\"\\f508\"}.fa-arrow-down-long:before,.fa-long-arrow-down:before{content:\"\\f175\"}.fa-tent-arrow-down-to-line:before{content:\"\\e57e\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-person-skating:before,.fa-skating:before{content:\"\\f7c5\"}.fa-filter-circle-dollar:before,.fa-funnel-dollar:before{content:\"\\f662\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-arrow-circle-down:before,.fa-circle-arrow-down:before{content:\"\\f0ab\"}.fa-arrow-right-to-file:before,.fa-file-import:before{content:\"\\f56f\"}.fa-external-link-square:before,.fa-square-arrow-up-right:before{content:\"\\f14c\"}.fa-box-open:before{content:\"\\f49e\"}.fa-scroll:before{content:\"\\f70e\"}.fa-spa:before{content:\"\\f5bb\"}.fa-location-pin-lock:before{content:\"\\e51f\"}.fa-pause:before{content:\"\\f04c\"}.fa-hill-avalanche:before{content:\"\\e507\"}.fa-temperature-0:before,.fa-temperature-empty:before,.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-registered:before{content:\"\\f25d\"}.fa-address-card:before,.fa-contact-card:before,.fa-vcard:before{content:\"\\f2bb\"}.fa-balance-scale-right:before,.fa-scale-unbalanced-flip:before{content:\"\\f516\"}.fa-subscript:before{content:\"\\f12c\"}.fa-diamond-turn-right:before,.fa-directions:before{content:\"\\f5eb\"}.fa-burst:before{content:\"\\e4dc\"}.fa-house-laptop:before,.fa-laptop-house:before{content:\"\\e066\"}.fa-face-tired:before,.fa-tired:before{content:\"\\f5c8\"}.fa-money-bills:before{content:\"\\e1f3\"}.fa-smog:before{content:\"\\f75f\"}.fa-crutch:before{content:\"\\f7f7\"}.fa-cloud-arrow-up:before,.fa-cloud-upload-alt:before,.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-palette:before{content:\"\\f53f\"}.fa-arrows-turn-right:before{content:\"\\e4c0\"}.fa-vest:before{content:\"\\e085\"}.fa-ferry:before{content:\"\\e4ea\"}.fa-arrows-down-to-people:before{content:\"\\e4b9\"}.fa-seedling:before,.fa-sprout:before{content:\"\\f4d8\"}.fa-arrows-alt-h:before,.fa-left-right:before{content:\"\\f337\"}.fa-boxes-packing:before{content:\"\\e4c7\"}.fa-arrow-circle-left:before,.fa-circle-arrow-left:before{content:\"\\f0a8\"}.fa-group-arrows-rotate:before{content:\"\\e4f6\"}.fa-bowl-food:before{content:\"\\e4c6\"}.fa-candy-cane:before{content:\"\\f786\"}.fa-arrow-down-wide-short:before,.fa-sort-amount-asc:before,.fa-sort-amount-down:before{content:\"\\f160\"}.fa-cloud-bolt:before,.fa-thunderstorm:before{content:\"\\f76c\"}.fa-remove-format:before,.fa-text-slash:before{content:\"\\f87d\"}.fa-face-smile-wink:before,.fa-smile-wink:before{content:\"\\f4da\"}.fa-file-word:before{content:\"\\f1c2\"}.fa-file-powerpoint:before{content:\"\\f1c4\"}.fa-arrows-h:before,.fa-arrows-left-right:before{content:\"\\f07e\"}.fa-house-lock:before{content:\"\\e510\"}.fa-cloud-arrow-down:before,.fa-cloud-download-alt:before,.fa-cloud-download:before{content:\"\\f0ed\"}.fa-children:before{content:\"\\e4e1\"}.fa-blackboard:before,.fa-chalkboard:before{content:\"\\f51b\"}.fa-user-alt-slash:before,.fa-user-large-slash:before{content:\"\\f4fa\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-handshake-alt-slash:before,.fa-handshake-simple-slash:before{content:\"\\e05f\"}.fa-mattress-pillow:before{content:\"\\e525\"}.fa-guarani-sign:before{content:\"\\e19a\"}.fa-arrows-rotate:before,.fa-refresh:before,.fa-sync:before{content:\"\\f021\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-cruzeiro-sign:before{content:\"\\e152\"}.fa-greater-than-equal:before{content:\"\\f532\"}.fa-shield-alt:before,.fa-shield-halved:before{content:\"\\f3ed\"}.fa-atlas:before,.fa-book-atlas:before{content:\"\\f558\"}.fa-virus:before{content:\"\\e074\"}.fa-envelope-circle-check:before{content:\"\\e4e8\"}.fa-layer-group:before{content:\"\\f5fd\"}.fa-arrows-to-dot:before{content:\"\\e4be\"}.fa-archway:before{content:\"\\f557\"}.fa-heart-circle-check:before{content:\"\\e4fd\"}.fa-house-chimney-crack:before,.fa-house-damage:before{content:\"\\f6f1\"}.fa-file-archive:before,.fa-file-zipper:before{content:\"\\f1c6\"}.fa-square:before{content:\"\\f0c8\"}.fa-glass-martini:before,.fa-martini-glass-empty:before{content:\"\\f000\"}.fa-couch:before{content:\"\\f4b8\"}.fa-cedi-sign:before{content:\"\\e0df\"}.fa-italic:before{content:\"\\f033\"}.fa-church:before{content:\"\\f51d\"}.fa-comments-dollar:before{content:\"\\f653\"}.fa-democrat:before{content:\"\\f747\"}.fa-z:before{content:\"Z\"}.fa-person-skiing:before,.fa-skiing:before{content:\"\\f7c9\"}.fa-road-lock:before{content:\"\\e567\"}.fa-a:before{content:\"A\"}.fa-temperature-arrow-down:before,.fa-temperature-down:before{content:\"\\e03f\"}.fa-feather-alt:before,.fa-feather-pointed:before{content:\"\\f56b\"}.fa-p:before{content:\"P\"}.fa-snowflake:before{content:\"\\f2dc\"}.fa-newspaper:before{content:\"\\f1ea\"}.fa-ad:before,.fa-rectangle-ad:before{content:\"\\f641\"}.fa-arrow-circle-right:before,.fa-circle-arrow-right:before{content:\"\\f0a9\"}.fa-filter-circle-xmark:before{content:\"\\e17b\"}.fa-locust:before{content:\"\\e520\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-list-1-2:before,.fa-list-numeric:before,.fa-list-ol:before{content:\"\\f0cb\"}.fa-person-dress-burst:before{content:\"\\e544\"}.fa-money-check-alt:before,.fa-money-check-dollar:before{content:\"\\f53d\"}.fa-vector-square:before{content:\"\\f5cb\"}.fa-bread-slice:before{content:\"\\f7ec\"}.fa-language:before{content:\"\\f1ab\"}.fa-face-kiss-wink-heart:before,.fa-kiss-wink-heart:before{content:\"\\f598\"}.fa-filter:before{content:\"\\f0b0\"}.fa-question:before{content:\"?\"}.fa-file-signature:before{content:\"\\f573\"}.fa-arrows-alt:before,.fa-up-down-left-right:before{content:\"\\f0b2\"}.fa-house-chimney-user:before{content:\"\\e065\"}.fa-hand-holding-heart:before{content:\"\\f4be\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-money-check:before{content:\"\\f53c\"}.fa-star-half-alt:before,.fa-star-half-stroke:before{content:\"\\f5c0\"}.fa-code:before{content:\"\\f121\"}.fa-glass-whiskey:before,.fa-whiskey-glass:before{content:\"\\f7a0\"}.fa-building-circle-exclamation:before{content:\"\\e4d3\"}.fa-magnifying-glass-chart:before{content:\"\\e522\"}.fa-arrow-up-right-from-square:before,.fa-external-link:before{content:\"\\f08e\"}.fa-cubes-stacked:before{content:\"\\e4e6\"}.fa-krw:before,.fa-won-sign:before,.fa-won:before{content:\"\\f159\"}.fa-virus-covid:before{content:\"\\e4a8\"}.fa-austral-sign:before{content:\"\\e0a9\"}.fa-f:before{content:\"F\"}.fa-leaf:before{content:\"\\f06c\"}.fa-road:before{content:\"\\f018\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-person-circle-plus:before{content:\"\\e541\"}.fa-chart-pie:before,.fa-pie-chart:before{content:\"\\f200\"}.fa-bolt-lightning:before{content:\"\\e0b7\"}.fa-sack-xmark:before{content:\"\\e56a\"}.fa-file-excel:before{content:\"\\f1c3\"}.fa-file-contract:before{content:\"\\f56c\"}.fa-fish-fins:before{content:\"\\e4f2\"}.fa-building-flag:before{content:\"\\e4d5\"}.fa-face-grin-beam:before,.fa-grin-beam:before{content:\"\\f582\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-poop:before{content:\"\\f619\"}.fa-location-pin:before,.fa-map-marker:before{content:\"\\f041\"}.fa-kaaba:before{content:\"\\f66b\"}.fa-toilet-paper:before{content:\"\\f71e\"}.fa-hard-hat:before,.fa-hat-hard:before,.fa-helmet-safety:before{content:\"\\f807\"}.fa-eject:before{content:\"\\f052\"}.fa-arrow-alt-circle-right:before,.fa-circle-right:before{content:\"\\f35a\"}.fa-plane-circle-check:before{content:\"\\e555\"}.fa-face-rolling-eyes:before,.fa-meh-rolling-eyes:before{content:\"\\f5a5\"}.fa-object-group:before{content:\"\\f247\"}.fa-chart-line:before,.fa-line-chart:before{content:\"\\f201\"}.fa-mask-ventilator:before{content:\"\\e524\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-map-signs:before,.fa-signs-post:before{content:\"\\f277\"}.fa-cash-register:before{content:\"\\f788\"}.fa-person-circle-question:before{content:\"\\e542\"}.fa-h:before{content:\"H\"}.fa-tarp:before{content:\"\\e57b\"}.fa-screwdriver-wrench:before,.fa-tools:before{content:\"\\f7d9\"}.fa-arrows-to-eye:before{content:\"\\e4bf\"}.fa-plug-circle-bolt:before{content:\"\\e55b\"}.fa-heart:before{content:\"\\f004\"}.fa-mars-and-venus:before{content:\"\\f224\"}.fa-home-user:before,.fa-house-user:before{content:\"\\e1b0\"}.fa-dumpster-fire:before{content:\"\\f794\"}.fa-house-crack:before{content:\"\\e3b1\"}.fa-cocktail:before,.fa-martini-glass-citrus:before{content:\"\\f561\"}.fa-face-surprise:before,.fa-surprise:before{content:\"\\f5c2\"}.fa-bottle-water:before{content:\"\\e4c5\"}.fa-circle-pause:before,.fa-pause-circle:before{content:\"\\f28b\"}.fa-toilet-paper-slash:before{content:\"\\e072\"}.fa-apple-alt:before,.fa-apple-whole:before{content:\"\\f5d1\"}.fa-kitchen-set:before{content:\"\\e51a\"}.fa-r:before{content:\"R\"}.fa-temperature-1:before,.fa-temperature-quarter:before,.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-cube:before{content:\"\\f1b2\"}.fa-bitcoin-sign:before{content:\"\\e0b4\"}.fa-shield-dog:before{content:\"\\e573\"}.fa-solar-panel:before{content:\"\\f5ba\"}.fa-lock-open:before{content:\"\\f3c1\"}.fa-elevator:before{content:\"\\e16d\"}.fa-money-bill-transfer:before{content:\"\\e528\"}.fa-money-bill-trend-up:before{content:\"\\e529\"}.fa-house-flood-water-circle-arrow-right:before{content:\"\\e50f\"}.fa-poll-h:before,.fa-square-poll-horizontal:before{content:\"\\f682\"}.fa-circle:before{content:\"\\f111\"}.fa-backward-fast:before,.fa-fast-backward:before{content:\"\\f049\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-user-astronaut:before{content:\"\\f4fb\"}.fa-plane-slash:before{content:\"\\e069\"}.fa-trademark:before{content:\"\\f25c\"}.fa-basketball-ball:before,.fa-basketball:before{content:\"\\f434\"}.fa-satellite-dish:before{content:\"\\f7c0\"}.fa-arrow-alt-circle-up:before,.fa-circle-up:before{content:\"\\f35b\"}.fa-mobile-alt:before,.fa-mobile-screen-button:before{content:\"\\f3cd\"}.fa-volume-high:before,.fa-volume-up:before{content:\"\\f028\"}.fa-users-rays:before{content:\"\\e593\"}.fa-wallet:before{content:\"\\f555\"}.fa-clipboard-check:before{content:\"\\f46c\"}.fa-file-audio:before{content:\"\\f1c7\"}.fa-burger:before,.fa-hamburger:before{content:\"\\f805\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-bugs:before{content:\"\\e4d0\"}.fa-rupee-sign:before,.fa-rupee:before{content:\"\\f156\"}.fa-file-image:before{content:\"\\f1c5\"}.fa-circle-question:before,.fa-question-circle:before{content:\"\\f059\"}.fa-plane-departure:before{content:\"\\f5b0\"}.fa-handshake-slash:before{content:\"\\e060\"}.fa-book-bookmark:before{content:\"\\e0bb\"}.fa-code-branch:before{content:\"\\f126\"}.fa-hat-cowboy:before{content:\"\\f8c0\"}.fa-bridge:before{content:\"\\e4c8\"}.fa-phone-alt:before,.fa-phone-flip:before{content:\"\\f879\"}.fa-truck-front:before{content:\"\\e2b7\"}.fa-cat:before{content:\"\\f6be\"}.fa-anchor-circle-exclamation:before{content:\"\\e4ab\"}.fa-truck-field:before{content:\"\\e58d\"}.fa-route:before{content:\"\\f4d7\"}.fa-clipboard-question:before{content:\"\\e4e3\"}.fa-panorama:before{content:\"\\e209\"}.fa-comment-medical:before{content:\"\\f7f5\"}.fa-teeth-open:before{content:\"\\f62f\"}.fa-file-circle-minus:before{content:\"\\e4ed\"}.fa-tags:before{content:\"\\f02c\"}.fa-wine-glass:before{content:\"\\f4e3\"}.fa-fast-forward:before,.fa-forward-fast:before{content:\"\\f050\"}.fa-face-meh-blank:before,.fa-meh-blank:before{content:\"\\f5a4\"}.fa-parking:before,.fa-square-parking:before{content:\"\\f540\"}.fa-house-signal:before{content:\"\\e012\"}.fa-bars-progress:before,.fa-tasks-alt:before{content:\"\\f828\"}.fa-faucet-drip:before{content:\"\\e006\"}.fa-cart-flatbed:before,.fa-dolly-flatbed:before{content:\"\\f474\"}.fa-ban-smoking:before,.fa-smoking-ban:before{content:\"\\f54d\"}.fa-terminal:before{content:\"\\f120\"}.fa-mobile-button:before{content:\"\\f10b\"}.fa-house-medical-flag:before{content:\"\\e514\"}.fa-basket-shopping:before,.fa-shopping-basket:before{content:\"\\f291\"}.fa-tape:before{content:\"\\f4db\"}.fa-bus-alt:before,.fa-bus-simple:before{content:\"\\f55e\"}.fa-eye:before{content:\"\\f06e\"}.fa-face-sad-cry:before,.fa-sad-cry:before{content:\"\\f5b3\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-person-military-to-person:before{content:\"\\e54c\"}.fa-file-shield:before{content:\"\\e4f0\"}.fa-user-slash:before{content:\"\\f506\"}.fa-pen:before{content:\"\\f304\"}.fa-tower-observation:before{content:\"\\e586\"}.fa-file-code:before{content:\"\\f1c9\"}.fa-signal-5:before,.fa-signal-perfect:before,.fa-signal:before{content:\"\\f012\"}.fa-bus:before{content:\"\\f207\"}.fa-heart-circle-xmark:before{content:\"\\e501\"}.fa-home-lg:before,.fa-house-chimney:before{content:\"\\e3af\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-face-frown:before,.fa-frown:before{content:\"\\f119\"}.fa-prescription:before{content:\"\\f5b1\"}.fa-shop:before,.fa-store-alt:before{content:\"\\f54f\"}.fa-floppy-disk:before,.fa-save:before{content:\"\\f0c7\"}.fa-vihara:before{content:\"\\f6a7\"}.fa-balance-scale-left:before,.fa-scale-unbalanced:before{content:\"\\f515\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-comment-dots:before,.fa-commenting:before{content:\"\\f4ad\"}.fa-plant-wilt:before{content:\"\\e5aa\"}.fa-diamond:before{content:\"\\f219\"}.fa-face-grin-squint:before,.fa-grin-squint:before{content:\"\\f585\"}.fa-hand-holding-dollar:before,.fa-hand-holding-usd:before{content:\"\\f4c0\"}.fa-bacterium:before{content:\"\\e05a\"}.fa-hand-pointer:before{content:\"\\f25a\"}.fa-drum-steelpan:before{content:\"\\f56a\"}.fa-hand-scissors:before{content:\"\\f257\"}.fa-hands-praying:before,.fa-praying-hands:before{content:\"\\f684\"}.fa-arrow-right-rotate:before,.fa-arrow-rotate-forward:before,.fa-arrow-rotate-right:before,.fa-redo:before{content:\"\\f01e\"}.fa-biohazard:before{content:\"\\f780\"}.fa-location-crosshairs:before,.fa-location:before{content:\"\\f601\"}.fa-mars-double:before{content:\"\\f227\"}.fa-child-dress:before{content:\"\\e59c\"}.fa-users-between-lines:before{content:\"\\e591\"}.fa-lungs-virus:before{content:\"\\e067\"}.fa-face-grin-tears:before,.fa-grin-tears:before{content:\"\\f588\"}.fa-phone:before{content:\"\\f095\"}.fa-calendar-times:before,.fa-calendar-xmark:before{content:\"\\f273\"}.fa-child-reaching:before{content:\"\\e59d\"}.fa-head-side-virus:before{content:\"\\e064\"}.fa-user-cog:before,.fa-user-gear:before{content:\"\\f4fe\"}.fa-arrow-up-1-9:before,.fa-sort-numeric-up:before{content:\"\\f163\"}.fa-door-closed:before{content:\"\\f52a\"}.fa-shield-virus:before{content:\"\\e06c\"}.fa-dice-six:before{content:\"\\f526\"}.fa-mosquito-net:before{content:\"\\e52c\"}.fa-bridge-water:before{content:\"\\e4ce\"}.fa-person-booth:before{content:\"\\f756\"}.fa-text-width:before{content:\"\\f035\"}.fa-hat-wizard:before{content:\"\\f6e8\"}.fa-pen-fancy:before{content:\"\\f5ac\"}.fa-digging:before,.fa-person-digging:before{content:\"\\f85e\"}.fa-trash:before{content:\"\\f1f8\"}.fa-gauge-simple-med:before,.fa-gauge-simple:before,.fa-tachometer-average:before{content:\"\\f629\"}.fa-book-medical:before{content:\"\\f7e6\"}.fa-poo:before{content:\"\\f2fe\"}.fa-quote-right-alt:before,.fa-quote-right:before{content:\"\\f10e\"}.fa-shirt:before,.fa-t-shirt:before,.fa-tshirt:before{content:\"\\f553\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-divide:before{content:\"\\f529\"}.fa-tenge-sign:before,.fa-tenge:before{content:\"\\f7d7\"}.fa-headphones:before{content:\"\\f025\"}.fa-hands-holding:before{content:\"\\f4c2\"}.fa-hands-clapping:before{content:\"\\e1a8\"}.fa-republican:before{content:\"\\f75e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-person-circle-xmark:before{content:\"\\e543\"}.fa-ruler:before{content:\"\\f545\"}.fa-align-left:before{content:\"\\f036\"}.fa-dice-d6:before{content:\"\\f6d1\"}.fa-restroom:before{content:\"\\f7bd\"}.fa-j:before{content:\"J\"}.fa-users-viewfinder:before{content:\"\\e595\"}.fa-file-video:before{content:\"\\f1c8\"}.fa-external-link-alt:before,.fa-up-right-from-square:before{content:\"\\f35d\"}.fa-table-cells:before,.fa-th:before{content:\"\\f00a\"}.fa-file-pdf:before{content:\"\\f1c1\"}.fa-bible:before,.fa-book-bible:before{content:\"\\f647\"}.fa-o:before{content:\"O\"}.fa-medkit:before,.fa-suitcase-medical:before{content:\"\\f0fa\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-otter:before{content:\"\\f700\"}.fa-female:before,.fa-person-dress:before{content:\"\\f182\"}.fa-comment-dollar:before{content:\"\\f651\"}.fa-briefcase-clock:before,.fa-business-time:before{content:\"\\f64a\"}.fa-table-cells-large:before,.fa-th-large:before{content:\"\\f009\"}.fa-book-tanakh:before,.fa-tanakh:before{content:\"\\f827\"}.fa-phone-volume:before,.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-hat-cowboy-side:before{content:\"\\f8c1\"}.fa-clipboard-user:before{content:\"\\f7f3\"}.fa-child:before{content:\"\\f1ae\"}.fa-lira-sign:before{content:\"\\f195\"}.fa-satellite:before{content:\"\\f7bf\"}.fa-plane-lock:before{content:\"\\e558\"}.fa-tag:before{content:\"\\f02b\"}.fa-comment:before{content:\"\\f075\"}.fa-birthday-cake:before,.fa-cake-candles:before,.fa-cake:before{content:\"\\f1fd\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-angle-double-up:before,.fa-angles-up:before{content:\"\\f102\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-arrow-right-to-city:before{content:\"\\e4b3\"}.fa-ribbon:before{content:\"\\f4d6\"}.fa-lungs:before{content:\"\\f604\"}.fa-arrow-up-9-1:before,.fa-sort-numeric-up-alt:before{content:\"\\f887\"}.fa-litecoin-sign:before{content:\"\\e1d3\"}.fa-border-none:before{content:\"\\f850\"}.fa-circle-nodes:before{content:\"\\e4e2\"}.fa-parachute-box:before{content:\"\\f4cd\"}.fa-indent:before{content:\"\\f03c\"}.fa-truck-field-un:before{content:\"\\e58e\"}.fa-hourglass-empty:before,.fa-hourglass:before{content:\"\\f254\"}.fa-mountain:before{content:\"\\f6fc\"}.fa-user-doctor:before,.fa-user-md:before{content:\"\\f0f0\"}.fa-circle-info:before,.fa-info-circle:before{content:\"\\f05a\"}.fa-cloud-meatball:before{content:\"\\f73b\"}.fa-camera-alt:before,.fa-camera:before{content:\"\\f030\"}.fa-square-virus:before{content:\"\\e578\"}.fa-meteor:before{content:\"\\f753\"}.fa-car-on:before{content:\"\\e4dd\"}.fa-sleigh:before{content:\"\\f7cc\"}.fa-arrow-down-1-9:before,.fa-sort-numeric-asc:before,.fa-sort-numeric-down:before{content:\"\\f162\"}.fa-hand-holding-droplet:before,.fa-hand-holding-water:before{content:\"\\f4c1\"}.fa-water:before{content:\"\\f773\"}.fa-calendar-check:before{content:\"\\f274\"}.fa-braille:before{content:\"\\f2a1\"}.fa-prescription-bottle-alt:before,.fa-prescription-bottle-medical:before{content:\"\\f486\"}.fa-landmark:before{content:\"\\f66f\"}.fa-truck:before{content:\"\\f0d1\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-person-cane:before{content:\"\\e53c\"}.fa-tent:before{content:\"\\e57d\"}.fa-vest-patches:before{content:\"\\e086\"}.fa-check-double:before{content:\"\\f560\"}.fa-arrow-down-a-z:before,.fa-sort-alpha-asc:before,.fa-sort-alpha-down:before{content:\"\\f15d\"}.fa-money-bill-wheat:before{content:\"\\e52a\"}.fa-cookie:before{content:\"\\f563\"}.fa-arrow-left-rotate:before,.fa-arrow-rotate-back:before,.fa-arrow-rotate-backward:before,.fa-arrow-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-hard-drive:before,.fa-hdd:before{content:\"\\f0a0\"}.fa-face-grin-squint-tears:before,.fa-grin-squint-tears:before{content:\"\\f586\"}.fa-dumbbell:before{content:\"\\f44b\"}.fa-list-alt:before,.fa-rectangle-list:before{content:\"\\f022\"}.fa-tarp-droplet:before{content:\"\\e57c\"}.fa-house-medical-circle-check:before{content:\"\\e511\"}.fa-person-skiing-nordic:before,.fa-skiing-nordic:before{content:\"\\f7ca\"}.fa-calendar-plus:before{content:\"\\f271\"}.fa-plane-arrival:before{content:\"\\f5af\"}.fa-arrow-alt-circle-left:before,.fa-circle-left:before{content:\"\\f359\"}.fa-subway:before,.fa-train-subway:before{content:\"\\f239\"}.fa-chart-gantt:before{content:\"\\e0e4\"}.fa-indian-rupee-sign:before,.fa-indian-rupee:before,.fa-inr:before{content:\"\\e1bc\"}.fa-crop-alt:before,.fa-crop-simple:before{content:\"\\f565\"}.fa-money-bill-1:before,.fa-money-bill-alt:before{content:\"\\f3d1\"}.fa-left-long:before,.fa-long-arrow-alt-left:before{content:\"\\f30a\"}.fa-dna:before{content:\"\\f471\"}.fa-virus-slash:before{content:\"\\e075\"}.fa-minus:before,.fa-subtract:before{content:\"\\f068\"}.fa-chess:before{content:\"\\f439\"}.fa-arrow-left-long:before,.fa-long-arrow-left:before{content:\"\\f177\"}.fa-plug-circle-check:before{content:\"\\e55c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-franc-sign:before{content:\"\\e18f\"}.fa-volume-off:before{content:\"\\f026\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before,.fa-hands-american-sign-language-interpreting:before,.fa-hands-asl-interpreting:before{content:\"\\f2a3\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-droplet-slash:before,.fa-tint-slash:before{content:\"\\f5c7\"}.fa-mosque:before{content:\"\\f678\"}.fa-mosquito:before{content:\"\\e52b\"}.fa-star-of-david:before{content:\"\\f69a\"}.fa-person-military-rifle:before{content:\"\\e54b\"}.fa-cart-shopping:before,.fa-shopping-cart:before{content:\"\\f07a\"}.fa-vials:before{content:\"\\f493\"}.fa-plug-circle-plus:before{content:\"\\e55f\"}.fa-place-of-worship:before{content:\"\\f67f\"}.fa-grip-vertical:before{content:\"\\f58e\"}.fa-arrow-turn-up:before,.fa-level-up:before{content:\"\\f148\"}.fa-u:before{content:\"U\"}.fa-square-root-alt:before,.fa-square-root-variable:before{content:\"\\f698\"}.fa-clock-four:before,.fa-clock:before{content:\"\\f017\"}.fa-backward-step:before,.fa-step-backward:before{content:\"\\f048\"}.fa-pallet:before{content:\"\\f482\"}.fa-faucet:before{content:\"\\e005\"}.fa-baseball-bat-ball:before{content:\"\\f432\"}.fa-s:before{content:\"S\"}.fa-timeline:before{content:\"\\e29c\"}.fa-keyboard:before{content:\"\\f11c\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-clinic-medical:before,.fa-house-chimney-medical:before{content:\"\\f7f2\"}.fa-temperature-3:before,.fa-temperature-three-quarters:before,.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-mobile-android-alt:before,.fa-mobile-screen:before{content:\"\\f3cf\"}.fa-plane-up:before{content:\"\\e22d\"}.fa-piggy-bank:before{content:\"\\f4d3\"}.fa-battery-3:before,.fa-battery-half:before{content:\"\\f242\"}.fa-mountain-city:before{content:\"\\e52e\"}.fa-coins:before{content:\"\\f51e\"}.fa-khanda:before{content:\"\\f66d\"}.fa-sliders-h:before,.fa-sliders:before{content:\"\\f1de\"}.fa-folder-tree:before{content:\"\\f802\"}.fa-network-wired:before{content:\"\\f6ff\"}.fa-map-pin:before{content:\"\\f276\"}.fa-hamsa:before{content:\"\\f665\"}.fa-cent-sign:before{content:\"\\e3f5\"}.fa-flask:before{content:\"\\f0c3\"}.fa-person-pregnant:before{content:\"\\e31e\"}.fa-wand-sparkles:before{content:\"\\f72b\"}.fa-ellipsis-v:before,.fa-ellipsis-vertical:before{content:\"\\f142\"}.fa-ticket:before{content:\"\\f145\"}.fa-power-off:before{content:\"\\f011\"}.fa-long-arrow-alt-right:before,.fa-right-long:before{content:\"\\f30b\"}.fa-flag-usa:before{content:\"\\f74d\"}.fa-laptop-file:before{content:\"\\e51d\"}.fa-teletype:before,.fa-tty:before{content:\"\\f1e4\"}.fa-diagram-next:before{content:\"\\e476\"}.fa-person-rifle:before{content:\"\\e54e\"}.fa-house-medical-circle-exclamation:before{content:\"\\e512\"}.fa-closed-captioning:before{content:\"\\f20a\"}.fa-hiking:before,.fa-person-hiking:before{content:\"\\f6ec\"}.fa-venus-double:before{content:\"\\f226\"}.fa-images:before{content:\"\\f302\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-people-pulling:before{content:\"\\e535\"}.fa-n:before{content:\"N\"}.fa-cable-car:before,.fa-tram:before{content:\"\\f7da\"}.fa-cloud-rain:before{content:\"\\f73d\"}.fa-building-circle-xmark:before{content:\"\\e4d4\"}.fa-ship:before{content:\"\\f21a\"}.fa-arrows-down-to-line:before{content:\"\\e4b8\"}.fa-download:before{content:\"\\f019\"}.fa-face-grin:before,.fa-grin:before{content:\"\\f580\"}.fa-backspace:before,.fa-delete-left:before{content:\"\\f55a\"}.fa-eye-dropper-empty:before,.fa-eye-dropper:before,.fa-eyedropper:before{content:\"\\f1fb\"}.fa-file-circle-check:before{content:\"\\e5a0\"}.fa-forward:before{content:\"\\f04e\"}.fa-mobile-android:before,.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f3ce\"}.fa-face-meh:before,.fa-meh:before{content:\"\\f11a\"}.fa-align-center:before{content:\"\\f037\"}.fa-book-dead:before,.fa-book-skull:before{content:\"\\f6b7\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-heart-circle-exclamation:before{content:\"\\e4fe\"}.fa-home-alt:before,.fa-home-lg-alt:before,.fa-home:before,.fa-house:before{content:\"\\f015\"}.fa-calendar-week:before{content:\"\\f784\"}.fa-laptop-medical:before{content:\"\\f812\"}.fa-b:before{content:\"B\"}.fa-file-medical:before{content:\"\\f477\"}.fa-dice-one:before{content:\"\\f525\"}.fa-kiwi-bird:before{content:\"\\f535\"}.fa-arrow-right-arrow-left:before,.fa-exchange:before{content:\"\\f0ec\"}.fa-redo-alt:before,.fa-rotate-forward:before,.fa-rotate-right:before{content:\"\\f2f9\"}.fa-cutlery:before,.fa-utensils:before{content:\"\\f2e7\"}.fa-arrow-up-wide-short:before,.fa-sort-amount-up:before{content:\"\\f161\"}.fa-mill-sign:before{content:\"\\e1ed\"}.fa-bowl-rice:before{content:\"\\e2eb\"}.fa-skull:before{content:\"\\f54c\"}.fa-broadcast-tower:before,.fa-tower-broadcast:before{content:\"\\f519\"}.fa-truck-pickup:before{content:\"\\f63c\"}.fa-long-arrow-alt-up:before,.fa-up-long:before{content:\"\\f30c\"}.fa-stop:before{content:\"\\f04d\"}.fa-code-merge:before{content:\"\\f387\"}.fa-upload:before{content:\"\\f093\"}.fa-hurricane:before{content:\"\\f751\"}.fa-mound:before{content:\"\\e52d\"}.fa-toilet-portable:before{content:\"\\e583\"}.fa-compact-disc:before{content:\"\\f51f\"}.fa-file-arrow-down:before,.fa-file-download:before{content:\"\\f56d\"}.fa-caravan:before{content:\"\\f8ff\"}.fa-shield-cat:before{content:\"\\e572\"}.fa-bolt:before,.fa-zap:before{content:\"\\f0e7\"}.fa-glass-water:before{content:\"\\e4f4\"}.fa-oil-well:before{content:\"\\e532\"}.fa-vault:before{content:\"\\e2c5\"}.fa-mars:before{content:\"\\f222\"}.fa-toilet:before{content:\"\\f7d8\"}.fa-plane-circle-xmark:before{content:\"\\e557\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen-sign:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble-sign:before,.fa-ruble:before{content:\"\\f158\"}.fa-sun:before{content:\"\\f185\"}.fa-guitar:before{content:\"\\f7a6\"}.fa-face-laugh-wink:before,.fa-laugh-wink:before{content:\"\\f59c\"}.fa-horse-head:before{content:\"\\f7ab\"}.fa-bore-hole:before{content:\"\\e4c3\"}.fa-industry:before{content:\"\\f275\"}.fa-arrow-alt-circle-down:before,.fa-circle-down:before{content:\"\\f358\"}.fa-arrows-turn-to-dots:before{content:\"\\e4c1\"}.fa-florin-sign:before{content:\"\\e184\"}.fa-arrow-down-short-wide:before,.fa-sort-amount-desc:before,.fa-sort-amount-down-alt:before{content:\"\\f884\"}.fa-less-than:before{content:\"<\"}.fa-angle-down:before{content:\"\\f107\"}.fa-car-tunnel:before{content:\"\\e4de\"}.fa-head-side-cough:before{content:\"\\e061\"}.fa-grip-lines:before{content:\"\\f7a4\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-user-lock:before{content:\"\\f502\"}.fa-arrow-right-long:before,.fa-long-arrow-right:before{content:\"\\f178\"}.fa-anchor-circle-xmark:before{content:\"\\e4ac\"}.fa-ellipsis-h:before,.fa-ellipsis:before{content:\"\\f141\"}.fa-chess-pawn:before{content:\"\\f443\"}.fa-first-aid:before,.fa-kit-medical:before{content:\"\\f479\"}.fa-person-through-window:before{content:\"\\e5a9\"}.fa-toolbox:before{content:\"\\f552\"}.fa-hands-holding-circle:before{content:\"\\e4fb\"}.fa-bug:before{content:\"\\f188\"}.fa-credit-card-alt:before,.fa-credit-card:before{content:\"\\f09d\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-hand-holding-hand:before{content:\"\\e4f7\"}.fa-book-open-reader:before,.fa-book-reader:before{content:\"\\f5da\"}.fa-mountain-sun:before{content:\"\\e52f\"}.fa-arrows-left-right-to-line:before{content:\"\\e4ba\"}.fa-dice-d20:before{content:\"\\f6cf\"}.fa-truck-droplet:before{content:\"\\e58c\"}.fa-file-circle-xmark:before{content:\"\\e5a1\"}.fa-temperature-arrow-up:before,.fa-temperature-up:before{content:\"\\e040\"}.fa-medal:before{content:\"\\f5a2\"}.fa-bed:before{content:\"\\f236\"}.fa-h-square:before,.fa-square-h:before{content:\"\\f0fd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-temperature-4:before,.fa-temperature-full:before,.fa-thermometer-4:before,.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-bell:before{content:\"\\f0f3\"}.fa-superscript:before{content:\"\\f12b\"}.fa-plug-circle-xmark:before{content:\"\\e560\"}.fa-star-of-life:before{content:\"\\f621\"}.fa-phone-slash:before{content:\"\\f3dd\"}.fa-paint-roller:before{content:\"\\f5aa\"}.fa-hands-helping:before,.fa-handshake-angle:before{content:\"\\f4c4\"}.fa-location-dot:before,.fa-map-marker-alt:before{content:\"\\f3c5\"}.fa-file:before{content:\"\\f15b\"}.fa-greater-than:before{content:\">\"}.fa-person-swimming:before,.fa-swimmer:before{content:\"\\f5c4\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-droplet:before,.fa-tint:before{content:\"\\f043\"}.fa-eraser:before{content:\"\\f12d\"}.fa-earth-america:before,.fa-earth-americas:before,.fa-earth:before,.fa-globe-americas:before{content:\"\\f57d\"}.fa-person-burst:before{content:\"\\e53b\"}.fa-dove:before{content:\"\\f4ba\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-socks:before{content:\"\\f696\"}.fa-inbox:before{content:\"\\f01c\"}.fa-section:before{content:\"\\e447\"}.fa-gauge-high:before,.fa-tachometer-alt-fast:before,.fa-tachometer-alt:before{content:\"\\f625\"}.fa-envelope-open-text:before{content:\"\\f658\"}.fa-hospital-alt:before,.fa-hospital-wide:before,.fa-hospital:before{content:\"\\f0f8\"}.fa-wine-bottle:before{content:\"\\f72f\"}.fa-chess-rook:before{content:\"\\f447\"}.fa-bars-staggered:before,.fa-reorder:before,.fa-stream:before{content:\"\\f550\"}.fa-dharmachakra:before{content:\"\\f655\"}.fa-hotdog:before{content:\"\\f80f\"}.fa-blind:before,.fa-person-walking-with-cane:before{content:\"\\f29d\"}.fa-drum:before{content:\"\\f569\"}.fa-ice-cream:before{content:\"\\f810\"}.fa-heart-circle-bolt:before{content:\"\\e4fc\"}.fa-fax:before{content:\"\\f1ac\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-check-to-slot:before,.fa-vote-yea:before{content:\"\\f772\"}.fa-star-half:before{content:\"\\f089\"}.fa-boxes-alt:before,.fa-boxes-stacked:before,.fa-boxes:before{content:\"\\f468\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-assistive-listening-systems:before,.fa-ear-listen:before{content:\"\\f2a2\"}.fa-tree-city:before{content:\"\\e587\"}.fa-play:before{content:\"\\f04b\"}.fa-font:before{content:\"\\f031\"}.fa-rupiah-sign:before{content:\"\\e23d\"}.fa-magnifying-glass:before,.fa-search:before{content:\"\\f002\"}.fa-ping-pong-paddle-ball:before,.fa-table-tennis-paddle-ball:before,.fa-table-tennis:before{content:\"\\f45d\"}.fa-diagnoses:before,.fa-person-dots-from-line:before{content:\"\\f470\"}.fa-trash-can-arrow-up:before,.fa-trash-restore-alt:before{content:\"\\f82a\"}.fa-naira-sign:before{content:\"\\e1f6\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-walkie-talkie:before{content:\"\\f8ef\"}.fa-file-edit:before,.fa-file-pen:before{content:\"\\f31c\"}.fa-receipt:before{content:\"\\f543\"}.fa-pen-square:before,.fa-pencil-square:before,.fa-square-pen:before{content:\"\\f14b\"}.fa-suitcase-rolling:before{content:\"\\f5c1\"}.fa-person-circle-exclamation:before{content:\"\\e53f\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-battery-5:before,.fa-battery-full:before,.fa-battery:before{content:\"\\f240\"}.fa-skull-crossbones:before{content:\"\\f714\"}.fa-code-compare:before{content:\"\\e13a\"}.fa-list-dots:before,.fa-list-ul:before{content:\"\\f0ca\"}.fa-school-lock:before{content:\"\\e56f\"}.fa-tower-cell:before{content:\"\\e585\"}.fa-down-long:before,.fa-long-arrow-alt-down:before{content:\"\\f309\"}.fa-ranking-star:before{content:\"\\e561\"}.fa-chess-king:before{content:\"\\f43f\"}.fa-person-harassing:before{content:\"\\e549\"}.fa-brazilian-real-sign:before{content:\"\\e46c\"}.fa-landmark-alt:before,.fa-landmark-dome:before{content:\"\\f752\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-television:before,.fa-tv-alt:before,.fa-tv:before{content:\"\\f26c\"}.fa-shrimp:before{content:\"\\e448\"}.fa-list-check:before,.fa-tasks:before{content:\"\\f0ae\"}.fa-jug-detergent:before{content:\"\\e519\"}.fa-circle-user:before,.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-shield:before{content:\"\\f505\"}.fa-wind:before{content:\"\\f72e\"}.fa-car-burst:before,.fa-car-crash:before{content:\"\\f5e1\"}.fa-y:before{content:\"Y\"}.fa-person-snowboarding:before,.fa-snowboarding:before{content:\"\\f7ce\"}.fa-shipping-fast:before,.fa-truck-fast:before{content:\"\\f48b\"}.fa-fish:before{content:\"\\f578\"}.fa-user-graduate:before{content:\"\\f501\"}.fa-adjust:before,.fa-circle-half-stroke:before{content:\"\\f042\"}.fa-clapperboard:before{content:\"\\e131\"}.fa-circle-radiation:before,.fa-radiation-alt:before{content:\"\\f7ba\"}.fa-baseball-ball:before,.fa-baseball:before{content:\"\\f433\"}.fa-jet-fighter-up:before{content:\"\\e518\"}.fa-diagram-project:before,.fa-project-diagram:before{content:\"\\f542\"}.fa-copy:before{content:\"\\f0c5\"}.fa-volume-mute:before,.fa-volume-times:before,.fa-volume-xmark:before{content:\"\\f6a9\"}.fa-hand-sparkles:before{content:\"\\e05d\"}.fa-grip-horizontal:before,.fa-grip:before{content:\"\\f58d\"}.fa-share-from-square:before,.fa-share-square:before{content:\"\\f14d\"}.fa-child-combatant:before,.fa-child-rifle:before{content:\"\\e4e0\"}.fa-gun:before{content:\"\\e19b\"}.fa-phone-square:before,.fa-square-phone:before{content:\"\\f098\"}.fa-add:before,.fa-plus:before{content:\"+\"}.fa-expand:before{content:\"\\f065\"}.fa-computer:before{content:\"\\e4e5\"}.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before{content:\"\\f00d\"}.fa-arrows-up-down-left-right:before,.fa-arrows:before{content:\"\\f047\"}.fa-chalkboard-teacher:before,.fa-chalkboard-user:before{content:\"\\f51c\"}.fa-peso-sign:before{content:\"\\e222\"}.fa-building-shield:before{content:\"\\e4d8\"}.fa-baby:before{content:\"\\f77c\"}.fa-users-line:before{content:\"\\e592\"}.fa-quote-left-alt:before,.fa-quote-left:before{content:\"\\f10d\"}.fa-tractor:before{content:\"\\f722\"}.fa-trash-arrow-up:before,.fa-trash-restore:before{content:\"\\f829\"}.fa-arrow-down-up-lock:before{content:\"\\e4b0\"}.fa-lines-leaning:before{content:\"\\e51e\"}.fa-ruler-combined:before{content:\"\\f546\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-equals:before{content:\"=\"}.fa-blender:before{content:\"\\f517\"}.fa-teeth:before{content:\"\\f62e\"}.fa-ils:before,.fa-shekel-sign:before,.fa-shekel:before,.fa-sheqel-sign:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-map:before{content:\"\\f279\"}.fa-rocket:before{content:\"\\f135\"}.fa-photo-film:before,.fa-photo-video:before{content:\"\\f87c\"}.fa-folder-minus:before{content:\"\\f65d\"}.fa-store:before{content:\"\\f54e\"}.fa-arrow-trend-up:before{content:\"\\e098\"}.fa-plug-circle-minus:before{content:\"\\e55e\"}.fa-sign-hanging:before,.fa-sign:before{content:\"\\f4d9\"}.fa-bezier-curve:before{content:\"\\f55b\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-tablet-android:before,.fa-tablet:before{content:\"\\f3fb\"}.fa-school-flag:before{content:\"\\e56e\"}.fa-fill:before{content:\"\\f575\"}.fa-angle-up:before{content:\"\\f106\"}.fa-drumstick-bite:before{content:\"\\f6d7\"}.fa-holly-berry:before{content:\"\\f7aa\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-bacteria:before{content:\"\\e059\"}.fa-hand-lizard:before{content:\"\\f258\"}.fa-notdef:before{content:\"\\e1fe\"}.fa-disease:before{content:\"\\f7fa\"}.fa-briefcase-medical:before{content:\"\\f469\"}.fa-genderless:before{content:\"\\f22d\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-retweet:before{content:\"\\f079\"}.fa-car-alt:before,.fa-car-rear:before{content:\"\\f5de\"}.fa-pump-soap:before{content:\"\\e06b\"}.fa-video-slash:before{content:\"\\f4e2\"}.fa-battery-2:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-radio:before{content:\"\\f8d7\"}.fa-baby-carriage:before,.fa-carriage-baby:before{content:\"\\f77d\"}.fa-traffic-light:before{content:\"\\f637\"}.fa-thermometer:before{content:\"\\f491\"}.fa-vr-cardboard:before{content:\"\\f729\"}.fa-hand-middle-finger:before{content:\"\\f806\"}.fa-percent:before,.fa-percentage:before{content:\"%\"}.fa-truck-moving:before{content:\"\\f4df\"}.fa-glass-water-droplet:before{content:\"\\e4f5\"}.fa-display:before{content:\"\\e163\"}.fa-face-smile:before,.fa-smile:before{content:\"\\f118\"}.fa-thumb-tack:before,.fa-thumbtack:before{content:\"\\f08d\"}.fa-trophy:before{content:\"\\f091\"}.fa-person-praying:before,.fa-pray:before{content:\"\\f683\"}.fa-hammer:before{content:\"\\f6e3\"}.fa-hand-peace:before{content:\"\\f25b\"}.fa-rotate:before,.fa-sync-alt:before{content:\"\\f2f1\"}.fa-spinner:before{content:\"\\f110\"}.fa-robot:before{content:\"\\f544\"}.fa-peace:before{content:\"\\f67c\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-warehouse:before{content:\"\\f494\"}.fa-arrow-up-right-dots:before{content:\"\\e4b7\"}.fa-splotch:before{content:\"\\f5bc\"}.fa-face-grin-hearts:before,.fa-grin-hearts:before{content:\"\\f584\"}.fa-dice-four:before{content:\"\\f524\"}.fa-sim-card:before{content:\"\\f7c4\"}.fa-transgender-alt:before,.fa-transgender:before{content:\"\\f225\"}.fa-mercury:before{content:\"\\f223\"}.fa-arrow-turn-down:before,.fa-level-down:before{content:\"\\f149\"}.fa-person-falling-burst:before{content:\"\\e547\"}.fa-award:before{content:\"\\f559\"}.fa-ticket-alt:before,.fa-ticket-simple:before{content:\"\\f3ff\"}.fa-building:before{content:\"\\f1ad\"}.fa-angle-double-left:before,.fa-angles-left:before{content:\"\\f100\"}.fa-qrcode:before{content:\"\\f029\"}.fa-clock-rotate-left:before,.fa-history:before{content:\"\\f1da\"}.fa-face-grin-beam-sweat:before,.fa-grin-beam-sweat:before{content:\"\\f583\"}.fa-arrow-right-from-file:before,.fa-file-export:before{content:\"\\f56e\"}.fa-shield-blank:before,.fa-shield:before{content:\"\\f132\"}.fa-arrow-up-short-wide:before,.fa-sort-amount-up-alt:before{content:\"\\f885\"}.fa-house-medical:before{content:\"\\e3b2\"}.fa-golf-ball-tee:before,.fa-golf-ball:before{content:\"\\f450\"}.fa-chevron-circle-left:before,.fa-circle-chevron-left:before{content:\"\\f137\"}.fa-house-chimney-window:before{content:\"\\e00d\"}.fa-pen-nib:before{content:\"\\f5ad\"}.fa-tent-arrow-turn-left:before{content:\"\\e580\"}.fa-tents:before{content:\"\\e582\"}.fa-magic:before,.fa-wand-magic:before{content:\"\\f0d0\"}.fa-dog:before{content:\"\\f6d3\"}.fa-carrot:before{content:\"\\f787\"}.fa-moon:before{content:\"\\f186\"}.fa-wine-glass-alt:before,.fa-wine-glass-empty:before{content:\"\\f5ce\"}.fa-cheese:before{content:\"\\f7ef\"}.fa-yin-yang:before{content:\"\\f6ad\"}.fa-music:before{content:\"\\f001\"}.fa-code-commit:before{content:\"\\f386\"}.fa-temperature-low:before{content:\"\\f76b\"}.fa-biking:before,.fa-person-biking:before{content:\"\\f84a\"}.fa-broom:before{content:\"\\f51a\"}.fa-shield-heart:before{content:\"\\e574\"}.fa-gopuram:before{content:\"\\f664\"}.fa-earth-oceania:before,.fa-globe-oceania:before{content:\"\\e47b\"}.fa-square-xmark:before,.fa-times-square:before,.fa-xmark-square:before{content:\"\\f2d3\"}.fa-hashtag:before{content:\"#\"}.fa-expand-alt:before,.fa-up-right-and-down-left-from-center:before{content:\"\\f424\"}.fa-oil-can:before{content:\"\\f613\"}.fa-t:before{content:\"T\"}.fa-hippo:before{content:\"\\f6ed\"}.fa-chart-column:before{content:\"\\e0e3\"}.fa-infinity:before{content:\"\\f534\"}.fa-vial-circle-check:before{content:\"\\e596\"}.fa-person-arrow-down-to-line:before{content:\"\\e538\"}.fa-voicemail:before{content:\"\\f897\"}.fa-fan:before{content:\"\\f863\"}.fa-person-walking-luggage:before{content:\"\\e554\"}.fa-arrows-alt-v:before,.fa-up-down:before{content:\"\\f338\"}.fa-cloud-moon-rain:before{content:\"\\f73c\"}.fa-calendar:before{content:\"\\f133\"}.fa-trailer:before{content:\"\\e041\"}.fa-bahai:before,.fa-haykal:before{content:\"\\f666\"}.fa-sd-card:before{content:\"\\f7c2\"}.fa-dragon:before{content:\"\\f6d5\"}.fa-shoe-prints:before{content:\"\\f54b\"}.fa-circle-plus:before,.fa-plus-circle:before{content:\"\\f055\"}.fa-face-grin-tongue-wink:before,.fa-grin-tongue-wink:before{content:\"\\f58b\"}.fa-hand-holding:before{content:\"\\f4bd\"}.fa-plug-circle-exclamation:before{content:\"\\e55d\"}.fa-chain-broken:before,.fa-chain-slash:before,.fa-link-slash:before,.fa-unlink:before{content:\"\\f127\"}.fa-clone:before{content:\"\\f24d\"}.fa-person-walking-arrow-loop-left:before{content:\"\\e551\"}.fa-arrow-up-z-a:before,.fa-sort-alpha-up-alt:before{content:\"\\f882\"}.fa-fire-alt:before,.fa-fire-flame-curved:before{content:\"\\f7e4\"}.fa-tornado:before{content:\"\\f76f\"}.fa-file-circle-plus:before{content:\"\\e494\"}.fa-book-quran:before,.fa-quran:before{content:\"\\f687\"}.fa-anchor:before{content:\"\\f13d\"}.fa-border-all:before{content:\"\\f84c\"}.fa-angry:before,.fa-face-angry:before{content:\"\\f556\"}.fa-cookie-bite:before{content:\"\\f564\"}.fa-arrow-trend-down:before{content:\"\\e097\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-draw-polygon:before{content:\"\\f5ee\"}.fa-balance-scale:before,.fa-scale-balanced:before{content:\"\\f24e\"}.fa-gauge-simple-high:before,.fa-tachometer-fast:before,.fa-tachometer:before{content:\"\\f62a\"}.fa-shower:before{content:\"\\f2cc\"}.fa-desktop-alt:before,.fa-desktop:before{content:\"\\f390\"}.fa-m:before{content:\"M\"}.fa-table-list:before,.fa-th-list:before{content:\"\\f00b\"}.fa-comment-sms:before,.fa-sms:before{content:\"\\f7cd\"}.fa-book:before{content:\"\\f02d\"}.fa-user-plus:before{content:\"\\f234\"}.fa-check:before{content:\"\\f00c\"}.fa-battery-4:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-house-circle-check:before{content:\"\\e509\"}.fa-angle-left:before{content:\"\\f104\"}.fa-diagram-successor:before{content:\"\\e47a\"}.fa-truck-arrow-right:before{content:\"\\e58b\"}.fa-arrows-split-up-and-left:before{content:\"\\e4bc\"}.fa-fist-raised:before,.fa-hand-fist:before{content:\"\\f6de\"}.fa-cloud-moon:before{content:\"\\f6c3\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-person-falling:before{content:\"\\e546\"}.fa-image-portrait:before,.fa-portrait:before{content:\"\\f3e0\"}.fa-user-tag:before{content:\"\\f507\"}.fa-rug:before{content:\"\\e569\"}.fa-earth-europe:before,.fa-globe-europe:before{content:\"\\f7a2\"}.fa-cart-flatbed-suitcase:before,.fa-luggage-cart:before{content:\"\\f59d\"}.fa-rectangle-times:before,.fa-rectangle-xmark:before,.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f410\"}.fa-baht-sign:before{content:\"\\e0ac\"}.fa-book-open:before{content:\"\\f518\"}.fa-book-journal-whills:before,.fa-journal-whills:before{content:\"\\f66a\"}.fa-handcuffs:before{content:\"\\e4f8\"}.fa-exclamation-triangle:before,.fa-triangle-exclamation:before,.fa-warning:before{content:\"\\f071\"}.fa-database:before{content:\"\\f1c0\"}.fa-arrow-turn-right:before,.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-bottle-droplet:before{content:\"\\e4c4\"}.fa-mask-face:before{content:\"\\e1d7\"}.fa-hill-rockslide:before{content:\"\\e508\"}.fa-exchange-alt:before,.fa-right-left:before{content:\"\\f362\"}.fa-paper-plane:before{content:\"\\f1d8\"}.fa-road-circle-exclamation:before{content:\"\\e565\"}.fa-dungeon:before{content:\"\\f6d9\"}.fa-align-right:before{content:\"\\f038\"}.fa-money-bill-1-wave:before,.fa-money-bill-wave-alt:before{content:\"\\f53b\"}.fa-life-ring:before{content:\"\\f1cd\"}.fa-hands:before,.fa-sign-language:before,.fa-signing:before{content:\"\\f2a7\"}.fa-calendar-day:before{content:\"\\f783\"}.fa-ladder-water:before,.fa-swimming-pool:before,.fa-water-ladder:before{content:\"\\f5c5\"}.fa-arrows-up-down:before,.fa-arrows-v:before{content:\"\\f07d\"}.fa-face-grimace:before,.fa-grimace:before{content:\"\\f57f\"}.fa-wheelchair-alt:before,.fa-wheelchair-move:before{content:\"\\e2ce\"}.fa-level-down-alt:before,.fa-turn-down:before{content:\"\\f3be\"}.fa-person-walking-arrow-right:before{content:\"\\e552\"}.fa-envelope-square:before,.fa-square-envelope:before{content:\"\\f199\"}.fa-dice:before{content:\"\\f522\"}.fa-bowling-ball:before{content:\"\\f436\"}.fa-brain:before{content:\"\\f5dc\"}.fa-band-aid:before,.fa-bandage:before{content:\"\\f462\"}.fa-calendar-minus:before{content:\"\\f272\"}.fa-circle-xmark:before,.fa-times-circle:before,.fa-xmark-circle:before{content:\"\\f057\"}.fa-gifts:before{content:\"\\f79c\"}.fa-hotel:before{content:\"\\f594\"}.fa-earth-asia:before,.fa-globe-asia:before{content:\"\\f57e\"}.fa-id-card-alt:before,.fa-id-card-clip:before{content:\"\\f47f\"}.fa-magnifying-glass-plus:before,.fa-search-plus:before{content:\"\\f00e\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-user-clock:before{content:\"\\f4fd\"}.fa-allergies:before,.fa-hand-dots:before{content:\"\\f461\"}.fa-file-invoice:before{content:\"\\f570\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-coffee:before,.fa-mug-saucer:before{content:\"\\f0f4\"}.fa-brush:before{content:\"\\f55d\"}.fa-mask:before{content:\"\\f6fa\"}.fa-magnifying-glass-minus:before,.fa-search-minus:before{content:\"\\f010\"}.fa-ruler-vertical:before{content:\"\\f548\"}.fa-user-alt:before,.fa-user-large:before{content:\"\\f406\"}.fa-train-tram:before{content:\"\\e5b4\"}.fa-user-nurse:before{content:\"\\f82f\"}.fa-syringe:before{content:\"\\f48e\"}.fa-cloud-sun:before{content:\"\\f6c4\"}.fa-stopwatch-20:before{content:\"\\e06f\"}.fa-square-full:before{content:\"\\f45c\"}.fa-magnet:before{content:\"\\f076\"}.fa-jar:before{content:\"\\e516\"}.fa-note-sticky:before,.fa-sticky-note:before{content:\"\\f249\"}.fa-bug-slash:before{content:\"\\e490\"}.fa-arrow-up-from-water-pump:before{content:\"\\e4b6\"}.fa-bone:before{content:\"\\f5d7\"}.fa-user-injured:before{content:\"\\f728\"}.fa-face-sad-tear:before,.fa-sad-tear:before{content:\"\\f5b4\"}.fa-plane:before{content:\"\\f072\"}.fa-tent-arrows-down:before{content:\"\\e581\"}.fa-exclamation:before{content:\"!\"}.fa-arrows-spin:before{content:\"\\e4bb\"}.fa-print:before{content:\"\\f02f\"}.fa-try:before,.fa-turkish-lira-sign:before,.fa-turkish-lira:before{content:\"\\e2bb\"}.fa-dollar-sign:before,.fa-dollar:before,.fa-usd:before{content:\"$\"}.fa-x:before{content:\"X\"}.fa-magnifying-glass-dollar:before,.fa-search-dollar:before{content:\"\\f688\"}.fa-users-cog:before,.fa-users-gear:before{content:\"\\f509\"}.fa-person-military-pointing:before{content:\"\\e54a\"}.fa-bank:before,.fa-building-columns:before,.fa-institution:before,.fa-museum:before,.fa-university:before{content:\"\\f19c\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-trowel:before{content:\"\\e589\"}.fa-d:before{content:\"D\"}.fa-stapler:before{content:\"\\e5af\"}.fa-masks-theater:before,.fa-theater-masks:before{content:\"\\f630\"}.fa-kip-sign:before{content:\"\\e1c4\"}.fa-hand-point-left:before{content:\"\\f0a5\"}.fa-handshake-alt:before,.fa-handshake-simple:before{content:\"\\f4c6\"}.fa-fighter-jet:before,.fa-jet-fighter:before{content:\"\\f0fb\"}.fa-share-alt-square:before,.fa-square-share-nodes:before{content:\"\\f1e1\"}.fa-barcode:before{content:\"\\f02a\"}.fa-plus-minus:before{content:\"\\e43c\"}.fa-video-camera:before,.fa-video:before{content:\"\\f03d\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-hand-holding-medical:before{content:\"\\e05c\"}.fa-person-circle-check:before{content:\"\\e53e\"}.fa-level-up-alt:before,.fa-turn-up:before{content:\"\\f3bf\"}.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host,:root{--fa-style-family-brands:\"Font Awesome 6 Brands\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\"}@font-face{font-family:\"Font Awesome 6 Brands\";font-style:normal;font-weight:400;font-display:block;src:url(../webfonts/fa-brands-400.woff2) format(\"woff2\"), url(../webfonts/fa-brands-400.ttf) format(\"truetype\")}.fa-brands,.fab{font-weight:400}.fa-monero:before{content:\"\\f3d0\"}.fa-hooli:before{content:\"\\f427\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-lastfm:before{content:\"\\f202\"}.fa-shopware:before{content:\"\\f5b5\"}.fa-creative-commons-nc:before{content:\"\\f4e8\"}.fa-aws:before{content:\"\\f375\"}.fa-redhat:before{content:\"\\f7bc\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-cloudflare:before{content:\"\\e07d\"}.fa-ups:before{content:\"\\f7e0\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-dyalog:before{content:\"\\f399\"}.fa-bity:before{content:\"\\f37a\"}.fa-stackpath:before{content:\"\\f842\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-modx:before{content:\"\\f285\"}.fa-guilded:before{content:\"\\e07e\"}.fa-vnv:before{content:\"\\f40b\"}.fa-js-square:before,.fa-square-js:before{content:\"\\f3b9\"}.fa-microsoft:before{content:\"\\f3ca\"}.fa-qq:before{content:\"\\f1d6\"}.fa-orcid:before{content:\"\\f8d2\"}.fa-java:before{content:\"\\f4e4\"}.fa-invision:before{content:\"\\f7b0\"}.fa-creative-commons-pd-alt:before{content:\"\\f4ed\"}.fa-centercode:before{content:\"\\f380\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-hire-a-helper:before{content:\"\\f3b0\"}.fa-creative-commons-by:before{content:\"\\f4e7\"}.fa-unity:before{content:\"\\e049\"}.fa-whmcs:before{content:\"\\f40d\"}.fa-rocketchat:before{content:\"\\f3e8\"}.fa-vk:before{content:\"\\f189\"}.fa-untappd:before{content:\"\\f405\"}.fa-mailchimp:before{content:\"\\f59e\"}.fa-css3-alt:before{content:\"\\f38b\"}.fa-reddit-square:before,.fa-square-reddit:before{content:\"\\f1a2\"}.fa-vimeo-v:before{content:\"\\f27d\"}.fa-contao:before{content:\"\\f26d\"}.fa-square-font-awesome:before{content:\"\\e5ad\"}.fa-deskpro:before{content:\"\\f38f\"}.fa-sistrix:before{content:\"\\f3ee\"}.fa-instagram-square:before,.fa-square-instagram:before{content:\"\\e055\"}.fa-battle-net:before{content:\"\\f835\"}.fa-the-red-yeti:before{content:\"\\f69d\"}.fa-hacker-news-square:before,.fa-square-hacker-news:before{content:\"\\f3af\"}.fa-edge:before{content:\"\\f282\"}.fa-napster:before{content:\"\\f3d2\"}.fa-snapchat-square:before,.fa-square-snapchat:before{content:\"\\f2ad\"}.fa-google-plus-g:before{content:\"\\f0d5\"}.fa-artstation:before{content:\"\\f77a\"}.fa-markdown:before{content:\"\\f60f\"}.fa-sourcetree:before{content:\"\\f7d3\"}.fa-google-plus:before{content:\"\\f2b3\"}.fa-diaspora:before{content:\"\\f791\"}.fa-foursquare:before{content:\"\\f180\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-github-alt:before{content:\"\\f113\"}.fa-phoenix-squadron:before{content:\"\\f511\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-algolia:before{content:\"\\f36c\"}.fa-red-river:before{content:\"\\f3e3\"}.fa-creative-commons-sa:before{content:\"\\f4ef\"}.fa-safari:before{content:\"\\f267\"}.fa-google:before{content:\"\\f1a0\"}.fa-font-awesome-alt:before,.fa-square-font-awesome-stroke:before{content:\"\\f35c\"}.fa-atlassian:before{content:\"\\f77b\"}.fa-linkedin-in:before{content:\"\\f0e1\"}.fa-digital-ocean:before{content:\"\\f391\"}.fa-nimblr:before{content:\"\\f5a8\"}.fa-chromecast:before{content:\"\\f838\"}.fa-evernote:before{content:\"\\f839\"}.fa-hacker-news:before{content:\"\\f1d4\"}.fa-creative-commons-sampling:before{content:\"\\f4f0\"}.fa-adversal:before{content:\"\\f36a\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-watchman-monitoring:before{content:\"\\e087\"}.fa-fonticons:before{content:\"\\f280\"}.fa-weixin:before{content:\"\\f1d7\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-git-alt:before{content:\"\\f841\"}.fa-lyft:before{content:\"\\f3c3\"}.fa-rev:before{content:\"\\f5b2\"}.fa-windows:before{content:\"\\f17a\"}.fa-wizards-of-the-coast:before{content:\"\\f730\"}.fa-square-viadeo:before,.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-meetup:before{content:\"\\f2e0\"}.fa-centos:before{content:\"\\f789\"}.fa-adn:before{content:\"\\f170\"}.fa-cloudsmith:before{content:\"\\f384\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-dribbble-square:before,.fa-square-dribbble:before{content:\"\\f397\"}.fa-codiepie:before{content:\"\\f284\"}.fa-node:before{content:\"\\f419\"}.fa-mix:before{content:\"\\f3cb\"}.fa-steam:before{content:\"\\f1b6\"}.fa-cc-apple-pay:before{content:\"\\f416\"}.fa-scribd:before{content:\"\\f28a\"}.fa-openid:before{content:\"\\f19b\"}.fa-instalod:before{content:\"\\e081\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-sellcast:before{content:\"\\f2da\"}.fa-square-twitter:before,.fa-twitter-square:before{content:\"\\f081\"}.fa-r-project:before{content:\"\\f4f7\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-freebsd:before{content:\"\\f3a4\"}.fa-vuejs:before{content:\"\\f41f\"}.fa-accusoft:before{content:\"\\f369\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-fonticons-fi:before{content:\"\\f3a2\"}.fa-app-store:before{content:\"\\f36f\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-itunes-note:before{content:\"\\f3b5\"}.fa-golang:before{content:\"\\e40f\"}.fa-kickstarter:before{content:\"\\f3bb\"}.fa-grav:before{content:\"\\f2d6\"}.fa-weibo:before{content:\"\\f18a\"}.fa-uncharted:before{content:\"\\e084\"}.fa-firstdraft:before{content:\"\\f3a1\"}.fa-square-youtube:before,.fa-youtube-square:before{content:\"\\f431\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-rendact:before,.fa-wpressr:before{content:\"\\f3e4\"}.fa-angellist:before{content:\"\\f209\"}.fa-galactic-republic:before{content:\"\\f50c\"}.fa-nfc-directional:before{content:\"\\e530\"}.fa-skype:before{content:\"\\f17e\"}.fa-joget:before{content:\"\\f3b7\"}.fa-fedora:before{content:\"\\f798\"}.fa-stripe-s:before{content:\"\\f42a\"}.fa-meta:before{content:\"\\e49b\"}.fa-laravel:before{content:\"\\f3bd\"}.fa-hotjar:before{content:\"\\f3b1\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-sticker-mule:before{content:\"\\f3f7\"}.fa-creative-commons-zero:before{content:\"\\f4f3\"}.fa-hips:before{content:\"\\f452\"}.fa-behance:before{content:\"\\f1b4\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-discord:before{content:\"\\f392\"}.fa-chrome:before{content:\"\\f268\"}.fa-app-store-ios:before{content:\"\\f370\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-confluence:before{content:\"\\f78d\"}.fa-mdb:before{content:\"\\f8ca\"}.fa-dochub:before{content:\"\\f394\"}.fa-accessible-icon:before{content:\"\\f368\"}.fa-ebay:before{content:\"\\f4f4\"}.fa-amazon:before{content:\"\\f270\"}.fa-unsplash:before{content:\"\\e07c\"}.fa-yarn:before{content:\"\\f7e3\"}.fa-square-steam:before,.fa-steam-square:before{content:\"\\f1b7\"}.fa-500px:before{content:\"\\f26e\"}.fa-square-vimeo:before,.fa-vimeo-square:before{content:\"\\f194\"}.fa-asymmetrik:before{content:\"\\f372\"}.fa-font-awesome-flag:before,.fa-font-awesome-logo-full:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-gratipay:before{content:\"\\f184\"}.fa-apple:before{content:\"\\f179\"}.fa-hive:before{content:\"\\e07f\"}.fa-gitkraken:before{content:\"\\f3a6\"}.fa-keybase:before{content:\"\\f4f5\"}.fa-apple-pay:before{content:\"\\f415\"}.fa-padlet:before{content:\"\\e4a0\"}.fa-amazon-pay:before{content:\"\\f42c\"}.fa-github-square:before,.fa-square-github:before{content:\"\\f092\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-fedex:before{content:\"\\f797\"}.fa-phoenix-framework:before{content:\"\\f3dc\"}.fa-shopify:before{content:\"\\e057\"}.fa-neos:before{content:\"\\f612\"}.fa-hackerrank:before{content:\"\\f5f7\"}.fa-researchgate:before{content:\"\\f4f8\"}.fa-swift:before{content:\"\\f8e1\"}.fa-angular:before{content:\"\\f420\"}.fa-speakap:before{content:\"\\f3f3\"}.fa-angrycreative:before{content:\"\\f36e\"}.fa-y-combinator:before{content:\"\\f23b\"}.fa-empire:before{content:\"\\f1d1\"}.fa-envira:before{content:\"\\f299\"}.fa-gitlab-square:before,.fa-square-gitlab:before{content:\"\\e5ae\"}.fa-studiovinari:before{content:\"\\f3f8\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-firefox:before{content:\"\\f269\"}.fa-linode:before{content:\"\\f2b8\"}.fa-goodreads:before{content:\"\\f3a8\"}.fa-odnoklassniki-square:before,.fa-square-odnoklassniki:before{content:\"\\f264\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-sith:before{content:\"\\f512\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-page4:before{content:\"\\f3d7\"}.fa-hashnode:before{content:\"\\e499\"}.fa-react:before{content:\"\\f41b\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-squarespace:before{content:\"\\f5be\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-creative-commons-share:before{content:\"\\f4f2\"}.fa-bitcoin:before{content:\"\\f379\"}.fa-keycdn:before{content:\"\\f3ba\"}.fa-opera:before{content:\"\\f26a\"}.fa-itch-io:before{content:\"\\f83a\"}.fa-umbraco:before{content:\"\\f8e8\"}.fa-galactic-senate:before{content:\"\\f50d\"}.fa-ubuntu:before{content:\"\\f7df\"}.fa-draft2digital:before{content:\"\\f396\"}.fa-stripe:before{content:\"\\f429\"}.fa-houzz:before{content:\"\\f27c\"}.fa-gg:before{content:\"\\f260\"}.fa-dhl:before{content:\"\\f790\"}.fa-pinterest-square:before,.fa-square-pinterest:before{content:\"\\f0d3\"}.fa-xing:before{content:\"\\f168\"}.fa-blackberry:before{content:\"\\f37b\"}.fa-creative-commons-pd:before{content:\"\\f4ec\"}.fa-playstation:before{content:\"\\f3df\"}.fa-quinscape:before{content:\"\\f459\"}.fa-less:before{content:\"\\f41d\"}.fa-blogger-b:before{content:\"\\f37d\"}.fa-opencart:before{content:\"\\f23d\"}.fa-vine:before{content:\"\\f1ca\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-gitlab:before{content:\"\\f296\"}.fa-typo3:before{content:\"\\f42b\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-dailymotion:before{content:\"\\e052\"}.fa-affiliatetheme:before{content:\"\\f36b\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-bootstrap:before{content:\"\\f836\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-nfc-symbol:before{content:\"\\e531\"}.fa-ethereum:before{content:\"\\f42e\"}.fa-speaker-deck:before{content:\"\\f83c\"}.fa-creative-commons-nc-eu:before{content:\"\\f4e9\"}.fa-patreon:before{content:\"\\f3d9\"}.fa-avianex:before{content:\"\\f374\"}.fa-ello:before{content:\"\\f5f1\"}.fa-gofore:before{content:\"\\f3a7\"}.fa-bimobject:before{content:\"\\f378\"}.fa-facebook-f:before{content:\"\\f39e\"}.fa-google-plus-square:before,.fa-square-google-plus:before{content:\"\\f0d4\"}.fa-mandalorian:before{content:\"\\f50f\"}.fa-first-order-alt:before{content:\"\\f50a\"}.fa-osi:before{content:\"\\f41a\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-d-and-d-beyond:before{content:\"\\f6ca\"}.fa-periscope:before{content:\"\\f3da\"}.fa-fulcrum:before{content:\"\\f50b\"}.fa-cloudscale:before{content:\"\\f383\"}.fa-forumbee:before{content:\"\\f211\"}.fa-mizuni:before{content:\"\\f3cc\"}.fa-schlix:before{content:\"\\f3ea\"}.fa-square-xing:before,.fa-xing-square:before{content:\"\\f169\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-wpforms:before{content:\"\\f298\"}.fa-cloudversify:before{content:\"\\f385\"}.fa-usps:before{content:\"\\f7e1\"}.fa-megaport:before{content:\"\\f5a3\"}.fa-magento:before{content:\"\\f3c4\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-fly:before{content:\"\\f417\"}.fa-aviato:before{content:\"\\f421\"}.fa-itunes:before{content:\"\\f3b4\"}.fa-cuttlefish:before{content:\"\\f38c\"}.fa-blogger:before{content:\"\\f37c\"}.fa-flickr:before{content:\"\\f16e\"}.fa-viber:before{content:\"\\f409\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-digg:before{content:\"\\f1a6\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-symfony:before{content:\"\\f83d\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-facebook-messenger:before{content:\"\\f39f\"}.fa-audible:before{content:\"\\f373\"}.fa-think-peaks:before{content:\"\\f731\"}.fa-bilibili:before{content:\"\\e3d9\"}.fa-erlang:before{content:\"\\f39d\"}.fa-cotton-bureau:before{content:\"\\f89e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-42-group:before,.fa-innosoft:before{content:\"\\e080\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-elementor:before{content:\"\\f430\"}.fa-pied-piper-square:before,.fa-square-pied-piper:before{content:\"\\e01e\"}.fa-creative-commons-nd:before{content:\"\\f4eb\"}.fa-palfed:before{content:\"\\f3d8\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-resolving:before{content:\"\\f3e7\"}.fa-xbox:before{content:\"\\f412\"}.fa-searchengin:before{content:\"\\f3eb\"}.fa-tiktok:before{content:\"\\e07b\"}.fa-facebook-square:before,.fa-square-facebook:before{content:\"\\f082\"}.fa-renren:before{content:\"\\f18b\"}.fa-linux:before{content:\"\\f17c\"}.fa-glide:before{content:\"\\f2a5\"}.fa-linkedin:before{content:\"\\f08c\"}.fa-hubspot:before{content:\"\\f3b2\"}.fa-deploydog:before{content:\"\\f38e\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-mixer:before{content:\"\\e056\"}.fa-lastfm-square:before,.fa-square-lastfm:before{content:\"\\f203\"}.fa-vimeo:before{content:\"\\f40a\"}.fa-mendeley:before{content:\"\\f7b3\"}.fa-uniregistry:before{content:\"\\f404\"}.fa-figma:before{content:\"\\f799\"}.fa-creative-commons-remix:before{content:\"\\f4ee\"}.fa-cc-amazon-pay:before{content:\"\\f42d\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-instagram:before{content:\"\\f16d\"}.fa-cmplid:before{content:\"\\e360\"}.fa-facebook:before{content:\"\\f09a\"}.fa-gripfire:before{content:\"\\f3ac\"}.fa-jedi-order:before{content:\"\\f50e\"}.fa-uikit:before{content:\"\\f403\"}.fa-fort-awesome-alt:before{content:\"\\f3a3\"}.fa-phabricator:before{content:\"\\f3db\"}.fa-ussunnah:before{content:\"\\f407\"}.fa-earlybirds:before{content:\"\\f39a\"}.fa-trade-federation:before{content:\"\\f513\"}.fa-autoprefixer:before{content:\"\\f41c\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-google-play:before{content:\"\\f3ab\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-line:before{content:\"\\f3c0\"}.fa-google-drive:before{content:\"\\f3aa\"}.fa-servicestack:before{content:\"\\f3ec\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-deezer:before{content:\"\\e077\"}.fa-raspberry-pi:before{content:\"\\f7bb\"}.fa-jira:before{content:\"\\f7b1\"}.fa-docker:before{content:\"\\f395\"}.fa-screenpal:before{content:\"\\e570\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-gitter:before{content:\"\\f426\"}.fa-d-and-d:before{content:\"\\f38d\"}.fa-microblog:before{content:\"\\e01a\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-pied-piper-hat:before{content:\"\\f4e5\"}.fa-kickstarter-k:before{content:\"\\f3bc\"}.fa-yandex:before{content:\"\\f413\"}.fa-readme:before{content:\"\\f4d5\"}.fa-html5:before{content:\"\\f13b\"}.fa-sellsy:before{content:\"\\f213\"}.fa-sass:before{content:\"\\f41e\"}.fa-wirsindhandwerk:before,.fa-wsh:before{content:\"\\e2d0\"}.fa-buromobelexperte:before{content:\"\\f37f\"}.fa-salesforce:before{content:\"\\f83b\"}.fa-octopus-deploy:before{content:\"\\e082\"}.fa-medapps:before{content:\"\\f3c6\"}.fa-ns8:before{content:\"\\f3d5\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-apper:before{content:\"\\f371\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-waze:before{content:\"\\f83f\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-snapchat-ghost:before,.fa-snapchat:before{content:\"\\f2ab\"}.fa-fantasy-flight-games:before{content:\"\\f6dc\"}.fa-rust:before{content:\"\\e07a\"}.fa-wix:before{content:\"\\f5cf\"}.fa-behance-square:before,.fa-square-behance:before{content:\"\\f1b5\"}.fa-supple:before{content:\"\\f3f9\"}.fa-rebel:before{content:\"\\f1d0\"}.fa-css3:before{content:\"\\f13c\"}.fa-staylinked:before{content:\"\\f3f5\"}.fa-kaggle:before{content:\"\\f5fa\"}.fa-space-awesome:before{content:\"\\e5ac\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-cpanel:before{content:\"\\f388\"}.fa-goodreads-g:before{content:\"\\f3a9\"}.fa-git-square:before,.fa-square-git:before{content:\"\\f1d2\"}.fa-square-tumblr:before,.fa-tumblr-square:before{content:\"\\f174\"}.fa-trello:before{content:\"\\f181\"}.fa-creative-commons-nc-jp:before{content:\"\\f4ea\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-perbyte:before{content:\"\\e083\"}.fa-grunt:before{content:\"\\f3ad\"}.fa-weebly:before{content:\"\\f5cc\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-leanpub:before{content:\"\\f212\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-themeco:before{content:\"\\f5c6\"}.fa-python:before{content:\"\\f3e2\"}.fa-android:before{content:\"\\f17b\"}.fa-bots:before{content:\"\\e340\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-hornbill:before{content:\"\\f592\"}.fa-js:before{content:\"\\f3b8\"}.fa-ideal:before{content:\"\\e013\"}.fa-git:before{content:\"\\f1d3\"}.fa-dev:before{content:\"\\f6cc\"}.fa-sketch:before{content:\"\\f7c6\"}.fa-yandex-international:before{content:\"\\f414\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-uber:before{content:\"\\f402\"}.fa-github:before{content:\"\\f09b\"}.fa-php:before{content:\"\\f457\"}.fa-alipay:before{content:\"\\f642\"}.fa-youtube:before{content:\"\\f167\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-firefox-browser:before{content:\"\\e007\"}.fa-replyd:before{content:\"\\f3e6\"}.fa-suse:before{content:\"\\f7d6\"}.fa-jenkins:before{content:\"\\f3b6\"}.fa-twitter:before{content:\"\\f099\"}.fa-rockrms:before{content:\"\\f3e9\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-buffer:before{content:\"\\f837\"}.fa-npm:before{content:\"\\f3d4\"}.fa-yammer:before{content:\"\\f840\"}.fa-btc:before{content:\"\\f15a\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-stubber:before{content:\"\\e5c7\"}.fa-telegram-plane:before,.fa-telegram:before{content:\"\\f2c6\"}.fa-old-republic:before{content:\"\\f510\"}.fa-odysee:before{content:\"\\e5c6\"}.fa-square-whatsapp:before,.fa-whatsapp-square:before{content:\"\\f40c\"}.fa-node-js:before{content:\"\\f3d3\"}.fa-edge-legacy:before{content:\"\\e078\"}.fa-slack-hash:before,.fa-slack:before{content:\"\\f198\"}.fa-medrt:before{content:\"\\f3c8\"}.fa-usb:before{content:\"\\f287\"}.fa-tumblr:before{content:\"\\f173\"}.fa-vaadin:before{content:\"\\f408\"}.fa-quora:before{content:\"\\f2c4\"}.fa-reacteurope:before{content:\"\\f75d\"}.fa-medium-m:before,.fa-medium:before{content:\"\\f23a\"}.fa-amilia:before{content:\"\\f36d\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-flipboard:before{content:\"\\f44d\"}.fa-viacoin:before{content:\"\\f237\"}.fa-critical-role:before{content:\"\\f6c9\"}.fa-sitrox:before{content:\"\\e44a\"}.fa-discourse:before{content:\"\\f393\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-mastodon:before{content:\"\\f4f6\"}.fa-airbnb:before{content:\"\\f834\"}.fa-wolf-pack-battalion:before{content:\"\\f514\"}.fa-buy-n-large:before{content:\"\\f8a6\"}.fa-gulp:before{content:\"\\f3ae\"}.fa-creative-commons-sampling-plus:before{content:\"\\f4f1\"}.fa-strava:before{content:\"\\f428\"}.fa-ember:before{content:\"\\f423\"}.fa-canadian-maple-leaf:before{content:\"\\f785\"}.fa-teamspeak:before{content:\"\\f4f9\"}.fa-pushed:before{content:\"\\f3e1\"}.fa-wordpress-simple:before{content:\"\\f411\"}.fa-nutritionix:before{content:\"\\f3d6\"}.fa-wodu:before{content:\"\\e088\"}.fa-google-pay:before{content:\"\\e079\"}.fa-intercom:before{content:\"\\f7af\"}.fa-zhihu:before{content:\"\\f63f\"}.fa-korvue:before{content:\"\\f42f\"}.fa-pix:before{content:\"\\e43a\"}.fa-steam-symbol:before{content:\"\\f3f6\"}:host,:root{--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Free\"}@font-face{font-family:\"Font Awesome 6 Free\";font-style:normal;font-weight:400;font-display:block;src:url(../webfonts/fa-regular-400.woff2) format(\"woff2\"), url(../webfonts/fa-regular-400.ttf) format(\"truetype\")}.fa-regular,.far{font-weight:400}:host,:root{--fa-style-family-classic:\"Font Awesome 6 Free\";--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Free\"}@font-face{font-family:\"Font Awesome 6 Free\";font-style:normal;font-weight:900;font-display:block;src:url(../webfonts/fa-solid-900.woff2) format(\"woff2\"), url(../webfonts/fa-solid-900.ttf) format(\"truetype\")}.fa-solid,.fas{font-weight:900}@font-face{font-family:\"Font Awesome 5 Brands\";font-display:block;font-weight:400;src:url(../webfonts/fa-brands-400.woff2) format(\"woff2\"), url(../webfonts/fa-brands-400.ttf) format(\"truetype\")}@font-face{font-family:\"Font Awesome 5 Free\";font-display:block;font-weight:900;src:url(../webfonts/fa-solid-900.woff2) format(\"woff2\"), url(../webfonts/fa-solid-900.ttf) format(\"truetype\")}@font-face{font-family:\"Font Awesome 5 Free\";font-display:block;font-weight:400;src:url(../webfonts/fa-regular-400.woff2) format(\"woff2\"), url(../webfonts/fa-regular-400.ttf) format(\"truetype\")}@font-face{font-family:\"FontAwesome\";font-display:block;src:url(../webfonts/fa-solid-900.woff2) format(\"woff2\"), url(../webfonts/fa-solid-900.ttf) format(\"truetype\")}@font-face{font-family:\"FontAwesome\";font-display:block;src:url(../webfonts/fa-brands-400.woff2) format(\"woff2\"), url(../webfonts/fa-brands-400.ttf) format(\"truetype\")}@font-face{font-family:\"FontAwesome\";font-display:block;src:url(../webfonts/fa-regular-400.woff2) format(\"woff2\"), url(../webfonts/fa-regular-400.ttf) format(\"truetype\");unicode-range:u+f003, u+f006, u+f014, u+f016-f017, u+f01a-f01b, u+f01d, u+f022, u+f03e, u+f044, u+f046, u+f05c-f05d, u+f06e, u+f070, u+f087-f088, u+f08a, u+f094, u+f096-f097, u+f09d, u+f0a0, u+f0a2, u+f0a4-f0a7, u+f0c5, u+f0c7, u+f0e5-f0e6, u+f0eb, u+f0f6-f0f8, u+f10c, u+f114-f115, u+f118-f11a, u+f11c-f11d, u+f133, u+f147, u+f14e, u+f150-f152, u+f185-f186, u+f18e, u+f190-f192, u+f196, u+f1c1-f1c9, u+f1d9, u+f1db, u+f1e3, u+f1ea, u+f1f7, u+f1f9, u+f20a, u+f247-f248, u+f24a, u+f24d, u+f255-f25b, u+f25d, u+f271-f274, u+f278, u+f27b, u+f28c, u+f28e, u+f29c, u+f2b5, u+f2b7, u+f2ba, u+f2bc, u+f2be, u+f2c0-f2c1, u+f2c3, u+f2d0, u+f2d2, u+f2d4, u+f2dc}@font-face{font-family:\"FontAwesome\";font-display:block;src:url(../webfonts/fa-v4compatibility.woff2) format(\"woff2\"), url(../webfonts/fa-v4compatibility.ttf) format(\"truetype\");unicode-range:u+f041, u+f047, u+f065-f066, u+f07d-f07e, u+f080, u+f08b, u+f08e, u+f090, u+f09a, u+f0ac, u+f0ae, u+f0b2, u+f0d0, u+f0d6, u+f0e4, u+f0ec, u+f10a-f10b, u+f123, u+f13e, u+f148-f149, u+f14c, u+f156, u+f15e, u+f160-f161, u+f163, u+f175-f178, u+f195, u+f1f8, u+f219, u+f27a}:host .gcds-icon{font-family:var(--gcds-icon-font-family);font-size:inherit;line-height:inherit;color:inherit;}:host .gcds-icon.ml-0{-webkit-margin-start:var(--gcds-icon-margin-0);margin-inline-start:var(--gcds-icon-margin-0)}:host .gcds-icon.ml-50{-webkit-margin-start:var(--gcds-icon-margin-50);margin-inline-start:var(--gcds-icon-margin-50)}:host .gcds-icon.ml-100{-webkit-margin-start:var(--gcds-icon-margin-100);margin-inline-start:var(--gcds-icon-margin-100)}:host .gcds-icon.ml-150{-webkit-margin-start:var(--gcds-icon-margin-150);margin-inline-start:var(--gcds-icon-margin-150)}:host .gcds-icon.ml-200{-webkit-margin-start:var(--gcds-icon-margin-200);margin-inline-start:var(--gcds-icon-margin-200)}:host .gcds-icon.ml-250{-webkit-margin-start:var(--gcds-icon-margin-250);margin-inline-start:var(--gcds-icon-margin-250)}:host .gcds-icon.ml-300{-webkit-margin-start:var(--gcds-icon-margin-300);margin-inline-start:var(--gcds-icon-margin-300)}:host .gcds-icon.ml-400{-webkit-margin-start:var(--gcds-icon-margin-400);margin-inline-start:var(--gcds-icon-margin-400)}:host .gcds-icon.ml-450{-webkit-margin-start:var(--gcds-icon-margin-450);margin-inline-start:var(--gcds-icon-margin-450)}:host .gcds-icon.ml-500{-webkit-margin-start:var(--gcds-icon-margin-500);margin-inline-start:var(--gcds-icon-margin-500)}:host .gcds-icon.ml-550{-webkit-margin-start:var(--gcds-icon-margin-550);margin-inline-start:var(--gcds-icon-margin-550)}:host .gcds-icon.ml-600{-webkit-margin-start:var(--gcds-icon-margin-600);margin-inline-start:var(--gcds-icon-margin-600)}:host .gcds-icon.ml-700{-webkit-margin-start:var(--gcds-icon-margin-700);margin-inline-start:var(--gcds-icon-margin-700)}:host .gcds-icon.ml-800{-webkit-margin-start:var(--gcds-icon-margin-800);margin-inline-start:var(--gcds-icon-margin-800)}:host .gcds-icon.ml-900{-webkit-margin-start:var(--gcds-icon-margin-900);margin-inline-start:var(--gcds-icon-margin-900)}:host .gcds-icon.ml-1000{-webkit-margin-start:var(--gcds-icon-margin-1000);margin-inline-start:var(--gcds-icon-margin-1000)}:host .gcds-icon.mr-0{-webkit-margin-end:var(--gcds-icon-margin-0);margin-inline-end:var(--gcds-icon-margin-0)}:host .gcds-icon.mr-50{-webkit-margin-end:var(--gcds-icon-margin-50);margin-inline-end:var(--gcds-icon-margin-50)}:host .gcds-icon.mr-100{-webkit-margin-end:var(--gcds-icon-margin-100);margin-inline-end:var(--gcds-icon-margin-100)}:host .gcds-icon.mr-150{-webkit-margin-end:var(--gcds-icon-margin-150);margin-inline-end:var(--gcds-icon-margin-150)}:host .gcds-icon.mr-200{-webkit-margin-end:var(--gcds-icon-margin-200);margin-inline-end:var(--gcds-icon-margin-200)}:host .gcds-icon.mr-250{-webkit-margin-end:var(--gcds-icon-margin-250);margin-inline-end:var(--gcds-icon-margin-250)}:host .gcds-icon.mr-300{-webkit-margin-end:var(--gcds-icon-margin-300);margin-inline-end:var(--gcds-icon-margin-300)}:host .gcds-icon.mr-400{-webkit-margin-end:var(--gcds-icon-margin-400);margin-inline-end:var(--gcds-icon-margin-400)}:host .gcds-icon.mr-450{-webkit-margin-end:var(--gcds-icon-margin-450);margin-inline-end:var(--gcds-icon-margin-450)}:host .gcds-icon.mr-500{-webkit-margin-end:var(--gcds-icon-margin-500);margin-inline-end:var(--gcds-icon-margin-500)}:host .gcds-icon.mr-550{-webkit-margin-end:var(--gcds-icon-margin-550);margin-inline-end:var(--gcds-icon-margin-550)}:host .gcds-icon.mr-600{-webkit-margin-end:var(--gcds-icon-margin-600);margin-inline-end:var(--gcds-icon-margin-600)}:host .gcds-icon.mr-700{-webkit-margin-end:var(--gcds-icon-margin-700);margin-inline-end:var(--gcds-icon-margin-700)}:host .gcds-icon.mr-800{-webkit-margin-end:var(--gcds-icon-margin-800);margin-inline-end:var(--gcds-icon-margin-800)}:host .gcds-icon.mr-900{-webkit-margin-end:var(--gcds-icon-margin-900);margin-inline-end:var(--gcds-icon-margin-900)}:host .gcds-icon.mr-1000{-webkit-margin-end:var(--gcds-icon-margin-1000);margin-inline-end:var(--gcds-icon-margin-1000)}:host .gcds-icon.fixed-width{text-align:center}:host .gcds-icon.size-caption.fixed-width{width:calc(var(--gcds-icon-fixed-width-caption) * 1em)}:host .gcds-icon.size-text.fixed-width{width:calc(var(--gcds-icon-fixed-width-text) * 1em)}:host .gcds-icon.size-h6.fixed-width{width:calc(var(--gcds-icon-fixed-width-h6) * 1em)}:host .gcds-icon.size-h5.fixed-width{width:calc(var(--gcds-icon-fixed-width-h5) * 1em)}:host .gcds-icon.size-h4.fixed-width{width:calc(var(--gcds-icon-fixed-width-h4) * 1em)}:host .gcds-icon.size-h3.fixed-width{width:calc(var(--gcds-icon-fixed-width-h3) * 1em)}:host .gcds-icon.size-h2.fixed-width{width:calc(var(--gcds-icon-fixed-width-h2) * 1em)}:host .gcds-icon.size-h1.fixed-width{width:calc(var(--gcds-icon-fixed-width-h1) * 1em)}:host .gcds-icon.size-caption{font-size:var(--gcds-icon-font-size-caption);line-height:var(--gcds-icon-line-height-caption)}:host .gcds-icon.size-text{font-size:var(--gcds-icon-font-size-text);line-height:var(--gcds-icon-line-height-text)}:host .gcds-icon.size-h6{font-size:var(--gcds-icon-font-size-h6);line-height:var(--gcds-icon-line-height-h6)}:host .gcds-icon.size-h5{font-size:var(--gcds-icon-font-size-h5);line-height:var(--gcds-icon-line-height-h5)}:host .gcds-icon.size-h4{font-size:var(--gcds-icon-font-size-h4);line-height:var(--gcds-icon-line-height-h4)}:host .gcds-icon.size-h3{font-size:var(--gcds-icon-font-size-h3);line-height:var(--gcds-icon-line-height-h3)}:host .gcds-icon.size-h2{font-size:var(--gcds-icon-font-size-h2);line-height:var(--gcds-icon-line-height-h2)}:host .gcds-icon.size-h1{font-size:var(--gcds-icon-font-size-h1);line-height:var(--gcds-icon-line-height-h1)}";

const GcdsIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconStyle = 'solid';
    this.label = undefined;
    this.marginLeft = undefined;
    this.marginRight = undefined;
    this.name = undefined;
    this.fixedWidth = false;
    this.size = 'text';
  }
  render() {
    const { iconStyle, label, marginLeft, marginRight, name, fixedWidth, size } = this;
    return (h(Host, null, h("span", { class: `
            gcds-icon fa fa-${iconStyle} fa-${name}
            ${marginLeft ? `ml-${marginLeft}` : ''}
            ${marginRight ? `mr-${marginRight}` : ''}
            ${size ? `size-${size}` : ''}
            ${fixedWidth ? `fixed-width` : ''}
          `, role: "img", "aria-label": label ? label : false, "aria-hidden": label ? 'false' : 'true' })));
  }
  get el() { return getElement(this); }
};
GcdsIcon.style = gcdsIconCss;

const gcdsInputCss = ".sc-gcds-input-h .gcds-input-wrapper.sc-gcds-input{border:0;color:var(--gcds-input-default-text);font:var(--gcds-input-font);margin:0;max-width:90%;padding:0;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out;width:75ch}.sc-gcds-input-h .gcds-input-wrapper.sc-gcds-input:focus-within{color:var(--gcds-input-focus-text)}.sc-gcds-input-h .gcds-input-wrapper.gcds-disabled.sc-gcds-input{color:var(--gcds-input-disabled-text)}.sc-gcds-input-h input.sc-gcds-input{background-color:var(--gcds-input-default-background);background-image:none;border:var(--gcds-input-border-width) solid;border-radius:var(--gcds-input-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--gcds-input-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-input-margin);max-width:100%;min-height:var(--gcds-input-min-width-and-height);min-width:var(--gcds-input-min-width-and-height);padding:var(--gcds-input-padding);-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;width:100%}.sc-gcds-input-h input.sc-gcds-input:focus{border-color:var(--gcds-input-focus-text);outline:var(--gcds-input-outline-width) solid var(--gcds-input-focus-text);outline-offset:var(--gcds-input-border-width)}.sc-gcds-input-h input.sc-gcds-input:disabled{background-color:var(--gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}.sc-gcds-input-h input.gcds-error.sc-gcds-input:not(:focus){border-color:var(--gcds-input-danger-border)}";

const GcdsInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsChange = createEvent(this, "gcdsChange", 7);
    this.gcdsError = createEvent(this, "gcdsError", 7);
    this.gcdsValid = createEvent(this, "gcdsValid", 7);
    this._validator = defaultValidator;
    this.onFocus = (e) => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = (e) => {
      if (this.blurHandler) {
        this.blurHandler(e);
      }
      else {
        if (this.validateOn == "blur") {
          this.validate();
        }
      }
      this.gcdsBlur.emit();
    };
    this.disabled = false;
    this.errorMessage = undefined;
    this.hideLabel = false;
    this.hint = undefined;
    this.inputId = undefined;
    this.label = undefined;
    this.required = false;
    this.size = undefined;
    this.type = 'text';
    this.value = undefined;
    this.autocomplete = undefined;
    this.changeHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.inheritedAttributes = {};
    this.hasError = undefined;
    this.lang = undefined;
  }
  validateDisabledInput() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    }
    else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
    else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
    * Call any active validators
    */
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({ id: `#${this.inputId}`, message: `${this.label} - ${this.errorMessage}` });
    }
    else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.inputId}` });
    }
  }
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
      }
    }
  }
  handleChange(e) {
    if (this.changeHandler) {
      this.changeHandler(e);
    }
    else {
      let val = e.target && e.target.value;
      this.value = val;
    }
    this.gcdsChange.emit(this.value);
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
    this.validateDisabledInput();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, "input", this.type);
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, ['placeholder']);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { disabled, errorMessage, hideLabel, hint, inputId, label, required, size, type, value, hasError, autocomplete, inheritedAttributes, lang } = this;
    // Use max-width instead of size attribute to keep field responsive
    const style = {
      maxWidth: `${size * 1.5}ch`
    };
    const attrsInput = Object.assign({ disabled,
      required,
      type,
      value,
      autocomplete }, inheritedAttributes);
    const attrsLabel = {
      label,
      required,
    };
    if (hint || errorMessage) {
      let hintID = hint ? `hint-${inputId} ` : "";
      let errorID = errorMessage ? `error-message-${inputId} ` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${attrsInput["aria-describedby"] ? ` ${attrsInput["aria-describedby"]}` : ""}`;
    }
    return (h(Host, null, h("div", { class: `gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": inputId }) : null, errorMessage ?
      h("gcds-error-message", { messageId: inputId, message: errorMessage })
      : null, h("input", Object.assign({}, attrsInput, { class: hasError ? 'gcds-error' : null, id: inputId, name: inputId, onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: size, style: size ? style : null, ref: element => this.shadowElement = element })))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["validateDisabledInput"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }; }
};
GcdsInput.style = gcdsInputCss;

const I18N$a = {
  "en": {
    required: "required",
  },
  "fr": {
    required: "obligatoire",
  }
};

const gcdsLabelCss = ".sc-gcds-label-h .gcds-label.sc-gcds-label{color:inherit;display:block;font:var(--gcds-label-font);margin:var(--gcds-label-margin);max-width:100%}.sc-gcds-label-h .gcds-label.label--hidden.sc-gcds-label{height:0;margin:0;opacity:0;overflow:hidden;width:0}.sc-gcds-label-h .gcds-label.sc-gcds-label .label--required.sc-gcds-label{margin:var(--gcds-label-required-margin)}gcds-checkbox .sc-gcds-label-h label.sc-gcds-label,gcds-radio .sc-gcds-label-h label.sc-gcds-label{cursor:pointer}";

const GcdsLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = (ev) => {
      if (ev.srcElement.tagName == "GCDS-LABEL") {
        this.clickEl();
      }
    };
    this.hideLabel = undefined;
    this.label = undefined;
    this.labelFor = undefined;
    this.required = undefined;
    this.lang = undefined;
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
  }
  /**
   * Click label if host element is clicked
   */
  clickEl() {
    if (this.focusEl) {
      this.focusEl.click();
    }
  }
  render() {
    const { hideLabel, labelFor, label, required, lang } = this;
    return (h(Host, { id: `label-for-${labelFor}`, onClick: this.onClick }, h("label", { htmlFor: labelFor, class: `gcds-label ${hideLabel ? 'label--hidden' : ''}`, ref: (focusEl) => (this.focusEl = focusEl) }, h("span", null, label), required ?
      h("span", { "aria-hidden": "true", class: "label--required" }, "(", I18N$a[lang].required, ")")
      : null)));
  }
  get el() { return getElement(this); }
};
GcdsLabel.style = gcdsLabelCss;

const I18N$9 = {
  "en": {
    abbreviation: "fr",
    heading: "Language Selection",
    language: "Français",
  },
  "fr": {
    abbreviation: "en",
    heading: "Sélection de la langue",
    language: "English",
  }
};

const gcdsLangToggleCss = ":host{display:block;font:var(--gcds-lang-toggle-font)}:host h2{margin:0;overflow:hidden;position:absolute;width:0}:host a{color:var(--gcds-lang-toggle-default-text);padding:var(--gcds-lang-toggle-padding);text-decoration:underline;-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-lang-toggle-default-decoration-thickness);text-underline-offset:.2em}:host a span{display:none}:host a abbr{text-decoration:none;text-transform:uppercase}:host a:hover{color:var(--gcds-lang-toggle-hover-text);text-decoration-thickness:var(--gcds-lang-toggle-hover-decoration-thickness)}:host a:focus{background-color:var(--gcds-lang-toggle-focus-background);border-radius:var(--gcds-lang-toggle-focus-border-radius);-webkit-box-shadow:var(--gcds-lang-toggle-focus-box-shadow);box-shadow:var(--gcds-lang-toggle-focus-box-shadow);color:var(--gcds-lang-toggle-focus-text);outline:var(--gcds-lang-toggle-focus-outline);outline-offset:var(--gcds-lang-toggle-focus-outline-offset);text-decoration:none}@media screen and (min-width:64em){:host a{padding:0}:host a span{display:inherit}:host a abbr{display:none}}";

const GcdsLangToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = undefined;
    this.lang = undefined;
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
  }
  render() {
    const { lang, href } = this;
    return (h(Host, null, h("div", null, h("h2", null, I18N$9[lang].heading), h("a", { href: href, lang: I18N$9[lang].abbreviation }, h("span", null, I18N$9[lang].language), h("abbr", { title: I18N$9[lang].language }, I18N$9[lang].abbreviation)))));
  }
  get el() { return getElement(this); }
};
GcdsLangToggle.style = gcdsLangToggleCss;

const I18N$8 = {
  "en": {
      submenu: ". Open or close {$t}."
  },
  "fr": {
      submenu: ". Ouvrir ou fermer {$t}."
  }
};

const gcdsNavGroupCss = "@layer reset, defaults, variants, mobile, state.hover, state.focus;@layer reset{:host *{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}}@layer defaults{:host{-ms-flex-item-align:end;align-self:flex-end;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}:host .gcds-nav-group__trigger{-ms-flex-align:center;align-items:center;background:transparent;border:none;color:var(--gcds-nav-group-trigger-text);cursor:pointer;display:-ms-flexbox;display:flex;font:var(--gcds-nav-group-trigger-font);padding:var(--gcds-nav-group-trigger-padding);text-align:left;width:100%}@media only screen and (width >= 64em){:host .gcds-nav-group__trigger{max-width:var(--gcds-nav-group-trigger-max-width)}}:host .gcds-nav-group__trigger[aria-expanded=false]+.gcds-nav-group__list{display:none}:host .gcds-nav-group__trigger-desc{display:none}}@layer variants{:host .gcds-trigger--dropdown{-webkit-border-after:var(--gcds-nav-group-top-nav-trigger-border-width) solid transparent;border-block-end:var(--gcds-nav-group-top-nav-trigger-border-width) solid transparent;-webkit-margin-start:var(--gcds-nav-group-top-nav-trigger-margin-inline-start);margin-inline-start:var(--gcds-nav-group-top-nav-trigger-margin-inline-start);padding:var(--gcds-nav-group-top-nav-trigger-padding);-webkit-text-decoration:underline solid currentColor var(--gcds-nav-group-top-nav-trigger-decoration-thickness);text-decoration:underline solid currentColor var(--gcds-nav-group-top-nav-trigger-decoration-thickness);-webkit-text-decoration-color:transparent;text-decoration-color:transparent;text-underline-offset:var(--gcds-nav-group-top-nav-trigger-underline-offset);-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}:host .gcds-trigger--dropdown gcds-icon{-webkit-margin-start:var(--gcds-nav-group-top-nav-trigger-icon-margin);margin-inline-start:var(--gcds-nav-group-top-nav-trigger-icon-margin);-ms-flex-order:2;order:2}:host .gcds-trigger--dropdown[aria-expanded=true]{background-color:var(--gcds-nav-group-top-nav-trigger-expanded-background-color)}@media only screen and (width >= 64em){:host .gcds-nav--dropdown{background-color:var(--gcds-nav-group-top-nav-dropdown-background);border-radius:var(--gcds-border-radius-md);-webkit-box-shadow:var(--gcds-nav-group-top-nav-dropdown-box-shadow);box-shadow:var(--gcds-nav-group-top-nav-dropdown-box-shadow);-webkit-margin-before:var(--gcds-spacing-200);margin-block-start:var(--gcds-spacing-200);padding:var(--gcds-nav-group-top-nav-dropdown-padding);position:absolute;top:100%;width:var(--gcds-nav-group-top-nav-dropdown-width);z-index:1}}@media only screen and (width >= 64em) and (width < 96em){:host .gcds-nav--dropdown{right:0}}:host .gcds-trigger--expandable{font-weight:var(--gcds-nav-group-side-nav-trigger-font-weight);-webkit-margin-after:var(--gcds-nav-group-side-nav-trigger-margin);margin-block-end:var(--gcds-nav-group-side-nav-trigger-margin)}:host .gcds-trigger--expandable gcds-icon{-webkit-margin-end:var(--gcds-nav-group-side-nav-trigger-icon-margin);margin-inline-end:var(--gcds-nav-group-side-nav-trigger-icon-margin)}@media only screen and (width >= 64em){:host .gcds-nav--expandable{-webkit-padding-start:var(--gcds-nav-group-side-nav-dropdown-padding);padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}}}@layer mobile{:host(.gcds-mobile-nav){width:100%}:host(.gcds-mobile-nav.gcds-nav-group-expanded){background-color:var(--gcds-nav-group-mobile-background);height:100vh;left:0;overflow-y:scroll;padding:var(--gcds-nav-group-mobile-padding);position:fixed;top:0;width:100%;z-index:100}@media only screen and (width < 64em){:host(.gcds-nav-group-expanded:not(.gcds-mobile-nav)) .gcds-nav-group__list{-webkit-padding-start:var(--gcds-nav-group-side-nav-dropdown-padding);padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}}:host(.gcds-mobile-nav) .gcds-trigger--expandable{border:var(--gcds-nav-group-mobile-trigger-border-width) solid;border-radius:var(--gcds-nav-group-mobile-trigger-border-radius);color:var(--gcds-nav-group-mobile-trigger-text);-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:center;justify-content:center;-webkit-margin-before:var(--gcds-nav-group-mobile-trigger-margin);margin-block-start:var(--gcds-nav-group-mobile-trigger-margin);text-align:center}@media only screen and (width >= 64em){:host(.gcds-mobile-nav) .gcds-trigger--expandable{display:none}}@media only screen and (48em < width < 64em){:host(.gcds-mobile-nav) .gcds-trigger--expandable{-ms-flex-item-align:start;align-self:flex-start;width:auto}}:host(.gcds-mobile-nav) .gcds-trigger--expandable gcds-icon{display:none}@media only screen and (width >= 64em){:host(.gcds-mobile-nav)>.gcds-nav--expandable{display:block;padding:0}}@media only screen and (width < 64em){:host(.gcds-mobile-nav)>.gcds-nav--expandable{margin:var(--gcds-nav-group-mobile-list-margin)}}@media only screen and (width >= 64em){:host(.gcds-mobile-nav-topnav)>.gcds-nav--expandable{display:-ms-flexbox;display:flex}}}@layer state.hover{@media (hover:hover){:host .gcds-nav-group__trigger:hover{color:var(--gcds-nav-group-trigger-hover-text)}:host .gcds-trigger--dropdown:hover{color:var(--gcds-nav-group-top-nav-trigger-hover-text);-webkit-text-decoration-color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-thickness:var(--gcds-nav-group-top-nav-trigger-hover-decoration-thickness)}:host .gcds-trigger--expandable:hover{background-color:var(--gcds-nav-group-side-nav-trigger-hover-background)}}}@layer state.focus{:host .gcds-nav-group__trigger:focus{background-color:var(--gcds-nav-group-trigger-focus-background);border-color:var(--gcds-nav-group-trigger-focus-background);border-radius:var(--gcds-nav-group-trigger-focus-border-radius);-webkit-box-shadow:var(--gcds-nav-group-trigger-focus-box-shadow);box-shadow:var(--gcds-nav-group-trigger-focus-box-shadow);color:var(--gcds-nav-group-trigger-focus-text);outline:var(--gcds-nav-group-trigger-focus-outline);outline-offset:var(--gcds-nav-group-trigger-focus-outline-offset);text-decoration:none}}";

const GcdsNavGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      if (this.el.children[i].nodeName == "GCDS-NAV-GROUP" && (this.el.children[i].hasAttribute("open"))) {
        this.el.children[i].toggleNav();
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    if (this.el.parentNode.nodeName == "GCDS-TOP-NAV") {
      this.navStyle = "dropdown";
      if (this.open) {
        this.open = false;
      }
    }
    else {
      this.navStyle = "expandable";
    }
    if (this.el.parentNode.nodeName == "GCDS-NAV-GROUP" && !this.el.parentNode.classList.contains("gcds-mobile-nav") && this.el.closest("gcds-top-nav")) {
      this.el.remove();
    }
  }
  render() {
    const { closeTrigger, menuLabel, open, openTrigger, lang } = this;
    return (h(Host, { role: "presentation", open: open, class: open && "gcds-nav-group-expanded" }, h("button", { "aria-haspopup": "true", "aria-expanded": open.toString(), role: "menuitem", "aria-describedby": "trigger-controls", ref: element => this.triggerElement = element, class: `gcds-nav-group__trigger gcds-trigger--${this.navStyle}`, onClick: () => {
        this.toggleNav();
        this.gcdsClick.emit();
      } }, h("gcds-icon", { name: open ? 'angle-up' : 'angle-down' }), closeTrigger && open ? closeTrigger : openTrigger), h("ul", { role: "menu", "aria-label": menuLabel, class: `gcds-nav-group__list gcds-nav--${this.navStyle}` }, h("slot", null)), h("span", { "aria-hidden": "true", id: `trigger-controls`, class: "gcds-nav-group__trigger-desc" }, I18N$8[lang].submenu.replace('{$t}', menuLabel))));
  }
  get el() { return getElement(this); }
};
GcdsNavGroup.style = gcdsNavGroupCss;

const gcdsNavLinkCss = "@layer reset, defaults, variants, state.hover, state.active, state.focus;@layer reset{:host a{-webkit-box-sizing:border-box;box-sizing:border-box}}@layer defaults{:host a{border-inline:var(--gcds-nav-link-border-width) solid transparent;color:var(--gcds-nav-link-default-text);display:-ms-flexbox;display:flex;font:var(---gcds-nav-link-font);-webkit-margin-after:var(--gcds-nav-link-margin);margin-block-end:var(--gcds-nav-link-margin);padding:var(--gcds-nav-link-padding);-webkit-text-decoration:underline solid currentColor var(--gcds-nav-link-default-decoration-thickness);text-decoration:underline solid currentColor var(--gcds-nav-link-default-decoration-thickness);text-underline-offset:var(--gcds-nav-link-default-underline-offset);-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}@media only screen and (width < 64em){:host a{min-width:50%}}@media only screen and (width > 48em){:host a{max-width:var(--gcds-nav-link-default-max-width)}}:host a[aria-current=page]{pointer-events:none;text-decoration:none}}@layer variants{@media only screen and (width >= 64em){:host(.gcds-nav-link--topnav)>a{-webkit-border-after:var(--gcds-nav-link-border-width) solid transparent;border-block-end:var(--gcds-nav-link-border-width) solid transparent;border-inline:0;color:var(--gcds-nav-link-top-nav-text);margin:var(--gcds-nav-link-top-nav-margin);padding:var(--gcds-nav-link-top-nav-padding)}:host(.gcds-nav-link--topnav)>a:not(:hover){-webkit-text-decoration-color:transparent;text-decoration-color:transparent}:host(.gcds-nav-link--home)>a{font:var(--gcds-nav-link-top-nav-home-font);padding:var(--gcds-nav-link-top-nav-home-padding)}}:host(.gcds-nav-link--sidenav)>a{padding:var(--gcds-nav-link-side-nav-padding)}}@layer state.hover{@media (hover:hover){:host a:hover{color:var(--gcds-nav-link-hover-text);text-decoration-thickness:var(--gcds-nav-link-hover-decoration-thickness)}:host(.gcds-nav-link--dropdown)>a:hover,:host(.gcds-nav-link--sidenav)>a:hover{color:var(--gcds-nav-link-hover-text)}:host(.gcds-nav-link--sidenav)>a:hover{background-color:var(--gcds-nav-link-side-nav-hover-background)}:host(.gcds-nav-link--dropdown)>a:hover{background-color:var(--gcds-nav-link-top-nav-hover-background)}}}@layer state.active{:host a[aria-current=page]{background-color:var(--gcds-nav-link-active-background);border-inline-start-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-active-text);font-weight:var(--gcds-nav-link-active-font-weight)}@media only screen and (width >= 64em){:host(.gcds-nav-link--topnav)>a[aria-current=page]{background-color:transparent;border-block-end-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-top-nav-text);font:var(--gcds-nav-link-font)}}}@layer state.focus{:host a:focus{background-color:var(--gcds-nav-link-focus-background);border-color:var(--gcds-nav-link-focus-background);border-radius:var(--gcds-nav-link-focus-border-radius);-webkit-box-shadow:var(--gcds-nav-link-focus-box-shadow);box-shadow:var(--gcds-nav-link-focus-box-shadow);color:var(--gcds-nav-link-focus-text);outline:var(--gcds-nav-link-focus-outline);outline-offset:var(--gcds-nav-link-focus-outline-offset);text-decoration:none}}";

const GcdsNavLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
GcdsNavLink.style = gcdsNavLinkCss;

const I18N$7 = {
  "en": {
    next: "Next",
    previous: "Previous",
    nextPage: "Next page",
    previousPage: "Previous page",
    pageNumber: "Page {#}",
    pageNumberOf: "Page {#} of {total} of {label}"
  },
  "fr": {
    next: "Suivante",
    previous: "Précédente",
    nextPage: "Page suivante",
    previousPage: "Page précédente",
    pageNumber: "Page {#}",
    pageNumberOf: "Page {#} sur {total} des {label}"
  }
};

/**
 * Function to constuct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
function constructHref(url, page, end) {
  let fragment = "";
  let qs = "";
  let count = 0;
  for (const key in url.queryStrings) {
    let queryKey = key;
    let queryValue = url.queryStrings[key];
    if (key.includes("::")) {
      let incrementer = key.split("::")[1];
      let regExp = /\{\{([^)]+)\}\}/;
      let matches = regExp.exec(url.queryStrings[key]);
      // Offeset numbers
      if (incrementer == "offset") {
        let pageNumber = page;
        if (end == "next") {
          ++pageNumber;
        }
        else if (end == "previous") {
          --pageNumber;
        }
        queryValue = matches ?
          url.queryStrings[key].replace(`{{${matches[1]}}}`, `${((pageNumber - 1) * Number(matches[1]))}`)
          :
            ((pageNumber - 1) * url.queryStrings[key]);
        queryKey = queryKey.replace("::offset", "");
      }
      // Match page number
      if (incrementer == "match") {
        let pageNumber = page;
        if (end == "next") {
          ++pageNumber;
        }
        else if (end == "previous") {
          --pageNumber;
        }
        queryValue = matches ?
          url.queryStrings[key].replace(`{{${matches[1]}}}`, `${(pageNumber * Number(matches[1]))}`)
          :
            (pageNumber * url.queryStrings[key]);
        queryKey = queryKey.replace("::match", "");
      }
    }
    if (count == 0) {
      qs += `?${queryKey}=${queryValue}`;
    }
    else {
      qs += `&${queryKey}=${queryValue}`;
    }
    ++count;
  }
  if (url.fragment) {
    fragment = `#${url.fragment}`;
  }
  let href = `${qs}${fragment}`;
  return href;
}
/**
 * Function to constuct classes to help with mobile sizing
 */
function constructClasses(page, current, total) {
  if (total <= 5) {
    return "";
  }
  else if (current == 1 || current == total) {
    if (current - page == 4 || current - page == -4) {
      return "gcds-pagination-list-breakpoint-360";
    }
    else if (current - page == 5 || current - page == -5) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page > 5 || current - page < -5) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
  else if (current == 2 || current == (total - 1)) {
    if (current - page == 3 || current - page == -3) {
      return "gcds-pagination-list-breakpoint-360";
    }
    else if (current - page == 4 || current - page == -4) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page > 4 || current - page < -4) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
  else if ((current > 2 && current < (total - 1)) && (total < 10 && current == 5)) {
    if (current - page == 2 || current - page == -2) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page >= 3 || current - page <= -3) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
  else if (current > 2 && current < (total - 1)) {
    if (current - page == 2 || current - page == -2) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page == 3 || current - page == -3) {
      return "gcds-pagination-list-breakpoint-460";
    }
    else if (current - page > 3 || current - page < -3) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
}

const gcdsPaginationCss = ".sc-gcds-pagination-h{display:block}.sc-gcds-pagination-h ul.sc-gcds-pagination{list-style:none;padding:0}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination{margin:var(--gcds-pagination-listitem-margin)}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination{border-radius:var(--gcds-pagination-border-radius);color:var(--gcds-pagination-default-text);font:var(--gcds-pagination-font)}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:hover{background:var(--gcds-pagination-hover-background);color:var(--gcds-pagination-hover-text)}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:focus{background-color:var(--gcds-pagination-focus-background);color:var(--gcds-pagination-focus-text);outline:var(--gcds-pagination-focus-outline-width) solid var(--gcds-pagination-focus-background);outline-offset:var(--gcds-pagination-border-width);text-decoration:none}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:active:not(:focus),.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a[aria-current*=page].sc-gcds-pagination:not(:focus){background:var(--gcds-pagination-active-background);border-color:var(--gcds-pagination-active-background);color:var(--gcds-pagination-active-text);pointer-events:none;text-decoration:none}@media screen and (max-width:24em){.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination{margin:var(--gcds-pagination-mobile-list-item-margin)}}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.sc-gcds-pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:2.75rem;-ms-flex-pack:center;justify-content:center;min-width:2.75rem}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.gcds-pagination-end-button-mobile.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.gcds-pagination-end-button-mobile.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile.sc-gcds-pagination{height:auto;min-width:auto;padding:var(--gcds-pagination-list-end-button-padding);width:auto}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-mobile-prevnext.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-mobile-prevnext.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination{display:none}@media screen and (max-width:49em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination{border:var(--gcds-pagination-border-width) solid}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:focus,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:focus{border-color:var(--gcds-pagination-focus-background)}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.sc-gcds-pagination{min-width:auto}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination:has(>a.gcds-pagination-end-button).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination:has(>a.gcds-pagination-end-button).sc-gcds-pagination{margin:0}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination .gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination .gcds-pagination-end-button.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-mobile-prevnext.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-mobile-prevnext.sc-gcds-pagination{display:block}}@media screen and (max-width:34.75em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-488.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-488.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-488.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-488).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-488.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-488).sc-gcds-pagination{display:list-item}}@media screen and (max-width:32.5em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-460.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-460.sc-gcds-pagination{display:none;margin:0}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-460.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-460).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-460.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-460).sc-gcds-pagination{display:list-item}}@media screen and (max-width:31em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-420.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-420.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-420.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-420).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-420.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-420).sc-gcds-pagination{display:list-item}}@media screen and (max-width:25.75em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-360.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-360.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-360.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-360).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-360.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-360).sc-gcds-pagination{display:list-item}}.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination{display:none;margin:var(--gcds-pagination-mobile-list-prevnext-margin)}@media screen and (max-width:49em){.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination{display:-ms-flexbox;display:flex}}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination{display:inline-block;-ms-flex-pack:justify;justify-content:space-between;margin:var(--gcds-pagination-simple-listitem-margin);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination{display:grid;padding:var(--gcds-pagination-simple-padding)}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination>gcds-icon.sc-gcds-pagination{grid-area:icon}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination>.gcds-pagination-simple-text.sc-gcds-pagination{grid-area:text;margin:var(--gcds-pagination-simple-listitem-text-margin)}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination>span.sc-gcds-pagination{font-weight:var(--gcds-pagination-simple-label-font-weight);grid-area:label}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.gcds-pagination-simple-previous.sc-gcds-pagination a.sc-gcds-pagination{grid-template-areas:\"icon text\" \"icon label\";grid-template-columns:.25fr 1fr}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.gcds-pagination-simple-next.sc-gcds-pagination{float:right}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.gcds-pagination-simple-next.sc-gcds-pagination a.sc-gcds-pagination{grid-template-areas:\"text icon\" \"label icon\";grid-template-columns:1fr .25fr}@media screen and (max-width:25.75em){.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination{display:block}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination:last-of-type{float:none}}";

const GcdsPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsPageChange = createEvent(this, "gcdsPageChange", 7);
    this.listitems = [];
    this.mobilePrevNext = [];
    this.onPageChange = (e) => {
      if (this.pageChangeHandler) {
        this.pageChangeHandler(e);
      }
      this.gcdsPageChange.emit();
    };
    this.display = "list";
    this.label = undefined;
    this.previousHref = undefined;
    this.previousLabel = undefined;
    this.nextHref = undefined;
    this.nextLabel = undefined;
    this.totalPages = undefined;
    this.currentPage = undefined;
    this.url = undefined;
    this.pageChangeHandler = undefined;
    this.currentStep = undefined;
    this.lang = undefined;
  }
  watchCurrentPage(newValue) {
    this.currentStep = newValue;
  }
  /**
   * Convert url prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  urlChanged(newUrl) {
    if (typeof newUrl == "string") {
      this.urlObject = JSON.parse(newUrl);
    }
    else if (typeof newUrl == "object") {
      this.urlObject = newUrl;
    }
  }
  watchLang() {
    if (this.display == "list") {
      this.configureListPagination();
    }
  }
  /**
   * Function to constuct <li> and <a> tags for display="list" pagination
   */
  configurePaginationStep(page, end, mobile) {
    let linkAttrs = {
      onClick: (e) => this.onPageChange(e),
      href: this.urlObject ? constructHref(this.urlObject, page, end) : "javascript:void(0)",
      "aria-label": !end ?
        I18N$7[this.lang].pageNumberOf.replace('{#}', page).replace('{total}', this.totalPages).replace('{label}', this.label)
        :
          end == "next" ?
            `${I18N$7[this.lang].nextPage}: ${I18N$7[this.lang].pageNumberOf.replace('{#}', ++page).replace('{total}', this.totalPages).replace('{label}', this.label)}`
            :
              `${I18N$7[this.lang].previousPage}: ${I18N$7[this.lang].pageNumberOf.replace('{#}', --page).replace('{total}', this.totalPages).replace('{label}', this.label)}`,
    };
    if (page == this.currentPage && !end) {
      linkAttrs['aria-current'] = "page";
    }
    if (end) {
      return (h("li", null, end === "next" ?
        h("a", Object.assign({}, linkAttrs, { class: !mobile ? "gcds-pagination-end-button" : "gcds-pagination-end-button-mobile" }), I18N$7[this.lang].next, h("gcds-icon", { "margin-left": "200", name: "arrow-right" }))
        :
          h("a", Object.assign({}, linkAttrs, { class: !mobile ? "gcds-pagination-end-button" : "gcds-pagination-end-button-mobile" }), h("gcds-icon", { "margin-right": "200", name: "arrow-left" }), I18N$7[this.lang].previous)));
    }
    else {
      return (h("li", { class: page != 1 && page != this.totalPages ? constructClasses(page, this.currentPage, this.totalPages) : "" }, h("a", Object.assign({}, linkAttrs), page)));
    }
  }
  /**
   * Function to render the right steps for display="list" pagination
   */
  configureListPagination() {
    this.listitems = [];
    this.mobilePrevNext = [];
    if (this.currentPage != 1) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "previous"));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, "previous", true));
    }
    // Flags to see if ellipses already rendered
    let previousEllipses = false;
    let nextEllipses = false;
    for (let i = 1; i <= this.totalPages; i++) {
      // Left side mobile ellipses
      if (i == 2 && this.currentPage < 6 && this.currentPage > 3 && this.totalPages > 9) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      else if (i == 2 && this.totalPages < 10 && this.totalPages > 5 && this.currentPage > 3) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      if (i == this.currentPage ||
        (i == 1 || i == this.totalPages) ||
        (i >= (this.currentPage - 2) && i <= (this.currentPage + 2)) ||
        this.totalPages < 10) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      else if ((this.currentPage <= 5 && i <= 7) || (this.currentPage >= this.totalPages - 4 && i >= this.totalPages - 6)) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      else if ((this.currentPage == 5 && i == 2) || (this.currentPage == this.totalPages - 4 && i == this.totalPages - 1)) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      else if (!previousEllipses && i < (this.currentPage - 2)) {
        this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
        previousEllipses = true;
      }
      else if (!nextEllipses && i > (this.currentPage + 2) && i < this.totalPages) {
        this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
        nextEllipses = true;
      }
      // Right side mobile ellipses
      if (i == this.totalPages - 1 && this.currentPage > this.totalPages - 5 && this.currentPage < this.totalPages - 2 && this.totalPages > 9) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      else if (i == this.totalPages - 1 && this.totalPages < 10 && this.totalPages > 5 && this.currentPage < this.totalPages - 2) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
    }
    if (this.currentPage != this.totalPages) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "next"));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, "next", true));
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    if (this.url && typeof this.url == "string") {
      this.urlObject = JSON.parse(this.url);
    }
    else if (this.url && typeof this.url == "object") {
      this.urlObject = this.url;
    }
    if (this.display == "list") {
      this.configureListPagination();
    }
  }
  componentDidUpdate() {
    if (this.display == "list") {
      this.configureListPagination();
    }
  }
  render() {
    const { display, label, previousHref, previousLabel, nextHref, nextLabel, lang } = this;
    return (h(Host, { role: "navigation", "aria-label": label }, display === "list" ?
      h("div", null, h("ul", { class: "gcds-pagination-list" }, this.listitems), h("ul", { class: "gcds-pagination-list-mobile-prevnext" }, this.mobilePrevNext))
      :
        h("ul", { class: "gcds-pagination-simple" }, previousHref &&
          h("li", { class: "gcds-pagination-simple-previous" }, h("a", { href: previousHref, "aria-label": `${I18N$7[lang].previousPage}${previousLabel ? `: ${previousLabel}` : ""}`, onClick: (e) => this.onPageChange(e) }, h("gcds-icon", { "margin-right": "200", name: "arrow-left" }), h("div", { class: "gcds-pagination-simple-text" }, I18N$7[lang].previous), h("span", null, previousLabel))), nextHref &&
          h("li", { class: "gcds-pagination-simple-next" }, h("a", { href: nextHref, "aria-label": `${I18N$7[lang].nextPage}${nextLabel ? `: ${nextLabel}` : ""}`, onClick: (e) => this.onPageChange(e) }, h("div", { class: "gcds-pagination-simple-text" }, I18N$7[lang].next), h("span", null, nextLabel), h("gcds-icon", { "margin-left": "200", name: "arrow-right" }))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "currentPage": ["watchCurrentPage"],
    "url": ["urlChanged"],
    "lang": ["watchLang"]
  }; }
};
GcdsPagination.style = gcdsPaginationCss;

const I18N$6 = {
  "en": {
    label: "Banner",
  },
  "fr": {
    label: "Bannière",
  }
};

const gcdsPhaseBannerCss = ":host .gcds-phase-banner{font:var(--gcds-phase-banner-font);line-height:var(--gcds-phase-banner-line-height)}:host .gcds-phase-banner.banner-is-fixed{position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:9999}:host .gcds-phase-banner.banner--role-primary{background-color:var(--gcds-phase-banner-primary-background);color:var(--gcds-phase-banner-primary-text)}:host .gcds-phase-banner.banner--role-secondary{background-color:var(--gcds-phase-banner-secondary-background);color:var(--gcds-phase-banner-secondary-text)}:host .gcds-phase-banner .banner__content{padding:var(--gcds-phase-banner-padding)}@media only screen and (min-width:35em){:host .gcds-phase-banner .banner__content{display:-ms-flexbox;display:flex}}:host .gcds-phase-banner .banner__icon{display:-ms-flexbox;display:flex;margin:0}:host .gcds-phase-banner .banner__icon.icon--left{-webkit-margin-end:var(--gcds-phase-banner-icon-margin);margin-inline-end:var(--gcds-phase-banner-icon-margin)}:host .gcds-phase-banner .banner__icon.icon--right{-webkit-margin-start:var(--gcds-phase-banner-icon-margin);margin-inline-start:var(--gcds-phase-banner-icon-margin)}@media only screen and (max-width:34.99em){:host .gcds-phase-banner .banner__icon{display:none}}:host .gcds-phase-banner .banner__icon ::slotted(img),:host .gcds-phase-banner .banner__icon ::slotted(svg){max-height:var(--gcds-phase-banner-icon-max-height)}:host .gcds-phase-banner .banner__details{-ms-flex-align:baseline;align-items:baseline;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(gcds-button){-ms-flex:0 0 auto;flex:0 0 auto}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(small),:host .gcds-phase-banner .banner__details ::slotted(span){font-size:80%!important}:host .gcds-phase-banner .banner__details ::slotted(p){font:var(--gcds-phase-banner-font);margin:0}:host .gcds-phase-banner .banner__details ::slotted(a){color:inherit}:host .gcds-phase-banner .banner__details ::slotted(gcds-button){margin:var(--gcds-phase-banner-details-cta-margin);-webkit-transform:scale(90%);transform:scale(90%)}";

const GcdsPhaseBanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bannerRole = 'primary';
    this.container = 'xl';
    this.isFixed = undefined;
    this.lang = undefined;
  }
  /**
   * Events
   */
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
  }
  render() {
    const { bannerRole, container, isFixed, lang } = this;
    return (h(Host, null, h("div", { class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": I18N$6[lang].label }, h("gcds-container", { size: container, centered: true }, h("div", { class: "banner__content" }, h("figure", { class: "banner__icon icon--left" }, h("slot", { name: "banner-icon-left" })), h("div", { class: "banner__details" }, h("slot", { name: "banner-text" }), h("slot", { name: "banner-cta" })), h("figure", { class: "banner__icon icon--right" }, h("slot", { name: "banner-icon-right" })))))));
  }
  get el() { return getElement(this); }
};
GcdsPhaseBanner.style = gcdsPhaseBannerCss;

const gcdsRadioCss = ".sc-gcds-radio-h .gcds-radio.sc-gcds-radio{border:0;color:var(--gcds-radio-default-text);font:var(--gcds-radio-font);margin:var(--gcds-radio-margin);max-width:90%;padding:0;position:relative;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio:focus-within{color:var(--gcds-radio-focus-text)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio:focus-within gcds-hint.sc-gcds-radio{color:currentColor}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio{color:var(--gcds-radio-disabled-text)}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio{color:var(--gcds-radio-disabled-text)}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:before{background-color:var(--gcds-radio-disabled-background);border-color:var(--gcds-radio-disabled-border);cursor:not-allowed}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:after{cursor:not-allowed}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio gcds-hint.sc-gcds-radio{color:currentColor}.sc-gcds-radio-h .gcds-radio.gcds-radio--error.sc-gcds-radio:not(:focus-within) input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:before{border-color:var(--gcds-radio-danger-border)}.sc-gcds-radio-h .gcds-radio.gcds-radio--error.sc-gcds-radio:not(:focus-within) input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:after{background-color:var(--gcds-radio-danger-border);color:var(--gcds-radio-danger-border)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio{height:var(--gcds-radio-input-height);left:0;opacity:0;position:absolute;top:var(--gcds-radio-top);width:var(--gcds-radio-input-width)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio:checked+gcds-label.sc-gcds-radio:after{opacity:1}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:after,.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:before{border-radius:var(--gcds-radio-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;content:\"\";cursor:pointer;position:absolute}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:before{border:var(--gcds-radio-input-border-width) solid;height:var(--gcds-radio-input-height-and-width);left:0;top:var(--gcds-radio-top);width:var(--gcds-radio-input-height-and-width)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:after{background-color:currentcolor;color:currentcolor;height:var(--gcds-radio-check-height-and-width);left:var(--gcds-radio-check-left);opacity:0;top:var(--gcds-radio-check-top);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;width:var(--gcds-radio-check-height-and-width)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio:focus+gcds-label.sc-gcds-radio{color:var(--gcds-radio-focus-text)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio:focus+gcds-label.sc-gcds-radio:before{outline:var( --gcds-radio-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-radio-input-border-width)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio:focus+gcds-label.sc-gcds-radio:after{background-color:currentcolor;color:var(--gcds-radio-focus-text)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio gcds-hint.sc-gcds-radio,.sc-gcds-radio-h .gcds-radio.sc-gcds-radio gcds-label.sc-gcds-radio{display:block;padding:var(--gcds-radio-label-padding)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio gcds-hint.sc-gcds-radio{font:var(--gcds-radio-hint-font)}";

const GcdsRadio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsRadioChange = createEvent(this, "gcdsRadioChange", 7);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.onFocus = (e) => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = (e) => {
      if (this.blurHandler) {
        this.blurHandler(e);
      }
      this.gcdsBlur.emit();
    };
    this.onChange = (name) => {
      this.gcdsRadioChange.emit(name);
      this.checked = this.shadowElement.checked;
    };
    this.radioId = undefined;
    this.label = undefined;
    this.name = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.checked = undefined;
    this.value = undefined;
    this.hint = undefined;
    this.clickHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.hasError = undefined;
    this.parentError = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  gcdsradioChangeEventHandler(event) {
    if (event.detail == this.name && event.srcElement != this.shadowElement) {
      if (this.checked) {
        this.checked = false;
      }
    }
  }
  /**
  * Event listener for gcds-fieldset errors
  */
  gcdsGroupError(e) {
    if (e.srcElement.contains(this.el) && elementGroupCheck(this.name)) {
      this.hasError = true;
      this.parentError = e.detail;
    }
    else if (!elementGroupCheck(this.name)) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  gcdsGroupErrorClear(e) {
    if (e.srcElement.contains(this.el) && this.hasError) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  render() {
    const { lang, radioId, label, name, required, disabled, value, checked, hint, hasError, parentError, inheritedAttributes } = this;
    const attrsInput = Object.assign({ name,
      disabled,
      required,
      value,
      checked }, inheritedAttributes);
    if (hint || parentError) {
      let hintID = hint ? `hint-${radioId} ` : "";
      let errorID = parentError ? `parent-error-${radioId} ` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${attrsInput["aria-describedby"] ? `${attrsInput["aria-describedby"]}` : ""}`;
    }
    if (hasError) {
      attrsInput["aria-invalid"] = "true";
    }
    return (h(Host, null, h("div", { class: `gcds-radio ${disabled ? 'gcds-radio--disabled' : ''} ${hasError ? 'gcds-radio--error' : ''}` }, h("input", Object.assign({ id: radioId, type: "radio" }, attrsInput, { onChange: () => this.onChange(name), onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onClick: (e) => { this.clickHandler && this.clickHandler(e); }, ref: element => this.shadowElement = element })), h("gcds-label", { label: label, "label-for": radioId, lang: lang }), hint ? h("gcds-hint", { hint: hint, "hint-id": radioId }) : null, parentError && h("span", { id: `parent-error-${radioId}`, hidden: true }, parentError))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "hasError": ["validateHasError"]
  }; }
};
GcdsRadio.style = gcdsRadioCss;

const I18N$5 = {
  "en": {
    search: "Search",
    searchLabel: "Search {$}",
  },
  "fr": {
    search: "Recherche",
    searchLabel: "Rechercher dans {$}",
  }
};

const gcdsSearchCss = "@layer defaults, state.focus;@layer defaults{.sc-gcds-search-h .gcds-search .gcds-search__header{display:block;height:0;margin:0;overflow:hidden;width:0}.sc-gcds-search-h .gcds-search .gcds-search__form{display:-ms-flexbox;display:flex;margin:var(--gcds-search-margin)!important}.sc-gcds-search-h .gcds-search input.gcds-search__input{background-color:var(--gcds-search-default-background);background-image:none;border:var(--gcds-search-border-width) solid;border-radius:var(--gcds-search-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--gcds-search-default-text);font:var(--gcds-search-font);height:auto;min-height:var(--gcds-search-min-width-and-height);padding:var(--gcds-search-padding)!important;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;width:100%}.sc-gcds-search-h .gcds-search ::part(button){border-end-start-radius:0;border-start-start-radius:0;margin:0}.sc-gcds-search-h [type=search]::-webkit-search-cancel-button,.sc-gcds-search-h [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}}@layer state.focus{.sc-gcds-search-h input.gcds-search__input:focus{border-color:var(--gcds-search-focus-text);border-radius:var(--gcds-search-focus-border-radius);-webkit-box-shadow:var(--gcds-search-focus-box-shadow);box-shadow:var(--gcds-search-focus-box-shadow);outline:var(--gcds-search-outline-width) solid var(--gcds-search-focus-text);outline-offset:var(--gcds-search-border-width);z-index:30}.sc-gcds-search-h ::part(button):focus{border-radius:var(--gcds-search-focus-border-radius);-webkit-box-shadow:var(--gcds-search-focus-box-shadow);box-shadow:var(--gcds-search-focus-box-shadow)}}";

const GcdsSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsChange = createEvent(this, "gcdsChange", 7);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsSubmit = createEvent(this, "gcdsSubmit", 7);
    this.placeholder = "Canada.ca";
    this.action = "/sr/srb.html";
    this.method = "get";
    this.name = "q";
    this.searchId = "search";
    this.suggested = undefined;
    this.lang = undefined;
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
  }
  render() {
    const { placeholder, action, method, name, lang, searchId, suggested } = this;
    let labelText = `${I18N$5[lang].searchLabel.replace("{$}", placeholder)}`;
    const attrsInput = {
      name,
      placeholder: labelText
    };
    let formAction = action === '/sr/srb.html' ? `https://www.canada.ca/${lang}/sr/srb.html` : action;
    return (h(Host, null, h("div", { class: "gcds-search" }, h("h2", { class: "gcds-search__header" }, I18N$5[lang].search), h("form", { action: formAction, method: method, role: "search", onSubmit: () => this.gcdsSubmit.emit(), class: "gcds-search__form" }, h("gcds-label", { label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ type: "search", id: searchId, list: "search-list", size: 34, maxLength: 170, onChange: () => this.gcdsChange.emit(), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input" })), suggested &&
      h("datalist", { id: "search-list" }, suggested.map((k, v) => h("option", { value: k, key: v }))), h("gcds-button", { type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { name: "search", label: I18N$5[lang].search, "fixed-width": true }))))));
  }
  get el() { return getElement(this); }
};
GcdsSearch.style = gcdsSearchCss;

const gcdsSelectCss = ".sc-gcds-select-h .gcds-select-wrapper.sc-gcds-select{border:0;color:var(--gcds-select-default-text);font:var(--gcds-select-font);margin:0;max-width:90%;padding:0;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out}.sc-gcds-select-h .gcds-select-wrapper.sc-gcds-select:focus-within{color:var(--gcds-select-focus-text)}.sc-gcds-select-h .gcds-select-wrapper.gcds-disabled.sc-gcds-select{color:var(--gcds-select-disabled-text)}.sc-gcds-select-h .gcds-select-wrapper.gcds-error.sc-gcds-select:not(:focus-within) select.sc-gcds-select{border-color:var(--gcds-select-danger-border)}.sc-gcds-select-h select.sc-gcds-select{-webkit-appearance:none;-moz-appearance:none;background-color:var(--gcds-select-default-background);background-image:url(\"data:image/svg+xml;utf8,<svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.799988 0.900024L7.79999 7.90003L14.8 0.900024' stroke='currentColor' stroke-width='2'/></svg>\");background-position-x:var(--gcds-select-arrow-position-x);background-position-y:50%;background-repeat:no-repeat;border:var(--gcds-select-border-width) solid;border-radius:var(--gcds-select-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--gcds-select-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-select-margin);max-width:100%;min-height:var(--gcds-select-min-width-and-height);min-width:var(--gcds-select-min-width-and-height);padding:var(--gcds-select-padding);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.sc-gcds-select-h select.sc-gcds-select:focus{border-color:var(--gcds-select-focus-text);outline:var(--gcds-select-outline-width) solid var(--gcds-select-focus-text);outline-offset:var(--gcds-select-border-width)}.sc-gcds-select-h select.sc-gcds-select:disabled{background-color:var(--gcds-select-disabled-background);border-color:var(--gcds-select-disabled-text);cursor:not-allowed}";

const GcdsSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsSelectChange = createEvent(this, "gcdsSelectChange", 7);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsError = createEvent(this, "gcdsError", 7);
    this.gcdsValid = createEvent(this, "gcdsValid", 7);
    this._validator = defaultValidator;
    this.onFocus = (e) => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = (e) => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      else {
        if (this.validateOn == "blur") {
          this.validate();
        }
      }
      this.gcdsBlur.emit();
    };
    this.handleChange = (e) => {
      if (this.changeHandler) {
        this.changeHandler(e);
      }
      else {
        let val = e.target && e.target.value;
        this.value = val;
      }
      this.gcdsSelectChange.emit(this.value);
    };
    this.selectId = undefined;
    this.label = undefined;
    this.required = false;
    this.disabled = false;
    this.defaultValue = undefined;
    this.value = undefined;
    this.errorMessage = undefined;
    this.hint = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.changeHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.hasError = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
  }
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    }
    else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
    else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({ id: `#${this.selectId}`, message: `${this.label} - ${this.errorMessage}` });
    }
    else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.selectId}` });
    }
  }
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, "select");
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { lang, selectId, label, required, disabled, defaultValue, value, hint, errorMessage, inheritedAttributes, hasError } = this;
    const attrsSelect = Object.assign({ disabled,
      required,
      value }, inheritedAttributes);
    const attrsLabel = {
      label,
      required,
    };
    if (hint || errorMessage) {
      let hintID = hint ? `hint-${selectId} ` : "";
      let errorID = errorMessage ? `error-message-${selectId} ` : "";
      attrsSelect["aria-describedby"] = `${hintID}${errorID}${attrsSelect["aria-describedby"] ? `${attrsSelect["aria-describedby"]}` : ""}`;
    }
    return (h(Host, null, h("div", { class: `gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "label-for": selectId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": selectId }) : null, errorMessage ?
      h("gcds-error-message", { messageId: selectId, message: errorMessage })
      : null, h("select", Object.assign({}, attrsSelect, { id: selectId, name: selectId, onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onChange: (e) => this.handleChange(e), "aria-invalid": hasError ? 'true' : 'false', ref: element => this.shadowElement = element }), defaultValue ?
      h("option", { value: "", disabled: true, selected: true }, defaultValue)
      : null, h("slot", null)))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["validateDisabledSelect"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }; }
};
GcdsSelect.style = gcdsSelectCss;

/**
* Handle event for keyboard control of nav
* @param {Event} event
* @param {Element} nav
* @param {any[]} queue
*/
async function handleKeyDownNav(event, nav, queue) {
  const key = event.key;
  const currentIndex = queue.indexOf(document.activeElement == nav ? document.activeElement.shadowRoot.activeElement : document.activeElement);
  const activeElement = queue[currentIndex];
  switch (key) {
    // Down arrow
    case 'ArrowDown':
      event.preventDefault();
      // If on last item, jump to first item
      if (currentIndex + 1 > queue.length - 1) {
        await focusNavItem(0, queue);
        // Jump to next item
      }
      else {
        await focusNavItem(currentIndex + 1, queue);
      }
      break;
    // Up arrow
    case 'ArrowUp':
      event.preventDefault();
      // If on first item, jump to last item
      if (currentIndex - 1 < 0) {
        await focusNavItem(queue.length - 1, queue);
        // Jump to previous item
      }
      else {
        await focusNavItem(currentIndex - 1, queue);
      }
      break;
    // Right arrow
    case 'ArrowRight':
      event.preventDefault();
      if (activeElement.nodeName == "GCDS-NAV-GROUP") {
        await toggleNavGroup(activeElement, nav);
      }
      break;
    // Left arrow || ESC
    case 'ArrowLeft':
    case 'Escape':
      event.preventDefault();
      // Currently focusing a gcds-nav-group
      if (activeElement.nodeName == "GCDS-NAV-GROUP" && activeElement.hasAttribute("open")) {
        await toggleNavGroup(activeElement, nav);
        // Currently focus within a gcds-nav-group
      }
      else if (activeElement.parentNode.nodeName == "GCDS-NAV-GROUP") {
        await toggleNavGroup(activeElement.parentNode, nav);
      }
      else if ((activeElement.parentNode == nav) && await activeElement.parentNode.getNavSize() == "mobile") {
        await toggleNavGroup(queue[queue.length - 1], nav);
      }
      break;
    // Tab - only in top-nav
    case 'Tab':
      if (nav.nodeName != "GCDS-SIDE-NAV") {
        // On open nav trigger
        if (activeElement.nodeName == "GCDS-NAV-GROUP" && activeElement.hasAttribute("open")) {
          event.preventDefault();
          await toggleNavGroup(activeElement, nav);
          // In open nav group
        }
        else if (activeElement.parentNode.nodeName == "GCDS-NAV-GROUP") {
          event.preventDefault();
          await toggleNavGroup(activeElement.parentNode, nav);
        }
      }
      break;
    // ENTER || SPACEBAR
    case 'Enter':
    case ' ':
      if (activeElement.nodeName == "GCDS-NAV-GROUP") {
        event.preventDefault();
        await toggleNavGroup(activeElement, nav);
      }
      break;
  }
}
/**
* Focus nav element
* @param {Number} index
* @param {any[]} queue
*/
async function focusNavItem(index, queue) {
  if (queue[index].nodeName == "GCDS-NAV-LINK") {
    queue[index].focusLink();
  }
  else if (queue[index].nodeName == "GCDS-NAV-GROUP") {
    queue[index].focusTrigger();
  }
}
/**
*
* @param {Element} group
* @param {Element} nav
*/
async function toggleNavGroup(group, nav) {
  const navGroup = group;
  // Close nav group
  if (navGroup.hasAttribute("open")) {
    await navGroup.toggleNav();
    navGroup.focusTrigger();
    nav.updateNavItemQueue(nav);
    // Open nav group
  }
  else {
    await navGroup.toggleNav();
    setTimeout(async () => {
      await focusNavItem(0, document.activeElement == nav ? nav.children : navGroup.children);
    }, 10);
    if (nav.nodeName == "GCDS-SIDE-NAV") {
      nav.updateNavItemQueue(nav);
    }
    else {
      nav.updateNavItemQueue(document.activeElement == nav ? nav : navGroup, document.activeElement == nav ? false : true);
    }
  }
}
/**
* Return array of child elements of passed element
* @param {Element} el
* @return {any[]} indexedItems
*/
async function getNavItems(el) {
  let indexedItems = Array.from(el.children);
  indexedItems.forEach(async (item) => {
    if (item.nodeName == "GCDS-NAV-GROUP" && item.open) {
      let groupChildren = await getNavItems(item);
      indexedItems.splice(indexedItems.indexOf(item) + 1, 0, ...groupChildren);
    }
  });
  return indexedItems;
}

const I18N$4 = {
  "en": {
      navLabel: " - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu."
  },
  "fr": {
      navLabel: " - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement."
  }
};

const gcdsSideNavCss = "@layer reset, defaults;@layer reset{:host *{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0}}@layer defaults{:host{display:block;width:100%}@media only screen and (width >= 64em){:host{max-width:var(--gcds-side-nav-max-width)}}:host .gcds-side-nav__heading{font:var(--gcds-side-nav-heading-font);-webkit-margin-after:var(--gcds-side-nav-heading-margin);margin-block-end:var(--gcds-side-nav-heading-margin);padding:var(--gcds-side-nav-heading-padding)}@media only screen and (width < 64em){:host .gcds-side-nav__heading{display:block;height:0;margin:0;overflow:hidden;padding:0;width:0}}}";

const GcdsSideNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("nav", { "aria-label": `${label}${I18N$4[lang].navLabel}` }, h("h2", { class: "gcds-side-nav__heading" }, label), h("gcds-nav-group", { menuLabel: "Menu", closeTrigger: lang == 'fr' ? 'Fermer' : 'Close', openTrigger: "Menu", class: "gcds-mobile-nav", role: "menu", ref: element => this.mobile = element, lang: lang }, h("slot", null)))));
  }
  get el() { return getElement(this); }
};
GcdsSideNav.style = gcdsSideNavCss;

const SignatureEn = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 75.97" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-en-title">
	<title id="signature-en-title">Government of Canada</title>
	<path d="M0,0 36.84,0 36.84,75.01 0,75.01z M118.54,0 155.38,0 155.38,75.01 118.54,75.01z M72.58,15.61,77.84,4.9l5.22,10.32c.65,1.09,1.18,1,2.22.48l4.49-2.22L86.85,27.89c-.61,2.83,1,3.66,2.75,1.74L96,22.79l1.7,3.87c.57,1.17,1.43,1,2.57.79l6.61-1.39-2.22,8.35,0,.18c-.26,1.09-.78,2,.44,2.53l2.35,1.17L93.77,49.82c-1.39,1.43-.91,1.87-.39,3.48l1.26,3.87-12.71-2.3c-1.57-.39-2.66-.39-2.7.87l.52,14.58H75.93l.52-14.54c0-1.43-1.09-1.39-3.66-.86L61,57.18l1.52-3.87c.52-1.48.66-2.48-.52-3.48L48.11,38.46l2.57-1.57c.74-.57.78-1.17.39-2.44L48.46,26l6.7,1.43c1.87.44,2.39,0,2.87-1l1.87-3.83L66.52,30c1.17,1.39,2.83.48,2.31-1.52L65.65,12.86l4.92,2.83c.78.48,1.61.61,2.09-.3" class="fip_flag" />
	<path d="M29.4,31.73h-3.46l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.57.12,15.82.12c6.75,0,12.41,3.59,13.23,10.55h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.08,8.56-3.24,8.65-8.48h-8.21V15.47H29.4ZM44.83,28.44c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.24,28.44,44.83,28.44Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52,8.77,44.83,8.77s-11.29,4.93-11.29,11.76S37.65,32.34,44.83,32.34ZM58,9.38h5.36L69,26.54h.09l5.45-17.17h5.1l-8,22.35h-5.53ZM86.51,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61H98c-.87,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM106.7,9.38h4.63V13.7h.09a7.21,7.21,0,0,1,6.53-4.93,11.69,11.69,0,0,1,1.86.13v4.76a17.6,17.6,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V31.73H106.7V9.38ZM121.92,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73h-4.93V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73h-4.93V9.38ZM146.74,9.38h4.67v3.11h.13a7.47,7.47,0,0,1,6.87-3.72c2.72,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V31.73h-4.93V18.67c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6v13.1h-4.93V17.38c0-3.07-1-4.71-3.93-4.71-2.55,0-4.89,2.08-4.89,5.79V31.73h-4.93V9.38ZM188.21,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM208.4,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73H223.1V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73H208.4V9.38ZM231,9.38h3.71V2.67h4.93v6.7h4.45v3.68h-4.45V25c0,2,.17,3.07,2.38,3.07a8.25,8.25,0,0,0,2.08-.18v3.81c-1.08.08-2.12.26-3.2.26-5.15,0-6.1-2-6.19-5.71V13.05H231V9.38ZM12,71.68c-4.41,0-6.36-4-6.36-7.91S7.6,55.9,12,55.9s6.36,4,6.36,7.87S16.43,71.68,12,71.68Zm0,3.89c7.18,0,11.28-4.93,11.28-11.8S19.19,52,12,52s-11.29,4.93-11.29,11.76S4.83,75.57,12,75.57ZM25.2,52.61h3.67V50.76c0-5.71,3-6.66,6.18-6.66a13.89,13.89,0,0,1,3.46.3v3.85a8.32,8.32,0,0,0-2.29-.26c-1.34,0-2.42.48-2.42,2.33v2.29H38v3.68H33.8V75h-4.93V56.29H25.2ZM74.58,53.91c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.44-3.59,7.87-8.09H80c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.54-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.4ZM98.06,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93C89,57,91,55.9,93.73,55.9c2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM108.3,52.61H113V55.9l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V75H123V60.92c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V75H108.3V52.61ZM146.91,67.45c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.19,7.19,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM161,64c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S161,67.88,161,64ZM178.22,44.1h-4.93V55.51h-.09c-1.51-2.46-4.63-3.5-7.44-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.41,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.1ZM197.37,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.35,12.35,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69Z" class="fip_text" transform="translate(218,0)" />
	<path d="M29.47,32H26l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.64.4,15.89.4C22.64.4,28.3,4,29.12,11h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.09,8.56-3.24,8.65-8.47h-8.21V15.75h13.14V32ZM44.9,28.72c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.31,28.72,44.9,28.72Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52.08,9,44.9,9,33.62,14,33.62,20.81,37.73,32.61,44.9,32.61ZM79.93,32h-4.84V28.9H75a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V9.65h4.93V23.36c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V32ZM82.91,9.65h5.36l5.66,17.17H94l5.45-17.17h5.1l-8,22.35H91ZM111.4,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C128.66,15.4,124.33,9,117.28,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM131.6,9.65h4.63V14h.08A7.22,7.22,0,0,1,142.84,9a11.75,11.75,0,0,1,1.86.13v4.76a17.5,17.5,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V32H131.6V9.65ZM146.81,9.65h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32h-4.93V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V32h-4.93ZM175.48,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C192.73,15.4,188.41,9,181.36,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.87,2.47-2.6,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM195.67,9.65h4.67v3.11h.13A7.47,7.47,0,0,1,207.34,9c2.73,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V32h-4.93V19c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6V32h-4.93V17.65c0-3.07-1-4.71-3.93-4.71-2.55,0-4.88,2.08-4.88,5.79V32h-4.93V9.65ZM237.14,18.86A5.84,5.84,0,0,1,243,12.94c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C254.39,15.4,250.06,9,243,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM257.33,9.65H262v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32H272V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V32h-4.93ZM279.9,9.65h3.72V3h4.93v6.7H293v3.68h-4.45V25.27c0,2,.17,3.07,2.38,3.07a8.43,8.43,0,0,0,2.08-.17V32c-1.08.08-2.12.26-3.2.26-5.14,0-6.09-2-6.18-5.71V13.33h-3.72V9.65ZM5.69,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S5.69,68.15,5.69,64.31ZM22.9,44.37H18V55.79h-.09c-1.51-2.46-4.63-3.5-7.43-3.5-4.89,0-9.69,3.54-9.69,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.08v3h4.67V44.37ZM47.89,75.25H43V72.13H43a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V52.89h4.93V66.59c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V75.25ZM86.63,54.19c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.43-3.58,7.87-8.08h5.28c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.53-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.41ZM110.11,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-9-6.49-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.17-3.55,4.93-3.55,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.37,12.37,0,0,0,3.11-.56V71.88a7.21,7.21,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM120.35,52.89H125v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V75.25h-4.93V61.19c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V75.25h-4.93ZM159,67.72c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72S157.45,65,159,64v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.33,12.33,0,0,0,3.11-.56V71.88a7.17,7.17,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM173.06,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S173.06,68.15,173.06,64.31Zm17.21-19.93h-4.93V55.79h-.09c-1.51-2.46-4.62-3.5-7.43-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.37ZM209.42,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.34,12.34,0,0,0,3.11-.56V71.88a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77Z" class="fip_text" transform="translate(526,0)" />
</svg>
`;

const SignatureFr = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 75.97" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-fr-title">
	<title id="signature-fr-title">Gouvernement du Canada</title>
	<path d="M0,0 36.84,0 36.84,75.01 0,75.01z M118.54,0 155.38,0 155.38,75.01 118.54,75.01z M72.58,15.61,77.84,4.9l5.22,10.32c.65,1.09,1.18,1,2.22.48l4.49-2.22L86.85,27.89c-.61,2.83,1,3.66,2.75,1.74L96,22.79l1.7,3.87c.57,1.17,1.43,1,2.57.79l6.61-1.39-2.22,8.35,0,.18c-.26,1.09-.78,2,.44,2.53l2.35,1.17L93.77,49.82c-1.39,1.43-.91,1.87-.39,3.48l1.26,3.87-12.71-2.3c-1.57-.39-2.66-.39-2.7.87l.52,14.58H75.93l.52-14.54c0-1.43-1.09-1.39-3.66-.86L61,57.18l1.52-3.87c.52-1.48.66-2.48-.52-3.48L48.11,38.46l2.57-1.57c.74-.57.78-1.17.39-2.44L48.46,26l6.7,1.43c1.87.44,2.39,0,2.87-1l1.87-3.83L66.52,30c1.17,1.39,2.83.48,2.31-1.52L65.65,12.86l4.92,2.83c.78.48,1.61.61,2.09-.3" class="fip_flag" />
	<path d="M29.47,32H26l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.64.4,15.89.4C22.64.4,28.3,4,29.12,11h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.09,8.56-3.24,8.65-8.47h-8.21V15.75h13.14V32ZM44.9,28.72c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.31,28.72,44.9,28.72Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52.08,9,44.9,9,33.62,14,33.62,20.81,37.73,32.61,44.9,32.61ZM79.93,32h-4.84V28.9H75a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V9.65h4.93V23.36c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V32ZM82.91,9.65h5.36l5.66,17.17H94l5.45-17.17h5.1l-8,22.35H91ZM111.4,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C128.66,15.4,124.33,9,117.28,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM131.6,9.65h4.63V14h.08A7.22,7.22,0,0,1,142.84,9a11.75,11.75,0,0,1,1.86.13v4.76a17.5,17.5,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V32H131.6V9.65ZM146.81,9.65h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32h-4.93V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V32h-4.93ZM175.48,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C192.73,15.4,188.41,9,181.36,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.87,2.47-2.6,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM195.67,9.65h4.67v3.11h.13A7.47,7.47,0,0,1,207.34,9c2.73,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V32h-4.93V19c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6V32h-4.93V17.65c0-3.07-1-4.71-3.93-4.71-2.55,0-4.88,2.08-4.88,5.79V32h-4.93V9.65ZM237.14,18.86A5.84,5.84,0,0,1,243,12.94c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C254.39,15.4,250.06,9,243,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM257.33,9.65H262v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32H272V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V32h-4.93ZM279.9,9.65h3.72V3h4.93v6.7H293v3.68h-4.45V25.27c0,2,.17,3.07,2.38,3.07a8.43,8.43,0,0,0,2.08-.17V32c-1.08.08-2.12.26-3.2.26-5.14,0-6.09-2-6.18-5.71V13.33h-3.72V9.65ZM5.69,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S5.69,68.15,5.69,64.31ZM22.9,44.37H18V55.79h-.09c-1.51-2.46-4.63-3.5-7.43-3.5-4.89,0-9.69,3.54-9.69,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.08v3h4.67V44.37ZM47.89,75.25H43V72.13H43a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V52.89h4.93V66.59c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V75.25ZM86.63,54.19c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.43-3.58,7.87-8.08h5.28c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.53-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.41ZM110.11,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-9-6.49-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.17-3.55,4.93-3.55,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.37,12.37,0,0,0,3.11-.56V71.88a7.21,7.21,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM120.35,52.89H125v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V75.25h-4.93V61.19c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V75.25h-4.93ZM159,67.72c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72S157.45,65,159,64v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.33,12.33,0,0,0,3.11-.56V71.88a7.17,7.17,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM173.06,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S173.06,68.15,173.06,64.31Zm17.21-19.93h-4.93V55.79h-.09c-1.51-2.46-4.62-3.5-7.43-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.37ZM209.42,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.34,12.34,0,0,0,3.11-.56V71.88a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77Z" class="fip_text" transform="translate(218,0)" />
	<path d="M29.4,31.73h-3.46l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.57.12,15.82.12c6.75,0,12.41,3.59,13.23,10.55h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.08,8.56-3.24,8.65-8.48h-8.21V15.47H29.4ZM44.83,28.44c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.24,28.44,44.83,28.44Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52,8.77,44.83,8.77s-11.29,4.93-11.29,11.76S37.65,32.34,44.83,32.34ZM58,9.38h5.36L69,26.54h.09l5.45-17.17h5.1l-8,22.35h-5.53ZM86.51,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61H98c-.87,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM106.7,9.38h4.63V13.7h.09a7.21,7.21,0,0,1,6.53-4.93,11.69,11.69,0,0,1,1.86.13v4.76a17.6,17.6,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V31.73H106.7V9.38ZM121.92,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73h-4.93V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73h-4.93V9.38ZM146.74,9.38h4.67v3.11h.13a7.47,7.47,0,0,1,6.87-3.72c2.72,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V31.73h-4.93V18.67c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6v13.1h-4.93V17.38c0-3.07-1-4.71-3.93-4.71-2.55,0-4.89,2.08-4.89,5.79V31.73h-4.93V9.38ZM188.21,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM208.4,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73H223.1V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73H208.4V9.38ZM231,9.38h3.71V2.67h4.93v6.7h4.45v3.68h-4.45V25c0,2,.17,3.07,2.38,3.07a8.25,8.25,0,0,0,2.08-.18v3.81c-1.08.08-2.12.26-3.2.26-5.15,0-6.1-2-6.19-5.71V13.05H231V9.38ZM12,71.68c-4.41,0-6.36-4-6.36-7.91S7.6,55.9,12,55.9s6.36,4,6.36,7.87S16.43,71.68,12,71.68Zm0,3.89c7.18,0,11.28-4.93,11.28-11.8S19.19,52,12,52s-11.29,4.93-11.29,11.76S4.83,75.57,12,75.57ZM25.2,52.61h3.67V50.76c0-5.71,3-6.66,6.18-6.66a13.89,13.89,0,0,1,3.46.3v3.85a8.32,8.32,0,0,0-2.29-.26c-1.34,0-2.42.48-2.42,2.33v2.29H38v3.68H33.8V75h-4.93V56.29H25.2ZM74.58,53.91c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.44-3.59,7.87-8.09H80c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.54-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.4ZM98.06,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93C89,57,91,55.9,93.73,55.9c2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM108.3,52.61H113V55.9l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V75H123V60.92c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V75H108.3V52.61ZM146.91,67.45c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.19,7.19,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM161,64c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S161,67.88,161,64ZM178.22,44.1h-4.93V55.51h-.09c-1.51-2.46-4.63-3.5-7.44-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.41,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.1ZM197.37,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.35,12.35,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69Z" class="fip_text" transform="translate(575,0)" />
</svg>
`;

const WordmarkEn = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 143 34" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="wordmark-en-title">
	<title id="wordmark-en-title">Symbol of the Government of Canada</title>
	<g id="wmms" transform="translate(-1, -1)">
		<path class="fip_flag" d="M137.9,1.2h5.2v10.4h-5.2V1.2z M128.9,6.4l-0.3,0.1c0,0,1.8,1.5,1.8,1.6c0.1,0.1,0.2,0.1,0.1,0.4 c-0.1,0.3-0.2,0.6-0.2,0.6s1.6-0.3,1.8-0.4c0.2,0,0.3,0,0.3,0.2c0,0.2-0.1,1.9-0.1,1.9h0.5c0,0-0.1-1.8-0.1-1.9 c0-0.2,0.1-0.2,0.3-0.2c0.2,0,1.8,0.4,1.8,0.4s-0.1-0.4-0.2-0.6c-0.1-0.3,0-0.3,0.1-0.4c0.1-0.1,1.8-1.6,1.8-1.6l-0.3-0.1 c-0.2-0.1-0.1-0.2-0.1-0.3s0.3-1.1,0.3-1.1s-0.8,0.2-0.9,0.2c-0.1,0-0.2,0-0.2-0.1s-0.2-0.5-0.2-0.5s-0.9,1-1,1.1 c-0.2,0.2-0.4,0-0.3-0.2c0-0.2,0.5-2.3,0.5-2.3s-0.5,0.3-0.7,0.4s-0.3,0.1-0.3-0.1c-0.1-0.2-0.7-1.3-0.7-1.4c0,0-0.6,1.2-0.7,1.4 s-0.2,0.2-0.3,0.1c-0.2-0.1-0.7-0.4-0.7-0.4s0.5,2.1,0.5,2.3s-0.1,0.3-0.3,0.2l-1-1.1c0,0-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.2,0.1 c-0.2,0-1-0.2-1-0.2s0.3,1,0.4,1.1C129.1,6.1,129.1,6.3,128.9,6.4z M122.2,1.2h5.2v10.4h-5.2V1.2z"/>
		<path class="fip_text" d="M144.2,32.4c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6 c-6.7,0-6.8,3.3-6.8,4.1c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9 c0,0.5,0,0.8,0,1.1c0,0.2,0,0.3,0,0.5l0,0l0,0v0.1c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4 c0.1,4,4.1,5.4,6.9,5.3c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2 C145.1,32.2,144.4,31.9,144.2,32.4z M131.7,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8 c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0v0.1l0,0l0,0v0.1l0,0l0,0l0,0v4.2C135.7,31.1,134.1,33.5,131.7,33.5z M122.5,33.4 c-0.4-0.1-2.9,0.2-2.9-7.4s0-23.9,0-23.9c0-0.3,0-1.1-0.9-1.1c-0.9,0-6.9,0.3-7.3,0.4c-0.4,0-0.7,0.5,0,0.5 c0.7,0.1,3.9,0.3,3.9,5.6c0,2.6,0,5.2,0,7.1c0,0.1,0,0.2,0,0.2c0,0.2,0,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.2,0-0.5-0.2 c-0.5-0.4-2.8-1.8-5.7-1.8c-4.7,0-10.5,3.4-10.5,10.4c0,7.5,5.3,11.1,10.8,11.1c2.7,0,4.6-1.2,5.3-1.6c0.8-0.5,0.7-0.4,0.8,0.3 c0.1,0.5,0,1.5,1.4,1.4c1.5-0.2,5.1-0.6,5.8-0.7C123.3,33.9,123.1,33.5,122.5,33.4z M110.1,33.7c-4.4,0-6.7-5.2-6.7-10.2 c0-5.5,3.1-9.2,6.4-9c4.3,0.3,5.4,3.7,5.5,9.8c0,0.4,0,0.8,0,1.3C115.2,31.6,112.7,33.7,110.1,33.7z M98.4,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.8,2,3.8,5v0.1c0,0.1,0,0.2,0,0.2v0.3 c0,0.1,0,0.3,0,0.4c-0.1,1.5-0.5,2-1.7,2.6c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C99.3,32.2,98.7,31.9,98.4,32.4z  M86,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0v0.1l0,0l0,0c0,0.1,0,0.2,0,0.4v-0.1 c0,0,0,0,0,0.1v4.2C89.9,31.1,88.3,33.5,86,33.5z M76.4,33.4c-0.8-0.2-2.2-1.1-2.2-5.5v-8c0-1.9,0.2-6.8-7.3-6.8 c-3.9,0-6.1,2-6.3,2.1c-0.3,0.3-0.5,0.4-0.6-0.1c-0.1-0.4-0.3-1-0.4-1.4c-0.1-0.3-0.3-0.6-1-0.5c-0.7,0.1-5.1,0.8-5.9,1 c-0.7,0.2-0.5,0.5,0,0.6c0.5,0.1,2.9,0.3,2.9,4.4s0,8.6,0,8.6c0,5-1,5.4-1.9,5.7c-1.2,0.3-0.6,0.7-0.1,0.7c0,0,8.9,0,9.1,0 c0.6,0,0.9-0.6-0.3-0.8c-1.2-0.2-2.3-0.9-2.3-4.8c0-0.4,0-4.7,0-5.5c0-2.1-0.5-8.5,5.3-8.6c4.1-0.1,4.5,3.3,4.5,5.5v8.5 c0,3.5-1,4.6-2.2,4.8c-1.1,0.2-0.9,0.7-0.3,0.7c0.2,0,9.3,0,9.3,0C77.2,34.2,77.7,33.7,76.4,33.4z M52.1,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9c0,0.5,0,0.8,0,1.1 c0,0.2,0,0.4-0.1,0.5v0.1l0,0c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C53,32.2,52.3,31.9,52.1,32.4z  M39.6,33.5c-2.8,0-3.5-2.3-3.5-3.5s0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0l0,0 c0,0,0,0.1,0,0.2l0,0l0,0v0.1l0,0l0,0l0,0v4.2C43.6,31.1,42,33.5,39.6,33.5z M30,24.8c-1,3.2-2.9,8.4-9.8,8.6 C13,33.5,8.7,28.6,8.5,19.5C8.2,9.8,12.4,2.4,18.9,2.2c7.3-0.1,9.9,8.6,10,9.9c0.1,1,1.4,0.9,1.4-0.1c0-0.5-0.6-9.1-0.8-10.1 c-0.2-1-1-0.6-1.2-0.2C28.2,2,28.4,1.4,28,2.3c-0.4,0.9-1.5,0.4-1.9,0.3c-1.2-0.5-3.5-1.7-7.2-1.6c-8.5,0.2-17.2,6.5-17,17.5 c0.2,10.7,8.8,16.7,16.8,16.6c7.3-0.1,11.4-4.7,12.6-10C31.7,23.8,30.4,23.5,30,24.8z"/>
	</g>
</svg>`;

const WordmarkFr = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 143 34" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="wordmark-fr-title">
	<title id="wordmark-fr-title">Symbole du Gouvernement du Canada</title>
	<g id="wmms" transform="translate(-1, -1)">
		<path class="fip_flag" d="M137.9,1.2h5.2v10.4h-5.2V1.2z M128.9,6.4l-0.3,0.1c0,0,1.8,1.5,1.8,1.6c0.1,0.1,0.2,0.1,0.1,0.4 c-0.1,0.3-0.2,0.6-0.2,0.6s1.6-0.3,1.8-0.4c0.2,0,0.3,0,0.3,0.2c0,0.2-0.1,1.9-0.1,1.9h0.5c0,0-0.1-1.8-0.1-1.9 c0-0.2,0.1-0.2,0.3-0.2c0.2,0,1.8,0.4,1.8,0.4s-0.1-0.4-0.2-0.6c-0.1-0.3,0-0.3,0.1-0.4c0.1-0.1,1.8-1.6,1.8-1.6l-0.3-0.1 c-0.2-0.1-0.1-0.2-0.1-0.3s0.3-1.1,0.3-1.1s-0.8,0.2-0.9,0.2c-0.1,0-0.2,0-0.2-0.1s-0.2-0.5-0.2-0.5s-0.9,1-1,1.1 c-0.2,0.2-0.4,0-0.3-0.2c0-0.2,0.5-2.3,0.5-2.3s-0.5,0.3-0.7,0.4s-0.3,0.1-0.3-0.1c-0.1-0.2-0.7-1.3-0.7-1.4c0,0-0.6,1.2-0.7,1.4 s-0.2,0.2-0.3,0.1c-0.2-0.1-0.7-0.4-0.7-0.4s0.5,2.1,0.5,2.3s-0.1,0.3-0.3,0.2l-1-1.1c0,0-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.2,0.1 c-0.2,0-1-0.2-1-0.2s0.3,1,0.4,1.1C129.1,6.1,129.1,6.3,128.9,6.4z M122.2,1.2h5.2v10.4h-5.2V1.2z"/>
		<path class="fip_text" d="M144.2,32.4c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6 c-6.7,0-6.8,3.3-6.8,4.1c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9 c0,0.5,0,0.8,0,1.1c0,0.2,0,0.3,0,0.5l0,0l0,0v0.1c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4 c0.1,4,4.1,5.4,6.9,5.3c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2 C145.1,32.2,144.4,31.9,144.2,32.4z M131.7,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8 c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0v0.1l0,0l0,0v0.1l0,0l0,0l0,0v4.2C135.7,31.1,134.1,33.5,131.7,33.5z M122.5,33.4 c-0.4-0.1-2.9,0.2-2.9-7.4s0-23.9,0-23.9c0-0.3,0-1.1-0.9-1.1c-0.9,0-6.9,0.3-7.3,0.4c-0.4,0-0.7,0.5,0,0.5 c0.7,0.1,3.9,0.3,3.9,5.6c0,2.6,0,5.2,0,7.1c0,0.1,0,0.2,0,0.2c0,0.2,0,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.2,0-0.5-0.2 c-0.5-0.4-2.8-1.8-5.7-1.8c-4.7,0-10.5,3.4-10.5,10.4c0,7.5,5.3,11.1,10.8,11.1c2.7,0,4.6-1.2,5.3-1.6c0.8-0.5,0.7-0.4,0.8,0.3 c0.1,0.5,0,1.5,1.4,1.4c1.5-0.2,5.1-0.6,5.8-0.7C123.3,33.9,123.1,33.5,122.5,33.4z M110.1,33.7c-4.4,0-6.7-5.2-6.7-10.2 c0-5.5,3.1-9.2,6.4-9c4.3,0.3,5.4,3.7,5.5,9.8c0,0.4,0,0.8,0,1.3C115.2,31.6,112.7,33.7,110.1,33.7z M98.4,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.8,2,3.8,5v0.1c0,0.1,0,0.2,0,0.2v0.3 c0,0.1,0,0.3,0,0.4c-0.1,1.5-0.5,2-1.7,2.6c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C99.3,32.2,98.7,31.9,98.4,32.4z  M86,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0v0.1l0,0l0,0c0,0.1,0,0.2,0,0.4v-0.1 c0,0,0,0,0,0.1v4.2C89.9,31.1,88.3,33.5,86,33.5z M76.4,33.4c-0.8-0.2-2.2-1.1-2.2-5.5v-8c0-1.9,0.2-6.8-7.3-6.8 c-3.9,0-6.1,2-6.3,2.1c-0.3,0.3-0.5,0.4-0.6-0.1c-0.1-0.4-0.3-1-0.4-1.4c-0.1-0.3-0.3-0.6-1-0.5c-0.7,0.1-5.1,0.8-5.9,1 c-0.7,0.2-0.5,0.5,0,0.6c0.5,0.1,2.9,0.3,2.9,4.4s0,8.6,0,8.6c0,5-1,5.4-1.9,5.7c-1.2,0.3-0.6,0.7-0.1,0.7c0,0,8.9,0,9.1,0 c0.6,0,0.9-0.6-0.3-0.8c-1.2-0.2-2.3-0.9-2.3-4.8c0-0.4,0-4.7,0-5.5c0-2.1-0.5-8.5,5.3-8.6c4.1-0.1,4.5,3.3,4.5,5.5v8.5 c0,3.5-1,4.6-2.2,4.8c-1.1,0.2-0.9,0.7-0.3,0.7c0.2,0,9.3,0,9.3,0C77.2,34.2,77.7,33.7,76.4,33.4z M52.1,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9c0,0.5,0,0.8,0,1.1 c0,0.2,0,0.4-0.1,0.5v0.1l0,0c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C53,32.2,52.3,31.9,52.1,32.4z  M39.6,33.5c-2.8,0-3.5-2.3-3.5-3.5s0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0l0,0 c0,0,0,0.1,0,0.2l0,0l0,0v0.1l0,0l0,0l0,0v4.2C43.6,31.1,42,33.5,39.6,33.5z M30,24.8c-1,3.2-2.9,8.4-9.8,8.6 C13,33.5,8.7,28.6,8.5,19.5C8.2,9.8,12.4,2.4,18.9,2.2c7.3-0.1,9.9,8.6,10,9.9c0.1,1,1.4,0.9,1.4-0.1c0-0.5-0.6-9.1-0.8-10.1 c-0.2-1-1-0.6-1.2-0.2C28.2,2,28.4,1.4,28,2.3c-0.4,0.9-1.5,0.4-1.9,0.3c-1.2-0.5-3.5-1.7-7.2-1.6c-8.5,0.2-17.2,6.5-17,17.5 c0.2,10.7,8.8,16.7,16.8,16.6c7.3-0.1,11.4-4.7,12.6-10C31.7,23.8,30.4,23.5,30,24.8z"/>
	</g>
</svg>`;

const gcdsSignatureCss = "gcds-signature{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}gcds-signature .gcds-signature{display:-ms-flexbox;display:flex}gcds-signature svg{max-width:100%}gcds-signature:not([type=wordmark]) svg{height:var(--gcds-signature-signature-height)}@media screen and (min-width:64em){gcds-signature:not([type=wordmark]) svg{height:2.125rem}}gcds-signature[type=wordmark] svg{height:var(--gcds-signature-wordmark-height);width:auto}gcds-signature:not([variant=white]) svg .fip_text{fill:var( --gcds-signature-color-text)}gcds-signature:not([variant=white]) svg .fip_flag{fill:var(--gcds-signature-color-flag)}gcds-signature[variant=white] svg .fip_flag,gcds-signature[variant=white] svg .fip_text{fill:var(--gcds-signature-white-default)}";

const GcdsSignature = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = undefined;
    this.variant = undefined;
    this.hasLink = undefined;
    this.lang = undefined;
  }
  validateType(newValue) {
    if (newValue != 'signature' && newValue != 'wordmark') {
      this.type = 'signature';
    }
  }
  validateVariant(newValue) {
    if (newValue != 'colour' && newValue != 'white') {
      this.variant = 'colour';
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
  }
  get selectSVG() {
    switch (this.type) {
      case 'wordmark':
        if (this.lang == 'en') {
          return WordmarkEn;
        }
        else {
          return WordmarkFr;
        }
      case 'signature':
      default:
        if (this.lang == 'en') {
          return SignatureEn;
        }
        else {
          return SignatureFr;
        }
    }
  }
  render() {
    const { type, hasLink, lang, selectSVG } = this;
    const linkText = lang == "en" ? "https://canada.ca/en.html" : "https://canada.ca/fr.html";
    return (h(Host, null, hasLink && type === 'signature' ? (h("a", { href: linkText, innerHTML: selectSVG })) : (h("div", { class: "gcds-signature", innerHTML: selectSVG }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "type": ["validateType"],
    "variant": ["validateVariant"]
  }; }
};
GcdsSignature.style = gcdsSignatureCss;

const I18N$3 = {
  "en": {
    step: "Step",
    of: "of",
  },
  "fr": {
    step: "Étape",
    of: "sur",
  }
};

const gcdsStepperCss = ":host .gcds-stepper{color:var(--gcds-stepper-text);font:var(--gcds-stepper-font);margin:var(--gcds-stepper-margin)}";

const GcdsStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.currentStep = undefined;
    this.totalSteps = undefined;
    this.lang = undefined;
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
  }
  render() {
    const { currentStep, lang, totalSteps } = this;
    return (h(Host, null, h("h6", { class: "gcds-stepper" }, `${I18N$3[lang].step} ${currentStep} ${I18N$3[lang].of} ${totalSteps}`)));
  }
  get el() { return getElement(this); }
};
GcdsStepper.style = gcdsStepperCss;

const I18N$2 = {
  "en": {
    characters: {
      allowed: "characters allowed",
      left: "characters left",
    },
  },
  "fr": {
    characters: {
      allowed: "caractères maximum",
      left: "caractères restants",
    },
  }
};

const gcdsTextareaCss = ".sc-gcds-textarea-h .gcds-textarea-wrapper.sc-gcds-textarea{border:0;color:var(--gcds-textarea-default-text);font:var(--gcds-textarea-font);margin:0;max-width:75ch;padding:0;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out;width:100%}.sc-gcds-textarea-h .gcds-textarea-wrapper.sc-gcds-textarea:focus-within{color:var(--gcds-textarea-focus-text)}.sc-gcds-textarea-h .gcds-textarea-wrapper.gcds-disabled.sc-gcds-textarea{color:var(--gcds-textarea-disabled-text)}.sc-gcds-textarea-h .gcds-textarea-wrapper.sc-gcds-textarea .error-message-container.sc-gcds-textarea{display:block}.sc-gcds-textarea-h textarea.sc-gcds-textarea{background-color:var(--gcds-textarea-default-background);background-image:none;border:var(--gcds-textarea-border-width) solid;border-radius:var(--gcds-textarea-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--gcds-textarea-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-textarea-margin);max-width:100%;min-height:var(--gcds-textarea-min-height);min-width:50%;padding:var(--gcds-textarea-padding);-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;width:100%}.sc-gcds-textarea-h textarea.sc-gcds-textarea:focus{border-color:var(--gcds-textarea-focus-text);outline:var(--gcds-textarea-outline-width) solid var(--gcds-textarea-focus-text);outline-offset:var(--gcds-textarea-border-width)}.sc-gcds-textarea-h textarea.sc-gcds-textarea:disabled{background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text);cursor:not-allowed}.sc-gcds-textarea-h textarea.gcds-error.sc-gcds-textarea:not(:focus){border-color:var(--gcds-textarea-danger-border)}";

const GcdsTextarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsChange = createEvent(this, "gcdsChange", 7);
    this.gcdsError = createEvent(this, "gcdsError", 7);
    this.gcdsValid = createEvent(this, "gcdsValid", 7);
    this._validator = defaultValidator;
    this.onFocus = (e) => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = (e) => {
      if (this.blurHandler) {
        this.blurHandler(e);
      }
      else {
        if (this.validateOn == "blur") {
          this.validate();
        }
      }
      this.gcdsBlur.emit();
    };
    this.characterCount = undefined;
    this.cols = undefined;
    this.disabled = false;
    this.errorMessage = undefined;
    this.hideLabel = false;
    this.hint = undefined;
    this.label = undefined;
    this.required = false;
    this.rows = 5;
    this.textareaId = undefined;
    this.value = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.changeHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.inheritedAttributes = {};
    this.hasError = undefined;
    this.lang = undefined;
  }
  validateDisabledTextarea() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    }
    else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
    else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
  * Call any active validators
  */
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({ id: `#${this.textareaId}`, message: `${this.label} - ${this.errorMessage}` });
    }
    else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.textareaId}` });
    }
  }
  handleChange(e) {
    if (this.changeHandler) {
      this.changeHandler(e);
    }
    else {
      let val = e.target && e.target.value;
      this.value = val;
    }
    this.gcdsChange.emit(this.value);
  }
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
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
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    this.validateDisabledTextarea();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, "textarea");
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, ['placeholder']);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { characterCount, cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaId, value, hasError, inheritedAttributes, lang } = this;
    // Use max-width instead of cols attribute to keep field responsive
    const style = {
      maxWidth: `${cols * 1.5}ch`
    };
    const attrsLabel = {
      label,
      required,
    };
    const attrsTextarea = Object.assign({ disabled,
      required,
      rows }, inheritedAttributes);
    if (hint || errorMessage || characterCount) {
      let hintID = hint ? `hint-${textareaId} ` : "";
      let errorID = errorMessage ? `error-message-${textareaId} ` : "";
      let countID = characterCount ? `textarea__count-${textareaId} ` : "";
      attrsTextarea["aria-describedby"] = `${hintID}${errorID}${countID}${attrsTextarea["aria-describedby"] ? `${attrsTextarea["aria-describedby"]}` : ""}`;
    }
    return (h(Host, null, h("div", { class: `gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": textareaId }) : null, errorMessage ?
      h("gcds-error-message", { messageId: textareaId, message: errorMessage })
      : null, h("textarea", Object.assign({}, attrsTextarea, { class: hasError ? 'gcds-error' : null, id: textareaId, name: textareaId, onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${textareaId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: characterCount ? characterCount : null, style: cols ? style : null, ref: element => this.shadowElement = element }), value), characterCount ?
      h("p", { id: `textarea__count-${textareaId}`, "aria-live": "polite" }, value == undefined ? `${characterCount} ${I18N$2[lang].characters.allowed}`
        :
          `${characterCount - value.length} ${I18N$2[lang].characters.left}`)
      : null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["validateDisabledTextarea"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }; }
};
GcdsTextarea.style = gcdsTextareaCss;

const I18N$1 = {
  "en": {
      navLabel: " - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu."
  },
  "fr": {
      navLabel: " - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement."
  }
};

const gcdsTopNavCss = "@layer reset, defaults;@layer reset{:host *{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0}:host ul{padding:0}}@layer defaults{:host{display:block}@media only screen and (width >= 64em){:host{background-color:var(--gcds-top-nav-background)}}:host .gcds-top-nav__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-inline:auto;max-width:var(--gcds-top-nav-max-width);width:90%}@media only screen and (width >= 64em){:host .gcds-top-nav__container{-ms-flex-align:end;align-items:flex-end;-ms-flex-direction:row;flex-direction:row}}@media only screen and (width >= 64em){:host .gcds-top-nav__container .nav-container__list{-ms-flex-align:end;align-items:flex-end;display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host .gcds-top-nav__container .nav-container__list.nav-list--right{-webkit-margin-start:auto;margin-inline-start:auto}:host .gcds-top-nav__container .nav-container__list.nav-list--center{margin-inline:auto}}}";

const GcdsTopNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = undefined;
    this.alignment = 'left';
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
      else {
        for (let i = 0; i < this.el.children.length; i++) {
          if (this.el.children[i].nodeName == "GCDS-NAV-GROUP" && (this.el.children[i].hasAttribute("open"))) {
            await this.el.children[i].toggleNav();
            await this.updateNavItemQueue(this.el);
          }
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
        await this.updateNavItemQueue(e.target, true);
        e.target.focusTrigger();
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
    if (el == this.el && this.navSize == "mobile") {
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
    const { label, alignment, lang } = this;
    return (h(Host, null, h("nav", { "aria-label": `${label}${I18N$1[lang].navLabel}`, class: "gcds-top-nav__container" }, h("gcds-nav-group", { menuLabel: "Menu", closeTrigger: lang == 'fr' ? 'Fermer' : 'Close', openTrigger: "Menu", class: "gcds-mobile-nav gcds-mobile-nav-topnav", ref: element => this.mobile = element, lang: lang }, h("slot", { name: "home" }), h("ul", { role: "menu", class: `nav-container__list nav-list--${alignment}` }, h("slot", null))))));
  }
  get el() { return getElement(this); }
};
GcdsTopNav.style = gcdsTopNavCss;

const I18N = {
  "en": {
    summary: {
      text: "An official website of the Government of Canada.",
      link: "Learn to recognize one",
    },
    content: {
      description: "It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:",
      url: {
        heading: "Canada.ca or gc.ca",
        text: "Government of Canada website's normally use Canada.ca or gc.ca in the URL.",
      },
      languages: {
        heading: "Available in both of Canada's Official Languages",
        text: "Information will be available in both English and French.",
      },
      https: {
        heading: "HTTPS",
        text: "Secure Government of Canada websites use",
      },
      contact: {
        heading: "A point of contact",
        text: "Contact information will have Canada.ca, gc.ca, or the department name in the email address.",
      },
    }
  },
  "fr": {
    summary: {
      text: "Les sites Web officiels du gouvernement du Canada.",
      link: "Comment les reconnaître",
    },
    content: {
      description: "Il peut être difficile de savoir quels sites sont fiables. Avant de partager des renseignements, vérifiez les points suivant pour déterminer s'il s'agit bien d'un site du gouvernement du Canada:",
      url: {
        heading: "Canada.ca ou gc.ca",
        text: "On retrouve normalement Canada.ca ou gc.ca dans l'adresse URL d'un site Web du gouvernement du Canada.",
      },
      languages: {
        heading: "Offert dans les deux langues officielles",
        text: "Vérifiez que les renseignements sont accessibles en français et en anglais.",
      },
      https: {
        heading: "HTTPS",
        text: "Lorsqu'un navigateur affiche les sites Web sécuritaires du gouvernement du Canada, on retrouve",
      },
      contact: {
        heading: "Un point de communication",
        text: "On retrouve Canada.ca, gc.ca ou le nom du ministère dans l'URL de toute adresse courriel du gouvernement du Canada.",
      },
    }
  }
};

const CanadaFlag = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.3 33" width="25">
  <path fill="#FF0000" d="M0,0h16v32.5H0V0z M46.5,16.6l-1-0.5c-0.5-0.2-0.3-0.6-0.2-1.1v-0.2l1-3.6l-2.9,0.6c-0.5,0.1-0.9,0.2-1.1-0.3 l-0.7-1.7l-2.8,3c-0.8,0.8-1.5,0.4-1.2-0.8l1.3-6.2l-1.9,1c-0.5,0.2-0.7,0.3-1-0.2l-2.2-4.4l-2.3,4.6c-0.2,0.3-0.6,0.2-0.9-0.1 l-2.1-1.2l1.4,6.8c0.2,0.9-0.5,1.3-1,0.7L26,9.8l-0.9,1.7c-0.2,0.4-0.4,0.6-1.2,0.4L21,11.3l1.2,3.6c0.1,0.6,0.1,0.9-0.2,1.1 l-1.3,0.7l6,4.9c0.5,0.4,0.4,0.9,0.2,1.5l-0.7,1.7l5.1-1c1.1-0.2,1.6-0.2,1.6,0.4l-0.2,6.3h1.7l-0.2-6.3c0-0.6,0.5-0.6,1.2-0.4 l5.5,1l-0.5-1.7c-0.2-0.7-0.4-0.9,0.2-1.5L46.5,16.6z M51.4,0v32.5h16V0H51.4z" />
</svg>`;

const ContentToggleArrow = `<svg xmlns="http://www.w3.org/2000/svg"  width="12" height="7.4" viewBox="0 0 12 7.4">
  <path d="M10.6,0L6,4.6L1.4,0L0,1.4l6,6l6-6L10.6,0z" />
</svg>`;

const gcdsVerifyBannerCss = ":host .gcds-verify-banner{background-color:var(--gcds-verify-banner-background);color:var(--gcds-verify-banner-text);font:var(--gcds-verify-banner-font)}:host .gcds-verify-banner.verify-banner--is-fixed{position:-webkit-sticky;position:sticky;top:0;width:var(--gcds-verify-banner-max-content-width-full);z-index:9999}:host .gcds-verify-banner .container-lg,:host .gcds-verify-banner .container-md,:host .gcds-verify-banner .container-sm,:host .gcds-verify-banner .container-xl,:host .gcds-verify-banner .container-xs{width:90%}:host .gcds-verify-banner .container-full{max-width:var(--gcds-verify-banner-container-full);padding-inline:var(--gcds-verify-banner-container-padding)}:host .gcds-verify-banner .container-xl{max-width:var(--gcds-verify-banner-container-xl)}:host .gcds-verify-banner .container-lg{max-width:var(--gcds-verify-banner-container-lg)}:host .gcds-verify-banner .container-md{max-width:var(--gcds-verify-banner-container-md)}:host .gcds-verify-banner .container-sm{max-width:var(--gcds-verify-banner-container-sm)}:host .gcds-verify-banner .container-xs{max-width:var(--gcds-verify-banner-container-xs)}:host .gcds-verify-banner .verify-banner__content,:host .gcds-verify-banner summary{font-size:90%}:host .gcds-verify-banner summary{display:-ms-flexbox;display:flex;margin-inline:auto;padding-block:var(--gcds-verify-banner-summary-padding)}:host .gcds-verify-banner summary:hover{cursor:pointer}:host .gcds-verify-banner summary .svg-container,:host .gcds-verify-banner summary p small{margin:var(--gcds-verify-banner-summary-content-margin)}:host .gcds-verify-banner summary p{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner summary .verify-banner__toggle{color:var(--gcds-verify-banner-toggle-text);-ms-flex:0 0 auto;flex:0 0 auto;font-weight:var(--gcds-verify-banner-toggle-font-weight);pointer-events:none;text-decoration:underline}:host .gcds-verify-banner summary .verify-banner__toggle .svg-container path{fill:var(--gcds-verify-banner-toggle-text)}:host .gcds-verify-banner .verify-banner__content{-webkit-border-before:var(--gcds-verify-banner-content-border-width) solid var(--gcds-verify-banner-content-border-color);border-block-start:var(--gcds-verify-banner-content-border-width) solid var(--gcds-verify-banner-content-border-color);margin:0 auto;-webkit-padding-after:var(--gcds-verify-banner-content-padding-block-end);padding-block-end:var(--gcds-verify-banner-content-padding-block-end);-webkit-padding-before:var(--gcds-verify-banner-content-padding-block-start);padding-block-start:var(--gcds-verify-banner-content-padding-block-start)}:host .gcds-verify-banner .verify-banner__content li{list-style:none;margin:var(--gcds-verify-banner-content-list-margin)}:host .gcds-verify-banner .verify-banner__content li h4,:host .gcds-verify-banner .verify-banner__content li p{width:90%}:host .gcds-verify-banner .verify-banner__content li p .svg-container{margin-inline:var(--gcds-verify-banner-content-list-svg-margin)}:host .gcds-verify-banner .verify-banner__content h4{margin:var(--gcds-verify-banner-content-heading-margin)}:host .gcds-verify-banner .verify-banner__content p{line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner[open] summary .verify-banner__toggle svg{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}";

const GcdsVerifyBanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.container = 'xl';
    this.isFixed = false;
    this.lang = undefined;
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
  }
  render() {
    const { container, isFixed, lang } = this;
    return (h(Host, null, h("details", { class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { class: 'svg-container', innerHTML: CanadaFlag }), h("p", null, h("small", null, I18N[lang].summary.text), h("a", { class: "verify-banner__toggle" }, h("small", null, I18N[lang].summary.link), h("span", { class: 'svg-container', innerHTML: ContentToggleArrow })))), h("div", { class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", null, h("small", null, I18N[lang].content.description)), h("br", null), h("gcds-grid", { tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", null, h("h4", null, I18N[lang].content.url.heading), h("p", null, h("small", null, I18N[lang].content.url.text))), h("li", null, h("h4", null, I18N[lang].content.languages.heading), h("p", null, h("small", null, I18N[lang].content.languages.text))), h("li", null, h("h4", null, I18N[lang].content.https.heading), h("p", null, h("small", null, I18N[lang].content.https.text, " ", h("strong", null, "https://"), "."))), h("li", null, h("h4", null, I18N[lang].content.contact.heading), h("p", null, h("small", null, I18N[lang].content.contact.text))))))));
  }
  get el() { return getElement(this); }
};
GcdsVerifyBanner.style = gcdsVerifyBannerCss;

export { GcdsAlert as gcds_alert, GcdsBreadcrumbs as gcds_breadcrumbs, GcdsBreadcrumbsItem as gcds_breadcrumbs_item, GcdsButton as gcds_button, GcdsCard as gcds_card, GcdsCheckbox as gcds_checkbox, GcdsContainer as gcds_container, GcdsDateModified as gcds_date_modified, GcdsDetails as gcds_details, GcdsErrorMessage as gcds_error_message, GcdsErrorSummary as gcds_error_summary, GcdsFieldset as gcds_fieldset, GcdsFileUploader as gcds_file_uploader, GcdsFooter as gcds_footer, GcdsGrid as gcds_grid, GcdsHeader as gcds_header, GcdsHint as gcds_hint, GcdsIcon as gcds_icon, GcdsInput as gcds_input, GcdsLabel as gcds_label, GcdsLangToggle as gcds_lang_toggle, GcdsNavGroup as gcds_nav_group, GcdsNavLink as gcds_nav_link, GcdsPagination as gcds_pagination, GcdsPhaseBanner as gcds_phase_banner, GcdsRadio as gcds_radio, GcdsSearch as gcds_search, GcdsSelect as gcds_select, GcdsSideNav as gcds_side_nav, GcdsSignature as gcds_signature, GcdsStepper as gcds_stepper, GcdsTextarea as gcds_textarea, GcdsTopNav as gcds_top_nav, GcdsVerifyBanner as gcds_verify_banner };