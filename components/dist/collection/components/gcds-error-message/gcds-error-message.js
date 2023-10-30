import { Host, h } from "@stencil/core";
export class GcdsErrorMessage {
  constructor() {
    this.messageId = undefined;
    this.message = undefined;
  }
  render() {
    const { messageId, message } = this;
    return (h(Host, { id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("p", { class: "error-message", role: "alert" }, message)));
  }
  static get is() { return "gcds-error-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-error-message.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-error-message.css"]
    };
  }
  static get properties() {
    return {
      "messageId": {
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
          "text": "Id attribute for the error message."
        },
        "attribute": "message-id",
        "reflect": false
      },
      "message": {
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
          "text": "Error message for an invalid form field."
        },
        "attribute": "message",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-error-message.js.map
