import { Host, h } from "@stencil/core";
export class GcdsHint {
    constructor() {
        this.hintId = undefined;
    }
    render() {
        const { hintId } = this;
        return (h(Host, { key: '70f6130f318cfea9a1743eb60472aa832fb213ee', id: `hint-${hintId}` }, h("gcds-text", { key: '4d159a2f81cac7b9e442b4268143400b334858ef', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: 'cf8b840c22e2238b051c5804bb46fbd8272e764d' }))));
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
