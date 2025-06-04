import { Host, h } from "@stencil/core";
import { inheritAttributes } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsFieldset {
    constructor() {
        this.hint = undefined;
        this.legend = undefined;
        this.legendSize = undefined;
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
        return (h(Host, { key: 'bdaa72f102073eece68355e87838668eaed71a23' }, h("fieldset", Object.assign({ key: 'b38edf3c89849186293ddce49df1a28b445798a6', class: "gcds-fieldset" }, fieldsetAttrs, { "aria-labelledby": hint ? `fieldset-legend fieldset-hint` : `fieldset-legend`, tabindex: "-1", ref: element => (this.shadowElement = element) }), h("legend", { key: 'dd2da6134098fe927b3f50303f374c7637c818de', id: "fieldset-legend", class: `size-${legendSize}` }, legend), hint ? (h("gcds-hint", { id: "fieldset-hint", "hint-id": "fieldset" }, hint)) : null, h("slot", { key: 'b916b63948f59a490d9dbc7d4b0598f270e13bb6' }))));
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
                "attribute": "hint",
                "reflect": true
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
                "attribute": "legend",
                "reflect": true
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
                "attribute": "legend-size",
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
