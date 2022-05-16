import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8d185c1e.js';
import { i as inheritAttributes } from './utils-de8f53f8.js';

const gcdsButtonCss = ":host a,:host button{background-color:var(--custom-gcds-style-background-color);border:none;border:var(--custom-gcds-style-border-width) var(--custom-gcds-style-border-style) var(--custom-gcds-style-border-color);border-radius:4px;box-shadow:var(--custom-gcds-style-box-shadow);cursor:pointer;display:var(--custom-gcds-style-display);font-family:var(--gcds-font-families-heading),sans-serif;font-size:var(--gcds-font-sizes-paragraph);line-height:var(--gcds-font-sizes-paragraph);margin:var(--custom-gcds-style-margin);padding:1rem .75rem;text-decoration:none;text-transform:var(--custom-gcds-style-text-transform);transition:all .15s ease-in-out}:host a[aria-disabled=true],:host button[aria-disabled=true]{background:var(--gcds-button-shared-disabled-background);border:1px solid var(--gcds-button-shared-disabled-border);color:var(--gcds-button-shared-disabled-text);cursor:not-allowed}:host a:focus,:host button:focus{background-color:var(--gcds-button-shared-focus-background);box-shadow:0 0 0 2px var(--gcds-button-shared-focus-text);color:var(--gcds-button-shared-focus-text);outline:3px solid var(--gcds-button-shared-focus-background);outline-offset:2px}:host a.outline:not([aria-disabled=true]),:host button.outline:not([aria-disabled=true]){border:1px solid}:host a.solid:not([aria-disabled=true]),:host button.solid:not([aria-disabled=true]){color:var(--gcds-button-shared-text)}:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.solid,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.solid{background-color:var(--custom-gcds-style-background-color,var(--gcds-button-primary-default))}:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.solid:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.solid:hover{background-color:var(--gcds-button-primary-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.outline,:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.text-only,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.outline,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.text-only{color:var(--gcds-button-primary-default)}:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.outline:hover,:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.text-only:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.outline:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.text-only:hover{color:var(--gcds-button-primary-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.solid,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.solid{background-color:var(--custom-gcds-style-background-color,var(--gcds-button-secondary-default))}:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.solid:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.solid:hover{background-color:var(--gcds-button-secondary-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.outline,:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.text-only,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.outline,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.text-only{color:var(--gcds-button-secondary-default)}:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.outline:hover,:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.text-only:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.outline:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.text-only:hover{color:var(--gcds-button-secondary-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.solid,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.solid{background-color:var(--custom-gcds-style-background-color,var(--gcds-button-destructive-default))}:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.solid:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.solid:hover{background-color:var(--gcds-button-destructive-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.outline,:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.text-only,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.outline,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.text-only{color:var(--gcds-button-destructive-default)}:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.outline:hover,:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.text-only:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.outline:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.text-only:hover{color:var(--gcds-button-destructive-hover)}:host a.skip-to-content,:host button.skip-to-content{clip:rect(1px,1px,1px,1px);height:1px;left:0;margin:0;overflow:hidden;position:absolute;text-align:center;top:10px;width:100%;width:1px;z-index:3}:host a.skip-to-content.solid:not(:focus),:host button.skip-to-content.solid:not(:focus){background-color:var(--custom-gcds-style-background-color,var(--gcds-button-primary-default));color:var(--gcds-button-shared-text)}:host a.skip-to-content.outline:focus,:host a.skip-to-content.solid:focus,:host a.skip-to-content.text-only:focus,:host button.skip-to-content.outline:focus,:host button.skip-to-content.solid:focus,:host button.skip-to-content.text-only:focus{clip:rect(auto,auto,auto,auto);height:inherit;margin:inherit;overflow:inherit;position:static;width:inherit}:host a:active,:host button:active{color:var(--gcds-button-shared-text)}:host a:active.primary,:host button:active.primary{background-color:var(--gcds-button-primary-active);outline-color:var(--gcds-button-primary-active)}:host a:active.secondary,:host button:active.secondary{background-color:var(--gcds-button-secondary-active);outline-color:var(--gcds-button-secondary-active)}:host a:active.destructive,:host button:active.destructive{background-color:var(--gcds-button-destructive-active);outline-color:var(--gcds-button-destructive-active)}";

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
    registerInstance(this, hostRef);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
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
      this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, ['aria-label', 'aria-expanded', 'aria-haspopup', 'aria-controls']);
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
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, ['aria-label', 'aria-expanded', 'aria-haspopup', 'aria-controls']);
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
    return (h(Host, { onClick: this.handleClick }, h(Tag, Object.assign({}, attrs, { onBlur: this.onBlur, onFocus: this.onFocus, class: `${buttonRole} ${buttonStyle}`, ref: element => this.shadowElement = element }, inheritedAttributes), h("slot", { name: "left" }), h("slot", null), h("slot", { name: "right" }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "buttonType": ["validateButtonType"],
    "buttonRole": ["validateButtonRole"],
    "buttonStyle": ["validateButtonStyle"]
  }; }
};
GcdsButton.style = gcdsButtonCss;

export { GcdsButton as gcds_button };
