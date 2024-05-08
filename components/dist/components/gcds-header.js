import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$6 } from './gcds-icon2.js';
import { d as defineCustomElement$5 } from './gcds-lang-toggle2.js';
import { d as defineCustomElement$4 } from './gcds-link2.js';
import { d as defineCustomElement$3 } from './gcds-signature2.js';
import { d as defineCustomElement$2 } from './gcds-sr-only2.js';

const I18N = {
  en: {
    skip: 'Skip to main content',
    skipLabel: 'Skip to',
  },
  fr: {
    skip: 'Passer au contenu principal',
    skipLabel: 'Passer au',
  },
};

const gcdsHeaderCss = "@layer reset, default, brand, wide;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host{margin:var(--gcds-header-margin)!important}:host .gcds-header__container{justify-content:space-between;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__skip-to-nav{margin-inline:auto;position:absolute;text-align:center;top:var(--gcds-header-skiptonav-top);width:100%}:host .gcds-header__skip-to-nav gcds-link{left:0;position:absolute;top:var(--gcds-header-skiptonav-top);width:inherit;z-index:3}:host .gcds-header__skip-to-nav gcds-link:not(:focus){height:0;overflow:hidden;width:0;clip:rect(0,0,0,0)}}@layer brand{:host .gcds-header__brand{border-block-end:var(--gcds-header-brand-border-width) solid var(--gcds-header-brand-border-color);container:component brand/inline-size;margin:var(--gcds-header-brand-margin);padding:var(--gcds-header-brand-padding)}:host .gcds-header__brand .brand__container{display:grid;grid-gap:var(--gcds-header-brand-grid-gap);grid-template-areas:\"signature toggle\" \"search search\";grid-template-columns:1fr .1fr;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__brand .brand__container.container--simple{grid-template-areas:\"signature toggle\"}:host .gcds-header__brand .brand__container :is(.brand__toggle,slot[name=toggle]){grid-area:toggle;text-align:right}:host .gcds-header__brand .brand__container :is(.brand__signature,slot[name=signature]){grid-area:signature}:host .gcds-header__brand .brand__container :is(.brand__signature,slot[name=signature]) gcds-signature{margin:var(--gcds-header-brand-signature-margin)}:host .gcds-header__brand .brand__container .brand__search{display:block;grid-area:search;max-width:100%}}@layer wide{@container brand (width >= 51em){:host .gcds-header__brand .brand__container{grid-template-areas:\"toggle toggle\" \"signature search\";grid-template-columns:1fr 1fr}:host .gcds-header__brand .brand__container .brand__search,:host .gcds-header__brand .brand__container slot[name=search]{margin-inline-start:auto;width:fit-content}}}";
const GcdsHeaderStyle0 = gcdsHeaderCss;

const GcdsHeader$1 = /*@__PURE__*/ proxyCustomElement(class GcdsHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.langHref = undefined;
        this.signatureVariant = undefined;
        this.signatureHasLink = true;
        this.skipToHref = undefined;
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
    get renderSkipToNav() {
        if (this.el.querySelector('[slot="skip-to-nav"]')) {
            return h("slot", { name: "skip-to-nav" });
        }
        else if (this.skipToHref) {
            return (h("nav", { class: "gcds-header__skip-to-nav", "aria-label": I18N[this.lang].skipLabel }, h("gcds-link", { href: this.skipToHref }, I18N[this.lang].skip)));
        }
        else {
            return;
        }
    }
    get renderToggle() {
        if (this.el.querySelector('[slot="toggle"]')) {
            return h("slot", { name: "toggle" });
        }
        else if (this.langHref) {
            return (h("section", { class: "brand__toggle" }, h("gcds-lang-toggle", { lang: this.lang, href: this.langHref })));
        }
        else {
            return;
        }
    }
    get renderSignature() {
        const signVariant = this.signatureVariant
            ? this.signatureVariant
            : 'colour';
        if (this.el.querySelector('[slot="signature"]')) {
            return h("slot", { name: "signature" });
        }
        else {
            return (h("div", { class: "brand__signature" }, h("gcds-signature", { type: "signature", variant: signVariant, "has-link": this.signatureHasLink, lang: this.lang })));
        }
    }
    get renderSearch() {
        if (this.el.querySelector('[slot="search"]')) {
            return (h("div", { class: "brand__search" }, h("slot", { name: "search" })));
        }
        else {
            return;
        }
    }
    get hasSearch() {
        return !!this.el.querySelector('[slot="search"]');
    }
    get hasBanner() {
        return !!this.el.querySelector('[slot="banner"]');
    }
    get hasBreadcrumb() {
        return !!this.el.querySelector('[slot="breadcrumb"]');
    }
    render() {
        const { renderSkipToNav, renderToggle, renderSignature, renderSearch, hasSearch, hasBanner, hasBreadcrumb, } = this;
        return (h(Host, { role: "banner" }, renderSkipToNav, hasBanner ? h("slot", { name: "banner" }) : null, h("div", { class: "gcds-header__brand" }, h("div", { class: `brand__container ${!hasSearch ? 'container--simple' : ''}` }, renderToggle, renderSignature, renderSearch)), h("slot", { name: "menu" }), hasBreadcrumb ? (h("div", { class: "gcds-header__container" }, h("slot", { name: "breadcrumb" }))) : null));
    }
    get el() { return this; }
    static get style() { return GcdsHeaderStyle0; }
}, [1, "gcds-header", {
        "langHref": [513, "lang-href"],
        "signatureVariant": [1, "signature-variant"],
        "signatureHasLink": [4, "signature-has-link"],
        "skipToHref": [1, "skip-to-href"],
        "lang": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-header", "gcds-icon", "gcds-lang-toggle", "gcds-link", "gcds-signature", "gcds-sr-only"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsHeader$1);
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "gcds-lang-toggle":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "gcds-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-signature":
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

const GcdsHeader = GcdsHeader$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsHeader, defineCustomElement };

//# sourceMappingURL=gcds-header.js.map