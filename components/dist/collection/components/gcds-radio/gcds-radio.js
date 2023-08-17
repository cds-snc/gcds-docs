import { Host, h } from '@stencil/core';
import { assignLanguage, elementGroupCheck, inheritAttributes, observerConfig } from '../../utils/utils';
export class GcdsRadio {
  constructor() {
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
  static get is() { return "gcds-radio"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-radio.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-radio.css"]
    };
  }
  static get properties() {
    return {
      "radioId": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Id attribute for an input element."
        },
        "attribute": "radio-id",
        "reflect": true
      },
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
          "text": "Form field label"
        },
        "attribute": "label",
        "reflect": true
      },
      "name": {
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
          "text": "Name attribute for an input element."
        },
        "attribute": "name",
        "reflect": true
      },
      "required": {
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
          "text": "Specifies if a form field is required or not."
        },
        "attribute": "required",
        "reflect": true
      },
      "disabled": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies if an input element is disabled or not."
        },
        "attribute": "disabled",
        "reflect": true
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies if an input element is checked."
        },
        "attribute": "checked",
        "reflect": true
      },
      "value": {
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
          "text": "Value for an input element."
        },
        "attribute": "value",
        "reflect": true
      },
      "hint": {
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
          "text": "Hint displayed below the label."
        },
        "attribute": "hint",
        "reflect": true
      },
      "clickHandler": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Function",
          "resolved": "Function",
          "references": {
            "Function": {
              "location": "global"
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
              "location": "global"
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
              "location": "global"
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
      "hasError": {},
      "parentError": {},
      "inheritedAttributes": {},
      "lang": {}
    };
  }
  static get events() {
    return [{
        "method": "gcdsRadioChange",
        "name": "gcdsRadioChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the radio button is checked"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
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
          "text": "Emitted when the radio has focus."
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
          "text": "Emitted when the radio loses focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "hasError",
        "methodName": "validateHasError"
      }];
  }
  static get listeners() {
    return [{
        "name": "gcdsRadioChange",
        "method": "gcdsradioChangeEventHandler",
        "target": "document",
        "capture": false,
        "passive": false
      }, {
        "name": "gcdsGroupError",
        "method": "gcdsGroupError",
        "target": "body",
        "capture": false,
        "passive": false
      }, {
        "name": "gcdsGroupErrorClear",
        "method": "gcdsGroupErrorClear",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
