import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gcds-icon2.js';
import { d as defineCustomElement$1 } from './gcds-link2.js';

const gcdsBreadcrumbsItemCss = "@layer reset, default, hover, focus, mobile;@layer reset{:host(.gcds-breadcrumbs-item){display:inline-block}:host(.gcds-breadcrumbs-item) gcds-link::part(link){display:inline-block;white-space:normal}:host(.gcds-breadcrumbs-item) slot{display:block}}@layer default{:host(.gcds-breadcrumbs-item){padding:var(--gcds-breadcrumbs-item-padding)!important;position:relative}:host(.gcds-breadcrumbs-item):before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"12\" viewBox=\"0 0 8 14\"><path fill=\"26374a\" d=\"M7.7 6.3c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L5.6 7 .3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0z\"/></svg>');left:var(--gcds-breadcrumbs-item-arrow-left);position:absolute;top:var(--gcds-breadcrumbs-item-arrow-top)}:host(.gcds-breadcrumbs-item) gcds-link::part(link){margin:var(--gcds-breadcrumbs-item-margin);padding:var(--gcds-breadcrumbs-item-link-padding)}}@layer mobile{@media screen and (max-width:30rem){:host(.gcds-breadcrumbs-item){display:block}:host(.gcds-breadcrumbs-item):before{top:var(--gcds-breadcrumbs-mobile-item-arrow-top)}:host(.gcds-breadcrumbs-item) gcds-link::part(link){margin:var(--gcds-breadcrumbs-mobile-item-margin);padding:var(--gcds-breadcrumbs-mobile-item-padding)}}}";
const GcdsBreadcrumbsItemStyle0 = gcdsBreadcrumbsItemCss;

const GcdsBreadcrumbsItem = /*@__PURE__*/ proxyCustomElement(class GcdsBreadcrumbsItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.href = undefined;
    }
    render() {
        const { href } = this;
        return (h(Host, { role: "listitem", class: "gcds-breadcrumbs-item" }, h("gcds-link", { size: "regular", href: href }, h("slot", null))));
    }
    get el() { return this; }
    static get style() { return GcdsBreadcrumbsItemStyle0; }
}, [1, "gcds-breadcrumbs-item", {
        "href": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-breadcrumbs-item", "gcds-icon", "gcds-link"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-breadcrumbs-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsBreadcrumbsItem);
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "gcds-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { GcdsBreadcrumbsItem as G, defineCustomElement as d };

//# sourceMappingURL=gcds-breadcrumbs-item2.js.map