import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsDetailsCss = ":host .details__summary{background-color:transparent;border-color:transparent;color:var(--gcds-details-default-text);cursor:pointer;display:block;font:var(--gcds-details-font);padding:var(--gcds-details-summary-padding);position:relative;text-align:start;text-decoration:underline var(--gcds-details-default-decoration-thickness);text-underline-offset:.2em;transition:background-color .15s ease-in-out,color .15s ease-in-out}:host .details__summary:hover:not(:focus){color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness);text-underline-offset:.2em}:host .details__summary:hover:not(:focus):before{color:var(--gcds-details-hover-text)}:host .details__summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset);text-decoration:none}:host .details__summary:before{border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:\"\";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);transition:transform .15s ease-in-out;width:0}:host .details__summary[aria-expanded=false]+.details__panel{display:none}:host .details__summary[aria-expanded=true]:before{transform:rotate(90deg)}:host .details__panel{border-inline-start:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);margin:var(--gcds-details-panel-margin);padding:var(--gcds-details-panel-padding)}:host .details__panel slot{display:initial}:host .details__panel ::slotted(*){font:var(--gcds-details-font);margin:0 0 var(--gcds-details-panel-slotted-margin)}:host .details__panel ::slotted(:first-child){margin-block-start:0}:host .details__panel ::slotted(:last-child){margin-block-end:0}:host .details__panel ::slotted(ol),:host .details__panel ::slotted(ul){margin-inline-start:var(--gcds-details-panel-slotted-margin);padding:0}:host .details__panel ::slotted(small){font:var(--gcds-details-font-small)}";
const GcdsDetailsStyle0 = gcdsDetailsCss;

const GcdsDetails$1 = /*@__PURE__*/ proxyCustomElement(class GcdsDetails extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.detailsTitle = undefined;
        this.open = false;
    }
    render() {
        const { detailsTitle, open } = this;
        return (h(Host, null, h("button", { "aria-expanded": open.toString(), "aria-controls": "details__panel", onClick: () => (this.open = !open), class: "details__summary", id: "details__summary" }, detailsTitle), h("div", { id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary" }, h("slot", null))));
    }
    get el() { return this; }
    static get style() { return GcdsDetailsStyle0; }
}, [1, "gcds-details", {
        "detailsTitle": [1, "details-title"],
        "open": [1540]
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

//# sourceMappingURL=gcds-details.js.map