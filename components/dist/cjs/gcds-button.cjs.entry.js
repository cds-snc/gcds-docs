'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faa8db83.js');
const utils = require('./utils-17235bae.js');

const gcdsButtonCss = ":host button,:host a{border:none;cursor:pointer;font-family:var(--gcds-font-families-heading), sans-serif;font-size:var(--gcds-font-sizes-paragraph);line-height:var(--gcds-font-sizes-paragraph);padding:1rem .75rem;text-decoration:none;border-radius:4px;border-width:var(--custom-gcds-style-border-width);border-style:var(--custom-gcds-style-border-style);border-color:var(--custom-gcds-style-border-color);margin:var(--custom-gcds-style-margin);display:var(--custom-gcds-style-display);background-color:var(--custom-gcds-style-background-color);box-shadow:var(--custom-gcds-style-box-shadow);text-transform:var(--custom-gcds-style-text-transform);transition:all .15s ease-in-out}:host button[aria-disabled=\"true\"],:host a[aria-disabled=\"true\"]{background:var(--gcds-button-shared-disabled-background);border:1px solid var(--gcds-button-shared-disabled-border);color:var(--gcds-button-shared-disabled-text);cursor:not-allowed}:host button:focus,:host a:focus{background-color:var(--gcds-button-shared-focus-background);box-shadow:0 0 0 2px var(--gcds-button-shared-focus-text);outline:3px solid var(--gcds-button-shared-focus-background);outline-offset:2px;color:var(--gcds-button-shared-focus-text)}:host button.outline:not([aria-disabled=\"true\"]),:host a.outline:not([aria-disabled=\"true\"]){border:1px solid currentColor}:host button.solid:not([aria-disabled=\"true\"]),:host a.solid:not([aria-disabled=\"true\"]){color:var(--gcds-button-shared-text)}:host button:not(:focus):not([aria-disabled=\"true\"]).primary.solid,:host a:not(:focus):not([aria-disabled=\"true\"]).primary.solid{background-color:var(--custom-gcds-style-background-color,\n          var(--gcds-button-primary-default))}:host button:not(:focus):not([aria-disabled=\"true\"]).primary.solid:hover,:host a:not(:focus):not([aria-disabled=\"true\"]).primary.solid:hover{background-color:var(--gcds-button-primary-hover)}:host button:not(:focus):not([aria-disabled=\"true\"]).primary.solid:active,:host a:not(:focus):not([aria-disabled=\"true\"]).primary.solid:active{background-color:var(--gcds-button-primary-active)}:host button:not(:focus):not([aria-disabled=\"true\"]).primary.outline,:host button:not(:focus):not([aria-disabled=\"true\"]).primary.text-only,:host a:not(:focus):not([aria-disabled=\"true\"]).primary.outline,:host a:not(:focus):not([aria-disabled=\"true\"]).primary.text-only{color:var(--gcds-button-primary-default)}:host button:not(:focus):not([aria-disabled=\"true\"]).primary.outline:hover,:host button:not(:focus):not([aria-disabled=\"true\"]).primary.text-only:hover,:host a:not(:focus):not([aria-disabled=\"true\"]).primary.outline:hover,:host a:not(:focus):not([aria-disabled=\"true\"]).primary.text-only:hover{color:var(--gcds-button-primary-hover)}:host button:not(:focus):not([aria-disabled=\"true\"]).primary.outline:active,:host button:not(:focus):not([aria-disabled=\"true\"]).primary.text-only:active,:host a:not(:focus):not([aria-disabled=\"true\"]).primary.outline:active,:host a:not(:focus):not([aria-disabled=\"true\"]).primary.text-only:active{color:var(--gcds-button-primary-active)}:host button:not(:focus):not([aria-disabled=\"true\"]).secondary.solid,:host a:not(:focus):not([aria-disabled=\"true\"]).secondary.solid{background-color:var(--custom-gcds-style-background-color,\n          var(--gcds-button-secondary-default))}:host button:not(:focus):not([aria-disabled=\"true\"]).secondary.solid:hover,:host a:not(:focus):not([aria-disabled=\"true\"]).secondary.solid:hover{background-color:var(--gcds-button-secondary-hover)}:host button:not(:focus):not([aria-disabled=\"true\"]).secondary.solid:active,:host a:not(:focus):not([aria-disabled=\"true\"]).secondary.solid:active{background-color:var(--gcds-button-secondary-active)}:host button:not(:focus):not([aria-disabled=\"true\"]).secondary.outline,:host button:not(:focus):not([aria-disabled=\"true\"]).secondary.text-only,:host a:not(:focus):not([aria-disabled=\"true\"]).secondary.outline,:host a:not(:focus):not([aria-disabled=\"true\"]).secondary.text-only{color:var(--gcds-button-secondary-default)}:host button:not(:focus):not([aria-disabled=\"true\"]).secondary.outline:hover,:host button:not(:focus):not([aria-disabled=\"true\"]).secondary.text-only:hover,:host a:not(:focus):not([aria-disabled=\"true\"]).secondary.outline:hover,:host a:not(:focus):not([aria-disabled=\"true\"]).secondary.text-only:hover{color:var(--gcds-button-secondary-hover)}:host button:not(:focus):not([aria-disabled=\"true\"]).secondary.outline:active,:host button:not(:focus):not([aria-disabled=\"true\"]).secondary.text-only:active,:host a:not(:focus):not([aria-disabled=\"true\"]).secondary.outline:active,:host a:not(:focus):not([aria-disabled=\"true\"]).secondary.text-only:active{color:var(--gcds-button-secondary-active)}:host button:not(:focus):not([aria-disabled=\"true\"]).destructive.solid,:host a:not(:focus):not([aria-disabled=\"true\"]).destructive.solid{background-color:var(--custom-gcds-style-background-color,\n          var(--gcds-button-destructive-default))}:host button:not(:focus):not([aria-disabled=\"true\"]).destructive.solid:hover,:host a:not(:focus):not([aria-disabled=\"true\"]).destructive.solid:hover{background-color:var(--gcds-button-destructive-hover)}:host button:not(:focus):not([aria-disabled=\"true\"]).destructive.solid:active,:host a:not(:focus):not([aria-disabled=\"true\"]).destructive.solid:active{background-color:var(--gcds-button-destructive-active)}:host button:not(:focus):not([aria-disabled=\"true\"]).destructive.outline,:host button:not(:focus):not([aria-disabled=\"true\"]).destructive.text-only,:host a:not(:focus):not([aria-disabled=\"true\"]).destructive.outline,:host a:not(:focus):not([aria-disabled=\"true\"]).destructive.text-only{color:var(--gcds-button-destructive-default)}:host button:not(:focus):not([aria-disabled=\"true\"]).destructive.outline:hover,:host button:not(:focus):not([aria-disabled=\"true\"]).destructive.text-only:hover,:host a:not(:focus):not([aria-disabled=\"true\"]).destructive.outline:hover,:host a:not(:focus):not([aria-disabled=\"true\"]).destructive.text-only:hover{color:var(--gcds-button-destructive-hover)}:host button:not(:focus):not([aria-disabled=\"true\"]).destructive.outline:active,:host button:not(:focus):not([aria-disabled=\"true\"]).destructive.text-only:active,:host a:not(:focus):not([aria-disabled=\"true\"]).destructive.outline:active,:host a:not(:focus):not([aria-disabled=\"true\"]).destructive.text-only:active{color:var(--gcds-button-destructive-active)}:host button.skip-to-content,:host a.skip-to-content{left:0;position:absolute;text-align:center;top:10px;width:100%;z-index:3;clip:rect(1px, 1px, 1px, 1px);height:1px;margin:0;overflow:hidden;position:absolute;width:1px}:host button.skip-to-content.solid:not(:focus),:host a.skip-to-content.solid:not(:focus){background-color:var(--custom-gcds-style-background-color,\n        var(--gcds-button-primary-default));color:var(--gcds-button-shared-text)}:host button.skip-to-content.solid:focus,:host button.skip-to-content.outline:focus,:host button.skip-to-content.text-only:focus,:host a.skip-to-content.solid:focus,:host a.skip-to-content.outline:focus,:host a.skip-to-content.text-only:focus{clip:rect(auto, auto, auto, auto);height:inherit;margin:inherit;overflow:inherit;position:static;width:inherit}";

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
      this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement, ['aria-label', 'aria-expanded', 'aria-haspopup', 'aria-controls']);
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
    this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement, ['aria-label', 'aria-expanded', 'aria-haspopup', 'aria-controls']);
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
