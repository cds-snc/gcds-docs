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
        return (h(Host, { key: '007ca59b715103f7a106650bb40a74724e8532f3' }, h(Tag, { key: '6f4c944c09c4d1fbd620a2ddbd6b638634844307' }, h("slot", { key: '32d15621851a85f0378455d397190bc4782d86f0' }))));
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
