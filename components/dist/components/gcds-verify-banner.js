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
        return (h(Host, { key: '48153c15ce4d671d0bf60ddbe3d336e5e0be81af' }, h("details", { key: '2e617043b0000ff20429eb9a46324a2f40fb1a95', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: '4fa310845587a590815de9ffcb7e7c50354020b9', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: '094552cb86ed9ac56935441e352e2ea9ec4671c8', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: '813aa039eddf1b68d3db854e90165f9314a59888' }, h("small", { key: '2161ed4e25a9680194da06614344365fafe327d1' }, I18N[lang].summary.text), h("button", { key: '5192428be907c4e5d951b5871fd5af436b40c4fd', class: "verify-banner__toggle" }, h("small", { key: 'b18b2fccc1b7bd85dacd2a07a590cad716fe8bc9' }, I18N[lang].summary.link), h("span", { key: '53007393e80408a5486ed2539ca8abdfb2e3808a', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: 'e7737a8d5fbc9f70aa1579d5258dd5e8053b849c', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: '474171c6a6bbbb8772e7f0485dfffb51a864ff05' }, h("small", { key: '3bf99ee8fcf04df4f1fdce2e637b561137c38188' }, I18N[lang].content.description)), h("br", { key: 'fd2af592a4462cf079ee227bbe15934fb8d4d5b4' }), h("gcds-grid", { key: '2c3f42400363486e7b662dbc70b4a4a9c873255a', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'e251f3f8663eebe19d3a59aa9d46822bdc097273' }, h("h4", { key: '277e4d0462a8b78280e5636d87026998efeb9361' }, I18N[lang].content.url.heading), h("p", { key: '8e0b9981deaf0221533ceb24f2f733eec19825f7' }, h("small", { key: 'be67900e62262b8d019e7bdeee7b63e90a1075b3' }, I18N[lang].content.url.text))), h("li", { key: '0893412462dfff8f9f214395295447d9fdd34f16' }, h("h4", { key: '7d3562b810abdd8d961744cb239181e2e1b50580' }, I18N[lang].content.languages.heading), h("p", { key: '0aba8b207788f423a8e4566fccf77d86d3e56ef8' }, h("small", { key: 'c9b4012e2ed096b86a5eefa1f7fe917daa573049' }, I18N[lang].content.languages.text))), h("li", { key: 'e232beacff8ce2f22889e661dbbb0d866f029e28' }, h("h4", { key: '4303bdb3c1209eceba4076dc53162d62d9671a8d' }, I18N[lang].content.https.heading), h("p", { key: '5807627918a98faa18893bd85829561afb3d5746' }, h("small", { key: '7d1b8e8e56cade3c18cac32837c3d5adc3c88889' }, I18N[lang].content.https.text, " ", h("strong", { key: 'f4fcc669ccaa40756d3d69a23b8466188e78a47c' }, "https://"), "."))), h("li", { key: '5e388710ae4ef3923909cc9f0442a18a185243f0' }, h("h4", { key: 'c92b10a99089c96363e126358acf26d2c6098404' }, I18N[lang].content.contact.heading), h("p", { key: '9a6736ffdd9bbd9111411c4aaddbe97256b0db21' }, h("small", { key: 'b7d1b456d226778ecb8087f4086f9cef5dd7593b' }, I18N[lang].content.contact.text))))))));
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