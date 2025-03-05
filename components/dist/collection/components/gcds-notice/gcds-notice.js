import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsNotice {
    constructor() {
        this.type = undefined;
        this.noticeTitle = undefined;
        this.noticeTitleTag = undefined;
        this.errors = [];
        this.lang = undefined;
    }
    validateType() {
        if (!this.type) {
            this.errors.push('type');
        }
        else if (this.errors.includes('type')) {
            this.errors.splice(this.errors.indexOf('type'), 1);
        }
    }
    validateNoticeTitle() {
        if (!this.noticeTitle || this.noticeTitle === '') {
            this.errors.push('noticeTitle');
        }
        else if (this.errors.includes('noticeTitle')) {
            this.errors.splice(this.errors.indexOf('noticeTitle'), 1);
        }
    }
    validateNoticeTitleTag() {
        if (!this.noticeTitleTag ||
            !['h2', 'h3', 'h4', 'h5'].includes(this.noticeTitleTag)) {
            this.errors.push('noticeTitleTag');
        }
        else if (this.errors.includes('noticeTitleTag')) {
            this.errors.splice(this.errors.indexOf('noticeTitleTag'), 1);
        }
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
        this.validateNoticeTitle();
        this.validateType();
        this.validateNoticeTitleTag();
        this.validateChildren();
        if (this.errors.includes('type') ||
            this.errors.includes('noticeTitle') ||
            this.errors.includes('noticeTitleTag') ||
            this.errors.includes('children')) {
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
            logError('gcds-notice', this.errors);
        }
    }
    render() {
        const { type, noticeTitle, noticeTitleTag } = this;
        const iconTypes = {
            danger: 'exclamation-circle',
            info: 'info-circle',
            success: 'check-circle',
            warning: 'exclamation-triangle',
        };
        return (h(Host, { key: 'cc0b6ce484789c05fd099b7e0c0b94396bbf5cc9' }, this.validateRequiredProps() && (h("section", { key: '3643290523b2d266a8ac0a8422652782a5a1a7ca', class: `gcds-notice notice--type-${type}` }, h("gcds-icon", { key: '2be06da9bca52fa70ded02fad226c2c434186731', class: "notice__icon", size: "h4", name: iconTypes[type] }), h("div", { key: '2da5c9fe4808e1a5b79f7dfd04ca24b2cb3519e3' }, h("gcds-heading", { key: '733544e235c0832101c79c82a140d42bb6eb783a', tag: noticeTitleTag, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, h("gcds-sr-only", { key: '34c677889a234722b2e672ebae4b700801dc8f67', tag: "span" }, i18n[this.lang][type]), noticeTitle), h("slot", { key: 'bdb1a6843f3386d766f241a62edfea9d06e3fad6' }))))));
    }
    static get is() { return "gcds-notice"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-notice.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-notice.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'danger' | 'info' | 'success' | 'warning'",
                    "resolved": "\"danger\" | \"info\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set notice type."
                },
                "attribute": "type",
                "reflect": false
            },
            "noticeTitle": {
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
                    "text": "Set the notice title."
                },
                "attribute": "notice-title",
                "reflect": false
            },
            "noticeTitleTag": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'h2' | 'h3' | 'h4' | 'h5'",
                    "resolved": "\"h2\" | \"h3\" | \"h4\" | \"h5\"",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The notice title tag property specifies the HTML heading element for the title.\nThis property does not modify the font size. It is used to assign the heading level\nin order to maintain heading hierarchy and accessibility for assistive technologies."
                },
                "attribute": "notice-title-tag",
                "reflect": false
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
//# sourceMappingURL=gcds-notice.js.map
