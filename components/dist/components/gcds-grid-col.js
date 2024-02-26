import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsGridColCss = ":host{display:block;grid-column:span var(--gcds-grid-columns-default-base) /span var(--gcds-grid-columns-default-base)}:host .gcds-grid-col{box-sizing:border-box;display:block;height:100%;margin:0;padding:0;width:100%}@media screen and (min-width:48em){:host{grid-column:span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet)) /span var(---gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet))}}@media screen and (min-width:64em){:host{grid-column:span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop)) /span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop))}}";
const GcdsGridColStyle0 = gcdsGridColCss;

const GcdsGridCol$1 = /*@__PURE__*/ proxyCustomElement(class GcdsGridCol extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tag = 'div';
        this.tablet = 6;
        this.desktop = undefined;
    }
    validateTablet(newValue) {
        const values = [1, 2, 3, 4, 5, 6];
        if (!values.includes(newValue)) {
            this.tablet = 6;
        }
    }
    validateDesktop(newValue) {
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        if (this.desktop && !values.includes(newValue)) {
            this.desktop = 12;
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTablet(this.tablet);
        this.validateDesktop(this.desktop);
    }
    render() {
        const { desktop, tablet, tag } = this;
        const Tag = tag;
        function handleColSize() {
            const colSize = {};
            if (tablet) {
                colSize['--gcds-grid-col-tablet'] = tablet;
            }
            if (desktop) {
                colSize['--gcds-grid-col-desktop'] = desktop;
            }
            else if (tablet) {
                colSize['--gcds-grid-col-desktop'] = tablet * 2;
            }
            return colSize;
        }
        return (h(Host, { style: handleColSize() }, h(Tag, { class: "gcds-grid-col" }, h("slot", null))));
    }
    get el() { return this; }
    static get watchers() { return {
        "tablet": ["validateTablet"],
        "desktop": ["validateDesktop"]
    }; }
    static get style() { return GcdsGridColStyle0; }
}, [1, "gcds-grid-col", {
        "tag": [1],
        "tablet": [1026],
        "desktop": [1026]
    }, undefined, {
        "tablet": ["validateTablet"],
        "desktop": ["validateDesktop"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-grid-col"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-grid-col":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsGridCol$1);
            }
            break;
    } });
}

const GcdsGridCol = GcdsGridCol$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsGridCol, defineCustomElement };

//# sourceMappingURL=gcds-grid-col.js.map