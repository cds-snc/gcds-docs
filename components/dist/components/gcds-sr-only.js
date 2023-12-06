import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsSrOnlyCss = "@layer default{:host{display:block;height:0;margin:0;overflow:hidden;width:0}:host slot{display:initial}}";

const GcdsSrOnly$1 = /*@__PURE__*/ proxyCustomElement(class GcdsSrOnly extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return gcdsSrOnlyCss; }
}, [1, "gcds-sr-only"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-sr-only"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-sr-only":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsSrOnly$1);
      }
      break;
  } });
}

const GcdsSrOnly = GcdsSrOnly$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsSrOnly, defineCustomElement };

//# sourceMappingURL=gcds-sr-only.js.map