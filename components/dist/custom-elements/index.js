import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const inheritAttributes = (el, shadowElement, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr) || (shadowElement && shadowElement.hasAttribute(attr))) {
      const value = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const assignLanguage = (el) => {
  let lang = "";
  if (!el.getAttribute('lang')) {
    if (document.documentElement.getAttribute('lang') == 'en' || !document.documentElement.getAttribute('lang')) {
      lang = 'en';
    }
    else {
      lang = 'fr';
    }
  }
  else if (el.getAttribute('lang') == 'en') {
    lang = 'en';
  }
  else {
    lang = 'fr';
  }
  return lang;
};

const gcdsButtonCss = ":host a,:host button{background-color:var(--custom-gcds-style-background-color);border:none;border:var(--custom-gcds-style-border-width) var(--custom-gcds-style-border-style) var(--custom-gcds-style-border-color);border-radius:4px;-webkit-box-shadow:var(--custom-gcds-style-box-shadow);box-shadow:var(--custom-gcds-style-box-shadow);cursor:pointer;display:var(--custom-gcds-style-display);font-family:var(--gcds-font-families-heading),sans-serif;font-size:var(--gcds-font-sizes-paragraph);line-height:var(--gcds-font-sizes-paragraph);margin:var(--custom-gcds-style-margin);padding:1rem .75rem;text-decoration:none;text-transform:var(--custom-gcds-style-text-transform);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}:host a[aria-disabled=true],:host button[aria-disabled=true]{background:var(--gcds-button-shared-disabled-background);border:1px solid var(--gcds-button-shared-disabled-border);color:var(--gcds-button-shared-disabled-text);cursor:not-allowed}:host a:focus,:host button:focus{background-color:var(--gcds-button-shared-focus-background);-webkit-box-shadow:0 0 0 2px var(--gcds-button-shared-focus-text);box-shadow:0 0 0 2px var(--gcds-button-shared-focus-text);color:var(--gcds-button-shared-focus-text);outline:3px solid var(--gcds-button-shared-focus-background);outline-offset:2px}:host a.outline:not([aria-disabled=true]),:host button.outline:not([aria-disabled=true]){border:1px solid}:host a.solid:not([aria-disabled=true]),:host button.solid:not([aria-disabled=true]){color:var(--gcds-button-shared-text)}:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.solid,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.solid{background-color:var(--custom-gcds-style-background-color,var(--gcds-button-primary-default))}:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.solid:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.solid:hover{background-color:var(--gcds-button-primary-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.outline,:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.text-only,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.outline,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.text-only{color:var(--gcds-button-primary-default)}:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.outline:hover,:host a:not(:focus):not(:active):not([aria-disabled=true]).primary.text-only:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.outline:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).primary.text-only:hover{color:var(--gcds-button-primary-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.solid,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.solid{background-color:var(--custom-gcds-style-background-color,var(--gcds-button-secondary-default))}:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.solid:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.solid:hover{background-color:var(--gcds-button-secondary-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.outline,:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.text-only,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.outline,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.text-only{color:var(--gcds-button-secondary-default)}:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.outline:hover,:host a:not(:focus):not(:active):not([aria-disabled=true]).secondary.text-only:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.outline:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).secondary.text-only:hover{color:var(--gcds-button-secondary-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.solid,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.solid{background-color:var(--custom-gcds-style-background-color,var(--gcds-button-destructive-default))}:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.solid:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.solid:hover{background-color:var(--gcds-button-destructive-hover)}:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.outline,:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.text-only,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.outline,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.text-only{color:var(--gcds-button-destructive-default)}:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.outline:hover,:host a:not(:focus):not(:active):not([aria-disabled=true]).destructive.text-only:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.outline:hover,:host button:not(:focus):not(:active):not([aria-disabled=true]).destructive.text-only:hover{color:var(--gcds-button-destructive-hover)}:host a.skip-to-content,:host button.skip-to-content{clip:rect(1px,1px,1px,1px);height:1px;left:0;margin:0;overflow:hidden;position:absolute;text-align:center;top:10px;width:100%;width:1px;z-index:3}:host a.skip-to-content.solid:not(:focus),:host button.skip-to-content.solid:not(:focus){background-color:var(--custom-gcds-style-background-color,var(--gcds-button-primary-default));color:var(--gcds-button-shared-text)}:host a.skip-to-content.outline:focus,:host a.skip-to-content.solid:focus,:host a.skip-to-content.text-only:focus,:host button.skip-to-content.outline:focus,:host button.skip-to-content.solid:focus,:host button.skip-to-content.text-only:focus{clip:rect(auto,auto,auto,auto);height:inherit;margin:inherit;overflow:inherit;position:static;width:inherit}:host a:active,:host button:active{color:var(--gcds-button-shared-text)}:host a:active.primary,:host button:active.primary{background-color:var(--gcds-button-primary-active);outline-color:var(--gcds-button-primary-active)}:host a:active.secondary,:host button:active.secondary{background-color:var(--gcds-button-secondary-active);outline-color:var(--gcds-button-secondary-active)}:host a:active.destructive,:host button:active.destructive{background-color:var(--gcds-button-destructive-active);outline-color:var(--gcds-button-destructive-active)}";

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
let GcdsButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get el() { return this; }
  static get watchers() { return {
    "buttonType": ["validateButtonType"],
    "buttonRole": ["validateButtonRole"],
    "buttonStyle": ["validateButtonStyle"]
  }; }
  static get style() { return gcdsButtonCss; }
};

const gcdsErrorMessageCss = ":host{display:inline-block}:host .error-message{background:var(--gcds-error-message-background);border-left:2px solid var(--gcds-error-message-border);color:var(--gcds-error-message-text);font-size:inherit;line-height:inherit;margin:0 0 var(--gcds-spacing-300);padding:var(--gcds-spacing-200)}";

let GcdsErrorMessage$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const { messageId, message } = this;
    return (h(Host, { id: `error-message-${messageId}`, class: "error-message-container" }, h("p", { class: "error-message", role: "alert" }, message)));
  }
  get el() { return this; }
  static get style() { return gcdsErrorMessageCss; }
};

const gcdsGridCss = ":host .gcds-grid{margin:0;padding:0}:host .gcds-grid[class*=container]{width:var(--gcds-container-500)}:host .gcds-grid.container-lg{max-width:var(--gcds-container-400)}:host .gcds-grid.container-md{max-width:var(--gcds-container-300)}:host .gcds-grid.container-sm{max-width:var(--gcds-container-200)}:host .gcds-grid.container-xs{max-width:var(--gcds-container-100)}:host .gcds-grid.display-grid{display:grid}:host .gcds-grid.display-inline-grid{display:inline-grid}:host .gcds-grid.gap-spacing-50{gap:var(--gcds-spacing-50)}:host .gcds-grid.gap-spacing-100{gap:var(--gcds-spacing-100)}:host .gcds-grid.gap-spacing-200{gap:var(--gcds-spacing-200)}:host .gcds-grid.gap-spacing-300{gap:var(--gcds-spacing-300)}:host .gcds-grid.gap-spacing-400{gap:var(--gcds-spacing-400)}:host .gcds-grid.gap-spacing-500{gap:var(--gcds-spacing-500)}:host .gcds-grid.gap-spacing-600{gap:var(--gcds-spacing-600)}:host .gcds-grid.gap-spacing-700{gap:var(--gcds-spacing-700)}:host .gcds-grid.gap-spacing-800{gap:var(--gcds-spacing-800)}:host .gcds-grid.gap-spacing-900{gap:var(--gcds-spacing-900)}:host .gcds-grid.gap-spacing-1000{gap:var(--gcds-spacing-1000)}:host .gcds-grid.align-content-center{-ms-flex-line-pack:center;align-content:center}:host .gcds-grid.align-content-end{-ms-flex-line-pack:end;align-content:end}:host .gcds-grid.align-content-space-around{-ms-flex-line-pack:distribute;align-content:space-around}:host .gcds-grid.align-content-space-between{-ms-flex-line-pack:justify;align-content:space-between}:host .gcds-grid.align-content-space-evenly{-ms-flex-line-pack:space-evenly;align-content:space-evenly}:host .gcds-grid.align-content-start{-ms-flex-line-pack:start;align-content:start}:host .gcds-grid.align-content-stretch{-ms-flex-line-pack:stretch;align-content:stretch}:host .gcds-grid.justify-content-center{-ms-flex-pack:center;justify-content:center}:host .gcds-grid.justify-content-end{-ms-flex-pack:end;justify-content:end}:host .gcds-grid.justify-content-space-around{-ms-flex-pack:distribute;justify-content:space-around}:host .gcds-grid.justify-content-space-between{-ms-flex-pack:justify;justify-content:space-between}:host .gcds-grid.justify-content-space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}:host .gcds-grid.justify-content-start{-ms-flex-pack:start;justify-content:start}:host .gcds-grid.justify-content-stretch{-ms-flex-pack:stretch;justify-content:stretch}:host .gcds-grid.place-content-center{place-content:center}:host .gcds-grid.place-content-end{place-content:end}:host .gcds-grid.place-content-space-around{place-content:space-around}:host .gcds-grid.place-content-space-between{place-content:space-between}:host .gcds-grid.place-content-space-evenly{place-content:space-evenly}:host .gcds-grid.place-content-start{place-content:start}:host .gcds-grid.place-content-stretch{place-content:stretch}:host .gcds-grid.align-items-baseline{-ms-flex-align:baseline;align-items:baseline}:host .gcds-grid.align-items-center{-ms-flex-align:center;align-items:center}:host .gcds-grid.align-items-end{-ms-flex-align:end;align-items:end}:host .gcds-grid.align-items-start{-ms-flex-align:start;align-items:start}:host .gcds-grid.align-items-stretch{-ms-flex-align:stretch;align-items:stretch}:host .gcds-grid.justify-items-center{justify-items:center}:host .gcds-grid.justify-items-end{justify-items:end}:host .gcds-grid.justify-items-start{justify-items:start}:host .gcds-grid.justify-items-stretch{justify-items:stretch}:host .gcds-grid.place-items-center{place-items:center}:host .gcds-grid.place-items-end{place-items:end}:host .gcds-grid.place-items-start{place-items:start}:host .gcds-grid.place-items-stretch{place-items:stretch}";

let GcdsGrid$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Grid props
     */
    /**
     * Defines grid container size
     */
    this.gridContainer = 'fluid';
    /**
     * Defines element as grid or inline-grid container
     */
    this.gridDisplay = 'grid';
    /**
     * Set tag for grid container
     */
    this.gridTag = 'div';
  }
  render() {
    const { alignContent, alignItems, gap, gridContainer, gridDisplay, gridTag, gridTemplateColumns, gridTemplateColumnsDesktop, gridTemplateColumnsTablet, justifyContent, justifyItems, placeContent, placeItems } = this;
    const Tag = gridTag;
    // Set gridTemplateColumns based on screen size
    const mediaQueryDesktop = window.matchMedia('(min-width: 991px)');
    const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
    function handleGridTemplateColumns() {
      if (gridTemplateColumnsDesktop && mediaQueryDesktop.matches) {
        return { gridTemplateColumns: gridTemplateColumnsDesktop };
      }
      else if (gridTemplateColumnsTablet && mediaQueryTablet.matches) {
        return { gridTemplateColumns: gridTemplateColumnsTablet };
      }
      else {
        return { gridTemplateColumns: gridTemplateColumns };
      }
    }
    return (h(Host, null, h(Tag, { class: `
            gcds-grid
            ${alignContent ? `align-content-${alignContent}` : ''}
            ${alignItems ? `align-items-${alignItems}` : ''}
            ${gap ? `gap-${gap}` : ''}
            ${gridContainer ? `container-${gridContainer}` : ''}
            ${gridDisplay ? `display-${gridDisplay}` : ''}
            ${justifyContent ? `justify-content-${justifyContent}` : ''}
            ${justifyItems ? `justify-items-${justifyItems}` : ''}
            ${placeContent ? `place-content-${placeContent}` : ''}
            ${placeItems ? `place-items-${placeItems}` : ''}
          `, style: handleGridTemplateColumns() }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return gcdsGridCss; }
};

const gcdsHintCss = ":host .hint{font-size:inherit;line-height:inherit;margin:0 0 var(--gcds-spacing-300)}";

let GcdsHint$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const { hint, hintId } = this;
    return (h(Host, { id: `hint-${hintId}` }, h("p", { class: "hint" }, hint)));
  }
  get el() { return this; }
  static get style() { return gcdsHintCss; }
};

const gcdsInputCss = ".sc-gcds-input-h fieldset.sc-gcds-input{border:0;color:var(--gcds-input-default-text);font-family:var(--gcds-font-families-body);font-size:var(--gcds-font-sizes-paragraph);font-weight:var(--gcds-font-weights-regular);line-height:var(--gcds-line-heights-paragraph);margin:0;max-width:90%;padding:0;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out;width:75ch}.sc-gcds-input-h fieldset.sc-gcds-input:focus-within{color:var(--gcds-input-focus)}.sc-gcds-input-h fieldset.disabled.sc-gcds-input{color:var(--gcds-input-disabled-text)}.sc-gcds-input-h fieldset.error.sc-gcds-input:not(:focus-within){color:var(--gcds-input-destructive)}.sc-gcds-input-h input.sc-gcds-input{background-color:var(--gcds-input-default-background);background-image:none;border:2px solid;border-radius:var(--gcds-spacing-50);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--gcds-input-default-text);display:block;font-family:inherit;font-size:inherit;height:auto;line-height:var(--gcds-line-heights-paragraph);margin:0 0 var(--gcds-spacing-400);max-width:100%;min-height:45px;min-width:45px;padding:var(--gcds-spacing-200) var(--gcds-spacing-300);-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;width:100%}.sc-gcds-input-h input.sc-gcds-input:focus{border-color:var(--gcds-input-focus);-webkit-box-shadow:0 0 0 2.5px var(--gcds-input-focus);box-shadow:0 0 0 2.5px var(--gcds-input-focus);outline:0}.sc-gcds-input-h input.sc-gcds-input:disabled{background-color:var( --gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}.sc-gcds-input-h input.error.sc-gcds-input:not(:focus){border-color:var(--gcds-input-destructive)}";

let GcdsInput$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsChange = createEvent(this, "gcdsChange", 7);
    /**
     * Input props
     */
    /**
     * Specifies if an input element is disabled or not.
     */
    this.disabled = false;
    /**
     * Set Input types
     */
    this.type = 'text';
    this.onFocus = () => {
      this.gcdsFocus.emit();
    };
    this.onBlur = () => {
      this.gcdsBlur.emit();
    };
  }
  handleChange(e) {
    let val = e.target && e.target.value;
    this.value = val;
    this.gcdsChange.emit(this.value);
  }
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }
  render() {
    const { disabled, errorMessage, hideLabel, hint, inputId, label, required, size, type, value, lang } = this;
    // Use max-width instead of size attribute to keep field responsive
    const style = {
      maxWidth: `${size * 1.5}ch`
    };
    const attrsInput = {
      disabled,
      required,
      type,
      value,
    };
    const attrsLabel = {
      label,
      required,
    };
    return (h(Host, null, h("fieldset", { class: `${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": inputId }) : null, errorMessage ?
      h("gcds-error-message", { "message-id": inputId, message: errorMessage })
      : null, h("input", Object.assign({}, attrsInput, { class: errorMessage ? 'error' : null, id: inputId, name: inputId, onBlur: this.onBlur, onFocus: this.onFocus, onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${inputId}`, "aria-describedby": `${hint ? `hint-${inputId}` : ''} ${errorMessage ? `error-message-${inputId}` : ''}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: size, style: size ? style : null })))));
  }
  get el() { return this; }
  static get style() { return gcdsInputCss; }
};

const gcdsLabelCss = ".sc-gcds-label-h label.sc-gcds-label{color:inherit;display:block;font-size:inherit;font-weight:var(--gcds-font-weights-bold);line-height:inherit;margin:0 0 var(--gcds-spacing-50);max-width:100%}.sc-gcds-label-h label.hidden.sc-gcds-label{height:0;margin:0;opacity:0;overflow:hidden;width:0}.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{margin:0 0 0 var(--gcds-spacing-100)}";

let GcdsLabel$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }
  render() {
    const { hideLabel, labelFor, label, required, lang } = this;
    const requiredText = lang == "en" ? "required" : "obligatoire";
    return (h(Host, { id: `label-for-${labelFor}` }, h("label", { htmlFor: labelFor, class: `${hideLabel ? 'hidden' : ''} ${required ? 'required' : ''}` }, h("span", null, label), required ?
      h("strong", { class: "required" }, "(", requiredText, ")")
      : null)));
  }
  get el() { return this; }
  static get style() { return gcdsLabelCss; }
};

function h2MenuRemoveEventsHandler(e){e.shadowRoot.querySelector("[data-h2-menu]").querySelectorAll("*").forEach(function(e){e.removeEventListener("keydown",h2MenuUpDownArrowEvent),e.removeEventListener("keydown",h2MenuRightArrowEvent),e.removeEventListener("keydown",h2MenuEscapeAndLeftArrowEvent);});var t=e.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]").shadowRoot.querySelector("button");t.removeEventListener("keydown",h2MenuUpDownArrowEvent),t.removeEventListener("keydown",h2MenuRightArrowEvent),t.removeEventListener("keydown",h2MenuEscapeAndLeftArrowEvent);}function h2MenuCloseOpenSubmenusHandler(e){var t=e.shadowRoot.querySelector("[data-h2-menu]");t.querySelectorAll("[data-h2-menulist] li").forEach(function(e){e.classList.remove("h2-active");}),t.querySelectorAll("[role='menuitem']").forEach(function(e){e.setAttribute("aria-expanded",!1);}),t.querySelectorAll("[data-h2-submenu-link]").forEach(function(e){e.setAttribute("aria-expanded",!1);});}function h2MenuCloseSubmenusAndActivateMainMenuHandler(e){var t=e.shadowRoot.querySelector("[data-h2-menu]"),n=t.querySelector("[data-h2-menu-container]"),r=e.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]");h2MenuRemoveEventsHandler(e),h2MenuCloseOpenSubmenusHandler(e);for(var a=n.children,o=[],u=0;u<a.length;u++){var i=a[u];i.hasAttribute("data-h2-menulist")&&(o=o.concat(i));}var s=h2MenuGetTargetMenuItemsHandler(o);t.classList.contains("h2-mobile-menu-active")&&(s=s.concat(r)),s.forEach(function(e){e.removeEventListener("keydown",h2MenuUpDownArrowEvent),e.removeEventListener("keydown",h2MenuRightArrowEvent),e.addEventListener("keydown",h2MenuUpDownArrowEvent),e.addEventListener("keydown",h2MenuRightArrowEvent);});}function h2MenuGetAllMenuItemsHandler(e){var t=e.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]").shadowRoot.querySelector("button"),n=[];return e.shadowRoot.querySelector("[data-h2-menu]").classList.contains("h2-mobile-menu-active")&&(n=n.concat(t)),e.shadowRoot.querySelectorAll("li").forEach(function(e){for(var t=e.children,r=0;r<t.length;r++){var a=t[r];"menuitem"==a.getAttribute("role")?n=n.concat(a):a.hasAttribute("data-h2-submenu-trigger")&&(n=n.concat(a));}}),n}function h2MenuGetTargetMenuItemsHandler(e){var t=!1,n=null,r=[];return e.forEach(function(e){1==e.parentNode.hasAttribute("data-h2-menu-container")&&e.parentNode.parentNode.classList.contains("h2-mobile-menu-active")&&(t=!0,n=e.closest("[data-h2-menu]").parentNode.host.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]").shadowRoot.querySelector("button"));}),1==t&&(r=r.concat(n)),e.forEach(function(e){for(var t=[],n=e.children,a=0;a<n.length;a++){var o=n[a];"LI"==o.tagName&&(t=t.concat(o));}t.forEach(function(e){for(var t=e.children,n=0;n<t.length;n++){var a=t[n];"menuitem"==a.getAttribute("role")&&(r=r.concat(a)),a.hasAttribute("data-h2-submenu-trigger")&&(r=r.concat(a));}});}),e.forEach(function(e){if("LI"==e.parentNode.tagName){for(var t=e.parentNode.children,n=null,a=null,o=0;o<t.length;o++){var u=t[o];u.hasAttribute("data-h2-submenu-trigger")?n=u:"menuitem"==u.getAttribute("role")&&(a=u);}r=(r=r.concat(a)).concat(n);}}),r}function h2MenuGetMenuListItemsWithSubmenusHandler(e){var t=[];return e.forEach(function(e){for(var n=[],r=e.children,a=0;a<r.length;a++){var o=r[a];"LI"==o.tagName&&(n=n.concat(o));}n.forEach(function(e){for(var n=e.children,r=0;r<n.length;r++){(a=n[r]).hasAttribute("data-h2-menulist")&&!0;}for(r=0;r<n.length;r++){var a;"menuitem"==(a=n[r]).getAttribute("role")&&(t=t.concat(a)),a.hasAttribute("data-h2-submenu-trigger")&&(t=t.concat(a));}});}),t}function h2MenuOpenSubmenuHandler(e){for(var t="",n="",r=[],a=e.closest("li"),o=a.children,u=e.closest("[data-h2-menu]").parentNode.host,i=0;i<o.length;i++){var s=o[i];s.hasAttribute("data-h2-submenu-trigger")&&(n=s),s.hasAttribute("data-h2-menulist")&&(r=r.concat(s)),"menuitem"==s.getAttribute("role")&&(t=s);}a.classList.add("h2-active"),t.setAttribute("aria-expanded",!0),n.setAttribute("aria-expanded",!0),h2MenuRemoveEventsHandler(e.closest("[data-h2-menu]").parentNode.host);var l=h2MenuGetTargetMenuItemsHandler(r);if(l.forEach(function(e){e.removeEventListener("keydown",h2MenuRightArrowEvent),e.removeEventListener("keydown",h2MenuUpDownArrowEvent),e.removeEventListener("keydown",h2MenuEscapeAndLeftArrowEvent),e.addEventListener("keydown",h2MenuRightArrowEvent),e.addEventListener("keydown",h2MenuUpDownArrowEvent),e.addEventListener("keydown",h2MenuEscapeAndLeftArrowEvent);}),l[0].focus(),"topbar"==u.getAttribute("menu-desktop-layout")&&!u.shadowRoot.querySelector("[data-h2-menu-container]").hasAttribute("data-mobile")){var h=a.parentNode,d=h.children;for(i=0;i<d.length;i++)h.parentNode.hasAttribute("data-h2-menu-container")&&a!=d[i]&&d[i].classList.contains("h2-active")&&(d[i].classList.remove("h2-active"),d[i].querySelector("[role='menuitem']").setAttribute("aria-expanded","false"));}}function h2MenuCloseSubmenuHandler(e){for(var t="",n="",r=e.closest("li"),a=r.children,o=0;o<a.length;o++){(m=a[o]).hasAttribute("data-h2-submenu-trigger")&&(n=m),m.hasAttribute("data-h2-menulist")&&m,"menuitem"==m.getAttribute("role")&&(t=m);}h2MenuRemoveEventsHandler(e.closest("[data-h2-menu]").parentNode.host);var u=[],i=r.closest("[data-h2-menulist]"),s=i.parentNode;if(s.hasAttribute("data-h2-menu-container")){var l=[],h=s.children;for(o=0;o<h.length;o++){(m=h[o]).hasAttribute("data-h2-menulist")&&(l=l.concat(m));}u=h2MenuGetTargetMenuItemsHandler(l);}else if("LI"==s.tagName){var d=[];u=h2MenuGetTargetMenuItemsHandler(d=d.concat(i));h=s.children;var c="",v=!1;for(o=0;o<h.length;o++){var m;(m=h[o]).hasAttribute("data-h2-submenu-trigger")&&(v=!0,c=m);}1==v&&(u=u.concat(c));}u.forEach(function(e){e.removeEventListener("keydown",h2MenuRightArrowEvent),e.removeEventListener("keydown",h2MenuUpDownArrowEvent),e.removeEventListener("keydown",h2MenuEscapeAndLeftArrowEvent),e.addEventListener("keydown",h2MenuRightArrowEvent),e.addEventListener("keydown",h2MenuUpDownArrowEvent),e.addEventListener("keydown",h2MenuEscapeAndLeftArrowEvent);}),r.querySelectorAll("[data-h2-menulist] li").forEach(function(e){e.classList.remove("h2-active");}),r.querySelectorAll("[role='menuitem']").forEach(function(e){e.setAttribute("aria-expanded",!1);}),r.querySelectorAll("[data-h2-submenu-trigger]").forEach(function(e){e.setAttribute("aria-expanded",!1);}),r.classList.remove("h2-active"),t.setAttribute("aria-expanded",!1),n.setAttribute("aria-expanded",!1);}function h2MenuToggleSubmenuEvent(e){var t=e.currentTarget;t.closest("li").classList.contains("h2-active")?h2MenuCloseSubmenuHandler(t):h2MenuOpenSubmenuHandler(t);}function h2MenuRightArrowEvent(e){var t=e.keyCode||e.which,n=e.currentTarget;if(39==t){e.preventDefault();for(var r=n.parentNode.children,a=!1,o=0;o<r.length;o++){r[o].hasAttribute("data-h2-menulist")&&(a=!0);}1==a&&h2MenuOpenSubmenuHandler(n);}}function h2MenuUpDownArrowEvent(e){var t=e.currentTarget,n=[];if(null!=t.parentNode.host&&t.parentNode.host.hasAttribute("data-h2-mobile-menu-trigger"))for(var r=t.parentNode.host.parentNode.host.shadowRoot.querySelector("[data-h2-menu-container]").children,a=0;a<r.length;a++){(o=r[a]).hasAttribute("data-h2-menulist")&&(n=n.concat(o));}else if(t.hasAttribute("data-h2-submenu-trigger")&&t.parentNode.classList.contains("h2-active"))for(r=t.parentNode.children,a=0;a<r.length;a++){(o=r[a]).hasAttribute("data-h2-menulist")&&(n=n.concat(o));}else for(r=t.parentNode.parentNode.parentNode.children,a=0;a<r.length;a++){var o;(o=r[a]).hasAttribute("data-h2-menulist")&&(n=n.concat(o));}var u=h2MenuGetTargetMenuItemsHandler(n),i=e.keyCode||e.which,s=u.length-1;if(40==i){if(e.preventDefault(),t.parentNode.host&&t.parentNode.host.hasAttribute("data-h2-mobile-menu-trigger"))var l=t.parentNode.host;else l=t.closest("[data-h2-menu]").parentNode.host;var h=l.shadowRoot.activeElement;u.forEach(function(e){if(h==e){var t=u.indexOf(e)+1;t>s?u[0].focus():u[t].focus();}});}else if(38==i){if(e.preventDefault(),t.parentNode.host&&t.parentNode.host.hasAttribute("data-h2-mobile-menu-trigger"))l=t.parentNode.host;else l=t.closest("[data-h2-menu]").parentNode.host;h=l.shadowRoot.activeElement;u.forEach(function(e){if(h==e){var t=u.indexOf(e)-1;t<0?u[s].focus():u[t].focus();}});}}function h2MenuCloseMenuOnAnchorClickEvent(e){var t=e.currentTarget,n=t.closest("[data-h2-menu]"),r=n.parentNode.host,a=r.shadowRoot.querySelectorAll("[data-h2-mobile-menu-trigger]"),o=t.getAttribute("href");if(1==n.classList.contains("h2-mobile-menu-active"))o.match("^#")&&(h2MenuRemoveEventsHandler(r),h2MenuCloseOpenSubmenusHandler(r),n.classList.remove("h2-mobile-menu-active"),a.forEach(function(e){e.classList.remove("h2-active"),e.setAttribute("aria-expanded",!1);}),document.querySelector("body").style.overflow="visible");else if(o.match("^#")){var u="",i=r.getAttribute("desktop-task");if(i.includes("topbar")?u="top":i.includes("sidebar")&&(u="side"),"top"==u)h2MenuRemoveEventsHandler(r),h2MenuCloseOpenSubmenusHandler(r);else if("side"==u){h2MenuRemoveEventsHandler(r);for(var s=[],l=n.querySelector("[data-h2-menu-container]").children,h=0;h<l.length;h++){var d=l[h];d.hasAttribute("data-h2-menulist")&&(s=s.concat(d));}h2MenuGetTargetMenuItemsHandler(s).forEach(function(e){e.removeEventListener("keydown",h2MenuUpDownArrowEvent),e.addEventListener("keydown",h2MenuUpDownArrowEvent);}),h2MenuGetMenuListItemsWithSubmenusHandler(s).forEach(function(e){e.removeEventListener("keydown",h2MenuRightArrowEvent),e.addEventListener("keydown",h2MenuRightArrowEvent);});}}}function h2MenuEscapeAndLeftArrowEvent(e){var t=e.keyCode||e.which,n=e.currentTarget;if(null==n.parentNode.host)var r=n.parentNode,a=r.parentNode.parentNode,o=a.children,u=n.closest("[data-h2-menu]").parentNode.host,i=n.closest("[data-h2-menu]");else u=n.parentNode.host.parentNode.host,i=n.parentNode.host.parentNode.host.querySelector("[data-h2-menu]");var s=u.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]");if(37==t||27==t){e.preventDefault();var l="";if("menuitem"==n.getAttribute("role"))if(a.hasAttribute("data-h2-menu-container"))if(i.classList.contains("h2-mobile-menu-active"))if("true"==n.getAttribute("aria-expanded"))h2MenuCloseSubmenuHandler(n);else {h2MenuRemoveEventsHandler(u),h2MenuCloseOpenSubmenusHandler(u),i.classList.remove("h2-mobile-menu-active");for(var h=i.querySelector("[data-h2-menu-container]").children,d=[],c=0;c<h.length;c++){(m=h[c]).hasAttribute("data-h2-menulist")&&(d=d.concat(m));}h2MenuGetMenuListItemsWithSubmenusHandler(d).concat(s).forEach(function(e){e.classList.remove("h2-active"),e.setAttribute("aria-expanded",!1);}),document.querySelector("body").style.overflow="visible",s.focus();}else "true"==n.getAttribute("aria-expanded")&&h2MenuCloseSubmenuHandler(n);else {var v=null;if(r.classList.contains("h2-active")){for(c=0;c<r.children.length;c++){(m=r.children[c]).hasAttribute("data-h2-submenu-trigger")?l=m:"menuitem"==m.getAttribute("role")&&(v=m);}h2MenuCloseSubmenuHandler(l),v.focus();}else {for(c=0;c<o.length;c++){(m=o[c]).hasAttribute("data-h2-submenu-trigger")?l=m:"menuitem"==m.getAttribute("role")&&(v=m);}h2MenuCloseSubmenuHandler(l),v.focus();}}else if(n.hasAttribute("data-h2-submenu-trigger"))if(r.classList.contains("h2-active"))h2MenuCloseSubmenuHandler(n);else if(a.hasAttribute("data-h2-menu-container")){if(i.classList.contains("h2-mobile-menu-active")){h2MenuRemoveEventsHandler(u),h2MenuCloseOpenSubmenusHandler(u),i.classList.remove("h2-mobile-menu-active");for(h=i.querySelector("[data-h2-menu-container]").children,d=[],c=0;c<h.length;c++){(m=h[c]).hasAttribute("data-h2-menulist")&&(d=d.concat(m));}h2MenuGetMenuListItemsWithSubmenusHandler(d).concat(s).forEach(function(e){e.classList.remove("h2-active"),e.setAttribute("aria-expanded",!1);}),document.querySelector("body").style.overflow="visible";}}else {for(c=0;c<o.length;c++){var m;(m=o[c]).hasAttribute("data-h2-submenu-trigger")&&(l=m);}h2MenuCloseSubmenuHandler(l),l.focus();}}}function h2MenuTabExitEvent(e){var t=document.querySelector("body"),n=e.keyCode||e.which,r=e.currentTarget;if(null!=r.parentNode.host&&r.parentNode.host.hasAttribute("data-h2-mobile-menu-trigger"))var a=r.parentNode.host.parentNode.host;else a=r.closest("[data-h2-menu]").parentNode.host;var o=a.shadowRoot.querySelector("[data-h2-menu]"),u=o.querySelector("[data-h2-menu-container]");if(o.classList.contains("h2-mobile-menu-active")){for(var i=[],s=u.children,l=[],h=0;h<s.length;h++){var d=s[h];d.hasAttribute("data-h2-menulist")&&(l=l.concat(d));}var c=(i=h2MenuGetTargetMenuItemsHandler(l)).length-1,v=i.indexOf(r);a.querySelector("[slot=left]");if(0===v)9==n&&e.shiftKey&&(h2MenuRemoveEventsHandler(a),h2MenuCloseOpenSubmenusHandler(a),o.classList.remove("h2-mobile-menu-active"),i.forEach(function(e){null!=e.parentNode.host&&(e.parentNode.host.classList.remove("h2-active"),e.parentNode.host.setAttribute("aria-expanded",!1)),e.classList.remove("h2-active"),e.setAttribute("aria-expanded",!1);}),t.style.overflow="visible");else if(v==c){if(9==n&&!e.shiftKey){var m=a.querySelector("[slot=right]");hasFocusableElement(m)?(h2MenuCloseSubmenusAndActivateMainMenuHandler(a),m.removeEventListener("fcousout",rightOptionalTabExitEvent),m.addEventListener("focusout",rightOptionalTabExitEvent)):(h2MenuRemoveEventsHandler(a),h2MenuCloseOpenSubmenusHandler(a),o.classList.remove("h2-mobile-menu-active"),i.forEach(function(e){null!=e.parentNode.host&&(e.parentNode.host.classList.remove("h2-active"),e.parentNode.host.setAttribute("aria-expanded",!1)),e.classList.remove("h2-active"),e.setAttribute("aria-expanded",!1);}),t.style.overflow="visible");}}else (9==n&&!e.shiftKey||9==n&&e.shiftKey)&&h2MenuCloseSubmenusAndActivateMainMenuHandler(a);}else (9==n&&!e.shiftKey||9==n&&e.shiftKey)&&h2MenuCloseSubmenusAndActivateMainMenuHandler(a);}function h2MenuMobileMenuToggleEvent(e){for(var t=e.currentTarget,n=document.querySelector("body"),r=t.parentNode.host,a=r.shadowRoot.querySelector("[data-h2-menu]"),o=a.querySelector("[data-h2-menu-container]").children,u=[],i=0;i<o.length;i++){var s=o[i];s.hasAttribute("data-h2-menulist")&&(u=u.concat(s));}if(t.classList.contains("h2-active")){h2MenuRemoveEventsHandler(r),h2MenuCloseOpenSubmenusHandler(r),a.classList.remove("h2-mobile-menu-active");var l=h2MenuGetMenuListItemsWithSubmenusHandler(u);(l=l.concat(t)).forEach(function(e){e.classList.remove("h2-active"),e.setAttribute("aria-expanded",!1);}),n.style.overflow="visible";}else {a.classList.add("h2-mobile-menu-active"),t.classList.add("h2-active"),t.setAttribute("aria-expanded",!0),n.style.overflow="hidden",h2MenuRemoveEventsHandler(r),h2MenuGetTargetMenuItemsHandler(u).forEach(function(e){e.removeEventListener("keydown",h2MenuUpDownArrowEvent),e.removeEventListener("keydown",h2MenuEscapeAndLeftArrowEvent),e.removeEventListener("keydown",h2MenuTabExitEvent),e.addEventListener("keydown",h2MenuUpDownArrowEvent),e.addEventListener("keydown",h2MenuEscapeAndLeftArrowEvent),e.addEventListener("keydown",h2MenuTabExitEvent);}),h2MenuGetMenuListItemsWithSubmenusHandler(u).forEach(function(e){e.removeEventListener("keydown",h2MenuRightArrowEvent),e.addEventListener("keydown",h2MenuRightArrowEvent);}),h2MenuGetAllMenuItemsHandler(r).forEach(function(e){e.removeEventListener("keydown",h2MenuTabExitEvent),e.addEventListener("keydown",h2MenuTabExitEvent);});}}function hasFocusableElement(e){var t=["A","BUTTON","INPUT","TEXTAREA","SELECT"],n=!1;return null!=e&&(t.includes(e.nodeName)&&(n=!0),e.querySelectorAll("*").forEach(function(e){e.shadowRoot?e.shadowRoot.querySelectorAll("*").forEach(function(e){t.includes(e.nodeName)&&(n=!0);}):t.includes(e.nodeName)&&(n=!0);})),n}function rightOptionalTabExitEvent(e){var t=e.currentTarget,n=e.relatedTarget,r=t.closest("gcds-site-menu"),a=r.shadowRoot.querySelector("[data-h2-mobile-menu-trigger]"),o=r.shadowRoot.querySelector("[data-h2-menu]");!t.contains(n)&&o.classList.contains("h2-mobile-menu-active")&&(o.classList.remove("h2-mobile-menu-active"),a.classList.remove("h2-active"),a.setAttribute("aria-expanded",!1),document.querySelector("body").style.overflow="visible");}function h2MenuAddPageAnchor(e,t="latest"){if(0!=e){var n=e.shadowRoot.querySelectorAll("[role='menuitem']");0!=n&&null!=n&&void 0!=n&&n.forEach(function(e){e.removeEventListener("click",h2MenuCloseMenuOnAnchorClickEvent),e.addEventListener("click",h2MenuCloseMenuOnAnchorClickEvent);});}}function h2MenuAddMobileMenuTrigger(e,t="latest"){if(0!=e){var n=e.shadowRoot.querySelectorAll("[data-h2-mobile-menu-trigger]");0!=n&&null!=n&&void 0!=n&&n.forEach(function(e){e.removeEventListener("click",h2MenuMobileMenuToggleEvent),e.addEventListener("click",h2MenuMobileMenuToggleEvent);});}}function h2MenuAddUpDownArrowsToMainMenuItems(e,t="latest"){if(0!=e){for(var n=[],r=e.shadowRoot.querySelector("[data-h2-menu-container]").children,a=0;a<r.length;a++){var o=r[a];o.hasAttribute("data-h2-menulist")&&(n=n.concat(o));}if(0!=n&&null!=n&&void 0!=n){var u=h2MenuGetTargetMenuItemsHandler(n);0!=u&&null!=u&&void 0!=u&&u.forEach(function(e){e.removeEventListener("keydown",h2MenuUpDownArrowEvent),e.addEventListener("keydown",h2MenuUpDownArrowEvent);});}}}function h2MenuTabOrder(e,t="latest"){if(0!=e){var n=h2MenuGetAllMenuItemsHandler(e);0!=n&&null!=n&&void 0!=n&&n.forEach(function(e){e.removeEventListener("keydown",h2MenuTabExitEvent),e.addEventListener("keydown",h2MenuTabExitEvent);});}}function h2MenuAddRightArrowToMainMenuItems(e,t="latest"){if(0!=e){for(var n=[],r=e.shadowRoot.querySelector("[data-h2-menu-container]").children,a=0;a<r.length;a++){var o=r[a];o.hasAttribute("data-h2-menulist")&&(n=n.concat(o));}if(0!=n&&null!=n&&void 0!=n){var u=h2MenuGetMenuListItemsWithSubmenusHandler(n);0!=u&&null!=u&&void 0!=u&&u.forEach(function(e){e.removeEventListener("keydown",h2MenuRightArrowEvent),e.addEventListener("keydown",h2MenuRightArrowEvent);});}}}function h2MenuEnableSubmenuTriggers(e,t="latest"){if(0!=e){var n=[],r=e.shadowRoot.querySelectorAll("[data-h2-submenu-trigger]");0!=r&&r.forEach(function(e){n=n.concat(e);}),0!=n&&n.forEach(function(e){e.removeEventListener("click",h2MenuToggleSubmenuEvent),e.addEventListener("click",h2MenuToggleSubmenuEvent);});}}

const I18N = {
    "en": {
        navLabel: "Main navigation - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.",
        mobileTriggerClose: "Close",
        mobileTriggerLabel: "Use the enter key to open or close the main menu.",
        submenuButtonText: "Open or close {$t}'s submenu."
    },
    "fr": {
        navLabel: "Navigation principale - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement.",
        mobileTriggerClose: "Fermer",
        mobileTriggerLabel: "Utiliser la touche Entrée pour ouvrir ou fermer le menu principal.",
        submenuButtonText: "Ouvrir ou fermer l'élément du sous-menu {$t}."
    }
};

const gcdsSiteMenuCss = ":host [data-h2-menu]{background-color:var(--gcds-site-menu-default-background);color:var(--gcds-site-menu-default-text);font-family:var(--gcds-font-families-heading),sans-serif;font-size:var(--gcds-font-sizes-paragraph);line-height:var(--gcds-line-heights-paragraph)}:host [data-h2-menu] *{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit;margin:0}:host [data-h2-menu] [data-optional-left],:host [data-h2-menu] [data-optional-right]{color:var(--gcds-site-menu-default-text);margin:var(--gcds-spacing-400)}@media screen and (min-width:64em){:host [data-h2-menu] [data-optional-left],:host [data-h2-menu] [data-optional-right]{margin:0}}:host [data-h2-menu] [data-optional-left]{font-weight:var(--gcds-font-weights-semibold)}@media screen and (min-width:64em){:host [data-h2-menu] [data-optional-left]{margin-right:var(--gcds-spacing-400)}}@media screen and (min-width:64em){:host [data-h2-menu] [data-optional-right]{margin-left:var(--gcds-spacing-400)}}:host [data-h2-menu] iframe,:host [data-h2-menu] img{max-width:100%}:host [data-h2-menu] ol,:host [data-h2-menu] ul{list-style:none;margin:0;padding:0}:host [data-h2-menu] ol li,:host [data-h2-menu] ul li{color:inherit;font-size:inherit;line-height:inherit;margin:0;position:relative}:host [data-h2-menu] ol li:not(:last-child),:host [data-h2-menu] ul li:not(:last-child){border-bottom:1px solid var(--gcds-site-menu-default-border)}:host [data-h2-menu] ol li [role=menuitem],:host [data-h2-menu] ul li [role=menuitem]{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}:host [data-h2-menu] ol li a[role=menuitem],:host [data-h2-menu] ul li a[role=menuitem]{color:inherit;text-decoration:underline;-webkit-transition:background .2s ease-in-out,color .2s ease-in-out;transition:background .2s ease-in-out,color .2s ease-in-out}:host [data-h2-menu] ol li a[role=menuitem]:active,:host [data-h2-menu] ul li a[role=menuitem]:active{background-color:var(--gcds-site-menu-active-background);color:var(--gcds-site-menu-active-text);outline:none}:host [data-h2-menu] ol li a[role=menuitem]:focus,:host [data-h2-menu] ul li a[role=menuitem]:focus{background-color:var(--gcds-site-menu-focus-background);color:var(--gcds-site-menu-focus-text);outline:none}@media (hover:hover){:host [data-h2-menu] ol li a[role=menuitem]:hover,:host [data-h2-menu] ul li a[role=menuitem]:hover{background-color:var(--gcds-site-menu-hover-background);color:var(--gcds-site-menu-default-text)}}:host [data-h2-menu] ol li [data-h2-menulist],:host [data-h2-menu] ul li [data-h2-menulist]{background-color:var(--gcds-site-menu-default-background);-webkit-box-shadow:inset 0 5px 10px -5px var(--gcds-site-menu-submenu-box-shadow);box-shadow:inset 0 5px 10px -5px var(--gcds-site-menu-submenu-box-shadow);display:none;margin:0;padding:0}:host [data-h2-menu] ol li [data-h2-menulist] a[aria-haspopup],:host [data-h2-menu] ul li [data-h2-menulist] a[aria-haspopup]{width:calc(100% - var(--gcds-spacing-600))}:host [data-h2-menu] ol li [data-h2-menulist] [data-h2-menulist],:host [data-h2-menu] ul li [data-h2-menulist] [data-h2-menulist]{background-color:var(--gcds-site-menu-submenu-background)}:host [data-h2-menu] [data-h2-submenu-trigger]{-ms-flex-align:center;align-items:center;background-color:var(--gcds-site-menu-submenu-trigger-background);border:0;color:var(--gcds-site-menu-submenu-trigger-text);cursor:pointer;display:-ms-flexbox;display:flex;font-size:inherit;height:var(--gcds-spacing-600);-ms-flex-pack:center;justify-content:center;line-height:inherit;position:absolute;right:0;top:0;-webkit-transition:background .2s ease-in-out,color .2s ease-in-out;transition:background .2s ease-in-out,color .2s ease-in-out;width:var(--gcds-spacing-600)}@media screen and (min-width:64em){:host [data-h2-menu] [data-h2-submenu-trigger]{height:100%;position:relative}}:host [data-h2-menu] [data-h2-submenu-trigger]:active{background-color:var(--gcds-site-menu-active-background);color:var(--gcds-site-menu-active-text)}:host [data-h2-menu] [data-h2-submenu-trigger]:focus{background-color:var(--gcds-site-menu-focus-background);color:var(--gcds-site-menu-focus-text);outline:none}@media (hover:hover){:host [data-h2-menu] [data-h2-submenu-trigger]:hover:not(:focus){background-color:var(--gcds-site-menu-submenu-trigger-hover-background)}}:host [data-h2-menu] [data-h2-submenu-trigger] [data-h2-submenu-trigger-accessibility-text]{display:block;height:0;margin:0;opacity:0;overflow:hidden;width:0}:host [data-h2-menu] [data-h2-menulist] [data-h2-menulist] [data-h2-submenu-trigger]{height:var(--gcds-spacing-600);position:absolute}:host [data-h2-menu] [data-h2-submenu-trigger-add-icon],:host [data-h2-menu] li.h2-active>[data-h2-submenu-trigger] [data-h2-submenu-trigger-remove-icon]{display:block}:host [data-h2-menu] [data-h2-submenu-trigger-remove-icon],:host [data-h2-menu] li.h2-active>[data-h2-submenu-trigger] [data-h2-submenu-trigger-add-icon]{display:none}:host [data-h2-menu] ::-moz-selection{background:var(--gcds-site-menu-selection-background);color:var(--gcds-site-menu-selection-text)}:host [data-h2-menu] ::selection{background:var(--gcds-site-menu-selection-background);color:var(--gcds-site-menu-selection-text)}:host [data-h2-mobile-menu-trigger]{bottom:0;left:50%;position:fixed;-webkit-transform:translate(-50%);transform:translate(-50%);z-index:9999}@media screen and (min-width:64em){:host [data-h2-mobile-menu-trigger]{display:none}}:host [data-h2-mobile-menu-trigger].h2-active [data-h2-mobile-menu-trigger-close-label],:host [data-h2-mobile-menu-trigger] [data-h2-mobile-menu-trigger-open-label]{display:inline}:host [data-h2-mobile-menu-trigger].h2-active [data-h2-mobile-menu-trigger-open-label],:host [data-h2-mobile-menu-trigger] [data-h2-mobile-menu-trigger-close-label]{display:none}@media screen and (min-width:64em){:host([menu-desktop-layout*=topbar][menu-alignment*=center]) [data-h2-menu-container]{-ms-flex-pack:justify;justify-content:space-between}}@media screen and (min-width:64em){:host([menu-desktop-layout*=topbar][menu-alignment*=right]) [data-h2-menu-container]>[data-h2-menulist]{margin-left:auto}:host([menu-desktop-layout*=topbar][menu-alignment*=right]) [data-h2-menu] [data-h2-menulist] [data-h2-menulist]{left:auto;right:0}}@media screen and (min-width:64em){:host([menu-desktop-layout*=topbar][menu-alignment*=split]) [data-h2-menu] [data-h2-menu-container]{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}:host([menu-desktop-layout*=topbar][menu-alignment*=split]) [data-h2-menu] [data-h2-menu-container]>[data-h2-menulist]:first-of-type{margin-right:auto}}@media screen and (min-width:64em){:host([menu-desktop-layout*=topbar][menu-sticky]) [data-h2-menu]{left:0;position:-webkit-sticky;position:sticky;top:0}}@media only screen and (max-width:64em){:host([menu-mobile-layout*=drawer]) [data-h2-menu],:host([menu-mobile-layout*=toolbar]) [data-h2-menu]{height:100vh;left:0;overflow:auto;position:fixed;top:0;width:100vw;z-index:9990}}:host([menu-mobile-layout*=drawer]) [data-h2-menu]{display:none}:host([menu-mobile-layout*=drawer]) [data-h2-menu].h2-mobile-menu-active{display:block}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menulist] li [role=menuitem]{min-height:var(--gcds-spacing-600);padding:var(--gcds-spacing-300) var(--gcds-spacing-400)}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menulist] [data-h2-menulist] li [role=menuitem]{padding-left:var(--gcds-spacing-500)}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menulist] [data-h2-menulist] li [data-h2-menulist] li [role=menuitem]{padding-left:var(--gcds-spacing-600)}:host([menu-mobile-layout*=drawer]) [data-h2-menu] [data-h2-menulist] [data-h2-menulist] li [data-h2-menulist] li [data-h2-menulist] li [role=menuitem]{padding-left:var(--gcds-spacing-700)}:host([menu-mobile-layout*=drawer]) .h2-active>[data-h2-menulist]{display:block}@media screen and (min-width:64em){:host([menu-desktop-layout*=topbar]) [data-optional-left],:host([menu-desktop-layout*=topbar]) [data-optional-right]{-ms-flex-line-pack:center;align-content:center;display:grid}:host([menu-desktop-layout*=topbar]) [data-h2-menu]{display:block}:host([menu-desktop-layout*=topbar]) [data-h2-menu-container]{display:-ms-flexbox;display:flex;margin-inline:auto;max-width:var(--gcds-container-400)}:host([menu-desktop-layout*=topbar]) [data-h2-menu-container]>[data-h2-menulist]{display:-ms-flexbox;display:flex}:host([menu-desktop-layout*=topbar]) [data-h2-menu-container]>[data-h2-menulist]>li{border:0;display:-ms-inline-flexbox;display:inline-flex}:host([menu-desktop-layout*=topbar]) [data-h2-menu-container]>[data-h2-menulist] li [role=menuitem]{padding:var(--gcds-spacing-300) var(--gcds-spacing-400)}:host([menu-desktop-layout*=topbar]) [data-h2-menu-container]>[data-h2-menulist] [data-h2-menulist] li [role=menuitem]{min-height:var(--gcds-spacing-600)}:host([menu-desktop-layout*=topbar]) [data-h2-menu-container]>[data-h2-menulist] [data-h2-menulist] li [data-h2-menulist] li [role=menuitem]{padding-left:var(--gcds-spacing-500)}:host([menu-desktop-layout*=topbar]) [data-h2-menu-container]>[data-h2-menulist] [data-h2-menulist] li [data-h2-menulist] li [data-h2-menulist] li [role=menuitem]{padding-left:var(--gcds-spacing-600)}:host([menu-desktop-layout*=topbar]) [data-h2-menu-container]>[data-h2-menulist] [data-h2-menulist] li [data-h2-menulist] li [data-h2-menulist] li [data-h2-menulist] li [role=menuitem]{padding-left:var(--gcds-spacing-700)}:host([menu-desktop-layout*=topbar][menu-mobile-layout*=drawer]) [data-h2-menu-container]>[data-h2-menulist]>li>[data-h2-menulist]{bottom:0;max-height:70vh;min-width:25rem;overflow:auto;position:absolute;-webkit-transform:translateY(100%);transform:translateY(100%);width:25vw}}@media screen and (max-width:76.625em){:host([menu-desktop-layout*=topbar]) [data-h2-menu-container]{max-width:90%}}";

let GcdsSiteMenu$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Menu alignment
     */
    this.menuAlignment = 'left';
    /**
     * Sticky navigation flag
     */
    this.menuPosition = 'static';
  }
  validateDesktopLayout(newValue) {
    if (newValue != 'topbar' && newValue != 'sidebar') {
      this.menuDesktopLayout = 'topbar';
    }
  }
  validateMobileLayout(newValue) {
    if (newValue != 'drawer' && newValue != 'toolbar') {
      this.menuMobileLayout = 'drawer';
    }
  }
  /**
   * Method to apply multiple attriibutes to an element
   * @param el - HTML element
   * @param attrs - Object of attributes and values
   */
  setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  /**
   * Method to apply sub menu trigger button
   * @param el - <a> tag
   */
  appendSubMenuButton(el) {
    // Create button element
    var button = document.createElement("button");
    this.setAttributes(button, { "aria-expanded": "false", "data-h2-submenu-trigger": "" });
    // Create the accessibility text span
    var a11yText = document.createElement("span");
    //a11yText.innerHTML = `Open or close ${el.textContent}'s submenu.`;
    a11yText.innerHTML = I18N[this.lang].submenuButtonText.replace('{$t}', el.textContent);
    a11yText.setAttribute("data-h2-submenu-trigger-accessibility-text", "");
    // Create the add icon span
    var addIcon = document.createElement("span");
    this.setAttributes(addIcon, { "aria-hidden": "true", "data-h2-submenu-trigger-add-icon": "" });
    addIcon.textContent = "+";
    // Create the remove icon span
    var removeIcon = document.createElement("span");
    this.setAttributes(removeIcon, { "aria-hidden": "true", "data-h2-submenu-trigger-remove-icon": "" });
    removeIcon.textContent = "-";
    // Put it all together and append button to page
    button.append(a11yText, addIcon, removeIcon);
    el.parentNode.append(button);
  }
  async configureMenu() {
    var mainMenus = [];
    var elementChildren = this.el.children;
    // Loop through slotted elements
    for (var i = 0; i < elementChildren.length; i++) {
      // Grab menus
      if (elementChildren[i].nodeName == "UL") {
        var mainMenus = mainMenus.concat(elementChildren[i]);
      }
    }
    // Assign values to menus and child elements
    for (var i = 0; i < mainMenus.length; i++) {
      // Apply attributes at the highest level
      this.setAttributes(mainMenus[i], { "data-h2-menulist": "", "role": "menu" });
      // Apply attributes to any submenu ul
      mainMenus[i].querySelectorAll("ul").forEach((list) => {
        this.setAttributes(list, { "data-h2-menulist": "", "role": "menu" });
      });
      // Apply attributes to all li
      mainMenus[i].querySelectorAll("li").forEach((listitem) => {
        listitem.setAttribute("role", "presentation");
        for (var x = 0; x < listitem.children.length; x++) {
          if (listitem.children[x].nodeName == "A") {
            this.setAttributes(listitem.children[x], { "role": "menuitem" });
          }
          else if (listitem.children[x].nodeName != "BUTTON" && listitem.children[x].nodeName != "UL") {
            this.setAttributes(listitem.children[x], { "role": "menuitem", "tabindex": "0" });
          }
        }
      });
      // Loop through each menuitem tag
      mainMenus[i].querySelectorAll("[role=menuitem]").forEach((menuitem) => {
        // Apply role attribute
        //menuitem.setAttribute("role", "menuitem");
        // Check if a tag has siblings
        if (menuitem.parentNode.children.length > 1) {
          // Apply attributes for sub menus
          this.setAttributes(menuitem, { "aria-expanded": "false", "aria-haspopup": "true" });
          // Append sub menu button trigger
          this.appendSubMenuButton(menuitem);
          if (menuitem.closest("ul").parentNode.nodeName == "li") {
            menuitem.setAttribute("tabindex", "-1");
          }
        }
      });
    }
  }
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.validateDesktopLayout(this.menuDesktopLayout);
    this.validateMobileLayout(this.menuMobileLayout);
    // Add required attributes to slotted <ul>
    await this.configureMenu();
  }
  componentDidLoad() {
    var menus = [];
    // Add ULs to shadow DOM
    var elementChildren = this.el.children;
    // Loop through slotted elements
    for (var i = 0; i < elementChildren.length; i++) {
      // Act only on ul
      if (elementChildren[i].nodeName == "UL") {
        menus = menus.concat(elementChildren[i]);
      }
    }
    for (var i = 0; i < menus.length; i++) {
      var container = this.el.shadowRoot.querySelector("[data-h2-menu-container]");
      container.insertBefore(menus[i], container.querySelector('[data-optional-right]'));
    }
    var hostElement = this.el;
    var mobileLayout = this.menuMobileLayout;
    const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
    // Check if loaded in mobile size
    if (!mediaQuery.matches) {
      document.querySelector("body").style.paddingBottom = "3rem";
      hostElement.shadowRoot.querySelector("[data-h2-menu-container]").setAttribute("data-mobile", "");
    }
    // Register event listener
    mediaQuery.addEventListener("change", function (e) {
      if (e.matches) {
        // Set mobile menu to default if window size changes to desktop
        var elementNav = hostElement.shadowRoot.querySelector('nav');
        var mobileTrigger = hostElement.shadowRoot.querySelector('[data-h2-mobile-menu-trigger]');
        if (elementNav.classList.contains("h2-mobile-menu-active")) {
          elementNav.classList.remove("h2-mobile-menu-active");
          mobileTrigger.classList.remove("h2-active");
          mobileTrigger.setAttribute("aria-expanded", "false");
          document.body.style.removeProperty("overflow");
        }
        if (mobileLayout == "drawer") {
          document.querySelector("body").style.removeProperty("padding-bottom");
        }
        hostElement.shadowRoot.querySelector("[data-h2-menu-container]").removeAttribute("data-mobile");
      }
      else {
        if (mobileLayout == "drawer") {
          document.querySelector("body").style.paddingBottom = "3rem";
        }
        hostElement.shadowRoot.querySelector("[data-h2-menu-container]").setAttribute("data-mobile", "");
      }
    });
    h2MenuAddUpDownArrowsToMainMenuItems(this.el);
    h2MenuTabOrder(this.el);
    h2MenuAddRightArrowToMainMenuItems(this.el);
    h2MenuEnableSubmenuTriggers(this.el);
    h2MenuAddMobileMenuTrigger(this.el);
    h2MenuAddPageAnchor(this.el);
  }
  render() {
    const sticky = this.menuPosition == 'sticky' ? true : false;
    const mobileMenutask = this.menuMobileLayout == 'drawer' ?
      h("gcds-button", { "aria-expanded": "false", "aria-label": I18N[this.lang].mobileTriggerLabel, "aria-haspopup": "true", "data-h2-mobile-menu-trigger": true, "button-type": "button", role: "button", "button-role": "primary" }, h("span", { "data-h2-mobile-menu-trigger-open-label": true }, "Menu"), h("span", { "data-h2-mobile-menu-trigger-close-label": true }, I18N[this.lang].mobileTriggerClose))
      :
        '';
    return (h(Host, { "data-h2-menu-wrapper": true, "menu-desktop-layout": this.menuDesktopLayout, "menu-mobile-layout": this.menuMobileLayout, "menu-sticky": sticky, lang: this.lang }, mobileMenutask, h("nav", { "aria-label": I18N[this.lang].navLabel, "data-h2-menu": true }, h("div", { "data-h2-menu-container": true }, h("div", { "data-optional-left": true }, h("slot", { name: "left" })), h("slot", null), h("div", { "data-optional-right": true }, h("slot", { name: "right" })))), h("slot", { name: "main" })));
  }
  get el() { return this; }
  static get watchers() { return {
    "menuDesktopLayout": ["validateDesktopLayout", "validateMobileLayout"]
  }; }
  static get style() { return gcdsSiteMenuCss; }
};

const gcdsTextareaCss = ".sc-gcds-textarea-h fieldset.sc-gcds-textarea{border:0;color:var(--gcds-textarea-default-text);font-family:var(--gcds-font-families-body);font-size:var(--gcds-font-sizes-paragraph);font-weight:var(--gcds-font-weights-regular);line-height:var(--gcds-line-heights-paragraph);margin:0;max-width:75ch;padding:0;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out;width:100%}.sc-gcds-textarea-h fieldset.sc-gcds-textarea:focus-within{color:var(--gcds-textarea-focus)}.sc-gcds-textarea-h fieldset.disabled.sc-gcds-textarea{color:var(--gcds-textarea-disabled-text)}.sc-gcds-textarea-h fieldset.error.sc-gcds-textarea:not(:focus-within){color:var(--gcds-textarea-destructive)}.sc-gcds-textarea-h fieldset.sc-gcds-textarea .error-message-container.sc-gcds-textarea{display:block}.sc-gcds-textarea-h textarea.sc-gcds-textarea{background-color:var(--gcds-textarea-default-background);background-image:none;border:2px solid;border-radius:var(--gcds-spacing-50);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--gcds-textarea-default-text);display:block;font-family:inherit;font-size:inherit;height:auto;line-height:var(--gcds-line-heights-paragraph);margin:0 0 var(--gcds-spacing-400);max-width:100%;min-height:45px;min-width:50%;padding:var(--gcds-spacing-200) var(--gcds-spacing-300);-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;width:100%}.sc-gcds-textarea-h textarea.sc-gcds-textarea:focus{border-color:var(--gcds-textarea-focus);-webkit-box-shadow:0 0 0 2.5px var(--gcds-textarea-focus);box-shadow:0 0 0 2.5px var(--gcds-textarea-focus);outline:0}.sc-gcds-textarea-h textarea.sc-gcds-textarea:disabled{background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text);cursor:not-allowed}.sc-gcds-textarea-h textarea.error.sc-gcds-textarea:not(:focus){border-color:var(--gcds-textarea-destructive)}";

let GcdsTextarea$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsChange = createEvent(this, "gcdsChange", 7);
    /**
     * Specifies if a textarea element is disabled or not.
     */
    this.disabled = false;
    /**
     * Default value for textarea rows.
     */
    this.rows = 5;
    this.onFocus = () => {
      this.gcdsFocus.emit();
    };
    this.onBlur = () => {
      this.gcdsBlur.emit();
    };
  }
  handleChange(e) {
    let val = e.target && e.target.value;
    this.value = val;
    this.gcdsChange.emit(this.value);
  }
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }
  render() {
    const { cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaCharacterCount, textareaId, value, lang } = this;
    // Use max-width instead of cols attribute to keep field responsive
    const style = {
      maxWidth: `${cols * 1.5}ch`
    };
    const attrsLabel = {
      label,
      required,
    };
    const attrsTextarea = {
      disabled,
      required,
      rows,
    };
    return (h(Host, null, h("fieldset", { class: `${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": textareaId }) : null, errorMessage ?
      h("gcds-error-message", { "message-id": textareaId, message: errorMessage })
      : null, h("textarea", Object.assign({}, attrsTextarea, { class: errorMessage ? 'error' : null, id: textareaId, name: textareaId, onBlur: this.onBlur, onFocus: this.onFocus, onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${textareaId}`, "aria-describedby": `${hint ? `hint-${textareaId}` : ''} ${errorMessage ? `error-message-${textareaId}` : ''} ${textareaCharacterCount ? `count-${textareaId}` : ''}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: textareaCharacterCount ? textareaCharacterCount : null, style: cols ? style : null }), value), textareaCharacterCount ?
      h("p", { id: `count-${textareaId}`, "aria-live": "polite" }, this.lang == 'en' ?
        value == undefined ? `${textareaCharacterCount} characters allowed`
          : `${textareaCharacterCount - value.length} characters left`
        :
          value == undefined ? `${textareaCharacterCount} caractères maximum`
            : `${textareaCharacterCount - value.length} caractères restants`)
      : null)));
  }
  get el() { return this; }
  static get style() { return gcdsTextareaCss; }
};

const GcdsButton = /*@__PURE__*/proxyCustomElement(GcdsButton$1, [1,"gcds-button",{"buttonType":[1025,"button-type"],"buttonRole":[1025,"button-role"],"buttonStyle":[1025,"button-style"],"name":[1],"disabled":[4],"href":[1],"rel":[1],"target":[1],"download":[1],"customBorderWeight":[1,"custom-border-weight"],"customBorderStyle":[1,"custom-border-style"],"customBorderColor":[1,"custom-border-color"],"customMargin":[1,"custom-margin"],"customDisplay":[1,"custom-display"],"customBackgroundColor":[1,"custom-background-color"],"customBoxShadow":[1,"custom-box-shadow"],"customCapitalization":[1,"custom-capitalization"],"inheritedAttributes":[32]}]);
const GcdsErrorMessage = /*@__PURE__*/proxyCustomElement(GcdsErrorMessage$1, [1,"gcds-error-message",{"messageId":[1,"message-id"],"message":[1]}]);
const GcdsGrid = /*@__PURE__*/proxyCustomElement(GcdsGrid$1, [1,"gcds-grid",{"gridContainer":[1,"grid-container"],"gridDisplay":[1,"grid-display"],"gridTag":[1,"grid-tag"],"gridTemplateColumns":[1,"grid-template-columns"],"gridTemplateColumnsTablet":[1,"grid-template-columns-tablet"],"gridTemplateColumnsDesktop":[1,"grid-template-columns-desktop"],"gap":[1],"alignContent":[1,"align-content"],"justifyContent":[1,"justify-content"],"placeContent":[1,"place-content"],"alignItems":[1,"align-items"],"justifyItems":[1,"justify-items"],"placeItems":[1,"place-items"]}]);
const GcdsHint = /*@__PURE__*/proxyCustomElement(GcdsHint$1, [1,"gcds-hint",{"hint":[1],"hintId":[1,"hint-id"]}]);
const GcdsInput = /*@__PURE__*/proxyCustomElement(GcdsInput$1, [2,"gcds-input",{"disabled":[4],"errorMessage":[1,"error-message"],"hideLabel":[4,"hide-label"],"hint":[1],"inputId":[1,"input-id"],"label":[1],"required":[4],"size":[2],"type":[1],"value":[1025]}]);
const GcdsLabel = /*@__PURE__*/proxyCustomElement(GcdsLabel$1, [2,"gcds-label",{"hideLabel":[4,"hide-label"],"label":[1],"labelFor":[1,"label-for"],"required":[4]}]);
const GcdsSiteMenu = /*@__PURE__*/proxyCustomElement(GcdsSiteMenu$1, [1,"gcds-site-menu",{"menuDesktopLayout":[1025,"menu-desktop-layout"],"menuMobileLayout":[1025,"menu-mobile-layout"],"menuAlignment":[1,"menu-alignment"],"menuPosition":[1,"menu-position"]}]);
const GcdsTextarea = /*@__PURE__*/proxyCustomElement(GcdsTextarea$1, [2,"gcds-textarea",{"cols":[2],"disabled":[4],"errorMessage":[1,"error-message"],"hideLabel":[4,"hide-label"],"hint":[1],"label":[1],"required":[4],"rows":[2],"textareaCharacterCount":[2,"textarea-character-count"],"textareaId":[1,"textarea-id"],"value":[1025]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      GcdsButton,
  GcdsErrorMessage,
  GcdsGrid,
  GcdsHint,
  GcdsInput,
  GcdsLabel,
  GcdsSiteMenu,
  GcdsTextarea
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { GcdsButton, GcdsErrorMessage, GcdsGrid, GcdsHint, GcdsInput, GcdsLabel, GcdsSiteMenu, GcdsTextarea, defineCustomElements };
