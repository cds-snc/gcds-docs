import { Host, h } from "@stencil/core";
import { SpacingArray } from "../../utils/types/spacing";
/**
 * A heading is a title that establishes levels of hierarchy to organize page content into a structure and matches Canada.ca typography styles.
 *
 * @slot default - Slot for the heading content
 */
export class GcdsHeading {
    constructor() {
        /**
         * Sets the line length to a maximum amount of characters per line for
         * each heading level, ensuring a comfortable, accessible reading length.
         */
        this.characterLimit = true;
        /**
         * Adds margin below the heading. The default margin-botttom is 300.
         */
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
        return (h(Host, { key: '507c9c3fc2b151e9e529b3f155bc07394aa8fbb4' }, h(Tag, { key: '6a24d145608e7f8bec9bb7282c02b7a2d3c030d4', class: `
            gcds-heading
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          ` }, h("slot", { key: 'fc7c907330d467d951a008b36379c34b8bdfcf5f' }))));
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
                "attribute": "tag",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "characterLimit": {
                "type": "boolean",
                "attribute": "character-limit",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "marginTop": {
                "type": "string",
                "attribute": "margin-top",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "marginBottom": {
                "type": "string",
                "attribute": "margin-bottom",
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
                "getter": false,
                "setter": false,
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
