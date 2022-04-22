'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faa8db83.js');
const utils = require('./utils-17235bae.js');

const gcdsInputCss = ".sc-gcds-input-h fieldset.sc-gcds-input{width:75ch;max-width:90%;font-family:'Lato';font-weight:400;font-size:18px;line-height:1.4;color:#000;border:0;transition:color ease-in-out .15s}.sc-gcds-input-h fieldset.sc-gcds-input:focus-within{color:#303FC3}.sc-gcds-input-h fieldset.disabled.sc-gcds-input{color:#707070}.sc-gcds-input-h fieldset.error.sc-gcds-input:not(:focus-within){color:#D3080C}.sc-gcds-input-h input.sc-gcds-input{display:block;min-width:45px;max-width:100%;height:auto;min-height:45px;font-family:inherit;font-size:inherit;line-height:1.6;margin:0 0 25px;padding:8px 10px;background-color:#FFF;background-image:none;color:#000;border:2px solid currentColor;border-radius:4px;box-sizing:border-box;transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.sc-gcds-input-h input.sc-gcds-input:not([size]){width:100%}.sc-gcds-input-h input.sc-gcds-input:focus{outline:0;border-color:#303FC3;box-shadow:0 0 0 2.5px #303FC3}.sc-gcds-input-h input.sc-gcds-input:disabled{cursor:not-allowed;background-color:#F0F0F0;border-color:#828282}.sc-gcds-input-h input.error.sc-gcds-input:not(:focus){border-color:#D3080C}";

let GcdsInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.gcdsFocus = index.createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = index.createEvent(this, "gcdsBlur", 7);
    this.gcdsChange = index.createEvent(this, "gcdsChange", 7);
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
    this.lang = utils.assignLanguage(this.el);
  }
  render() {
    const { disabled, errorMessage, hideLabel, hint, inputId, label, required, size, type, value, lang } = this;
    const attrsInput = {
      disabled,
      required,
      size,
      type,
      value,
    };
    const attrsLabel = {
      label,
      required,
    };
    return (index.h(index.Host, null, index.h("fieldset", { class: `${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}` }, index.h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? index.h("gcds-hint", { hint: hint, "hint-id": inputId }) : null, errorMessage ?
      index.h("gcds-error-message", { "message-id": inputId, message: errorMessage })
      : null, index.h("input", Object.assign({}, attrsInput, { class: errorMessage ? 'error' : null, id: inputId, name: inputId, onBlur: this.onBlur, onFocus: this.onFocus, onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${inputId}`, "aria-describedby": `${hint ? `hint-${inputId}` : ''} ${errorMessage ? `error-message-${inputId}` : ''}`, "aria-invalid": errorMessage ? 'true' : 'false' })))));
  }
  get el() { return index.getElement(this); }
};
GcdsInput.style = gcdsInputCss;

exports.gcds_input = GcdsInput;
