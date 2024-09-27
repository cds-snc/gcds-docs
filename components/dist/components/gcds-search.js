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

const gcdsSearchCss = "@layer reset, default, focus;@layer reset{:host{display:block}:host .gcds-search input{background-image:none;box-sizing:border-box}:host [type=search]::-webkit-search-cancel-button,:host [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}}@layer default{:host .gcds-search .gcds-search__header{display:block;height:0;margin:0;overflow:hidden;width:0}:host .gcds-search .gcds-search__form{display:flex;margin:var(--gcds-search-margin)!important}:host .gcds-search input{font:var(--gcds-search-font-desktop);height:auto;min-height:var(--gcds-search-min-width-and-height);width:100%}@media only screen and (width < 48em){:host .gcds-search input{font:var(--gcds-search-font-mobile)}}:host .gcds-search input{background-color:var(--gcds-search-default-background);border:var(--gcds-search-border-width) solid;border-radius:var(--gcds-search-border-radius);color:var(--gcds-search-default-text);padding:var(--gcds-search-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}:host .gcds-search ::part(button){border-end-start-radius:0;border-start-start-radius:0;height:100%;margin:0}}@layer focus{:host .gcds-search input:focus{border-color:var(--gcds-search-focus-text);border-radius:var(--gcds-search-focus-border-radius);box-shadow:var(--gcds-search-focus-box-shadow);outline:var(--gcds-search-outline-width) solid var(--gcds-search-focus-text);outline-offset:var(--gcds-search-border-width);z-index:30}:host .gcds-search ::part(button):focus{border-radius:var(--gcds-search-focus-border-radius);box-shadow:var(--gcds-search-focus-box-shadow)}}";
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
        return (h(Host, { key: '0590c4439dbf8d925b55e78ba10adb56dd08d002' }, h("div", { key: 'e92eee61020ae637d86f66dcfddaa2c512f906db', class: "gcds-search" }, h("gcds-sr-only", { key: 'a7de99713a5e09ff4cc0c97d97cd220b34713958', tag: "h2" }, I18N[lang].search), h("form", { key: 'd8d26986a49f1e44fa9f39925cf4afe6abf2e653', action: formAction, method: method, role: "search", onSubmit: e => emitEvent(e, this.gcdsSubmit, this.value), class: "gcds-search__form" }, h("gcds-label", { key: 'b1bc9a6136af05c0898dcd70177e59ff05b491a7', label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ key: '798e03ee1c183e80c6b5c8cc17cfc8ef3114e4b0', type: "search", id: searchId, list: "search-list", size: 34, maxLength: 170, onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input", value: value })), suggested && (h("datalist", { key: '912ac60a51e383b3bd490e4f5ec49bec57b9762b', id: "search-list" }, suggested.map((k, v) => (h("option", { value: k, key: v }))))), h("gcds-button", { key: 'b4ca78bfababd444af1fb4802ce20002d408eede', type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { key: '841ca408c06c125bafcf5f848e5ebe1a58a76f79', name: "search", label: I18N[lang].search, "fixed-width": true }))))));
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