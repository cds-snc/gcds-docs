import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gcds-icon2.js';
import { d as defineCustomElement$1 } from './gcds-text2.js';

const gcdsErrorMessageCss = "@layer reset, default;@layer reset{:host{display:inline-block}:host slot{display:initial}}@layer default{:host .error-message gcds-icon,:host .error-message::part(text){color:var(--gcds-error-message-text-color)}}";
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
        return (h(Host, { key: '3f2e26f31e50359a0e1726d5f714dd678005cf01', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'a8a20a16968e9a4578466f4fbeafb727077d7424', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: 'a54fc1a0bca6eba54fe1422f6210f42fb94ba348', name: "triangle-exclamation", "margin-right": "50" }), h("strong", { key: '64159579526bfb8df612dac7862048a447e30de2' }, h("slot", { key: '5c9a927de03b56f60b80fe97afe0de19f2e84ee4' })))));
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
    const components = ["gcds-error-message", "gcds-icon", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-error-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsErrorMessage);
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
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