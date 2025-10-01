import { Host, h } from "@stencil/core";
/**
 * Hint provides additional information or context to help users understand the content or functionality of a related element.
 *
 * @slot default - Slot for the hint content.
 */
export class GcdsHint {
    render() {
        const { hintId } = this;
        return (h(Host, { key: '61a3e7529f1f8cdab787a3be7f6b1d38b06cf29d', id: `hint-${hintId}` }, h("gcds-text", { key: '32304bb4004c7357f63ea4c04b39be5fa1b491a8', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '2313fb6ca5b5fde4572e522c86d249508eecf900' }))));
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
