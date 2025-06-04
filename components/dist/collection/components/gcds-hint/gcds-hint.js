import { Host, h } from "@stencil/core";
export class GcdsHint {
    constructor() {
        this.hintId = undefined;
    }
    render() {
        const { hintId } = this;
        return (h(Host, { key: 'eb67660e9aef1823546fd67ffb4df34b28b2cadb', id: `hint-${hintId}` }, h("gcds-text", { key: 'f1252b21a52419614fe057aad4a8b117d07ae8b6', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '171998e99a00d21a3436f7dc118d580bb7d0fe77' }))));
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
