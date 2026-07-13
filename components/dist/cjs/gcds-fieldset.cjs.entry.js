'use strict';

var index = require('./index-BsuxX3YX.js');
var utils = require('./utils-Dr9zAUnO.js');

const I18N = {
  en: {
    legendSizeError: 'gcds-fieldset: Invalid size.',
  },
  fr: {
    legendSizeError: 'gcds-fieldset: Taille invalide.',
  },
};

const gcdsFieldsetCss = () => `@layer reset, default, size;@layer reset{:host{display:block}:host .gcds-fieldset{border:0;min-inline-size:auto;padding:0}:host legend{padding:0}:host slot{display:block;margin:0}}@layer default{.gcds-fieldset{color:var(--gcds-fieldset-default-text)}.gcds-fieldset legend{margin:var(--gcds-fieldset-legend-margin)!important}}@layer size{.gcds-fieldset legend.size-h2{font:var(--gcds-fieldset-legend-size-h2-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h2{font:var(--gcds-fieldset-legend-size-h2-mobile)}}.gcds-fieldset legend.size-h3{font:var(--gcds-fieldset-legend-size-h3-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h3{font:var(--gcds-fieldset-legend-size-h3-mobile)}}.gcds-fieldset legend.size-h4{font:var(--gcds-fieldset-legend-size-h4-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h4{font:var(--gcds-fieldset-legend-size-h4-mobile)}}.gcds-fieldset legend.size-h5{font:var(--gcds-fieldset-legend-size-h5-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h5{font:var(--gcds-fieldset-legend-size-h5-mobile)}}.gcds-fieldset legend.size-h6{font:var(--gcds-fieldset-legend-size-h6-desktop)}@media only screen and (width < 48em){.gcds-fieldset legend.size-h6{font:var(--gcds-fieldset-legend-size-h6-mobile)}}}`;

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
        return (index.h(index.Host, { key: 'a9adbe5e6584cafdf5e5cc0702fc49b476f3d585' }, index.h("fieldset", Object.assign({ key: 'ff2446f9ee8b764e3f55a97a283ee25275a3963e', class: "gcds-fieldset" }, fieldsetAttrs, { "aria-labelledby": hint ? `fieldset-legend fieldset-hint` : `fieldset-legend`, tabindex: "-1", ref: element => (this.shadowElement = element) }), index.h("legend", { key: 'e6606a92fb27572d3fdaf056baf10a5353c985ef', id: "fieldset-legend", class: `size-${legendSize}` }, legend), hint ? (index.h("gcds-hint", { id: "fieldset-hint", "hint-id": "fieldset" }, hint)) : null, index.h("slot", { key: 'a02cd357d895eca26011029b93d17d78a82a94ba' }))));
    }
    static get delegatesFocus() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "legendSize": [{
                "validateLegendSize": 0
            }]
    }; }
};
GcdsFieldset.style = gcdsFieldsetCss();

exports.gcds_fieldset = GcdsFieldset;
