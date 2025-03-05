import { Host, h } from "@stencil/core";
export class GcdsErrorMessage {
    constructor() {
        this.messageId = undefined;
    }
    render() {
        const { messageId } = this;
        return (h(Host, { key: '3f2e26f31e50359a0e1726d5f714dd678005cf01', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'a8a20a16968e9a4578466f4fbeafb727077d7424', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: 'a54fc1a0bca6eba54fe1422f6210f42fb94ba348', name: "triangle-exclamation", "margin-right": "50" }), h("strong", { key: '64159579526bfb8df612dac7862048a447e30de2' }, h("slot", { key: '5c9a927de03b56f60b80fe97afe0de19f2e84ee4' })))));
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
