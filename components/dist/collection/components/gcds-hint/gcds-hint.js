import { Host, h } from "@stencil/core";
export class GcdsHint {
    constructor() {
        this.hint = undefined;
        this.hintId = undefined;
    }
    render() {
        const { hint, hintId } = this;
        return (h(Host, { id: `hint-${hintId}` }, h("p", { class: "gcds-hint" }, hint)));
    }
    static get is() { return "gcds-hint"; }
    static get encapsulation() { return "scoped"; }
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
            "hint": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Hint displayed below the label and above the input field."
                },
                "attribute": "hint",
                "reflect": false
            },
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
