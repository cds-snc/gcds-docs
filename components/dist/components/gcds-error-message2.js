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
        return (h(Host, { key: 'c772a009299851d08165315989a3459ba148c69f', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'bfd1698985476b6a0454dc97b5b13cc95d44e1b0', class: "error-message", role: "alert", "margin-bottom": "100" }, h("gcds-icon", { key: '1c2298cd79b7cf5ef2aee44db03adbdf0308e1ab', name: "triangle-exclamation", "margin-right": "50" }), h("strong", { key: '745e3eb8218f02a15832e5adc7d802473819c7cd' }, h("slot", { key: 'fd0412b7526c83be37b0302362611be4764f588d' })))));
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