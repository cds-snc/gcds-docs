import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

function format(label) {
  return (label ? ` ${label}` : 'Fallback Button Label');
}

const myComponentCss = ":host{display:block}:host button{background-color:var(--gcds-colour-base-red-500);border:none;color:var(--gcds-colour-utils-white);cursor:pointer;padding:0.5rem 1rem}";

let MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getText() {
    return format(this.label);
  }
  render() {
    return h("button", null, this.getText());
  }
  static get style() { return myComponentCss; }
};

const GcDsButton = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"gc-ds-button",{"label":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      GcDsButton
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { GcDsButton, defineCustomElements };
