import { Host, h } from "@stencil/core";
/**
 * Hint provides additional information or context to help users understand the content or functionality of a related element.
 *
 * @slot default - Slot for the hint content.
 */
export class GcdsHint {
    render() {
        const { hintId } = this;
        return (h(Host, { key: '25a3d5821435af859e29c04642bfce0909de92ff', id: `hint-${hintId}` }, h("gcds-text", { key: 'a285c7fbad21a028d9ad043d3f30189b57da7595', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '99d6f85ae16ce1522a41bf1ca671e454384200ec' }))));
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint-id"
            }
        };
    }
    static get elementRef() { return "el"; }
}
