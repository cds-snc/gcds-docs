import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { e as emitEvent } from './utils.js';

const gcdsDetailsCss = "@layer reset, default, hover, focus, print;@layer reset{:host{display:block}:host .details__summary{background-color:transparent;border-color:transparent;cursor:pointer;display:block}:host .details__panel slot{display:initial}:host .details__panel ::slotted(:first-child){margin-block-start:0}:host .details__panel ::slotted(:last-child){margin-block-end:0}:host .details__panel ::slotted(ol),:host .details__panel ::slotted(ul){padding:0}}@layer default{:host .gcds-details .details__summary{color:var(--gcds-details-default-text);font:var(--gcds-details-font-desktop);padding:var(--gcds-details-summary-padding);position:relative;text-align:left;text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(\n        --gcds-details-default-decoration-thickness\n      );text-underline-offset:.2em;transition:background-color .15s ease-in-out,color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-details .details__summary{font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__summary:before{border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:\"\";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);transition:transform .15s ease-in-out;width:0}:host .gcds-details .details__summary[aria-expanded=false]+.details__panel{display:none}:host .gcds-details .details__summary[aria-expanded=true]:before{transform:rotate(90deg)}:host .gcds-details .details__panel{margin:var(--gcds-details-panel-margin);padding:var(--gcds-details-panel-padding);position:relative}:host .gcds-details .details__panel:before{background-color:var(--gcds-details-panel-border-color);content:\"\";display:block;height:100%;left:0;position:absolute;top:0;width:var(--gcds-details-panel-border-width)}:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__panel ::slotted(:not(:last-child)){margin:0 0 var(--gcds-details-panel-slotted-margin)!important}:host .gcds-details .details__panel ::slotted(ol),:host .gcds-details .details__panel ::slotted(ul){margin-inline-start:var(\n          --gcds-details-panel-slotted-margin\n        )!important}:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-mobile)}}}@layer hover{@media (hover:hover){:host .gcds-details .details__summary:hover:not(:focus){color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness);text-underline-offset:.2em}:host .gcds-details .details__summary:hover:not(:focus):before{color:var(--gcds-details-hover-text)}}}@layer focus{:host .gcds-details .details__summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset);text-decoration:none}}@layer print{@media print{:host .gcds-details .details__summary{color:var(--gcds-details-print-summary-text);font-weight:var(--gcds-details-print-summary-font-weight);text-decoration:none}:host .gcds-details .details__summary:before{transform:rotate(90deg)}:host .gcds-details .details__panel{border-left:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);display:block}}}";
const GcdsDetailsStyle0 = gcdsDetailsCss;

const GcdsDetails$1 = /*@__PURE__*/ proxyCustomElement(class GcdsDetails extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.detailsTitle = undefined;
        this.open = false;
    }
    /**
     * Methods
     */
    /*
     * Toggle details open or closed
     */
    async toggle() {
        this.open = !this.open;
    }
    render() {
        const { detailsTitle, open } = this;
        return (h(Host, { key: '17839f99ea3d7d6f190a7bc5df72d1e056e09b3c' }, h("div", { key: '5ebfa6b8c4b0317728ebb114a0dac1b3574ceda8', class: "gcds-details" }, h("button", { key: '3e02dfd0ca368a4758a79edbf2b125e721427ce3', "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggle();
                }
            }, class: "details__summary", id: "details__summary" }, detailsTitle), h("div", { key: 'a12601d1dcad1cff247c32a59aeacdbe14100c6f', id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary" }, h("slot", { key: '11209ad4acd9a6f6d678e1fb7047b070339779b2' })))));
    }
    get el() { return this; }
    static get style() { return GcdsDetailsStyle0; }
}, [1, "gcds-details", {
        "detailsTitle": [1, "details-title"],
        "open": [1540],
        "toggle": [64]
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