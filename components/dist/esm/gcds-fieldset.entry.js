import { r as registerInstance, h, a as Host, c as getElement } from './index-BMZbJN0q.js';
import { i as inheritAttributes } from './utils-BKOkUsrw.js';

const I18N = {
  en: {
    legendSizeError: 'gcds-fieldset: Invalid size.',
  },
  fr: {
    legendSizeError: 'gcds-fieldset: Taille invalide.',
  },
};

const gcdsFieldsetCss = "@layer reset, default, size;@layer reset{:host{display:block}:host .gcds-fieldset{border:0;min-inline-size:auto;padding:0}:host legend{padding:0}:host slot{display:block;margin:0}}@layer default{.gcds-fieldset{color:var(--gcds-fieldset-default-text)}.gcds-fieldset legend{margin:var(--gcds-fieldset-legend-margin)!important}}@layer size{.gcds-fieldset legend.size-h2{font:var(--gcds-fieldset-legend-size-h2-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h2{font:var(--gcds-fieldset-legend-size-h2-mobile)}}.gcds-fieldset legend.size-h3{font:var(--gcds-fieldset-legend-size-h3-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h3{font:var(--gcds-fieldset-legend-size-h3-mobile)}}.gcds-fieldset legend.size-h4{font:var(--gcds-fieldset-legend-size-h4-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h4{font:var(--gcds-fieldset-legend-size-h4-mobile)}}.gcds-fieldset legend.size-h5{font:var(--gcds-fieldset-legend-size-h5-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h5{font:var(--gcds-fieldset-legend-size-h5-mobile)}}.gcds-fieldset legend.size-h6{font:var(--gcds-fieldset-legend-size-h6-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h6{font:var(--gcds-fieldset-legend-size-h6-mobile)}}}";

const GcdsFieldset = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Set additional HTML attributes not available in component properties
         */
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
        return (h(Host, { key: '3cd874d549d298eaab3347e3a804d3bec7d1e4a9' }, h("fieldset", Object.assign({ key: '431a72699d4e23445c4f7e8e52422351ceb16e9f', class: "gcds-fieldset" }, fieldsetAttrs, { "aria-labelledby": hint ? `fieldset-legend fieldset-hint` : `fieldset-legend`, tabindex: "-1", ref: element => (this.shadowElement = element) }), h("legend", { key: '9a24d81b5304693d0aa32b4895b2505c0fb28ff9', id: "fieldset-legend", class: `size-${legendSize}` }, legend), hint ? (h("gcds-hint", { id: "fieldset-hint", "hint-id": "fieldset" }, hint)) : null, h("slot", { key: 'a820afec5165dd7175809e0c69269e99dfa85ec8' }))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "legendSize": ["validateLegendSize"]
    }; }
};
GcdsFieldset.style = gcdsFieldsetCss;

export { GcdsFieldset as gcds_fieldset };
//# sourceMappingURL=gcds-fieldset.entry.js.map

//# sourceMappingURL=gcds-fieldset.entry.js.map