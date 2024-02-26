import { Host, h } from "@stencil/core";
export class GcdsIcon {
    constructor() {
        this.iconStyle = 'solid';
        this.label = undefined;
        this.marginLeft = undefined;
        this.marginRight = undefined;
        this.name = undefined;
        this.fixedWidth = false;
        this.size = 'text';
    }
    render() {
        const { iconStyle, label, marginLeft, marginRight, name, fixedWidth, size, } = this;
        return (h(Host, null, h("span", { class: `
            gcds-icon fa fa-${iconStyle} fa-${name}
            ${marginLeft ? `ml-${marginLeft}` : ''}
            ${marginRight ? `mr-${marginRight}` : ''}
            ${size ? `size-${size}` : ''}
            ${fixedWidth ? `fixed-width` : ''}
          `, role: "img", "aria-label": label ? label : false, "aria-hidden": label ? 'false' : 'true' })));
    }
    static get is() { return "gcds-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-icon.css"]
        };
    }
    static get properties() {
        return {
            "iconStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'regular' | 'solid'",
                    "resolved": "\"regular\" | \"solid\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Style of the icon. 'regular' icons are outlined. Some icons have 'solid' variation."
                },
                "attribute": "icon-style",
                "reflect": false,
                "defaultValue": "'solid'"
            },
            "label": {
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
                    "text": "Add icon description."
                },
                "attribute": "label",
                "reflect": false
            },
            "marginLeft": {
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
                    "text": "Add margin to the left of the icon"
                },
                "attribute": "margin-left",
                "reflect": false
            },
            "marginRight": {
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
                    "text": "Add margin to the right of the icon"
                },
                "attribute": "margin-right",
                "reflect": false
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Name of the icon."
                },
                "attribute": "name",
                "reflect": false
            },
            "fixedWidth": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If the icon should render as a fixed-width square, or their natural width."
                },
                "attribute": "fixed-width",
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'inherit'\n    | 'caption'\n    | 'text'\n    | 'h6'\n    | 'h5'\n    | 'h4'\n    | 'h3'\n    | 'h2'\n    | 'h1'",
                    "resolved": "\"caption\" | \"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\" | \"inherit\" | \"text\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the size of the icon."
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'text'"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-icon.js.map
