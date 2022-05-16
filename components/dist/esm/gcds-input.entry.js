import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8d185c1e.js';
import { a as assignLanguage } from './utils-de8f53f8.js';

const gcdsInputCss = ".sc-gcds-input-h fieldset.sc-gcds-input{border:0;color:var(--gcds-input-default-text);font-family:var(--gcds-font-families-body);font-size:var(--gcds-font-sizes-paragraph);font-weight:var(--gcds-font-weights-regular);line-height:var(--gcds-line-heights-paragraph);margin:0;max-width:90%;padding:0;transition:color .15s ease-in-out;width:75ch}.sc-gcds-input-h fieldset.sc-gcds-input:focus-within{color:var(--gcds-input-focus)}.sc-gcds-input-h fieldset.disabled.sc-gcds-input{color:var(--gcds-input-disabled-text)}.sc-gcds-input-h fieldset.error.sc-gcds-input:not(:focus-within){color:var(--gcds-input-destructive)}.sc-gcds-input-h input.sc-gcds-input{background-color:var(--gcds-input-default-background);background-image:none;border:2px solid;border-radius:var(--gcds-spacing-50);box-sizing:border-box;color:var(--gcds-input-default-text);display:block;font-family:inherit;font-size:inherit;height:auto;line-height:var(--gcds-line-heights-paragraph);margin:0 0 var(--gcds-spacing-400);max-width:100%;min-height:45px;min-width:45px;padding:var(--gcds-spacing-200) var(--gcds-spacing-300);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}.sc-gcds-input-h input.sc-gcds-input:focus{border-color:var(--gcds-input-focus);box-shadow:0 0 0 2.5px var(--gcds-input-focus);outline:0}.sc-gcds-input-h input.sc-gcds-input:disabled{background-color:var( --gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}.sc-gcds-input-h input.error.sc-gcds-input:not(:focus){border-color:var(--gcds-input-destructive)}";

let GcdsInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
GcdsInput.style = gcdsInputCss;

export { GcdsInput as gcds_input };
