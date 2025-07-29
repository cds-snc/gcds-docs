import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsNotice {
    constructor() {
        /**
         * States
         */
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
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
            success: 'checkmark-circle',
            warning: 'warning-triangle',
        };
        return (h(Host, { key: 'd05e01b3d51707d840c395fe2197831394438ed9' }, this.validateRequiredProps() && (h("section", { key: 'e6d7fdc879b8592431b100b59b77bb511d32e95e', class: `gcds-notice notice--type-${type}` }, h("gcds-icon", { key: '85ad98787913a52dc462367ae453b95743623066', class: "notice__icon", size: "h4", name: iconTypes[type] }), h("div", { key: 'a44107281bb95d4a6943dbeb6b38a6603a427a0b' }, h("gcds-heading", { key: 'ec0805c7006d48dcefaf4b91dcf6d5bed1a7ea68', tag: noticeTitleTag, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, h("gcds-sr-only", { key: '35352ad8a3a0ce3f9ace2314c269fc71f6657ffa', tag: "span" }, i18n[this.lang][type]), noticeTitle), h("slot", { key: '8c59481347d56e817be55b566a0c8a1121753c41' }))))));
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
                "attribute": "type",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "noticeTitle": {
                "type": "string",
                "attribute": "notice-title",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "noticeTitleTag": {
                "type": "string",
                "attribute": "notice-title-tag",
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
                "getter": false,
                "setter": false,
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
