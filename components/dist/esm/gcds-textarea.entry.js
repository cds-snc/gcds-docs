import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8d185c1e.js';
import { a as assignLanguage } from './utils-de8f53f8.js';

const gcdsTextareaCss = ".sc-gcds-textarea-h fieldset.sc-gcds-textarea{width:100%;max-width:75ch;font-family:var(--gcds-font-families-body);font-weight:var(--gcds-font-weights-regular);font-size:var(--gcds-font-sizes-paragraph);line-height:var(--gcds-line-heights-paragraph);color:var(--gcds-textarea-default-text);border:0;transition:color ease-in-out .15s}.sc-gcds-textarea-h fieldset.sc-gcds-textarea:focus-within{color:var(--gcds-textarea-focus)}.sc-gcds-textarea-h fieldset.disabled.sc-gcds-textarea{color:var(--gcds-textarea-disabled-text)}.sc-gcds-textarea-h fieldset.error.sc-gcds-textarea:not(:focus-within){color:var(--gcds-textarea-destructive)}.sc-gcds-textarea-h fieldset.sc-gcds-textarea .error-message-container.sc-gcds-textarea{display:block}.sc-gcds-textarea-h textarea.sc-gcds-textarea{display:block;min-width:50%;max-width:100%;height:auto;min-height:45px;font-family:inherit;font-size:inherit;line-height:var(--gcds-line-heights-paragraph);margin:0 0 var(--gcds-spacing-400);padding:var(--gcds-spacing-200) var(--gcds-spacing-300);background-color:var(--gcds-textarea-default-background);background-image:none;color:var(--gcds-textarea-default-text);border:2px solid currentColor;border-radius:var(--gcds-spacing-50);box-sizing:border-box;transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.sc-gcds-textarea-h textarea.sc-gcds-textarea:not([cols]){width:100%}.sc-gcds-textarea-h textarea.sc-gcds-textarea:focus{outline:0;border-color:var(--gcds-textarea-focus);box-shadow:0 0 0 2.5px var(--gcds-textarea-focus)}.sc-gcds-textarea-h textarea.sc-gcds-textarea:disabled{cursor:not-allowed;background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text)}.sc-gcds-textarea-h textarea.error.sc-gcds-textarea:not(:focus){border-color:var(--gcds-textarea-destructive)}";

let GcdsTextarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    const attrsLabel = {
      label,
      required,
    };
    const attrsTextarea = {
      cols,
      disabled,
      required,
      rows,
    };
    return (h(Host, null, h("fieldset", { class: `${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": textareaId }) : null, errorMessage ?
      h("gcds-error-message", { "message-id": textareaId, message: errorMessage })
      : null, h("textarea", Object.assign({}, attrsTextarea, { class: errorMessage ? 'error' : null, id: textareaId, name: textareaId, onBlur: this.onBlur, onFocus: this.onFocus, onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${textareaId}`, "aria-describedby": `${hint ? `hint-${textareaId}` : ''} ${errorMessage ? `error-message-${textareaId}` : ''} ${textareaCharacterCount ? `count-${textareaId}` : ''}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: textareaCharacterCount ? textareaCharacterCount : null }), value), textareaCharacterCount ?
      h("p", { id: `count-${textareaId}`, "aria-live": "polite" }, this.lang == 'en' ?
        value == undefined ? `${textareaCharacterCount} characters allowed`
          : `${textareaCharacterCount - value.length} characters left`
        :
          value == undefined ? `${textareaCharacterCount} caractères maximum`
            : `${textareaCharacterCount - value.length} caractères restants`)
      : null)));
  }
  get el() { return getElement(this); }
};
GcdsTextarea.style = gcdsTextareaCss;

export { GcdsTextarea as gcds_textarea };
