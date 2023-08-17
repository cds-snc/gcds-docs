import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsErrorMessageCss = ":host{display:inline-block}:host .error-message{background:var(--gcds-error-message-background);-webkit-border-start:var(--gcds-error-message-border-width) solid var(--gcds-error-message-border-color);border-inline-start:var(--gcds-error-message-border-width) solid var(--gcds-error-message-border-color);color:var(--gcds-error-message-text);font:var(--gcds-error-message-font);margin:var(--gcds-error-message-margin);padding:var(--gcds-error-message-padding)}";

const GcdsErrorMessage = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.messageId = undefined;
    this.message = undefined;
  }
  render() {
    const { messageId, message } = this;
    return (h(Host, { id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("p", { class: "error-message", role: "alert" }, message)));
  }
  get el() { return this; }
  static get style() { return gcdsErrorMessageCss; }
}, [1, "gcds-error-message", {
    "messageId": [1, "message-id"],
    "message": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-error-message"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-error-message":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsErrorMessage);
      }
      break;
  } });
}

export { GcdsErrorMessage as G, defineCustomElement as d };
