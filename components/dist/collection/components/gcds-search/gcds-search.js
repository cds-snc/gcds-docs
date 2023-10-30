import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import I18N from "./i18n/I18N";
export class GcdsSearch {
  constructor() {
    this.placeholder = 'Canada.ca';
    this.action = '/sr/srb.html';
    this.method = 'get';
    this.name = 'q';
    this.searchId = 'search';
    this.suggested = undefined;
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
  }
  render() {
    const { placeholder, action, method, name, lang, searchId, suggested } = this;
    const labelText = `${I18N[lang].searchLabel.replace('{$}', placeholder)}`;
    const attrsInput = {
      name,
      placeholder: labelText,
    };
    const formAction = action === '/sr/srb.html'
      ? `https://www.canada.ca/${lang}/sr/srb.html`
      : action;
    return (h(Host, null, h("div", { class: "gcds-search" }, h("h2", { class: "gcds-search__header" }, I18N[lang].search), h("form", { action: formAction, method: method, role: "search", onSubmit: () => this.gcdsSubmit.emit(), class: "gcds-search__form" }, h("gcds-label", { label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ type: "search", id: searchId, list: "search-list", size: 34, maxLength: 170, onChange: () => this.gcdsChange.emit(), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input" })), suggested && (h("datalist", { id: "search-list" }, suggested.map((k, v) => (h("option", { value: k, key: v }))))), h("gcds-button", { type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { name: "search", label: I18N[lang].search, "fixed-width": true }))))));
  }
  static get is() { return "gcds-search"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-search.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-search.css"]
    };
  }
  static get properties() {
    return {
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the placeholder and label for the search input. Becomes \"Search [placeholder]\""
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "'Canada.ca'"
      },
      "action": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the action for the search form. Default will be canada.ca global search"
        },
        "attribute": "action",
        "reflect": false,
        "defaultValue": "'/sr/srb.html'"
      },
      "method": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'get' | 'post'",
          "resolved": "\"get\" | \"post\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the form method of the search form"
        },
        "attribute": "method",
        "reflect": false,
        "defaultValue": "'get'"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the name of the search input"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "'q'"
      },
      "searchId": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the name of the search input"
        },
        "attribute": "search-id",
        "reflect": false,
        "defaultValue": "'search'"
      },
      "suggested": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Array<string>",
          "resolved": "string[]",
          "references": {
            "Array": {
              "location": "global",
              "id": "global::Array"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set a list of predefined search terms"
        }
      }
    };
  }
  static get states() {
    return {
      "lang": {}
    };
  }
  static get events() {
    return [{
        "method": "gcdsChange",
        "name": "gcdsChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the search input value has changed."
        },
        "complexType": {
          "original": "object",
          "resolved": "object",
          "references": {}
        }
      }, {
        "method": "gcdsFocus",
        "name": "gcdsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the search input value has gained focus."
        },
        "complexType": {
          "original": "object",
          "resolved": "object",
          "references": {}
        }
      }, {
        "method": "gcdsBlur",
        "name": "gcdsBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the search input has lost focus."
        },
        "complexType": {
          "original": "object",
          "resolved": "object",
          "references": {}
        }
      }, {
        "method": "gcdsSubmit",
        "name": "gcdsSubmit",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the search form has submitted."
        },
        "complexType": {
          "original": "object",
          "resolved": "object",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-search.js.map
