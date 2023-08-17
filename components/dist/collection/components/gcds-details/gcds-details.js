import { Host, h } from '@stencil/core';
export class GcdsDetails {
  constructor() {
    this.detailsTitle = undefined;
    this.open = false;
  }
  render() {
    const { detailsTitle, open } = this;
    return (h(Host, null, h("details", { class: "gcds-details", open: open ? true : false }, h("summary", null, h("p", null, detailsTitle)), h("div", { class: "details__panel" }, h("slot", null)))));
  }
  static get is() { return "gcds-details"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-details.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-details.css"]
    };
  }
  static get properties() {
    return {
      "detailsTitle": {
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
          "text": "The details title summarizes the panel content."
        },
        "attribute": "details-title",
        "reflect": false
      },
      "open": {
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
          "text": "Defines if the details panel is open by default or not."
        },
        "attribute": "open",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
