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
        return (h(Host, { key: 'eb21f31e07263f63e9e6bd81e03b7d69e7fc5c22' }, h("div", { key: 'f259bdd2095c8fbec75ac4958192de54f1446efd', class: "gcds-lang-toggle" }, h("gcds-sr-only", { key: '5f1c04d337fd5b8b190be3e9c5731f640b80f89c', id: "lang-toggle__heading", tag: "h2" }, I18N[lang].heading), h("gcds-link", { key: 'c0343104552957383ad0e0c06929cb7987f568b1', size: "regular", href: href, lang: I18N[lang].abbreviation }, h("span", { key: 'dbf125e2a0b95bcab90bc38ba8a508b18cdbe1a0' }, I18N[lang].language), h("abbr", { key: '4959f73d060789b0666d0cae393833437c54de5c', title: I18N[lang].language }, I18N[lang].abbreviation)))));
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