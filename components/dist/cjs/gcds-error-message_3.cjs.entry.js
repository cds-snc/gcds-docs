'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faa8db83.js');

const gcdsErrorMessageCss = ":host{display:inline-block}:host .error-message{font-size:inherit;line-height:inherit;margin:0 0 8px;padding:10px 12px;background:#F3E9E8;color:#000;border-left:2px solid #D3080C}";

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

const gcdsHintCss = ":host .hint{font-size:inherit;line-height:inherit;margin:0 0 14px}";

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

const gcdsLabelCss = ".sc-gcds-label-h label.sc-gcds-label{display:block;max-width:100%;font-size:inherit;font-weight:700;line-height:inherit;margin:0 0 4px;color:inherit}.sc-gcds-label-h label.hidden.sc-gcds-label{overflow:hidden;opacity:0;width:0;height:0;margin:0}.sc-gcds-label-h label.required.sc-gcds-label:before,.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{color:#D3080C}.sc-gcds-label-h label.required.sc-gcds-label:before{vertical-align:top;content:\"* \";margin-left:-0.67em}.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{margin:0 0 0 5px}";

let GcdsLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { hideLabel, labelFor, label, required } = this;
    return (index.h(index.Host, { id: `label-for-${labelFor}` }, index.h("label", { htmlFor: labelFor, class: `${hideLabel ? 'hidden' : ''} ${required ? 'required' : ''}` }, index.h("span", null, label), required ?
      index.h("strong", { class: "required" }, "(required)")
      : null)));
  }
  get el() { return index.getElement(this); }
};
GcdsLabel.style = gcdsLabelCss;

exports.gcds_error_message = GcdsErrorMessage;
exports.gcds_hint = GcdsHint;
exports.gcds_label = GcdsLabel;
