import { Host, h } from "@stencil/core";
/**
 * A container is a basic box layout with a set width for its contents.
 *
 * @slot default - Slot for the main content of the container.
 */
export class GcdsContainer {
    constructor() {
        /**
         * Props
         */
        /**
         * Defines if the container has a border.
         */
        this.border = false;
        /**
         * Defines if the container is centered.
         */
        this.centered = false;
        /**
         * Defines if the container is the main page container. When true,
         * the width will be set to 90% for smaller screens to ensure consistency
         * with the responsiveness of other core layout components (header + footer).
         */
        this.mainContainer = false;
        /**
         * Defines container size.
         */
        this.size = 'full';
        /**
         * Set tag for container.
         */
        this.tag = 'div';
    }
    render() {
        const { border, centered, mainContainer, margin, padding, size, tag } = this;
        const Tag = tag;
        return (h(Host, { key: '158cd288fe99ffdcc6d6d98ed0679521989516ab' }, h(Tag, { key: '64af2b520df43454dce4e7154533192484bcf502', class: `
            gcds-container
            ${border ? 'container-border' : ''}
            ${centered ? 'container-centered' : ''}
            ${mainContainer ? 'container-main' : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", { key: 'd396a7a600b82d553fd23674400677cbdd2e9a06' }))));
    }
    static get is() { return "gcds-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-container.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-container.css"]
        };
    }
    static get properties() {
        return {
            "border": {
                "type": "boolean",
                "attribute": "border",
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
                    "text": "Defines if the container has a border."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "centered": {
                "type": "boolean",
                "attribute": "centered",
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
                    "text": "Defines if the container is centered."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "mainContainer": {
                "type": "boolean",
                "attribute": "main-container",
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
                    "text": "Defines if the container is the main page container. When true,\nthe width will be set to 90% for smaller screens to ensure consistency\nwith the responsiveness of other core layout components (header + footer)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "margin": {
                "type": "string",
                "attribute": "margin",
                "mutable": false,
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
                    "text": "Container margin. Left and right margins won't be applied\nif the container is centered."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "padding": {
                "type": "string",
                "attribute": "padding",
                "mutable": false,
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
                    "text": "Defines the container's padding."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'",
                    "resolved": "\"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines container size."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'full'"
            },
            "tag": {
                "type": "string",
                "attribute": "tag",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set tag for container."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'div'"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-container.js.map
