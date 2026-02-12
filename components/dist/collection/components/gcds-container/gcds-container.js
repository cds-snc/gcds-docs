import { Host, h } from "@stencil/core";
/**
 * A container is a basic box layout with a set width for its contents.
 *
 * @slot default - Slot for the main content of the container.
 */
export class GcdsContainer {
    constructor() {
        /**
         * Defines if the container has a border.
         */
        this.border = false;
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
        const { alignment, border, layout, margin, padding, size, tag } = this;
        const Tag = tag;
        return (h(Host, { key: 'c8b1e6c3e57435cc8998b15b27cb46d7c6aa2957' }, h(Tag, { key: '2288e5b16bcb4a169b9ba792f17fba37966041a8', class: `
            gcds-container
            ${border ? 'container-border' : ''}
            ${alignment && layout != 'page' ? `alignment-${alignment}` : ''}
            ${layout ? `layout-${layout}` : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", { key: '660586f2cb48bcfdf6eec5917e58cd6775c2f387' }))));
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
            "alignment": {
                "type": "string",
                "attribute": "alignment",
                "mutable": false,
                "complexType": {
                    "original": "'start' | 'center' | 'end'",
                    "resolved": "\"center\" | \"end\" | \"start\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the container's alignment.\nThis property is ignored when `layout` is set to `page`,\nas the page layout has higher priority."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
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
            "layout": {
                "type": "string",
                "attribute": "layout",
                "mutable": false,
                "complexType": {
                    "original": "'full' | 'page'",
                    "resolved": "\"full\" | \"page\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controls how the container aligns with the page layout.\nWhen set to `page`, the container uses a max width of 1140px and\nswitches to 90% width on smaller screens to scale consistently with\ncore page layout components such as the header and footer.\nWhen set to `full`, the container spans the full width (100%)\nof its parent."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Container margin. Horizontal margins (left and right) are not\napplied if the container\u2019s alignment property is defined, since\nalignment has higher priority."
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
