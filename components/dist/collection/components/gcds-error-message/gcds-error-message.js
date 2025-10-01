import { Host, h } from "@stencil/core";
/**
 * An error message is a description of a problem blocking a user goal.
 *
 * @slot default - Slot for the error message content.
 */
export class GcdsErrorMessage {
    render() {
        const { messageId } = this;
        return (h(Host, { key: '045fc9bca1001d5ad8a083333b64293c8152c4e5', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'de9f869bdbe90f798821bffbe8aa9e930d703544', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '0f579edfda3b98171166c90ee6b87d4e025762da', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: '92704a625f29719fc7f31426fb6d20756213de30' }, h("slot", { key: '657508619840d11cfdd81fb207de294bc1256de7' })))));
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
