import { Host, h } from "@stencil/core";
/**
 * An error message is a description of a problem blocking a user goal.
 *
 * @slot default - Slot for the error message content.
 */
export class GcdsErrorMessage {
    render() {
        const { messageId } = this;
        return (h(Host, { key: '21581fffc30d2d5b32f190fb2e3363ce9d5e8df3', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: '4e17781e0c19fa251d7f2c401b8ef87cc6027e02', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '3fdb32f58f2d4bba9cb7892c164310389c12268e', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: '9b4cf0d7d579dd6f0276205e80d426b39e10b823' }, h("slot", { key: '63e6cbf5ab1388c78b228bd46deea73893e5184b' })))));
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "message-id"
            }
        };
    }
    static get elementRef() { return "el"; }
}
