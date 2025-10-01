import { Host, h, } from "@stencil/core";
import { assignLanguage, handleValidationResult, inheritAttributes, observerConfig, formatHTMLErrorMessage, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
import i18n from "./i18n/i18n";
/**
 * A text area is a space to enter long-form information in response to a question or instruction.
 */
export class GcdsTextarea {
    constructor() {
        // Array to store which native HTML errors are happening on the textarea
        this.htmlValidationErrors = [];
        this.textareaTitle = '';
        this._validator = defaultValidator;
        /**
         * Specifies if a textarea element is disabled or not.
         */
        this.disabled = false;
        /**
         * Specifies if the label is hidden or not.
         */
        this.hideLabel = false;
        /**
         * Specifies if a form field is required or not.
         */
        this.required = false;
        /**
         * Default value for textarea rows.
         */
        this.rows = 5;
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
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
            this.shadowElement.value = val;
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            else {
                this.updateValidity();
            }
            customEvent.emit(this.value);
        };
    }
    validateDisabledTextarea() {
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
    /**
     * Set value on internal textarea to allow proper resets
     */
    watchValue(val) {
        // Update DOM textarea if it exists
        if (this.shadowElement) {
            this.shadowElement.value = val || '';
        }
        // Update form value for form association
        this.internals.setFormValue(val || null);
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
    }
    /**
     * Read-only property of the textarea, returns a ValidityState object that represents the validity states this element is in.
     */
    get validity() {
        return this.internals.validity;
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
        handleValidationResult(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
        // Native HTML validation
        if ((this.required && !this.internals.checkValidity()) ||
            !this.internals.checkValidity()) {
            if (!this.internals.validity.valueMissing) {
                this.errorMessage = formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
                this.textareaTitle = this.errorMessage;
            }
        }
    }
    /**
     * Check the validity of gcds-textarea
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-textarea
     */
    async getValidationMessage() {
        return this.internals.validationMessage;
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
        if (this.value !== this.initialValue) {
            // Update all relevant values to initialValue
            this.value = this.initialValue;
            // Update DOM element if available
            if (this.shadowElement) {
                this.shadowElement.value = this.initialValue || '';
            }
            // Update form value
            this.internals.setFormValue(this.initialValue || null);
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
    }
    /**
     * Update gcds-textarea's validity using internal textarea validity
     */
    updateValidity(override) {
        const validity = this.shadowElement.validity;
        this.htmlValidationErrors = [];
        for (const key in validity) {
            // Do not include valid or missingValue keys
            if (validity[key] === true && key !== 'valid') {
                this.htmlValidationErrors.push(key);
            }
        }
        // Add override values to HTML errors array
        for (const key in override) {
            this.htmlValidationErrors.push(key);
        }
        const validityState = override
            ? Object.assign(Object.assign({}, this.shadowElement.validity), override) : this.shadowElement.validity;
        let validationMessage = null;
        if (this.htmlValidationErrors.length > 0) {
            validationMessage = formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
        }
        this.internals.setValidity(validityState, validationMessage, this.shadowElement);
        // Set textarea title when HTML error occruring
        this.textareaTitle = validationMessage;
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
        this.validateDisabledTextarea();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'textarea');
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    componentDidLoad() {
        let lengthValidity;
        // maxlength/minlength validation on load
        if (this.value && (this.minlength || this.characterCount)) {
            if (this.minlength && this.value.length < this.minlength) {
                lengthValidity = { tooShort: true };
            }
            else if (this.characterCount &&
                this.value.length > this.characterCount) {
                lengthValidity = { tooLong: true };
            }
        }
        this.updateValidity(lengthValidity);
        // Logic to enable autofocus
        if (this.autofocus) {
            requestAnimationFrame(() => {
                var _a;
                (_a = this.shadowElement) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
    }
    render() {
        const { autofocus, characterCount, cols, disabled, errorMessage, hideLabel, hint, label, minlength, required, rows, textareaId, value, hasError, inheritedAttributes, lang, name, textareaTitle, } = this;
        // Use max-width instead of cols attribute to keep field responsive
        const style = {
            maxWidth: `${cols * 1.5}ch`,
        };
        const attrsLabel = {
            label,
            required,
        };
        const attrsTextarea = Object.assign({ name,
            autofocus,
            disabled,
            minlength,
            required,
            rows, title: textareaTitle }, inheritedAttributes);
        if (hint || errorMessage || characterCount) {
            const hintID = hint ? `hint-${textareaId} ` : '';
            const errorID = errorMessage ? `error-message-${textareaId} ` : '';
            const countID = characterCount ? `textarea__count-${textareaId} ` : '';
            attrsTextarea['aria-describedby'] = `${hintID}${errorID}${countID}${attrsTextarea['aria-describedby']
                ? `${attrsTextarea['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: '462ff694237b5ece2b94a25006fa2166c82c3130' }, h("div", { key: '418df2a7b21570cb908dd30cb958a01fe95f2f87', class: `gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '9e09924f599db5ef90109d0ae5141e00fce25455' }, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? h("gcds-hint", { "hint-id": textareaId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: textareaId }, errorMessage)) : null, h("textarea", Object.assign({ key: '3dc1cafeace916ff5fe1b644a0a47223d0e2c76c' }, attrsTextarea, { class: hasError ? 'gcds-error' : null, id: textareaId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${textareaId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: characterCount ? characterCount : null, style: cols ? style : null, ref: element => (this.shadowElement = element) }), value), characterCount ? (h("gcds-text", { id: `textarea__count-${textareaId}`, "aria-live": "polite" }, value == undefined
            ? `${characterCount} ${i18n[lang].characters.allowed}`
            : `${characterCount - value.length} ${i18n[lang].characters.left}`)) : null)));
    }
    static get is() { return "gcds-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-textarea.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-textarea.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "If true, the input will be focused on component render"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "characterCount": {
                "type": "number",
                "attribute": "character-count",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the maxlength attribute for the textarea element."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "minlength": {
                "type": "number",
                "attribute": "minlength",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The minimum number of characters that the input field can accept."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "cols": {
                "type": "number",
                "attribute": "cols",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines width for textarea cols (the min-width for textarea's is 50%)."
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
                    "text": "Specifies if a textarea element is disabled or not."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Error message for an invalid textarea element."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hideLabel": {
                "type": "boolean",
                "attribute": "hide-label",
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
                    "text": "Specifies if the label is hidden or not."
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
                    "text": "Hint displayed below the label and above the textarea field."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Form field label"
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
                    "text": "Name attribute for a textarea element."
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
            "rows": {
                "type": "number",
                "attribute": "rows",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Default value for textarea rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "5"
            },
            "textareaId": {
                "type": "string",
                "attribute": "textarea-id",
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
                    "text": "Id attribute for a textarea element."
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
                    "text": "Default value for an input element."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Read-only property of the textarea, returns a ValidityState object that represents the validity states this element is in."
                },
                "getter": true,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "inheritedAttributes": {},
            "hasError": {},
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
                    "text": "Emitted when the textarea has focus."
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
                    "text": "Emitted when the textarea loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
                    "text": "Emitted when the textarea has changed."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                    "text": "Emitted when the textarea has received input."
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
                    "text": "Emitted when the textarea has a validation error."
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
                    "text": "Emitted when the textarea has a validation error."
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
                        "HTMLGcdsTextareaElement": {
                            "location": "global",
                            "id": "global::HTMLGcdsTextareaElement"
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
                    "text": "Check the validity of gcds-textarea",
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
                    "text": "Get validationMessage of gcds-textarea",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "disabled",
                "methodName": "validateDisabledTextarea"
            }, {
                "propName": "errorMessage",
                "methodName": "validateErrorMessage"
            }, {
                "propName": "value",
                "methodName": "watchValue"
            }, {
                "propName": "validator",
                "methodName": "validateValidator"
            }, {
                "propName": "hasError",
                "methodName": "validateHasError"
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
//# sourceMappingURL=gcds-textarea.js.map
