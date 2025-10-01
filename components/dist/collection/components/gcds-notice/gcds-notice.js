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
        const valid = this.validateRequiredProps();
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
        return (h(Host, { key: '8a00f86f682e7a061c99658762079acc79d2277e' }, this.validateRequiredProps() && (h("section", { key: '04219293eafd3fe86c13826820644a02584a389d', class: `gcds-notice notice--type-${type}` }, h("gcds-icon", { key: '9d095dbcf44d3d39a408f55531164e76ae969b42', class: "notice__icon", size: "h4", name: iconTypes[type] }), h("div", { key: '525e51d6030072ee8b88a99e4e01078868e6df87' }, h("gcds-heading", { key: 'fd5adaf2b185a71d0d70e5174af1d590fb405c2c', tag: noticeTitleTag, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, h("gcds-sr-only", { key: 'b8955dccf72340580e7cf30ae2bba76b7704b50e', tag: "span" }, i18n[this.lang][type]), noticeTitle), h("slot", { key: '781c621945781994d22fc5c0e9974ac852e0fe39' }))))));
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
