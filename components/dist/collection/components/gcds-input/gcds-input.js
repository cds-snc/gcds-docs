import { Host, h, } from "@stencil/core";
import { assignLanguage, handleValidationResult, inheritAttributes, observerConfig, formatHTMLErrorMessage, logError, handleErrors, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
import { isSuggestionObject } from "./suggestion-option";
/**
 * An input is a space to enter short-form information in response to a question or instruction.
 */
export class GcdsInput {
    constructor() {
        // Array to store which native HTML errors are happening on the input
        this.htmlValidationErrors = [];
        this.inputTitle = '';
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
        this.inputmode = null;
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
        /**
         * Handling input and change events on input
         */
        this.handleInput = (e, customEvent) => {
            const val = e.target && e.target.value;
            this.value = val;
            this.internals.setFormValue(val ? val : null);
            if (e.type === 'change') {
                if (this.suggestionsArr &&
                    this.suggestionsArr.some((suggestion) => { var _a; return val == ((_a = suggestion.value) !== null && _a !== void 0 ? _a : suggestion.label); })) {
                    this.gcdsSuggestionSelected.emit(this.value);
                }
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            else {
                this.updateValidity();
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
    watchValue(val) {
        this.internals.setFormValue(val ? val : null);
    }
    /**
     * Read-only property of the input, returns a ValidityState object that represents the validity states this element is in.
     */
    get validity() {
        return this.internals.validity;
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
    }
    validateSuggestions() {
        if (this.suggestions == null ||
            (typeof this.suggestions === 'string' && this.suggestions.trim() == '')) {
            this.suggestionsArr = null;
            return;
        }
        let invalidObject = false;
        // Assign suggestionsArr from passed options string or array
        if (typeof this.suggestions === 'string') {
            try {
                this.suggestions = JSON.parse(this.suggestions);
            }
            catch (e) {
                logError('gcds-input', ['Invalid JSON string for suggestions']);
                this.suggestions = null;
            }
        }
        if (Array.isArray(this.suggestions)) {
            this.suggestionsArr = this.suggestions;
        }
        else {
            this.suggestionsArr = null;
        }
        // Validate options has type SuggestionOption, we allow an empty array to be used.
        if (this.suggestionsArr) {
            invalidObject = this.suggestionsArr.some(dlObject => !isSuggestionObject(dlObject));
        }
        else {
            invalidObject = true;
        }
        // Log error if no or invalid optionsObject
        const errors = handleErrors([], 'suggestions', this.suggestionsArr, invalidObject);
        if (errors.length > 0) {
            logError('gcds-input', errors);
        }
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
        // Native HTML validation
        if ((this.required && !this.internals.checkValidity()) ||
            !this.internals.checkValidity()) {
            if (!this.internals.validity.valueMissing) {
                this.errorMessage = formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
                this.inputTitle = this.errorMessage;
            }
        }
    }
    /**
     * Check the validity of gcds-input
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-input
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
    /**
     * Update gcds-input's validity using internal input
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
        // Set input title when HTML error occruring
        this.inputTitle = validationMessage;
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
        this.validateSuggestions();
        this.validateDisabledInput();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'input', this.type);
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    componentDidLoad() {
        let lengthValidity;
        // maxlength/minlength validation on load
        if (this.value && (this.minlength || this.maxlength)) {
            if (this.minlength && this.value.length < this.minlength) {
                lengthValidity = { tooShort: true };
            }
            else if (this.maxlength && this.value.length > this.maxlength) {
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
        const { disabled, errorMessage, hideLabel, hint, inputId, name, label, required, size, type, inputmode, value, hasError, autocomplete, autofocus, form, max, maxlength, min, minlength, pattern, readonly, step, inputTitle, inheritedAttributes, lang, } = this;
        // Use max-width to keep field responsive
        const style = {
            maxWidth: `calc(${size * 2}ch + 1.5rem)`,
        };
        const attrsInput = Object.assign({ disabled,
            required,
            type,
            inputmode,
            autocomplete,
            autofocus,
            form,
            max,
            maxlength,
            min,
            minlength,
            pattern,
            readonly,
            step,
            value, title: inputTitle }, inheritedAttributes);
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
        return (h(Host, { key: '8ba9b63b14c8c0e8625f7468be81462d3b719303' }, h("div", { key: '173a744866d8b3f6eb8e9727fa849123fb752933', class: `gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '4cad5a76c5912dfce86c3dd96aef58132483b05e' }, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? h("gcds-hint", { "hint-id": inputId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: inputId }, errorMessage)) : null, h("input", Object.assign({ key: 'd19dd65df5c7993b6f08d2443b6b9a5b5fa01231' }, attrsInput, { class: hasError ? 'gcds-error' : null, id: inputId, name: name, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                    ? 'true'
                    : 'false', size: size, style: size ? style : null, list: this.suggestionsArr && this.suggestionsArr.length > 0
                ? `datalist-for-${inputId}`
                : null, part: "input", ref: element => (this.shadowElement = element) })), this.suggestionsArr && this.suggestionsArr.length > 0 ? (h("datalist", { id: `datalist-for-${inputId}` }, this.suggestionsArr.map((suggestionOption) => {
            var _a;
            return (h("option", { value: (_a = suggestionOption.value) !== null && _a !== void 0 ? _a : suggestionOption.label }, suggestionOption.label));
        }))) : null)));
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
                    "original": "'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'",
                    "resolved": "\"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"url\"",
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
            "inputmode": {
                "type": "string",
                "attribute": "inputmode",
                "mutable": false,
                "complexType": {
                    "original": "| 'none'\n    | 'text'\n    | 'decimal'\n    | 'numeric'\n    | 'tel'\n    | 'search'\n    | 'email'\n    | 'url'",
                    "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
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
                    "text": "String to have autocomplete enabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "If true, the input will be focused on component render"
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
                    "text": "The ID of the form that the input field belongs to."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "max": {
                "type": "any",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "number | string",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The maximum value that the input field can accept.\nOnly applies to number input type."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "maxlength": {
                "type": "number",
                "attribute": "maxlength",
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
                    "text": "The maximum number of characters that the input field can accept."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "min": {
                "type": "any",
                "attribute": "min",
                "mutable": false,
                "complexType": {
                    "original": "number | string",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The minimum value that the input field can accept.\nOnly applies to number input type."
                },
                "getter": false,
                "setter": false,
                "reflect": true
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
            "pattern": {
                "type": "string",
                "attribute": "pattern",
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
                    "text": "Specifies a regular expression the form control's value should match.\nSee: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
                    "text": "If true, the input field cannot be modified."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "step": {
                "type": "any",
                "attribute": "step",
                "mutable": false,
                "complexType": {
                    "original": "number | 'any'",
                    "resolved": "\"any\" | number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "A number that specifies the granularity that the value must adhere to.\nValid for number type.\nSee: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step"
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
                    "text": "Read-only property of the input, returns a ValidityState object that represents the validity states this element is in."
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
            },
            "suggestions": {
                "type": "string",
                "attribute": "suggestions",
                "mutable": true,
                "complexType": {
                    "original": "string | Array<SuggestionOption>",
                    "resolved": "SuggestionOption[] | string",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "SuggestionOption": {
                            "location": "import",
                            "path": "./suggestion-option",
                            "id": "src/components/gcds-input/suggestion-option.tsx::SuggestionOption"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Array of suggestion options. This creates a datalist element with options to represent permissible or recommended options available to choose from."
                },
                "getter": false,
                "setter": false,
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "gcdsSuggestionSelected",
                "name": "gcdsSuggestionSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a suggestion is selected."
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
                    "text": "Emitted when the input has changed."
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
                    "text": "Check the validity of gcds-input",
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
                    "text": "Get validationMessage of gcds-input",
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
                "propName": "value",
                "methodName": "watchValue"
            }, {
                "propName": "validator",
                "methodName": "validateValidator"
            }, {
                "propName": "suggestions",
                "methodName": "validateSuggestions"
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
