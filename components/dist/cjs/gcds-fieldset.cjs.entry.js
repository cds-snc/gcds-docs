'use strict';

var index = require('./index-DPc_YL85.js');
var utils = require('./utils-BMTdBAFF.js');

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
        index.registerInstance(this, hostRef);
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
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
    }
    render() {
        const { hint, inheritedAttributes, legend, legendSize } = this;
        const fieldsetAttrs = Object.assign({}, inheritedAttributes);
        return (index.h(index.Host, { key: 'dd720d61b6783589d04ed65873ff637990e95dea' }, index.h("fieldset", Object.assign({ key: 'a9540b09ad410113059c2840f9720185e0fb00ff', class: "gcds-fieldset" }, fieldsetAttrs, { "aria-labelledby": hint ? `fieldset-legend fieldset-hint` : `fieldset-legend`, tabindex: "-1", ref: element => (this.shadowElement = element) }), index.h("legend", { key: '9a1769bf1ce495e521d658914a837a09de0d23fa', id: "fieldset-legend", class: `size-${legendSize}` }, legend), hint ? (index.h("gcds-hint", { id: "fieldset-hint", "hint-id": "fieldset" }, hint)) : null, index.h("slot", { key: '087bf52d9872db591bced7ebefbf1252f4e270d2' }))));
    }
    static get delegatesFocus() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "legendSize": ["validateLegendSize"]
    }; }
};
GcdsFieldset.style = gcdsFieldsetCss;

exports.gcds_fieldset = GcdsFieldset;
//# sourceMappingURL=gcds-fieldset.entry.cjs.js.map

//# sourceMappingURL=gcds-fieldset.cjs.entry.js.map