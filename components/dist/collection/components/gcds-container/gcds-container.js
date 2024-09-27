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
        return (h(Host, { key: '0e99ad345508c1300109aabce30794de7649ddf8' }, h(Tag, { key: '616d153d1f1445306436e8612bb2fc648e590099', class: `
            gcds-container
            ${border ? 'container-border' : ''}
            ${centered ? 'container-centered' : ''}
            ${mainContainer ? 'container-main' : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", { key: '471427424ab9bf64b4c767897cad5493507e793d' }))));
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
                    "text": "Defines if container has a border or not."
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
                    "text": "Defines if container is centered or not."
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
                    "text": "Defines if the container is the main page container or not. If set to true,\nthe width will be set to 90% for smaller screens to ensure consistency\nwith the responsiveness of other core layout components (header + footer)."
                },
                "attribute": "main-container",
                "reflect": false,
                "defaultValue": "false"
            },
            "margin": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| '0'\n    | '50'\n    | '100'\n    | '150'\n    | '200'\n    | '250'\n    | '300'\n    | '400'\n    | '450'\n    | '500'\n    | '550'\n    | '600'\n    | '700'\n    | '800'\n    | '900'\n    | '1000'",
                    "resolved": "\"0\" | \"100\" | \"1000\" | \"150\" | \"200\" | \"250\" | \"300\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"700\" | \"800\" | \"900\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the container's margin. Note that left and right margin will not be applied if the container is centered."
                },
                "attribute": "margin",
                "reflect": false
            },
            "padding": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| '0'\n    | '50'\n    | '100'\n    | '150'\n    | '200'\n    | '250'\n    | '300'\n    | '400'\n    | '450'\n    | '500'\n    | '550'\n    | '600'\n    | '700'\n    | '800'\n    | '900'\n    | '1000'",
                    "resolved": "\"0\" | \"100\" | \"1000\" | \"150\" | \"200\" | \"250\" | \"300\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"700\" | \"800\" | \"900\"",
                    "references": {}
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
