import { Host, h, } from "@stencil/core";
import { assignLanguage, inheritAttributes, observerConfig, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
export class GcdsInput {
  constructor() {
    this._validator = defaultValidator;
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
      else {
        if (this.validateOn == 'blur') {
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
      this.errorMessage = '';
    }
    else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
    else if (this.errorMessage == '') {
      this.hasError = false;
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = 'blur';
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
      this.gcdsError.emit({
        id: `#${this.inputId}`,
        message: `${this.label} - ${this.errorMessage}`,
      });
    }
    else {
      this.errorMessage = '';
      this.gcdsValid.emit({ id: `#${this.inputId}` });
    }
  }
  submitListener(e) {
    if (e.target == this.el.closest('form')) {
      if (this.validateOn && this.validateOn != 'other') {
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
      const val = e.target && e.target.value;
      this.value = val;
    }
    this.gcdsChange.emit(this.value);
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
    this.validateDisabledInput();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, 'input', this.type);
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'placeholder',
    ]);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { disabled, errorMessage, hideLabel, hint, inputId, label, required, size, type, value, hasError, autocomplete, inheritedAttributes, lang, } = this;
    // Use max-width instead of size attribute to keep field responsive
    const style = {
      maxWidth: `${size * 1.5}ch`,
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
      const hintID = hint ? `hint-${inputId} ` : '';
      const errorID = errorMessage ? `error-message-${inputId} ` : '';
      attrsInput['aria-describedby'] = `${hintID}${errorID}${attrsInput['aria-describedby']
        ? ` ${attrsInput['aria-describedby']}`
        : ''}`;
    }
    return (h(Host, null, h("div", { class: `gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": inputId }) : null, errorMessage ? (h("gcds-error-message", { messageId: inputId, message: errorMessage })) : null, h("input", Object.assign({}, attrsInput, { class: hasError ? 'gcds-error' : null, id: inputId, name: inputId, onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onInput: e => this.handleChange(e), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: size, style: size ? style : null, ref: element => (this.shadowElement = element) })))));
  }
  static get is() { return "gcds-input"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-input.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-input.css"]
    };
  }
  static get properties() {
    return {
      "disabled": {
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
          "text": "Specifies if an input element is disabled or not."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "errorMessage": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Error message for an invalid input element."
        },
        "attribute": "error-message",
        "reflect": false
      },
      "hideLabel": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies if the label is hidden or not."
        },
        "attribute": "hide-label",
        "reflect": false,
        "defaultValue": "false"
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Hint displayed below the label and above the input field."
        },
        "attribute": "hint",
        "reflect": false
      },
      "inputId": {
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
          "text": "Id + name attribute for an input element."
        },
        "attribute": "input-id",
        "reflect": false
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
        "reflect": false
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies if a form field is required or not."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size attribute for an input element.\nDefines max-length as well."
        },
        "attribute": "size",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'email' | 'number' | 'password' | 'search' | 'text' | 'url'",
          "resolved": "\"email\" | \"number\" | \"password\" | \"search\" | \"text\" | \"url\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set Input types"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'text'"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Default value for an input element."
        },
        "attribute": "value",
        "reflect": false
      },
      "autocomplete": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'on' | 'off'",
          "resolved": "\"off\" | \"on\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "String to have autocomplete enabled"
        },
        "attribute": "autocomplete",
        "reflect": false
      },
      "changeHandler": {
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
          "text": "Custom callback function on change event"
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
      },
      "validator": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Array<\n    string | ValidatorEntry | Validator<string>\n  >",
          "resolved": "(string | ValidatorEntry | Validator<string>)[]",
          "references": {
            "Array": {
              "location": "global",
              "id": "global::Array"
            },
            "ValidatorEntry": {
              "location": "import",
              "path": "../../validators",
              "id": "src/validators/index.ts::ValidatorEntry"
            },
            "Validator": {
              "location": "import",
              "path": "../../validators",
              "id": "src/validators/index.ts::Validator"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Array of validators"
        }
      },
      "validateOn": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'blur' | 'submit' | 'other'",
          "resolved": "\"blur\" | \"other\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set event to call validator"
        },
        "attribute": "validate-on",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "inheritedAttributes": {},
      "hasError": {},
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
          "text": "Emitted when the input has focus."
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
          "text": "Emitted when the input loses focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "gcdsChange",
        "name": "gcdsChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Update value based on user input."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "gcdsError",
        "name": "gcdsError",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input has a validation error."
        },
        "complexType": {
          "original": "object",
          "resolved": "object",
          "references": {}
        }
      }, {
        "method": "gcdsValid",
        "name": "gcdsValid",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input has a validation error."
        },
        "complexType": {
          "original": "object",
          "resolved": "object",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "validate": {
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
          "text": "Call any active validators",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "disabled",
        "methodName": "validateDisabledInput"
      }, {
        "propName": "errorMessage",
        "methodName": "validateErrorMessage"
      }, {
        "propName": "validator",
        "methodName": "validateValidator"
      }, {
        "propName": "hasError",
        "methodName": "validateHasError"
      }];
  }
  static get listeners() {
    return [{
        "name": "submit",
        "method": "submitListener",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=gcds-input.js.map