'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faa8db83.js');

const gcdsTextareaCss = ".sc-gcds-textarea-h fieldset.sc-gcds-textarea{width:100%;max-width:75ch;font-family:'Lato';font-weight:400;font-size:18px;line-height:1.4;color:#000;border:0;transition:color ease-in-out .15s}.sc-gcds-textarea-h fieldset.sc-gcds-textarea:focus-within{color:#303FC3}.sc-gcds-textarea-h fieldset.disabled.sc-gcds-textarea{color:#707070}.sc-gcds-textarea-h fieldset.error.sc-gcds-textarea:not(:focus-within){color:#D3080C}.sc-gcds-textarea-h fieldset.sc-gcds-textarea .error-message-container.sc-gcds-textarea{display:block}.sc-gcds-textarea-h textarea.sc-gcds-textarea{display:block;min-width:50%;max-width:100%;height:auto;min-height:45px;font-family:inherit;font-size:inherit;line-height:1.6;margin:0 0 25px;padding:8px 10px;background-color:#FFF;background-image:none;color:#000;border:2px solid currentColor;border-radius:4px;box-sizing:border-box;transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.sc-gcds-textarea-h textarea.sc-gcds-textarea:not([cols]){width:100%}.sc-gcds-textarea-h textarea.sc-gcds-textarea:focus{outline:0;border-color:#303FC3;box-shadow:0 0 0 2.5px #303FC3}.sc-gcds-textarea-h textarea.sc-gcds-textarea:disabled{cursor:not-allowed;background-color:#F0F0F0;border-color:#828282}.sc-gcds-textarea-h textarea.error.sc-gcds-textarea:not(:focus){border-color:#D3080C}";

let GcdsTextarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.gcdsFocus = index.createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = index.createEvent(this, "gcdsBlur", 7);
    this.gcdsChange = index.createEvent(this, "gcdsChange", 7);
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
    return (index.h(index.Host, null, index.h("fieldset", { class: `${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}` }, index.h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId })), hint ? index.h("gcds-hint", { hint: hint, "hint-id": textareaId }) : null, errorMessage ?
      index.h("gcds-error-message", { "message-id": textareaId, message: errorMessage })
      : null, index.h("textarea", Object.assign({}, attrsTextarea, { class: errorMessage ? 'error' : null, id: textareaId, name: textareaId, onBlur: this.onBlur, onFocus: this.onFocus, onInput: (e) => this.handleChange(e), "aria-labelledby": `label-for-${textareaId}`, "aria-describedby": `${hint ? `hint-${textareaId}` : ''} ${errorMessage ? `error-message-${textareaId}` : ''} ${textareaCharacterCount ? `count-${textareaId}` : ''}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: textareaCharacterCount ? textareaCharacterCount : null }), value), textareaCharacterCount ?
      index.h("p", { id: `count-${textareaId}`, "aria-live": "polite" }, this.lang == 'en' ?
        value == undefined ? `${textareaCharacterCount} characters allowed`
          : `${textareaCharacterCount - value.length} characters left`
        :
          value == undefined ? `${textareaCharacterCount} caractères maximum`
            : `${textareaCharacterCount - value.length} caractères restants`)
      : null)));
  }
  get el() { return index.getElement(this); }
};
GcdsTextarea.style = gcdsTextareaCss;

exports.gcds_textarea = GcdsTextarea;
