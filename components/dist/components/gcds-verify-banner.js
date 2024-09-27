import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$3 } from './gcds-container2.js';
import { d as defineCustomElement$2 } from './gcds-grid2.js';

const I18N = {
  en: {
    summary: {
      text: 'An official website of the Government of Canada.',
      link: 'Learn to recognize one',
    },
    content: {
      description:
        "It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:",
      url: {
        heading: 'Canada.ca or gc.ca',
        text: "Government of Canada website's normally use Canada.ca or gc.ca in the URL.",
      },
      languages: {
        heading: "Available in both of Canada's Official Languages",
        text: 'Information will be available in both English and French.',
      },
      https: {
        heading: 'HTTPS',
        text: 'Secure Government of Canada websites use',
      },
      contact: {
        heading: 'A point of contact',
        text: 'Contact information will have Canada.ca, gc.ca, or the department name in the email address.',
      },
    },
  },
  fr: {
    summary: {
      text: 'Les sites Web officiels du gouvernement du Canada.',
      link: 'Comment les reconnaître',
    },
    content: {
      description:
        "Il peut être difficile de savoir quels sites sont fiables. Avant de partager des renseignements, vérifiez les points suivant pour déterminer s'il s'agit bien d'un site du gouvernement du Canada:",
      url: {
        heading: 'Canada.ca ou gc.ca',
        text: "On retrouve normalement Canada.ca ou gc.ca dans l'adresse URL d'un site Web du gouvernement du Canada.",
      },
      languages: {
        heading: 'Offert dans les deux langues officielles',
        text: 'Vérifiez que les renseignements sont accessibles en français et en anglais.',
      },
      https: {
        heading: 'HTTPS',
        text: "Lorsqu'un navigateur affiche les sites Web sécuritaires du gouvernement du Canada, on retrouve",
      },
      contact: {
        heading: 'Un point de communication',
        text: "On retrouve Canada.ca, gc.ca ou le nom du ministère dans l'URL de toute adresse courriel du gouvernement du Canada.",
      },
    },
  },
};

const CanadaFlag = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.3 33" width="25">
  <path fill="#FF0000" d="M0,0h16v32.5H0V0z M46.5,16.6l-1-0.5c-0.5-0.2-0.3-0.6-0.2-1.1v-0.2l1-3.6l-2.9,0.6c-0.5,0.1-0.9,0.2-1.1-0.3 l-0.7-1.7l-2.8,3c-0.8,0.8-1.5,0.4-1.2-0.8l1.3-6.2l-1.9,1c-0.5,0.2-0.7,0.3-1-0.2l-2.2-4.4l-2.3,4.6c-0.2,0.3-0.6,0.2-0.9-0.1 l-2.1-1.2l1.4,6.8c0.2,0.9-0.5,1.3-1,0.7L26,9.8l-0.9,1.7c-0.2,0.4-0.4,0.6-1.2,0.4L21,11.3l1.2,3.6c0.1,0.6,0.1,0.9-0.2,1.1 l-1.3,0.7l6,4.9c0.5,0.4,0.4,0.9,0.2,1.5l-0.7,1.7l5.1-1c1.1-0.2,1.6-0.2,1.6,0.4l-0.2,6.3h1.7l-0.2-6.3c0-0.6,0.5-0.6,1.2-0.4 l5.5,1l-0.5-1.7c-0.2-0.7-0.4-0.9,0.2-1.5L46.5,16.6z M51.4,0v32.5h16V0H51.4z" />
</svg>`;

const ContentToggleArrow = `<svg xmlns="http://www.w3.org/2000/svg"  width="12" height="7.4" viewBox="0 0 12 7.4">
  <path d="M10.6,0L6,4.6L1.4,0L0,1.4l6,6l6-6L10.6,0z" />
</svg>`;

const gcdsVerifyBannerCss = "@layer reset, default, fixed, container;@layer reset{:host{display:block}}@layer default{:host .gcds-verify-banner{background-color:var(--gcds-verify-banner-background);color:var(--gcds-verify-banner-text);font:var(--gcds-verify-banner-font)}:host .gcds-verify-banner :is(summary,.verify-banner__content){font-size:90%}:host .gcds-verify-banner summary{cursor:pointer;display:flex;margin-inline:auto;padding-block:var(--gcds-verify-banner-summary-padding)}:host .gcds-verify-banner summary :is(.svg-container,p small){margin:var(--gcds-verify-banner-summary-content-margin)}:host .gcds-verify-banner summary p{align-items:center;display:flex;flex-wrap:wrap;line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner summary .verify-banner__toggle{background:none;border:0;color:var(--gcds-verify-banner-toggle-text);flex:0 0 auto;font-weight:var(--gcds-verify-banner-toggle-font-weight);padding:0;pointer-events:none;text-decoration:underline}:host .gcds-verify-banner summary .verify-banner__toggle .svg-container path{fill:var(--gcds-verify-banner-toggle-text)}:host .gcds-verify-banner .verify-banner__content{border-block-start:var(--gcds-verify-banner-content-border-width) solid var(--gcds-verify-banner-content-border-color);margin:0 auto;padding-block-end:var(--gcds-verify-banner-content-padding-block-end);padding-block-start:var(\n        --gcds-verify-banner-content-padding-block-start\n      )}:host .gcds-verify-banner .verify-banner__content li{list-style:none}:host .gcds-verify-banner .verify-banner__content li :is(h4,p){width:90%}:host .gcds-verify-banner .verify-banner__content h4{margin:var(--gcds-verify-banner-content-heading-margin)}:host .gcds-verify-banner .verify-banner__content p{line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner[open] summary .verify-banner__toggle svg{transform:rotate(-180deg)}}@layer fixed{:host .gcds-verify-banner.verify-banner--is-fixed{position:sticky;top:0;width:var(--gcds-verify-banner-max-content-width-full);z-index:9999}}@layer container{:host .gcds-verify-banner .container-lg,:host .gcds-verify-banner .container-md,:host .gcds-verify-banner .container-sm,:host .gcds-verify-banner .container-xl,:host .gcds-verify-banner .container-xs{width:90%}:host .gcds-verify-banner .container-full{max-width:var(--gcds-verify-banner-container-full);padding-inline:var(--gcds-verify-banner-container-padding)}:host .gcds-verify-banner .container-xl{max-width:var(--gcds-verify-banner-container-xl)}:host .gcds-verify-banner .container-lg{max-width:var(--gcds-verify-banner-container-lg)}:host .gcds-verify-banner .container-md{max-width:var(--gcds-verify-banner-container-md)}:host .gcds-verify-banner .container-sm{max-width:var(--gcds-verify-banner-container-sm)}:host .gcds-verify-banner .container-xs{max-width:var(--gcds-verify-banner-container-xs)}}";
const GcdsVerifyBannerStyle0 = gcdsVerifyBannerCss;

const GcdsVerifyBanner$1 = /*@__PURE__*/ proxyCustomElement(class GcdsVerifyBanner extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.container = 'xl';
        this.isFixed = false;
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
        const { container, isFixed, lang } = this;
        return (h(Host, { key: '3a359e2f739de9f0b5b1f4875616f13d926b7c93' }, h("details", { key: '36dbad0f247d5adac5600c345547210b703be94c', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: 'a4258b57b63a5634a3e2dd3784718b5767e022da', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: 'b2ce523e45247b183eff7b85e717688b5b09d3f3', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: '9dc5c963bd59d2bcd9e2cf32d99c82e2212ca498' }, h("small", { key: '0ec143a4ce1d9f50a914ce8e5e37bb5e486ef3aa' }, I18N[lang].summary.text), h("button", { key: '438d1af370ab648eec84b2c66e13a12f0537752c', class: "verify-banner__toggle" }, h("small", { key: '5399bf38ac46c84510385c5e04783035eadf9d4f' }, I18N[lang].summary.link), h("span", { key: '4bd05582cd3ce82b6bd25c8ece8fd6d5319d561a', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: 'c14eb05c5bee6b7539f0299d94a85022949d208f', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: 'da5a85d1cee0a3661bd40f3ad0d6998e5ac073a3' }, h("small", { key: 'ea5f95f05be7a82ff58036ef11cdc7eac9d9887d' }, I18N[lang].content.description)), h("br", { key: 'b8d3cb8a7af7710da4ec26a814080f910d144fed' }), h("gcds-grid", { key: '7ce30265f4350c92837edfea5f223384ec19382d', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'dbaa8b5b0d85c9d804938b2bd702dc9419fbdc41' }, h("h4", { key: 'a5870058080d105ef5df2a5ada92e4d0efca49fd' }, I18N[lang].content.url.heading), h("p", { key: 'ed2d3d9b33b44a04e4416d87c4b1e8f08170dfa2' }, h("small", { key: 'a63c2b37cf7398b54cb56ddcabae8ff5591e3b78' }, I18N[lang].content.url.text))), h("li", { key: '8848fb6834f7028e73758c519ad5b90d6488b006' }, h("h4", { key: '96515dba93042ab9174ab69ea79a25ce4369ec78' }, I18N[lang].content.languages.heading), h("p", { key: '762995079f47a4e2bd0045743ffd3cc7c4768a11' }, h("small", { key: '18342f031772a082604902ff4fe7abd0c6b43eb2' }, I18N[lang].content.languages.text))), h("li", { key: '8742fec5049734b9de8047aaa9625fa3d10e8af9' }, h("h4", { key: 'ef9ec15f10461f9c31e68784dea1f1b1704a8f58' }, I18N[lang].content.https.heading), h("p", { key: '5be480efae55e752f52da02182c800f6dfb3011c' }, h("small", { key: '4bd5c68679d42da7a34935d2ce0f5a6cd5ecd20f' }, I18N[lang].content.https.text, " ", h("strong", { key: 'bc02af8813d9e4cdeffdca40b36c9a633f120ed3' }, "https://"), "."))), h("li", { key: 'f17b0baad7117c8def9625ff3c53576b14e063e2' }, h("h4", { key: 'e884b635d63c1b510f6b01c00d19e8c3c55fc8e7' }, I18N[lang].content.contact.heading), h("p", { key: '9285d3c76b451350428bc82172bee2d3328b2413' }, h("small", { key: '713bcafc07cf60dfcb02c8d6868fa94c7a02026e' }, I18N[lang].content.contact.text))))))));
    }
    get el() { return this; }
    static get style() { return GcdsVerifyBannerStyle0; }
}, [1, "gcds-verify-banner", {
        "container": [1],
        "isFixed": [4, "is-fixed"],
        "lang": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-verify-banner", "gcds-container", "gcds-grid"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-verify-banner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsVerifyBanner$1);
            }
            break;
        case "gcds-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsVerifyBanner = GcdsVerifyBanner$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsVerifyBanner, defineCustomElement };

//# sourceMappingURL=gcds-verify-banner.js.map