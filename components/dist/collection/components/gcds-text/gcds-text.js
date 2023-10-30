import { Host, h } from "@stencil/core";
export class GcdsText {
  constructor() {
    this.textRole = 'primary';
    this.characterLimit = true;
    this.display = 'block';
    this.marginTop = undefined;
    this.marginBottom = undefined;
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
    const values = [
      '0',
      '50',
      '100',
      '150',
      '200',
      '250',
      '300',
      '400',
      '450',
      '500',
      '550',
      '600',
      '700',
      '800',
      '900',
      '1000',
    ];
    if (this.marginTop && !values.includes(newValue)) {
      console.error('Not a valid margin.');
    }
  }
  validateMarginBottom(newValue) {
    const values = [
      '0',
      '50',
      '100',
      '150',
      '200',
      '250',
      '300',
      '400',
      '450',
      '500',
      '550',
      '600',
      '700',
      '800',
      '900',
      '1000',
    ];
    if (this.marginBottom && !values.includes(newValue)) {
      console.error('Not a valid margin.');
    }
  }
  validateSize(newValue) {
    const values = ['body', 'caption'];
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
    return (h(Host, { class: `${display != 'block' ? `d-${display}` : ''}` }, h("p", { class: `
            gcds-text
            ${textRole ? `role-${textRole}` : ''}
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          ` }, size === 'caption' ? (h("small", null, h("slot", null))) : (h("slot", null)))));
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
        "attribute": "text-role",
        "reflect": false,
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
        "attribute": "character-limit",
        "reflect": false,
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
        "attribute": "display",
        "reflect": false,
        "defaultValue": "'block'"
      },
      "marginTop": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "| '0'\n    | '50'\n    | '100'\n    | '150'\n    | '200'\n    | '250'\n    | '300'\n    | '400'\n    | '450'\n    | '500'\n    | '550'\n    | '600'\n    | '700'\n    | '800'\n    | '900'\n    | '1000'",
          "resolved": "\"0\" | \"100\" | \"1000\" | \"150\" | \"200\" | \"250\" | \"300\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"700\" | \"800\" | \"900\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Adds margin above the text."
        },
        "attribute": "margin-top",
        "reflect": false
      },
      "marginBottom": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "| '0'\n    | '50'\n    | '100'\n    | '150'\n    | '200'\n    | '250'\n    | '300'\n    | '400'\n    | '450'\n    | '500'\n    | '550'\n    | '600'\n    | '700'\n    | '800'\n    | '900'\n    | '1000'",
          "resolved": "\"0\" | \"100\" | \"1000\" | \"150\" | \"200\" | \"250\" | \"300\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"700\" | \"800\" | \"900\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Adds margin below the text."
        },
        "attribute": "margin-bottom",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'body' | 'caption'",
          "resolved": "\"body\" | \"caption\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Sets the appropriate HTML tags for the selected size."
        },
        "attribute": "size",
        "reflect": false,
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
//# sourceMappingURL=gcds-text.js.map
