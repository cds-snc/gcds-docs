import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$3 } from './gcds-container2.js';
import { d as defineCustomElement$2 } from './gcds-grid2.js';

const I18N = {
  "en": {
    summary: {
      text: "An official website of the Government of Canada.",
      link: "Learn to recognize one",
    },
    content: {
      description: "It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:",
      url: {
        heading: "Canada.ca or gc.ca",
        text: "Government of Canada website's normally use Canada.ca or gc.ca in the URL.",
      },
      languages: {
        heading: "Available in both of Canada's Official Languages",
        text: "Information will be available in both English and French.",
      },
      https: {
        heading: "HTTPS",
        text: "Secure Government of Canada websites use",
      },
      contact: {
        heading: "A point of contact",
        text: "Contact information will have Canada.ca, gc.ca, or the department name in the email address.",
      },
    }
  },
  "fr": {
    summary: {
      text: "Les sites Web officiels du gouvernement du Canada.",
      link: "Comment les reconnaître",
    },
    content: {
      description: "Il peut être difficile de savoir quels sites sont fiables. Avant de partager des renseignements, vérifiez les points suivant pour déterminer s'il s'agit bien d'un site du gouvernement du Canada:",
      url: {
        heading: "Canada.ca ou gc.ca",
        text: "On retrouve normalement Canada.ca ou gc.ca dans l'adresse URL d'un site Web du gouvernement du Canada.",
      },
      languages: {
        heading: "Offert dans les deux langues officielles",
        text: "Vérifiez que les renseignements sont accessibles en français et en anglais.",
      },
      https: {
        heading: "HTTPS",
        text: "Lorsqu'un navigateur affiche les sites Web sécuritaires du gouvernement du Canada, on retrouve",
      },
      contact: {
        heading: "Un point de communication",
        text: "On retrouve Canada.ca, gc.ca ou le nom du ministère dans l'URL de toute adresse courriel du gouvernement du Canada.",
      },
    }
  }
};

const CanadaFlag = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.3 33" width="25">
  <path fill="#FF0000" d="M0,0h16v32.5H0V0z M46.5,16.6l-1-0.5c-0.5-0.2-0.3-0.6-0.2-1.1v-0.2l1-3.6l-2.9,0.6c-0.5,0.1-0.9,0.2-1.1-0.3 l-0.7-1.7l-2.8,3c-0.8,0.8-1.5,0.4-1.2-0.8l1.3-6.2l-1.9,1c-0.5,0.2-0.7,0.3-1-0.2l-2.2-4.4l-2.3,4.6c-0.2,0.3-0.6,0.2-0.9-0.1 l-2.1-1.2l1.4,6.8c0.2,0.9-0.5,1.3-1,0.7L26,9.8l-0.9,1.7c-0.2,0.4-0.4,0.6-1.2,0.4L21,11.3l1.2,3.6c0.1,0.6,0.1,0.9-0.2,1.1 l-1.3,0.7l6,4.9c0.5,0.4,0.4,0.9,0.2,1.5l-0.7,1.7l5.1-1c1.1-0.2,1.6-0.2,1.6,0.4l-0.2,6.3h1.7l-0.2-6.3c0-0.6,0.5-0.6,1.2-0.4 l5.5,1l-0.5-1.7c-0.2-0.7-0.4-0.9,0.2-1.5L46.5,16.6z M51.4,0v32.5h16V0H51.4z" />
</svg>`;

const ContentToggleArrow = `<svg xmlns="http://www.w3.org/2000/svg"  width="12" height="7.4" viewBox="0 0 12 7.4">
  <path d="M10.6,0L6,4.6L1.4,0L0,1.4l6,6l6-6L10.6,0z" />
</svg>`;

const gcdsVerifyBannerCss = ":host .gcds-verify-banner{background-color:var(--gcds-verify-banner-background);color:var(--gcds-verify-banner-text);font:var(--gcds-verify-banner-font)}:host .gcds-verify-banner.verify-banner--is-fixed{position:-webkit-sticky;position:sticky;top:0;width:var(--gcds-verify-banner-max-content-width-full);z-index:9999}:host .gcds-verify-banner .container-lg,:host .gcds-verify-banner .container-md,:host .gcds-verify-banner .container-sm,:host .gcds-verify-banner .container-xl,:host .gcds-verify-banner .container-xs{width:90%}:host .gcds-verify-banner .container-full{max-width:var(--gcds-verify-banner-container-full);padding-inline:var(--gcds-verify-banner-container-padding)}:host .gcds-verify-banner .container-xl{max-width:var(--gcds-verify-banner-container-xl)}:host .gcds-verify-banner .container-lg{max-width:var(--gcds-verify-banner-container-lg)}:host .gcds-verify-banner .container-md{max-width:var(--gcds-verify-banner-container-md)}:host .gcds-verify-banner .container-sm{max-width:var(--gcds-verify-banner-container-sm)}:host .gcds-verify-banner .container-xs{max-width:var(--gcds-verify-banner-container-xs)}:host .gcds-verify-banner .verify-banner__content,:host .gcds-verify-banner summary{font-size:90%}:host .gcds-verify-banner summary{display:-ms-flexbox;display:flex;margin-inline:auto;padding-block:var(--gcds-verify-banner-summary-padding)}:host .gcds-verify-banner summary:hover{cursor:pointer}:host .gcds-verify-banner summary .svg-container,:host .gcds-verify-banner summary p small{margin:var(--gcds-verify-banner-summary-content-margin)}:host .gcds-verify-banner summary p{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner summary .verify-banner__toggle{color:var(--gcds-verify-banner-toggle-text);-ms-flex:0 0 auto;flex:0 0 auto;font-weight:var(--gcds-verify-banner-toggle-font-weight);pointer-events:none;text-decoration:underline}:host .gcds-verify-banner summary .verify-banner__toggle .svg-container path{fill:var(--gcds-verify-banner-toggle-text)}:host .gcds-verify-banner .verify-banner__content{-webkit-border-before:var(--gcds-verify-banner-content-border-width) solid var(--gcds-verify-banner-content-border-color);border-block-start:var(--gcds-verify-banner-content-border-width) solid var(--gcds-verify-banner-content-border-color);margin:0 auto;-webkit-padding-after:var(--gcds-verify-banner-content-padding-block-end);padding-block-end:var(--gcds-verify-banner-content-padding-block-end);-webkit-padding-before:var(--gcds-verify-banner-content-padding-block-start);padding-block-start:var(--gcds-verify-banner-content-padding-block-start)}:host .gcds-verify-banner .verify-banner__content li{list-style:none;margin:var(--gcds-verify-banner-content-list-margin)}:host .gcds-verify-banner .verify-banner__content li h4,:host .gcds-verify-banner .verify-banner__content li p{width:90%}:host .gcds-verify-banner .verify-banner__content li p .svg-container{margin-inline:var(--gcds-verify-banner-content-list-svg-margin)}:host .gcds-verify-banner .verify-banner__content h4{margin:var(--gcds-verify-banner-content-heading-margin)}:host .gcds-verify-banner .verify-banner__content p{line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner[open] summary .verify-banner__toggle svg{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}";

const GcdsVerifyBanner$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    const observer = new MutationObserver((mutations) => {
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
    return (h(Host, null, h("details", { class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { class: 'svg-container', innerHTML: CanadaFlag }), h("p", null, h("small", null, I18N[lang].summary.text), h("a", { class: "verify-banner__toggle" }, h("small", null, I18N[lang].summary.link), h("span", { class: 'svg-container', innerHTML: ContentToggleArrow })))), h("div", { class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", null, h("small", null, I18N[lang].content.description)), h("br", null), h("gcds-grid", { tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", null, h("h4", null, I18N[lang].content.url.heading), h("p", null, h("small", null, I18N[lang].content.url.text))), h("li", null, h("h4", null, I18N[lang].content.languages.heading), h("p", null, h("small", null, I18N[lang].content.languages.text))), h("li", null, h("h4", null, I18N[lang].content.https.heading), h("p", null, h("small", null, I18N[lang].content.https.text, " ", h("strong", null, "https://"), "."))), h("li", null, h("h4", null, I18N[lang].content.contact.heading), h("p", null, h("small", null, I18N[lang].content.contact.text))))))));
  }
  get el() { return this; }
  static get style() { return gcdsVerifyBannerCss; }
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
