import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';

const gcdsCardCss = "@layer reset, defaults, slot, link, state.hover, state.focus;@layer reset{:host *{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}}@layer defaults{:host{display:block}:host .gcds-card{background-color:var(--gcds-card-background-color);border:var(--gcds-card-border);border-radius:var(--gcds-card-border-radius);color:var(--gcds-card-color);display:block;height:100%;padding:var(--gcds-card-padding);position:relative}:host .gcds-card>:not(slot):not(.gcds-card__spacer){display:block;margin:var(--gcds-card-margin)}:host .gcds-card .gcds-card__image{width:100%}:host .gcds-card .gcds-card__tag{color:var(--gcds-card-tag-color);font:var(--gcds-card-tag-font)}:host .gcds-card .gcds-card__title,:host .gcds-card .gcds-card__title>a{color:var(--gcds-card-title-color);font:var(--gcds-card-title-font);-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-card-title-text-decoration-thickness);text-underline-offset:var(--gcds-card-title-text-underline-offset);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host .gcds-card .gcds-card__description{max-width:var(--gcds-card-description-max-width)}}@layer slot{:host .gcds-card:has(slot){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host .gcds-card:has(slot) .gcds-card__spacer{-ms-flex:1;flex:1}:host .gcds-card:has(slot) ::slotted(*){color:var(--gcds-card-slot-color);font:var(--gcds-card-slot-font)!important;z-index:2}}@layer link{:host .gcds-card--link .gcds-card__title>a:after,:host .gcds-card--link a.gcds-card__title:after{bottom:0;content:\"\";left:0;pointer-events:auto;position:absolute;right:0;top:0;z-index:1}}@layer state.hover{:host .gcds-card--link:hover{background-color:var(--gcds-card-hover-background-color);-webkit-box-shadow:var(--gcds-card-hover-box-shadow);box-shadow:var(--gcds-card-hover-box-shadow);cursor:pointer}:host .gcds-card--link:hover .gcds-card__title>a,:host .gcds-card--link:hover a.gcds-card__title{color:var(--gcds-card-hover-title-color);text-decoration-thickness:var(--gcds-card-hover-title-text-decoration-thickness)}:host .gcds-card__title>a:hover,:host a.gcds-card__title:hover{color:var(--gcds-card-hover-title-color);text-decoration-thickness:var(--gcds-card-hover-title-text-decoration-thickness)}}@layer state.focus{:host .gcds-card__title>a:focus,:host a.gcds-card__title:focus{background-color:var(--gcds-card-focus-background);border-radius:var(--gcds-card-focus-border-radius);-webkit-box-shadow:var(--gcds-card-focus-box-shadow);box-shadow:var(--gcds-card-focus-box-shadow);color:var(--gcds-card-focus-color);outline:var(--gcds-card-focus-outline);outline-offset:var(--gcds-card-focus-outline-offset);text-decoration:none}}";

const GcdsCard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = 'link';
    this.cardTitle = undefined;
    this.titleElement = 'a';
    this.href = undefined;
    this.description = undefined;
    this.tag = undefined;
    this.imgSrc = undefined;
    this.imgAlt = undefined;
  }
  get hasCardFooter() {
    return !!this.el.querySelector('[slot="footer"]');
  }
  render() {
    const { type, cardTitle, titleElement, href, description, tag, imgSrc, imgAlt, hasCardFooter } = this;
    const Element = titleElement;
    return (h(Host, null, h("div", { class: `gcds-card gcds-card--${type}` }, imgSrc &&
      h("img", { src: imgSrc, alt: imgAlt ? imgAlt : "", class: "gcds-card__image" }), tag &&
      h("span", { class: "gcds-card__tag" }, tag), Element != 'a' ?
      h(Element, { class: "gcds-card__title" }, h("a", { href: href }, cardTitle))
      :
        h("a", { href: href, class: "gcds-card__title" }, cardTitle), description &&
      h("p", { class: "gcds-card__description" }, description), hasCardFooter &&
      h(Fragment, null, h("div", { class: "gcds-card__spacer" }), h("slot", { name: "footer" })))));
  }
  get el() { return this; }
  static get style() { return gcdsCardCss; }
}, [1, "gcds-card", {
    "type": [513],
    "cardTitle": [513, "card-title"],
    "titleElement": [1, "title-element"],
    "href": [513],
    "description": [513],
    "tag": [513],
    "imgSrc": [513, "img-src"],
    "imgAlt": [513, "img-alt"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-card"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsCard$1);
      }
      break;
  } });
}

const GcdsCard = GcdsCard$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsCard, defineCustomElement };
