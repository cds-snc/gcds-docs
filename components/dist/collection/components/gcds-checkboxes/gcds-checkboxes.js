import { Host, h, } from "@stencil/core";
import { assignLanguage, emitEvent, inheritAttributes, logError, handleErrors, isValid, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
import { cleanUpValues, renderCheckbox, validateOptionsArray, } from "./checkbox";
export class GcdsCheckboxes {
    constructor() {
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
        if (!this._validator.validate(this.value) && this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsError.emit({
                message: `${this.isGroup ? this.legend : this.optionsArr[0].label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit();
        }
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
            return (h(Host, { key: '26df8b5fa1dc01a291b81801f39679e75c706dd4', onBlur: () => this.isGroup && this.onBlurValidate() }, this.isGroup ? (h("fieldset", Object.assign({ class: "gcds-checkboxes__fieldset" }, fieldsetAttrs), h("legend", { id: "checkboxes-legend", class: "gcds-checkboxes__legend" }, legend, required ? (h("span", { class: "legend__required" }, " (required)")) : null), hint ? (h("gcds-hint", { id: "checkboxes-hint", "hint-id": "checkboxes" }, hint)) : null, errorMessage ? (h("div", null, h("gcds-error-message", { id: "checkboxes-error", messageId: "checkboxes" }, errorMessage))) : null, this.optionsArr &&
                this.optionsArr.map(checkbox => {
                    return renderCheckbox(checkbox, this, emitEvent, this.handleInput);
                }))) : (this.optionsArr &&
                this.optionsArr.length > 0 &&
                renderCheckbox(this.optionsArr[0], this, emitEvent, this.handleInput))));
        }
    }
    static get is() { return "gcds-checkboxes"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-checkboxes.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-checkboxes.css"]
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
                    "text": "Name attribute for a checkboxes element."
                },
                "attribute": "name",
                "reflect": true
            },
            "legend": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the legend for fieldset form group."
                },
                "attribute": "legend",
                "reflect": true
            },
            "options": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | Array<CheckboxObject>",
                    "resolved": "CheckboxObject[] | string",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "CheckboxObject": {
                            "location": "import",
                            "path": "./checkbox",
                            "id": "src/components/gcds-checkboxes/checkbox.tsx::CheckboxObject"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Options to render checkboxes buttons"
                },
                "attribute": "options",
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies if the checkboxes are required or not."
                },
                "attribute": "required",
                "reflect": true
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies if the checkboxes are disabled or not."
                },
                "attribute": "disabled",
                "reflect": true
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | Array<string>",
                    "resolved": "string | string[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Value for checkboxes component."
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "[]"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set this to display an error message for invalid <gcds-checkboxes>"
                },
                "attribute": "error-message",
                "reflect": true
            },
            "hint": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Hint displayed below the label."
                },
                "attribute": "hint",
                "reflect": true
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
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "inheritedAttributes": {},
            "hasError": {},
            "lang": {},
            "errors": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsClick",
                "name": "gcdsClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the checkbox has been clicked."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsFocus",
                "name": "gcdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the checkbox has focus."
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
                    "text": "Emitted when the checkbox loses focus."
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
                    "text": "Emmitted when a checkbox has been inputted."
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
                    "text": "Emmitted when a checkbox has been changed."
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
                    "text": "Emitted when the input has a validation error."
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
                    "text": "Emitted when the input has a validation error."
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
                "propName": "options",
                "methodName": "validateOptions"
            }, {
                "propName": "disabled",
                "methodName": "validateDisabledCheckbox"
            }, {
                "propName": "value",
                "methodName": "validateValue"
            }, {
                "propName": "errorMessage",
                "methodName": "validateErrorMessage"
            }, {
                "propName": "validator",
                "methodName": "validateValidator"
            }, {
                "propName": "hasError",
                "methodName": "validateHasError"
            }, {
                "propName": "lang",
                "methodName": "watchLang"
            }];
    }
    static get listeners() {
        return [{
                "name": "formdata",
                "method": "formdataListener",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "submit",
                "method": "submitListener",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=gcds-checkboxes.js.map
