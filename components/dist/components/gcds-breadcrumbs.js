import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$4 } from './gcds-breadcrumbs-item2.js';
import { d as defineCustomElement$3 } from './gcds-icon2.js';
import { d as defineCustomElement$2 } from './gcds-link2.js';

const I18N = {
  en: {
    label: 'Breadcrumb',
    link: 'https://www.canada.ca/en.html',
  },
  fr: {
    label: 'Chemin de navigation',
    link: 'https://www.canada.ca/fr.html',
  },
};

const gcdsBreadcrumbsCss = "@layer reset, default;@layer reset{:host{display:block}:host .gcds-breadcrumbs ol{list-style:none;overflow-x:hidden}}@layer default{:host .gcds-breadcrumbs ol{margin:var(--gcds-breadcrumbs-margin);padding:var(--gcds-breadcrumbs-padding)}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before,:host .gcds-breadcrumbs ol:not(.has-canada-link) ::slotted(:first-child):before{display:none}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before{display:none}}";
const GcdsBreadcrumbsStyle0 = gcdsBreadcrumbsCss;

const GcdsBreadcrumbs$1 = /*@__PURE__*/ proxyCustomElement(class GcdsBreadcrumbs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hideCanadaLink = false;
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
        const { hideCanadaLink, lang } = this;
        return (h(Host, { key: '3cebead5d49755452f7dbf0a8292b38e86d481c9' }, h("nav", { key: '17a5ccde070a513bf3f37aae1cda845ed4e547fd', "aria-label": I18N[lang].label, class: "gcds-breadcrumbs" }, h("ol", { key: '74eaf642af3397da9f222499713148f50ae4ee99', class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ? (h("gcds-breadcrumbs-item", { href: I18N[lang].link }, "Canada.ca")) : null, h("slot", { key: '8c90086d5e3bd78cda3594f7ac8d57feb7a58020' })))));
    }
    get el() { return this; }
    static get style() { return GcdsBreadcrumbsStyle0; }
}, [1, "gcds-breadcrumbs", {
        "hideCanadaLink": [4, "hide-canada-link"],
        "lang": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-breadcrumbs", "gcds-breadcrumbs-item", "gcds-icon", "gcds-link"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-breadcrumbs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsBreadcrumbs$1);
            }
            break;
        case "gcds-breadcrumbs-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
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
    } });
}

const GcdsBreadcrumbs = GcdsBreadcrumbs$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsBreadcrumbs, defineCustomElement };

//# sourceMappingURL=gcds-breadcrumbs.js.map