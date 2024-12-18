import { Host, h } from "@stencil/core";
export class GcdsErrorMessage {
    constructor() {
        this.messageId = undefined;
    }
    render() {
        const { messageId } = this;
        return (h(Host, { key: 'c772a009299851d08165315989a3459ba148c69f', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: '7d56288b047bc42825e42659d4bd860d4fc8a21f', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '3e33a446e6f881f76bd223039bf70c658c9b58fc', name: "triangle-exclamation", "margin-right": "50" }), h("strong", { key: '6e5821532c050461514a6dd72476c9f8ceec65e5' }, h("slot", { key: 'f214238880df37d722080260bebc1ac1a4d0c4ae' })))));
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
