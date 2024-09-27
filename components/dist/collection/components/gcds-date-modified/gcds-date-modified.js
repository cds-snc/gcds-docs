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
        return (h(Host, { key: '6a35ef0fbee9deb64fb76fb14179eb7f92258671' }, h("dl", { key: '0b9057598c023a246c5f0afea8a7d8943cd947ef', class: "gcds-date-modified" }, h("dt", { key: 'ce426d33cbb358b0fd2fefe9328b2eebbb998196' }, h("gcds-text", { key: 'f11bc0d5d3737efa8ff9e3555668d854bb84e9ec', display: "inline", "margin-bottom": "0" }, type === 'version' ? i18n[lang].version : i18n[lang].date)), h("dd", { key: '4ef846ec165917abc28ba20e5343c513430d3da0' }, h("gcds-text", { key: '656ce0d42ed450dd316947c5473c3ea5703b8c76', display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null))))))));
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
