import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$2 } from './gcds-container2.js';

const I18N = {
  en: {
    label: 'Banner',
  },
  fr: {
    label: 'Bannière',
  },
};

const gcdsPhaseBannerCss = "@layer reset, default, fixed, role, wide, compact;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-phase-banner{container:component banner/inline-size;font:var(--gcds-phase-banner-font);line-height:var(--gcds-phase-banner-line-height)}:host .gcds-phase-banner .banner__content{padding:var(--gcds-phase-banner-padding)}:host .gcds-phase-banner .banner__icon{display:flex;margin:0}:host .gcds-phase-banner .banner__icon.icon--left{margin-inline-end:var(--gcds-phase-banner-icon-margin)}:host .gcds-phase-banner .banner__icon.icon--right{margin-inline-start:var(--gcds-phase-banner-icon-margin)}:host .gcds-phase-banner .banner__icon ::slotted(img),:host .gcds-phase-banner .banner__icon ::slotted(svg){max-height:var(--gcds-phase-banner-icon-max-height)}:host .gcds-phase-banner .banner__details{align-items:baseline;display:flex;flex-wrap:wrap}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(gcds-button){flex:0 0 auto}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(small),:host .gcds-phase-banner .banner__details ::slotted(span){font-size:80%!important}:host .gcds-phase-banner .banner__details ::slotted(p){font:var(--gcds-phase-banner-font);margin:0}:host .gcds-phase-banner .banner__details ::slotted(a){color:inherit}:host .gcds-phase-banner .banner__details ::slotted(gcds-button){margin:var(--gcds-phase-banner-details-cta-margin);transform:scale(90%)}}@layer fixed{:host .gcds-phase-banner.banner-is-fixed{position:sticky;top:0;width:100%;z-index:9999}}@layer role{:host .gcds-phase-banner.banner--role-primary{background-color:var(--gcds-phase-banner-primary-background);color:var(--gcds-phase-banner-primary-text)}:host .gcds-phase-banner.banner--role-secondary{background-color:var(--gcds-phase-banner-secondary-background);color:var(--gcds-phase-banner-secondary-text)}}@layer wide{@container banner (width >= 36em){:host .gcds-phase-banner .banner__content{display:flex}}}@layer compact{@container banner (width < 36em){:host .gcds-phase-banner .banner__content .banner__icon{display:none}}}";
const GcdsPhaseBannerStyle0 = gcdsPhaseBannerCss;

const GcdsPhaseBanner$1 = /*@__PURE__*/ proxyCustomElement(class GcdsPhaseBanner extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bannerRole = 'primary';
        this.container = 'xl';
        this.isFixed = undefined;
        this.lang = undefined;
    }
    /**
     * Events
     */
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
        const { bannerRole, container, isFixed, lang } = this;
        return (h(Host, { key: '7a9ab092fa24decf0cbb189ff423a00a590a9353' }, h("div", { key: '9abd59ac3f9f36c00f29df649ddcc4a0ba40fd12', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": I18N[lang].label }, h("gcds-container", { key: 'c753160aee35e77486e88bb29267765418284187', size: container, centered: true }, h("div", { key: '0aac78887062cdc82bb882a4d886ecd2c4cb0537', class: "banner__content" }, h("figure", { key: '13b9b8d23f68dc271ef15a913da44720ef87f3aa', class: "banner__icon icon--left" }, h("slot", { key: '86153fa07f9421599dd010f2aaed32b73c74d416', name: "banner-icon-left" })), h("div", { key: '974677e29dc9ee44f7709283b553ae791c2a2843', class: "banner__details" }, h("slot", { key: 'd485fcdd5578ac584ec5d1f2ea8a271bb8b4528a', name: "banner-text" }), h("slot", { key: 'ee3c3e130c8476298fee89ce36ea6316efc7a747', name: "banner-cta" })), h("figure", { key: '8e84fd783b06c179748c0370c9e4fa7362972a3c', class: "banner__icon icon--right" }, h("slot", { key: '553594a2b70c69ac1e46847425b934ccd7087462', name: "banner-icon-right" })))))));
    }
    get el() { return this; }
    static get style() { return GcdsPhaseBannerStyle0; }
}, [1, "gcds-phase-banner", {
        "bannerRole": [1, "banner-role"],
        "container": [1],
        "isFixed": [4, "is-fixed"],
        "lang": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-phase-banner", "gcds-container"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-phase-banner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsPhaseBanner$1);
            }
            break;
        case "gcds-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsPhaseBanner = GcdsPhaseBanner$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsPhaseBanner, defineCustomElement };

//# sourceMappingURL=gcds-phase-banner.js.map