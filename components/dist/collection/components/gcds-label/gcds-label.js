import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsLabel {
    /*
     * Observe lang attribute change
     */
    updateLang() {
        const observer = new MutationObserver(mutations => {
            if (mutations[0].oldValue != this.el.lang) {
                this.lang = this.el.lang;
            }
        });
        observer.observe(this.el, observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { hideLabel, labelFor, label, required, lang } = this;
        return (h(Host, { key: 'ffac8e66f0bb20913277b17a04080913cc661f84', id: `label-for-${labelFor}` }, h("label", { key: 'b663e88ae67734de47f91cae325f0ebdfa41bbcc', htmlFor: labelFor, class: `gcds-label ${hideLabel ? 'label--hidden' : ''}` }, h("span", { key: 'cf9369de0b3f91bfb67087b14969e0c137cf3f99' }, label), required ? (h("span", { "aria-hidden": "true", class: "label--required" }, "(", i18n[lang].required, ")")) : null)));
    }
    static get is() { return "gcds-label"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-label.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-label.css"]
        };
    }
    static get properties() {
        return {
            "hideLabel": {
                "type": "boolean",
                "attribute": "hide-label",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies if the label is hidden or not."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Form field label"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelFor": {
                "type": "string",
                "attribute": "label-for",
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
                    "text": "Defines the label's for attribute."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies if a form field is required or not."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "lang": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-label.js.map
