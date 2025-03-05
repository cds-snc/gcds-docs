import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';

const I18N = {
  en: {
    required: 'required',
  },
  fr: {
    required: 'obligatoire',
  },
};

const gcdsLabelCss = "@layer reset, default;@layer reset{.sc-gcds-label-h{display:block}}@layer default{.sc-gcds-label-h .gcds-label{color:var(--gcds-label-text);cursor:pointer;display:block;font:var(--gcds-label-font-desktop);margin:var(--gcds-label-margin)!important;max-width:100%}@media only screen and (width < 48em){.sc-gcds-label-h .gcds-label{font:var(--gcds-label-font-mobile)}}.sc-gcds-label-h .gcds-label.label--hidden{height:0;margin:0;opacity:0;overflow:hidden;width:0}.sc-gcds-label-h .gcds-label .label--required{font-weight:var(--gcds-label-required-font-weight);margin:var(--gcds-label-required-margin)!important}}";
const GcdsLabelStyle0 = gcdsLabelCss;

const GcdsLabel = /*@__PURE__*/ proxyCustomElement(class GcdsLabel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.onClick = (ev) => {
            if (ev.srcElement.tagName == 'GCDS-LABEL') {
                this.clickEl();
            }
        };
        this.hideLabel = undefined;
        this.label = undefined;
        this.labelFor = undefined;
        this.required = undefined;
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
    /**
     * Click label if host element is clicked
     */
    clickEl() {
        if (this.focusEl) {
            this.focusEl.click();
        }
    }
    render() {
        const { hideLabel, labelFor, label, required, lang } = this;
        return (h(Host, { key: '2f4fe7a9d0a0fcea5019edc8158adae424074428', id: `label-for-${labelFor}`, onClick: this.onClick }, h("label", { key: '721461d1eb5818ff6b28f06bb314e27a5c0eb0c5', htmlFor: labelFor, class: `gcds-label ${hideLabel ? 'label--hidden' : ''}`, ref: focusEl => (this.focusEl = focusEl) }, h("span", { key: '0564e25540c9a5ec81fbbba77c72e2892d5ccc51' }, label), required ? (h("span", { "aria-hidden": "true", class: "label--required" }, "(", I18N[lang].required, ")")) : null)));
    }
    get el() { return this; }
    static get style() { return GcdsLabelStyle0; }
}, [2, "gcds-label", {
        "hideLabel": [4, "hide-label"],
        "label": [1],
        "labelFor": [1, "label-for"],
        "required": [4],
        "lang": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-label"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsLabel);
            }
            break;
    } });
}

export { GcdsLabel as G, defineCustomElement as d };

//# sourceMappingURL=gcds-label2.js.map