import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * Date modified is an indicator of the last update to a webpage or application.
 *
 * @slot default - Slot for the date/version number.
 */
export class GcdsDateModified {
    constructor() {
        /**
         * Props
         */
        /**
         * Set date modified type. Default is date.
         */
        this.type = 'date';
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
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
    validateChildren() {
        if (this.el.innerHTML.trim() == '') {
            this.errors.push('children');
        }
        else if (this.errors.includes('children')) {
            this.errors.splice(this.errors.indexOf('children'), 1);
        }
    }
    validateRequiredProps() {
        this.validateChildren();
        if (this.errors.includes('children')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-date-modified', this.errors);
        }
    }
    render() {
        const { lang, type } = this;
        return (h(Host, { key: '8d15998c9617fa0ac4bb3fdc3dae6fc6bdce9413' }, this.validateRequiredProps() && (h("dl", { key: '4de9578f1f96c965847214b82b2285303931c75f', class: "gcds-date-modified" }, h("dt", { key: '0c7d1942bbcd97af004c3c111abab9e9fa359e1a' }, h("gcds-text", { key: '918144a11135a26ebb0168f24c9d85492e9fcf4a', display: "inline", "margin-bottom": "0" }, type === 'version' ? i18n[lang].version : i18n[lang].date)), h("dd", { key: '62e867808d365eeaceea76b3d613c158014eb44a' }, h("gcds-text", { key: 'b352283de5aadff853688ff828cbd27364adc3b2', display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null)))))))));
    }
    static get is() { return "gcds-date-modified"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-date-modified.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-date-modified.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": true,
                "complexType": {
                    "original": "'date' | 'version'",
                    "resolved": "\"date\" | \"version\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set date modified type. Default is date."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'date'"
            }
        };
    }
    static get states() {
        return {
            "errors": {},
            "lang": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-date-modified.js.map
