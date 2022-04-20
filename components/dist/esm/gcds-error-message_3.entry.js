import { r as registerInstance, h, H as Host, g as getElement } from './index-8d185c1e.js';

const gcdsErrorMessageCss = ":host{display:inline-block}:host .error-message{font-size:inherit;line-height:inherit;margin:0 0 8px;padding:10px 12px;background:#F3E9E8;color:#000;border-left:2px solid #D3080C}";

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

const gcdsHintCss = ":host .hint{font-size:inherit;line-height:inherit;margin:0 0 14px}";

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

const gcdsLabelCss = ".sc-gcds-label-h label.sc-gcds-label{display:block;max-width:100%;font-size:inherit;font-weight:700;line-height:inherit;margin:0 0 4px;color:inherit}.sc-gcds-label-h label.hidden.sc-gcds-label{overflow:hidden;opacity:0;width:0;height:0;margin:0}.sc-gcds-label-h label.required.sc-gcds-label:before,.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{color:#D3080C}.sc-gcds-label-h label.required.sc-gcds-label:before{vertical-align:top;content:\"* \";margin-left:-0.67em}.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{margin:0 0 0 5px}";

let GcdsLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { hideLabel, labelFor, label, required } = this;
    return (h(Host, { id: `label-for-${labelFor}` }, h("label", { htmlFor: labelFor, class: `${hideLabel ? 'hidden' : ''} ${required ? 'required' : ''}` }, h("span", null, label), required ?
      h("strong", { class: "required" }, "(required)")
      : null)));
  }
  get el() { return getElement(this); }
};
GcdsLabel.style = gcdsLabelCss;

export { GcdsErrorMessage as gcds_error_message, GcdsHint as gcds_hint, GcdsLabel as gcds_label };
