import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, emitEvent } from "../../utils/utils";
import I18N from "./i18n/I18N";
/**
 * Search is a space for entering keywords to find relevant information.
 */
export class GcdsSearch {
    constructor() {
        /**
         * Set the placeholder and label for the search input. Becomes "Search [placeholder]"
         */
        this.placeholder = 'Canada.ca';
        /**
         * Sets the action for the search form. Default will be canada.ca global search
         */
        this.action = '/sr/srb.html';
        /**
         * Set the form method of the search form
         */
        this.method = 'get';
        /**
         * Set the name of the search input
         */
        this.name = 'q';
        /**
         * Set the id of the search input
         */
        this.searchId = 'search';
        /**
         * Array of suggested search terms
         */
        this.suggestedArray = null;
        this.handleInput = (e, customEvent) => {
            const input = e.target;
            this.value = input.value;
            customEvent.emit(this.value);
        };
    }
    watchSuggestedHandler() {
        if (this.suggested == null || this.suggested.length === 0) {
            this.suggestedArray = null;
            return;
        }
        if (typeof this.suggested === 'string') {
            try {
                this.suggested = JSON.parse(this.suggested);
            }
            catch (e) {
                console.error('gcds-search: suggested prop is not valid JSON string', e);
                this.suggestedArray = null;
                return;
            }
        }
        this.suggestedArray = this.suggested;
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
        this.watchSuggestedHandler();
        // Observe lang attribute changes
        this.updateLang();
    }
    render() {
        const { placeholder, action, method, name, value, lang, searchId, suggestedArray, } = this;
        const labelText = `${I18N[lang].searchLabel.replace('{$}', placeholder)}`;
        const attrsInput = {
            name,
            placeholder: labelText,
        };
        const formAction = action === '/sr/srb.html'
            ? `https://www.canada.ca/${lang}/sr/srb.html`
            : action;
        return (h(Host, { key: 'a8447a475cd01c2470f0fcf59a811c7878993b45' }, h("section", { key: '85cd42252e0d347f31ed2cb00b34636e6c26eccc', class: "gcds-search" }, h("gcds-sr-only", { key: '750462bb0db188d542c56725d9b2e5ae76a3f4bb', tag: "h2" }, I18N[lang].search), h("form", { key: 'f8874db21951a4aeaa63e72f9ad186dae48e1470', action: formAction, method: method, role: "search", onSubmit: e => emitEvent(e, this.gcdsSubmit, this.value), class: "gcds-search__form" }, h("gcds-label", { key: '3397eebceaaa860ec6a33a3f04adbe02885051ae', label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ key: '6e8919b8ed8ccefd290672bd785b825a2aec5e19', type: "search", id: searchId }, (suggestedArray ? { list: 'search-list' } : {}), { size: 34, maxLength: 170, onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input", value: value })), suggestedArray && (h("datalist", { key: 'd2447eb6daceafbb51cf617bf206d381f5b53629', id: "search-list" }, suggestedArray.map((k, v) => (h("option", { value: k, key: v }))))), h("gcds-button", { key: 'ba672e2400fd432988f4dd01c5f176b15b6b3716', type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { key: '61eaab4eaac77486c49136af763793310d1e3c49', name: "search", label: I18N[lang].search, size: "h3" }))))));
    }
    static get is() { return "gcds-search"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-search.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-search.css"]
        };
    }
    static get properties() {
        return {
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the placeholder and label for the search input. Becomes \"Search [placeholder]\""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Canada.ca'"
            },
            "action": {
                "type": "string",
                "attribute": "action",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the action for the search form. Default will be canada.ca global search"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'/sr/srb.html'"
            },
            "method": {
                "type": "string",
                "attribute": "method",
                "mutable": false,
                "complexType": {
                    "original": "'get' | 'post'",
                    "resolved": "\"get\" | \"post\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the form method of the search form"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'get'"
            },
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the name of the search input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'q'"
            },
            "searchId": {
                "type": "string",
                "attribute": "search-id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the id of the search input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'search'"
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the value of the search input"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "suggested": {
                "type": "string",
                "attribute": "suggested",
                "mutable": true,
                "complexType": {
                    "original": "string[] | string",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set a list of predefined search terms"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "lang": {},
            "suggestedArray": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsInput",
                "name": "gcdsInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the search element has received input."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "gcdsChange",
                "name": "gcdsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the search input value has changed."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "gcdsFocus",
                "name": "gcdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the search input has gained focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsBlur",
                "name": "gcdsBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the search input has lost focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsSubmit",
                "name": "gcdsSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the search form has submitted."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "suggested",
                "methodName": "watchSuggestedHandler"
            }];
    }
}
//# sourceMappingURL=gcds-search.js.map
