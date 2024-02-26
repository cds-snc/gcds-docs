import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsLabel {
    constructor() {
        this.onClick = (ev) => {
            if (ev.srcElement.tagName == 'GCDS-LABEL') {
                this.clickEl();
            }
        };
        this.hideLabel = undefined;
        this.label = undefined;
        this.labelFor = undefined;
        this.required = undefined;
        this.lang = undefined;
    }
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
    /**
     * Click label if host element is clicked
     */
    clickEl() {
        if (this.focusEl) {
            this.focusEl.click();
        }
    }
    render() {
        const { hideLabel, labelFor, label, required, lang } = this;
        return (h(Host, { id: `label-for-${labelFor}`, onClick: this.onClick }, h("label", { htmlFor: labelFor, class: `gcds-label ${hideLabel ? 'label--hidden' : ''}`, ref: focusEl => (this.focusEl = focusEl) }, h("span", null, label), required ? (h("span", { "aria-hidden": "true", class: "label--required" }, "(", i18n[lang].required, ")")) : null)));
    }
    static get is() { return "gcds-label"; }
    static get encapsulation() { return "scoped"; }
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
                "attribute": "hide-label",
                "reflect": false
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
                "attribute": "label",
                "reflect": false
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
                "attribute": "label-for",
                "reflect": false
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
                "attribute": "required",
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
