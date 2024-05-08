import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$5 } from './gcds-icon2.js';
import { d as defineCustomElement$4 } from './gcds-link2.js';
import { d as defineCustomElement$3 } from './gcds-signature2.js';
import { d as defineCustomElement$2 } from './gcds-sr-only2.js';

const I18N = {
  en: {
    gov: {
      heading: 'Government of Canada',
      menu: {
        contacts: {
          text: 'All Contacts',
          link: 'https://www.canada.ca/en/contact.html',
        },
        dept: {
          text: 'Departments and agencies',
          link: 'https://www.canada.ca/en/government/dept.html',
        },
        about: {
          text: 'About government',
          link: 'https://www.canada.ca/en/government/system.html',
        },
      },
    },
    themes: {
      heading: 'Themes and topics',
      menu: {
        jobs: {
          text: 'Jobs',
          link: 'https://www.canada.ca/en/services/jobs.html',
        },
        immigration: {
          text: 'Immigration and citizenship',
          link: 'https://www.canada.ca/en/services/immigration-citizenship.html',
        },
        travel: {
          text: 'Travel and tourism',
          link: 'https://travel.gc.ca/',
        },
        business: {
          text: 'Business',
          link: 'https://www.canada.ca/en/services/business.html',
        },
        benefits: {
          text: 'Benefits',
          link: 'https://www.canada.ca/en/services/benefits.html',
        },
        health: {
          text: 'Health',
          link: 'https://www.canada.ca/en/services/health.html',
        },
        taxes: {
          text: 'Taxes',
          link: 'https://www.canada.ca/en/services/taxes.html',
        },
        enviro: {
          text: 'Environment and natural resources',
          link: 'https://www.canada.ca/en/services/environment.html',
        },
        defence: {
          text: 'National security and defence',
          link: 'https://www.canada.ca/en/services/defence.html',
        },
        culture: {
          text: 'Culture, history and sport',
          link: 'https://www.canada.ca/en/services/culture.html',
        },
        policing: {
          text: 'Policing, justice and emergencies',
          link: 'https://www.canada.ca/en/services/policing.html',
        },
        transport: {
          text: 'Transport and infrastructure',
          link: 'https://www.canada.ca/en/services/transport.html',
        },
        world: {
          text: 'Canada and the world',
          link: 'https://international.gc.ca/world-monde/index.aspx?lang=eng',
        },
        finance: {
          text: 'Money and finance',
          link: 'https://www.canada.ca/en/services/finance.html',
        },
        science: {
          text: 'Science and innovation',
          link: 'https://www.canada.ca/en/services/science.html',
        },
        indigenous: {
          text: 'Indigenous peoples',
          link: 'https://www.canada.ca/en/services/indigenous-peoples.html',
        },
        veterans: {
          text: 'Veterans and military',
          link: 'https://www.canada.ca/en/services/veterans.html',
        },
        youth: {
          text: 'Youth',
          link: 'https://www.canada.ca/en/services/youth.html',
        },
      },
    },
    site: {
      heading: 'Government of Canada Corporate',
      menu: {
        social: {
          text: 'Social media',
          link: 'https://www.canada.ca/en/social.html',
        },
        mobile: {
          text: 'Mobile applications',
          link: 'https://www.canada.ca/en/mobile.html',
        },
        about: {
          text: 'About Canada.ca',
          link: 'https://www.canada.ca/en/government/about.html',
        },
        terms: {
          text: 'Terms and conditions',
          link: 'https://www.canada.ca/en/transparency/terms.html',
        },
        privacy: {
          text: 'Privacy',
          link: 'https://www.canada.ca/en/transparency/privacy.html',
        },
      },
    },
    about: 'About this site',
    topofpage: 'Top of page',
  },
  fr: {
    gov: {
      heading: 'Gouvernement du Canada',
      menu: {
        contacts: {
          text: 'Toutes les coordonnées',
          link: 'https://www.canada.ca/fr/contact.html',
        },
        dept: {
          text: 'Ministères et organismes',
          link: 'https://www.canada.ca/fr/gouvernement/min.html',
        },
        about: {
          text: 'À propos du gouvernement',
          link: 'https://www.canada.ca/fr/gouvernement/systeme.html',
        },
      },
    },
    themes: {
      heading: 'Thèmes et sujets',
      menu: {
        jobs: {
          text: 'Emplois',
          link: 'https://www.canada.ca/fr/services/emplois.html',
        },
        immigration: {
          text: 'Immigration et citoyenneté',
          link: 'https://www.canada.ca/fr/services/immigration-citoyennete.html',
        },
        travel: {
          text: 'Voyage et tourisme',
          link: 'https://voyage.gc.ca/',
        },
        business: {
          text: 'Entreprises',
          link: 'https://www.canada.ca/fr/services/entreprises.html',
        },
        benefits: {
          text: 'Prestations',
          link: 'https://www.canada.ca/fr/services/prestations.html',
        },
        health: {
          text: 'Santé',
          link: 'https://www.canada.ca/fr/services/sante.html',
        },
        taxes: {
          text: 'Impôts',
          link: 'https://www.canada.ca/fr/services/impots.html',
        },
        enviro: {
          text: 'Environnement et ressources naturelles',
          link: 'https://www.canada.ca/fr/services/environnement.html',
        },
        defence: {
          text: 'Sécurité nationale et défense',
          link: 'https://www.canada.ca/fr/services/defense.html',
        },
        culture: {
          text: 'Culture, histoire et sport',
          link: 'https://www.canada.ca/fr/services/culture.html',
        },
        policing: {
          text: 'Services de police, justice et urgences',
          link: 'https://www.canada.ca/fr/services/police.html',
        },
        transport: {
          text: 'Transport et infrastructure',
          link: 'https://www.canada.ca/fr/services/transport.html',
        },
        world: {
          text: ' Le Canada et le monde',
          link: 'https://www.international.gc.ca/world-monde/index.aspx?lang=fra',
        },
        finance: {
          text: 'Argent et finance',
          link: 'https://www.canada.ca/fr/services/finance.html',
        },
        science: {
          text: 'Science et innovation',
          link: 'https://www.canada.ca/fr/services/science.html',
        },
        indigenous: {
          text: 'Autochtones',
          link: 'https://www.canada.ca/fr/services/autochtones.html',
        },
        veterans: {
          text: 'Vétérans et militaires',
          link: 'https://www.canada.ca/fr/services/veterans.html',
        },
        youth: {
          text: 'Jeunesse',
          link: 'https://www.canada.ca/fr/services/jeunesse.html',
        },
      },
    },
    site: {
      heading: 'Organisation du gouvernement du Canada',
      menu: {
        social: {
          text: 'Médias sociaux',
          link: 'https://www.canada.ca/fr/sociaux.html',
        },
        mobile: {
          text: 'Applications mobiles',
          link: 'https://www.canada.ca/fr/mobile.html',
        },
        about: {
          text: 'À propos de Canada.ca',
          link: 'https://www.canada.ca/fr/gouvernement/a-propos.html',
        },
        terms: {
          text: 'Avis',
          link: 'https://www.canada.ca/fr/transparence/avis.html',
        },
        privacy: {
          text: 'Confidentialité',
          link: 'https://www.canada.ca/fr/transparence/confidentialite.html',
        },
      },
    },
    about: 'À propos de ce site',
    topofpage: 'Haut de la page',
  },
};

const gcdsFooterCss = "@layer reset, default, contextual, main, sub, small, compact, medium, wide;@layer reset{:host{display:block}:host slot{display:initial}:host gcds-link::part(link):not(:hover){text-decoration:none}:host .gcds-footer__sub ul{list-style-type:none;margin:0;padding:0}:host .gcds-footer__sub ul li{display:block}}@layer default{:host{font:var(--gcds-footer-font)}:host .gcds-footer__header,:host .sub__header,:host .themenav__header{clip:rect(1px,1px,1px,1px);height:1px;margin:0;overflow:hidden;position:absolute;width:1px}:host [class$=__container]{justify-content:space-between;margin:var(--gcds-footer-container-margin);max-width:var(--gcds-footer-container-width);width:90%}:host nav{position:relative}:host nav li{margin:var(--gcds-footer-listitem-margin)}:host [class$=__list]{display:grid;grid-template-columns:1fr;list-style:none;padding:var(--gcds-footer-list-padding);grid-gap:var(--gcds-footer-list-grid-gap)}:host [class$=__list] li gcds-link::part(link){color:var(--gcds-footer-main-text)}}@layer contextual{:host .gcds-footer__contextual{background-color:var(--gcds-footer-contextual-background);color:var(--gcds-footer-contextual-text);container:component contextual/inline-size;padding:var(--gcds-footer-contextual-padding)}}@layer main{:host .gcds-footer__main{background-color:var(--gcds-footer-main-background);background-image:url(data:image/png;base64,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);background-position:100% 100%;background-repeat:no-repeat;color:var(--gcds-footer-main-text);container:component main/inline-size}:host .gcds-footer__main nav:first-of-type:after{border-block-end:var(--gcds-footer-main-nav-first-after-border-width) solid var(--gcds-footer-main-nav-first-after-border-color);content:\"\";display:block;width:var(--gcds-footer-main-nav-first-after-width)}:host .gcds-footer__main nav.main__govnav{padding:var(--gcds-footer-main-govnav-padding)}:host .gcds-footer__main nav.main__themenav{padding:var(--gcds-footer-main-themenav-padding)}:host .gcds-footer__main nav.main__themenav .themenav__list{display:grid;grid-auto-flow:column;grid-template-rows:repeat(18,1fr)}}@layer sub{:host .gcds-footer__sub{background-color:var(--gcds-footer-sub-background);container:component sub/inline-size}:host .gcds-footer__sub .sub__container{display:grid;grid-gap:var(--gcds-footer-sub-grid-gap);grid-template-areas:\"list wordmark\";grid-template-columns:3fr 1fr}:host .gcds-footer__sub .sub__container nav{align-items:center;display:flex;grid-area:list;padding:var(--gcds-footer-sub-nav-padding)}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:flex;grid-area:wordmark}:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{align-self:end;width:var(--gcds-footer-sub-signature-md-width)}}@layer small{@layer compact{@container sub (width <= 19em){:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{width:var(--gcds-footer-sub-signature-sm-width)}}}}@layer compact{@container sub (width >= 28.2em){:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{margin:var(--gcds-footer-sub-signature-margin);min-width:var(--gcds-footer-sub-signature-lg-min-width);width:var(--gcds-footer-sub-signature-lg-width)!important}}}@layer medium{@container contextual (width >= 45em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr}}@container main (width >= 45em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(9,1fr)}}}@layer wide{@container contextual (width >= 60.2em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr 1fr}}@container main (width >= 60.2em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(6,1fr)}}@container sub (width >= 60.2em){:host .gcds-footer__sub .sub__container ul li{display:inline-block;margin-block-end:0}:host .gcds-footer__sub .sub__container ul li:first-of-type:before{content:\"\";margin:0}:host .gcds-footer__sub .sub__container ul li:before{content:\"\\2022\";display:inline;margin:var(--gcds-footer-sub-listitem-before-margin)}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:inline-block}:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{margin:var(--gcds-footer-sub-signature-lg-margin)}}}";
const GcdsFooterStyle0 = gcdsFooterCss;

const GcdsFooter$1 = /*@__PURE__*/ proxyCustomElement(class GcdsFooter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.display = 'compact';
        this.wordmarkVariant = undefined;
        this.contextualHeading = undefined;
        this.contextualLinks = undefined;
        this.subLinks = undefined;
        this.lang = undefined;
    }
    /**
     * Convert contextual links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    contextualLinksChanged(newContextualLinks) {
        if (typeof newContextualLinks == 'string') {
            this.contextualLinksObject = JSON.parse(newContextualLinks);
        }
        else if (typeof newContextualLinks == 'object') {
            this.contextualLinksObject = newContextualLinks;
        }
    }
    /**
     * Convert sub links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    subLinksChanged(newSubLinks) {
        if (typeof newSubLinks == 'string') {
            this.subLinksObject = JSON.parse(newSubLinks);
        }
        else if (typeof newSubLinks == 'object') {
            this.subLinksObject = newSubLinks;
        }
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
        if (this.contextualLinks && typeof this.contextualLinks == 'string') {
            this.contextualLinksObject = JSON.parse(this.contextualLinks);
        }
        else if (this.contextualLinks &&
            typeof this.contextualLinks == 'object') {
            this.contextualLinksObject = this.contextualLinks;
        }
        if (this.subLinks && typeof this.subLinks == 'string') {
            this.subLinksObject = JSON.parse(this.subLinks);
        }
        else if (this.subLinks && typeof this.subLinks == 'object') {
            this.subLinksObject = this.subLinks;
        }
    }
    get renderSignature() {
        const signVariant = this.wordmarkVariant ? this.wordmarkVariant : 'colour';
        if (this.el.querySelector('[slot="signature"]')) {
            return h("slot", { name: "wordmark" });
        }
        else {
            return (h("div", { class: "sub__wordmark" }, h("gcds-signature", { type: "wordmark", variant: signVariant, lang: this.lang })));
        }
    }
    render() {
        const { lang, display, contextualHeading, contextualLinksObject, subLinks, subLinksObject, renderSignature, } = this;
        const govNav = I18N[lang].gov.menu;
        const themeNav = I18N[lang].themes.menu;
        const siteNav = I18N[lang].site.menu;
        let contextualLinkCount = 0;
        let subLinkCount = 0;
        return (h(Host, { role: "contentinfo", "aria-label": "Footer" }, h("gcds-sr-only", { tag: "h2" }, I18N[lang].about), contextualLinksObject && contextualHeading && (h("div", { class: "gcds-footer__contextual" }, h("div", { class: "contextual__container" }, h("nav", { "aria-labelledby": "contextual__heading" }, h("h3", { id: "contextual__heading", class: "contextual__heading" }, contextualHeading), h("ul", { class: "contextual__list" }, Object.keys(contextualLinksObject).map(key => {
            if (contextualLinkCount < 3) {
                contextualLinkCount++;
                return (h("li", null, h("gcds-link", { size: "small", href: contextualLinksObject[key] }, key)));
            }
        })))))), display === 'full' ? (h("div", { class: "gcds-footer__main" }, h("div", { class: "main__container" }, h("nav", { class: "main__govnav", "aria-labelledby": "govnav__heading" }, h("h3", { id: "govnav__heading" }, I18N[lang].gov.heading), h("ul", { class: "govnav__list" }, Object.keys(govNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: govNav[value].link }, govNav[value].text)))))), h("nav", { class: "main__themenav", "aria-labelledby": "themenav__heading" }, h("gcds-sr-only", { tag: "h4", id: "themenav__heading" }, I18N[lang].themes.heading), h("ul", { class: "themenav__list" }, Object.keys(themeNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: themeNav[value].link }, themeNav[value].text))))))))) : null, h("div", { class: "gcds-footer__sub" }, h("div", { class: "sub__container" }, h("nav", { "aria-labelledby": "sub__heading" }, h("gcds-sr-only", { tag: "h3", id: "sub__heading" }, I18N[lang].site.heading), h("ul", null, subLinks
            ? Object.keys(subLinksObject).map(key => {
                if (subLinkCount < 5) {
                    subLinkCount++;
                    return (h("li", null, h("gcds-link", { size: "small", href: subLinksObject[key] }, key)));
                }
            })
            : Object.keys(siteNav).map(value => {
                return (h("li", null, h("gcds-link", { size: "small", href: siteNav[value].link }, siteNav[value].text)));
            }))), renderSignature))));
    }
    get el() { return this; }
    static get watchers() { return {
        "contextualLinks": ["contextualLinksChanged"],
        "subLinks": ["subLinksChanged"]
    }; }
    static get style() { return GcdsFooterStyle0; }
}, [1, "gcds-footer", {
        "display": [1537],
        "wordmarkVariant": [1, "wordmark-variant"],
        "contextualHeading": [1, "contextual-heading"],
        "contextualLinks": [1025, "contextual-links"],
        "subLinks": [1025, "sub-links"],
        "lang": [32]
    }, undefined, {
        "contextualLinks": ["contextualLinksChanged"],
        "subLinks": ["subLinksChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-footer", "gcds-icon", "gcds-link", "gcds-signature", "gcds-sr-only"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsFooter$1);
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

const GcdsFooter = GcdsFooter$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsFooter, defineCustomElement };

//# sourceMappingURL=gcds-footer.js.map