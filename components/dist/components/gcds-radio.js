import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes, e as elementGroupCheck } from './utils.js';
import { d as defineCustomElement$3 } from './gcds-hint2.js';
import { d as defineCustomElement$2 } from './gcds-label2.js';

const gcdsRadioCss = ".sc-gcds-radio-h .gcds-radio.sc-gcds-radio{border:0;color:var(--gcds-radio-default-text);font:var(--gcds-radio-font);margin:var(--gcds-radio-margin);max-width:90%;padding:0;position:relative;-webkit-transition:color .15s ease-in-out;transition:color .15s ease-in-out}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio:focus-within{color:var(--gcds-radio-focus-text)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio:focus-within gcds-hint.sc-gcds-radio{color:currentColor}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio{color:var(--gcds-radio-disabled-text)}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio{color:var(--gcds-radio-disabled-text)}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:before{background-color:var(--gcds-radio-disabled-background);border-color:var(--gcds-radio-disabled-border);cursor:not-allowed}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:after{cursor:not-allowed}.sc-gcds-radio-h .gcds-radio.gcds-radio--disabled.sc-gcds-radio gcds-hint.sc-gcds-radio{color:currentColor}.sc-gcds-radio-h .gcds-radio.gcds-radio--error.sc-gcds-radio:not(:focus-within) input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:before{border-color:var(--gcds-radio-danger-border)}.sc-gcds-radio-h .gcds-radio.gcds-radio--error.sc-gcds-radio:not(:focus-within) input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:after{background-color:var(--gcds-radio-danger-border);color:var(--gcds-radio-danger-border)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio{height:var(--gcds-radio-input-height);left:0;opacity:0;position:absolute;top:var(--gcds-radio-top);width:var(--gcds-radio-input-width)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio:checked+gcds-label.sc-gcds-radio:after{opacity:1}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:after,.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:before{border-radius:var(--gcds-radio-border-radius);-webkit-box-sizing:border-box;box-sizing:border-box;content:\"\";cursor:pointer;position:absolute}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:before{border:var(--gcds-radio-input-border-width) solid;height:var(--gcds-radio-input-height-and-width);left:0;top:var(--gcds-radio-top);width:var(--gcds-radio-input-height-and-width)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio+gcds-label.sc-gcds-radio:after{background-color:currentcolor;color:currentcolor;height:var(--gcds-radio-check-height-and-width);left:var(--gcds-radio-check-left);opacity:0;top:var(--gcds-radio-check-top);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;width:var(--gcds-radio-check-height-and-width)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio:focus+gcds-label.sc-gcds-radio{color:var(--gcds-radio-focus-text)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio:focus+gcds-label.sc-gcds-radio:before{outline:var( --gcds-radio-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-radio-input-border-width)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio input[type=radio].sc-gcds-radio:focus+gcds-label.sc-gcds-radio:after{background-color:currentcolor;color:var(--gcds-radio-focus-text)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio gcds-hint.sc-gcds-radio,.sc-gcds-radio-h .gcds-radio.sc-gcds-radio gcds-label.sc-gcds-radio{display:block;padding:var(--gcds-radio-label-padding)}.sc-gcds-radio-h .gcds-radio.sc-gcds-radio gcds-hint.sc-gcds-radio{font:var(--gcds-radio-hint-font)}";

const GcdsRadio$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcdsRadioChange = createEvent(this, "gcdsRadioChange", 7);
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.onFocus = (e) => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = (e) => {
      if (this.blurHandler) {
        this.blurHandler(e);
      }
      this.gcdsBlur.emit();
    };
    this.onChange = (name) => {
      this.gcdsRadioChange.emit(name);
      this.checked = this.shadowElement.checked;
    };
    this.radioId = undefined;
    this.label = undefined;
    this.name = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.checked = undefined;
    this.value = undefined;
    this.hint = undefined;
    this.clickHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.hasError = undefined;
    this.parentError = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
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
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  gcdsradioChangeEventHandler(event) {
    if (event.detail == this.name && event.srcElement != this.shadowElement) {
      if (this.checked) {
        this.checked = false;
      }
    }
  }
  /**
  * Event listener for gcds-fieldset errors
  */
  gcdsGroupError(e) {
    if (e.srcElement.contains(this.el) && elementGroupCheck(this.name)) {
      this.hasError = true;
      this.parentError = e.detail;
    }
    else if (!elementGroupCheck(this.name)) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  gcdsGroupErrorClear(e) {
    if (e.srcElement.contains(this.el) && this.hasError) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  render() {
    const { lang, radioId, label, name, required, disabled, value, checked, hint, hasError, parentError, inheritedAttributes } = this;
    const attrsInput = Object.assign({ name,
      disabled,
      required,
      value,
      checked }, inheritedAttributes);
    if (hint || parentError) {
      let hintID = hint ? `hint-${radioId} ` : "";
      let errorID = parentError ? `parent-error-${radioId} ` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${attrsInput["aria-describedby"] ? `${attrsInput["aria-describedby"]}` : ""}`;
    }
    if (hasError) {
      attrsInput["aria-invalid"] = "true";
    }
    return (h(Host, null, h("div", { class: `gcds-radio ${disabled ? 'gcds-radio--disabled' : ''} ${hasError ? 'gcds-radio--error' : ''}` }, h("input", Object.assign({ id: radioId, type: "radio" }, attrsInput, { onChange: () => this.onChange(name), onBlur: (e) => this.onBlur(e), onFocus: (e) => this.onFocus(e), onClick: (e) => { this.clickHandler && this.clickHandler(e); }, ref: element => this.shadowElement = element })), h("gcds-label", { label: label, "label-for": radioId, lang: lang }), hint ? h("gcds-hint", { hint: hint, "hint-id": radioId }) : null, parentError && h("span", { id: `parent-error-${radioId}`, hidden: true }, parentError))));
  }
  get el() { return this; }
  static get watchers() { return {
    "hasError": ["validateHasError"]
  }; }
  static get style() { return gcdsRadioCss; }
}, [2, "gcds-radio", {
    "radioId": [1537, "radio-id"],
    "label": [513],
    "name": [513],
    "required": [516],
    "disabled": [1540],
    "checked": [1540],
    "value": [513],
    "hint": [513],
    "clickHandler": [16],
    "focusHandler": [16],
    "blurHandler": [16],
    "hasError": [32],
    "parentError": [32],
    "inheritedAttributes": [32],
    "lang": [32]
  }, [[4, "gcdsRadioChange", "gcdsradioChangeEventHandler"], [16, "gcdsGroupError", "gcdsGroupError"], [16, "gcdsGroupErrorClear", "gcdsGroupErrorClear"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-radio", "gcds-hint", "gcds-label"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-radio":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsRadio$1);
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

const GcdsRadio = GcdsRadio$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsRadio, defineCustomElement };
