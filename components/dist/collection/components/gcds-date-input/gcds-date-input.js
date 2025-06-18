import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, isValidDate, logError, handleValidationResult, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
import i18n from "./i18n/i18n";
export class GcdsDateInput {
    constructor() {
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
        this.validateOn = 'blur';
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
            console.error(`${i18n['en'].valueError}${i18n['en'][`valueFormat${this.format}`]} | ${i18n['fr'].valueError}${i18n['fr'][`valueFormat${this.format}`]}`);
        }
        else if (this.errors.includes('value')) {
            this.errors.splice(this.errors.indexOf('value'), 1);
        }
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
    }
    /**
     * Call any active validators
     */
    async validate() {
        this.hasError = handleValidationResult(this.el, this._validator.validate(this.format === 'full'
            ? `${this.yearValue}-${this.monthValue}-${this.dayValue}`
            : `${this.yearValue}-${this.monthValue}`), this.legend, this.gcdsError, this.gcdsValid, this.lang, { day: false, month: false, year: false });
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
        this.validateValue();
        if (this.value && isValidDate(this.value)) {
            this.splitFormValue();
            this.setValue();
            this.initialValue = this.value;
        }
    }
    render() {
        const { legend, name, format, required, hint, errorMessage, disabled, lang, hasError, } = this;
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
        const month = (h("gcds-select", Object.assign({ key: 'bbf921ac76c7e137df8d95961a0a1a2a303af31b', label: i18n[lang].month, selectId: "month", name: "month", defaultValue: i18n[lang].selectmonth, disabled: disabled, onInput: e => this.handleInput(e, 'month'), onChange: e => this.handleInput(e, 'month'), value: this.monthValue, class: `gcds-date-input__month ${hasError['month'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['month'].toString(), "aria-description": hasError['month'] && errorMessage }), options.map(option => (h("option", { key: option, value: option }, i18n[lang]['months'][option])))));
        const year = (h("gcds-input", Object.assign({ key: '6eef03d82cf6b0817ab201ba10eb04801999debe', name: "year", label: i18n[lang].year, inputId: "year", type: "number", size: 4, disabled: disabled, value: this.yearValue, onInput: e => this.handleInput(e, 'year'), onChange: e => this.handleInput(e, 'year'), class: `gcds-date-input__year ${hasError['year'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['year'].toString(), "aria-description": hasError['year'] && errorMessage })));
        const day = (h("gcds-input", Object.assign({ key: 'ad58f6a7c03b9ab0d80a35d770fa1e9761f9eace', name: "day", label: i18n[lang].day, inputId: "day", type: "number", size: 2, disabled: disabled, value: this.dayValue, onInput: e => this.handleInput(e, 'day'), onChange: e => this.handleInput(e, 'day'), class: `gcds-date-input__day ${hasError['day'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['day'].toString(), "aria-description": hasError['day'] && errorMessage })));
        return (h(Host, { key: '7c0838bb2578726ce1b5482d56f0b2c0cb8e9062', name: name, onBlur: () => this.onBlur() }, this.validateRequiredProps() && (h("fieldset", Object.assign({ key: '91d18432610b87ab450b37a1d4b4c69fa22545f1', class: "gcds-date-input__fieldset" }, fieldsetAttrs), h("legend", { key: '54afc89772cec988f4d70f4348a0181b1aa129fb', id: "date-input-legend" }, legend, required ? (h("span", { class: "legend__required" }, i18n[lang].required)) : null), hint ? (h("gcds-hint", { id: "date-input-hint", "hint-id": "date-input" }, hint)) : null, errorMessage ? (h("div", null, h("gcds-error-message", { id: "date-input-error", messageId: "date-input" }, errorMessage))) : null, format == 'compact'
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
                "attribute": "name",
                "reflect": false
            },
            "legend": {
                "type": "string",
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
                "attribute": "legend",
                "reflect": false
            },
            "format": {
                "type": "string",
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
                "attribute": "format",
                "reflect": false
            },
            "value": {
                "type": "string",
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
                    "text": "Default value for the date input element. Format: YYYY-MM-DD"
                },
                "attribute": "value",
                "reflect": false
            },
            "required": {
                "type": "boolean",
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
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
            },
            "hint": {
                "type": "string",
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
                "attribute": "hint",
                "reflect": false
            },
            "errorMessage": {
                "type": "string",
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
                "attribute": "error-message",
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
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
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "validator": {
                "type": "unknown",
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
                }
            },
            "validateOn": {
                "type": "string",
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
                "attribute": "validate-on",
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
                    "text": "Emitted when an element has focus."
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
                    "text": "Emitted when an element loses focus."
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
                    "text": "Emitted when the element has received input."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                    "text": "Emitted when an element has changed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                    "text": "Emitted when an element has a validation error."
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
                    "text": "Emitted when an element has validated."
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
                "methodName": "validateValue"
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
