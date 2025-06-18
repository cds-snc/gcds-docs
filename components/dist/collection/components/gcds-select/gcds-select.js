import { Host, h, } from "@stencil/core";
import { assignLanguage, handleValidationResult, inheritAttributes, observerConfig, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
export class GcdsSelect {
    constructor() {
        this._validator = defaultValidator;
        this.handleInput = (e, customEvent) => {
            const val = e.target && e.target.value;
            this.value = val;
            this.internals.setFormValue(val);
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
        this.onBlur = () => {
            if (this.validateOn === 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.selectId = undefined;
        this.label = undefined;
        this.name = undefined;
        this.required = false;
        this.disabled = false;
        this.defaultValue = undefined;
        this.value = undefined;
        this.errorMessage = undefined;
        this.hint = undefined;
        this.validator = undefined;
        this.validateOn = 'blur';
        this.hasError = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
        this.options = undefined;
    }
    validateDisabledSelect() {
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
     * Watch HTML attribute aria-invalid to inherit changes
     */
    ariaInvalidWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    ariaDescriptiondWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
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
    /**
     * Check if an option is selected or value matches an option's value
     */
    checkValueOrSelected(option) {
        const value = option.getAttribute('value');
        if (this.value === value) {
            option.setAttribute('selected', 'true');
            this.internals.setFormValue(value);
            this.initialValue = this.value;
        }
        if (option.hasAttribute('selected')) {
            this.value = value;
            this.initialValue = this.value ? this.value : null;
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
     * Observe passed options and update if change
     */
    observeOptions() {
        const config = {
            attributes: false,
            childList: true,
            characterData: true,
            subtree: true,
        };
        const observer = new MutationObserver(() => {
            this.options = Array.from(this.el.children);
            // Reset value to null to prevent unwanted selection
            this.value = null;
        });
        observer.observe(this.el, config);
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
        this.validateDisabledSelect();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'select');
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        if (this.el.children) {
            this.options = Array.from(this.el.children);
            this.options.forEach(option => {
                if (option.nodeName === 'OPTION') {
                    this.checkValueOrSelected(option);
                }
                else if (option.nodeName === 'OPTGROUP') {
                    const subOptions = Array.from(option.children);
                    subOptions.map(sub => {
                        this.checkValueOrSelected(sub);
                    });
                }
            });
        }
    }
    async componentDidLoad() {
        this.observeOptions();
    }
    render() {
        const { lang, selectId, label, required, disabled, defaultValue, value, hint, errorMessage, inheritedAttributes, hasError, name, options, } = this;
        const attrsSelect = Object.assign({ name,
            disabled,
            required,
            value }, inheritedAttributes);
        const attrsLabel = {
            label,
            required,
        };
        if (hint || errorMessage) {
            const hintID = hint ? `hint-${selectId} ` : '';
            const errorID = errorMessage ? `error-message-${selectId} ` : '';
            attrsSelect['aria-describedby'] = `${hintID}${errorID}${attrsSelect['aria-describedby']
                ? `${attrsSelect['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: '26155157cfdf2c5c68701f6ee9a23b2d0bebdef6' }, h("div", { key: '742bdc49b45363cfaf969687a0c9d80c422fa15b', class: `gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: 'b46b0bd119c48f00744bff34f9c120ff8b59d9cd' }, attrsLabel, { "label-for": selectId, lang: lang })), hint ? h("gcds-hint", { "hint-id": selectId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: selectId }, errorMessage)) : null, h("select", Object.assign({ key: '58f61d1544fec6c502d2204ad6aa7c4191bd9ba3' }, attrsSelect, { id: selectId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                    ? 'true'
                    : 'false', part: "select", ref: element => (this.shadowElement = element) }), defaultValue ? (h("option", { value: "", disabled: true, selected: true }, defaultValue)) : null, options.map(opt => {
            if (opt.nodeName === 'OPTION') {
                const selected = opt.hasAttribute('selected')
                    ? { selected: true }
                    : null;
                return (h("option", Object.assign({ value: opt.getAttribute('value') }, selected), opt.innerHTML));
            }
            else if (opt.nodeName === 'OPTGROUP') {
                const optGroupChildren = Array.from(opt.children).map(sub => {
                    const selected = sub.hasAttribute('selected')
                        ? { selected: true }
                        : null;
                    return (h("option", Object.assign({ value: sub.getAttribute('value') }, selected), sub.innerHTML));
                });
                return (h("optgroup", { label: opt.getAttribute('label') }, optGroupChildren));
            }
        })))));
    }
    static get is() { return "gcds-select"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-select.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-select.css"]
        };
    }
    static get properties() {
        return {
            "selectId": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Id attribute for a select element."
                },
                "attribute": "select-id",
                "reflect": true
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
                    "text": "Form field label."
                },
                "attribute": "label",
                "reflect": true
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
                    "text": "Name attribute for select form element."
                },
                "attribute": "name",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies if a form field is required or not."
                },
                "attribute": "required",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Specifies if a select element is disabled or not."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "defaultValue": {
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
                    "text": "The default value is an optional value that gets displayed before the user selects an option."
                },
                "attribute": "default-value",
                "reflect": true
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
                    "text": "Value for a select element."
                },
                "attribute": "value",
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
                    "text": "Error message for an invalid select element."
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
                "optional": true,
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
            "options": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsChange",
                "name": "gcdsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the select value has changed."
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
                    "text": "Emitted when the select has received input."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                    "text": "Emitted when the select has focus."
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
                    "text": "Emitted when the select loses focus."
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
                    "text": "Emitted when the select has a validation error."
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
                    "text": "Emitted when the select has a validation error."
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
                        "HTMLGcdsSelectElement": {
                            "location": "global",
                            "id": "global::HTMLGcdsSelectElement"
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
                "methodName": "validateDisabledSelect"
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
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=gcds-select.js.map
