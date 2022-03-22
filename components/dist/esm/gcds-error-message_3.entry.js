import { r as registerInstance, h, H as Host, g as getElement } from './index-44aa51bb.js';

const gcdsErrorMessageCss = ":host .error-message{margin:0 0 10px;padding:.2em .6em .3em;background:var(--gcds-colour-base-white-red-500);color:var(--gcds-colour-utils-black);border-left:4px solid var(--gcds-colour-base-red-dark-500)}";

let GcdsErrorMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { messageId, message } = this;
    return (h(Host, { id: `error-message-${messageId}` }, h("p", { class: "error-message", role: "alert" }, h("strong", null, message))));
  }
  get el() { return getElement(this); }
};
GcdsErrorMessage.style = gcdsErrorMessageCss;

const gcdsHintCss = ":host .hint{margin:0 0 10px}";

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

const gcdsLabelCss = ".sc-gcds-label-h label.sc-gcds-label{display:block;max-width:100%;font-family:var(--gcds-font-family-default);font-size:var(--gcds-font-size-400);font-weight:var(--gcds-font-weight-bold);margin:0 0 5px;color:var(--gcds-colour-base-grey-dark-500)}.sc-gcds-label-h label.hidden.sc-gcds-label{overflow:hidden;opacity:0;width:0;height:0;margin:0}.sc-gcds-label-h label.required.sc-gcds-label:before,.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{color:var(--gcds-colour-base-red-dark-500)}.sc-gcds-label-h label.required.sc-gcds-label:before{vertical-align:top;content:\"* \";margin-left:-0.67em}.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{margin:0 0 0 5px}";

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
