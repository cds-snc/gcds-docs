import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { e as elementGroupCheck, o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$4 } from './gcds-error-message2.js';
import { d as defineCustomElement$3 } from './gcds-hint2.js';
import { d as defineCustomElement$2 } from './gcds-label2.js';

const gcdsCheckboxCss = ".sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox{color:var(--gcds-checkbox-default-text);font:var(--gcds-checkbox-font);margin:var(--gcds-checkbox-margin);max-width:90%;padding:0;position:relative;transition:color .15s ease-in-out}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox:focus-within{color:var(--gcds-checkbox-focus-text)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox:focus-within gcds-hint.sc-gcds-checkbox{color:currentColor}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox{color:var(--gcds-checkbox-disabled-text)}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox{color:var(--gcds-checkbox-disabled-text)}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:before{background-color:var(--gcds-checkbox-disabled-background);border-color:currentcolor;cursor:not-allowed}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:after{cursor:not-allowed}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--disabled.sc-gcds-checkbox gcds-hint.sc-gcds-checkbox{color:currentColor}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--error.sc-gcds-checkbox:not(:focus-within) input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:before{border-color:var(--gcds-checkbox-danger-border)}.sc-gcds-checkbox-h .gcds-checkbox.gcds-checkbox--error.sc-gcds-checkbox:not(:focus-within) input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:after{color:var(--gcds-checkbox-danger-border)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox{height:var(--gcds-checkbox-input-height-and-width);left:0;opacity:0;position:absolute;top:var(--gcds-checkbox-top);width:var(--gcds-checkbox-input-height-and-width)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox:checked+gcds-label.sc-gcds-checkbox:after{opacity:1}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox{width:fit-content}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:after,.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:before{box-sizing:border-box;content:\"\";cursor:pointer;position:absolute}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:before{border:var(--gcds-checkbox-input-border-width) solid;border-radius:var(--gcds-checkbox-input-border-radius);height:var(--gcds-checkbox-input-height-and-width);left:0;top:var(--gcds-checkbox-top);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:var(--gcds-checkbox-input-height-and-width)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox+gcds-label.sc-gcds-checkbox:after{border:var(--gcds-checkbox-check-border-width) solid;border-left:0;border-top:0;color:currentcolor;height:var(--gcds-checkbox-check-height);left:var(--gcds-checkbox-check-left);opacity:0;top:var(--gcds-checkbox-check-top);transform:rotate(40deg);transition:opacity .2s ease-in-out;width:var(--gcds-checkbox-check-width)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox:focus+gcds-label.sc-gcds-checkbox:before{background:var(--gcds-checkbox-focus-background);box-shadow:var(--gcds-checkbox-focus-box-shadow);outline:var( --gcds-checkbox-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-checkbox-input-border-width)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox input[type=checkbox].sc-gcds-checkbox:focus+gcds-label.sc-gcds-checkbox:after{color:var(--gcds-checkbox-focus-text)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox gcds-hint.sc-gcds-checkbox,.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox gcds-label.sc-gcds-checkbox{display:block;padding:var(--gcds-checkbox-label-padding)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox gcds-hint.sc-gcds-checkbox{font:var(--gcds-checkbox-hint-font);line-height:var(--gcds-checkbox-hint-line-height)}.sc-gcds-checkbox-h .gcds-checkbox.sc-gcds-checkbox gcds-error-message.sc-gcds-checkbox{display:inline-block;padding:var(--gcds-checkbox-error-padding)}";
const GcdsCheckboxStyle0 = gcdsCheckboxCss;

const GcdsCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class GcdsCheckbox extends HTMLElement {
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
        this.onChange = () => {
            this.checked = !this.checked;
            this.gcdsChange.emit(this.checked);
        };
        this.checkboxId = undefined;
        this.label = undefined;
        this.name = undefined;
        this.required = undefined;
        this.disabled = undefined;
        this.value = undefined;
        this.checked = undefined;
        this.errorMessage = undefined;
        this.hint = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.clickHandler = undefined;
        this.focusHandler = undefined;
        this.blurHandler = undefined;
        this.parentError = undefined;
        this.inheritedAttributes = {};
        this.hasError = undefined;
        this.lang = undefined;
    }
    validateDisabledCheckbox() {
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
            this.parentError = '';
        }
    }
    gcdsGroupErrorClear(e) {
        if (e.srcElement.contains(this.el) && this.hasError) {
            this.hasError = false;
            this.parentError = '';
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
        if (!this._validator.validate(this.checked) &&
            this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsError.emit({
                id: `#${this.checkboxId}`,
                message: `${this.label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit({ id: `#${this.checkboxId}` });
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
        this.validateDisabledCheckbox();
        this.validateHasError();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'checkbox');
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
        const { lang, checkboxId, label, name, required, disabled, value, checked, hint, errorMessage, hasError, parentError, inheritedAttributes, } = this;
        const attrsInput = Object.assign({ name,
            disabled,
            required,
            value,
            checked }, inheritedAttributes);
        const attrsLabel = {
            label,
            required,
        };
        if (hint || errorMessage || parentError) {
            const hintID = hint ? `hint-${checkboxId} ` : '';
            const errorID = errorMessage ? `error-message-${checkboxId} ` : '';
            const parentErrorID = parentError ? `parent-error-${checkboxId} ` : '';
            attrsInput['aria-describedby'] = `${hintID}${errorID}${parentErrorID}${attrsInput['aria-describedby']
                ? `${attrsInput['aria-describedby']}`
                : ''}`;
        }
        if (hasError) {
            attrsInput['aria-invalid'] = 'true';
        }
        return (h(Host, null, h("div", { class: `gcds-checkbox ${disabled ? 'gcds-checkbox--disabled' : ''} ${hasError ? 'gcds-checkbox--error' : ''}` }, h("input", Object.assign({ id: checkboxId, type: "checkbox" }, attrsInput, { onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onChange: () => this.onChange(), onClick: e => {
                this.clickHandler && this.clickHandler(e);
            }, ref: element => (this.shadowElement = element) })), h("gcds-label", Object.assign({}, attrsLabel, { "label-for": checkboxId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": checkboxId }) : null, errorMessage ? (h("gcds-error-message", { messageId: checkboxId, message: errorMessage })) : null, parentError ? (h("span", { id: `parent-error-${checkboxId}`, hidden: true }, parentError)) : null)));
    }
    get el() { return this; }
    static get watchers() { return {
        "disabled": ["validateDisabledCheckbox"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }; }
    static get style() { return GcdsCheckboxStyle0; }
}, [2, "gcds-checkbox", {
        "checkboxId": [1537, "checkbox-id"],
        "label": [513],
        "name": [513],
        "required": [516],
        "disabled": [1540],
        "value": [513],
        "checked": [1540],
        "errorMessage": [1537, "error-message"],
        "hint": [513],
        "validator": [1040],
        "validateOn": [1025, "validate-on"],
        "clickHandler": [16],
        "focusHandler": [16],
        "blurHandler": [16],
        "parentError": [32],
        "inheritedAttributes": [32],
        "hasError": [32],
        "lang": [32],
        "validate": [64]
    }, [[16, "gcdsGroupError", "gcdsGroupError"], [16, "gcdsGroupErrorClear", "gcdsGroupErrorClear"], [4, "submit", "submitListener"]], {
        "disabled": ["validateDisabledCheckbox"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-checkbox", "gcds-error-message", "gcds-hint", "gcds-label"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsCheckbox$1);
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

const GcdsCheckbox = GcdsCheckbox$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsCheckbox, defineCustomElement };

//# sourceMappingURL=gcds-checkbox.js.map