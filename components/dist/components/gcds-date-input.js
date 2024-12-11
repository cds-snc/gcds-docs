import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as isValidDate, o as observerConfig, a as assignLanguage, l as logError } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$9 } from './gcds-error-message2.js';
import { d as defineCustomElement$8 } from './gcds-fieldset2.js';
import { d as defineCustomElement$7 } from './gcds-hint2.js';
import { d as defineCustomElement$6 } from './gcds-icon2.js';
import { d as defineCustomElement$5 } from './gcds-input2.js';
import { d as defineCustomElement$4 } from './gcds-label2.js';
import { d as defineCustomElement$3 } from './gcds-select2.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

const I18N = {
  en: {
    year: 'Year',
    month: 'Month',
    day: 'Day',
    selectmonth: 'Select a month',
    months: {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    },
    valueError: 'gcds-date-input:  Value attribute contains an invalid date format. Expected format: ',
    valueFormatfull: 'YYYY-MM-DD',
    valueFormatcompact: 'YYYY-MM'
  },
  fr: {
    year: 'Année',
    month: 'Mois',
    day: 'Jour',
    selectmonth: 'Sélectionnez un mois',
    months : {
      '01': 'janvier',
      '02': 'février',
      '03': 'mars',
      '04': 'avril',
      '05': 'mai',
      '06': 'juin',
      '07': 'juillet',
      '08': 'août',
      '09': 'septembre',
      '10': 'octobre',
      '11': 'novembre',
      '12': 'décembre',
    },
    valueError: 'gcds-date-input:  Value attribute contains an invalid date format. Expected format: ',
    valueFormatfull: 'YYYY-MM-DD',
    valueFormatcompact: 'YYYY-MM'
  },
};

const gcdsDateInputCss = "@layer reset, default, hint, error;@layer reset{:host{display:block}}@layer default{:host .gcds-date-input__fieldset{--gcds-fieldset-font-desktop:var(--gcds-date-input-fieldset-font-desktop);--gcds-fieldset-font-mobile:var(--gcds-date-input-fieldset-font-mobile);--gcds-fieldset-legend-margin:var(--gcds-date-input-fieldset-margin)}:host .gcds-date-input__day,:host .gcds-date-input__month,:host .gcds-date-input__year{display:inline-block;margin-inline-end:var(--gcds-date-input-margin);--gcds-label-font-desktop:var(--gcds-date-input-label-font-desktop);--gcds-label-font-mobile:var(--gcds-date-input-label-font-mobile )}}@layer hint{:host .gcds-date-input--hint{--gcds-fieldset-legend-margin:var(--gcds-date-input-fieldset-hint-margin)}}@layer error{:host .gcds-date-input--error{--gcds-fieldset-legend-margin:var(--gcds-date-input-fieldset-error-margin )}:host gcds-input.gcds-date-input--error::part(input),:host gcds-select.gcds-date-input--error::part(select){border-color:var(--gcds-date-input-danger-border)}}";
const GcdsDateInputStyle0 = gcdsDateInputCss;

const GcdsDateInput$1 = /*@__PURE__*/ proxyCustomElement(class GcdsDateInput extends HTMLElement {
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
        };
        /*
         * Handle input event to update state
         */
        this.handleInput = (e, type) => {
            const val = e.target && e.target.value;
            if (type === 'year') {
                this.yearValue = val;
            }
            else if (type === 'month') {
                this.monthValue = val;
            }
            else if (type === 'day') {
                this.dayValue = val;
            }
            this.setValue();
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
        };
        this.name = undefined;
        this.legend = undefined;
        this.format = undefined;
        this.value = undefined;
        this.required = false;
        this.hint = undefined;
        this.errorMessage = undefined;
        this.disabled = false;
        this.validator = undefined;
        this.validateOn = undefined;
        this.monthValue = '';
        this.dayValue = '';
        this.yearValue = '';
        this.hasError = {
            day: false,
            month: false,
            year: false,
        };
        this.errors = [];
        this.lang = undefined;
    }
    validateName() {
        if (!this.name) {
            this.errors.push('name');
        }
        else if (this.errors.includes('name')) {
            this.errors.splice(this.errors.indexOf('name'), 1);
        }
    }
    validateLegend() {
        if (!this.legend) {
            this.errors.push('legend');
        }
        else if (this.errors.includes('legend')) {
            this.errors.splice(this.errors.indexOf('legend'), 1);
        }
    }
    validateFormat() {
        if (!this.format || (this.format != 'full' && this.format != 'compact')) {
            this.errors.push('format');
        }
        else if (this.errors.includes('format')) {
            this.errors.splice(this.errors.indexOf('format'), 1);
        }
    }
    validateValue() {
        if (this.value && !isValidDate(this.value)) {
            this.errors.push('value');
            this.value = '';
            console.error(`${I18N['en'].valueError}${I18N['en'][`valueFormat${this.format}`]} | ${I18N['fr'].valueError}${I18N['fr'][`valueFormat${this.format}`]}`);
        }
        else if (this.errors.includes('value')) {
            this.errors.splice(this.errors.indexOf('value'), 1);
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
        const validationResult = this._validator.validate(this.format === 'full'
            ? `${this.yearValue}-${this.monthValue}-${this.dayValue}`
            : `${this.yearValue}-${this.monthValue}`);
        if (!validationResult.valid) {
            this.errorMessage = validationResult.reason[this.lang];
            this.hasError = Object.assign({}, validationResult.errors);
            this.gcdsError.emit({
                message: `${this.legend} - ${this.errorMessage}`,
                errors: validationResult.errors,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit();
            this.hasError = {
                day: false,
                month: false,
                year: false,
            };
        }
    }
    /*
     * Event listeners
     */
    async submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            for (const key in this.hasError) {
                if (this.hasError[key] && this.validateOn != 'other') {
                    e.preventDefault();
                }
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
    /**
     * Logic to combine all input values together based on format
     */
    setValue() {
        const { yearValue, dayValue, monthValue, format } = this;
        // All form elements have something entered
        if (yearValue && monthValue && dayValue && format == 'full') {
            // Is the combined value a valid date
            if (isValidDate(`${yearValue}-${monthValue}-${dayValue}`, format)) {
                this.value = `${yearValue}-${monthValue}-${dayValue}`;
                this.internals.setFormValue(this.value);
            }
            else {
                this.value = null;
                this.internals.setFormValue(null);
                return false;
            }
        }
        else if (yearValue && monthValue && format == 'compact') {
            // Is the combined value a valid date
            if (isValidDate(`${yearValue}-${monthValue}`, format)) {
                this.value = `${yearValue}-${monthValue}`;
                this.internals.setFormValue(this.value);
            }
            else {
                this.value = null;
                this.internals.setFormValue(null);
                return false;
            }
        }
        else {
            this.value = null;
            this.internals.setFormValue(null);
            return false;
        }
        return true;
    }
    /**
     * Split value into parts depending on format
     */
    splitFormValue() {
        if (this.value && isValidDate(this.value, this.format)) {
            if (this.format == 'compact') {
                let splitValue = this.value.split('-');
                this.yearValue = splitValue[0];
                this.monthValue = splitValue[1];
            }
            else {
                let splitValue = this.value.split('-');
                this.yearValue = splitValue[0];
                this.monthValue = splitValue[1];
                this.dayValue = splitValue[2];
            }
        }
    }
    /**
     * Format day input value to add 0 to single digit values
     */
    formatDay(e) {
        if (!isNaN(e.target.value) && e.target.value.length === 1) {
            this.dayValue = '0' + e.target.value;
        }
    }
    validateRequiredProps() {
        this.validateName();
        this.validateLegend();
        this.validateFormat();
        if (this.errors.includes('name') ||
            this.errors.includes('legend') ||
            this.errors.includes('format')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'date-input');
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-date-input', this.errors);
        }
        this.validateValue();
        if (this.value && isValidDate(this.value)) {
            this.splitFormValue();
            this.setValue();
            this.initialValue = this.value;
        }
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { legend, name, format, required, hint, errorMessage, disabled, lang, hasError, } = this;
        let requiredAttr = {};
        if (required) {
            requiredAttr['aria-required'] = 'true';
        }
        // Array of months 01 - 12
        const options = Array.from({ length: 12 }, (_, i) => i + 1 < 10 ? `0${i + 1}` : `${i + 1}`);
        const month = (h("gcds-select", Object.assign({ key: 'dce99a8ec0ca1035795bb1981b45c2d6ddcb1b97', label: I18N[lang].month, selectId: "month", name: "month", defaultValue: I18N[lang].selectmonth, disabled: disabled, onInput: e => this.handleInput(e, 'month'), onChange: e => this.handleInput(e, 'month'), value: this.monthValue, class: `gcds-date-input__month ${hasError['month'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['month'].toString(), "aria-description": hasError['month'] && errorMessage }), options.map(option => (h("option", { key: option, value: option }, I18N[lang]['months'][option])))));
        const year = (h("gcds-input", Object.assign({ key: '79adb2319306d6bcd4959d113945902bbfc40728', name: "year", label: I18N[lang].year, inputId: "year", type: "number", size: 4, disabled: disabled, value: this.yearValue, onInput: e => this.handleInput(e, 'year'), onChange: e => this.handleInput(e, 'year'), class: `gcds-date-input__year ${hasError['year'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['year'].toString(), "aria-description": hasError['year'] && errorMessage })));
        const day = (h("gcds-input", Object.assign({ key: 'd9f341a356c4e4d7dc5cc3e38cdac2931dd98a87', name: "day", label: I18N[lang].day, inputId: "day", type: "number", size: 2, disabled: disabled, value: this.dayValue, onInput: e => this.handleInput(e, 'day'), onChange: e => {
                this.handleInput(e, 'day');
                this.formatDay(e);
            }, class: `gcds-date-input__day ${hasError['day'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['day'].toString(), "aria-description": hasError['day'] && errorMessage })));
        return (h(Host, { key: '00e97ecb52e332d43e6917b72005cbab39254c25', name: name, onBlur: () => this.onBlur() }, this.validateRequiredProps() && (h("gcds-fieldset", { key: '9909941d6ab3bde3b630dfcbfbcf6a475b44be2c', legend: legend, fieldsetId: "date-input", hint: hint, errorMessage: errorMessage, required: required, class: `gcds-date-input__fieldset${hint ? ' gcds-date-input--hint' : ''}${errorMessage ? ' gcds-date-input--error' : ''}`, lang: lang, "data-date": "true" }, format == 'compact'
            ? [month, year]
            : lang == 'en'
                ? [month, day, year]
                : [day, month, year]))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "name": ["validateName"],
        "legend": ["validateLegend"],
        "format": ["validateFormat"],
        "value": ["validateValue"],
        "validator": ["validateValidator"]
    }; }
    static get style() { return GcdsDateInputStyle0; }
}, [81, "gcds-date-input", {
        "name": [1],
        "legend": [1],
        "format": [1],
        "value": [1025],
        "required": [4],
        "hint": [1],
        "errorMessage": [1025, "error-message"],
        "disabled": [1028],
        "validator": [1040],
        "validateOn": [1025, "validate-on"],
        "monthValue": [32],
        "dayValue": [32],
        "yearValue": [32],
        "hasError": [32],
        "errors": [32],
        "lang": [32],
        "validate": [64]
    }, [[4, "submit", "submitListener"]], {
        "name": ["validateName"],
        "legend": ["validateLegend"],
        "format": ["validateFormat"],
        "value": ["validateValue"],
        "validator": ["validateValidator"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-date-input", "gcds-error-message", "gcds-fieldset", "gcds-hint", "gcds-icon", "gcds-input", "gcds-label", "gcds-select", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-date-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsDateInput$1);
            }
            break;
        case "gcds-error-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "gcds-fieldset":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "gcds-hint":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "gcds-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "gcds-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-select":
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

const GcdsDateInput = GcdsDateInput$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsDateInput, defineCustomElement };

//# sourceMappingURL=gcds-date-input.js.map