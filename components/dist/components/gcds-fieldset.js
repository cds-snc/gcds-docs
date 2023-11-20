import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, v as validateFieldsetElements, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$3 } from './gcds-error-message2.js';
import { d as defineCustomElement$2 } from './gcds-hint2.js';

const I18N = {
  en: {
    required: 'required',
  },
  fr: {
    required: 'obligatoire',
  },
};

const gcdsFieldsetCss = ".sc-gcds-fieldset-h{display:block}.sc-gcds-fieldset-h .gcds-fieldset.sc-gcds-fieldset{border:none;color:var(--gcds-fieldset-default-text);padding:0}.sc-gcds-fieldset-h .gcds-fieldset.sc-gcds-fieldset>legend.sc-gcds-fieldset{color:inherit;font:var(--gcds-fieldset-font);margin:var(--gcds-fieldset-legend-margin)}.sc-gcds-fieldset-h .gcds-fieldset.sc-gcds-fieldset:focus-within{color:var(--gcds-fieldset-focus-text)}.sc-gcds-fieldset-h .gcds-fieldset.sc-gcds-fieldset:disabled{color:var(--gcds-fieldset-disabled-text)}.sc-gcds-fieldset-h .legend__required.sc-gcds-fieldset{margin:var(--gcds-fieldset-legend-required-margin)}.sc-gcds-fieldset-h slot.sc-gcds-fieldset{display:block;margin:0}";

const GcdsFieldset$1 = /*@__PURE__*/ proxyCustomElement(class GcdsFieldset extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcdsGroupError = createEvent(this, "gcdsGroupError", 7);
    this.gcdsGroupErrorClear = createEvent(this, "gcdsGroupErrorClear", 7);
    this.gcdsError = createEvent(this, "gcdsError", 7);
    this.gcdsValid = createEvent(this, "gcdsValid", 7);
    this._validator = defaultValidator;
    this.fieldsetId = undefined;
    this.legend = undefined;
    this.required = undefined;
    this.errorMessage = undefined;
    this.hint = undefined;
    this.disabled = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.hasError = undefined;
    this.lang = undefined;
    this.inheritedAttributes = {};
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
  validateDisabledFieldset() {
    if (this.required) {
      this.disabled = false;
    }
    if (this.disabled == true) {
      for (let i = 0; i < this.el.children.length; i++) {
        this.el.children[i].setAttribute('disabled', '');
      }
    }
  }
  handleDisabledChange(newValue, _oldValue) {
    if (_oldValue && newValue != _oldValue) {
      for (let i = 0; i < this.el.children.length; i++) {
        this.el.children[i].removeAttribute('disabled');
      }
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = 'blur';
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.fieldsetId) &&
      this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsGroupError.emit(this.errorMessage);
      this.gcdsError.emit({
        id: `#${this.fieldsetId}`,
        message: `${this.legend} - ${this.errorMessage}`,
      });
    }
    else {
      this.errorMessage = '';
      this.gcdsGroupErrorClear.emit();
      this.gcdsValid.emit({ id: `#${this.fieldsetId}` });
    }
  }
  blurValidate() {
    if (this.validator &&
      this.validateOn == 'blur' &&
      !this.el.matches(':focus-within')) {
      this.validate();
    }
  }
  /**
   * Event listener for gcds-fieldset errors
   */
  gcdsParentGroupError(e) {
    if (e.srcElement == this.el &&
      validateFieldsetElements(this.el, this.el.children).includes(false)) {
      this.hasError = true;
    }
  }
  gcdsParentGroupErrorClear(e) {
    if (e.srcElement == this.el && this.hasError) {
      this.hasError = false;
    }
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
    this.validateDisabledFieldset();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, 'fieldset');
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { lang, fieldsetId, legend, required, errorMessage, hasError, hint, disabled, inheritedAttributes, } = this;
    const fieldsetAttrs = Object.assign({ disabled }, inheritedAttributes);
    if (errorMessage) {
      fieldsetAttrs['aria-describedby'] = `error-message-${fieldsetId} ${fieldsetAttrs['aria-describedby']
        ? ` ${fieldsetAttrs['aria-describedby']}`
        : ''}`;
    }
    return (h(Host, null, h("fieldset", Object.assign({ class: `gcds-fieldset ${hasError ? 'gcds-fieldset--error' : ''}`, id: fieldsetId }, fieldsetAttrs, { "aria-labelledby": hint
        ? `legend-${fieldsetId} hint-${fieldsetId}`
        : `legend-${fieldsetId}`, tabindex: "-1", ref: element => (this.shadowElement = element) }), h("legend", { id: `legend-${fieldsetId}` }, legend, required ? (h("strong", { class: "legend__required" }, "(", I18N[lang].required, ")")) : null), hint ? h("gcds-hint", { hint: hint, "hint-id": fieldsetId }) : null, errorMessage ? (h("gcds-error-message", { messageId: fieldsetId, message: errorMessage })) : null, h("slot", null))));
  }
  get el() { return this; }
  static get watchers() { return {
    "errorMessage": ["validateErrorMessage"],
    "disabled": ["validateDisabledFieldset", "handleDisabledChange"],
    "validator": ["validateValidator"]
  }; }
  static get style() { return gcdsFieldsetCss; }
}, [6, "gcds-fieldset", {
    "fieldsetId": [513, "fieldset-id"],
    "legend": [513],
    "required": [516],
    "errorMessage": [1537, "error-message"],
    "hint": [513],
    "disabled": [1540],
    "validator": [1040],
    "validateOn": [1025, "validate-on"],
    "hasError": [32],
    "lang": [32],
    "inheritedAttributes": [32],
    "validate": [64]
  }, [[0, "gcdsBlur", "blurValidate"], [16, "gcdsGroupError", "gcdsParentGroupError"], [16, "gcdsGroupErrorClear", "gcdsParentGroupErrorClear"], [4, "submit", "submitListener"]], {
    "errorMessage": ["validateErrorMessage"],
    "disabled": ["validateDisabledFieldset", "handleDisabledChange"],
    "validator": ["validateValidator"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-fieldset", "gcds-error-message", "gcds-hint"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-fieldset":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsFieldset$1);
      }
      break;
    case "gcds-error-message":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gcds-hint":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcdsFieldset = GcdsFieldset$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsFieldset, defineCustomElement };

//# sourceMappingURL=gcds-fieldset.js.map