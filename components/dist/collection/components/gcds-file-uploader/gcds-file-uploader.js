import { Host, h, } from "@stencil/core";
import { assignLanguage, handleValidationResult, inheritAttributes, observerConfig, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
import i18n from "./i18n/i18n";
export class GcdsFileUploader {
    constructor() {
        this._validator = defaultValidator;
        /**
         * Specifies if a form field is required or not.
         */
        this.required = false;
        /**
         * Specifies if a file uploader element is disabled or not.
         */
        this.disabled = false;
        /**
         * Value for a file uploader element.
         */
        this.value = [];
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
            const filesContainer = [];
            const files = Array.from(e.target.files);
            this.files = e.target.files;
            files.map(file => {
                filesContainer.push(file['name']);
            });
            this.addFilesToFormData(files);
            this.value = [...filesContainer];
            // Validate since the input loses focus when dialog opens
            if (this.validateOn == 'blur') {
                setTimeout(() => {
                    this.validate();
                }, 100);
            }
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
        this.removeFile = e => {
            e.preventDefault();
            const fileName = e.target.closest('.file-uploader__uploaded-file')
                .childNodes[0].textContent;
            const filesContainer = this.value;
            const file = filesContainer.indexOf(fileName);
            if (file > -1) {
                filesContainer.splice(file, 1);
                // Add additional logic to remove file from input
                const dt = new DataTransfer();
                for (let f = 0; f < this.shadowElement.files.length; f++) {
                    if (this.shadowElement.files[f].name != fileName) {
                        dt.items.add(this.shadowElement.files[f]);
                    }
                }
                this.shadowElement.files = dt.files;
                this.files = dt.files;
                this.addFilesToFormData(Array.from(this.shadowElement.files));
            }
            this.value = [...filesContainer];
            this.gcdsRemoveFile.emit(this.value);
            this.gcdsChange.emit(this.value);
            this.el.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
        };
        /*
         * Set form data for internals
         */
        this.addFilesToFormData = files => {
            const formData = new FormData();
            if (files.length > 0) {
                files.forEach(file => {
                    formData.append(this.name, file, file.name);
                });
            }
            this.internals.setFormValue(formData);
        };
    }
    validateDisabledSelect() {
        if (this.required) {
            this.disabled = false;
        }
    }
    watchFiles() {
        const filesContainer = [];
        const files = Array.from(this.files);
        files.map(file => {
            filesContainer.push(file['name']);
        });
        this.addFilesToFormData(files);
        this.value = [...filesContainer];
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
     * Call any active validators
     */
    async validate() {
        handleValidationResult(this.el, this._validator.validate(this.shadowElement.files), this.label, this.gcdsError, this.gcdsValid, this.lang);
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
        this.internals.setFormValue('');
        this.value = [];
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
    }
    /*
     * Handle drop event on file uploader
     */
    handleDrop(e) {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles && droppedFiles.length > 0) {
            const dt = new DataTransfer();
            for (const file of droppedFiles) {
                dt.items.add(file);
            }
            if (dt.files.length > 0) {
                this.shadowElement.files = dt.files;
                this.files = dt.files;
            }
            this.gcdsChange.emit(this.value);
            this.el.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
        }
        // Focus file input after drop
        this.shadowElement.focus();
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
        requiredValidator(this.el, 'file');
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    render() {
        const { accept, disabled, errorMessage, hasError, hint, label, lang, multiple, name, required, uploaderId, value, inheritedAttributes, } = this;
        const attrsInput = Object.assign(Object.assign({ accept,
            disabled,
            multiple,
            name,
            required,
            value }, inheritedAttributes), { 'aria-describedby': `${inheritedAttributes['aria-describedby']
                ? `${inheritedAttributes['aria-describedby']} `
                : ''}file-uploader__summary` });
        const attrsLabel = {
            label,
            required,
        };
        if (hint || errorMessage) {
            const hintID = hint ? `hint-${uploaderId} ` : '';
            const errorID = errorMessage ? `error-message-${uploaderId} ` : '';
            attrsInput['aria-describedby'] =
                `${hintID}${errorID}${attrsInput['aria-describedby']}`;
        }
        return (h(Host, { key: '7878cdd88945af0417c692bd1f8047ed9656fae2' }, h("div", { key: '8f96a9626bab1d295cb85f81314bf341a0d85303', class: `gcds-file-uploader-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '65b303f97908056330006d3b08012edcce41ba76' }, attrsLabel, { "label-for": uploaderId, lang: lang })), hint ? h("gcds-hint", { "hint-id": uploaderId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: uploaderId }, errorMessage)) : null, h("div", { key: '96f7d6e44231ac83983aeb1a29fd328eeda92b7f', class: `file-uploader__input ${value.length > 0 ? 'uploaded-files' : ''}`, onDrop: e => this.handleDrop(e), onDragOver: e => e.preventDefault() }, h("button", { key: 'b0b2f9f819998a975d6800da47997645fbe8630c', type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, i18n[lang].button.upload), h("input", Object.assign({ key: '8f6a9bff60348cb19041c960f9374a1005659aff', type: "file", id: uploaderId }, attrsInput, { onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-invalid": hasError ? 'true' : 'false', ref: element => (this.shadowElement = element) })), value.length > 0 ? (h("gcds-sr-only", { id: "file-uploader__summary" }, h("span", null, i18n[lang].summary.selected, " "), value.map(file => (h("span", null, file, " "))))) : (h("gcds-sr-only", { id: "file-uploader__summary" }, i18n[lang].summary.unselected))), value.length > 0
            ? value.map(file => (h("div", { class: "file-uploader__uploaded-file", "aria-label": `${i18n[lang].removeFile} ${file}.` }, h("gcds-text", { "margin-bottom": "0" }, file), h("button", { onClick: e => this.removeFile(e) }, h("span", null, i18n[lang].button.remove), h("gcds-icon", { name: "close", size: "text", "margin-left": "150" })))))
            : null)));
    }
    static get is() { return "gcds-file-uploader"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-file-uploader.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-file-uploader.css"]
        };
    }
    static get properties() {
        return {
            "uploaderId": {
                "type": "string",
                "attribute": "uploader-id",
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
                    "text": "Id attribute for a file uploader element."
                },
                "getter": false,
                "setter": false,
                "reflect": true
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
                    "text": "Name attribute for file input element."
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
                    "text": "Form field label."
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
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Specifies if a file uploader element is disabled or not."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "value": {
                "type": "unknown",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Value for a file uploader element."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "accept": {
                "type": "string",
                "attribute": "accept",
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
                    "text": "Defines the file types the file uploader accepts."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "multiple": {
                "type": "boolean",
                "attribute": "multiple",
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
                    "text": "Boolean that specifies if the user is allowed to select more than one file."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "files": {
                "type": "unknown",
                "attribute": "files",
                "mutable": true,
                "complexType": {
                    "original": "FileList",
                    "resolved": "FileList",
                    "references": {
                        "FileList": {
                            "location": "global",
                            "id": "global::FileList"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "FileList of uploaded files to input"
                },
                "getter": false,
                "setter": false
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
                    "text": "Error message for an invalid file uploader element."
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
                    "text": "Hint displayed below the label."
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
                    "original": "Array<\n    string | ValidatorEntry | Validator<string | number | FileList>\n  >",
                    "resolved": "(string | ValidatorEntry | Validator<string | number | FileList>)[]",
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
                        },
                        "FileList": {
                            "location": "global",
                            "id": "global::FileList"
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
                    "text": "Emitted when the uploader has focus."
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
                    "text": "Emitted when the uploader loses focus."
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
                    "text": "Emitted when the user has made a file selection."
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
                    "text": "Emitted when the user has uploaded a file."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "gcdsRemoveFile",
                "name": "gcdsRemoveFile",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Remove file and update value."
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
                        "HTMLGcdsFileUploaderElement": {
                            "location": "global",
                            "id": "global::HTMLGcdsFileUploaderElement"
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
                "propName": "files",
                "methodName": "watchFiles"
            }, {
                "propName": "errorMessage",
                "methodName": "validateErrorMessage"
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
//# sourceMappingURL=gcds-file-uploader.js.map
