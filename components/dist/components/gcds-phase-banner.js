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
        return (h(Host, { key: '01721695ba82d2faad63aabf1308ab32a2277576' }, h("div", { key: '8f863517645dfd61949cc28d8fe4e4bfdb471734', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": I18N[lang].label }, h("gcds-container", { key: 'e09458246e2769bff036529d6ea7cdd12c4c78f0', size: container, centered: true }, h("div", { key: 'c52e8231ee66f8e68c85ca6d0dc98eb7343e94d9', class: "banner__content" }, h("figure", { key: '0360d88ce03c0ed816f700930bf2d7647cad3d87', class: "banner__icon icon--left" }, h("slot", { key: 'c59ff70d5fba77c3cb060674c3d61b5f427b3eb0', name: "banner-icon-left" })), h("div", { key: '89b3f4e118778f91983b3114fb134679d9b5be4d', class: "banner__details" }, h("slot", { key: 'dd5cc8315c49b2b10564ea9240f336ac9d0e79c9', name: "banner-text" }), h("slot", { key: '6d1f17700cc66416b93f2c80a6e4d6da3f4d5602', name: "banner-cta" })), h("figure", { key: '9596f293b8bed55c2738504f98b4827f21ce40ea', class: "banner__icon icon--right" }, h("slot", { key: '0355ed216936f151188a800fe50ebc4443ecccb6', name: "banner-icon-right" })))))));
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