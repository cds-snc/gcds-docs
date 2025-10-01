import { Host, h } from "@stencil/core";
import { inheritAttributes } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * A fieldset is a group of multiple form components or elements.
 *
 * @slot default - Slot for the form elements.
 */
export class GcdsFieldset {
    constructor() {
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
    }
    validateLegendSize(newValue) {
        const values = ['h2', 'h3', 'h4', 'h5', 'h6'];
        if (!values.includes(newValue)) {
            console.error(`${i18n['en'].legendSizeError} | ${i18n['fr'].legendSizeError}`);
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
    static get is() { return "gcds-fieldset"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-fieldset.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-fieldset.css"]
        };
    }
    static get properties() {
        return {
            "hint": {
                "type": "string",
                "attribute": "hint",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Hint displayed below the legend."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "legend": {
                "type": "string",
                "attribute": "legend",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The title for the contents of the fieldset"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "legendSize": {
                "type": "string",
                "attribute": "legend-size",
                "mutable": true,
                "complexType": {
                    "original": "'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
                    "resolved": "\"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the appropriate font size for the fieldset legend."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "inheritedAttributes": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "legendSize",
                "methodName": "validateLegendSize"
            }];
    }
}
//# sourceMappingURL=gcds-fieldset.js.map
