import { h, proxyCustomElement, HTMLElement, createEvent, Host } from '@stencil/core/internal/client';
import { h as handleErrors, l as logError, b as handleValidationResult, c as isValid, a as assignLanguage, i as inheritAttributes, e as emitEvent } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$6 } from './gcds-error-message2.js';
import { d as defineCustomElement$5 } from './gcds-hint2.js';
import { d as defineCustomElement$4 } from './gcds-icon2.js';
import { d as defineCustomElement$3 } from './gcds-label2.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

/* Check if passed object matches required CheckboxObject type
 * @param obj - object to check
 */
function isCheckboxObject(obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    const validKeys = ['id', 'label', 'value', 'hint', 'checked', 'required'];
    const objKeys = Object.keys(obj);
    // Check if all properties match the expected type
    const hasValidTypes = typeof obj.id === 'string' &&
        typeof obj.label === 'string' &&
        (obj.value === undefined || typeof obj.value === 'string') &&
        (obj.hint === undefined || typeof obj.hint === 'string') &&
        (obj.checked === undefined || typeof obj.checked === 'boolean');
    // Ensure no extra properties exist
    const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));
    return hasValidTypes && hasOnlyValidKeys;
}
/* Loop through the optionsArr and check if each option/checkbox is formatted correctly
 * @param optionsArr - array of objects to be checked
 */
function validateOptionsArray(optionsArr) {
    let invalidOptionsArr = false;
    if (optionsArr && optionsArr.length >= 1) {
        invalidOptionsArr = optionsArr.some(checkbox => !isCheckboxObject(checkbox));
    }
    else if (optionsArr && optionsArr.length == 0) {
        invalidOptionsArr = true;
    }
    return invalidOptionsArr;
}
/* Loop through manually assigned value to check if it is available in rendered checkboxes
 * @param optionsArr - array of checkbox objects to compare to
 * @param element - the checkboxes element
 */
function cleanUpValues(optionsArr, element) {
    const availableValues = [];
    optionsArr.forEach(checkbox => {
        availableValues.push(checkbox.value ? checkbox.value : 'on');
        if ((checkbox.checked == 'true' || checkbox.checked === true) &&
            !element.value.includes(checkbox.value || 'on')) {
            element.value = [
                ...element.value,
                checkbox.value ? checkbox.value : 'on',
            ];
        }
    });
    // Remove any values that are not available in the inputs
    element.value
        .filter(value => !availableValues.includes(value))
        .forEach(value => {
        element.value = element.value.filter(item => item !== value);
    });
}
const renderCheckbox = (checkbox, element, emitEvent, handleInput) => {
    const { name, disabled, hasError, errorMessage, gcdsFocus, gcdsInput, gcdsChange, gcdsClick, gcdsBlur, required, hint, isGroup, lang, value, onBlurValidate, } = element;
    const attrsInput = {
        name: name,
        id: checkbox.id,
        disabled: disabled,
        required: checkbox.required,
        value: checkbox.value,
    };
    const labelAttrs = {
        'label': checkbox.label,
        'label-for': checkbox.id,
        lang,
    };
    if (!isGroup && required) {
        labelAttrs['required'] = required;
        attrsInput['required'] = required;
    }
    if (checkbox.hint) {
        const hintID = `hint-${checkbox.id}`;
        attrsInput['aria-describedby'] = `${hintID}${attrsInput['aria-describedby'] ? `${attrsInput['aria-describedby']}` : ''}`;
    }
    if (value.includes(checkbox.value)) {
        attrsInput['checked'] = true;
    }
    if (hasError) {
        attrsInput['aria-invalid'] = 'true';
        attrsInput['aria-description'] = errorMessage;
    }
    return (h("div", { class: `gcds-checkbox ${disabled ? 'gcds-checkbox--disabled' : ''} ${hasError ? 'gcds-checkbox--error' : ''}` },
        h("input", Object.assign({ type: "checkbox" }, attrsInput, { onBlur: isGroup ? () => gcdsBlur.emit() : onBlurValidate, onFocus: () => gcdsFocus.emit(), onChange: () => gcdsChange.emit(), onInput: e => handleInput(e, gcdsInput), onClick: e => !disabled ? emitEvent(e, gcdsClick) : e.stopImmediatePropagation() })),
        h("gcds-label", Object.assign({}, labelAttrs, { onClick: e => e.stopPropagation() })),
        checkbox.hint || (!isGroup && hint) ? (h("gcds-hint", { "hint-id": checkbox.id }, !isGroup && hint ? hint : checkbox.hint)) : null,
        !isGroup && errorMessage ? (h("gcds-error-message", { messageId: checkbox.id }, errorMessage)) : null));
};

const gcdsCheckboxesCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-checkboxes__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-checkboxes__fieldset legend{padding:0}:host .gcds-checkbox{padding:0}:host .gcds-checkbox gcds-label>label:after,:host .gcds-checkbox gcds-label>label:before{box-sizing:border-box;content:\"\";cursor:pointer;position:absolute}}@layer default{:host .gcds-checkboxes__fieldset{margin:var(--gcds-checkbox-fieldset-margin)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend{font:var(--gcds-checkbox-legend-font-desktop);margin:var(--gcds-checkbox-legend-margin)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend .legend__required{font:var(--gcds-checkbox-legend-required-font-desktop)}@media only screen and (width < 48em){:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend{font:var(--gcds-checkbox-legend-font-mobile)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend .legend__required{font:var(--gcds-checkbox-legend-required-font-mobile)}}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend:not(:has(+gcds-hint)){margin:var(--gcds-checkbox-legend-hint-margin)}:host .gcds-checkbox{color:var(--gcds-checkbox-default-text);font:var(--gcds-checkbox-font);margin:var(--gcds-checkbox-margin)!important;max-width:var(--gcds-checkbox-max-width);min-height:calc(var(--gcds-checkbox-input-height-and-width) - var(--gcds-checkbox-padding));padding:var(--gcds-checkbox-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-checkbox :is(gcds-label,gcds-hint,gcds-error-message){padding:var(--gcds-checkbox-label-padding)!important}:host .gcds-checkbox gcds-hint::part(hint){margin:0}:host .gcds-checkbox gcds-label:after,:host .gcds-checkbox gcds-label:before,:host .gcds-checkbox input{position:absolute}:host .gcds-checkbox gcds-label>label:before,:host .gcds-checkbox input{height:var(--gcds-checkbox-input-height-and-width);left:0;top:0;width:var(--gcds-checkbox-input-height-and-width)}:host .gcds-checkbox input{opacity:0}:host .gcds-checkbox gcds-label>label{width:fit-content;--gcds-label-font-desktop:var(--gcds-checkbox-label-font-desktop);--gcds-label-font-mobile:var(--gcds-checkbox-label-font-mobile)}:host .gcds-checkbox gcds-label>label:before{background-color:var(--gcds-checkbox-default-background);border:var(--gcds-checkbox-input-border-width) solid;border-radius:var(--gcds-checkbox-input-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-checkbox gcds-label>label:after{border:var(--gcds-checkbox-check-border-width) solid;border-block-start:0!important;border-inline-start:0!important;height:var(--gcds-checkbox-check-height);left:var(--gcds-checkbox-check-left);opacity:0;top:var(--gcds-checkbox-check-top);transform:rotate(40deg);width:var(--gcds-checkbox-check-width)}:host .gcds-checkbox input:checked+gcds-label>label:after{opacity:1}}@layer disabled{:host .gcds-checkbox.gcds-checkbox--disabled{color:var(--gcds-checkbox-disabled-text)}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label{--gcds-label-text:currentColor;cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:after,:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:before{cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:before{background-color:var(--gcds-checkbox-disabled-background);border-color:currentcolor}:host .gcds-checkbox.gcds-checkbox--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label>label:before{border-color:var(--gcds-checkbox-danger-border)}:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label>label:after{color:var(--gcds-checkbox-danger-border)}}@layer focus{:host .gcds-checkbox:focus-within input:focus+gcds-label>label:before{background:var(--gcds-checkbox-focus-background);box-shadow:var(--gcds-checkbox-focus-box-shadow);color:var(--gcds-checkbox-focus-color);outline:var(--gcds-checkbox-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-checkbox-input-border-width)}:host .gcds-checkbox:focus-within input:focus+gcds-label>label:after{color:var(--gcds-checkbox-focus-color)}}";
const GcdsCheckboxesStyle0 = gcdsCheckboxesCss;

const GcdsCheckboxes$1 = /*@__PURE__*/ proxyCustomElement(class GcdsCheckboxes extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        this.internals = this.attachInternals();
        this.isGroup = false;
        this._validator = defaultValidator;
        this.onBlurValidate = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.handleInput = (e, customEvent) => {
            if (e.target.checked) {
                this.value = [...this.value, e.target.value];
            }
            else {
                // Modify options to prevent adding prechecked values when unchecking option
                this.options = (typeof this.options === 'string'
                    ? JSON.parse(this.options)
                    : this.options).map(check => check.value === e.target.value ? Object.assign(Object.assign({}, check), { checked: false }) : check);
                // Remove value from value array
                this.value = this.value.filter(item => item !== e.target.value);
            }
            if (this.value.length > 0) {
                this.internals.setFormValue(this.value.toString());
            }
            else {
                this.internals.setFormValue(null);
            }
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
        this.name = undefined;
        this.legend = undefined;
        this.options = undefined;
        this.required = undefined;
        this.disabled = undefined;
        this.value = [];
        this.errorMessage = undefined;
        this.hint = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.inheritedAttributes = {};
        this.hasError = undefined;
        this.lang = undefined;
        this.errors = [];
    }
    validateName() {
        this.errors = handleErrors(this.errors, 'name', this.name);
    }
    validateLegend() {
        if (this.isGroup) {
            this.errors = handleErrors(this.errors, 'legend', this.legend);
        }
    }
    validateOptions() {
        let invalidOptions = false;
        // Assign optionsArr based on valid options property
        invalidOptions = this.assignOptionsArray();
        // Check if each checkbox object is formatted correctly
        if (this.optionsArr && !invalidOptions) {
            invalidOptions = validateOptionsArray(this.optionsArr);
            // Assign if isGroup logic more than one checkbox object
            if (this.optionsArr && this.optionsArr.length > 1) {
                this.isGroup = true;
            }
        }
        // Log error if invalidOptions
        this.errors = handleErrors(this.errors, 'options', this.optionsArr, invalidOptions);
    }
    validateDisabledCheckbox() {
        if (this.required) {
            this.disabled = false;
        }
    }
    validateValue(newValue) {
        // Convert string to array
        if (!Array.isArray(newValue)) {
            try {
                this.value = JSON.parse(newValue);
            }
            catch (e) {
                logError('gcds-checkboxes', ['Invalid array for value']);
                this.value = [];
            }
        }
        else if (this.optionsArr) {
            // Remove any manually set values that do not match available inputs
            cleanUpValues(this.optionsArr, this.el);
            // Set form value only when a value is assigned
            if (this.value.length > 0) {
                this.internals.setFormValue(this.value.toString());
            }
        }
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else {
            this.hasError = this.errorMessage ? !this.hasError : false;
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
        handleValidationResult(this.el, this._validator.validate(this.value), this.isGroup ? this.legend : this.optionsArr[0].label, this.gcdsError, this.gcdsValid, this.lang);
    }
    /*
     * FormData listener to append values like native checkboxes
     */
    formdataListener(e) {
        const data = e.formData;
        this.value.forEach(value => {
            // Set formdata for first entry to remove array
            if (this.value.indexOf(value) === 0) {
                data.set(this.name, value);
            }
            else {
                data.append(this.name, value);
            }
        });
    }
    // Submit validation handler
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
        if (this.value != this.initialState) {
            this.value = this.initialState;
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = [...state.split(',')];
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
        this.validateOptions();
        this.validateValue(this.value);
        this.validateLegend();
        this.validateName();
        return isValid(this.errors, ['name', 'legend', 'options']);
    }
    async componentWillLoad() {
        var _a;
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        const valid = this.validateRequiredProps();
        this.validateDisabledCheckbox();
        this.validateHasError();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, this.isGroup ? 'checkboxGroup' : 'checkboxSingle');
        // Assign checkbox hint to component hint if not group
        if (!this.isGroup &&
            this.optionsArr &&
            ((_a = this.optionsArr[0]) === null || _a === void 0 ? void 0 : _a.hint) &&
            !this.hint) {
            this.hint = this.optionsArr[0].hint;
        }
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        if (!valid) {
            logError('gcds-checkboxes', this.errors);
        }
        this.initialState = this.value;
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    async componentDidUpdate() {
        // Validate props again if changed after render
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-checkboxes', this.errors);
        }
    }
    /*
     * Validate passed options and assign optionsArr if proper formatting
     */
    assignOptionsArray() {
        let invalidOptions = false;
        if (Array.isArray(this.options)) {
            this.optionsArr = this.options;
        }
        else if (typeof this.options === 'string' && this.options.trim() !== '') {
            try {
                // Assign to random variable to not restart options validation
                const optionsCheck = JSON.parse(this.options);
                if (Array.isArray(optionsCheck)) {
                    this.optionsArr = optionsCheck;
                }
                else {
                    this.optionsArr = null;
                    invalidOptions = true;
                }
            }
            catch (e) {
                logError('gcds-checkboxes', ['Invalid JSON string for options']);
                this.options = null;
                invalidOptions = true;
            }
        }
        return invalidOptions;
    }
    render() {
        const { legend, required, hint, errorMessage } = this;
        const fieldsetAttrs = {
            'tabindex': '-1',
            'aria-labelledby': 'checkboxes-legend',
        };
        if (hint) {
            const hintID = this.hint ? `checkboxes-hint ` : '';
            fieldsetAttrs['aria-labelledby'] =
                `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
        }
        if (this.validateRequiredProps()) {
            return (h(Host, { key: '5f5afb1e5e995078fd2f5ce9d003af8c8c9f236f', onBlur: () => this.isGroup && this.onBlurValidate() }, this.isGroup ? (h("fieldset", Object.assign({ class: "gcds-checkboxes__fieldset" }, fieldsetAttrs), h("legend", { id: "checkboxes-legend", class: "gcds-checkboxes__legend" }, legend, required ? (h("span", { class: "legend__required" }, " (required)")) : null), hint ? (h("gcds-hint", { id: "checkboxes-hint", "hint-id": "checkboxes" }, hint)) : null, errorMessage ? (h("div", null, h("gcds-error-message", { id: "checkboxes-error", messageId: "checkboxes" }, errorMessage))) : null, this.optionsArr &&
                this.optionsArr.map(checkbox => {
                    return renderCheckbox(checkbox, this, emitEvent, this.handleInput);
                }))) : (this.optionsArr &&
                this.optionsArr.length > 0 &&
                renderCheckbox(this.optionsArr[0], this, emitEvent, this.handleInput))));
        }
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "name": ["validateName"],
        "legend": ["validateLegend"],
        "options": ["validateOptions"],
        "disabled": ["validateDisabledCheckbox"],
        "value": ["validateValue"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"],
        "lang": ["watchLang"]
    }; }
    static get style() { return GcdsCheckboxesStyle0; }
}, [81, "gcds-checkboxes", {
        "name": [513],
        "legend": [513],
        "options": [1025],
        "required": [516],
        "disabled": [1540],
        "value": [1537],
        "errorMessage": [1537, "error-message"],
        "hint": [1537],
        "validator": [1040],
        "validateOn": [1025, "validate-on"],
        "inheritedAttributes": [32],
        "hasError": [32],
        "lang": [32],
        "errors": [32],
        "validate": [64]
    }, [[4, "formdata", "formdataListener"], [4, "submit", "submitListener"]], {
        "name": ["validateName"],
        "legend": ["validateLegend"],
        "options": ["validateOptions"],
        "disabled": ["validateDisabledCheckbox"],
        "value": ["validateValue"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"],
        "lang": ["watchLang"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-checkboxes", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-checkboxes":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsCheckboxes$1);
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

const GcdsCheckboxes = GcdsCheckboxes$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsCheckboxes, defineCustomElement };

//# sourceMappingURL=gcds-checkboxes.js.map