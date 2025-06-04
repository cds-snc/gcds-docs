import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, e as emitEvent } from './utils.js';
import { d as defineCustomElement$5 } from './gcds-button2.js';
import { d as defineCustomElement$4 } from './gcds-icon2.js';
import { d as defineCustomElement$3 } from './gcds-label2.js';
import { d as defineCustomElement$2 } from './gcds-sr-only2.js';

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

const gcdsSearchCss = "@layer reset, default, focus;@layer reset{:host{display:block}:host .gcds-search input{background-image:none;box-sizing:border-box}:host [type=search]::-webkit-search-cancel-button,:host [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}}@layer default{:host .gcds-search .gcds-search__header{display:block;height:0;margin:0;overflow:hidden;width:0}:host .gcds-search .gcds-search__form{display:flex;margin:var(--gcds-search-margin)!important}:host .gcds-search input{background-color:var(--gcds-search-default-background);border:var(--gcds-search-border-width) solid var(--gcds-search-border-color);border-radius:0;border-right:0 solid transparent;box-sizing:border-box;color:var(--gcds-search-default-text);font:var(--gcds-search-font);max-height:var(--gcds-search-max-height);padding:var(--gcds-search-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}:host .gcds-search input::placeholder{color:var(--gcds-search-placeholder)}:host .gcds-search gcds-button{--gcds-button-mobile-margin:0}:host .gcds-search gcds-button::part(button){border-radius:0;height:var(--gcds-search-button-width-height);padding:0;width:var(--gcds-search-button-width-height)}}@layer focus{:host .gcds-search input:focus{border-color:var(--gcds-search-focus-border-color);border-width:var(--gcds-search-focus-border-width);box-shadow:var(--gcds-search-focus-box-shadow);margin:var(--gcds-search-focus-margin);outline:var(--gcds-search-outline-width) solid var(--gcds-search-focus-border-color);outline-offset:var(--gcds-search-border-width);z-index:30}:host .gcds-search ::part(button):focus{box-shadow:var(--gcds-search-focus-box-shadow)}}";
const GcdsSearchStyle0 = gcdsSearchCss;

const GcdsSearch$1 = /*@__PURE__*/ proxyCustomElement(class GcdsSearch extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsSubmit = createEvent(this, "gcdsSubmit", 7);
        this.handleInput = (e, customEvent) => {
            const input = e.target;
            this.value = input.value;
            customEvent.emit(this.value);
        };
        this.placeholder = 'Canada.ca';
        this.action = '/sr/srb.html';
        this.method = 'get';
        this.name = 'q';
        this.searchId = 'search';
        this.value = undefined;
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
        const { placeholder, action, method, name, value, lang, searchId, suggested, } = this;
        const labelText = `${I18N[lang].searchLabel.replace('{$}', placeholder)}`;
        const attrsInput = {
            name,
            placeholder: labelText,
        };
        const formAction = action === '/sr/srb.html'
            ? `https://www.canada.ca/${lang}/sr/srb.html`
            : action;
        return (h(Host, { key: '127843a74f45499fd5470727bbb846b1ee203ec7' }, h("section", { key: 'f36f5193fd1e74daf7241f1c18a98a39c9e8f129', class: "gcds-search" }, h("gcds-sr-only", { key: '71c95b501b4eca26ae9afb7d51dcaff02740cf89', tag: "h2" }, I18N[lang].search), h("form", { key: 'eb5fca068f31fc240eed7b44f4c03432d2c202cc', action: formAction, method: method, role: "search", onSubmit: e => emitEvent(e, this.gcdsSubmit, this.value), class: "gcds-search__form" }, h("gcds-label", { key: 'a8e7a1980756509805b02ed3d5ae8bfb69e770a4', label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ key: '5d187bad902d4e1cd8dcf83d9acc8da7e5c669ca', type: "search", id: searchId }, (suggested ? { list: 'search-list' } : {}), { size: 34, maxLength: 170, onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input", value: value })), suggested && (h("datalist", { key: '0b85d565d6cc53479136b44f085be19c71e992ca', id: "search-list" }, suggested.map((k, v) => (h("option", { value: k, key: v }))))), h("gcds-button", { key: '97cd97b6fb539cd6ea06e043e5c3186b834610d1', type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { key: '360d1561ed2a59484104e1e6d0aac7027161db48', name: "search", label: I18N[lang].search, size: "h3" }))))));
    }
    get el() { return this; }
    static get style() { return GcdsSearchStyle0; }
}, [1, "gcds-search", {
        "placeholder": [1],
        "action": [1],
        "method": [1],
        "name": [1],
        "searchId": [1, "search-id"],
        "value": [1025],
        "suggested": [16],
        "lang": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-search", "gcds-button", "gcds-icon", "gcds-label", "gcds-sr-only"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-search":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsSearch$1);
            }
            break;
        case "gcds-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-sr-only":
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