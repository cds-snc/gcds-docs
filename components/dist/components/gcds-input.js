import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$4 } from './gcds-error-message2.js';
import { d as defineCustomElement$3 } from './gcds-hint2.js';
import { d as defineCustomElement$2 } from './gcds-label2.js';

const gcdsInputCss = ".sc-gcds-input-h .gcds-input-wrapper.sc-gcds-input{border:0;color:var(--gcds-input-default-text);font:var(--gcds-input-font);margin:0;max-width:90%;padding:0;transition:color .15s ease-in-out;width:75ch}.sc-gcds-input-h .gcds-input-wrapper.sc-gcds-input:focus-within{color:var(--gcds-input-focus-text)}.sc-gcds-input-h .gcds-input-wrapper.gcds-disabled.sc-gcds-input{color:var(--gcds-input-disabled-text)}.sc-gcds-input-h input.sc-gcds-input{background-color:var(--gcds-input-default-background);background-image:none;border:var(--gcds-input-border-width) solid;border-radius:var(--gcds-input-border-radius);box-sizing:border-box;color:var(--gcds-input-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-input-margin);max-width:100%;min-height:var(--gcds-input-min-width-and-height);min-width:var(--gcds-input-min-width-and-height);padding:var(--gcds-input-padding);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}.sc-gcds-input-h input.sc-gcds-input:focus{border-color:var(--gcds-input-focus-text);box-shadow:var(--gcds-input-focus-box-shadow);outline:var(--gcds-input-outline-width) solid var(--gcds-input-focus-text);outline-offset:var(--gcds-input-border-width)}.sc-gcds-input-h input.sc-gcds-input:disabled{background-color:var(--gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}.sc-gcds-input-h input.gcds-error.sc-gcds-input:not(:focus){border-color:var(--gcds-input-danger-border)}";
const GcdsInputStyle0 = gcdsInputCss;

const GcdsInput$1 = /*@__PURE__*/ proxyCustomElement(class GcdsInput extends HTMLElement {
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
        this.disabled = false;
        this.errorMessage = undefined;
        this.hideLabel = false;
        this.hint = undefined;
        this.inputId = undefined;
        this.label = undefined;
        this.required = false;
        this.size = undefined;
        this.type = 'text';
        this.value = undefined;
        this.autocomplete = undefined;
        this.changeHandler = undefined;
        this.focusHandler = undefined;
        this.blurHandler = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
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
                id: `#${this.inputId}`,
                message: `${this.label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit({ id: `#${this.inputId}` });
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
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'input', this.type);
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
        const { disabled, errorMessage, hideLabel, hint, inputId, label, required, size, type, value, hasError, autocomplete, inheritedAttributes, lang, } = this;
        // Use max-width instead of size attribute to keep field responsive
        const style = {
            maxWidth: `${size * 1.5}ch`,
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
        return (h(Host, null, h("div", { class: `gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": inputId }) : null, errorMessage ? (h("gcds-error-message", { messageId: inputId, message: errorMessage })) : null, h("input", Object.assign({}, attrsInput, { class: hasError ? 'gcds-error' : null, id: inputId, name: inputId, onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onInput: e => this.handleChange(e), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: size, style: size ? style : null, ref: element => (this.shadowElement = element) })))));
    }
    get el() { return this; }
    static get watchers() { return {
        "disabled": ["validateDisabledInput"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }; }
    static get style() { return GcdsInputStyle0; }
}, [2, "gcds-input", {
        "disabled": [1028],
        "errorMessage": [1025, "error-message"],
        "hideLabel": [4, "hide-label"],
        "hint": [1],
        "inputId": [1, "input-id"],
        "label": [1],
        "required": [4],
        "size": [2],
        "type": [1],
        "value": [1025],
        "autocomplete": [1],
        "changeHandler": [16],
        "focusHandler": [16],
        "blurHandler": [16],
        "validator": [1040],
        "validateOn": [1025, "validate-on"],
        "inheritedAttributes": [32],
        "hasError": [32],
        "lang": [32],
        "validate": [64]
    }, [[4, "submit", "submitListener"]], {
        "disabled": ["validateDisabledInput"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-input", "gcds-error-message", "gcds-hint", "gcds-label"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsInput$1);
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

const GcdsInput = GcdsInput$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsInput, defineCustomElement };

//# sourceMappingURL=gcds-input.js.map