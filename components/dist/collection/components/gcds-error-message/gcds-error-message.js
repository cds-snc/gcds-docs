import { Host, h } from "@stencil/core";
/**
 * An error message is a description of a problem blocking a user goal.
 *
 * @slot default - Slot for the error message content.
 */
export class GcdsErrorMessage {
    render() {
        const { messageId } = this;
        return (h(Host, { key: 'c46004716d37a41b000ff3ffab62c63180e188ba', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'c53d63bc30351226b2d03eed6c9f86eaec4652f2', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '3bf459de433f1e89e24137b262e69e191059487d', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: 'b5447dbab78b57dd418906e7132970569f818308' }, h("slot", { key: '4ff24d41c1cab1e0cece130dac6a391806241c0f' })))));
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
