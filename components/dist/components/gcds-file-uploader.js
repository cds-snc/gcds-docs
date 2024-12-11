import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$7 } from './gcds-error-message2.js';
import { d as defineCustomElement$6 } from './gcds-hint2.js';
import { d as defineCustomElement$5 } from './gcds-icon2.js';
import { d as defineCustomElement$4 } from './gcds-label2.js';
import { d as defineCustomElement$3 } from './gcds-sr-only2.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

const I18N = {
  en: {
    button: {
      remove: 'Remove',
      upload: 'Choose file',
    },
    summary: {
      selected: 'Currently selected:',
      unselected: 'No file currently selected.',
    },
    removeFile: 'Remove file',
  },
  fr: {
    button: {
      remove: 'Supprimer',
      upload: 'Choisir un fichier',
    },
    summary: {
      selected: 'Actuellement sélectionné:',
      unselected: 'Aucun fichier actuellement sélectionné.',
    },
    removeFile: 'Supprimer le fichier',
  },
};

const gcdsFileUploaderCss = "@layer reset, default, input, files, disabled, error, focus, active;@layer reset{:host{display:block}:host .gcds-file-uploader-wrapper{border:0;margin:0;padding:0}:host .gcds-file-uploader-wrapper button{cursor:pointer;font:inherit;outline:0}}@layer default{:host .gcds-file-uploader-wrapper{align-items:flex-start;color:var(--gcds-file-uploader-default-text);display:flex;flex-direction:column;font:var(--gcds-file-uploader-font);max-width:90%;transition:color .15s ease-in-out}:host .gcds-file-uploader-wrapper button{border-radius:var(--gcds-file-uploader-file-button-border-radius);transition:all .15s ease-in-out}}@layer input{:host .gcds-file-uploader-wrapper .file-uploader__input{display:inline-block;position:relative}:host .gcds-file-uploader-wrapper .file-uploader__input button{background-color:var(--gcds-file-uploader-button-background);border:var(--gcds-file-uploader-button-border-width) solid var(--gcds-file-uploader-button-text);color:var(--gcds-file-uploader-button-text);font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-button-margin);padding:var(--gcds-file-uploader-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__input input{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}:host .gcds-file-uploader-wrapper .file-uploader__input #file-uploader__summary{height:0;margin:0;overflow:hidden;visibility:hidden}}@layer files{:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file{align-items:center;border:var(--gcds-file-uploader-file-border-width) solid var(--gcds-file-uploader-file-border-color);cursor:pointer;display:flex;justify-content:space-between;max-width:var(--gcds-file-uploader-file-max-width);padding:var(--gcds-file-uploader-file-padding);width:100%}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:not(:last-of-type){border-block-end:0}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:last-of-type{margin:var(--gcds-file-uploader-button-margin)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text{overflow:auto}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text::part(text){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button{align-items:center;background:transparent;border:0;color:var(--gcds-file-uploader-file-button-default-text);display:flex;font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-file-button-margin);padding:var(--gcds-file-uploader-file-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus) span{overflow:visible;text-decoration:underline var(--gcds-file-uploader-file-button-default-decoration-thickness);text-underline-offset:var(\n          --gcds-file-uploader-file-button-underline-offset\n        )}}@layer disabled{:host .gcds-file-uploader-wrapper.gcds-disabled{color:var(--gcds-file-uploader-disabled-text)}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled :is(.file-uploader__input,.file-uploader__uploaded-file){pointer-events:none}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file button{color:inherit}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button{background-color:var(--gcds-file-uploader-disabled-background);border-color:currentColor}}@layer error{:host .gcds-file-uploader-wrapper.gcds-error .file-uploader__uploaded-file{border-color:var(--gcds-file-uploader-file-danger-border-color)}}@layer hover{@media (hover:hover){:host .gcds-file-uploader-wrapper .file-uploader__input:not(:focus-within):hover button{background-color:var(--gcds-file-uploader-hover-button-background)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover{color:var(--gcds-file-uploader-file-button-hover-text)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover span{text-decoration-thickness:var(\n            --gcds-file-uploader-file-button-hover-decoration-thickness\n          )}}}@layer focus{:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file:focus-within{border-color:var(--gcds-file-uploader-file-focus-border-color)}:host .gcds-file-uploader-wrapper:focus-within .file-uploader__input:focus-within button,:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file button:focus{background-color:var(--gcds-file-uploader-focus-button-background);border-color:var(--gcds-file-uploader-focus-button-background);color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-button-outline-width) solid var(--gcds-file-uploader-focus-button-background);outline-offset:var(--gcds-file-uploader-focus-button-outline-offset)}}@layer active{:host .gcds-file-uploader-wrapper .file-uploader__input:has(input:active) button{background-color:var(--gcds-file-uploader-active-button-background);border-color:var(--gcds-file-uploader-active-button-background);color:var(--gcds-file-uploader-active-button-text)}}";
const GcdsFileUploaderStyle0 = gcdsFileUploaderCss;

const GcdsFileUploader$1 = /*@__PURE__*/ proxyCustomElement(class GcdsFileUploader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsRemoveFile = createEvent(this, "gcdsRemoveFile", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        this.internals = this.attachInternals();
        this._validator = defaultValidator;
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
                this.addFilesToFormData(this.shadowElement.files);
            }
            this.value = [...filesContainer];
            this.gcdsRemoveFile.emit(this.value);
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
        this.uploaderId = undefined;
        this.name = undefined;
        this.label = undefined;
        this.required = false;
        this.disabled = false;
        this.value = [];
        this.accept = undefined;
        this.multiple = undefined;
        this.files = undefined;
        this.errorMessage = undefined;
        this.hint = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.hasError = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
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
        if (!this._validator.validate(this.shadowElement.files) &&
            this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsError.emit({
                id: `#${this.uploaderId}`,
                message: `${this.label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit({ id: `#${this.uploaderId}` });
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
        this.internals.setFormValue('');
        this.value = [];
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
        this.validateDisabledSelect();
        this.validateHasError();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'file');
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
        return (h(Host, { key: '99186272d4f4b070dca7d917d3a32811463df83e' }, h("div", { key: 'c1ca92dd9cc40ad0c5fe7606b9292647be311b7d', class: `gcds-file-uploader-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '9a34edfcfa902b8353c8bd654ab46e31ae38e83d' }, attrsLabel, { "label-for": uploaderId, lang: lang })), hint ? h("gcds-hint", { "hint-id": uploaderId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: uploaderId }, errorMessage)) : null, h("div", { key: '83fc533d49d0f593eada09f8fd06bdaca621b9be', class: `file-uploader__input ${value.length > 0 ? 'uploaded-files' : ''}` }, h("button", { key: '3a11627ececd9a0527a9a140ea4f318786111135', type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, I18N[lang].button.upload), h("input", Object.assign({ key: '68dc829e09e98a100be6fe790b3e5bc2d2b7ac81', type: "file", id: uploaderId }, attrsInput, { onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-invalid": hasError ? 'true' : 'false', ref: element => (this.shadowElement = element) })), value.length > 0 ? (h("gcds-sr-only", { id: "file-uploader__summary" }, h("span", null, I18N[lang].summary.selected, " "), value.map(file => (h("span", null, file, " "))))) : (h("gcds-sr-only", { id: "file-uploader__summary" }, I18N[lang].summary.unselected))), value.length > 0
            ? value.map(file => (h("div", { class: "file-uploader__uploaded-file", "aria-label": `${I18N[lang].removeFile} ${file}.` }, h("gcds-text", { "margin-bottom": "0" }, file), h("button", { onClick: e => this.removeFile(e) }, h("span", null, I18N[lang].button.remove), h("gcds-icon", { name: "times", size: "text", "margin-left": "150" })))))
            : null)));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "disabled": ["validateDisabledSelect"],
        "files": ["watchFiles"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }; }
    static get style() { return GcdsFileUploaderStyle0; }
}, [81, "gcds-file-uploader", {
        "uploaderId": [1537, "uploader-id"],
        "name": [1],
        "label": [513],
        "required": [516],
        "disabled": [1540],
        "value": [1040],
        "accept": [513],
        "multiple": [516],
        "files": [1040],
        "errorMessage": [1537, "error-message"],
        "hint": [513],
        "validator": [1040],
        "validateOn": [1025, "validate-on"],
        "hasError": [32],
        "inheritedAttributes": [32],
        "lang": [32],
        "validate": [64]
    }, [[4, "submit", "submitListener"]], {
        "disabled": ["validateDisabledSelect"],
        "files": ["watchFiles"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-file-uploader", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-sr-only", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-file-uploader":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsFileUploader$1);
            }
            break;
        case "gcds-error-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "gcds-hint":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "gcds-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-sr-only":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsFileUploader = GcdsFileUploader$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsFileUploader, defineCustomElement };

//# sourceMappingURL=gcds-file-uploader.js.map