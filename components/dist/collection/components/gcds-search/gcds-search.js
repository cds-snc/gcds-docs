import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, emitEvent } from "../../utils/utils";
import I18N from "./i18n/I18N";
export class GcdsSearch {
    constructor() {
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
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "'Canada.ca'"
            },
            "action": {
                "type": "string",
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
                "attribute": "action",
                "reflect": false,
                "defaultValue": "'/sr/srb.html'"
            },
            "method": {
                "type": "string",
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
                "attribute": "method",
                "reflect": false,
                "defaultValue": "'get'"
            },
            "name": {
                "type": "string",
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
                "attribute": "name",
                "reflect": false,
                "defaultValue": "'q'"
            },
            "searchId": {
                "type": "string",
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
                "attribute": "search-id",
                "reflect": false,
                "defaultValue": "'search'"
            },
            "value": {
                "type": "string",
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
                "attribute": "value",
                "reflect": false
            },
            "suggested": {
                "type": "unknown",
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
                }
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
