import { Host, h } from "@stencil/core";
export class GcdsErrorMessage {
    constructor() {
        this.messageId = undefined;
    }
    render() {
        const { messageId } = this;
        return (h(Host, { key: 'c772a009299851d08165315989a3459ba148c69f', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'bfd1698985476b6a0454dc97b5b13cc95d44e1b0', class: "error-message", role: "alert", "margin-bottom": "300" }, h("gcds-icon", { key: 'c24ab3611aa02aef5a112d85dbb4a42b75d87f02', name: "triangle-exclamation", "margin-right": "100" }), h("strong", { key: '00ee268d8d51e05e684aafb2e9e2be2b6db9a053' }, h("slot", { key: 'eb830283a097b75c4a9e72b119dec118688f2ed6' })))));
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
