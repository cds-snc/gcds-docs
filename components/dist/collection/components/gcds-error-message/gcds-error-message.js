import { Host, h } from "@stencil/core";
export class GcdsErrorMessage {
    constructor() {
        this.messageId = undefined;
    }
    render() {
        const { messageId } = this;
        return (h(Host, { key: 'a222583eefb309d128159fc38e743d2b0881a38f', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'df574c45206ce2456d7a791068825e2e1e54a7ca', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '369e900ba0e1134abebd736ab6e0338f93b817ba', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: 'd61fa293a5660c17a60eed61906e45d4aa938e00' }, h("slot", { key: '22ddfe43ba49f79f5034128c46debcae3c8c6a61' })))));
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
