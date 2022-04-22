import { Component, Element, Host, Prop, h } from '@stencil/core';
export class GcdsLabel {
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
    const { hideLabel, labelFor, label, required, lang } = this;
    const requiredText = lang == "en" ? "required" : "obligatoire";
    return (h(Host, { id: `label-for-${labelFor}` },
      h("label", { htmlFor: labelFor, class: `${hideLabel ? 'hidden' : ''} ${required ? 'required' : ''}` },
        h("span", null, label),
        required ?
          h("strong", { class: "required" },
            "(",
            requiredText,
            ")")
          : null)));
  }
  static get is() { return "gcds-label"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gcds-label.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gcds-label.css"]
  }; }
  static get properties() { return {
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
    "labelFor": {
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
        "text": "Defines the label's for attribute."
      },
      "attribute": "label-for",
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
    }
  }; }
  static get elementRef() { return "el"; }
}
