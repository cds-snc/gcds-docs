import { r as registerInstance, h, H as Host, g as getElement } from './index-8d185c1e.js';

const gcdsErrorMessageCss = ":host{display:inline-block}:host .error-message{font-size:inherit;line-height:inherit;margin:0 0 var(--gcds-spacing-300);padding:var(--gcds-spacing-200);background:var(--gcds-error-message-background);color:var(--gcds-error-message-text);border-left:2px solid var(--gcds-error-message-border)}";

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

const gcdsLabelCss = ".sc-gcds-label-h label.sc-gcds-label{display:block;max-width:100%;font-size:inherit;font-weight:var(--gcds-font-weights-bold);line-height:inherit;margin:0 0 var(--gcds-spacing-50);color:inherit}.sc-gcds-label-h label.hidden.sc-gcds-label{overflow:hidden;opacity:0;width:0;height:0;margin:0}.sc-gcds-label-h label.required.sc-gcds-label:before,.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{color:var(--gcds-label-destructive-text)}.sc-gcds-label-h label.required.sc-gcds-label:before{vertical-align:top;content:\"* \";margin-left:calc(var(--gcds-spacing-200) * -1)}.sc-gcds-label-h label.sc-gcds-label .required.sc-gcds-label{margin:0 0 0 var(--gcds-spacing-100)}";

let GcdsLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    // Define lang attribute
    if (!this.el.getAttribute('lang')) {
      if (document.documentElement.getAttribute('lang') == 'en' || !document.documentElement.getAttribute('lang')) {
        this.lang = 'en';
      }
      else {
        this.lang = 'fr';
      }
    }
    else if (this.el.getAttribute('lang') == 'en') {
      this.lang = 'en';
    }
    else {
      this.lang = 'fr';
    }
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
