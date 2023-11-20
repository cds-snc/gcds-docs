import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsBreadcrumbsItemCss = ":host(.gcds-breadcrumbs-item){display:inline-block;padding:var(--gcds-breadcrumbs-item-padding)!important;position:relative}:host(.gcds-breadcrumbs-item):before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"12\" viewBox=\"0 0 8 14\"><path fill=\"26374a\" d=\"M7.7 6.3c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L5.6 7 .3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0l6 6z\"/></svg>');left:var(--gcds-breadcrumbs-item-arrow-left);position:absolute;top:var(--gcds-breadcrumbs-item-arrow-top)}:host(.gcds-breadcrumbs-item) a{color:var(--gcds-breadcrumbs-default-text);display:inline-block;margin:var(--gcds-breadcrumbs-item-margin);outline:0;padding:var(--gcds-breadcrumbs-item-link-padding);-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-breadcrumbs-default-decoration-thickness);text-underline-offset:.2em;-webkit-transition:background .15s ease-in-out,color .15s ease-in-out;transition:background .15s ease-in-out,color .15s ease-in-out;white-space:normal}:host(.gcds-breadcrumbs-item) a slot{display:block}:host(:focus) a{background-color:var(--gcds-breadcrumbs-focus-background);border-radius:var(--gcds-breadcrumbs-focus-border-radius);-webkit-box-shadow:var(--gcds-breadcrumbs-focus-box-shadow);box-shadow:var(--gcds-breadcrumbs-focus-box-shadow);color:var(--gcds-breadcrumbs-focus-text);outline:var(--gcds-breadcrumbs-focus-outline);outline-offset:var(--gcds-breadcrumbs-focus-outline-offset);text-decoration:none}:host(:not(:focus)) a:hover{color:var(--gcds-breadcrumbs-hover-text);text-decoration-thickness:var(--gcds-breadcrumbs-hover-decoration-thickness)}";

const GcdsBreadcrumbsItem = /*@__PURE__*/ proxyCustomElement(class GcdsBreadcrumbsItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.href = undefined;
  }
  render() {
    const { href } = this;
    return (h(Host, { role: "listitem", class: "gcds-breadcrumbs-item" }, h("a", { href: href }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return gcdsBreadcrumbsItemCss; }
}, [1, "gcds-breadcrumbs-item", {
    "href": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-breadcrumbs-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-breadcrumbs-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsBreadcrumbsItem);
      }
      break;
  } });
}

export { GcdsBreadcrumbsItem as G, defineCustomElement as d };

//# sourceMappingURL=gcds-breadcrumbs-item2.js.map