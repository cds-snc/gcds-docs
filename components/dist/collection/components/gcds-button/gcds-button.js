import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import { inheritAttributes } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsButton {
  constructor() {
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
    return (h(Host, null, h(Tag, Object.assign({}, attrs, { id: buttonId, onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onClick: e => this.handleClick(e), class: `button--role-${buttonRole} button--${buttonStyle} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), h("slot", { name: "left" }), h("slot", null), type === 'link' && target === '_blank' ? (h("gcds-icon", { name: "external-link", label: i18n[lang].label, "margin-left": "200" })) : (h("slot", { name: "right" })))));
  }
  static get is() { return "gcds-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-button.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-button.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'submit' | 'reset' | 'button' | 'link'",
          "resolved": "\"button\" | \"link\" | \"reset\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set button types"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "buttonRole": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "| 'primary'\n    | 'secondary'\n    | 'danger'\n    | 'skip-to-content'",
          "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"skip-to-content\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the main style"
        },
        "attribute": "button-role",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "buttonStyle": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'solid' | 'text-only'",
          "resolved": "\"solid\" | \"text-only\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the style variant"
        },
        "attribute": "button-style",
        "reflect": false,
        "defaultValue": "'solid'"
      },
      "size": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'regular' | 'small'",
          "resolved": "\"regular\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the button size"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'regular'"
      },
      "buttonId": {
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
          "text": "The buttonId attribute specifies the id for a <button> element."
        },
        "attribute": "button-id",
        "reflect": false
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The name attribute specifies the name for a <button> element."
        },
        "attribute": "name",
        "reflect": false
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The disabled attribute for a <button> element."
        },
        "attribute": "disabled",
        "reflect": false
      },
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The href attribute specifies the URL of the page the link goes to"
        },
        "attribute": "href",
        "reflect": false
      },
      "rel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The rel attribute specifies the relationship between the current document and the linked document"
        },
        "attribute": "rel",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The target attribute specifies where to open the linked document"
        },
        "attribute": "target",
        "reflect": false
      },
      "download": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink"
        },
        "attribute": "download",
        "reflect": false
      },
      "clickHandler": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Function",
          "resolved": "Function",
          "references": {
            "Function": {
              "location": "global",
              "id": "global::Function"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Custom callback function on click event"
        }
      },
      "focusHandler": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Function",
          "resolved": "Function",
          "references": {
            "Function": {
              "location": "global",
              "id": "global::Function"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Custom callback function on focus event"
        }
      },
      "blurHandler": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Function",
          "resolved": "Function",
          "references": {
            "Function": {
              "location": "global",
              "id": "global::Function"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Custom callback function on blur event"
        }
      }
    };
  }
  static get states() {
    return {
      "inheritedAttributes": {},
      "lang": {}
    };
  }
  static get events() {
    return [{
        "method": "gcdsFocus",
        "name": "gcdsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the button has focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
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
          "text": "Emitted when the button loses focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "focusElement": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Focus element",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "type",
        "methodName": "validateType"
      }, {
        "propName": "buttonRole",
        "methodName": "validateButtonRole"
      }, {
        "propName": "buttonStyle",
        "methodName": "validateButtonStyle"
      }, {
        "propName": "size",
        "methodName": "validateSize"
      }];
  }
}
//# sourceMappingURL=gcds-button.js.map
