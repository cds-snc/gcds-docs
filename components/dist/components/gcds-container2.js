import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsContainerCss = "@layer reset, default, border, centered, main, margin, padding, size;@layer reset{:host{display:block}:host .gcds-container{box-sizing:border-box;display:block;margin:0;padding:0}:host .gcds-container slot{display:initial}}@layer default{:host .gcds-container[class*=size]{width:var(--gcds-container-size-full)}}@layer border{:host .gcds-container.container-border{border:var(--gcds-container-border)}}@layer centered{:host .gcds-container.container-centered{margin-inline:auto!important}}@layer main{:host .gcds-container.container-main:not(.size-full){width:90%}}@layer margin{:host .gcds-container.m-0{margin:var(--gcds-container-spacing-0)}:host .gcds-container.m-25{margin:var(--gcds-container-spacing-25)}:host .gcds-container.m-50{margin:var(--gcds-container-spacing-50)}:host .gcds-container.m-75{margin:var(--gcds-container-spacing-75)}:host .gcds-container.m-100{margin:var(--gcds-container-spacing-100)}:host .gcds-container.m-125{margin:var(--gcds-container-spacing-125)}:host .gcds-container.m-150{margin:var(--gcds-container-spacing-150)}:host .gcds-container.m-175{margin:var(--gcds-container-spacing-175)}:host .gcds-container.m-200{margin:var(--gcds-container-spacing-200)}:host .gcds-container.m-225{margin:var(--gcds-container-spacing-225)}:host .gcds-container.m-250{margin:var(--gcds-container-spacing-250)}:host .gcds-container.m-300{margin:var(--gcds-container-spacing-300)}:host .gcds-container.m-350{margin:var(--gcds-container-spacing-350)}:host .gcds-container.m-400{margin:var(--gcds-container-spacing-400)}:host .gcds-container.m-450{margin:var(--gcds-container-spacing-450)}:host .gcds-container.m-500{margin:var(--gcds-container-spacing-500)}:host .gcds-container.m-550{margin:var(--gcds-container-spacing-550)}:host .gcds-container.m-600{margin:var(--gcds-container-spacing-600)}:host .gcds-container.m-650{margin:var(--gcds-container-spacing-650)}:host .gcds-container.m-700{margin:var(--gcds-container-spacing-700)}:host .gcds-container.m-750{margin:var(--gcds-container-spacing-750)}:host .gcds-container.m-800{margin:var(--gcds-container-spacing-800)}:host .gcds-container.m-850{margin:var(--gcds-container-spacing-850)}:host .gcds-container.m-900{margin:var(--gcds-container-spacing-900)}:host .gcds-container.m-950{margin:var(--gcds-container-spacing-950)}:host .gcds-container.m-1000{margin:var(--gcds-container-spacing-1000)}:host .gcds-container.m-1050{margin:var(--gcds-container-spacing-1050)}:host .gcds-container.m-1100{margin:var(--gcds-container-spacing-1100)}:host .gcds-container.m-1150{margin:var(--gcds-container-spacing-1150)}:host .gcds-container.m-1200{margin:var(--gcds-container-spacing-1200)}:host .gcds-container.m-1250{margin:var(--gcds-container-spacing-1250)}}@layer padding{:host .gcds-container.p-0{padding:var(--gcds-container-spacing-0)}:host .gcds-container.p-25{padding:var(--gcds-container-spacing-25)}:host .gcds-container.p-50{padding:var(--gcds-container-spacing-50)}:host .gcds-container.p-75{padding:var(--gcds-container-spacing-75)}:host .gcds-container.p-100{padding:var(--gcds-container-spacing-100)}:host .gcds-container.p-125{padding:var(--gcds-container-spacing-125)}:host .gcds-container.p-150{padding:var(--gcds-container-spacing-150)}:host .gcds-container.p-175{padding:var(--gcds-container-spacing-175)}:host .gcds-container.p-200{padding:var(--gcds-container-spacing-200)}:host .gcds-container.p-225{padding:var(--gcds-container-spacing-225)}:host .gcds-container.p-250{padding:var(--gcds-container-spacing-250)}:host .gcds-container.p-300{padding:var(--gcds-container-spacing-300)}:host .gcds-container.p-350{padding:var(--gcds-container-spacing-350)}:host .gcds-container.p-400{padding:var(--gcds-container-spacing-400)}:host .gcds-container.p-450{padding:var(--gcds-container-spacing-450)}:host .gcds-container.p-500{padding:var(--gcds-container-spacing-500)}:host .gcds-container.p-550{padding:var(--gcds-container-spacing-550)}:host .gcds-container.p-600{padding:var(--gcds-container-spacing-600)}:host .gcds-container.p-650{padding:var(--gcds-container-spacing-650)}:host .gcds-container.p-700{padding:var(--gcds-container-spacing-700)}:host .gcds-container.p-750{padding:var(--gcds-container-spacing-750)}:host .gcds-container.p-800{padding:var(--gcds-container-spacing-800)}:host .gcds-container.p-850{padding:var(--gcds-container-spacing-850)}:host .gcds-container.p-900{padding:var(--gcds-container-spacing-900)}:host .gcds-container.p-950{padding:var(--gcds-container-spacing-950)}:host .gcds-container.p-1000{padding:var(--gcds-container-spacing-1000)}:host .gcds-container.p-1050{padding:var(--gcds-container-spacing-1050)}:host .gcds-container.p-1100{padding:var(--gcds-container-spacing-1100)}:host .gcds-container.p-1150{padding:var(--gcds-container-spacing-1150)}:host .gcds-container.p-1200{padding:var(--gcds-container-spacing-1200)}:host .gcds-container.p-1250{padding:var(--gcds-container-spacing-1250)}}@layer size{:host .gcds-container.size-xl{max-width:var(--gcds-container-size-xl)}:host .gcds-container.size-lg{max-width:var(--gcds-container-size-lg)}:host .gcds-container.size-md{max-width:var(--gcds-container-size-md)}:host .gcds-container.size-sm{max-width:var(--gcds-container-size-sm)}:host .gcds-container.size-xs{max-width:var(--gcds-container-size-xs)}}";
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
        return (h(Host, { key: '1a0d300e83cc191fccd62309d50acf2651fcf0de' }, h(Tag, { key: '57ebd74a5c1ffce5d67f85cac933bf108f36b450', class: `
            gcds-container
            ${border ? 'container-border' : ''}
            ${centered ? 'container-centered' : ''}
            ${mainContainer ? 'container-main' : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", { key: '8ad3d9262e75693298a9a567aac2b9731c5ad96d' }))));
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