import { Component, Element, Event, Host, Prop, h } from '@stencil/core';
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
    this.type = 'button';
    /**
     * Set component states
     */
    this.state = 'default';
    /**
     * Set the main style
     */
    this.task = 'primary';
    /**
     * Set the style variant
     */
    this.variant = 'solid';
    this.handleClick = (ev) => {
      if (this.state !== 'disabled' && this.type != 'button' && this.type != 'link') {
        // Attach button to form
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const formButton = document.createElement('button');
          formButton.type = this.type;
          formButton.style.display = 'none';
          form.appendChild(formButton);
          formButton.click();
          formButton.remove();
        }
      }
    };
    this.onFocus = () => {
      this.gcdsFocus.emit();
    };
    this.onBlur = () => {
      this.gcdsBlur.emit();
    };
  }
  componentWillLoad() {
    // Default to type 'button' if no identifying properties are passed
    if (this.type === undefined && this.href === undefined) {
      this.type = 'button';
    }
  }
  componentDidLoad() {
    const Tag = this.type != 'link' ? 'button' : 'a';
    //StyleAPI
    for (let [key, value] of Object.entries(styleAPI)) {
      if (this[key] !== undefined) {
        this.el.shadowRoot.querySelector(Tag).style.setProperty(`--custom-gcds-style-${value}`, this[key]);
      }
    }
  }
  render() {
    const { type, task, variant, state, name, href, rel, target, download } = this;
    const Tag = type != 'link' ? 'button' : 'a';
    const disabled = state === 'disabled' ? true : false;
    const stateClass = state !== "default" ? state : "";
    const attrs = (Tag === 'button')
      ? {
        type,
        disabled,
        name
      }
      : {
        href,
        rel,
        target,
        download
      };
    return (h(Host, { onClick: this.handleClick },
      h(Tag, Object.assign({}, attrs, { onBlur: this.onBlur, onFocus: this.onFocus, class: `${task} ${variant} ${stateClass}` }),
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
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The button label"
      },
      "attribute": "label",
      "reflect": false
    },
    "type": {
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
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'button'"
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'default' | 'hover' | 'active' | 'focus' | 'disabled'",
        "resolved": "\"active\" | \"default\" | \"disabled\" | \"focus\" | \"hover\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set component states"
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "task": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'primary' | 'secondary' | 'danger' | 'skip-to-content'",
        "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"skip-to-content\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set the main style"
      },
      "attribute": "task",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
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
      "attribute": "variant",
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
  static get elementRef() { return "el"; }
}
