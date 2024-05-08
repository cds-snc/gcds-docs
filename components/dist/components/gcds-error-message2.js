import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gcds-text2.js';

const gcdsErrorMessageCss = "@layer reset, default;@layer reset{:host{display:inline-block}:host slot{display:initial}}@layer default{:host .error-message{background:var(--gcds-error-message-background);border-inline-start:var(--gcds-error-message-border-width) solid var(--gcds-error-message-border-color);margin:var(--gcds-error-message-margin);padding:var(--gcds-error-message-padding)}}";
const GcdsErrorMessageStyle0 = gcdsErrorMessageCss;

const GcdsErrorMessage = /*@__PURE__*/ proxyCustomElement(class GcdsErrorMessage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.messageId = undefined;
    }
    render() {
        const { messageId } = this;
        return (h(Host, { id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { class: "error-message", role: "alert", "margin-bottom": "0" }, h("slot", null))));
    }
    get el() { return this; }
    static get style() { return GcdsErrorMessageStyle0; }
}, [1, "gcds-error-message", {
        "messageId": [1, "message-id"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-error-message", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-error-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsErrorMessage);
            }
            break;
        case "gcds-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { GcdsErrorMessage as G, defineCustomElement as d };

//# sourceMappingURL=gcds-error-message2.js.map