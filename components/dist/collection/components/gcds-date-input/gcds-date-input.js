import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, isValidDate, logError, handleValidationResult, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
import i18n from "./i18n/i18n";
import { getDateInputError } from "../../validators/input-validators/input-validators";
/**
 * A date input is a space to enter a known date.
 */
export class GcdsDateInput {
    constructor() {
        // Array to store which native HTML errors are happening on the input
        this.htmlValidationErrors = [];
        this._validator = defaultValidator;
        /**
         * Specifies if a form field is required or not.
         */
        this.required = false;
        /**
         * Specifies if the date input is disabled or not.
         */
        this.disabled = false;
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * States
         */
        /**
         * State to track individual month value
         */
        this.monthValue = '';
        /**
         * State to track individual month value
         */
        this.dayValue = '';
        /**
         * State to track individual month value
         */
        this.yearValue = '';
        /**
         * Specifies if the date input is invalid.
         */
        this.hasError = {
            day: false,
            month: false,
            year: false,
        };
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
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
    watchValue() {
        if (this.value) {
            this.splitFormValue();
            this.internals.setFormValue(this.value);
        }
        else {
            this.yearValue = '';
            this.monthValue = '';
            this.dayValue = '';
            this.internals.setFormValue(null);
        }
        this.updateValidity();
    }
    /**
     * Read-only property of the date-input, returns a ValidityState object that represents the validity states this element is in.
     */
    get validity() {
        return this.internals.validity;
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
    }
    /**
     * Call any active validators
     */
    async validate() {
        var _a, _b, _c, _d;
        this.hasError = handleValidationResult(this.el, this._validator.validate(this.format === 'full'
            ? `${this.yearValue}-${this.monthValue}-${this.dayValue}`
            : `${this.yearValue}-${this.monthValue}`), this.legend, this.gcdsError, this.gcdsValid, this.lang, { day: false, month: false, year: false });
        // Don't use the valueMissing and badInput errors here since they are handled by the validator above
        if (!this.internals.checkValidity() && !((_a = this.internals.validity) === null || _a === void 0 ? void 0 : _a.valueMissing) && !((_b = this.internals.validity) === null || _b === void 0 ? void 0 : _b.badInput)) {
            this.errorMessage = (_c = this.htmlValidationErrors[0]) === null || _c === void 0 ? void 0 : _c.errorMessage;
            this.hasError = Object.assign(Object.assign({}, this.hasError), (_d = this.htmlValidationErrors[0]) === null || _d === void 0 ? void 0 : _d.hasError);
        }
    }
    /**
     * Check the validity of gcds-date-input
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-date-input
     */
    async getValidationMessage() {
        return this.internals.validationMessage;
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
     * Combine validity states of internal form elements and validate
     * Returns combined ValidityState, array of elements with errors and error message
     */
    checkAndValidateValidity() {
        var _a, _b, _c, _d, _e, _f;
        // Order elements based on format and language
        const elements = [this.monthSelect, this.yearInput];
        if (this.format === 'full') {
            this.lang === 'en' ? elements.splice(1, 0, this.dayInput) : elements.unshift(this.dayInput);
        }
        this.htmlValidationErrors = [];
        let valid = true;
        let valueMissing = false;
        let badInput = false;
        let rangeUnderflow = false;
        let rangeOverflow = false;
        let formError = [];
        let errorMessage = null;
        // Check if required or some value has been entered
        if (this.required || this.value != null) {
            elements.forEach(el => {
                // valueMissing validation
                if (el.value === '' || el.value == null) {
                    valueMissing = true;
                    valid = false;
                    formError.push(el);
                }
            });
            errorMessage = getDateInputError({
                day: (_a = this.dayInput) === null || _a === void 0 ? void 0 : _a.value,
                month: (_b = this.monthSelect) === null || _b === void 0 ? void 0 : _b.value,
                year: (_c = this.yearInput) === null || _c === void 0 ? void 0 : _c.value
            }, this.format).reason[this.lang];
        }
        // Check if any field has bad input
        if (this.required && !valueMissing) {
            const badInputError = getDateInputError({
                day: (_d = this.dayInput) === null || _d === void 0 ? void 0 : _d.value,
                month: (_e = this.monthSelect) === null || _e === void 0 ? void 0 : _e.value,
                year: (_f = this.yearInput) === null || _f === void 0 ? void 0 : _f.value
            }, this.format);
            if (badInputError.reason.en != '') {
                badInput = true;
                errorMessage = badInputError.reason[this.lang];
                formError = elements;
                this.htmlValidationErrors.push({
                    error: 'badInput',
                    hasError: badInputError.errors,
                    errorMessage
                });
            }
        }
        // Only check min if all values are present and valid
        if (this.value != null && this.min && !valueMissing && !badInput) {
            const setDate = new Date(this.value);
            const minDate = new Date(this.min);
            if (setDate < minDate) {
                valid = false;
                rangeUnderflow = true;
                formError = elements;
                errorMessage = i18n[this.lang].rangeUnderflow.replace('{{min}}', this.min);
                this.htmlValidationErrors.push({
                    error: 'rangeUnderflow',
                    hasError: { day: true, month: true, year: true },
                    errorMessage
                });
            }
        }
        // Only check max if all values are present, valid and no min error
        if (this.value != null && this.max && !valueMissing && !badInput && !rangeUnderflow) {
            const setDate = new Date(this.value);
            const maxDate = new Date(this.max);
            if (setDate > maxDate) {
                valid = false;
                rangeOverflow = true;
                errorMessage = i18n[this.lang].rangeOverflow.replace('{{max}}', this.max);
                this.htmlValidationErrors.push({
                    error: 'rangeOverflow',
                    hasError: { day: true, month: true, year: true },
                    errorMessage
                });
                formError = elements;
            }
        }
        const validity = {
            valueMissing,
            typeMismatch: false,
            patternMismatch: false,
            tooLong: false,
            tooShort: false,
            rangeUnderflow,
            rangeOverflow,
            stepMismatch: false,
            badInput,
            customError: false,
            valid,
        };
        return {
            validity,
            formError,
            errorMessage
        };
    }
    /**
     * Update gcds-date-input's validity using internal form elements
     */
    updateValidity() {
        if ((this.format === 'full' && (!this.yearInput || !this.monthSelect || !this.dayInput)) || (this.format === 'compact' && (!this.yearInput || !this.monthSelect)))
            return;
        const { validity, formError, errorMessage } = this.checkAndValidateValidity();
        let validationMessage = null;
        if ((validity === null || validity === void 0 ? void 0 : validity.valueMissing) || (validity === null || validity === void 0 ? void 0 : validity.badInput) || (validity === null || validity === void 0 ? void 0 : validity.rangeUnderflow) || (validity === null || validity === void 0 ? void 0 : validity.rangeOverflow)) {
            validationMessage = errorMessage;
        }
        this.internals.setValidity(validity, validationMessage, formError[0]);
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
        const { yearValue, monthValue, format } = this;
        let { dayValue } = this;
        // Logic to make sure the day input is registered correctly
        if (dayValue && dayValue.length === 1 && dayValue != '0') {
            dayValue = '0' + dayValue;
            this.dayValue = dayValue;
        }
        else if (dayValue && dayValue.length == 3 && dayValue[0] === '0') {
            dayValue = dayValue.substring(1);
            this.dayValue = dayValue;
        }
        if (format === 'full') {
            this.value = `${yearValue}-${monthValue}-${dayValue}`;
        }
        else if (format === 'compact') {
            this.value = `${yearValue}-${monthValue}`;
        }
        this.internals.setFormValue(this.value);
        this.updateValidity();
        return true;
    }
    /**
     * Split value into parts depending on format
     */
    splitFormValue() {
        if (this.format == 'compact') {
            const splitValue = this.value.split('-');
            this.yearValue = splitValue[0];
            this.monthValue = splitValue[1];
        }
        else {
            const splitValue = this.value.split('-');
            this.yearValue = splitValue[0];
            this.monthValue = splitValue[1];
            this.dayValue = splitValue[2];
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
        // Assign required validator if needed
        requiredValidator(this.el, 'date-input');
        this.validateValidator();
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-date-input', this.errors);
        }
        this.watchValue();
        if (this.value && isValidDate(this.value)) {
            this.splitFormValue();
            this.setValue();
            this.initialValue = this.value;
        }
    }
    async componentDidLoad() {
        this.updateValidity();
        // Logic to enable autofocus
        if (this.autofocus) {
            requestAnimationFrame(() => {
                var _a;
                (_a = this.fieldset) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
    }
    render() {
        const { legend, name, format, required, hint, errorMessage, disabled, lang, hasError, form, } = this;
        const requiredAttr = {};
        if (required) {
            requiredAttr['aria-required'] = 'true';
        }
        const fieldsetAttrs = {
            'tabindex': '-1',
            'aria-labelledby': 'date-input-legend',
        };
        if (hint) {
            const hintID = this.hint ? `date-input-hint ` : '';
            fieldsetAttrs['aria-labelledby'] =
                `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
        }
        // Array of months 01 - 12
        const options = Array.from({ length: 12 }, (_, i) => i + 1 < 10 ? `0${i + 1}` : `${i + 1}`);
        const month = (h("gcds-select", Object.assign({ key: '3825d2fc422c6291c0c4ec02ba160ce18a8f885d', label: i18n[lang].month, selectId: "month", name: "month", defaultValue: i18n[lang].selectmonth, disabled: disabled, onInput: e => this.handleInput(e, 'month'), onChange: e => this.handleInput(e, 'month'), value: this.monthValue, class: `gcds-date-input__month ${hasError['month'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['month'].toString(), "aria-description": hasError['month'] && errorMessage, form: form, ref: el => (this.monthSelect = el) }), options.map(option => (h("option", { key: option, value: option }, i18n[lang]['months'][option])))));
        const year = (h("gcds-input", Object.assign({ key: '1e6d8f1f6fb1b3199aadfa1f7ad4dcd48f52f8c0', name: "year", label: i18n[lang].year, inputId: "year", type: "number", inputmode: "numeric", size: 4, disabled: disabled, value: this.yearValue, onInput: e => this.handleInput(e, 'year'), onChange: e => this.handleInput(e, 'year'), class: `gcds-date-input__year ${hasError['year'] ? 'gcds-date-input--error' : ''}`, "validate-on": 'other' }, requiredAttr, { "aria-invalid": hasError['year'].toString(), "aria-description": hasError['year'] && errorMessage, form: form, ref: el => (this.yearInput = el) })));
        const day = (h("gcds-input", Object.assign({ key: '727e8f60daec7e1b873aa8f27a10d943e1f98d34', name: "day", label: i18n[lang].day, inputId: "day", type: "number", inputmode: "numeric", size: 2, disabled: disabled, value: this.dayValue, onInput: e => this.handleInput(e, 'day'), onChange: e => this.handleInput(e, 'day'), "validate-on": 'other', class: `gcds-date-input__day ${hasError['day'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['day'].toString(), "aria-description": hasError['day'] && errorMessage, form: form, ref: el => (this.dayInput = el) })));
        return (h(Host, { key: '4c09f8426752a32086163716b8fc81abccb9e539', name: name, onBlur: () => this.onBlur() }, this.validateRequiredProps() && (h("fieldset", Object.assign({ key: '30d06040710f4c8008e2fbf58965ac7366237ab9', class: "gcds-date-input__fieldset" }, fieldsetAttrs, { ref: el => (this.fieldset = el) }), h("legend", { key: '457b053792630a37e04b5a37156fa91d6c292bfe', id: "date-input-legend" }, legend, required ? (h("span", { class: "legend__required" }, i18n[lang].required)) : null), hint ? (h("gcds-hint", { id: "date-input-hint", "hint-id": "date-input" }, hint)) : null, errorMessage ? (h("div", null, h("gcds-error-message", { id: "date-input-error", messageId: "date-input" }, errorMessage))) : null, format == 'compact'
            ? [month, year]
            : lang == 'en'
                ? [month, day, year]
                : [day, month, year]))));
    }
    static get is() { return "gcds-date-input"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-date-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-date-input.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Name attribute for the date input."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "legend": {
                "type": "string",
                "attribute": "legend",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Fieldset legend"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "format": {
                "type": "string",
                "attribute": "format",
                "mutable": false,
                "complexType": {
                    "original": "'full' | 'compact'",
                    "resolved": "\"compact\" | \"full\"",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set this property to full to show month, day, and year form elements. Set it to compact to show only the month and year form elements."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Combined date value from the two/three form elements. Format: YYYY-MM-DD or YYYY-MM"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies if a form field is required or not."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hint": {
                "type": "string",
                "attribute": "hint",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Hint displayed below the legend and above form fields."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "errorMessage": {
                "type": "string",
                "attribute": "error-message",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Error message displayed below the legend and above form fields."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies if the date input is disabled or not."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "autofocus": {
                "type": "boolean",
                "attribute": "autofocus",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the date-input will be focused on component render"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "max": {
                "type": "string",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The maximum date that the date-input field can accept.\nFormat: YYYY-MM-DD or YYYY-MM"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "min": {
                "type": "string",
                "attribute": "min",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The minimum date that the date-input field can accept.\nFormat: YYYY-MM-DD or YYYY-MM"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "form": {
                "type": "string",
                "attribute": "form",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The ID of the form that the date-input field belongs to."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "validity": {
                "type": "unknown",
                "attribute": "validity",
                "mutable": false,
                "complexType": {
                    "original": "ValidityState",
                    "resolved": "ValidityState",
                    "references": {
                        "ValidityState": {
                            "location": "global",
                            "id": "global::ValidityState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Read-only property of the date-input, returns a ValidityState object that represents the validity states this element is in."
                },
                "getter": true,
                "setter": false
            },
            "validator": {
                "type": "unknown",
                "attribute": "validator",
                "mutable": true,
                "complexType": {
                    "original": "Array<\n    string | ValidatorEntry | Validator<string>\n  >",
                    "resolved": "(string | ValidatorEntry | Validator<string>)[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "ValidatorEntry": {
                            "location": "import",
                            "path": "../../validators",
                            "id": "src/validators/index.ts::ValidatorEntry"
                        },
                        "Validator": {
                            "location": "import",
                            "path": "../../validators",
                            "id": "src/validators/index.ts::Validator"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of validators"
                },
                "getter": false,
                "setter": false
            },
            "validateOn": {
                "type": "string",
                "attribute": "validate-on",
                "mutable": true,
                "complexType": {
                    "original": "'blur' | 'submit' | 'other'",
                    "resolved": "\"blur\" | \"other\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set event to call validator"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'blur'"
            }
        };
    }
    static get states() {
        return {
            "monthValue": {},
            "dayValue": {},
            "yearValue": {},
            "hasError": {},
            "errors": {},
            "lang": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsFocus",
                "name": "gcdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a date-input has focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsBlur",
                "name": "gcdsBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a date-input loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsInput",
                "name": "gcdsInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the date-input has received input. Contains the new value in the event detail."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "gcdsChange",
                "name": "gcdsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a date-input has changed. Contains the new value in the event detail."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "gcdsError",
                "name": "gcdsError",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a date-input has a validation error."
                },
                "complexType": {
                    "original": "object",
                    "resolved": "object",
                    "references": {}
                }
            }, {
                "method": "gcdsValid",
                "name": "gcdsValid",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a date-input has validated."
                },
                "complexType": {
                    "original": "object",
                    "resolved": "object",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "validate": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLGcdsDateInputElement": {
                            "location": "global",
                            "id": "global::HTMLGcdsDateInputElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Call any active validators",
                    "tags": []
                }
            },
            "checkValidity": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Check the validity of gcds-date-input",
                    "tags": []
                }
            },
            "getValidationMessage": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "Get validationMessage of gcds-date-input",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "name",
                "methodName": "validateName"
            }, {
                "propName": "legend",
                "methodName": "validateLegend"
            }, {
                "propName": "format",
                "methodName": "validateFormat"
            }, {
                "propName": "value",
                "methodName": "watchValue"
            }, {
                "propName": "validator",
                "methodName": "validateValidator"
            }];
    }
    static get listeners() {
        return [{
                "name": "submit",
                "method": "submitListener",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=gcds-date-input.js.map
