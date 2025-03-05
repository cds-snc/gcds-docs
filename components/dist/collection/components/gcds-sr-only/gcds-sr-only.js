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
        return (h(Host, { key: 'ca9a1ff72b50c391ac0ce0e4eb8242221aa43820' }, h(Tag, { key: '7e66d8786d82a9f48bd18a029e26d4a16fe825e6' }, h("slot", { key: '16009321706450caf62862686f82ee7158db97f5' }))));
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
