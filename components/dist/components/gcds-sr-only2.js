import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsSrOnlyCss = "@layer reset, default;@layer reset{:host slot{display:initial}}@layer default{:host{display:block;height:0;margin:0;overflow:hidden;width:0}}";
const GcdsSrOnlyStyle0 = gcdsSrOnlyCss;

const GcdsSrOnly = /*@__PURE__*/ proxyCustomElement(class GcdsSrOnly extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tag = 'p';
    }
    validateTag(newValue) {
        const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
        if (!values.includes(newValue)) {
            this.tag = 'p';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTag(this.tag);
    }
    render() {
        const Tag = this.tag;
        return (h(Host, null, h(Tag, null, h("slot", null))));
    }
    static get watchers() { return {
        "tag": ["validateTag"]
    }; }
    static get style() { return GcdsSrOnlyStyle0; }
}, [1, "gcds-sr-only", {
        "tag": [1025]
    }, undefined, {
        "tag": ["validateTag"]
    }]);
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