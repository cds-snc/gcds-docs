import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsHeadingCss = "@layer reset, default, limit, margin;@layer reset{:host{color:var(--gcds-heading-default-text);display:block}:host :is(h1,h2,h3,h4,h5,h6){box-sizing:border-box;margin:0}:host slot{display:initial}}@layer default{:host :is(h1,h2,h3,h4,h5,h6){text-wrap:balance}:host h1.gcds-heading{font:var(--gcds-heading-h1-desktop)}@media only screen and (width < 48em){:host h1.gcds-heading{font:var(--gcds-heading-h1-mobile)}}:host h1.gcds-heading:after{background-color:var(--gcds-heading-h1-border-background);content:\"\";display:block;height:var(--gcds-heading-h1-border-height);margin-block-start:var(--gcds-heading-h1-border-margin);width:var(--gcds-heading-h1-border-width)}:host h2.gcds-heading{font:var(--gcds-heading-h2-desktop)}@media only screen and (width < 48em){:host h2.gcds-heading{font:var(--gcds-heading-h2-mobile)}}:host h3.gcds-heading{font:var(--gcds-heading-h3-desktop)}@media only screen and (width < 48em){:host h3.gcds-heading{font:var(--gcds-heading-h3-mobile)}}:host h4.gcds-heading{font:var(--gcds-heading-h4-desktop)}@media only screen and (width < 48em){:host h4.gcds-heading{font:var(--gcds-heading-h4-mobile)}}:host h5.gcds-heading{font:var(--gcds-heading-h5-desktop)}@media only screen and (width < 48em){:host h5.gcds-heading{font:var(--gcds-heading-h5-mobile)}}:host h6.gcds-heading{font:var(--gcds-heading-h6-desktop)}@media only screen and (width < 48em){:host h6.gcds-heading{font:var(--gcds-heading-h6-mobile)}}}@layer limit{:host h1.limit{max-width:var(--gcds-heading-character-limit-h1)}:host h2.limit{max-width:var(--gcds-heading-character-limit-h2)}:host h3.limit{max-width:var(--gcds-heading-character-limit-h3)}:host h4.limit{max-width:var(--gcds-heading-character-limit-h4)}:host h5.limit{max-width:var(--gcds-heading-character-limit-h5)}:host h6.limit{max-width:var(--gcds-heading-character-limit-h6)}}@layer margin{:host :is(h1,h2,h3,h4,h5,h6).mt-0{margin-block-start:var(--gcds-heading-spacing-0)}:host :is(h1,h2,h3,h4,h5,h6).mt-50{margin-block-start:var(--gcds-heading-spacing-50)}:host :is(h1,h2,h3,h4,h5,h6).mt-100{margin-block-start:var(--gcds-heading-spacing-100)}:host :is(h1,h2,h3,h4,h5,h6).mt-150{margin-block-start:var(--gcds-heading-spacing-150)}:host :is(h1,h2,h3,h4,h5,h6).mt-200{margin-block-start:var(--gcds-heading-spacing-200)}:host :is(h1,h2,h3,h4,h5,h6).mt-250{margin-block-start:var(--gcds-heading-spacing-250)}:host :is(h1,h2,h3,h4,h5,h6).mt-300{margin-block-start:var(--gcds-heading-spacing-300)}:host :is(h1,h2,h3,h4,h5,h6).mt-400{margin-block-start:var(--gcds-heading-spacing-400)}:host :is(h1,h2,h3,h4,h5,h6).mt-450{margin-block-start:var(--gcds-heading-spacing-450)}:host :is(h1,h2,h3,h4,h5,h6).mt-500{margin-block-start:var(--gcds-heading-spacing-500)}:host :is(h1,h2,h3,h4,h5,h6).mt-550{margin-block-start:var(--gcds-heading-spacing-550)}:host :is(h1,h2,h3,h4,h5,h6).mt-600{margin-block-start:var(--gcds-heading-spacing-600)}:host :is(h1,h2,h3,h4,h5,h6).mt-700{margin-block-start:var(--gcds-heading-spacing-700)}:host :is(h1,h2,h3,h4,h5,h6).mt-800{margin-block-start:var(--gcds-heading-spacing-800)}:host :is(h1,h2,h3,h4,h5,h6).mt-900{margin-block-start:var(--gcds-heading-spacing-900)}:host :is(h1,h2,h3,h4,h5,h6).mt-1000{margin-block-start:var(--gcds-heading-spacing-1000)}:host :is(h1,h2,h3,h4,h5,h6).mb-0{margin-block-end:var(--gcds-heading-spacing-0)}:host :is(h1,h2,h3,h4,h5,h6).mb-50{margin-block-end:var(--gcds-heading-spacing-50)}:host :is(h1,h2,h3,h4,h5,h6).mb-100{margin-block-end:var(--gcds-heading-spacing-100)}:host :is(h1,h2,h3,h4,h5,h6).mb-150{margin-block-end:var(--gcds-heading-spacing-150)}:host :is(h1,h2,h3,h4,h5,h6).mb-200{margin-block-end:var(--gcds-heading-spacing-200)}:host :is(h1,h2,h3,h4,h5,h6).mb-250{margin-block-end:var(--gcds-heading-spacing-250)}:host :is(h1,h2,h3,h4,h5,h6).mb-300{margin-block-end:var(--gcds-heading-spacing-300)}:host :is(h1,h2,h3,h4,h5,h6).mb-400{margin-block-end:var(--gcds-heading-spacing-400)}:host :is(h1,h2,h3,h4,h5,h6).mb-450{margin-block-end:var(--gcds-heading-spacing-450)}:host :is(h1,h2,h3,h4,h5,h6).mb-500{margin-block-end:var(--gcds-heading-spacing-500)}:host :is(h1,h2,h3,h4,h5,h6).mb-550{margin-block-end:var(--gcds-heading-spacing-550)}:host :is(h1,h2,h3,h4,h5,h6).mb-600{margin-block-end:var(--gcds-heading-spacing-600)}:host :is(h1,h2,h3,h4,h5,h6).mb-700{margin-block-end:var(--gcds-heading-spacing-700)}:host :is(h1,h2,h3,h4,h5,h6).mb-800{margin-block-end:var(--gcds-heading-spacing-800)}:host :is(h1,h2,h3,h4,h5,h6).mb-900{margin-block-end:var(--gcds-heading-spacing-900)}:host :is(h1,h2,h3,h4,h5,h6).mb-1000{margin-block-end:var(--gcds-heading-spacing-1000)}}";
const GcdsHeadingStyle0 = gcdsHeadingCss;

const GcdsHeading = /*@__PURE__*/ proxyCustomElement(class GcdsHeading extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tag = undefined;
        this.characterLimit = true;
        this.marginTop = undefined;
        this.marginBottom = '400';
    }
    validateTag(newValue) {
        const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        if (!values.includes(newValue)) {
            console.error('Not a valid tag.');
        }
    }
    validateMarginTop(newValue) {
        const values = [
            '0',
            '50',
            '100',
            '150',
            '200',
            '250',
            '300',
            '400',
            '450',
            '500',
            '550',
            '600',
            '700',
            '800',
            '900',
            '1000',
        ];
        if (!this.marginTop || (this.marginTop && !values.includes(newValue))) {
            if (this.tag !== 'h1') {
                this.marginTop = '500';
            }
            else {
                this.marginTop = '0';
            }
        }
    }
    validateMarginBottom(newValue) {
        const values = [
            '0',
            '50',
            '100',
            '150',
            '200',
            '250',
            '300',
            '400',
            '450',
            '500',
            '550',
            '600',
            '700',
            '800',
            '900',
            '1000',
        ];
        if (this.marginBottom && !values.includes(newValue)) {
            this.marginBottom = '400';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTag(this.tag);
        this.validateMarginTop(this.marginTop);
        this.validateMarginBottom(this.marginBottom);
    }
    render() {
        const { characterLimit, marginTop, marginBottom, tag } = this;
        const Tag = tag;
        return (h(Host, { key: '0416b329bd8fe577775bdce03ffc95a62582722d' }, h(Tag, { key: '5e0af26dad00a8d0568ba0af150694187ad86e79', class: `
            gcds-heading
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          ` }, h("slot", { key: '9f01a4e2a648ead351e6e6860262df0f182827cd' }))));
    }
    get el() { return this; }
    static get watchers() { return {
        "tag": ["validateTag"],
        "marginTop": ["validateMarginTop"],
        "marginBottom": ["validateMarginBottom"]
    }; }
    static get style() { return GcdsHeadingStyle0; }
}, [1, "gcds-heading", {
        "tag": [1025],
        "characterLimit": [4, "character-limit"],
        "marginTop": [1025, "margin-top"],
        "marginBottom": [1025, "margin-bottom"]
    }, undefined, {
        "tag": ["validateTag"],
        "marginTop": ["validateMarginTop"],
        "marginBottom": ["validateMarginBottom"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-heading"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-heading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsHeading);
            }
            break;
    } });
}

export { GcdsHeading as G, defineCustomElement as d };

//# sourceMappingURL=gcds-heading2.js.map