import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gcds-text2.js';

const gcdsHintCss = "@layer reset, default;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-hint,:host gcds-text::part(text){color:var(--gcds-hint-text)}:host .gcds-hint{margin:var(--gcds-hint-margin)}}";
const GcdsHintStyle0 = gcdsHintCss;

const GcdsHint = /*@__PURE__*/ proxyCustomElement(class GcdsHint extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hintId = undefined;
    }
    render() {
        const { hintId } = this;
        return (h(Host, { key: '8e9af18f71f043062a78de179236357539afe979', id: `hint-${hintId}` }, h("gcds-text", { key: 'bac3fc4edbbb00b2191989bc155636aa0ab6c68c', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '1fdb52992e56952156704305469a85e30b2bb398' }))));
    }
    get el() { return this; }
    static get style() { return GcdsHintStyle0; }
}, [1, "gcds-hint", {
        "hintId": [1, "hint-id"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-hint", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-hint":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsHint);
            }
            break;
        case "gcds-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { GcdsHint as G, defineCustomElement as d };

//# sourceMappingURL=gcds-hint2.js.map