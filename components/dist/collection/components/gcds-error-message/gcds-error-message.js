import { Host, h } from "@stencil/core";
export class GcdsErrorMessage {
    render() {
        const { messageId } = this;
        return (h(Host, { key: '16d5186a26d2c58f5ad8c7a7e8daffeb101aa620', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: '7ea4ca8c831ea7a505d566cebb9bddf803742258', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '6c748ff14a06525536d11bd0213f9b645e75f6bc', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: '9f8f058bc6c9379c29c41c011a4ce9d23a2d499e' }, h("slot", { key: '3ccc99fbadee6d0edeffabf6865e2c4914057511' })))));
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
                "attribute": "message-id",
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
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-error-message.js.map
