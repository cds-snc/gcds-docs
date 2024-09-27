import { Host, h } from "@stencil/core";
export class GcdsSrOnly {
    constructor() {
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
        return (h(Host, { key: 'e86bd5be2d850425f77999ffd21f08ddbc06efce' }, h(Tag, { key: '70fbce245104348613399cda52a68aa2053e0ebd' }, h("slot", { key: '6c80f2f968eb292c4b551336930c58e5aae2fd56' }))));
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
                "attribute": "tag",
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
