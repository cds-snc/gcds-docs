import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$5 } from './gcds-icon2.js';
import { d as defineCustomElement$4 } from './gcds-link2.js';
import { d as defineCustomElement$3 } from './gcds-sr-only2.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

const I18N = {
  en: {
    tagged: 'Tagged:',
  },
  fr: {
    tagged: 'Baliser :',
  },
};

const gcdsCardCss = "@layer reset, default, slot, link, hover;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}:host slot{display:initial}}@layer default{:host .gcds-card{background-color:var(--gcds-card-background-color);border:var(--gcds-card-border);border-radius:var(--gcds-card-border-radius);color:var(--gcds-card-color);display:block;height:100%;padding:var(--gcds-card-padding);position:relative}:host .gcds-card>:not(slot):not(.gcds-card__spacer){display:block;margin:var(--gcds-card-margin)}:host .gcds-card .gcds-card__image{width:100%}:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font);width:fit-content}}@layer slot{:host .gcds-card:has(slot){display:flex;flex-direction:column}:host .gcds-card:has(slot) .gcds-card__spacer{flex:1}:host .gcds-card:has(slot) ::slotted(*){color:var(--gcds-card-slot-color);font:var(--gcds-card-slot-font)!important;z-index:2}}@layer link{:host .gcds-card.gcds-card--link gcds-link::part(link):after{bottom:0;content:\"\";left:0;pointer-events:auto;position:absolute;right:0;top:0;z-index:1}}@layer hover{@media (hover:hover){:host .gcds-card.gcds-card--link:hover{background-color:var(--gcds-card-hover-background-color);box-shadow:var(--gcds-card-hover-box-shadow);cursor:pointer}}}";
const GcdsCardStyle0 = gcdsCardCss;

const GcdsCard$1 = /*@__PURE__*/ proxyCustomElement(class GcdsCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = 'link';
        this.cardTitle = undefined;
        this.titleElement = 'a';
        this.href = undefined;
        this.description = undefined;
        this.tag = undefined;
        this.imgSrc = undefined;
        this.imgAlt = undefined;
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
    get hasCardFooter() {
        return !!this.el.querySelector('[slot="footer"]');
    }
    render() {
        const { type, cardTitle, titleElement, href, description, tag, imgSrc, imgAlt, hasCardFooter, lang, } = this;
        const Element = titleElement;
        const taggedAttr = {};
        if (tag) {
            taggedAttr['aria-describedby'] = 'gcds-card__tag';
        }
        return (h(Host, null, h("div", { class: `gcds-card gcds-card--${type}` }, imgSrc && (h("img", { src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), tag && (h("gcds-text", { id: "gcds-card__tag", class: "gcds-card__tag", "text-role": "secondary", size: "caption" }, h("gcds-sr-only", null, I18N[lang].tagged), tag)), Element != 'a' ? (h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), h("gcds-link", { href: href }, cardTitle))) : (h("gcds-link", Object.assign({ href: href, class: "gcds-card__title" }, taggedAttr), cardTitle)), description && (h("gcds-text", { class: "gcds-card__description" }, description)), hasCardFooter && (h(Fragment, null, h("div", { class: "gcds-card__spacer" }), h("slot", { name: "footer" }))))));
    }
    get el() { return this; }
    static get style() { return GcdsCardStyle0; }
}, [1, "gcds-card", {
        "type": [513],
        "cardTitle": [513, "card-title"],
        "titleElement": [1, "title-element"],
        "href": [513],
        "description": [513],
        "tag": [513],
        "imgSrc": [513, "img-src"],
        "imgAlt": [513, "img-alt"],
        "lang": [32]
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