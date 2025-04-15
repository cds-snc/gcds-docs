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
        return (h(Host, { key: '3f2e26f31e50359a0e1726d5f714dd678005cf01', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'a8a20a16968e9a4578466f4fbeafb727077d7424', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '0ec129fc4a98c7232c2fd9a6fbbfa936f9ce471a', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: 'bcb3dd9ed9b3e4d31979abeb6a2772c7073a7918' }, h("slot", { key: 'f5b40163bd642d274789295c3b9cd84d27e157dd' })))));
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