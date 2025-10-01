import { Host, h } from "@stencil/core";
/**
 * The screenreader-only component is text information only accessible with assistive technologies.
 *
 * @slot default - Slot for the hidden accessible content.
 */
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
        return (h(Host, { key: 'c3d546661babf7e4c34bbf46600431ea761b2624' }, h(Tag, { key: '32bd3afe9621aa3bcd787bdb95d64ecb18819e0e' }, h("slot", { key: 'd2c250f425e5e988995957b984f7c05e3413651c' }))));
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
