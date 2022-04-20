'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faa8db83.js');

const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};

const gcdsButtonCss = ":host button,:host a{border:none;cursor:pointer;padding:0.5rem 1rem;text-decoration:none;border-width:var(--custom-gcds-style-border-width);border-style:var(--custom-gcds-style-border-style);border-color:var(--custom-gcds-style-border-color);margin:var(--custom-gcds-style-margin);display:var(--custom-gcds-style-display);background-color:var(--custom-gcds-style-background-color);box-shadow:var(--custom-gcds-style-box-shadow);text-transform:var(--custom-gcds-style-text-transform)}:host button.primary.solid,:host a.primary.solid{background-color:var(--custom-gcds-style-background-color, var(--gcds-colour-base-blue-grey-900));color:var(--gcds-colour-utils-white)}:host button.secondary.solid,:host a.secondary.solid{background-color:var(--custom-gcds-style-background-color, var(--gcds-colour-base-grey-100));color:var(--gcds-colour-base-blue-grey-900)}:host button.destructive.solid,:host a.destructive.solid{background-color:var(--custom-gcds-style-background-color, var(--gcds-colour-base-red-500));color:var(--gcds-colour-utils-white)}:host button.skip-to-content,:host a.skip-to-content{left:0;position:absolute;text-align:center;top:10px;width:100%;z-index:3;clip:rect(1px,1px,1px,1px);height:1px;margin:0;overflow:hidden;position:absolute;width:1px}:host button.skip-to-content.solid,:host a.skip-to-content.solid{background-color:var(--custom-gcds-style-background-color, var(--gcds-colour-base-blue-grey-900));color:var(--gcds-colour-utils-white)}:host button.skip-to-content.solid:focus,:host button.skip-to-content.solid.focus,:host a.skip-to-content.solid:focus,:host a.skip-to-content.solid.focus{clip:rect(auto,auto,auto,auto);height:inherit;margin:inherit;overflow:inherit;position:static;width:inherit}:host button.skip-to-content.outline:focus,:host button.skip-to-content.outline.focus,:host a.skip-to-content.outline:focus,:host a.skip-to-content.outline.focus{clip:rect(auto,auto,auto,auto);height:inherit;margin:inherit;overflow:inherit;position:static;width:inherit}:host button.skip-to-content.text-only:focus,:host button.skip-to-content.text-only.focus,:host a.skip-to-content.text-only:focus,:host a.skip-to-content.text-only.focus{clip:rect(auto,auto,auto,auto);height:inherit;margin:inherit;overflow:inherit;position:static;width:inherit}";

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
let GcdsButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.gcdsFocus = index.createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = index.createEvent(this, "gcdsBlur", 7);
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
    return (index.h(index.Host, { onClick: this.handleClick }, index.h(Tag, Object.assign({}, attrs, { onBlur: this.onBlur, onFocus: this.onFocus, class: `${buttonRole} ${buttonStyle}`, ref: element => this.shadowElement = element }, inheritedAttributes), index.h("slot", { name: "left" }), index.h("slot", null), index.h("slot", { name: "right" }))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "buttonType": ["validateButtonType"],
    "buttonRole": ["validateButtonRole"],
    "buttonStyle": ["validateButtonStyle"]
  }; }
};
GcdsButton.style = gcdsButtonCss;

exports.gcds_button = GcdsButton;
