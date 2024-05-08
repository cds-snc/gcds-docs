import { Host, h } from "@stencil/core";
export class GcdsHint {
    constructor() {
        this.hintId = undefined;
    }
    render() {
        const { hintId } = this;
        return (h(Host, { id: `hint-${hintId}` }, h("gcds-text", { class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", null))));
    }
    static get is() { return "gcds-hint"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-hint.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-hint.css"]
        };
    }
    static get properties() {
        return {
            "hintId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Id attribute for the hint."
                },
                "attribute": "hint-id",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-hint.js.map
