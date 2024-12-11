import { Host, h } from "@stencil/core";
export class GcdsErrorMessage {
    constructor() {
        this.messageId = undefined;
    }
    render() {
        const { messageId } = this;
        return (h(Host, { key: 'c772a009299851d08165315989a3459ba148c69f', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'bfd1698985476b6a0454dc97b5b13cc95d44e1b0', class: "error-message", role: "alert", "margin-bottom": "100" }, h("gcds-icon", { key: '1c2298cd79b7cf5ef2aee44db03adbdf0308e1ab', name: "triangle-exclamation", "margin-right": "50" }), h("strong", { key: '745e3eb8218f02a15832e5adc7d802473819c7cd' }, h("slot", { key: 'fd0412b7526c83be37b0302362611be4764f588d' })))));
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
