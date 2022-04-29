'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faa8db83.js');
const utils = require('./utils-17235bae.js');

const gcdsErrorMessageCss = ":host{display:inline-block}:host .error-message{font-size:inherit;line-height:inherit;margin:0 0 var(--gcds-spacing-300);padding:var(--gcds-spacing-200);background:var(--gcds-error-message-background);color:var(--gcds-error-message-text);border-left:2px solid var(--gcds-error-message-border)}";

let GcdsErrorMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { messageId, message } = this;
    return (index.h(index.Host, { id: `error-message-${messageId}`, class: "error-message-container" }, index.h("p", { class: "error-message", role: "alert" }, message)));
  }
  get el() { return index.getElement(this); }
};
GcdsErrorMessage.style = gcdsErrorMessageCss;

const gcdsHintCss = ":host .hint{font-size:inherit;line-height:inherit;margin:0 0 var(--gcds-spacing-300)}";

let GcdsHint = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { hint, hintId } = this;
    return (index.h(index.Host, { id: `hint-${hintId}` }, index.h("p", { class: "hint" }, hint)));
  }
  get el() { return index.getElement(this); }
};
GcdsHint.style = gcdsHintCss;

const gcdsLabelCss = ".sc-gcds-label-h label.sc-gcds-label{display:block;max-width:100%;font-size:inherit;font-weight:var(--gcds-font-weights-bold);line-height:inherit;margin:0 0 var(--gcds-spacing-50);color:inherit}.sc-gcds-label-h label.hidden.sc-gcds-label{overflow:hidden;opacity:0;width:0;height:0;margin:0}.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{margin:0 0 0 var(--gcds-spacing-100);color:var(--gcds-label-destructive-text)}";

let GcdsLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    // Define lang attribute
    this.lang = utils.assignLanguage(this.el);
  }
  render() {
    const { hideLabel, labelFor, label, required, lang } = this;
    const requiredText = lang == "en" ? "required" : "obligatoire";
    return (index.h(index.Host, { id: `label-for-${labelFor}` }, index.h("label", { htmlFor: labelFor, class: `${hideLabel ? 'hidden' : ''} ${required ? 'required' : ''}` }, index.h("span", null, label), required ?
      index.h("strong", { class: "required" }, "(", requiredText, ")")
      : null)));
  }
  get el() { return index.getElement(this); }
};
GcdsLabel.style = gcdsLabelCss;

exports.gcds_error_message = GcdsErrorMessage;
exports.gcds_hint = GcdsHint;
exports.gcds_label = GcdsLabel;
