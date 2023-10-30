import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsErrorSummary {
  constructor() {
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
        : ''}` }, h("h2", { class: "summary__heading" }, heading !== null && heading !== void 0 ? heading : i18n[lang].heading), h("ol", { class: "summary__errorlist" }, (hasSubmitted || errorLinks) &&
      Object.keys(errorQueue).length > 0 &&
      Object.keys(errorQueue).map(key => {
        return (h("li", { class: "summary__listitem" }, h("a", { onClick: e => this.focusElement(e, key), class: "summary__link", href: key }, errorQueue[key])));
      })))));
  }
  static get is() { return "gcds-error-summary"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-error-summary.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-error-summary.css"]
    };
  }
  static get properties() {
    return {
      "heading": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set error summary heading"
        },
        "attribute": "heading",
        "reflect": true
      },
      "listen": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies if the error summary should listen for GcdsError event to generate error list."
        },
        "attribute": "listen",
        "reflect": false,
        "defaultValue": "true"
      },
      "errorLinks": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | object",
          "resolved": "object | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Object of list items for error list. Format: { link-href: link-label }"
        },
        "attribute": "error-links",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "lang": {},
      "errorQueue": {},
      "hasSubmitted": {}
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "listen",
        "methodName": "listenChanged"
      }, {
        "propName": "errorLinks",
        "methodName": "errorLinksChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "gcdsError",
        "method": "errorListener",
        "target": "document",
        "capture": false,
        "passive": false
      }, {
        "name": "gcdsValid",
        "method": "validListener",
        "target": "document",
        "capture": false,
        "passive": false
      }, {
        "name": "submit",
        "method": "submitListener",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=gcds-error-summary.js.map
