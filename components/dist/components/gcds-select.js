import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$4 } from './gcds-error-message2.js';
import { d as defineCustomElement$3 } from './gcds-hint2.js';
import { d as defineCustomElement$2 } from './gcds-label2.js';

const gcdsSelectCss = ".sc-gcds-select-h .gcds-select-wrapper.sc-gcds-select{border:0;color:var(--gcds-select-default-text);font:var(--gcds-select-font);margin:0;max-width:90%;padding:0;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out}.sc-gcds-select-h .gcds-select-wrapper.sc-gcds-select slot.sc-gcds-select{display:inherit}.sc-gcds-select-h .gcds-select-wrapper.sc-gcds-select:focus-within{color:var(--gcds-select-focus-text)}.sc-gcds-select-h .gcds-select-wrapper.gcds-disabled.sc-gcds-select{color:var(--gcds-select-disabled-text)}.sc-gcds-select-h .gcds-select-wrapper.gcds-error.sc-gcds-select:not(:focus-within) select.sc-gcds-select{border-color:var(--gcds-select-danger-border)}.sc-gcds-select-h select.sc-gcds-select{-webkit-appearance:none;-moz-appearance:none;background-color:var(--gcds-select-default-background);background-image:url(\"data:image/svg+xml;utf8,<svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.799988 0.900024L7.79999 7.90003L14.8 0.900024' stroke='currentColor' stroke-width='2'/></svg>\");background-position-x:var(--gcds-select-arrow-position-x);background-position-y:50%;background-repeat:no-repeat;border:var(--gcds-select-border-width) solid;border-radius:var(--gcds-select-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--gcds-select-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-select-margin);max-width:100%;min-height:var(--gcds-select-min-width-and-height);min-width:var(--gcds-select-min-width-and-height);padding:var(--gcds-select-padding);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.sc-gcds-select-h select.sc-gcds-select:focus{border-color:var(--gcds-select-focus-text);-webkit-box-shadow:var(--gcds-select-focus-box-shadow);box-shadow:var(--gcds-select-focus-box-shadow);outline:var(--gcds-select-outline-width) solid var(--gcds-select-focus-text);outline-offset:var(--gcds-select-border-width)}.sc-gcds-select-h select.sc-gcds-select:disabled{background-color:var(--gcds-select-disabled-background);border-color:var(--gcds-select-disabled-text);cursor:not-allowed}";

const GcdsSelect$1 = /*@__PURE__*/ proxyCustomElement(class GcdsSelect extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcdsSelectChange = createEvent(this, "gcdsSelectChange", 7);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
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
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      else {
        if (this.validateOn == 'blur') {
          this.validate();
        }
      }
      this.gcdsBlur.emit();
    };
    this.handleChange = e => {
      if (this.changeHandler) {
        this.changeHandler(e);
      }
      else {
        const val = e.target && e.target.value;
        this.value = val;
      }
      this.gcdsSelectChange.emit(this.value);
    };
    this.selectId = undefined;
    this.label = undefined;
    this.required = false;
    this.disabled = false;
    this.defaultValue = undefined;
    this.value = undefined;
    this.errorMessage = undefined;
    this.hint = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.changeHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.hasError = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
  }
  validateDisabledSelect() {
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
        id: `#${this.selectId}`,
        message: `${this.label} - ${this.errorMessage}`,
      });
    }
    else {
      this.errorMessage = '';
      this.gcdsValid.emit({ id: `#${this.selectId}` });
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
    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, 'select');
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
    const { lang, selectId, label, required, disabled, defaultValue, value, hint, errorMessage, inheritedAttributes, hasError, } = this;
    const attrsSelect = Object.assign({ disabled,
      required,
      value }, inheritedAttributes);
    const attrsLabel = {
      label,
      required,
    };
    if (hint || errorMessage) {
      const hintID = hint ? `hint-${selectId} ` : '';
      const errorID = errorMessage ? `error-message-${selectId} ` : '';
      attrsSelect['aria-describedby'] = `${hintID}${errorID}${attrsSelect['aria-describedby']
        ? `${attrsSelect['aria-describedby']}`
        : ''}`;
    }
    return (h(Host, null, h("div", { class: `gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "label-for": selectId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": selectId }) : null, errorMessage ? (h("gcds-error-message", { messageId: selectId, message: errorMessage })) : null, h("select", Object.assign({}, attrsSelect, { id: selectId, name: selectId, onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onChange: e => this.handleChange(e), "aria-invalid": hasError ? 'true' : 'false', ref: element => (this.shadowElement = element) }), defaultValue ? (h("option", { value: "", disabled: true, selected: true }, defaultValue)) : null, h("slot", null)))));
  }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["validateDisabledSelect"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }; }
  static get style() { return gcdsSelectCss; }
}, [6, "gcds-select", {
    "selectId": [1537, "select-id"],
    "label": [513],
    "required": [516],
    "disabled": [1540],
    "defaultValue": [513, "default-value"],
    "value": [1025],
    "errorMessage": [1537, "error-message"],
    "hint": [513],
    "validator": [1040],
    "validateOn": [1025, "validate-on"],
    "changeHandler": [16],
    "focusHandler": [16],
    "blurHandler": [16],
    "hasError": [32],
    "inheritedAttributes": [32],
    "lang": [32],
    "validate": [64]
  }, [[4, "submit", "submitListener"]], {
    "disabled": ["validateDisabledSelect"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-select", "gcds-error-message", "gcds-hint", "gcds-label"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsSelect$1);
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

const GcdsSelect = GcdsSelect$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsSelect, defineCustomElement };

//# sourceMappingURL=gcds-select.js.map