import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsSrOnlyCss = "@layer default{:host{display:block;height:0;margin:0;overflow:hidden;width:0}:host slot{display:initial}}";
const GcdsSrOnlyStyle0 = gcdsSrOnlyCss;

const GcdsSrOnly = /*@__PURE__*/ proxyCustomElement(class GcdsSrOnly extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return GcdsSrOnlyStyle0; }
}, [1, "gcds-sr-only"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-sr-only"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-sr-only":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsSrOnly);
            }
            break;
    } });
}

export { GcdsSrOnly as G, defineCustomElement as d };

//# sourceMappingURL=gcds-sr-only2.js.map