import { r as registerInstance, h, H as Host, g as getElement } from './index-8d185c1e.js';
import { a as assignLanguage } from './utils-de8f53f8.js';

const gcdsErrorMessageCss = ":host{display:inline-block}:host .error-message{background:var(--gcds-error-message-background);border-left:2px solid var(--gcds-error-message-border);color:var(--gcds-error-message-text);font-size:inherit;line-height:inherit;margin:0 0 var(--gcds-spacing-300);padding:var(--gcds-spacing-200)}";

let GcdsErrorMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { messageId, message } = this;
    return (h(Host, { id: `error-message-${messageId}`, class: "error-message-container" }, h("p", { class: "error-message", role: "alert" }, message)));
  }
  get el() { return getElement(this); }
};
GcdsErrorMessage.style = gcdsErrorMessageCss;

const gcdsHintCss = ":host .hint{font-size:inherit;line-height:inherit;margin:0 0 var(--gcds-spacing-300)}";

let GcdsHint = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { hint, hintId } = this;
    return (h(Host, { id: `hint-${hintId}` }, h("p", { class: "hint" }, hint)));
  }
  get el() { return getElement(this); }
};
GcdsHint.style = gcdsHintCss;

const gcdsLabelCss = ".sc-gcds-label-h label.sc-gcds-label{color:inherit;display:block;font-size:inherit;font-weight:var(--gcds-font-weights-bold);line-height:inherit;margin:0 0 var(--gcds-spacing-50);max-width:100%}.sc-gcds-label-h label.hidden.sc-gcds-label{height:0;margin:0;opacity:0;overflow:hidden;width:0}.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{margin:0 0 0 var(--gcds-spacing-100)}";

let GcdsLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }
  render() {
    const { hideLabel, labelFor, label, required, lang } = this;
    const requiredText = lang == "en" ? "required" : "obligatoire";
    return (h(Host, { id: `label-for-${labelFor}` }, h("label", { htmlFor: labelFor, class: `${hideLabel ? 'hidden' : ''} ${required ? 'required' : ''}` }, h("span", null, label), required ?
      h("strong", { class: "required" }, "(", requiredText, ")")
      : null)));
  }
  get el() { return getElement(this); }
};
GcdsLabel.style = gcdsLabelCss;

export { GcdsErrorMessage as gcds_error_message, GcdsHint as gcds_hint, GcdsLabel as gcds_label };
