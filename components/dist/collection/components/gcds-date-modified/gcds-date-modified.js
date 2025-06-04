import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsDateModified {
    constructor() {
        this.type = 'date';
        this.errors = [];
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
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-date-modified', this.errors);
        }
    }
    render() {
        const { lang, type } = this;
        return (h(Host, { key: 'ae1d5ceeefb2826a675edeca1f2fa0c81828b425' }, this.validateRequiredProps() && (h("dl", { key: '989b2ca91b4887f0a47c956c022550b475221a7d', class: "gcds-date-modified" }, h("dt", { key: '1d05ceb07362ad9b010769489ad3b0a057d9d754' }, h("gcds-text", { key: '61bb8fbe85f6614eeec0ebb9fabacc7b710dfc8d', display: "inline", "margin-bottom": "0" }, type === 'version' ? i18n[lang].version : i18n[lang].date)), h("dd", { key: '45cdfd7944ba0ca7ea4251d673eaf2f59f2346a0' }, h("gcds-text", { key: 'f2c0744b1a28ff5cd98ff8e3da8ce44384656b4d', display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null)))))))));
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
                "attribute": "type",
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
