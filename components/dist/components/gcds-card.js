import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, l as logError } from './utils.js';
import { d as defineCustomElement$5 } from './gcds-icon2.js';
import { d as defineCustomElement$4 } from './gcds-link2.js';
import { d as defineCustomElement$3 } from './gcds-sr-only2.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

const I18N = {
  en: {
    tagged: 'Tagged:',
    badgeError: 'gcds-card: The badge attribute has a character limit of 20 characters.',
  },
  fr: {
    tagged: 'Baliser :',
    badgeError: 'gcds-card: L\'attribut badge a une limite de caractères de 20 caractères.',
  },
};

const gcdsCardCss = "@layer reset, default, link, hover, focus;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}:host slot{display:initial}}@layer default{:host .gcds-card{background-color:var(--gcds-card-background-color);box-shadow:var(--gcds-card-box-shadow);color:var(--gcds-card-color);display:block;height:100%;max-width:var(--gcds-card-max-width);overflow:hidden;padding:var(--gcds-card-padding);position:relative}:host .gcds-card .gcds-badge{background-color:var(--gcds-card-badge-background-color);left:0;padding:var(--gcds-card-badge-padding);position:absolute;top:0;text-wrap:nowrap}@media only screen and (width < 48em){:host .gcds-card .gcds-badge{padding:var(--gcds-card-badge-mobile-padding)}}:host .gcds-card .gcds-card__image{margin:var(--gcds-card-image-margin);width:100%}:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-desktop);width:fit-content}@media only screen and (width < 48em){:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-mobile)}}:host .gcds-card .gcds-card__title:has(+.gcds-card__description){margin:var(--gcds-card-title-margin)}:host .gcds-card .gcds-card__description{--gcds-text-size-body-desktop:var(--gcds-card-description-font-desktop)}@media only screen and (width < 48em){:host .gcds-card .gcds-card__description{font:var(--gcds-card-description-font-mobile)}}}@layer link{:host .gcds-card gcds-link::part(link):after{bottom:0;content:\"\";left:0;pointer-events:auto;position:absolute;right:0;top:0;z-index:1}}@layer hover{@media (hover:hover){:host .gcds-card:hover{background-color:var(--gcds-card-hover-background-color);box-shadow:var(--gcds-card-hover-box-shadow);cursor:pointer}}}@layer focus{:host .gcds-card:has(:focus-within){box-shadow:var(--gcds-card-focus-box-shadow);outline:var(--gcds-card-focus-outline);outline-offset:var(--gcds-card-focus-outline-offset)}:host gcds-link::part(link):focus{background-color:var(--gcds-card-focus-link-background-color);border:var(--gcds-card-focus-link-border);box-shadow:var(--gcds-card-focus-link-box-shadow);color:var(--gcds-card-focus-link-color);outline:var(--gcds-card-focus-link-outline);text-decoration:underline currentColor var(--gcds-card-focus-link-text-decoration-thickness)}}";
const GcdsCardStyle0 = gcdsCardCss;

const GcdsCard$1 = /*@__PURE__*/ proxyCustomElement(class GcdsCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.cardTitle = undefined;
        this.href = undefined;
        this.cardTitleTag = 'a';
        this.description = undefined;
        this.badge = undefined;
        this.imgSrc = undefined;
        this.imgAlt = undefined;
        this.lang = undefined;
        this.errors = [];
    }
    validateCardTitle() {
        if (!this.cardTitle || this.cardTitle.trim() == '') {
            this.errors.push('cardTitle');
        }
        else if (this.errors.includes('cardTitle')) {
            this.errors.splice(this.errors.indexOf('cardTitle'), 1);
        }
    }
    validateHref() {
        if (!this.href || this.href.trim() == '') {
            this.errors.push('href');
        }
        else if (this.errors.includes('href')) {
            this.errors.splice(this.errors.indexOf('href'), 1);
        }
    }
    validateBadge() {
        if (this.badge && this.badge.length > 20) {
            console.error(`${I18N['en'].badgeError} | ${I18N['fr'].badgeError}`);
            this.errors.push('badge');
        }
        else if (this.errors.includes('badge')) {
            this.errors.splice(this.errors.indexOf('badge'), 1);
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
    /*
     * Validate required properties
     */
    validateRequiredProps() {
        this.validateCardTitle();
        this.validateHref();
        if (this.errors.includes('href') || this.errors.includes('cardTitle')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateBadge();
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-card', this.errors, ['badge']);
        }
    }
    get renderDescription() {
        if (this.el.innerHTML.trim() != '') {
            return h("div", { class: "gcds-card__description" }, h("slot", null));
        }
        else if (this.description) {
            return h("div", { class: "gcds-card__description" }, h("gcds-text", { "margin-bottom": '0' }, this.description));
        }
        else {
            return null;
        }
    }
    render() {
        const { cardTitle, cardTitleTag, href, badge, imgSrc, imgAlt, renderDescription, lang, errors, } = this;
        const Element = cardTitleTag;
        const taggedAttr = {};
        if (badge) {
            taggedAttr['aria-describedby'] = 'gcds-badge';
        }
        if (this.validateRequiredProps()) {
            return (h(Host, { key: '1ca25f4b643e43fbfd1c44acc397921f30f32d8f' }, h("div", { key: 'ceb107cae158eaee0c3c545cd7f17b104742ac6a', class: "gcds-card" }, badge && !errors.includes('badge') && (h("gcds-text", { key: '2fdbe2d8fb6ee0526cc81a4a27bd43d8a4c05353', id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "small" }, h("strong", { key: '4f3abc137cc4825a59a50f992b97a2f9b2d2cfa4' }, h("gcds-sr-only", { key: '33371f0f907e41999a46fd7308717e33733c228a', tag: "span" }, I18N[lang].tagged), badge))), imgSrc && (h("img", { key: '8032c8b7a90609ed9730145fe639cbecaf146b9b', src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), Element != 'a' ? (h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), h("gcds-link", { href: href }, cardTitle))) : (h("gcds-link", Object.assign({ href: href, class: "gcds-card__title" }, taggedAttr), cardTitle)), renderDescription)));
        }
    }
    get el() { return this; }
    static get watchers() { return {
        "cardTitle": ["validateCardTitle"],
        "href": ["validateHref"],
        "badge": ["validateBadge"]
    }; }
    static get style() { return GcdsCardStyle0; }
}, [1, "gcds-card", {
        "cardTitle": [513, "card-title"],
        "href": [513],
        "cardTitleTag": [1, "card-title-tag"],
        "description": [513],
        "badge": [1537],
        "imgSrc": [513, "img-src"],
        "imgAlt": [513, "img-alt"],
        "lang": [32],
        "errors": [32]
    }, undefined, {
        "cardTitle": ["validateCardTitle"],
        "href": ["validateHref"],
        "badge": ["validateBadge"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-card", "gcds-icon", "gcds-link", "gcds-sr-only", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsCard$1);
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "gcds-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-sr-only":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsCard = GcdsCard$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsCard, defineCustomElement };

//# sourceMappingURL=gcds-card.js.map