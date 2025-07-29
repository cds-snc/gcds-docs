import { Host, h } from "@stencil/core";
export class GcdsHint {
    render() {
        const { hintId } = this;
        return (h(Host, { key: '46515bc832daceccea2be387fa1bf1a9fe32991f', id: `hint-${hintId}` }, h("gcds-text", { key: 'c75ff787e0ffcf19921e48ffea09366fa53daa05', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '0661d2891436fd5e255bea2afe9114e779b42a47' }))));
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
                "attribute": "hint-id",
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
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-hint.js.map
