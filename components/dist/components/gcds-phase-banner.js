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
        return (h(Host, { key: '115fc253ff9bf972f3a5c1ac88792278947f97b4' }, h("div", { key: '5fd1243f57780af9046a29989167dc56af32bb2a', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": I18N[lang].label }, h("gcds-container", { key: 'ee27279607ed91875a9f18232b726f21d57e5688', size: container, centered: true }, h("div", { key: '271c53ac57814749faed00240ed1b5f538b08a33', class: "banner__content" }, h("figure", { key: '112b823a737c1f02de75505a7c25af6ca64f080c', class: "banner__icon icon--left" }, h("slot", { key: '398cc31934e1af546e69ed292cf8af638c682cab', name: "banner-icon-left" })), h("div", { key: 'b8b8669f9ba0a24d6e14d266799238613916f687', class: "banner__details" }, h("slot", { key: 'f16b4f5258f493866f361c26a9e9641273ccb9ec', name: "banner-text" }), h("slot", { key: '9660cdfcba47c12f3f51758ad6015a6845f2a154', name: "banner-cta" })), h("figure", { key: '9e7e29bf2afce3ce401663786e95970a20b0a0a8', class: "banner__icon icon--right" }, h("slot", { key: 'e976f308e03921088da7ef482d809adac7723e33', name: "banner-icon-right" })))))));
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