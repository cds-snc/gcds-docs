import { Host, h } from "@stencil/core";
/**
 * Hint provides additional information or context to help users understand the content or functionality of a related element.
 *
 * @slot default - Slot for the hint content.
 */
export class GcdsHint {
    render() {
        const { hintId } = this;
        return (h(Host, { key: '43409b1e4ecafb39638dc4ce60ba021024737559', id: `hint-${hintId}` }, h("gcds-text", { key: '4681f54c9870c6eacc680bf3e4b1fce706d4aa59', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '2c5b966609edebec1090969cc9e02b13205aadfb' }))));
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
