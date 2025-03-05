import { Host, h } from "@stencil/core";
export class GcdsHint {
    constructor() {
        this.hintId = undefined;
    }
    render() {
        const { hintId } = this;
        return (h(Host, { key: '8e9af18f71f043062a78de179236357539afe979', id: `hint-${hintId}` }, h("gcds-text", { key: 'bac3fc4edbbb00b2191989bc155636aa0ab6c68c', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '1fdb52992e56952156704305469a85e30b2bb398' }))));
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
