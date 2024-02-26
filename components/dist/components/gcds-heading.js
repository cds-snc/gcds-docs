import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsHeadingCss = "@layer reset,\ndefaults,\nvariants;@layer reset{:host{color:var(--gcds-heading-default-text);display:block}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{box-sizing:border-box;margin:0}:host slot{display:initial}}@layer defaults{:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{text-wrap:balance}:host h1.gcds-heading{font:var(--gcds-heading-h1-desktop)}@media only screen and (width < 48em){:host h1.gcds-heading{font:var(--gcds-heading-h1-mobile)}}:host h1.gcds-heading:after{background-color:var(--gcds-heading-h1-border-background);content:\"\";display:block;height:var(--gcds-heading-h1-border-height);margin-block-start:var(--gcds-heading-h1-border-margin);width:var(--gcds-heading-h1-border-width)}:host h2.gcds-heading{font:var(--gcds-heading-h2-desktop)}@media only screen and (width < 48em){:host h2.gcds-heading{font:var(--gcds-heading-h2-mobile)}}:host h3.gcds-heading{font:var(--gcds-heading-h3-desktop)}@media only screen and (width < 48em){:host h3.gcds-heading{font:var(--gcds-heading-h3-mobile)}}:host h4.gcds-heading{font:var(--gcds-heading-h4-desktop)}@media only screen and (width < 48em){:host h4.gcds-heading{font:var(--gcds-heading-h4-mobile)}}:host h5.gcds-heading{font:var(--gcds-heading-h5-desktop)}@media only screen and (width < 48em){:host h5.gcds-heading{font:var(--gcds-heading-h5-mobile)}}:host h6.gcds-heading{font:var(--gcds-heading-h6-desktop)}@media only screen and (width < 48em){:host h6.gcds-heading{font:var(--gcds-heading-h6-mobile)}}}@layer variants{:host h1.mt-0,:host h2.mt-0,:host h3.mt-0,:host h4.mt-0,:host h5.mt-0,:host h6.mt-0{margin-block-start:var(--gcds-heading-spacing-0)}:host h1.mt-50,:host h2.mt-50,:host h3.mt-50,:host h4.mt-50,:host h5.mt-50,:host h6.mt-50{margin-block-start:var(--gcds-heading-spacing-50)}:host h1.mt-100,:host h2.mt-100,:host h3.mt-100,:host h4.mt-100,:host h5.mt-100,:host h6.mt-100{margin-block-start:var(--gcds-heading-spacing-100)}:host h1.mt-150,:host h2.mt-150,:host h3.mt-150,:host h4.mt-150,:host h5.mt-150,:host h6.mt-150{margin-block-start:var(--gcds-heading-spacing-150)}:host h1.mt-200,:host h2.mt-200,:host h3.mt-200,:host h4.mt-200,:host h5.mt-200,:host h6.mt-200{margin-block-start:var(--gcds-heading-spacing-200)}:host h1.mt-250,:host h2.mt-250,:host h3.mt-250,:host h4.mt-250,:host h5.mt-250,:host h6.mt-250{margin-block-start:var(--gcds-heading-spacing-250)}:host h1.mt-300,:host h2.mt-300,:host h3.mt-300,:host h4.mt-300,:host h5.mt-300,:host h6.mt-300{margin-block-start:var(--gcds-heading-spacing-300)}:host h1.mt-400,:host h2.mt-400,:host h3.mt-400,:host h4.mt-400,:host h5.mt-400,:host h6.mt-400{margin-block-start:var(--gcds-heading-spacing-400)}:host h1.mt-450,:host h2.mt-450,:host h3.mt-450,:host h4.mt-450,:host h5.mt-450,:host h6.mt-450{margin-block-start:var(--gcds-heading-spacing-450)}:host h1.mt-500,:host h2.mt-500,:host h3.mt-500,:host h4.mt-500,:host h5.mt-500,:host h6.mt-500{margin-block-start:var(--gcds-heading-spacing-500)}:host h1.mt-550,:host h2.mt-550,:host h3.mt-550,:host h4.mt-550,:host h5.mt-550,:host h6.mt-550{margin-block-start:var(--gcds-heading-spacing-550)}:host h1.mt-600,:host h2.mt-600,:host h3.mt-600,:host h4.mt-600,:host h5.mt-600,:host h6.mt-600{margin-block-start:var(--gcds-heading-spacing-600)}:host h1.mt-700,:host h2.mt-700,:host h3.mt-700,:host h4.mt-700,:host h5.mt-700,:host h6.mt-700{margin-block-start:var(--gcds-heading-spacing-700)}:host h1.mt-800,:host h2.mt-800,:host h3.mt-800,:host h4.mt-800,:host h5.mt-800,:host h6.mt-800{margin-block-start:var(--gcds-heading-spacing-800)}:host h1.mt-900,:host h2.mt-900,:host h3.mt-900,:host h4.mt-900,:host h5.mt-900,:host h6.mt-900{margin-block-start:var(--gcds-heading-spacing-900)}:host h1.mt-1000,:host h2.mt-1000,:host h3.mt-1000,:host h4.mt-1000,:host h5.mt-1000,:host h6.mt-1000{margin-block-start:var(--gcds-heading-spacing-1000)}:host h1.mb-0,:host h2.mb-0,:host h3.mb-0,:host h4.mb-0,:host h5.mb-0,:host h6.mb-0{margin-block-end:var(--gcds-heading-spacing-0)}:host h1.mb-50,:host h2.mb-50,:host h3.mb-50,:host h4.mb-50,:host h5.mb-50,:host h6.mb-50{margin-block-end:var(--gcds-heading-spacing-50)}:host h1.mb-100,:host h2.mb-100,:host h3.mb-100,:host h4.mb-100,:host h5.mb-100,:host h6.mb-100{margin-block-end:var(--gcds-heading-spacing-100)}:host h1.mb-150,:host h2.mb-150,:host h3.mb-150,:host h4.mb-150,:host h5.mb-150,:host h6.mb-150{margin-block-end:var(--gcds-heading-spacing-150)}:host h1.mb-200,:host h2.mb-200,:host h3.mb-200,:host h4.mb-200,:host h5.mb-200,:host h6.mb-200{margin-block-end:var(--gcds-heading-spacing-200)}:host h1.mb-250,:host h2.mb-250,:host h3.mb-250,:host h4.mb-250,:host h5.mb-250,:host h6.mb-250{margin-block-end:var(--gcds-heading-spacing-250)}:host h1.mb-300,:host h2.mb-300,:host h3.mb-300,:host h4.mb-300,:host h5.mb-300,:host h6.mb-300{margin-block-end:var(--gcds-heading-spacing-300)}:host h1.mb-400,:host h2.mb-400,:host h3.mb-400,:host h4.mb-400,:host h5.mb-400,:host h6.mb-400{margin-block-end:var(--gcds-heading-spacing-400)}:host h1.mb-450,:host h2.mb-450,:host h3.mb-450,:host h4.mb-450,:host h5.mb-450,:host h6.mb-450{margin-block-end:var(--gcds-heading-spacing-450)}:host h1.mb-500,:host h2.mb-500,:host h3.mb-500,:host h4.mb-500,:host h5.mb-500,:host h6.mb-500{margin-block-end:var(--gcds-heading-spacing-500)}:host h1.mb-550,:host h2.mb-550,:host h3.mb-550,:host h4.mb-550,:host h5.mb-550,:host h6.mb-550{margin-block-end:var(--gcds-heading-spacing-550)}:host h1.mb-600,:host h2.mb-600,:host h3.mb-600,:host h4.mb-600,:host h5.mb-600,:host h6.mb-600{margin-block-end:var(--gcds-heading-spacing-600)}:host h1.mb-700,:host h2.mb-700,:host h3.mb-700,:host h4.mb-700,:host h5.mb-700,:host h6.mb-700{margin-block-end:var(--gcds-heading-spacing-700)}:host h1.mb-800,:host h2.mb-800,:host h3.mb-800,:host h4.mb-800,:host h5.mb-800,:host h6.mb-800{margin-block-end:var(--gcds-heading-spacing-800)}:host h1.mb-900,:host h2.mb-900,:host h3.mb-900,:host h4.mb-900,:host h5.mb-900,:host h6.mb-900{margin-block-end:var(--gcds-heading-spacing-900)}:host h1.mb-1000,:host h2.mb-1000,:host h3.mb-1000,:host h4.mb-1000,:host h5.mb-1000,:host h6.mb-1000{margin-block-end:var(--gcds-heading-spacing-1000)}:host h1.limit{max-width:var(--gcds-heading-character-limit-h1)}:host h2.limit{max-width:var(--gcds-heading-character-limit-h2)}:host h3.limit{max-width:var(--gcds-heading-character-limit-h3)}:host h4.limit{max-width:var(--gcds-heading-character-limit-h4)}:host h5.limit{max-width:var(--gcds-heading-character-limit-h5)}:host h6.limit{max-width:var(--gcds-heading-character-limit-h6)}}";
const GcdsHeadingStyle0 = gcdsHeadingCss;

const GcdsHeading$1 = /*@__PURE__*/ proxyCustomElement(class GcdsHeading extends HTMLElement {
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
        return (h(Host, null, h(Tag, { class: `
            gcds-heading
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          ` }, h("slot", null))));
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
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-heading"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-heading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsHeading$1);
            }
            break;
    } });
}

const GcdsHeading = GcdsHeading$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsHeading, defineCustomElement };

//# sourceMappingURL=gcds-heading.js.map