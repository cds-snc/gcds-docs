import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsDetailsCss = ":host .gcds-details{font:var(--gcds-details-font)}:host .gcds-details summary{color:var(--gcds-details-default-text);cursor:pointer;display:inline-block;padding:var(--gcds-details-summary-padding);position:relative;-webkit-transition:background-color .15s ease-in-out,color .15s ease-in-out;transition:background-color .15s ease-in-out,color .15s ease-in-out}:host .gcds-details summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);-webkit-box-shadow:var(--gcds-details-focus-box-shadow);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset)}:host .gcds-details summary:focus p{text-decoration:none}:host .gcds-details summary:before{-webkit-border-after:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;-webkit-border-before:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;-webkit-border-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:\"\";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out, -webkit-transform .15s ease-in-out;width:0}:host .gcds-details summary p{display:inline-block;font:var(--gcds-details-font);margin:var(--gcds-details-summary-text-margin);text-decoration:underline;-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor;text-decoration-thickness:var(--gcds-details-default-decoration-thickness);text-underline-offset:.2em}:host .gcds-details .details__panel{-webkit-border-start:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);border-inline-start:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);margin:var(--gcds-spacing-200) 0 0 0;padding:var(--gcds-details-panel-padding)}:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font);margin:0 0 var(--gcds-details-panel-slotted-margin)}:host .gcds-details .details__panel ::slotted(:first-child){-webkit-margin-before:0;margin-block-start:0}:host .gcds-details .details__panel ::slotted(:last-child){-webkit-margin-after:0;margin-block-end:0}:host .gcds-details .details__panel ::slotted(ol),:host .gcds-details .details__panel ::slotted(ul){-webkit-margin-start:var(--gcds-details-panel-slotted-margin);margin-inline-start:var(--gcds-details-panel-slotted-margin);padding:0}:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small)}:host .gcds-details:hover summary:not(:focus):before{color:var(--gcds-details-hover-text)}:host .gcds-details:hover summary:not(:focus) p{color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness);text-underline-offset:.2em}:host .gcds-details[open] summary:before{-webkit-transform:rotate(90deg);transform:rotate(90deg)}";

const GcdsDetails$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.detailsTitle = undefined;
    this.open = false;
  }
  render() {
    const { detailsTitle, open } = this;
    return (h(Host, null, h("details", { class: "gcds-details", open: open ? true : false }, h("summary", null, h("p", null, detailsTitle)), h("div", { class: "details__panel" }, h("slot", null)))));
  }
  get el() { return this; }
  static get style() { return gcdsDetailsCss; }
}, [1, "gcds-details", {
    "detailsTitle": [1, "details-title"],
    "open": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-details"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-details":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsDetails$1);
      }
      break;
  } });
}

const GcdsDetails = GcdsDetails$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsDetails, defineCustomElement };
