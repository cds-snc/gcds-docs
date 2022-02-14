import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-1a90ce6f.js';

const gcdsButtonCss = ":host button,:host a{border:none;cursor:pointer;padding:0.5rem 1rem;text-decoration:none;border-width:var(--custom-gcds-style-border-width);border-style:var(--custom-gcds-style-border-style);border-color:var(--custom-gcds-style-border-color);margin:var(--custom-gcds-style-margin);display:var(--custom-gcds-style-display);background-color:var(--custom-gcds-style-background-color);box-shadow:var(--custom-gcds-style-box-shadow);text-transform:var(--custom-gcds-style-text-transform)}:host button.primary.solid,:host a.primary.solid{background-color:var(--custom-gcds-style-background-color, var(--gcds-colour-base-blue-grey-900));color:var(--gcds-colour-utils-white)}:host button.secondary.solid,:host a.secondary.solid{background-color:var(--custom-gcds-style-background-color, var(--gcds-colour-base-grey-100));color:var(--gcds-colour-base-blue-grey-900)}:host button.danger.solid,:host a.danger.solid{background-color:var(--custom-gcds-style-background-color, var(--gcds-colour-base-red-500));color:var(--gcds-colour-utils-white)}:host button.skip-to-content,:host a.skip-to-content{left:0;position:absolute;text-align:center;top:10px;width:100%;z-index:3;clip:rect(1px,1px,1px,1px);height:1px;margin:0;overflow:hidden;position:absolute;width:1px}:host button.skip-to-content.solid,:host a.skip-to-content.solid{background-color:var(--custom-gcds-style-background-color, var(--gcds-colour-base-blue-grey-900));color:var(--gcds-colour-utils-white)}:host button.skip-to-content.solid:focus,:host button.skip-to-content.solid.focus,:host a.skip-to-content.solid:focus,:host a.skip-to-content.solid.focus{clip:rect(auto,auto,auto,auto);height:inherit;margin:inherit;overflow:inherit;position:static;width:inherit}:host button.skip-to-content.outline:focus,:host button.skip-to-content.outline.focus,:host a.skip-to-content.outline:focus,:host a.skip-to-content.outline.focus{clip:rect(auto,auto,auto,auto);height:inherit;margin:inherit;overflow:inherit;position:static;width:inherit}:host button.skip-to-content.text-only:focus,:host button.skip-to-content.text-only.focus,:host a.skip-to-content.text-only:focus,:host a.skip-to-content.text-only.focus{clip:rect(auto,auto,auto,auto);height:inherit;margin:inherit;overflow:inherit;position:static;width:inherit}";

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
    return (h(Host, { onClick: this.handleClick }, h(Tag, Object.assign({}, attrs, { onBlur: this.onBlur, onFocus: this.onFocus, class: `${task} ${variant} ${stateClass}` }), h("slot", { name: "left" }), h("slot", null), h("slot", { name: "right" }))));
  }
  get el() { return getElement(this); }
};
GcdsButton.style = gcdsButtonCss;

export { GcdsButton as gcds_button };
