import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, i as inheritAttributes, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$2 } from './gcds-icon2.js';

const I18N = {
  en: {
    external: 'Opens destination in a new tab.',
    phone: 'Attempts to open a phone app.',
    download: 'Attempts to download a file to the device.',
    email: 'Opens new message in email program.',
  },
  fr: {
    external: "Ouvre l'emplacement dans un nouvel onglet.",
    phone: "Tente d'ouvrir une application de téléphonie",
    download: "Tente de télécharger un fichier sur l'appareil.",
    email: 'Ouvre un nouveau message dans le logiciel de messagerie.',
  },
};

const gcdsLinkCss = ":host a{color:var(--gcds-link-default);cursor:pointer;text-decoration:underline;-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-link-decoration-thickness);text-underline-offset:var(--gcds-link-underline-offset)}:host a:hover{color:var(--gcds-link-hover);text-decoration-thickness:var(--gcds-link-hover-decoration-thickness)}:host a:focus{background-color:var(--gcds-link-focus-background);border-color:var(--gcds-link-focus-background);border-radius:var(--gcds-link-focus-border-radius);-webkit-box-shadow:var(--gcds-link-focus-box-shadow);box-shadow:var(--gcds-link-focus-box-shadow);color:var(--gcds-link-focus-text);outline:var(--gcds-link-focus-outline-width) solid var(--gcds-link-focus-background);outline-offset:var(--gcds-link-focus-outline-offset);text-decoration:none}:host a.link--small{font:var(--gcds-link-font-small)}:host a.link--regular{font:var(--gcds-link-font-regular)}:host a.link--inherit{font:inherit}:host a.d-block{display:block}:host a slot{display:initial}";

const GcdsLink$1 = /*@__PURE__*/ proxyCustomElement(class GcdsLink extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsClick = createEvent(this, "gcdsClick", 7);
    this.size = 'inherit';
    this.display = 'inline';
    this.href = undefined;
    this.rel = undefined;
    this.target = '_self';
    this.external = false;
    this.download = undefined;
    this.type = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
  }
  validateSize(newValue) {
    const values = ['regular', 'small', 'inherit'];
    if (!values.includes(newValue)) {
      this.size = 'inherit';
    }
  }
  validateDisplay(newValue) {
    const values = ['block', 'inline'];
    if (!values.includes(newValue)) {
      this.display = 'inline';
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
    this.validateSize(this.size);
    this.validateDisplay(this.display);
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'referrerpolicy',
    ]);
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
  }
  render() {
    const { size, lang, display, href, rel, target, external, download, type, inheritedAttributes, } = this;
    const attrs = {
      href,
      rel,
      target,
      download,
      type,
    };
    const isExternal = target === '_blank' || external;
    return (h(Host, null, h("a", Object.assign({ role: "link", tabIndex: 0 }, attrs, { class: `link--${size} ${display != 'inline' ? `d-${display}` : ''}`, ref: element => (this.shadowElement = element), target: isExternal ? '_blank' : target, rel: isExternal ? 'noopener noreferrer' : rel }, inheritedAttributes, { part: "link", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: () => this.gcdsClick.emit() }), h("slot", null), target === '_blank' || external ? (h("gcds-icon", { name: "external-link", label: I18N[lang].external, "margin-left": "100" })) : download !== undefined ? (h("gcds-icon", { name: "download", label: I18N[lang].download, "margin-left": "100" })) : href.toLowerCase().startsWith('mailto:') ? (h("gcds-icon", { "icon-style": "regular", name: "envelope", label: I18N[lang].email, "margin-left": "100" })) : (href.toLowerCase().startsWith('tel:') && (h("gcds-icon", { name: "phone", label: I18N[lang].phone, "margin-left": "100" }))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "size": ["validateSize"],
    "display": ["validateDisplay"]
  }; }
  static get style() { return gcdsLinkCss; }
}, [1, "gcds-link", {
    "size": [1025],
    "display": [1],
    "href": [1],
    "rel": [1],
    "target": [1],
    "external": [4],
    "download": [1],
    "type": [1],
    "inheritedAttributes": [32],
    "lang": [32]
  }, undefined, {
    "size": ["validateSize"],
    "display": ["validateDisplay"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-link", "gcds-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsLink$1);
      }
      break;
    case "gcds-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcdsLink = GcdsLink$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsLink, defineCustomElement };

//# sourceMappingURL=gcds-link.js.map