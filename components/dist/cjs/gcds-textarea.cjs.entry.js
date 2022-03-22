'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-64738ed4.js');

const gcdsTextareaCss = ".sc-gcds-textarea-h textarea.sc-gcds-textarea{display:block;max-width:100%;width:auto;height:auto;min-height:37px;font-family:inherit;font-size:var(--gcds-font-size-400);line-height:1.4375;padding:6px 12px;background-color:var(--gcds-colour-utils-white);background-image:none;color:var(--gcds-colour-base-grey-medium-500);border:1px solid var(--gcds-colour-base-grey-light-500);border-radius:4px;box-sizing:border-box;box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%);transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.sc-gcds-textarea-h textarea.sc-gcds-textarea:focus{border-color:var(--gcds-colour-base-blue-500);outline:0;box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)}.sc-gcds-textarea-h textarea.sc-gcds-textarea:disabled{opacity:1;background-color:var(--gcds-colour-base-white-grey-500);cursor:not-allowed}.sc-gcds-textarea-h textarea.error.sc-gcds-textarea{border-color:var(--gcds-colour-base-red-300);box-shadow:inset 0 1px 1px rgb(0 0 0 / 8%)}";

let GcdsTextarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.gcdsFocus = index.createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = index.createEvent(this, "gcdsBlur", 7);
    this.gcdsChange = index.createEvent(this, "gcdsChange", 7);
    /**
     * Textarea props
     */
    /**
     * Default value for textarea cols.
     */
    this.cols = 45;
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
    if (!this.el.getAttribute('lang')) {
      if (document.documentElement.getAttribute('lang') == 'en' || !document.documentElement.getAttribute('lang')) {
        this.lang = 'en';
      }
      else {
        this.lang = 'fr';
      }
    }
    else if (this.el.getAttribute('lang') == 'en') {
      this.lang = 'en';
    }
    else {
      this.lang = 'fr';
    }
  }
  render() {
    const { cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaCharacterCount, textareaId, value } = this;
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
    return (index.h(index.Host, null, index.h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId })), hint ? index.h("gcds-hint", { hint: hint, "hint-id": textareaId }) : null, errorMessage ?
      index.h("gcds-error-message", { "message-id": textareaId, message: errorMessage })
      : null, index.h("textarea", Object.assign({}, attrsTextarea, { class: errorMessage ? 'error' : null, id: textareaId, name: textareaId, onBlur: this.onBlur, onFocus: this.onFocus, onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${textareaId}`, "aria-describedby": `${hint ? `hint-${textareaId}` : ''} ${errorMessage ? `error-message-${textareaId}` : ''} ${textareaCharacterCount ? `count-${textareaId}` : ''}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: textareaCharacterCount ? textareaCharacterCount : null }), value), textareaCharacterCount ?
      index.h("p", { id: `count-${textareaId}`, "aria-live": "polite" }, this.lang == 'en' ?
        value == undefined ? `${textareaCharacterCount} characters allowed`
          : `${textareaCharacterCount - value.length} characters left`
        :
          value == undefined ? `${textareaCharacterCount} caractères maximum`
            : `${textareaCharacterCount - value.length} caractères restants`)
      : null));
  }
  get el() { return index.getElement(this); }
};
GcdsTextarea.style = gcdsTextareaCss;

exports.gcds_textarea = GcdsTextarea;
