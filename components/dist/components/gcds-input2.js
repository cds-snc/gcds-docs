import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { i as inheritAttributes, b as handleValidationResult, o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defaultValidator, g as getValidator, r as requiredValidator } from './validator.factory.js';
import { d as defineCustomElement$5 } from './gcds-error-message2.js';
import { d as defineCustomElement$4 } from './gcds-hint2.js';
import { d as defineCustomElement$3 } from './gcds-icon2.js';
import { d as defineCustomElement$2 } from './gcds-label2.js';
import { d as defineCustomElement$1 } from './gcds-text2.js';

const gcdsInputCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-input-wrapper{border:0;margin:0;padding:0}:host .gcds-input-wrapper input{box-sizing:border-box}}@layer default{:host .gcds-input-wrapper{color:var(--gcds-input-default-text);font:var(--gcds-input-font);max-width:75ch;transition:color .15s ease-in-out;width:100%}:host .gcds-input-wrapper input{background-color:var(--gcds-input-default-background);background-image:none;border:var(--gcds-input-border-width) solid;border-radius:var(--gcds-input-border-radius);color:var(--gcds-input-default-text);display:block;font:inherit!important;height:auto;margin:var(--gcds-input-margin)!important;max-width:100%;min-height:var(--gcds-input-min-width-and-height);min-width:var(--gcds-input-min-width-and-height);padding:var(--gcds-input-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}:host .gcds-input-wrapper input[type=number]{-moz-appearance:textfield}:host .gcds-input-wrapper input[type=number]::-webkit-inner-spin-button,:host .gcds-input-wrapper input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}}@layer disabled{:host .gcds-input-wrapper.gcds-disabled{color:var(--gcds-input-disabled-text)}:host .gcds-input-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-input-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-input-wrapper.gcds-disabled input:disabled{background-color:var(--gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-input-wrapper input.gcds-error:not(:focus){border-color:var(--gcds-input-danger-border)}}@layer focus{:host .gcds-input-wrapper:focus-within input:focus{border-color:var(--gcds-input-focus-border);box-shadow:var(--gcds-input-focus-box-shadow);outline:var(--gcds-input-outline-width) solid var(--gcds-input-focus-border);outline-offset:var(--gcds-input-border-width)}}";
const GcdsInputStyle0 = gcdsInputCss;

const GcdsInput = /*@__PURE__*/ proxyCustomElement(class GcdsInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
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
        this.disabled = false;
        this.errorMessage = undefined;
        this.hideLabel = false;
        this.hint = undefined;
        this.inputId = undefined;
        this.name = undefined;
        this.label = undefined;
        this.required = false;
        this.size = undefined;
        this.type = 'text';
        this.value = undefined;
        this.autocomplete = undefined;
        this.validator = undefined;
        this.validateOn = 'blur';
        this.inheritedAttributes = {};
        this.hasError = undefined;
        this.lang = undefined;
    }
    validateDisabledInput() {
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
        this._validator = getValidator(this.validator);
    }
    validateHasError() {
        if (this.disabled) {
            this.hasError = false;
        }
    }
    /**
     * Watch HTML attributes to inherit changes
     */
    ariaInvalidWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
    }
    ariaDescriptiondWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
    }
    /**
     * Call any active validators
     */
    async validate() {
        handleValidationResult(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
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
    keyDownListener(e) {
        if (e.target == this.el && e.key === 'Enter') {
            const formButton = document.createElement('button');
            formButton.type = 'submit';
            formButton.style.display = 'none';
            this.el.closest('form').appendChild(formButton);
            formButton.click();
            formButton.remove();
        }
    }
    /*
     * Form internal functions
     */
    formResetCallback() {
        if (this.value != this.initialValue) {
            this.internals.setFormValue(this.initialValue);
            this.value = this.initialValue;
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
        this.validateDisabledInput();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'input', this.type);
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    render() {
        const { disabled, errorMessage, hideLabel, hint, inputId, name, label, required, size, type, value, hasError, autocomplete, inheritedAttributes, lang, } = this;
        // Use max-width to keep field responsive
        const style = {
            maxWidth: `calc(${size * 2}ch + 1.5rem)`,
        };
        const attrsInput = Object.assign({ disabled,
            required,
            type,
            value,
            autocomplete }, inheritedAttributes);
        const attrsLabel = {
            label,
            required,
        };
        if (hint || errorMessage) {
            const hintID = hint ? `hint-${inputId} ` : '';
            const errorID = errorMessage ? `error-message-${inputId} ` : '';
            attrsInput['aria-describedby'] = `${hintID}${errorID}${attrsInput['aria-describedby']
                ? ` ${attrsInput['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: 'b01f509292604301b7792bbba825ef16958edce6' }, h("div", { key: 'e1499fb45ea0a3e268d7b666b49d5cea206b8df4', class: `gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: 'e3ace51ae9be43058cfafad48761ba2679ecc0ad' }, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? h("gcds-hint", { "hint-id": inputId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: inputId }, errorMessage)) : null, h("input", Object.assign({ key: 'fece71e5bd1b106fc83ac77d4290905e4907001d' }, attrsInput, { class: hasError ? 'gcds-error' : null, id: inputId, name: name, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                    ? 'true'
                    : 'false', size: size, style: size ? style : null, part: "input", ref: element => (this.shadowElement = element) })))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "disabled": ["validateDisabledInput"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"],
        "aria-invalid": ["ariaInvalidWatcher"],
        "aria-description": ["ariaDescriptiondWatcher"]
    }; }
    static get style() { return GcdsInputStyle0; }
}, [81, "gcds-input", {
        "disabled": [1028],
        "errorMessage": [1025, "error-message"],
        "hideLabel": [4, "hide-label"],
        "hint": [1],
        "inputId": [1, "input-id"],
        "name": [1],
        "label": [1],
        "required": [4],
        "size": [2],
        "type": [1],
        "value": [1025],
        "autocomplete": [1],
        "validator": [1040],
        "validateOn": [1025, "validate-on"],
        "inheritedAttributes": [32],
        "hasError": [32],
        "lang": [32],
        "validate": [64]
    }, [[4, "submit", "submitListener"], [4, "keydown", "keyDownListener"]], {
        "disabled": ["validateDisabledInput"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"],
        "aria-invalid": ["ariaInvalidWatcher"],
        "aria-description": ["ariaDescriptiondWatcher"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-input", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsInput);
            }
            break;
        case "gcds-error-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "gcds-hint":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-label":
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

export { GcdsInput as G, defineCustomElement as d };

//# sourceMappingURL=gcds-input2.js.map