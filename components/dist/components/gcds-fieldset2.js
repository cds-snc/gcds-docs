import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, v as validateFieldsetElements, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$4 } from './gcds-error-message2.js';
import { d as defineCustomElement$3 } from './gcds-hint2.js';
import { d as defineCustomElement$2 } from './gcds-icon2.js';
import { d as defineCustomElement$1 } from './gcds-text2.js';

const I18N = {
  en: {
    required: 'required',
  },
  fr: {
    required: 'obligatoire',
  },
};

const gcdsFieldsetCss = "@layer reset, default, disabled, focus;@layer reset{:host{display:block}:host .gcds-fieldset{border:0;padding:0}:host legend{padding:0}:host slot{display:block;margin:0}}@layer default{.gcds-fieldset{color:var(--gcds-fieldset-default-text)}.gcds-fieldset legend{font:var(--gcds-fieldset-font-desktop);margin:var(--gcds-fieldset-legend-margin)!important}@media only screen and (width < 48em){.gcds-fieldset legend{font:var(--gcds-fieldset-font-mobile)}}.gcds-fieldset legend .legend__required{font:var(--gcds-fieldset-legend-required-font-desktop);margin:var(--gcds-fieldset-legend-required-margin)!important;vertical-align:middle}@media only screen and (width < 48em){.gcds-fieldset legend .legend__required{font:var(--gcds-fieldset-legend-required-font-mobile)}}}@layer disabled{:host .gcds-fieldset:disabled{color:var(--gcds-fieldset-disabled-text)}}@layer focus{:host .gcds-fieldset:focus-within{color:var(--gcds-fieldset-focus-text)}}";
const GcdsFieldsetStyle0 = gcdsFieldsetCss;

const GcdsFieldset = /*@__PURE__*/ proxyCustomElement(class GcdsFieldset extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsGroupError = createEvent(this, "gcdsGroupError", 7);
        this.gcdsGroupErrorClear = createEvent(this, "gcdsGroupErrorClear", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        this.isDateInput = false;
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
        if (this.el.getAttribute('data-date')) {
            this.isDateInput = true;
        }
        else {
            requiredValidator(this.el, 'fieldset');
        }
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
                : `legend-${fieldsetId}`, tabindex: "-1", ref: element => (this.shadowElement = element) }), h("legend", { id: `legend-${fieldsetId}` }, legend, required ? (h("span", { class: "legend__required" }, "(", I18N[lang].required, ")")) : null), hint ? h("gcds-hint", { "hint-id": fieldsetId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: fieldsetId }, errorMessage)) : null, h("slot", null))));
    }
    static get delegatesFocus() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "errorMessage": ["validateErrorMessage"],
        "disabled": ["validateDisabledFieldset", "handleDisabledChange"],
        "validator": ["validateValidator"]
    }; }
    static get style() { return GcdsFieldsetStyle0; }
}, [17, "gcds-fieldset", {
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
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-fieldset", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-fieldset":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsFieldset);
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
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "gcds-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { GcdsFieldset as G, defineCustomElement as d };

//# sourceMappingURL=gcds-fieldset2.js.map