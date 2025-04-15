import { Host, h } from "@stencil/core";
export class GcdsErrorMessage {
    constructor() {
        this.messageId = undefined;
    }
    render() {
        const { messageId } = this;
        return (h(Host, { key: '3f2e26f31e50359a0e1726d5f714dd678005cf01', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'a8a20a16968e9a4578466f4fbeafb727077d7424', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '0ec129fc4a98c7232c2fd9a6fbbfa936f9ce471a', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: 'bcb3dd9ed9b3e4d31979abeb6a2772c7073a7918' }, h("slot", { key: 'f5b40163bd642d274789295c3b9cd84d27e157dd' })))));
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
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-error-message.js.map
