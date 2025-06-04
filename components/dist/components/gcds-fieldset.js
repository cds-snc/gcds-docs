import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { i as inheritAttributes } from './utils.js';
import { d as defineCustomElement$3 } from './gcds-hint2.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

const I18N = {
  en: {
    legendSizeError: 'gcds-fieldset: Invalid size.',
  },
  fr: {
    legendSizeError: 'gcds-fieldset: Taille invalide.',
  },
};

const gcdsFieldsetCss = "@layer reset, default, size;@layer reset{:host{display:block}:host .gcds-fieldset{border:0;min-inline-size:auto;padding:0}:host legend{padding:0}:host slot{display:block;margin:0}}@layer default{.gcds-fieldset{color:var(--gcds-fieldset-default-text)}.gcds-fieldset legend{margin:var(--gcds-fieldset-legend-margin)!important}}@layer size{.gcds-fieldset legend.size-h2{font:var(--gcds-fieldset-legend-size-h2-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h2{font:var(--gcds-fieldset-legend-size-h2-mobile)}}.gcds-fieldset legend.size-h3{font:var(--gcds-fieldset-legend-size-h3-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h3{font:var(--gcds-fieldset-legend-size-h3-mobile)}}.gcds-fieldset legend.size-h4{font:var(--gcds-fieldset-legend-size-h4-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h4{font:var(--gcds-fieldset-legend-size-h4-mobile)}}.gcds-fieldset legend.size-h5{font:var(--gcds-fieldset-legend-size-h5-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h5{font:var(--gcds-fieldset-legend-size-h5-mobile)}}.gcds-fieldset legend.size-h6{font:var(--gcds-fieldset-legend-size-h6-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h6{font:var(--gcds-fieldset-legend-size-h6-mobile)}}}";
const GcdsFieldsetStyle0 = gcdsFieldsetCss;

const GcdsFieldset$1 = /*@__PURE__*/ proxyCustomElement(class GcdsFieldset extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hint = undefined;
        this.legend = undefined;
        this.legendSize = undefined;
        this.inheritedAttributes = {};
    }
    validateLegendSize(newValue) {
        const values = ['h2', 'h3', 'h4', 'h5', 'h6'];
        if (!values.includes(newValue)) {
            console.error(`${I18N['en'].legendSizeError} | ${I18N['fr'].legendSizeError}`);
        }
    }
    async componentWillLoad() {
        // Validate attributes and set defaults
        this.validateLegendSize(this.legendSize);
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    render() {
        const { hint, inheritedAttributes, legend, legendSize } = this;
        const fieldsetAttrs = Object.assign({}, inheritedAttributes);
        return (h(Host, { key: 'bdaa72f102073eece68355e87838668eaed71a23' }, h("fieldset", Object.assign({ key: 'b38edf3c89849186293ddce49df1a28b445798a6', class: "gcds-fieldset" }, fieldsetAttrs, { "aria-labelledby": hint ? `fieldset-legend fieldset-hint` : `fieldset-legend`, tabindex: "-1", ref: element => (this.shadowElement = element) }), h("legend", { key: 'dd2da6134098fe927b3f50303f374c7637c818de', id: "fieldset-legend", class: `size-${legendSize}` }, legend), hint ? (h("gcds-hint", { id: "fieldset-hint", "hint-id": "fieldset" }, hint)) : null, h("slot", { key: 'b916b63948f59a490d9dbc7d4b0598f270e13bb6' }))));
    }
    static get delegatesFocus() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "legendSize": ["validateLegendSize"]
    }; }
    static get style() { return GcdsFieldsetStyle0; }
}, [17, "gcds-fieldset", {
        "hint": [513],
        "legend": [513],
        "legendSize": [1025, "legend-size"],
        "inheritedAttributes": [32]
    }, undefined, {
        "legendSize": ["validateLegendSize"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-fieldset", "gcds-hint", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-fieldset":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsFieldset$1);
            }
            break;
        case "gcds-hint":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsFieldset = GcdsFieldset$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsFieldset, defineCustomElement };

//# sourceMappingURL=gcds-fieldset.js.map