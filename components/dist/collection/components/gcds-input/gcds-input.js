import { Component, Element, Event, Host, Prop, h } from '@stencil/core';
export class GcdsInput {
  constructor() {
    /**
     * Input props
     */
    /**
     * Specifies if an input element is disabled or not.
     */
    this.disabled = false;
    /**
     * Set Input types
     */
    this.type = 'text';
    this.onFocus = () => {
      this.gcdsFocus.emit();
    };
    this.onBlur = () => {
      this.gcdsBlur.emit();
    };
  }
  handleChange(e) {
    let val = e.target && e.target.value;
    this.value = val;
    this.gcdsChange.emit(this.value);
  }
  render() {
    const { disabled, errorMessage, hideLabel, hint, inputId, label, required, type, value } = this;
    const attrsInput = {
      disabled,
      required,
      type,
      value,
    };
    const attrsLabel = {
      label,
      required,
    };
    return (h(Host, null,
      h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": inputId })),
      hint ? h("gcds-hint", { hint: hint, "hint-id": inputId }) : null,
      errorMessage ?
        h("gcds-error-message", { "message-id": inputId, message: errorMessage })
        : null,
      h("input", Object.assign({}, attrsInput, { class: errorMessage ? 'error' : null, id: inputId, name: inputId, onBlur: this.onBlur, onFocus: this.onFocus, onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${inputId}`, "aria-describedby": `${hint ? `hint-${inputId}` : ''} ${errorMessage ? `error-message-${inputId}` : ''}`, "aria-invalid": errorMessage ? 'true' : 'false' }))));
  }
  static get is() { return "gcds-input"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gcds-input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gcds-input.css"]
  }; }
  static get properties() { return {
    "disabled": {
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
        "text": "Specifies if an input element is disabled or not."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "errorMessage": {
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
      "reflect": false
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
      "required": false,
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
      "required": false,
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
      "optional": false,
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Default value for an input element."
      },
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get events() { return [{
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
    }]; }
  static get elementRef() { return "el"; }
}
