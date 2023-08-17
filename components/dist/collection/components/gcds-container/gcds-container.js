import { Host, h } from '@stencil/core';
export class GcdsContainer {
  constructor() {
    this.border = false;
    this.centered = false;
    this.margin = undefined;
    this.padding = undefined;
    this.size = 'full';
    this.tag = 'div';
  }
  render() {
    const { border, centered, margin, padding, size, tag } = this;
    const Tag = tag;
    return (h(Host, null, h(Tag, { class: `
            gcds-container
            ${border ? `container-border` : ''}
            ${centered ? `container-centered` : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", null))));
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
      "margin": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000'",
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
          "original": "'0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000'",
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
