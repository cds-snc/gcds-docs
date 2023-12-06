import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';

const I18N = {
  en: {
    heading: 'There was a problem',
    subheading: 'Errors were found on this page:',
  },
  fr: {
    heading: 'Un problème est survenu',
    subheading: 'Des erreurs ont été trouvées sur cette page :',
  },
};

const gcdsErrorSummaryCss = ":host .gcds-error-summary{border:var(--gcds-error-summary-border-width) solid var(--gcds-error-summary-border-color);color:var(--gcds-error-summary-text);display:none;margin:var(--gcds-error-summary-margin);padding:var( --gcds-error-summary-padding);transition:background .15s ease-in-out,border .15s ease-in-out,color .15s ease-in-out}:host .gcds-error-summary.gcds-show{display:block}:host .gcds-error-summary:focus,:host .gcds-error-summary:has(:focus-within){border-color:var(--gcds-error-summary-focus-color)}:host .gcds-error-summary:focus .summary__heading,:host .gcds-error-summary:has(:focus-within) .summary__heading{color:var(--gcds-error-summary-focus-color)}:host .gcds-error-summary .summary__heading{font:var(--gcds-error-summary-heading-font);margin:0;padding-block-end:var(--gcds-error-summary-heading-padding-bottom)}:host .gcds-error-summary .summary__errorlist{margin:var(--gcds-error-summary-list-margin);padding:0}:host .gcds-error-summary .summary__errorlist .summary__listitem{max-width:var(--gcds-error-summary-max-width)}:host .gcds-error-summary .summary__errorlist .summary__listitem:not(:last-child){padding:var(--gcds-error-summary-list-item-padding)}:host .gcds-error-summary .summary__errorlist .summary__listitem .summary__link{color:var(--gcds-error-summary-link-color);text-decoration-thickness:var(--gcds-error-summary-link-thickness)}:host .gcds-error-summary .summary__errorlist .summary__listitem .summary__link:hover{text-decoration-thickness:var(--gcds-error-summary-hover-link-thickness)}:host .gcds-error-summary .summary__errorlist .summary__listitem .summary__link:focus{background-color:var(--gcds-error-summary-focus-link-background-color);border-radius:var(--gcds-error-summary-focus-link-border-radius);box-shadow:none;color:var(--gcds-error-summary-focus-link-text);outline:var(--gcds-error-summary-focus-link-outline);outline-offset:var(--gcds-error-summary-focus-link-outline-offset);text-decoration:none}@media screen and (max-width:30rem){:host .gcds-error-summary{padding:var(--gcds-error-summary-mobile-padding)}}";

const GcdsErrorSummary$1 = /*@__PURE__*/ proxyCustomElement(class GcdsErrorSummary extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    if (typeof newErrorLinks == 'string') {
      this.errorLinks = JSON.parse(newErrorLinks);
    }
    else if (typeof newErrorLinks == 'object') {
      this.errorLinks = newErrorLinks;
    }
    // Turn off listen if error-links is being used
    if (this.listen) {
      this.listen = false;
    }
  }
  errorListener(e) {
    if (this.listen && e.target.closest('form') == this.el.closest('form')) {
      this.errorLinksObject[e.detail.id] = e.detail.message;
    }
  }
  validListener(e) {
    if (this.listen && e.target.closest('form') == this.el.closest('form')) {
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
    if (this.listen && e.target.closest('form') == this.el.closest('form')) {
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
    const sortable = [];
    for (const id in this.errorLinksObject) {
      sortable.push([
        id,
        this.errorLinksObject[id],
        document.querySelector(id).getBoundingClientRect().y,
      ]);
    }
    sortable.sort(function (a, b) {
      return a[2] - b[2];
    });
    const objSorted = {};
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
    const element = document.querySelector(id);
    let target = `[for=${id.replace('#', '')}]`;
    if (element.nodeName == 'FIELDSET') {
      target = `#legend-${id.replace('#', '')}`;
    }
    element.closest('form').querySelector(target).scrollIntoView();
    element.focus();
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
    this.listenChanged();
    // Format error-links string / object
    if (this.errorLinks && typeof this.errorLinks == 'string') {
      this.errorQueue = Object.assign({}, JSON.parse(this.errorLinks));
    }
    else if (this.errorLinks && typeof this.errorLinks == 'object') {
      this.errorQueue = Object.assign({}, this.errorLinks);
    }
  }
  render() {
    const { heading, errorQueue, lang, hasSubmitted, errorLinks } = this;
    return (h(Host, null, h("div", { role: "alert", tabindex: "-1", ref: element => (this.shadowElement = element), class: `gcds-error-summary ${(hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0
        ? 'gcds-show'
        : ''}` }, h("h2", { class: "summary__heading" }, heading !== null && heading !== void 0 ? heading : I18N[lang].heading), h("ol", { class: "summary__errorlist" }, (hasSubmitted || errorLinks) &&
      Object.keys(errorQueue).length > 0 &&
      Object.keys(errorQueue).map(key => {
        return (h("li", { class: "summary__listitem" }, h("a", { onClick: e => this.focusElement(e, key), class: "summary__link", href: key }, errorQueue[key])));
      })))));
  }
  get el() { return this; }
  static get watchers() { return {
    "listen": ["listenChanged"],
    "errorLinks": ["errorLinksChanged"]
  }; }
  static get style() { return gcdsErrorSummaryCss; }
}, [1, "gcds-error-summary", {
    "heading": [513],
    "listen": [1028],
    "errorLinks": [1025, "error-links"],
    "lang": [32],
    "errorQueue": [32],
    "hasSubmitted": [32]
  }, [[4, "gcdsError", "errorListener"], [4, "gcdsValid", "validListener"], [4, "submit", "submitListener"]], {
    "listen": ["listenChanged"],
    "errorLinks": ["errorLinksChanged"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-error-summary"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-error-summary":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsErrorSummary$1);
      }
      break;
  } });
}

const GcdsErrorSummary = GcdsErrorSummary$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsErrorSummary, defineCustomElement };

//# sourceMappingURL=gcds-error-summary.js.map