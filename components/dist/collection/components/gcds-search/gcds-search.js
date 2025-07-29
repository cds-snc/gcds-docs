import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, emitEvent } from "../../utils/utils";
import I18N from "./i18n/I18N";
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
        this.handleInput = (e, customEvent) => {
            const input = e.target;
            this.value = input.value;
            customEvent.emit(this.value);
        };
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
        return (h(Host, { key: '6003a4328016e3ab9eddaeaa7eee74ddc7883781' }, h("section", { key: '5e722fa35d2b75334bb8f94e1cec56ff08f7f924', class: "gcds-search" }, h("gcds-sr-only", { key: '4faad88756c1deefa1805192dafc2372ba11e9c8', tag: "h2" }, I18N[lang].search), h("form", { key: '9e9cff3feda729f515513745b8e6200d0295f14d', action: formAction, method: method, role: "search", onSubmit: e => emitEvent(e, this.gcdsSubmit, this.value), class: "gcds-search__form" }, h("gcds-label", { key: '92789bd493f9d1cdddf87b234a29159df035c67f', label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ key: 'dba6da70f0898867e73506f399d4f5e6e1359c8c', type: "search", id: searchId }, (suggested ? { list: 'search-list' } : {}), { size: 34, maxLength: 170, onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input", value: value })), suggested && (h("datalist", { key: 'fe818f0ecbc29e356fcd022261df068e071ca90b', id: "search-list" }, suggested.map((k, v) => (h("option", { value: k, key: v }))))), h("gcds-button", { key: '0533f32d7cefa496a764e7c515d8feb41cf406ff', type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { key: '9abebcaa3eca5f4ea50b6a13a6745e0e25c6f619', name: "search", label: I18N[lang].search, size: "h3" }))))));
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
                "type": "unknown",
                "attribute": "suggested",
                "mutable": false,
                "complexType": {
                    "original": "Array<string>",
                    "resolved": "string[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set a list of predefined search terms"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "lang": {}
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
                    "text": "Emitted when the search element has recieved input."
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
                    "text": "Emitted when the search input value has gained focus."
                },
                "complexType": {
                    "original": "object",
                    "resolved": "object",
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
                    "original": "object",
                    "resolved": "object",
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
                    "original": "object",
                    "resolved": "object",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-search.js.map
