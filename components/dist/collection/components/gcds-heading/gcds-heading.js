import { Host, h } from "@stencil/core";
import { SpacingArray } from "../../utils/types/spacing";
export class GcdsHeading {
    constructor() {
        this.tag = undefined;
        this.characterLimit = true;
        this.marginTop = undefined;
        this.marginBottom = '300';
    }
    validateTag(newValue) {
        const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        if (!values.includes(newValue)) {
            console.error('Not a valid tag.');
        }
    }
    validateMarginTop(newValue) {
        if (!this.marginTop ||
            (this.marginTop && !SpacingArray.includes(newValue))) {
            this.marginTop = this.tag === 'h1' ? '0' : '600';
        }
    }
    validateMarginBottom(newValue) {
        if (this.marginBottom &&
            !SpacingArray.includes(newValue)) {
            this.marginBottom = '300';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTag(this.tag);
        this.validateMarginTop(this.marginTop);
        this.validateMarginBottom(this.marginBottom);
    }
    render() {
        const { characterLimit, marginTop, marginBottom, tag } = this;
        const Tag = tag;
        return (h(Host, { key: 'f26743658ce725d64a3342709eb5183ac883b258' }, h(Tag, { key: '14b13d3759c5c4cad292b9b5e3b6262682a6f616', class: `
            gcds-heading
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          ` }, h("slot", { key: '3e5bbde39229e946e88d3e5d7e88421cc9486d3c' }))));
    }
    static get is() { return "gcds-heading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-heading.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-heading.css"]
        };
    }
    static get properties() {
        return {
            "tag": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the appropriate HTML tag for the selected level."
                },
                "attribute": "tag",
                "reflect": false
            },
            "characterLimit": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the line length to a maximum amount of characters per line for\neach heading level, ensuring a comfortable, accessible reading length."
                },
                "attribute": "character-limit",
                "reflect": false,
                "defaultValue": "true"
            },
            "marginTop": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "SpacingValues",
                    "resolved": "\"0\" | \"25\" | \"50\" | \"75\" | \"100\" | \"125\" | \"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"1250\"",
                    "references": {
                        "SpacingValues": {
                            "location": "import",
                            "path": "../../utils/types/spacing",
                            "id": "src/utils/types/spacing.tsx::SpacingValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds margin above the heading. The default margin-top for h1 is set to 0,\nwhile for h2 to h6 headings, it's 600."
                },
                "attribute": "margin-top",
                "reflect": false
            },
            "marginBottom": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "SpacingValues",
                    "resolved": "\"0\" | \"25\" | \"50\" | \"75\" | \"100\" | \"125\" | \"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"1250\"",
                    "references": {
                        "SpacingValues": {
                            "location": "import",
                            "path": "../../utils/types/spacing",
                            "id": "src/utils/types/spacing.tsx::SpacingValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds margin below the heading. The default margin-botttom is 300."
                },
                "attribute": "margin-bottom",
                "reflect": false,
                "defaultValue": "'300'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "tag",
                "methodName": "validateTag"
            }, {
                "propName": "marginTop",
                "methodName": "validateMarginTop"
            }, {
                "propName": "marginBottom",
                "methodName": "validateMarginBottom"
            }];
    }
}
//# sourceMappingURL=gcds-heading.js.map
