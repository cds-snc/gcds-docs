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
        return (h(Host, { key: 'eb67660e9aef1823546fd67ffb4df34b28b2cadb', id: `hint-${hintId}` }, h("gcds-text", { key: 'f1252b21a52419614fe057aad4a8b117d07ae8b6', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '171998e99a00d21a3436f7dc118d580bb7d0fe77' }))));
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