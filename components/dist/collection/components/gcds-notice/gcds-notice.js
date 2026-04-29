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
        return (h(Host, { key: '03e09c9feca750421af5461d3530a3b459f8c0a1' }, this.validateRequiredProps() && (h("section", { key: 'a662553fe15c9b04690a5fa3b5904d7c8f04ebcf', class: `gcds-notice notice--role-${noticeRole}` }, h("gcds-icon", { key: '710bf5e2c0eddf52f765d1247b79147139a57f44', class: "notice__icon", size: "h4", name: iconRoles[noticeRole] }), h("div", { key: '148dc06af3014b33b0180865839cf920b18aabdd' }, h("gcds-heading", { key: '7f9c4947154fc5ecf7cf7023968da3d5e7c48c46', tag: noticeTitleTag, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, h("gcds-sr-only", { key: 'f954a5fd1b3846dfe82e69be40eac77cc10a363a', tag: "span" }, i18n[this.lang][noticeRole]), noticeTitle), h("slot", { key: 'ac208cbe2c085f09358cd043b5a925b881d21300' }))))));
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
