import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsContainerCss = "@layer reset, default, border, centered, main, margin, padding, size;@layer reset{:host{display:block}:host .gcds-container{box-sizing:border-box;display:block;margin:0;padding:0}:host .gcds-container slot{display:initial}}@layer default{:host .gcds-container[class*=size]{width:var(--gcds-container-size-full)}}@layer border{:host .gcds-container.container-border{border:var(--gcds-container-border)}}@layer centered{:host .gcds-container.container-centered{margin-inline:auto!important}}@layer main{:host .gcds-container.container-main:not(.size-full){width:90%}}@layer margin{:host .gcds-container.m-0{margin:var(--gcds-container-spacing-0)}:host .gcds-container.m-50{margin:var(--gcds-container-spacing-50)}:host .gcds-container.m-100{margin:var(--gcds-container-spacing-100)}:host .gcds-container.m-150{margin:var(--gcds-container-spacing-150)}:host .gcds-container.m-200{margin:var(--gcds-container-spacing-200)}:host .gcds-container.m-250{margin:var(--gcds-container-spacing-250)}:host .gcds-container.m-300{margin:var(--gcds-container-spacing-300)}:host .gcds-container.m-400{margin:var(--gcds-container-spacing-400)}:host .gcds-container.m-450{margin:var(--gcds-container-spacing-450)}:host .gcds-container.m-500{margin:var(--gcds-container-spacing-500)}:host .gcds-container.m-550{margin:var(--gcds-container-spacing-550)}:host .gcds-container.m-600{margin:var(--gcds-container-spacing-600)}:host .gcds-container.m-700{margin:var(--gcds-container-spacing-700)}:host .gcds-container.m-800{margin:var(--gcds-container-spacing-800)}:host .gcds-container.m-900{margin:var(--gcds-container-spacing-900)}:host .gcds-container.m-1000{margin:var(--gcds-container-spacing-1000)}}@layer padding{:host .gcds-container.p-0{padding:var(--gcds-container-spacing-0)}:host .gcds-container.p-50{padding:var(--gcds-container-spacing-50)}:host .gcds-container.p-100{padding:var(--gcds-container-spacing-100)}:host .gcds-container.p-150{padding:var(--gcds-container-spacing-150)}:host .gcds-container.p-200{padding:var(--gcds-container-spacing-200)}:host .gcds-container.p-250{padding:var(--gcds-container-spacing-250)}:host .gcds-container.p-300{padding:var(--gcds-container-spacing-300)}:host .gcds-container.p-400{padding:var(--gcds-container-spacing-400)}:host .gcds-container.p-450{padding:var(--gcds-container-spacing-450)}:host .gcds-container.p-500{padding:var(--gcds-container-spacing-500)}:host .gcds-container.p-550{padding:var(--gcds-container-spacing-550)}:host .gcds-container.p-600{padding:var(--gcds-container-spacing-600)}:host .gcds-container.p-700{padding:var(--gcds-container-spacing-700)}:host .gcds-container.p-800{padding:var(--gcds-container-spacing-800)}:host .gcds-container.p-900{padding:var(--gcds-container-spacing-900)}:host .gcds-container.p-1000{padding:var(--gcds-container-spacing-1000)}}@layer size{:host .gcds-container.size-xl{max-width:var(--gcds-container-size-xl)}:host .gcds-container.size-lg{max-width:var(--gcds-container-size-lg)}:host .gcds-container.size-md{max-width:var(--gcds-container-size-md)}:host .gcds-container.size-sm{max-width:var(--gcds-container-size-sm)}:host .gcds-container.size-xs{max-width:var(--gcds-container-size-xs)}}";
const GcdsContainerStyle0 = gcdsContainerCss;

const GcdsContainer = /*@__PURE__*/ proxyCustomElement(class GcdsContainer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.border = false;
        this.centered = false;
        this.mainContainer = false;
        this.margin = undefined;
        this.padding = undefined;
        this.size = 'full';
        this.tag = 'div';
    }
    render() {
        const { border, centered, mainContainer, margin, padding, size, tag } = this;
        const Tag = tag;
        return (h(Host, null, h(Tag, { class: `
            gcds-container
            ${border ? 'container-border' : ''}
            ${centered ? 'container-centered' : ''}
            ${mainContainer ? 'container-main' : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", null))));
    }
    get el() { return this; }
    static get style() { return GcdsContainerStyle0; }
}, [1, "gcds-container", {
        "border": [4],
        "centered": [4],
        "mainContainer": [4, "main-container"],
        "margin": [1],
        "padding": [1],
        "size": [1],
        "tag": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-container"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsContainer);
            }
            break;
    } });
}

export { GcdsContainer as G, defineCustomElement as d };

//# sourceMappingURL=gcds-container2.js.map