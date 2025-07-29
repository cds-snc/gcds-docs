import { Host, h } from "@stencil/core";
export class GcdsSrOnly {
    constructor() {
        /**
         * Sets the appropriate HTML tag for the content.
         */
        this.tag = 'p';
    }
    validateTag(newValue) {
        const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
        if (!values.includes(newValue)) {
            this.tag = 'p';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTag(this.tag);
    }
    render() {
        const Tag = this.tag;
        return (h(Host, { key: 'f81d19a3fe0a38bc554949c1112fd7cf9f5f4efc' }, h(Tag, { key: '7c6167569363292c04e4269f5f30456fbf2a9838' }, h("slot", { key: 'acc0f901a6085a0d29269f083059d6df791f6f45' }))));
    }
    static get is() { return "gcds-sr-only"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-sr-only.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-sr-only.css"]
        };
    }
    static get properties() {
        return {
            "tag": {
                "type": "string",
                "attribute": "tag",
                "mutable": true,
                "complexType": {
                    "original": "| 'h1'\n    | 'h2'\n    | 'h3'\n    | 'h4'\n    | 'h5'\n    | 'h6'\n    | 'p'\n    | 'span'",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\" | \"p\" | \"span\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the appropriate HTML tag for the content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'p'"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "tag",
                "methodName": "validateTag"
            }];
    }
}
//# sourceMappingURL=gcds-sr-only.js.map
