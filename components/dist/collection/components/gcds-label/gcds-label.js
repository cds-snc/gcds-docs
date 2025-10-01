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
        return (h(Host, { key: '74bd8cdab28f3e11ad1af0e5d90ffbcdfeca4f3b', id: `label-for-${labelFor}` }, h("label", { key: 'a99ff6d66462b03f1b40759ada8dfe53eaa985ce', htmlFor: labelFor, class: `gcds-label ${hideLabel ? 'label--hidden' : ''}` }, h("span", { key: '1740af0193beae308a1227d729493c257e6ee813' }, label), required ? (h("span", { "aria-hidden": "true", class: "label--required" }, "(", i18n[lang].required, ")")) : null)));
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
