import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';

const I18N = {
  en: {
    abbreviation: 'fr',
    heading: 'Language Selection',
    language: 'Français',
  },
  fr: {
    abbreviation: 'en',
    heading: 'Sélection de la langue',
    language: 'English',
  },
};

const gcdsLangToggleCss = ":host{display:block;font:var(--gcds-lang-toggle-font)}:host h2{margin:0;overflow:hidden;position:absolute;width:0}:host a{color:var(--gcds-lang-toggle-default-text);padding:var(--gcds-lang-toggle-padding);text-decoration:underline;text-decoration-color:currentColor;text-decoration-thickness:var(\n      --gcds-lang-toggle-default-decoration-thickness\n    );text-underline-offset:.2em}:host a span{display:none}:host a abbr{text-decoration:none;text-transform:uppercase}:host a:hover{color:var(--gcds-lang-toggle-hover-text);text-decoration-thickness:var(\n        --gcds-lang-toggle-hover-decoration-thickness\n      )}:host a:focus{background-color:var(--gcds-lang-toggle-focus-background);border-radius:var(--gcds-lang-toggle-focus-border-radius);box-shadow:var(--gcds-lang-toggle-focus-box-shadow);color:var(--gcds-lang-toggle-focus-text);outline:var(--gcds-lang-toggle-focus-outline);outline-offset:var(--gcds-lang-toggle-focus-outline-offset);text-decoration:none}@media screen and (min-width:64em){:host a{padding:0}:host a span{display:initial}:host a abbr{display:none}}";
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
        return (h(Host, null, h("div", null, h("h2", null, I18N[lang].heading), h("a", { href: href, lang: I18N[lang].abbreviation }, h("span", null, I18N[lang].language), h("abbr", { title: I18N[lang].language }, I18N[lang].abbreviation)))));
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
    const components = ["gcds-lang-toggle"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-lang-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsLangToggle);
            }
            break;
    } });
}

export { GcdsLangToggle as G, defineCustomElement as d };

//# sourceMappingURL=gcds-lang-toggle2.js.map