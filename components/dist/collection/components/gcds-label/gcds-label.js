import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * Label for form fields, providing accessibility and context for users.
 *
 * @slot - Slot for the label content.
 */
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
        return (h(Host, { key: '767bb6fb7624e2bf10eb66ac8c91e7af80d33305', id: `label-for-${labelFor}` }, h("label", { key: '0cfa64b20e425fe7db457bbab0f364f8348adcd8', htmlFor: labelFor, class: `gcds-label ${hideLabel ? 'label--hidden' : ''}` }, h("span", { key: '2b10ced874e632d6f340946639fd54c9cfb33443' }, label), required ? (h("span", { "aria-hidden": "true", class: "label--required" }, "(", i18n[lang].required, ")")) : null)));
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
                "reflect": false,
                "attribute": "hide-label"
            },
            "label": {
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
                    "text": "Form field label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "labelFor": {
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
                    "text": "Defines the label's for attribute."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label-for"
            },
            "required": {
                "type": "boolean",
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
                "reflect": false,
                "attribute": "required"
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
