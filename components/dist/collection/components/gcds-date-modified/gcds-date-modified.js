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
        return (h(Host, { key: 'f63e29a192d3a4d658ca78335b064e84e4143c5b' }, this.validateRequiredProps() && (h("dl", { key: '934f13de2562460ebb81b01b19a969c5fca4604c', class: "gcds-date-modified" }, h("dt", { key: '71a5ff2bdcf6c6d7aaf857d459b7c465d13a7ab3' }, h("gcds-text", { key: 'b8ad0f896154c73fff49eb8e5f7aabc82a8fb6f0', display: "inline", "margin-bottom": "0" }, type === 'version' ? i18n[lang].version : i18n[lang].date)), h("dd", { key: '8624f50eb70cdfd7a448c6e5755235c729fa00f2' }, h("gcds-text", { key: '97c82c7759ea15d85f92dd19ebd40c24d010df13', display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null)))))))));
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
