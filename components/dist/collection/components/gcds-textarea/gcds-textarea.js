import { Component, Element, Event, Host, Prop, h } from '@stencil/core';
export class GcdsTextarea {
  constructor() {
    /**
     * Specifies if a textarea element is disabled or not.
     */
    this.disabled = false;
    /**
     * Default value for textarea rows.
     */
    this.rows = 5;
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
  async componentWillLoad() {
    // Define lang attribute
    if (!this.el.getAttribute('lang')) {
      if (document.documentElement.getAttribute('lang') == 'en' || !document.documentElement.getAttribute('lang')) {
        this.lang = 'en';
      }
      else {
        this.lang = 'fr';
      }
    }
    else if (this.el.getAttribute('lang') == 'en') {
      this.lang = 'en';
    }
    else {
      this.lang = 'fr';
    }
  }
  render() {
    const { cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaCharacterCount, textareaId, value } = this;
    const attrsLabel = {
      label,
      required,
    };
    const attrsTextarea = {
      cols,
      disabled,
      required,
      rows,
    };
    return (h(Host, null,
      h("fieldset", { class: `${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}` },
        h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId })),
        hint ? h("gcds-hint", { hint: hint, "hint-id": textareaId }) : null,
        errorMessage ?
          h("gcds-error-message", { "message-id": textareaId, message: errorMessage })
          : null,
        h("textarea", Object.assign({}, attrsTextarea, { class: errorMessage ? 'error' : null, id: textareaId, name: textareaId, onBlur: this.onBlur, onFocus: this.onFocus, onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${textareaId}`, "aria-describedby": `${hint ? `hint-${textareaId}` : ''} ${errorMessage ? `error-message-${textareaId}` : ''} ${textareaCharacterCount ? `count-${textareaId}` : ''}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: textareaCharacterCount ? textareaCharacterCount : null }), value),
        textareaCharacterCount ?
          h("p", { id: `count-${textareaId}`, "aria-live": "polite" }, this.lang == 'en' ?
            value == undefined ? `${textareaCharacterCount} characters allowed`
              : `${textareaCharacterCount - value.length} characters left`
            :
              value == undefined ? `${textareaCharacterCount} caractères maximum`
                : `${textareaCharacterCount - value.length} caractères restants`)
          : null)));
  }
  static get is() { return "gcds-textarea"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gcds-textarea.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gcds-textarea.css"]
  }; }
  static get properties() { return {
    "cols": {
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
        "text": "Default value for textarea cols (the min-width for textarea's is 50%)."
      },
      "attribute": "cols",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specifies if a textarea element is disabled or not."
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
        "text": "Error message for an invalid textarea element."
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
        "text": "Hint displayed below the label and above the textarea field."
      },
      "attribute": "hint",
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
    "rows": {
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
        "text": "Default value for textarea rows."
      },
      "attribute": "rows",
      "reflect": false,
      "defaultValue": "5"
    },
    "textareaCharacterCount": {
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
        "text": "Sets the maxlength attribute for the textarea element."
      },
      "attribute": "textarea-character-count",
      "reflect": false
    },
    "textareaId": {
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
        "text": "Id + name attribute for a textarea element."
      },
      "attribute": "textarea-id",
      "reflect": false
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
        "text": "Emitted when the textarea has focus."
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
        "text": "Emitted when the textarea loses focus."
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
