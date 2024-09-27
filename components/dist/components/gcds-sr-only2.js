import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsSrOnlyCss = "@layer reset, default;@layer reset{:host slot{display:initial}}@layer default{:host{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}}";
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
        return (h(Host, { key: 'e86bd5be2d850425f77999ffd21f08ddbc06efce' }, h(Tag, { key: '70fbce245104348613399cda52a68aa2053e0ebd' }, h("slot", { key: '6c80f2f968eb292c4b551336930c58e5aae2fd56' }))));
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