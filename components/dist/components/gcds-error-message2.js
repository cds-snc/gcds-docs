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
        return (h(Host, { key: 'a222583eefb309d128159fc38e743d2b0881a38f', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'df574c45206ce2456d7a791068825e2e1e54a7ca', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '369e900ba0e1134abebd736ab6e0338f93b817ba', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: 'd61fa293a5660c17a60eed61906e45d4aa938e00' }, h("slot", { key: '22ddfe43ba49f79f5034128c46debcae3c8c6a61' })))));
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