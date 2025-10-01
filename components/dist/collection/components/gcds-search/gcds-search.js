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
        return (h(Host, { key: '6f097c6decfc75124cfb075d08d9538fac97f247' }, h("section", { key: 'cac50e05b5b1993c7b582c077b52ebc0347c684d', class: "gcds-search" }, h("gcds-sr-only", { key: 'da41472fe9dc9dc4278a4324c5c59727bf659737', tag: "h2" }, I18N[lang].search), h("form", { key: 'd8daa855f964aea373212e226410c18a174fc2f7', action: formAction, method: method, role: "search", onSubmit: e => emitEvent(e, this.gcdsSubmit, this.value), class: "gcds-search__form" }, h("gcds-label", { key: 'eaa37cf81c073de64d06459be03f3d11bb35ee8b', label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ key: '7efdfeecf78cd58fae9fe13300da38a0883c40b2', type: "search", id: searchId }, (suggested ? { list: 'search-list' } : {}), { size: 34, maxLength: 170, onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input", value: value })), suggested && (h("datalist", { key: 'a8c7737d2ad864cc08ac28fa19a4c3a4f2dbf654', id: "search-list" }, suggested.map((k, v) => (h("option", { value: k, key: v }))))), h("gcds-button", { key: 'b999f4297899ff1441b1fd201f14762b942b896a', type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { key: '148d9e7fb4265b12093070af8b0604341d300994', name: "search", label: I18N[lang].search, size: "h3" }))))));
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
}
//# sourceMappingURL=gcds-search.js.map
