import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const I18N = {
  en: {
    nameError: 'gcds-icon: Invalid name.',
  },
  fr: {
    nameError: 'gcds-icon: Nom invalide.',
  },
};

const gcdsIconCss = "@layer reset, default, names, margin, size;\n@layer reset {\n  :host {\n    display: inline-block;\n  }\n  :host :host .gcds-icon {\n    font-size: inherit;\n    line-height: inherit;\n    color: inherit;\n  }\n}\n@layer default {\n  :host .gcds-icon {\n    font-family: var(--gcds-icon-font-family) !important;\n    speak: never;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n}\n@layer names {\n  :host .gcds-icon-checkmark-circle:before {\n    content: \"\\e908\";\n  }\n  :host .gcds-icon-chevron-down:before {\n    content: \"\\e900\";\n  }\n  :host .gcds-icon-chevron-left:before {\n    content: \"\\e901\";\n  }\n  :host .gcds-icon-chevron-right:before {\n    content: \"\\e902\";\n  }\n  :host .gcds-icon-chevron-up:before {\n    content: \"\\e903\";\n  }\n  :host .gcds-icon-close:before {\n    content: \"\\e90b\";\n  }\n  :host .gcds-icon-download:before {\n    content: \"\\e906\";\n  }\n  :host .gcds-icon-email:before {\n    content: \"\\e905\";\n  }\n  :host .gcds-icon-exclamation-circle:before {\n    content: \"\\e909\";\n  }\n  :host .gcds-icon-external:before {\n    content: \"\\e904\";\n  }\n  :host .gcds-icon-info-circle:before {\n    content: \"\\e90a\";\n  }\n  :host .gcds-icon-phone:before {\n    content: \"\\e90c\";\n  }\n  :host .gcds-icon-search:before {\n    content: \"\\e907\";\n  }\n  :host .gcds-icon-warning-triangle:before {\n    content: \"\\e90d\";\n  }\n}\n@layer margin {\n  :host .gcds-icon {\n    /* Margin left */\n    /* Margin right */\n  }\n  :host .gcds-icon.ml-0 {\n    margin-inline-start: var(--gcds-icon-margin-0);\n  }\n  :host .gcds-icon.ml-25 {\n    margin-inline-start: var(--gcds-icon-margin-25);\n  }\n  :host .gcds-icon.ml-50 {\n    margin-inline-start: var(--gcds-icon-margin-50);\n  }\n  :host .gcds-icon.ml-75 {\n    margin-inline-start: var(--gcds-icon-margin-75);\n  }\n  :host .gcds-icon.ml-100 {\n    margin-inline-start: var(--gcds-icon-margin-100);\n  }\n  :host .gcds-icon.ml-125 {\n    margin-inline-start: var(--gcds-icon-margin-125);\n  }\n  :host .gcds-icon.ml-150 {\n    margin-inline-start: var(--gcds-icon-margin-150);\n  }\n  :host .gcds-icon.ml-175 {\n    margin-inline-start: var(--gcds-icon-margin-175);\n  }\n  :host .gcds-icon.ml-200 {\n    margin-inline-start: var(--gcds-icon-margin-200);\n  }\n  :host .gcds-icon.ml-225 {\n    margin-inline-start: var(--gcds-icon-margin-225);\n  }\n  :host .gcds-icon.ml-250 {\n    margin-inline-start: var(--gcds-icon-margin-250);\n  }\n  :host .gcds-icon.ml-300 {\n    margin-inline-start: var(--gcds-icon-margin-300);\n  }\n  :host .gcds-icon.ml-350 {\n    margin-inline-start: var(--gcds-icon-margin-350);\n  }\n  :host .gcds-icon.ml-400 {\n    margin-inline-start: var(--gcds-icon-margin-400);\n  }\n  :host .gcds-icon.ml-450 {\n    margin-inline-start: var(--gcds-icon-margin-450);\n  }\n  :host .gcds-icon.ml-500 {\n    margin-inline-start: var(--gcds-icon-margin-500);\n  }\n  :host .gcds-icon.ml-550 {\n    margin-inline-start: var(--gcds-icon-margin-550);\n  }\n  :host .gcds-icon.ml-600 {\n    margin-inline-start: var(--gcds-icon-margin-600);\n  }\n  :host .gcds-icon.ml-650 {\n    margin-inline-start: var(--gcds-icon-margin-650);\n  }\n  :host .gcds-icon.ml-700 {\n    margin-inline-start: var(--gcds-icon-margin-700);\n  }\n  :host .gcds-icon.ml-750 {\n    margin-inline-start: var(--gcds-icon-margin-750);\n  }\n  :host .gcds-icon.ml-800 {\n    margin-inline-start: var(--gcds-icon-margin-800);\n  }\n  :host .gcds-icon.ml-850 {\n    margin-inline-start: var(--gcds-icon-margin-850);\n  }\n  :host .gcds-icon.ml-900 {\n    margin-inline-start: var(--gcds-icon-margin-900);\n  }\n  :host .gcds-icon.ml-950 {\n    margin-inline-start: var(--gcds-icon-margin-950);\n  }\n  :host .gcds-icon.ml-1000 {\n    margin-inline-start: var(--gcds-icon-margin-1000);\n  }\n  :host .gcds-icon.ml-1050 {\n    margin-inline-start: var(--gcds-icon-margin-1050);\n  }\n  :host .gcds-icon.ml-1100 {\n    margin-inline-start: var(--gcds-icon-margin-1100);\n  }\n  :host .gcds-icon.ml-1150 {\n    margin-inline-start: var(--gcds-icon-margin-1150);\n  }\n  :host .gcds-icon.ml-1200 {\n    margin-inline-start: var(--gcds-icon-margin-1200);\n  }\n  :host .gcds-icon.ml-1250 {\n    margin-inline-start: var(--gcds-icon-margin-1250);\n  }\n  :host .gcds-icon.mr-0 {\n    margin-inline-end: var(--gcds-icon-margin-0);\n  }\n  :host .gcds-icon.mr-25 {\n    margin-inline-end: var(--gcds-icon-margin-25);\n  }\n  :host .gcds-icon.mr-50 {\n    margin-inline-end: var(--gcds-icon-margin-50);\n  }\n  :host .gcds-icon.mr-75 {\n    margin-inline-end: var(--gcds-icon-margin-75);\n  }\n  :host .gcds-icon.mr-100 {\n    margin-inline-end: var(--gcds-icon-margin-100);\n  }\n  :host .gcds-icon.mr-125 {\n    margin-inline-end: var(--gcds-icon-margin-125);\n  }\n  :host .gcds-icon.mr-150 {\n    margin-inline-end: var(--gcds-icon-margin-150);\n  }\n  :host .gcds-icon.mr-175 {\n    margin-inline-end: var(--gcds-icon-margin-175);\n  }\n  :host .gcds-icon.mr-200 {\n    margin-inline-end: var(--gcds-icon-margin-200);\n  }\n  :host .gcds-icon.mr-225 {\n    margin-inline-end: var(--gcds-icon-margin-225);\n  }\n  :host .gcds-icon.mr-250 {\n    margin-inline-end: var(--gcds-icon-margin-250);\n  }\n  :host .gcds-icon.mr-300 {\n    margin-inline-end: var(--gcds-icon-margin-300);\n  }\n  :host .gcds-icon.mr-350 {\n    margin-inline-end: var(--gcds-icon-margin-350);\n  }\n  :host .gcds-icon.mr-400 {\n    margin-inline-end: var(--gcds-icon-margin-400);\n  }\n  :host .gcds-icon.mr-450 {\n    margin-inline-end: var(--gcds-icon-margin-450);\n  }\n  :host .gcds-icon.mr-500 {\n    margin-inline-end: var(--gcds-icon-margin-500);\n  }\n  :host .gcds-icon.mr-550 {\n    margin-inline-end: var(--gcds-icon-margin-550);\n  }\n  :host .gcds-icon.mr-600 {\n    margin-inline-end: var(--gcds-icon-margin-600);\n  }\n  :host .gcds-icon.mr-650 {\n    margin-inline-end: var(--gcds-icon-margin-650);\n  }\n  :host .gcds-icon.mr-700 {\n    margin-inline-end: var(--gcds-icon-margin-700);\n  }\n  :host .gcds-icon.mr-750 {\n    margin-inline-end: var(--gcds-icon-margin-750);\n  }\n  :host .gcds-icon.mr-800 {\n    margin-inline-end: var(--gcds-icon-margin-800);\n  }\n  :host .gcds-icon.mr-850 {\n    margin-inline-end: var(--gcds-icon-margin-850);\n  }\n  :host .gcds-icon.mr-900 {\n    margin-inline-end: var(--gcds-icon-margin-900);\n  }\n  :host .gcds-icon.mr-950 {\n    margin-inline-end: var(--gcds-icon-margin-950);\n  }\n  :host .gcds-icon.mr-1000 {\n    margin-inline-end: var(--gcds-icon-margin-1000);\n  }\n  :host .gcds-icon.mr-1050 {\n    margin-inline-end: var(--gcds-icon-margin-1050);\n  }\n  :host .gcds-icon.mr-1100 {\n    margin-inline-end: var(--gcds-icon-margin-1100);\n  }\n  :host .gcds-icon.mr-1150 {\n    margin-inline-end: var(--gcds-icon-margin-1150);\n  }\n  :host .gcds-icon.mr-1200 {\n    margin-inline-end: var(--gcds-icon-margin-1200);\n  }\n  :host .gcds-icon.mr-1250 {\n    margin-inline-end: var(--gcds-icon-margin-1250);\n  }\n}\n@layer size {\n  :host .gcds-icon.size-text-small {\n    font-size: var(--gcds-icon-font-size-text-small);\n    line-height: var(--gcds-icon-line-height-text-small);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-text-small {\n      font-size: var(--gcds-icon-font-size-text-small-mobile);\n      line-height: var(--gcds-icon-line-height-text-small-mobile);\n    }\n  }\n  :host .gcds-icon.size-text {\n    font-size: var(--gcds-icon-font-size-text);\n    line-height: var(--gcds-icon-line-height-text);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-text {\n      font-size: var(--gcds-icon-font-size-text-mobile);\n      line-height: var(--gcds-icon-line-height-text-mobile);\n    }\n  }\n  :host .gcds-icon.size-h6 {\n    font-size: var(--gcds-icon-font-size-h6);\n    line-height: var(--gcds-icon-line-height-h6);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h6 {\n      font-size: var(--gcds-icon-font-size-h6-mobile);\n      line-height: var(--gcds-icon-line-height-h6-mobile);\n    }\n  }\n  :host .gcds-icon.size-h5 {\n    font-size: var(--gcds-icon-font-size-h5);\n    line-height: var(--gcds-icon-line-height-h5);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h5 {\n      font-size: var(--gcds-icon-font-size-h5-mobile);\n      line-height: var(--gcds-icon-line-height-h5-mobile);\n    }\n  }\n  :host .gcds-icon.size-h4 {\n    font-size: var(--gcds-icon-font-size-h4);\n    line-height: var(--gcds-icon-line-height-h4);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h4 {\n      font-size: var(--gcds-icon-font-size-h4-mobile);\n      line-height: var(--gcds-icon-line-height-h4-mobile);\n    }\n  }\n  :host .gcds-icon.size-h3 {\n    font-size: var(--gcds-icon-font-size-h3);\n    line-height: var(--gcds-icon-line-height-h3);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h3 {\n      font-size: var(--gcds-icon-font-size-h3-mobile);\n      line-height: var(--gcds-icon-line-height-h3-mobile);\n    }\n  }\n  :host .gcds-icon.size-h2 {\n    font-size: var(--gcds-icon-font-size-h2);\n    line-height: var(--gcds-icon-line-height-h2);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h2 {\n      font-size: var(--gcds-icon-font-size-h2-mobile);\n      line-height: var(--gcds-icon-line-height-h2-mobile);\n    }\n  }\n  :host .gcds-icon.size-h1 {\n    font-size: var(--gcds-icon-font-size-h1);\n    line-height: var(--gcds-icon-line-height-h1);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h1 {\n      font-size: var(--gcds-icon-font-size-h1-mobile);\n      line-height: var(--gcds-icon-line-height-h1-mobile);\n    }\n  }\n}";
const GcdsIconStyle0 = gcdsIconCss;

const GcdsIcon = /*@__PURE__*/ proxyCustomElement(class GcdsIcon extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.label = undefined;
        this.marginLeft = undefined;
        this.marginRight = undefined;
        this.name = undefined;
        this.size = 'inherit';
    }
    validateName(newValue) {
        const values = [
            'checkmark-circle',
            'chevron-down',
            'chevron-left',
            'chevron-right',
            'chevron-up',
            'close',
            'download',
            'email',
            'exclamation-circle',
            'external',
            'info-circle',
            'phone',
            'search',
            'warning-triangle',
        ];
        if (!values.includes(newValue)) {
            console.error(`${I18N['en'].nameError} | ${I18N['fr'].nameError}`);
        }
    }
    validateSize(newValue) {
        const values = [
            'inherit',
            'text-small',
            'text',
            'h6',
            'h5',
            'h4',
            'h3',
            'h2',
            'h1',
        ];
        if (!values.includes(newValue)) {
            this.size = 'inherit';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateName(this.name);
        this.validateSize(this.size);
    }
    render() {
        const { label, marginLeft, marginRight, name, size } = this;
        return (h(Host, { key: 'c1007874d5124b1b6a922176716182ddf1d2856f' }, h("span", { key: '6d1934a3ae40303b9246820187f25bb3eec65648', class: `
            gcds-icon gcds-icon-${name}
            ${marginLeft ? `ml-${marginLeft}` : ''}
            ${marginRight ? `mr-${marginRight}` : ''}
            ${size ? `size-${size}` : ''}
          `, role: "img", "aria-label": label ? label : false, "aria-hidden": label ? 'false' : 'true' })));
    }
    get el() { return this; }
    static get watchers() { return {
        "name": ["validateName"],
        "size": ["validateSize"]
    }; }
    static get style() { return GcdsIconStyle0; }
}, [1, "gcds-icon", {
        "label": [1],
        "marginLeft": [1, "margin-left"],
        "marginRight": [1, "margin-right"],
        "name": [1025],
        "size": [1]
    }, undefined, {
        "name": ["validateName"],
        "size": ["validateSize"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsIcon);
            }
            break;
    } });
}

export { GcdsIcon as G, defineCustomElement as d };

//# sourceMappingURL=gcds-icon2.js.map