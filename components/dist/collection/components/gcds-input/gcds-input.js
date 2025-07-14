import { Host, h, } from "@stencil/core";
import { assignLanguage, handleValidationResult, inheritAttributes, observerConfig, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
export class GcdsInput {
    constructor() {
        this._validator = defaultValidator;
        /**
         * Props
         */
        /**
         * Specifies if an input element is disabled or not.
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
         * Set Input types
         */
        // prettier-ignore
        this.type = 'text';
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
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
    }
    validateDisabledInput() {
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
        this._validator = getValidator(this.validator);
    }
    validateHasError() {
        if (this.disabled) {
            this.hasError = false;
        }
    }
    /**
     * Watch HTML attributes to inherit changes
     */
    ariaInvalidWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
    }
    ariaDescriptiondWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
    }
    /**
     * Call any active validators
     */
    async validate() {
        handleValidationResult(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
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
    keyDownListener(e) {
        if (e.target == this.el && e.key === 'Enter') {
            const formButton = document.createElement('button');
            formButton.type = 'submit';
            formButton.style.display = 'none';
            this.el.closest('form').appendChild(formButton);
            formButton.click();
            formButton.remove();
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledInput();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'input', this.type);
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    render() {
        const { disabled, errorMessage, hideLabel, hint, inputId, name, label, required, size, type, value, hasError, autocomplete, inheritedAttributes, lang, } = this;
        // Use max-width to keep field responsive
        const style = {
            maxWidth: `calc(${size * 2}ch + 1.5rem)`,
        };
        const attrsInput = Object.assign({ disabled,
            required,
            type,
            value,
            autocomplete }, inheritedAttributes);
        const attrsLabel = {
            label,
            required,
        };
        if (hint || errorMessage) {
            const hintID = hint ? `hint-${inputId} ` : '';
            const errorID = errorMessage ? `error-message-${inputId} ` : '';
            attrsInput['aria-describedby'] = `${hintID}${errorID}${attrsInput['aria-describedby']
                ? ` ${attrsInput['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: 'b01f509292604301b7792bbba825ef16958edce6' }, h("div", { key: 'e1499fb45ea0a3e268d7b666b49d5cea206b8df4', class: `gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: 'e3ace51ae9be43058cfafad48761ba2679ecc0ad' }, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? h("gcds-hint", { "hint-id": inputId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: inputId }, errorMessage)) : null, h("input", Object.assign({ key: 'fece71e5bd1b106fc83ac77d4290905e4907001d' }, attrsInput, { class: hasError ? 'gcds-error' : null, id: inputId, name: name, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                    ? 'true'
                    : 'false', size: size, style: size ? style : null, part: "input", ref: element => (this.shadowElement = element) })))));
    }
    static get is() { return "gcds-input"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-input.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Specifies if an input element is disabled or not."
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
                    "text": "Error message for an invalid input element."
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
                    "text": "Hint displayed below the label and above the input field."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "inputId": {
                "type": "string",
                "attribute": "input-id",
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
                    "text": "Id  attribute for an input element."
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
                    "text": "Name attribute for an input element."
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
            "size": {
                "type": "number",
                "attribute": "size",
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
                    "text": "Size attribute for an input element to provide a visual indication\nof the expected text length to the user."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'email' | 'number' | 'password' | 'search' | 'text' | 'url'",
                    "resolved": "\"email\" | \"number\" | \"password\" | \"search\" | \"text\" | \"url\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set Input types"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'text'"
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
            "autocomplete": {
                "type": "string",
                "attribute": "autocomplete",
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
                    "text": "String to have autocomplete enabled"
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
                    "text": "Emitted when the input has focus."
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
                    "text": "Emitted when the input loses focus."
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
                    "text": "Emitted when the input has changed."
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
                        },
                        "HTMLGcdsInputElement": {
                            "location": "global",
                            "id": "global::HTMLGcdsInputElement"
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
                "methodName": "validateDisabledInput"
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
                "propName": "aria-invalid",
                "methodName": "ariaInvalidWatcher"
            }, {
                "propName": "aria-description",
                "methodName": "ariaDescriptiondWatcher"
            }];
    }
    static get listeners() {
        return [{
                "name": "submit",
                "method": "submitListener",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "keyDownListener",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=gcds-input.js.map
