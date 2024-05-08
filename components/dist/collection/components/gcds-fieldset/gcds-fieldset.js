import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, inheritAttributes, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
import { validateFieldsetElements } from "../../validators/fieldset-validators/fieldset-validators";
import i18n from "./i18n/i18n";
export class GcdsFieldset {
    constructor() {
        this._validator = defaultValidator;
        this.fieldsetId = undefined;
        this.legend = undefined;
        this.required = undefined;
        this.errorMessage = undefined;
        this.hint = undefined;
        this.disabled = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.hasError = undefined;
        this.lang = undefined;
        this.inheritedAttributes = {};
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
    validateDisabledFieldset() {
        if (this.required) {
            this.disabled = false;
        }
        if (this.disabled == true) {
            for (let i = 0; i < this.el.children.length; i++) {
                this.el.children[i].setAttribute('disabled', '');
            }
        }
    }
    handleDisabledChange(newValue, _oldValue) {
        if (_oldValue && newValue != _oldValue) {
            for (let i = 0; i < this.el.children.length; i++) {
                this.el.children[i].removeAttribute('disabled');
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
        if (!this._validator.validate(this.fieldsetId) &&
            this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsGroupError.emit(this.errorMessage);
            this.gcdsError.emit({
                id: `#${this.fieldsetId}`,
                message: `${this.legend} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsGroupErrorClear.emit();
            this.gcdsValid.emit({ id: `#${this.fieldsetId}` });
        }
    }
    blurValidate() {
        if (this.validator &&
            this.validateOn == 'blur' &&
            !this.el.matches(':focus-within')) {
            this.validate();
        }
    }
    /**
     * Event listener for gcds-fieldset errors
     */
    gcdsParentGroupError(e) {
        if (e.srcElement == this.el &&
            validateFieldsetElements(this.el, this.el.children).includes(false)) {
            this.hasError = true;
        }
    }
    gcdsParentGroupErrorClear(e) {
        if (e.srcElement == this.el && this.hasError) {
            this.hasError = false;
        }
    }
    submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            if (this.hasError) {
                e.preventDefault();
            }
        }
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
        this.validateDisabledFieldset();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'fieldset');
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { lang, fieldsetId, legend, required, errorMessage, hasError, hint, disabled, inheritedAttributes, } = this;
        const fieldsetAttrs = Object.assign({ disabled }, inheritedAttributes);
        if (errorMessage) {
            fieldsetAttrs['aria-describedby'] = `error-message-${fieldsetId} ${fieldsetAttrs['aria-describedby']
                ? ` ${fieldsetAttrs['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, null, h("fieldset", Object.assign({ class: `gcds-fieldset ${hasError ? 'gcds-fieldset--error' : ''}`, id: fieldsetId }, fieldsetAttrs, { "aria-labelledby": hint
                ? `legend-${fieldsetId} hint-${fieldsetId}`
                : `legend-${fieldsetId}`, tabindex: "-1", ref: element => (this.shadowElement = element) }), h("legend", { id: `legend-${fieldsetId}` }, legend, required ? (h("strong", { class: "legend__required" }, "(", i18n[lang].required, ")")) : null), hint ? h("gcds-hint", { "hint-id": fieldsetId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: fieldsetId }, errorMessage)) : null, h("slot", null))));
    }
    static get is() { return "gcds-fieldset"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-fieldset.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-fieldset.css"]
        };
    }
    static get properties() {
        return {
            "fieldsetId": {
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
                    "text": "The unique identifier for the component"
                },
                "attribute": "fieldset-id",
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
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The title for the contents of the fieldset"
                },
                "attribute": "legend",
                "reflect": true
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
                    "text": "Flag the contents are required"
                },
                "attribute": "required",
                "reflect": true
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
                    "text": "Error message for invalid form elements in group."
                },
                "attribute": "error-message",
                "reflect": true
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Hint displayed below the legend."
                },
                "attribute": "hint",
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
                    "text": "Flag to disable fieldset and its contents"
                },
                "attribute": "disabled",
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
            "hasError": {},
            "lang": {},
            "inheritedAttributes": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsGroupError",
                "name": "gcdsGroupError",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the fieldset has a validation error."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "gcdsGroupErrorClear",
                "name": "gcdsGroupErrorClear",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the fieldset has a validation error."
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
                    "text": "Emitted when the fieldset has a validation error."
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
                    "text": "Emitted when the fieldset has a validation error."
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
                "propName": "errorMessage",
                "methodName": "validateErrorMessage"
            }, {
                "propName": "disabled",
                "methodName": "validateDisabledFieldset"
            }, {
                "propName": "disabled",
                "methodName": "handleDisabledChange"
            }, {
                "propName": "validator",
                "methodName": "validateValidator"
            }];
    }
    static get listeners() {
        return [{
                "name": "gcdsBlur",
                "method": "blurValidate",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "gcdsGroupError",
                "method": "gcdsParentGroupError",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "gcdsGroupErrorClear",
                "method": "gcdsParentGroupErrorClear",
                "target": "body",
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
}
//# sourceMappingURL=gcds-fieldset.js.map
