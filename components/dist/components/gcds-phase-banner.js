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
        return (h(Host, { key: '03d1a8de7df2a91d9a8b79cca4bef17377585269' }, h("div", { key: 'e6194d8cf29385c2c6079393ff7c235735d7d807', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": I18N[lang].label }, h("gcds-container", { key: '5b05537336d102ca070af8199acdf2444f729de8', size: container, centered: true }, h("div", { key: '8ac815e722f021f7d23f7b23267410f1dbefd613', class: "banner__content" }, h("figure", { key: 'afec7938dc8628e23a73b46baa6f01490d9d1d6c', class: "banner__icon icon--left" }, h("slot", { key: '749ff139daab3c0d92cc1bcc707d36beb860c6eb', name: "banner-icon-left" })), h("div", { key: '17adb8cb3b7f9b0a076407c611748e1f665e7eca', class: "banner__details" }, h("slot", { key: '8482f2af1178f5f070f81c54c0e4f7e886055a14', name: "banner-text" }), h("slot", { key: '6b240f9a45c7466b145610020cc45bacf23c82d7', name: "banner-cta" })), h("figure", { key: '15046443505ce0469c648d914b14f990a1c61a8c', class: "banner__icon icon--right" }, h("slot", { key: 'e539510f180473f2497c2634b16e91202af86cdf', name: "banner-icon-right" })))))));
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