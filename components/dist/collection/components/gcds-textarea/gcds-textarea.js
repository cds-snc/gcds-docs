import { Host, h, } from "@stencil/core";
import { assignLanguage, inheritAttributes, observerConfig, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
import i18n from "./i18n/i18n";
export class GcdsTextarea {
    constructor() {
        this._validator = defaultValidator;
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
            customEvent.emit(this.value);
        };
        this.characterCount = undefined;
        this.cols = undefined;
        this.disabled = false;
        this.errorMessage = undefined;
        this.hideLabel = false;
        this.hint = undefined;
        this.label = undefined;
        this.name = undefined;
        this.required = false;
        this.rows = 5;
        this.textareaId = undefined;
        this.value = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.inheritedAttributes = {};
        this.hasError = undefined;
        this.lang = undefined;
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
        this.shadowElement.value = val;
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
                id: `#${this.textareaId}`,
                message: `${this.label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit({ id: `#${this.textareaId}` });
        }
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
            this.internals.setFormValue(this.initialValue);
            this.value = this.initialValue;
            this.shadowElement.value = this.initialValue;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledTextarea();
        this.validateHasError();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'textarea');
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { characterCount, cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaId, value, hasError, inheritedAttributes, lang, name, } = this;
        // Use max-width instead of cols attribute to keep field responsive
        const style = {
            maxWidth: `${cols * 1.5}ch`,
        };
        const attrsLabel = {
            label,
            required,
        };
        const attrsTextarea = Object.assign({ name,
            disabled,
            required,
            rows }, inheritedAttributes);
        if (hint || errorMessage || characterCount) {
            const hintID = hint ? `hint-${textareaId} ` : '';
            const errorID = errorMessage ? `error-message-${textareaId} ` : '';
            const countID = characterCount ? `textarea__count-${textareaId} ` : '';
            attrsTextarea['aria-describedby'] = `${hintID}${errorID}${countID}${attrsTextarea['aria-describedby']
                ? `${attrsTextarea['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: 'e5cdb0e03c5505718d0f4bd243d9116930de61f3' }, h("div", { key: 'c3a8586573b71afc009a19a354d75830173118c9', class: `gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '085d50affa19245829eee1b852db40f7fb0d4ad3' }, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? h("gcds-hint", { "hint-id": textareaId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: textareaId }, errorMessage)) : null, h("textarea", Object.assign({ key: '0dcdc6ee22ef0bc7a5c6c722723c61b55cf701f1' }, attrsTextarea, { class: hasError ? 'gcds-error' : null, id: textareaId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${textareaId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: characterCount ? characterCount : null, style: cols ? style : null, ref: element => (this.shadowElement = element) }), value), characterCount ? (h("gcds-text", { id: `textarea__count-${textareaId}`, "aria-live": "polite" }, value == undefined
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
            "characterCount": {
                "type": "number",
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
                "attribute": "character-count",
                "reflect": false
            },
            "cols": {
                "type": "number",
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
                "attribute": "cols",
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
                    "text": "Specifies if a textarea element is disabled or not."
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Error message for an invalid textarea element."
                },
                "attribute": "error-message",
                "reflect": false
            },
            "hideLabel": {
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
                    "text": "Specifies if the label is hidden or not."
                },
                "attribute": "hide-label",
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
                    "text": "Hint displayed below the label and above the textarea field."
                },
                "attribute": "hint",
                "reflect": false
            },
            "label": {
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
                    "text": "Form field label"
                },
                "attribute": "label",
                "reflect": false
            },
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
                    "text": "Name attribute for a textarea element."
                },
                "attribute": "name",
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
            "rows": {
                "type": "number",
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
                "attribute": "rows",
                "reflect": false,
                "defaultValue": "5"
            },
            "textareaId": {
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
                    "text": "Id attribute for a textarea element."
                },
                "attribute": "textarea-id",
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
                    "text": "Default value for an input element."
                },
                "attribute": "value",
                "reflect": false
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
                    "original": "any",
                    "resolved": "any",
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
