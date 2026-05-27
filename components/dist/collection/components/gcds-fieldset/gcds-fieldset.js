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
        return (h(Host, { key: 'a9adbe5e6584cafdf5e5cc0702fc49b476f3d585' }, h("fieldset", Object.assign({ key: 'ff2446f9ee8b764e3f55a97a283ee25275a3963e', class: "gcds-fieldset" }, fieldsetAttrs, { "aria-labelledby": hint ? `fieldset-legend fieldset-hint` : `fieldset-legend`, tabindex: "-1", ref: element => (this.shadowElement = element) }), h("legend", { key: 'e6606a92fb27572d3fdaf056baf10a5353c985ef', id: "fieldset-legend", class: `size-${legendSize}` }, legend), hint ? (h("gcds-hint", { id: "fieldset-hint", "hint-id": "fieldset" }, hint)) : null, h("slot", { key: 'a02cd357d895eca26011029b93d17d78a82a94ba' }))));
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
                "reflect": true,
                "attribute": "hint"
            },
            "legend": {
                "type": "string",
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
                "reflect": true,
                "attribute": "legend"
            },
            "legendSize": {
                "type": "string",
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
                "reflect": false,
                "attribute": "legend-size"
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
