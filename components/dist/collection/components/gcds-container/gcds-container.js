import { Host, h } from "@stencil/core";
export class GcdsContainer {
    constructor() {
        this.border = false;
        this.centered = false;
        this.mainContainer = false;
        this.margin = undefined;
        this.padding = undefined;
        this.size = 'full';
        this.tag = 'div';
    }
    render() {
        const { border, centered, mainContainer, margin, padding, size, tag } = this;
        const Tag = tag;
        return (h(Host, { key: 'c773aa318c0dd603cfe509cd4d023b988bdecece' }, h(Tag, { key: '4cda1734f0e3c01a01f6e717d1ae7165c53ae39a', class: `
            gcds-container
            ${border ? 'container-border' : ''}
            ${centered ? 'container-centered' : ''}
            ${mainContainer ? 'container-main' : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", { key: 'e8056d57376fc6322f29ec99b5349808b70fd1a8' }))));
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
                "attribute": "border",
                "reflect": false,
                "defaultValue": "false"
            },
            "centered": {
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
                    "text": "Defines if the container is centered."
                },
                "attribute": "centered",
                "reflect": false,
                "defaultValue": "false"
            },
            "mainContainer": {
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
                    "text": "Defines if the container is the main page container. When true,\nthe width will be set to 90% for smaller screens to ensure consistency\nwith the responsiveness of other core layout components (header + footer)."
                },
                "attribute": "main-container",
                "reflect": false,
                "defaultValue": "false"
            },
            "margin": {
                "type": "string",
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
                "attribute": "margin",
                "reflect": false
            },
            "padding": {
                "type": "string",
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
                "attribute": "padding",
                "reflect": false
            },
            "size": {
                "type": "string",
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
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'full'"
            },
            "tag": {
                "type": "string",
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
                "attribute": "tag",
                "reflect": false,
                "defaultValue": "'div'"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-container.js.map
