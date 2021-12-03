import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
export class MyComponent {
  getText() {
    return format(this.label);
  }
  render() {
    return h("button", null, this.getText());
  }
  static get is() { return "gc-ds-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get properties() { return {
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
        "text": "The button label"
      },
      "attribute": "label",
      "reflect": false
    }
  }; }
}
