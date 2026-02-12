import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * The notice is a short, prominent message that’s part of the page content.
 *
 * @slot default - Slot for the main content of the notice.
 */
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
    validateNoticeRole() {
        if (!this.noticeRole) {
            this.errors.push('noticeRole');
        }
        else if (this.errors.includes('noticeRole')) {
            this.errors.splice(this.errors.indexOf('noticeRole'), 1);
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
        this.validateNoticeRole();
        this.validateNoticeTitleTag();
        this.validateChildren();
        if (this.errors.includes('noticeRole') ||
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
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-notice', this.errors);
        }
    }
    render() {
        const { noticeRole, noticeTitle, noticeTitleTag } = this;
        const iconRoles = {
            danger: 'exclamation-circle',
            info: 'info-circle',
            success: 'checkmark-circle',
            warning: 'warning-triangle',
        };
        return (h(Host, { key: 'eeefda750a72d686551bf8fb9d19e01041443383' }, this.validateRequiredProps() && (h("section", { key: '6e02932b54e765e2209dbfce48d195cf49c18b71', class: `gcds-notice notice--role-${noticeRole}` }, h("gcds-icon", { key: '3dc298767a00715811ccec1f9c372acf919fd3d4', class: "notice__icon", size: "h4", name: iconRoles[noticeRole] }), h("div", { key: '214a8893e623fa271f673cb79df6a732a6c72964' }, h("gcds-heading", { key: 'ea7a87df48aa86ca8c85128dfcdd49ea39430217', tag: noticeTitleTag, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, h("gcds-sr-only", { key: '517fd7249667e0f971b009f65b070dc11440d69e', tag: "span" }, i18n[this.lang][noticeRole]), noticeTitle), h("slot", { key: 'fdf48fa2daceb1af2f8058e53e4a3d00d6424444' }))))));
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
            "noticeRole": {
                "type": "string",
                "attribute": "notice-role",
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
                    "text": "The notice role property specifies the style of notice to be displayed."
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
