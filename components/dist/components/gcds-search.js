import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$4 } from './gcds-button2.js';
import { d as defineCustomElement$3 } from './gcds-icon2.js';
import { d as defineCustomElement$2 } from './gcds-label2.js';

const I18N = {
  en: {
    search: 'Search',
    searchLabel: 'Search {$}',
  },
  fr: {
    search: 'Recherche',
    searchLabel: 'Rechercher dans {$}',
  },
};

const gcdsSearchCss = "@layer defaults, state.focus;@layer defaults{.sc-gcds-search-h .gcds-search .gcds-search__header{display:block;height:0;margin:0;overflow:hidden;width:0}.sc-gcds-search-h .gcds-search .gcds-search__form{display:flex;margin:var(--gcds-search-margin)!important}.sc-gcds-search-h .gcds-search input.gcds-search__input{background-color:var(--gcds-search-default-background);background-image:none;border:var(--gcds-search-border-width) solid;border-radius:var(--gcds-search-border-radius);box-sizing:border-box;color:var(--gcds-search-default-text);font:var(--gcds-search-font);height:auto;min-height:var(--gcds-search-min-width-and-height);padding:var(--gcds-search-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}.sc-gcds-search-h .gcds-search ::part(button){border-end-start-radius:0;border-start-start-radius:0;margin:0}.sc-gcds-search-h [type=search]::-webkit-search-cancel-button,.sc-gcds-search-h [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}}@layer state.focus{.sc-gcds-search-h input.gcds-search__input:focus{border-color:var(--gcds-search-focus-text);border-radius:var(--gcds-search-focus-border-radius);box-shadow:var(--gcds-search-focus-box-shadow);outline:var(--gcds-search-outline-width) solid var(--gcds-search-focus-text);outline-offset:var(--gcds-search-border-width);z-index:30}.sc-gcds-search-h ::part(button):focus{border-radius:var(--gcds-search-focus-border-radius);box-shadow:var(--gcds-search-focus-box-shadow)}}";
const GcdsSearchStyle0 = gcdsSearchCss;

const GcdsSearch$1 = /*@__PURE__*/ proxyCustomElement(class GcdsSearch extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsSubmit = createEvent(this, "gcdsSubmit", 7);
        this.placeholder = 'Canada.ca';
        this.action = '/sr/srb.html';
        this.method = 'get';
        this.name = 'q';
        this.searchId = 'search';
        this.suggested = undefined;
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
    }
    render() {
        const { placeholder, action, method, name, lang, searchId, suggested } = this;
        const labelText = `${I18N[lang].searchLabel.replace('{$}', placeholder)}`;
        const attrsInput = {
            name,
            placeholder: labelText,
        };
        const formAction = action === '/sr/srb.html'
            ? `https://www.canada.ca/${lang}/sr/srb.html`
            : action;
        return (h(Host, null, h("div", { class: "gcds-search" }, h("h2", { class: "gcds-search__header" }, I18N[lang].search), h("form", { action: formAction, method: method, role: "search", onSubmit: () => this.gcdsSubmit.emit(), class: "gcds-search__form" }, h("gcds-label", { label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ type: "search", id: searchId, list: "search-list", size: 34, maxLength: 170, onChange: () => this.gcdsChange.emit(), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input" })), suggested && (h("datalist", { id: "search-list" }, suggested.map((k, v) => (h("option", { value: k, key: v }))))), h("gcds-button", { type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { name: "search", label: I18N[lang].search, "fixed-width": true }))))));
    }
    get el() { return this; }
    static get style() { return GcdsSearchStyle0; }
}, [2, "gcds-search", {
        "placeholder": [1],
        "action": [1],
        "method": [1],
        "name": [1],
        "searchId": [1, "search-id"],
        "suggested": [16],
        "lang": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-search", "gcds-button", "gcds-icon", "gcds-label"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-search":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsSearch$1);
            }
            break;
        case "gcds-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsSearch = GcdsSearch$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsSearch, defineCustomElement };

//# sourceMappingURL=gcds-search.js.map