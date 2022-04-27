'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faa8db83.js');
const utils = require('./utils-17235bae.js');

const gcdsInputCss = ".sc-gcds-input-h fieldset.sc-gcds-input{width:75ch;max-width:90%;font-family:var(--gcds-font-families-body);font-weight:var(--gcds-font-weights-regular);font-size:var(--gcds-font-sizes-paragraph);line-height:var(--gcds-line-heights-paragraph);color:var(--gcds-input-default-text);border:0;transition:color ease-in-out .15s}.sc-gcds-input-h fieldset.sc-gcds-input:focus-within{color:var(--gcds-input-focus)}.sc-gcds-input-h fieldset.disabled.sc-gcds-input{color:var(--gcds-input-disabled-text)}.sc-gcds-input-h fieldset.error.sc-gcds-input:not(:focus-within){color:var(--gcds-input-destructive)}.sc-gcds-input-h input.sc-gcds-input{display:block;min-width:45px;max-width:100%;height:auto;min-height:45px;font-family:inherit;font-size:inherit;line-height:var(--gcds-line-heights-paragraph);margin:0 0 var(--gcds-spacing-400);padding:var(--gcds-spacing-200) var(--gcds-spacing-300);background-color:var(--gcds-input-default-background);background-image:none;color:var(--gcds-input-default-text);border:2px solid currentColor;border-radius:var(--gcds-spacing-50);box-sizing:border-box;transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.sc-gcds-input-h input.sc-gcds-input:not([size]){width:100%}.sc-gcds-input-h input.sc-gcds-input:focus{outline:0;border-color:var(--gcds-input-focus);box-shadow:0 0 0 2.5px var(--gcds-input-focus)}.sc-gcds-input-h input.sc-gcds-input:disabled{cursor:not-allowed;background-color:var( --gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text)}.sc-gcds-input-h input.error.sc-gcds-input:not(:focus){border-color:var(--gcds-input-destructive)}";

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
