import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as logError, h as handleErrors, b as handleValidationResult, c as isValid, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$6 } from './gcds-error-message2.js';
import { d as defineCustomElement$5 } from './gcds-hint2.js';
import { d as defineCustomElement$4 } from './gcds-icon2.js';
import { d as defineCustomElement$3 } from './gcds-label2.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

function isRadioObject(obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    const validKeys = ['id', 'label', 'value', 'hint', 'checked'];
    const objKeys = Object.keys(obj);
    // Check if all properties match the expected type
    const hasValidTypes = typeof obj.id === 'string' &&
        typeof obj.label === 'string' &&
        typeof obj.value === 'string' &&
        (obj.hint === undefined || typeof obj.hint === 'string') &&
        (obj.checked === undefined || typeof obj.checked === 'boolean');
    // Ensure no extra properties exist
    const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));
    return hasValidTypes && hasOnlyValidKeys;
}

const I18N = {
  en: {
    required: ' (required)',
  },
  fr: {
    required: ' (obligatoire)',
  },
};

const gcdsRadiosCss = "@layer reset, default, disabled, error, focus, a11y.highcontrast;@layer reset{:host{display:block}:host .gcds-radios__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-radios__fieldset legend{padding:0}:host .gcds-radio{border:0;padding:0}:host .gcds-radio gcds-label>label:after,:host .gcds-radio gcds-label>label:before{box-sizing:border-box;content:\"\";cursor:pointer;position:absolute}}@layer default{:host .gcds-radios__legend{font:var(--gcds-radio-legend-font-desktop);margin:var(--gcds-radio-legend-margin)}:host .gcds-radios__legend .legend__required{font:var(--gcds-radio-legend-required-font-desktop)}@media only screen and (width < 48em){:host .gcds-radios__legend{font:var(--gcds-radio-legend-font-mobile)}:host .gcds-radios__legend .legend__required{font:var(--gcds-radio-legend-required-font-mobile)}}:host .gcds-radios__legend:not(:has(+gcds-hint)){margin:var(--gcds-radio-legend-hint-margin)}:host gcds-hint:part(hint){margin:var(--gcds-radio-hint-margin)}:host .gcds-radio{color:var(--gcds-radio-default-text);font:var(--gcds-radio-font);margin:var(--gcds-radio-margin)!important;max-width:var(--gcds-radio-max-width);min-height:calc(var(--gcds-radio-input-height-and-width) - var(--gcds-radio-padding));padding:var(--gcds-radio-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-radio :is(gcds-label,gcds-hint){padding:var(--gcds-radio-label-padding)!important}:host .gcds-radio gcds-hint::part(hint){margin:0}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before,:host .gcds-radio input{position:absolute}:host .gcds-radio gcds-label>label:before,:host .gcds-radio input{height:var(--gcds-radio-input-height-and-width);left:0;top:0;width:var(--gcds-radio-input-height-and-width)}:host .gcds-radio input{opacity:0}:host .gcds-radio gcds-label>label{width:fit-content;--gcds-label-font-desktop:var(--gcds-radio-label-font-desktop);--gcds-label-font-mobile:var(--gcds-radio-label-font-mobile)}:host .gcds-radio gcds-label>label:after,:host .gcds-radio gcds-label>label:before{border-radius:var(--gcds-radio-border-radius)}:host .gcds-radio gcds-label>label:before{background-color:var(--gcds-radio-default-background);border:var(--gcds-radio-input-border-width) solid;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-radio gcds-label>label:after{background-color:currentcolor;height:var(--gcds-radio-check-height-and-width);left:var(--gcds-radio-check-left);opacity:0;top:var(--gcds-radio-check-top);width:var(--gcds-radio-check-height-and-width)}:host .gcds-radio input:checked+gcds-label>label:after{opacity:1}}@layer disabled{:host .gcds-radio.gcds-radio--disabled{color:var(--gcds-radio-disabled-text)}:host .gcds-radio.gcds-radio--disabled gcds-label>label{--gcds-label-text:currentColor;cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label>label:after,:host .gcds-radio.gcds-radio--disabled gcds-label>label:before{cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label>label:before{background-color:var(--gcds-radio-disabled-background);border-color:var(--gcds-radio-disabled-border)}:host .gcds-radio.gcds-radio--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host gcds-error-message{margin:var(--gcds-radio-error-message-margin)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label>label:before{border-color:var(--gcds-radio-danger-border)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label>label:after{background-color:var(--gcds-radio-danger-border)}}@layer focus{:host .gcds-radio:focus-within input:focus+gcds-label>label:before{background:var(--gcds-radio-focus-background);box-shadow:var(--gcds-radio-focus-box-shadow);color:var(--gcds-radio-focus-color);outline:var(--gcds-radio-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-radio-input-border-width)}:host .gcds-radio:focus-within input:focus+gcds-label>label:after{box-shadow:inset 0 0 2rem var(--gcds-radio-focus-color)}}@layer a11y.highcontrast{@media (prefers-color-scheme:light){:host .gcds-radio gcds-label>label:after{background-color:buttonText}}@media (prefers-color-scheme:dark){:host .gcds-radio gcds-label>label:after{background-color:buttonText}}}";
const GcdsRadiosStyle0 = gcdsRadiosCss;

const GcdsRadios$1 = /*@__PURE__*/ proxyCustomElement(class GcdsRadios extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.internals = this.attachInternals();
        this._validator = defaultValidator;
        this.onBlur = () => {
            this.gcdsBlur.emit();
        };
        this.onBlurValidate = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.handleInput = (e, customEvent) => {
            const val = e.target && e.target.value;
            this.value = val;
            this.internals.setFormValue(val ? val : null, 'checked');
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
        this.options = undefined;
        this.name = undefined;
        this.legend = undefined;
        this.required = undefined;
        this.hint = undefined;
        this.errorMessage = undefined;
        this.disabled = undefined;
        this.value = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.hasError = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
        this.errors = [];
    }
    validateOptions() {
        let invalidObject = false;
        // Assign optionsArr from passed options string or array
        if (typeof this.options === 'string' && this.options.trim() !== '') {
            try {
                this.options = JSON.parse(this.options);
            }
            catch (e) {
                logError('gcds-radios', ['Invalid JSON string for options']);
                this.options = null;
            }
        }
        if (Array.isArray(this.options)) {
            this.optionsArr = this.options;
        }
        else {
            this.optionsArr = null;
        }
        // Validate options has type RadioObject
        if (this.optionsArr && this.optionsArr.length > 1) {
            invalidObject = this.optionsArr.some(radio => !isRadioObject(radio));
        }
        else {
            invalidObject = true;
        }
        // Assign value if passed options has a checked radio
        if (this.optionsArr && !this.value) {
            this.optionsArr.forEach(radio => {
                if (radio.checked === 'true' || radio.checked === true) {
                    this.value = radio.value;
                    this.internals.setFormValue(radio.value, 'checked');
                }
            });
        }
        // Log error if no or invalid optionsObject
        this.errors = handleErrors(this.errors, 'options', this.optionsArr, invalidObject);
    }
    validateName() {
        this.errors = handleErrors(this.errors, 'name', this.name);
    }
    validateLegend() {
        this.errors = handleErrors(this.errors, 'legend', this.legend);
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else {
            this.hasError = this.errorMessage ? true : false;
        }
    }
    validateValue() {
        if (this.optionsArr && this.value !== null) {
            let isValidValue = false;
            this.optionsArr.map(radio => {
                if (radio.value == this.value) {
                    isValidValue = true;
                }
            });
            // unset value if no radio button with value available
            if (!isValidValue) {
                this.value = null;
                this.internals.setFormValue(this.value);
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
        handleValidationResult(this.el, this._validator.validate(this.value), this.legend, this.gcdsError, this.gcdsValid, this.lang);
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
            this.internals.setFormValue(this.initialValue, 'checked');
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
    watchLang(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.lang = newValue;
        }
    }
    /*
     * Validate required properties
     */
    validateRequiredProps() {
        this.validateLegend();
        this.validateName();
        return isValid(this.errors, ['name', 'legend', 'options']);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.validateOptions();
        this.validateRequiredProps();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'radio');
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        this.initialValue = this.value ? this.value : null;
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-radios', this.errors);
        }
    }
    async componentDidUpdate() {
        // Validate props again if changed after render
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-radios', this.errors);
        }
    }
    render() {
        const { lang, name, legend, value, required, hint, errorMessage, disabled, hasError, inheritedAttributes, } = this;
        const fieldsetAttrs = {
            'tabindex': '-1',
            'aria-labelledby': 'radios-legend',
        };
        if (hint) {
            const hintID = this.hint ? `radios-hint ` : '';
            fieldsetAttrs['aria-labelledby'] =
                `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
        }
        if (this.validateRequiredProps()) {
            return (h(Host, { key: '4aea20f6f91195345d15cf43622cced56c1a5139', onBlur: () => this.onBlurValidate() }, h("fieldset", Object.assign({ key: 'b902ff2456ecc03b7d5bee81bdc555ce803b15b7', class: "gcds-radios__fieldset" }, fieldsetAttrs), h("legend", { key: '26dfcf3e7fa323f196e2b846ce17db9f12fe48f2', id: "radios-legend", class: "gcds-radios__legend" }, legend, required ? (h("span", { class: "legend__required" }, I18N[lang].required)) : null), hint ? (h("gcds-hint", { id: "radios-hint", "hint-id": "radios" }, hint)) : null, errorMessage ? (h("div", null, h("gcds-error-message", { id: "radios-error", messageId: "radios" }, errorMessage))) : null, this.optionsArr &&
                this.optionsArr.map(radio => {
                    const attrsInput = Object.assign({ name, disabled: disabled, required: required, value: radio.value, checked: radio.value === value }, inheritedAttributes);
                    if (radio.hint) {
                        const hintID = radio.hint ? `hint-${radio.id} ` : '';
                        attrsInput['aria-describedby'] = `${hintID}${attrsInput['aria-describedby']
                            ? `${attrsInput['aria-describedby']}`
                            : ''}`;
                    }
                    if (hasError) {
                        attrsInput['aria-invalid'] = 'true';
                        attrsInput['aria-description'] = errorMessage;
                    }
                    return (h("div", { class: `gcds-radio ${disabled ? 'gcds-radio--disabled' : ''} ${hasError ? 'gcds-radio--error' : ''}` }, h("input", Object.assign({ id: radio.id, type: "radio" }, attrsInput, { onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit() })), h("gcds-label", { label: radio.label, "label-for": radio.id, lang: lang, onClick: e => e.stopPropagation() }), radio.hint ? (h("gcds-hint", { "hint-id": radio.id }, radio.hint)) : null));
                }))));
        }
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "options": ["validateOptions"],
        "name": ["validateName"],
        "legend": ["validateLegend"],
        "errorMessage": ["validateErrorMessage"],
        "value": ["validateValue"],
        "validator": ["validateValidator"],
        "lang": ["watchLang"]
    }; }
    static get style() { return GcdsRadiosStyle0; }
}, [81, "gcds-radios", {
        "options": [1025],
        "name": [513],
        "legend": [513],
        "required": [516],
        "hint": [513],
        "errorMessage": [1025, "error-message"],
        "disabled": [1540],
        "value": [1537],
        "validator": [1040],
        "validateOn": [1025, "validate-on"],
        "hasError": [32],
        "inheritedAttributes": [32],
        "lang": [32],
        "errors": [32],
        "validate": [64]
    }, [[4, "submit", "submitListener"]], {
        "options": ["validateOptions"],
        "name": ["validateName"],
        "legend": ["validateLegend"],
        "errorMessage": ["validateErrorMessage"],
        "value": ["validateValue"],
        "validator": ["validateValidator"],
        "lang": ["watchLang"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-radios", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-radios":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsRadios$1);
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

const GcdsRadios = GcdsRadios$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsRadios, defineCustomElement };

//# sourceMappingURL=gcds-radios.js.map