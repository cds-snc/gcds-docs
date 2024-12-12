import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$6 } from './gcds-error-message2.js';
import { d as defineCustomElement$5 } from './gcds-hint2.js';
import { d as defineCustomElement$4 } from './gcds-icon2.js';
import { d as defineCustomElement$3 } from './gcds-label2.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

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

const gcdsTextareaCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-textarea-wrapper{border:0;margin:0;padding:0}:host .gcds-textarea-wrapper textarea{box-sizing:border-box}}@layer default{:host .gcds-textarea-wrapper{color:var(--gcds-textarea-default-text);font:var(--gcds-textarea-font);max-width:75ch;transition:color .15s ease-in-out;width:100%}:host .gcds-textarea-wrapper textarea{background-color:var(--gcds-textarea-default-background);background-image:none;border:var(--gcds-textarea-border-width) solid;border-radius:var(--gcds-textarea-border-radius);color:var(--gcds-textarea-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-textarea-margin)!important;max-width:100%;min-height:var(--gcds-textarea-min-height);min-width:50%;padding:var(--gcds-textarea-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}}@layer disabled{:host .gcds-textarea-wrapper.gcds-disabled{color:var(--gcds-textarea-disabled-text)}:host .gcds-textarea-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled textarea:disabled{background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-textarea-wrapper .error-message-container{display:block}:host .gcds-textarea-wrapper textarea.gcds-error:not(:focus){border-color:var(--gcds-textarea-danger-border)}}@layer focus{:host .gcds-textarea-wrapper:focus-within textarea:focus{border-color:var(--gcds-textarea-focus-border);box-shadow:var(--gcds-textarea-focus-box-shadow);outline:var(--gcds-textarea-outline-width) solid var(--gcds-textarea-focus-border);outline-offset:var(--gcds-textarea-border-width)}}";
const GcdsTextareaStyle0 = gcdsTextareaCss;

const GcdsTextarea$1 = /*@__PURE__*/ proxyCustomElement(class GcdsTextarea extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        this.internals = this.attachInternals();
        this._validator = defaultValidator;
        this.onBlur = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.handleInput = (e, customEvent) => {
            const val = e.target && e.target.value;
            this.value = val;
            this.internals.setFormValue(val ? val : null);
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
        this.characterCount = undefined;
        this.cols = undefined;
        this.disabled = false;
        this.errorMessage = undefined;
        this.hideLabel = false;
        this.hint = undefined;
        this.label = undefined;
        this.name = undefined;
        this.required = false;
        this.rows = 5;
        this.textareaId = undefined;
        this.value = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
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
    submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            if (this.hasError && this.validateOn != 'other') {
                e.preventDefault();
            }
        }
    }
    /*
     * Form internal functions
     */
    formResetCallback() {
        if (this.value != this.initialValue) {
            this.internals.setFormValue(this.initialValue);
            this.value = this.initialValue;
            this.shadowElement.value = this.initialValue;
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
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
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { characterCount, cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaId, value, hasError, inheritedAttributes, lang, name, } = this;
        // Use max-width instead of cols attribute to keep field responsive
        const style = {
            maxWidth: `${cols * 1.5}ch`,
        };
        const attrsLabel = {
            label,
            required,
        };
        const attrsTextarea = Object.assign({ name,
            disabled,
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
        return (h(Host, { key: 'eddcbe5d7d6704ab4f4ac7452e4c716537f222d0' }, h("div", { key: 'f11ccf8faf0ed5ade048612804c36bebb4ba9a1f', class: `gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '0ce48cd18d70fc0712aa29d21bf6d7e32a2a85eb' }, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? h("gcds-hint", { "hint-id": textareaId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: textareaId }, errorMessage)) : null, h("textarea", Object.assign({ key: '2f6686d4bc5b4b28cb9b9739e8bc2e18edc5b465' }, attrsTextarea, { class: hasError ? 'gcds-error' : null, id: textareaId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${textareaId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: characterCount ? characterCount : null, style: cols ? style : null, ref: element => (this.shadowElement = element) }), value), characterCount ? (h("gcds-text", { id: `textarea__count-${textareaId}`, "aria-live": "polite" }, value == undefined
            ? `${characterCount} ${I18N[lang].characters.allowed}`
            : `${characterCount - value.length} ${I18N[lang].characters.left}`)) : null)));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "disabled": ["validateDisabledTextarea"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }; }
    static get style() { return GcdsTextareaStyle0; }
}, [81, "gcds-textarea", {
        "characterCount": [2, "character-count"],
        "cols": [2],
        "disabled": [1028],
        "errorMessage": [1025, "error-message"],
        "hideLabel": [4, "hide-label"],
        "hint": [1],
        "label": [1],
        "name": [1],
        "required": [4],
        "rows": [2],
        "textareaId": [1, "textarea-id"],
        "value": [1025],
        "validator": [1040],
        "validateOn": [1025, "validate-on"],
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
    const components = ["gcds-textarea", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-textarea":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsTextarea$1);
            }
            break;
        case "gcds-error-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "gcds-hint":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-text":
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