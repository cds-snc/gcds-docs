import { Host, h } from '@stencil/core';
import { assignLanguage, inheritAttributes, observerConfig } from '../../utils/utils';
import { defaultValidator, getValidator, requiredValidator } from '../../validators';
import i18n from './i18n/i18n';
export class GcdsFileUploader {
  constructor() {
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
      : null, h("div", { class: `file-uploader__input ${value.length > 0 ? "uploaded-files" : ''}` }, h("button", { type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, i18n[lang].button.upload), h("input", Object.assign({ type: "file", id: uploaderId, name: uploaderId }, attrsInput, { onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onChange: (e) => this.handleChange(e), "aria-invalid": hasError ? 'true' : 'false', ref: element => this.shadowElement = element })), value.length > 0 ?
      h("p", { id: "file-uploader__summary" }, h("span", null, i18n[lang].summary.selected, " "), value.map(file => (h("span", null, file, " "))))
      :
        h("p", { id: "file-uploader__summary" }, i18n[lang].summary.unselected)), value.length > 0 ? value.map(file => (h("div", { class: "file-uploader__uploaded-file", "aria-label": `${i18n[lang].removeFile} ${file}.` }, h("span", null, file), h("button", { onClick: (e) => this.removeFile(e) }, h("span", null, i18n[lang].button.remove), h("gcds-icon", { name: "times", size: "text", "margin-left": "200" }))))) : null)));
  }
  static get is() { return "gcds-file-uploader"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-file-uploader.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-file-uploader.css"]
    };
  }
  static get properties() {
    return {
      "uploaderId": {
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
          "text": "Id attribute for a file uploader element."
        },
        "attribute": "uploader-id",
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
          "text": "Form field label."
        },
        "attribute": "label",
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
        "reflect": true,
        "defaultValue": "false"
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
          "text": "Specifies if a file uploader element is disabled or not."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "value": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value for a file uploader element."
        },
        "defaultValue": "[]"
      },
      "accept": {
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
          "text": "Defines the file types the file uploader accepts."
        },
        "attribute": "accept",
        "reflect": true
      },
      "multiple": {
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
          "text": "Boolean that specifies if the user is allowed to select more than one file."
        },
        "attribute": "multiple",
        "reflect": true
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Error message for an invalid file uploader element."
        },
        "attribute": "error-message",
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
      "validator": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Array<string | ValidatorEntry | Validator<string>>",
          "resolved": "(string | ValidatorEntry | Validator<string>)[]",
          "references": {
            "Array": {
              "location": "global"
            },
            "ValidatorEntry": {
              "location": "import",
              "path": "../../validators"
            },
            "Validator": {
              "location": "import",
              "path": "../../validators"
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
      },
      "changeHandler": {
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
          "text": "Emitted when the uploader has focus."
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
          "text": "Emitted when the uploader loses focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "gcdsFileUploaderChange",
        "name": "gcdsFileUploaderChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Update value based on user selection."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "gcdsRemoveFile",
        "name": "gcdsRemoveFile",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Remove file and update value."
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
              "location": "global"
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
        "methodName": "validateDisabledSelect"
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
