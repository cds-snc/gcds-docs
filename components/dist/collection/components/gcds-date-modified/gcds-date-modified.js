import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsDateModified {
    constructor() {
        this.type = 'date';
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
    render() {
        const { lang, type } = this;
        return (h(Host, null, h("dl", { class: "gcds-date-modified" }, h("dt", null, h("gcds-text", { display: "inline", "margin-bottom": "0" }, type === 'version' ? i18n[lang].version : i18n[lang].date)), h("dd", null, h("gcds-text", { display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null))))))));
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
            "lang": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-date-modified.js.map
