import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defaultValidator, r as requiredValidator, g as getValidator } from './validator.factory.js';
import { d as defineCustomElement$5 } from './gcds-error-message2.js';
import { d as defineCustomElement$4 } from './gcds-hint2.js';
import { d as defineCustomElement$3 } from './gcds-icon2.js';
import { d as defineCustomElement$2 } from './gcds-label2.js';

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

const gcdsFileUploaderCss = ".sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.sc-gcds-file-uploader{align-items:flex-start;border:0;color:var(--gcds-file-uploader-default-text);display:flex;flex-direction:column;font:var(--gcds-file-uploader-font);margin:0;max-width:90%;padding:0;transition:color .15s ease-in-out}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.sc-gcds-file-uploader:focus-within{color:var(--gcds-file-uploader-focus-text)}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader{color:var(--gcds-file-uploader-disabled-text)}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__input.sc-gcds-file-uploader input.sc-gcds-file-uploader,.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader,.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader gcds-icon.sc-gcds-file-uploader{cursor:not-allowed}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__input.sc-gcds-file-uploader button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-disabled-background);border-color:var(--gcds-file-uploader-disabled-text);color:inherit;outline:0}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader{color:inherit}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader{color:inherit}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-disabled.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:focus{background:transparent}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-error.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader:not(:focus){border-color:var(--gcds-file-uploader-file-danger-border-color)}.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader:focus-within,.sc-gcds-file-uploader-h .gcds-file-uploader-wrapper.gcds-error.sc-gcds-file-uploader .file-uploader__uploaded-file.sc-gcds-file-uploader:focus-within{border-color:var(--gcds-file-uploader-file-focus-border-color)}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader{display:inline-block;position:relative}.sc-gcds-file-uploader-h .file-uploader__input.uploaded-files.sc-gcds-file-uploader{margin:var(--gcds-file-uploader-button-margin)}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-button-background);border:var(--gcds-file-uploader-button-border-width) solid var(--gcds-file-uploader-button-text);border-radius:var(--gcds-file-uploader-button-border-radius);color:var(--gcds-file-uploader-button-text);font-family:inherit;font-size:inherit;font-weight:var(--gcds-file-uploader-button-font-weight);line-height:inherit;padding:var(--gcds-file-uploader-button-padding);transition:all .15s ease-in-out}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader input.sc-gcds-file-uploader{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader #file-uploader__summary.sc-gcds-file-uploader{height:0;margin:0;overflow:hidden;visibility:hidden}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader:hover button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-hover-button-background)}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader:focus-within button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-focus-button-background);border-color:currentColor;color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-button-outline-width) solid var(--gcds-file-uploader-focus-button-background)}.sc-gcds-file-uploader-h .file-uploader__input.sc-gcds-file-uploader:active button.sc-gcds-file-uploader{background-color:var(--gcds-file-uploader-active-button-background);color:var(--gcds-file-uploader-active-button-text)}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader{align-items:center;border:var(--gcds-file-uploader-file-border-width) solid var(--gcds-file-uploader-file-border-color);color:var(--gcds-file-uploader-default-text);cursor:pointer;display:flex;font:inherit;font-weight:var(--gcds-file-uploader-button-font-weight);justify-content:space-between;max-width:var(--gcds-file-uploader-file-max-width);padding:var(--gcds-file-uploader-file-padding);width:100%}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader:not(:last-of-type){border-block-end:0}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader span.sc-gcds-file-uploader{overflow:hidden;padding-inline-end:0;text-overflow:ellipsis;white-space:nowrap}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader{align-items:center;background:transparent;border-radius:var(--gcds-file-uploader-file-button-border-radius);color:var(--gcds-file-uploader-file-button-default-text);display:flex;font:inherit;margin:var(--gcds-file-uploader-file-button-margin);outline:0;padding:var(--gcds-file-uploader-file-button-padding);transition:color .35s}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:not(:focus) span.sc-gcds-file-uploader{overflow:visible;text-decoration:underline;text-decoration-thickness:var(--gcds-file-uploader-file-button-default-decoration-thickness);text-underline-offset:var(--gcds-file-uploader-file-button-underline-offset);transition:box-shadow .35s}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:hover{color:var(--gcds-file-uploader-file-button-hover-text)}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:hover span.sc-gcds-file-uploader{text-decoration-thickness:var(--gcds-file-uploader-file-button-hover-decoration-thickness)}.sc-gcds-file-uploader-h .file-uploader__uploaded-file.sc-gcds-file-uploader button.sc-gcds-file-uploader:focus{background-color:var(--gcds-file-uploader-focus-button-background);border-color:var(--gcds-file-uploader-focus-button-background);color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-focus-button-outline-width) solid var(--gcds-file-uploader-focus-button-background);outline-offset:var(--gcds-file-uploader-focus-button-outline-offset);text-decoration-color:transparent}";

const GcdsFileUploader$1 = /*@__PURE__*/ proxyCustomElement(class GcdsFileUploader extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
    this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
    this.gcdsFileUploaderChange = createEvent(this, "gcdsFileUploaderChange", 7);
    this.gcdsRemoveFile = createEvent(this, "gcdsRemoveFile", 7);
    this.gcdsError = createEvent(this, "gcdsError", 7);
    this.gcdsValid = createEvent(this, "gcdsValid", 7);
    this._validator = defaultValidator;
    this.onFocus = e => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = e => {
      if (this.blurHandler) {
        this.blurHandler(e);
      }
      else {
        if (this.validateOn == 'blur') {
          this.validate();
        }
      }
      this.gcdsBlur.emit();
    };
    this.handleChange = e => {
      if (this.changeHandler) {
        this.changeHandler(e);
      }
      else {
        const filesContainer = [];
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
          filesContainer.push(files[i].name);
        }
        this.value = [...filesContainer];
        // Validate since the input loses focus when dialog opens
        if (this.validateOn == 'blur') {
          this.validate();
        }
      }
      this.gcdsFileUploaderChange.emit(this.value);
    };
    this.removeFile = e => {
      e.preventDefault();
      const filesContainer = this.value;
      const file = filesContainer.indexOf(e.target.closest('.file-uploader__uploaded-file').childNodes[0]
        .textContent);
      if (file > -1) {
        filesContainer.splice(file, 1);
      }
      this.value = [...filesContainer];
      this.gcdsRemoveFile.emit(this.value);
    };
    this.uploaderId = undefined;
    this.label = undefined;
    this.required = false;
    this.disabled = false;
    this.value = [];
    this.accept = undefined;
    this.multiple = undefined;
    this.errorMessage = undefined;
    this.hint = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.changeHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.hasError = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
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
    const { accept, disabled, errorMessage, hasError, hint, label, lang, multiple, required, uploaderId, value, inheritedAttributes, } = this;
    const attrsInput = Object.assign(Object.assign({ accept,
      disabled,
      multiple,
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
      attrsInput['aria-describedby'] = `${hintID}${errorID}${attrsInput['aria-describedby']}`;
    }
    return (h(Host, null, h("div", { class: `gcds-file-uploader-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "label-for": uploaderId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": uploaderId }) : null, errorMessage ? (h("gcds-error-message", { messageId: uploaderId, message: errorMessage })) : null, h("div", { class: `file-uploader__input ${value.length > 0 ? 'uploaded-files' : ''}` }, h("button", { type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, I18N[lang].button.upload), h("input", Object.assign({ type: "file", id: uploaderId, name: uploaderId }, attrsInput, { onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onChange: e => this.handleChange(e), "aria-invalid": hasError ? 'true' : 'false', ref: element => (this.shadowElement = element) })), value.length > 0 ? (h("p", { id: "file-uploader__summary" }, h("span", null, I18N[lang].summary.selected, " "), value.map(file => (h("span", null, file, " "))))) : (h("p", { id: "file-uploader__summary" }, I18N[lang].summary.unselected))), value.length > 0
      ? value.map(file => (h("div", { class: "file-uploader__uploaded-file", "aria-label": `${I18N[lang].removeFile} ${file}.` }, h("span", null, file), h("button", { onClick: e => this.removeFile(e) }, h("span", null, I18N[lang].button.remove), h("gcds-icon", { name: "times", size: "text", "margin-left": "200" })))))
      : null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["validateDisabledSelect"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }; }
  static get style() { return gcdsFileUploaderCss; }
}, [2, "gcds-file-uploader", {
    "uploaderId": [1537, "uploader-id"],
    "label": [513],
    "required": [516],
    "disabled": [1540],
    "value": [1040],
    "accept": [513],
    "multiple": [516],
    "errorMessage": [1537, "error-message"],
    "hint": [513],
    "validator": [1040],
    "validateOn": [1025, "validate-on"],
    "changeHandler": [16],
    "focusHandler": [16],
    "blurHandler": [16],
    "hasError": [32],
    "inheritedAttributes": [32],
    "lang": [32],
    "validate": [64]
  }, [[4, "submit", "submitListener"]], {
    "disabled": ["validateDisabledSelect"],
    "errorMessage": ["validateErrorMessage"],
    "validator": ["validateValidator"],
    "hasError": ["validateHasError"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-file-uploader", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-file-uploader":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsFileUploader$1);
      }
      break;
    case "gcds-error-message":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "gcds-hint":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gcds-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gcds-label":
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