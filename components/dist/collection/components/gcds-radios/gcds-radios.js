import { Host, h, } from "@stencil/core";
import { isRadioObject } from "./radio";
import { assignLanguage, inheritAttributes, logError, handleErrors, isValid, handleValidationResult, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
import i18n from "./i18n/i18n";
/**
 * Radios provide a set of options for a single response.
 */
export class GcdsRadios {
    constructor() {
        this._validator = defaultValidator;
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
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
        this._validator = getValidator(this.validator);
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
        // Assign required validator if needed
        requiredValidator(this.el, 'radio');
        this.validateValidator();
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
            return (h(Host, { key: '863fb42cf8b4ad89a28170ded8066c3220b6434e', onBlur: () => this.onBlurValidate() }, h("fieldset", Object.assign({ key: '460e85e366045fd2bffa39cba97603070bb029ff', class: "gcds-radios__fieldset" }, fieldsetAttrs), h("legend", { key: '8f37f944357de5f5a5b30758276ad3faee992851', id: "radios-legend", class: "gcds-radios__legend" }, legend, required ? (h("span", { class: "legend__required" }, i18n[lang].required)) : null), hint ? (h("gcds-hint", { id: "radios-hint", "hint-id": "radios" }, hint)) : null, errorMessage ? (h("div", null, h("gcds-error-message", { id: "radios-error", messageId: "radios" }, errorMessage))) : null, this.optionsArr &&
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
    static get is() { return "gcds-radios"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-radios.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-radios.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "string",
                "attribute": "options",
                "mutable": true,
                "complexType": {
                    "original": "string | Array<RadioObject>",
                    "resolved": "RadioObject[] | string",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "RadioObject": {
                            "location": "import",
                            "path": "./radio",
                            "id": "src/components/gcds-radios/radio.tsx::RadioObject"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Options to render radio buttons"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
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
                    "text": "The `name` attribute for the radios, used to group radio elements together"
                },
                "getter": false,
                "setter": false,
                "reflect": true
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
                    "text": "Label or legend for the group of radio elements"
                },
                "getter": false,
                "setter": false,
                "reflect": true
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies if a form field is required or not."
                },
                "getter": false,
                "setter": false,
                "reflect": true
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Hint displayed below the label and above the radio elements"
                },
                "getter": false,
                "setter": false,
                "reflect": true
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set this to display an error message for invalid radios"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies if an input element is disabled or not."
                },
                "getter": false,
                "setter": false,
                "reflect": true
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Default value for the element"
                },
                "getter": false,
                "setter": false,
                "reflect": true
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
            "hasError": {},
            "inheritedAttributes": {},
            "lang": {},
            "errors": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsInput",
                "name": "gcdsInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when radios has been changed as a direct result of a user action (a radio option has been selected). Contains new value in event detail"
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
                    "text": "Emitted when a radios option is checked (but not when unchecked). Contains new value in event detail"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                    "text": "Emitted when radios has received focus"
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
                    "text": "Emitted when the radios has lost focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
                    "text": "Emitted when radios has passed validation"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
                    "text": "Emitted when radios has a validation error"
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
                        "HTMLGcdsRadiosElement": {
                            "location": "global",
                            "id": "global::HTMLGcdsRadiosElement"
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
                "propName": "options",
                "methodName": "validateOptions"
            }, {
                "propName": "name",
                "methodName": "validateName"
            }, {
                "propName": "legend",
                "methodName": "validateLegend"
            }, {
                "propName": "errorMessage",
                "methodName": "validateErrorMessage"
            }, {
                "propName": "value",
                "methodName": "validateValue"
            }, {
                "propName": "validator",
                "methodName": "validateValidator"
            }, {
                "propName": "lang",
                "methodName": "watchLang"
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
//# sourceMappingURL=gcds-radios.js.map
