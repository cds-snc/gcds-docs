import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-44aa51bb.js';

const gcdsInputCss = ".sc-gcds-input-h input.sc-gcds-input{display:block;max-width:100%;width:auto;height:auto;min-height:37px;font-family:inherit;font-size:var(--gcds-font-size-400);line-height:1.4375;padding:6px 12px;background-color:var(--gcds-colour-utils-white);background-image:none;color:var(--gcds-colour-base-grey-medium-500);border:1px solid var(--gcds-colour-base-grey-light-500);border-radius:4px;box-sizing:border-box;box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%);transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.sc-gcds-input-h input.sc-gcds-input:focus{border-color:var(--gcds-colour-base-blue-500);outline:0;box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)}.sc-gcds-input-h input.sc-gcds-input:disabled{opacity:1;background-color:var(--gcds-colour-base-white-grey-500);cursor:not-allowed}.sc-gcds-input-h input.error.sc-gcds-input{border-color:var(--gcds-colour-base-red-300);box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%)}";

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
  render() {
    const { disabled, errorMessage, hideLabel, hint, inputId, label, required, type, value } = this;
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
    return (h(Host, null, h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": inputId })), hint ? h("gcds-hint", { hint: hint, "hint-id": inputId }) : null, errorMessage ?
      h("gcds-error-message", { "message-id": inputId, message: errorMessage })
      : null, h("input", Object.assign({}, attrsInput, { class: errorMessage ? 'error' : null, id: inputId, name: inputId, onBlur: this.onBlur, onFocus: this.onFocus, onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${inputId}`, "aria-describedby": `${hint ? `hint-${inputId}` : ''} ${errorMessage ? `error-message-${inputId}` : ''}`, "aria-invalid": errorMessage ? 'true' : 'false' }))));
  }
  get el() { return getElement(this); }
};
GcdsInput.style = gcdsInputCss;

export { GcdsInput as gcds_input };
