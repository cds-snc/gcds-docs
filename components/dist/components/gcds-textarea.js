import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$4 } from './gcds-error-message2.js';
import { d as defineCustomElement$3 } from './gcds-hint2.js';
import { d as defineCustomElement$2 } from './gcds-label2.js';

const I18N = {
  en: {
    characters: {
      allowed: 'characters allowed',
      left: 'characters left',
    },
  },
  fr: {
    characters: {
      allowed: 'caractères maximum',
      left: 'caractères restants',
    },
  },
};

const gcdsTextareaCss = ".sc-gcds-textarea-h .gcds-textarea-wrapper.sc-gcds-textarea{border:0;color:var(--gcds-textarea-default-text);font:var(--gcds-textarea-font);margin:0;max-width:75ch;padding:0;transition:color .15s ease-in-out;width:100%}.sc-gcds-textarea-h .gcds-textarea-wrapper.sc-gcds-textarea:focus-within{color:var(--gcds-textarea-focus-text)}.sc-gcds-textarea-h .gcds-textarea-wrapper.gcds-disabled.sc-gcds-textarea{color:var(--gcds-textarea-disabled-text)}.sc-gcds-textarea-h .gcds-textarea-wrapper.sc-gcds-textarea .error-message-container.sc-gcds-textarea{display:block}.sc-gcds-textarea-h textarea.sc-gcds-textarea{background-color:var(--gcds-textarea-default-background);background-image:none;border:var(--gcds-textarea-border-width) solid;border-radius:var(--gcds-textarea-border-radius);box-sizing:border-box;color:var(--gcds-textarea-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-textarea-margin);max-width:100%;min-height:var(--gcds-textarea-min-height);min-width:50%;padding:var(--gcds-textarea-padding);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}.sc-gcds-textarea-h textarea.sc-gcds-textarea:focus{border-color:var(--gcds-textarea-focus-text);box-shadow:var(--gcds-textarea-focus-box-shadow);outline:var(--gcds-textarea-outline-width) solid var(--gcds-textarea-focus-text);outline-offset:var(--gcds-textarea-border-width)}.sc-gcds-textarea-h textarea.sc-gcds-textarea:disabled{background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text);cursor:not-allowed}.sc-gcds-textarea-h textarea.gcds-error.sc-gcds-textarea:not(:focus){border-color:var(--gcds-textarea-danger-border)}";

const GcdsTextarea$1 = /*@__PURE__*/ proxyCustomElement(class GcdsTextarea extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsChange = createEvent(this, "gcdsChange", 7);
    this.gcdsError = createEvent(this, "gcdsError", 7);
    this.gcdsValid = createEvent(this, "gcdsValid", 7);
    this._validator = defaultValidator;
    this.onFocus = e => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = e => {
      if (this.blurHandler) {
        this.blurHandler(e);
      }
      else {
        if (this.validateOn == 'blur') {
          this.validate();
        }
      }
      this.gcdsBlur.emit();
    };
    this.characterCount = undefined;
    this.cols = undefined;
    this.disabled = false;
    this.errorMessage = undefined;
    this.hideLabel = false;
    this.hint = undefined;
    this.label = undefined;
    this.required = false;
    this.rows = 5;
    this.textareaId = undefined;
    this.value = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.changeHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.inheritedAttributes = {};
    this.hasError = undefined;
    this.lang = undefined;
  }
  validateDisabledTextarea() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = '';
    }
    else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
    else if (this.errorMessage == '') {
      this.hasError = false;
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = 'blur';
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.textareaId}`,
        message: `${this.label} - ${this.errorMessage}`,
      });
    }
    else {
      this.errorMessage = '';
      this.gcdsValid.emit({ id: `#${this.textareaId}` });
    }
  }
  handleChange(e) {
    if (this.changeHandler) {
      this.changeHandler(e);
    }
    else {
      const val = e.target && e.target.value;
      this.value = val;
    }
    this.gcdsChange.emit(this.value);
  }
  submitListener(e) {
    if (e.target == this.el.closest('form')) {
      if (this.validateOn && this.validateOn != 'other') {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
      }
    }
  }
  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver(mutations => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    this.validateDisabledTextarea();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, 'textarea');
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'placeholder',
    ]);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { characterCount, cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaId, value, hasError, inheritedAttributes, lang, } = this;
    // Use max-width instead of cols attribute to keep field responsive
    const style = {
      maxWidth: `${cols * 1.5}ch`,
    };
    const attrsLabel = {
      label,
      required,
    };
    const attrsTextarea = Object.assign({ disabled,
      required,
      rows }, inheritedAttributes);
    if (hint || errorMessage || characterCount) {
      const hintID = hint ? `hint-${textareaId} ` : '';
      const errorID = errorMessage ? `error-message-${textareaId} ` : '';
      const countID = characterCount ? `textarea__count-${textareaId} ` : '';
      attrsTextarea['aria-describedby'] = `${hintID}${errorID}${countID}${attrsTextarea['aria-describedby']
        ? `${attrsTextarea['aria-describedby']}`
        : ''}`;
    }
    return (h(Host, null, h("div", { class: `gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": textareaId }) : null, errorMessage ? (h("gcds-error-message", { messageId: textareaId, message: errorMessage })) : null, h("textarea", Object.assign({}, attrsTextarea, { class: hasError ? 'gcds-error' : null, id: textareaId, name: textareaId, onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onInput: e => this.handleChange(e), "aria-labelledby": `label-for-${textareaId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: characterCount ? characterCount : null, style: cols ? style : null, ref: element => (this.shadowElement = element) }), value), characterCount ? (h("p", { id: `textarea__count-${textareaId}`, "aria-live": "polite" }, value == undefined
      ? `${characterCount} ${I18N[lang].characters.allowed}`
      : `${characterCount - value.length} ${I18N[lang].characters.left}`)) : null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["validateDisabledTextarea"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }; }
  static get style() { return gcdsTextareaCss; }
}, [2, "gcds-textarea", {
    "characterCount": [2, "character-count"],
    "cols": [2],
    "disabled": [1028],
    "errorMessage": [1025, "error-message"],
    "hideLabel": [4, "hide-label"],
    "hint": [1],
    "label": [1],
    "required": [4],
    "rows": [2],
    "textareaId": [1, "textarea-id"],
    "value": [1025],
    "validator": [1040],
    "validateOn": [1025, "validate-on"],
    "changeHandler": [16],
    "focusHandler": [16],
    "blurHandler": [16],
    "inheritedAttributes": [32],
    "hasError": [32],
    "lang": [32],
    "validate": [64]
  }, [[4, "submit", "submitListener"]], {
    "disabled": ["validateDisabledTextarea"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-textarea", "gcds-error-message", "gcds-hint", "gcds-label"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-textarea":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsTextarea$1);
      }
      break;
    case "gcds-error-message":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gcds-hint":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gcds-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcdsTextarea = GcdsTextarea$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsTextarea, defineCustomElement };

//# sourceMappingURL=gcds-textarea.js.map