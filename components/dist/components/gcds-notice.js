import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, l as logError } from './utils.js';
import { d as defineCustomElement$4 } from './gcds-heading2.js';
import { d as defineCustomElement$3 } from './gcds-icon2.js';
import { d as defineCustomElement$2 } from './gcds-sr-only2.js';

const I18N = {
  en: {
    success: 'Success: ',
    info: 'Information: ',
    warning: 'Warning: ',
    danger: 'Danger: '
  },
  fr: {
    success: 'Succès : ',
    info: 'Information : ',
    warning: 'Avertissement : ',
    danger: 'Danger : '
  },
};

const gcdsNoticeCss = "@layer reset, default, type;@layer reset{:host{display:block}:host .gcds-notice{box-sizing:border-box;text-align:left}:host .gcds-notice slot{display:initial}}@layer default{:host .gcds-notice{color:var(--gcds-notice-text);display:grid;gap:var(--gcds-notice-icon-gap);grid-template-columns:var(--gcds-notice-icon-width) auto}:host .gcds-notice .notice__heading{--gcds-heading-h2-desktop:var(\n        --gcds-notice-content-heading-font-desktop\n      );--gcds-heading-h2-mobile:var(--gcds-notice-content-heading-font-mobile);--gcds-heading-h4-desktop:var(\n        --gcds-notice-content-heading-font-desktop\n      );--gcds-heading-h4-mobile:var(--gcds-notice-content-heading-font-mobile);--gcds-heading-h5-desktop:var(\n        --gcds-notice-content-heading-font-desktop\n      );--gcds-heading-h5-mobile:var(--gcds-notice-content-heading-font-mobile);margin-block-start:var(--gcds-notice-content-heading-margin-block-start-desktop)}@media only screen and (width < 48em){:host .gcds-notice .notice__heading{margin-block-start:var(--gcds-notice-content-heading-margin-block-start-mobile)}}:host .gcds-notice .notice__icon{margin:var(--gcds-notice-icon-margin)}:host .gcds-notice .notice__icon:before{background-color:currentColor;content:\"\";display:block;height:var(--gcds-notice-icon-before-height);margin:0 auto;width:var(--gcds-notice-border-width)}:host .gcds-notice .notice__icon:after{background-color:currentColor;content:\"\";display:block;height:var(--gcds-notice-icon-after-height);margin:0 auto;width:var(--gcds-notice-border-width)}:host .gcds-notice ::slotted(*){font:var(--gcds-notice-content-slotted-font-desktop);margin-block-start:0}@media only screen and (width < 48em){:host .gcds-notice ::slotted(*){font:var(--gcds-notice-content-slotted-font-mobile)}}:host .gcds-notice ::slotted(:last-child){margin-block-end:0}:host .gcds-notice ::slotted(:not(:last-child)){margin-block-end:var(--gcds-notice-content-slotted-margin)}:host .gcds-notice ::slotted(ol),:host .gcds-notice ::slotted(ul){margin-inline-start:var(--gcds-notice-content-slotted-list-margin);padding:0}}@layer type{:host .gcds-notice.notice--type-danger .notice__icon{color:var(--gcds-notice-danger-text)}:host .gcds-notice.notice--type-info .notice__icon{color:var(--gcds-notice-info-text)}:host .gcds-notice.notice--type-success .notice__icon{color:var(--gcds-notice-success-text)}:host .gcds-notice.notice--type-warning .notice__icon{color:var(--gcds-notice-warning-text)}}";
const GcdsNoticeStyle0 = gcdsNoticeCss;

const GcdsNotice$1 = /*@__PURE__*/ proxyCustomElement(class GcdsNotice extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
            success: 'checkmark-circle',
            warning: 'warning-triangle',
        };
        return (h(Host, { key: '7d04d0e19067c8a1f0f6bef1ba21f9bb6e05b379' }, this.validateRequiredProps() && (h("section", { key: '92300518f0f6a084603043451272705d18f32b10', class: `gcds-notice notice--type-${type}` }, h("gcds-icon", { key: 'd08a464788d4ab04e25aaefd883510b178580b3e', class: "notice__icon", size: "h4", name: iconTypes[type] }), h("div", { key: 'beb615aef718ad429868df2dfca31d997b08f862' }, h("gcds-heading", { key: '139221a5b81115d19700a0e3fef7bbb1386d2497', tag: noticeTitleTag, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, h("gcds-sr-only", { key: 'cec841b35332c0f7cf4cd68a7c9a6a387c87165b', tag: "span" }, I18N[this.lang][type]), noticeTitle), h("slot", { key: 'e24597dad7914e2c0cf3ad53f4aee87994a6d72f' }))))));
    }
    get el() { return this; }
    static get style() { return GcdsNoticeStyle0; }
}, [1, "gcds-notice", {
        "type": [1],
        "noticeTitle": [1, "notice-title"],
        "noticeTitleTag": [1, "notice-title-tag"],
        "errors": [32],
        "lang": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-notice", "gcds-heading", "gcds-icon", "gcds-sr-only"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-notice":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsNotice$1);
            }
            break;
        case "gcds-heading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-sr-only":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsNotice = GcdsNotice$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsNotice, defineCustomElement };

//# sourceMappingURL=gcds-notice.js.map