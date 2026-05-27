import { Host, h } from "@stencil/core";
import { SpacingArray } from "../../utils/types/spacing";
/**
 * Text is a styled and formatted paragraph that displays written content in an accessible way and matches Canada.ca typography styles.
 *
 * @slot default - Slot for the content of the text element.
 */
export class GcdsText {
    constructor() {
        /**
         * Props
         */
        /**
         * Sets the main style of the text.
         */
        this.textRole = 'primary';
        /**
         * Sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length.
         */
        this.characterLimit = true;
        /**
         * Specifies the display behaviour of the text.
         */
        this.display = 'block';
        /**
         * Adds margin above the text.
         */
        this.marginTop = '0';
        /**
         * Adds margin below the text.
         */
        this.marginBottom = '300';
        /**
         * Sets the appropriate HTML tags for the selected size.
         */
        this.size = 'body';
    }
    validateTextRole(newValue) {
        const values = ['light', 'primary', 'secondary'];
        if (!values.includes(newValue)) {
            this.textRole = 'primary';
        }
    }
    validateDisplay(newValue) {
        const values = [
            'block',
            'flex',
            'inline',
            'inline-block',
            'inline-flex',
            'none',
        ];
        if (!values.includes(newValue)) {
            this.display = 'block';
        }
    }
    validateMarginTop(newValue) {
        if (!SpacingArray.includes(newValue)) {
            this.marginTop = '0';
        }
    }
    validateMarginBottom(newValue) {
        if (!SpacingArray.includes(newValue)) {
            this.marginBottom = '300';
        }
    }
    validateSize(newValue) {
        const values = ['body', 'small'];
        if (!values.includes(newValue)) {
            this.size = 'body';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTextRole(this.textRole);
        this.validateDisplay(this.display);
        this.validateMarginTop(this.marginTop);
        this.validateMarginBottom(this.marginBottom);
        this.validateSize(this.size);
    }
    render() {
        const { characterLimit, display, marginTop, marginBottom, size, textRole } = this;
        return (h(Host, { key: '8219a6791a91322d1ce17a98f133303745d805a9', class: `${display != 'block' ? `d-${display}` : ''}` }, h("p", { key: 'ddea4733adb26b3d854466f07cddc3c384ad448d', class: `
            gcds-text
            ${textRole ? `role-${textRole}` : ''}
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
            ${size === 'small' ? `size-small` : ''}
          `, part: "text" }, size === 'small' ? (h("small", null, h("slot", null))) : (h("slot", null)))));
    }
    static get is() { return "gcds-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-text.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-text.css"]
        };
    }
    static get properties() {
        return {
            "textRole": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'light' | 'primary' | 'secondary'",
                    "resolved": "\"light\" | \"primary\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the main style of the text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text-role",
                "defaultValue": "'primary'"
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
                    "text": "Sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "character-limit",
                "defaultValue": "true"
            },
            "display": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "| 'block'\n    | 'flex'\n    | 'inline'\n    | 'inline-block'\n    | 'inline-flex'\n    | 'none'",
                    "resolved": "\"block\" | \"flex\" | \"inline\" | \"inline-block\" | \"inline-flex\" | \"none\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies the display behaviour of the text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "display",
                "defaultValue": "'block'"
            },
            "marginTop": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "SpacingValues",
                    "resolved": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
                    "references": {
                        "SpacingValues": {
                            "location": "import",
                            "path": "../../utils/types/spacing",
                            "id": "src/utils/types/spacing.tsx::SpacingValues",
                            "referenceLocation": "SpacingValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds margin above the text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "margin-top",
                "defaultValue": "'0'"
            },
            "marginBottom": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "SpacingValues",
                    "resolved": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
                    "references": {
                        "SpacingValues": {
                            "location": "import",
                            "path": "../../utils/types/spacing",
                            "id": "src/utils/types/spacing.tsx::SpacingValues",
                            "referenceLocation": "SpacingValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds margin below the text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "margin-bottom",
                "defaultValue": "'300'"
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'body' | 'small'",
                    "resolved": "\"body\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the appropriate HTML tags for the selected size."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'body'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "textRole",
                "methodName": "validateTextRole"
            }, {
                "propName": "display",
                "methodName": "validateDisplay"
            }, {
                "propName": "marginTop",
                "methodName": "validateMarginTop"
            }, {
                "propName": "marginBottom",
                "methodName": "validateMarginBottom"
            }, {
                "propName": "size",
                "methodName": "validateSize"
            }];
    }
}
