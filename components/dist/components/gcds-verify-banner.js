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
        return (h(Host, { key: '79bc4dc615e909274744d7c9658fbe004c2bf6bc' }, h("details", { key: '0e01a3f845f9f882c07b1c34ab51a2f381c8bf5f', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: '60a371e675c308932c2f5af336c6e81035ca01f2', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: '7b0def4d6a9a4eb3a313fff1fe66a0bc6b1f051a', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: 'a074a77e354a0166aa6770f32fd83d1cdbd8532a' }, h("small", { key: '1acc5177f5d3ba56d97816fe2f99a7568107e433' }, I18N[lang].summary.text), h("button", { key: 'ec6a3f1625d23552f8d31c0cde5803ddc2a77272', class: "verify-banner__toggle" }, h("small", { key: '3f6d49e3165de7c1c6b2e7d6d06d274f0fbdd56a' }, I18N[lang].summary.link), h("span", { key: '153fc0c626c8a986db416c5ac29713a2ac0fcdf1', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: 'e81165bfd96795ccf462da1d4a1dda868395cce5', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: '22045e8846b47339074fd5f38f031ca4b8959d8d' }, h("small", { key: '473ff5b3a65b167204a67097f66a6d84d0a4ce23' }, I18N[lang].content.description)), h("br", { key: '15af7e05f46d20060c48a59474588e60831a094e' }), h("gcds-grid", { key: '709f44671c2d73683385dbf9621718d9c20bc289', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'f65ebc8634708bc47b1a32e92782555083685064' }, h("h4", { key: '6c4cf0f3461551b7a0f6c1ab98a00d027f1dd5a2' }, I18N[lang].content.url.heading), h("p", { key: '85f95f3ca4a0fba659d60f6145d3e37089a8ecd4' }, h("small", { key: '1b105c8da0a8976ab8c4e1bad11447be51a65c8f' }, I18N[lang].content.url.text))), h("li", { key: '93c3f0c0487ba36d347f58bffc777ce66de6f3fd' }, h("h4", { key: 'f8481a2a32400da5a36109fa56a962593e0312e2' }, I18N[lang].content.languages.heading), h("p", { key: 'd9596aee415d7c38b2dc9a573805baae85d05a38' }, h("small", { key: '904e6811890b96a3bd96dea52204a6d15e3b44ac' }, I18N[lang].content.languages.text))), h("li", { key: '7844b115d12d5071d9d23ee3f7fef4507461b607' }, h("h4", { key: '36843578e05e2c110e759355324dc428c1902e7b' }, I18N[lang].content.https.heading), h("p", { key: '70cf52e7807ff64061d0ca654f5295e94bb32fd1' }, h("small", { key: '1764d52ed82aecfcf0ca8f533848d08114852403' }, I18N[lang].content.https.text, " ", h("strong", { key: '6675bf241c5f83bb100ccd15d78cd1d6351fdc37' }, "https://"), "."))), h("li", { key: '8779e017066292331a05451847ac7c3d5865999a' }, h("h4", { key: 'd82025f6d665cc8df4ddb97cc73e539c058ae1b0' }, I18N[lang].content.contact.heading), h("p", { key: '391899c66d166527c07eebaa1a017b665a45e354' }, h("small", { key: 'ea86b227a962ba2bfe0784d6bf89b24c592c26ba' }, I18N[lang].content.contact.text))))))));
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