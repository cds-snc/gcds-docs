import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { e as emitEvent } from './utils.js';

const gcdsDetailsCss = "@layer reset, default, hover, focus;@layer reset{:host{display:block}:host .details__summary{background-color:transparent;border-color:transparent;cursor:pointer;display:block}:host .details__panel slot{display:initial}:host .details__panel ::slotted(:first-child){margin-block-start:0}:host .details__panel ::slotted(:last-child){margin-block-end:0}:host .details__panel ::slotted(ol),:host .details__panel ::slotted(ul){padding:0}}@layer default{:host .gcds-details .details__summary{color:var(--gcds-details-default-text);font:var(--gcds-details-font);padding:var(--gcds-details-summary-padding);position:relative;text-align:left;text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(\n        --gcds-details-default-decoration-thickness\n      );text-underline-offset:.2em;transition:background-color .15s ease-in-out,color .15s ease-in-out}:host .gcds-details .details__summary:before{border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:\"\";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);transition:transform .15s ease-in-out;width:0}:host .gcds-details .details__summary[aria-expanded=false]+.details__panel{display:none}:host .gcds-details .details__summary[aria-expanded=true]:before{transform:rotate(90deg)}:host .gcds-details .details__panel{border-inline-start:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);margin:var(--gcds-details-panel-margin);padding:var(--gcds-details-panel-padding)}:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font)}:host .gcds-details .details__panel ::slotted(:not(:last-child)){margin:0 0 var(--gcds-details-panel-slotted-margin)!important}:host .gcds-details .details__panel ::slotted(ol),:host .gcds-details .details__panel ::slotted(ul){margin-inline-start:var(\n          --gcds-details-panel-slotted-margin\n        )!important}:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small)}}@layer hover{@media (hover:hover){:host .gcds-details .details__summary:hover:not(:focus){color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness);text-underline-offset:.2em}:host .gcds-details .details__summary:hover:not(:focus):before{color:var(--gcds-details-hover-text)}}}@layer focus{:host .gcds-details .details__summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset);text-decoration:none}}";
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
        return (h(Host, { key: '6a7b027fb3c8f1c64e1e55c6be71acff23b8641c' }, h("div", { key: '3a1b6576b108a69f7790f0698ccf0180743bd882', class: "gcds-details" }, h("button", { key: 'ac9a5185db8182a144ebbd9275a9da7d04076608', "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggle();
                }
            }, class: "details__summary", id: "details__summary" }, detailsTitle), h("div", { key: '21d41431237eaf81e5f41de477961ba24aeb05ba', id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary" }, h("slot", { key: '7f1525c909982ea86e1ece24ca34559f3f7731c6' })))));
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