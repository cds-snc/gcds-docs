import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$3 } from './gcds-icon2.js';
import { d as defineCustomElement$2 } from './gcds-link2.js';
import { d as defineCustomElement$1 } from './gcds-sr-only2.js';

const I18N = {
  en: {
    abbreviation: 'fr',
    heading: 'Language selection',
    language: 'Français',
  },
  fr: {
    abbreviation: 'en',
    heading: 'Sélection de la langue',
    language: 'English',
  },
};

const gcdsLangToggleCss = "@layer reset, default, desktop;@layer reset{:host{display:block}:host .gcds-lang-toggle h2{margin:0;overflow:hidden;position:absolute;width:0}}@layer default{:host .gcds-lang-toggle gcds-link::part(link){padding:var(--gcds-lang-toggle-padding)}:host .gcds-lang-toggle span{display:none}:host .gcds-lang-toggle abbr{text-decoration:none;text-transform:uppercase}}@layer desktop{@media screen and (width >= 64em){:host .gcds-lang-toggle gcds-link::part(link){padding:0}:host .gcds-lang-toggle span{display:initial}:host .gcds-lang-toggle abbr{display:none}}}";
const GcdsLangToggleStyle0 = gcdsLangToggleCss;

const GcdsLangToggle = /*@__PURE__*/ proxyCustomElement(class GcdsLangToggle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.href = undefined;
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
        const { lang, href } = this;
        return (h(Host, null, h("div", { class: "gcds-lang-toggle" }, h("gcds-sr-only", { id: "lang-toggle__heading", tag: "h2" }, I18N[lang].heading), h("gcds-link", { size: "regular", href: href, lang: I18N[lang].abbreviation }, h("span", null, I18N[lang].language), h("abbr", { title: I18N[lang].language }, I18N[lang].abbreviation)))));
    }
    get el() { return this; }
    static get style() { return GcdsLangToggleStyle0; }
}, [1, "gcds-lang-toggle", {
        "href": [513],
        "lang": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-lang-toggle", "gcds-icon", "gcds-link", "gcds-sr-only"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-lang-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsLangToggle);
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "gcds-sr-only":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { GcdsLangToggle as G, defineCustomElement as d };

//# sourceMappingURL=gcds-lang-toggle2.js.map