import { Component, Element, Event, Method, Host, Watch, Prop, State, h } from '@stencil/core';
import { inheritAttributes } from '../../utils/utils';
const styleAPI = {
  'customBorderWeight': 'border-width',
  'customBorderStyle': 'border-style',
  'customBorderColor': 'border-color',
  'customMargin': 'margin',
  'customDisplay': 'display',
  'customBackgroundColor': 'background-color',
  'customBoxShadow': 'box-shadow',
  'customCapitalization': 'text-transform'
};
export class GcdsButton {
  constructor() {
    /**
     * Button props
     */
    /**
     * Set button types
     */
    this.buttonType = 'button';
    /**
     * Set the main style
     */
    this.buttonRole = 'primary';
    /**
     * Set the style variant
     */
    this.buttonStyle = 'solid';
    this.inheritedAttributes = {};
    this.handleClick = (ev) => {
      if (!this.disabled && this.buttonType != 'button' && this.buttonType != 'link') {
        // Attach button to form
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const formButton = document.createElement('button');
          formButton.type = this.buttonType;
          formButton.style.display = 'none';
          form.appendChild(formButton);
          formButton.click();
          formButton.remove();
        }
      }
      // Has any inherited attributes changed on click
      this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'aria-expanded', 'aria-haspopup']);
    };
    this.onFocus = () => {
      this.gcdsFocus.emit();
    };
    this.onBlur = () => {
      this.gcdsBlur.emit();
    };
  }
  validateButtonType(newValue) {
    const values = ['submit', 'reset', 'button', 'link'];
    if (!values.includes(newValue)) {
      this.buttonType = 'button';
    }
  }
  validateButtonRole(newValue) {
    const values = ['primary', 'secondary', 'destructive', 'skip-to-content'];
    if (!values.includes(newValue)) {
      this.buttonRole = 'primary';
    }
  }
  validateButtonStyle(newValue) {
    const values = ['solid', 'outline', 'text-only'];
    if (!values.includes(newValue)) {
      this.buttonStyle = 'solid';
    }
  }
  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateButtonType(this.buttonType);
    this.validateButtonRole(this.buttonRole);
    this.validateButtonStyle(this.buttonStyle);
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'aria-expanded', 'aria-haspopup']);
  }
  componentDidLoad() {
    const Tag = this.buttonType != 'link' ? 'button' : 'a';
    //StyleAPI
    for (let [key, value] of Object.entries(styleAPI)) {
      if (this[key] !== undefined) {
        this.el.shadowRoot.querySelector(Tag).style.setProperty(`--custom-gcds-style-${value}`, this[key]);
      }
    }
  }
  /**
    * Focus element
    */
  async focusElement() {
    this.shadowElement.focus();
  }
  render() {
    const { buttonType, buttonRole, buttonStyle, disabled, name, href, rel, target, download, inheritedAttributes } = this;
    const Tag = buttonType != 'link' ? 'button' : 'a';
    const attrs = (Tag === 'button')
      ? {
        type: buttonType,
        ariaDisabled: disabled,
        name
      }
      : {
        href,
        rel,
        target,
        download
      };
    return (h(Host, { onClick: this.handleClick },
      h(Tag, Object.assign({}, attrs, { onBlur: this.onBlur, onFocus: this.onFocus, class: `${buttonRole} ${buttonStyle}`, ref: element => this.shadowElement = element }, inheritedAttributes),
        h("slot", { name: "left" }),
        h("slot", null),
        h("slot", { name: "right" }))));
  }
  static get is() { return "gcds-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gcds-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gcds-button.css"]
  }; }
  static get properties() { return {
    "buttonType": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'submit' | 'reset' | 'button' | 'link'",
        "resolved": "\"button\" | \"link\" | \"reset\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set button types"
      },
      "attribute": "button-type",
      "reflect": false,
      "defaultValue": "'button'"
    },
    "buttonRole": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'primary' | 'secondary' | 'destructive' | 'skip-to-content'",
        "resolved": "\"destructive\" | \"primary\" | \"secondary\" | \"skip-to-content\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set the main style"
      },
      "attribute": "button-role",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "buttonStyle": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'solid' | 'outline' | 'text-only'",
        "resolved": "\"outline\" | \"solid\" | \"text-only\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set the style variant"
      },
      "attribute": "button-style",
      "reflect": false,
      "defaultValue": "'solid'"
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The name attribute specifies the name for a <button> element."
      },
      "attribute": "name",
      "reflect": false
    },
    "disabled": {
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
        "text": "The disabled attribute for a <button> element."
      },
      "attribute": "disabled",
      "reflect": false
    },
    "href": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The href attribute specifies the URL of the page the link goes to"
      },
      "attribute": "href",
      "reflect": false
    },
    "rel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The rel attribute specifies the relationship between the current document and the linked document"
      },
      "attribute": "rel",
      "reflect": false
    },
    "target": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The target attribute specifies where to open the linked document"
      },
      "attribute": "target",
      "reflect": false
    },
    "download": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink"
      },
      "attribute": "download",
      "reflect": false
    },
    "customBorderWeight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "StyleAPI: custom border weight."
      },
      "attribute": "custom-border-weight",
      "reflect": false
    },
    "customBorderStyle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "StyleAPI: custom border style."
      },
      "attribute": "custom-border-style",
      "reflect": false
    },
    "customBorderColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "StyleAPI: custom border color."
      },
      "attribute": "custom-border-color",
      "reflect": false
    },
    "customMargin": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "StyleAPI: custom margin."
      },
      "attribute": "custom-margin",
      "reflect": false
    },
    "customDisplay": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "StyleAPI: custom display."
      },
      "attribute": "custom-display",
      "reflect": false
    },
    "customBackgroundColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "StyleAPI: custom background color."
      },
      "attribute": "custom-background-color",
      "reflect": false
    },
    "customBoxShadow": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "StyleAPI: custom box shadow."
      },
      "attribute": "custom-box-shadow",
      "reflect": false
    },
    "customCapitalization": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "StyleAPI: custom btext transform."
      },
      "attribute": "custom-capitalization",
      "reflect": false
    }
  }; }
  static get states() { return {
    "inheritedAttributes": {}
  }; }
  static get events() { return [{
      "method": "gcdsFocus",
      "name": "gcdsFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the button has focus."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "gcdsBlur",
      "name": "gcdsBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the button loses focus."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "focusElement": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Focus element",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "buttonType",
      "methodName": "validateButtonType"
    }, {
      "propName": "buttonRole",
      "methodName": "validateButtonRole"
    }, {
      "propName": "buttonStyle",
      "methodName": "validateButtonStyle"
    }]; }
}
