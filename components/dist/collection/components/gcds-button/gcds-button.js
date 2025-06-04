import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import { inheritAttributes, emitEvent } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsButton {
    constructor() {
        this.handleClick = (e) => {
            // Check button type, only emit value if type is "submit"
            const emitValue = this.type === 'submit' ? this.value : undefined;
            const event = emitEvent(e, this.gcdsClick, emitValue);
            if (event) {
                if (!this.disabled && this.type != 'button' && this.type != 'link') {
                    // Attach button to form
                    const form = this.el.closest('form');
                    if (form) {
                        e.preventDefault();
                        const formButton = document.createElement('button');
                        formButton.type = this.type;
                        if (this.name) {
                            formButton.name = this.name;
                        }
                        if (this.value) {
                            formButton.value = this.value;
                        }
                        formButton.style.display = 'none';
                        form.appendChild(formButton);
                        formButton.click();
                        formButton.remove();
                    }
                }
                // Has any inherited attributes changed on click
                this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
            }
        };
        this.type = 'button';
        this.buttonRole = 'primary';
        this.size = 'regular';
        this.buttonId = undefined;
        this.name = undefined;
        this.disabled = undefined;
        this.value = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.target = undefined;
        this.download = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
    }
    validateType(newValue) {
        const values = ['submit', 'reset', 'button', 'link'];
        if (!values.includes(newValue)) {
            this.type = 'button';
        }
    }
    validateButtonRole(newValue) {
        const values = ['start', 'primary', 'secondary', 'danger'];
        if (!values.includes(newValue)) {
            this.buttonRole = 'primary';
        }
        else if (newValue === 'start' && this.size === 'small') {
            this.size = 'regular';
        }
    }
    validateSize(newValue) {
        const values = ['regular', 'small'];
        if (!values.includes(newValue) || this.buttonRole === 'start') {
            this.size = 'regular';
        }
    }
    validateDisabled(newValue) {
        if (newValue === false || (newValue === true && this.type === 'link')) {
            this.el.removeAttribute('disabled');
        }
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
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateType(this.type);
        this.validateButtonRole(this.buttonRole);
        this.validateSize(this.size);
        this.validateDisabled(this.disabled);
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { type, buttonRole, size, buttonId, disabled, lang, name, href, rel, target, download, value, inheritedAttributes, } = this;
        const Tag = type != 'link' ? 'button' : 'a';
        const attrs = Tag === 'button'
            ? {
                type: type,
                ariaDisabled: disabled,
                name,
                value,
            }
            : {
                href,
                rel,
                target,
                download,
            };
        return (h(Host, { key: '59ad0b1cafa83cb3a101d48e07d29c92ffe3c714' }, h(Tag, Object.assign({ key: 'cd037c7872f680306f1e10f69b7b02f95da9e77b' }, attrs, { id: buttonId, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => !disabled ? this.handleClick(e) : e.stopImmediatePropagation(), class: `gcds-button button--role-${buttonRole} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), h("slot", { key: 'aa1a34a400c9bbaf88f03e0d39c628f13a713798' }), type === 'link' && target === '_blank' ? (h("gcds-icon", { name: "external", label: i18n[lang].label, "margin-left": "150" })) : null)));
    }
    static get is() { return "gcds-button"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-button.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'submit' | 'reset' | 'button' | 'link'",
                    "resolved": "\"button\" | \"link\" | \"reset\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set button types"
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'button'"
            },
            "buttonRole": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "| 'start'\n    | 'primary'\n    | 'secondary'\n    | 'danger'",
                    "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"start\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the main style"
                },
                "attribute": "button-role",
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'regular' | 'small'",
                    "resolved": "\"regular\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the button size"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'regular'"
            },
            "buttonId": {
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
                    "text": "The buttonId attribute specifies the id for a <button> element."
                },
                "attribute": "button-id",
                "reflect": false
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The name attribute specifies the name for a <button> element."
                },
                "attribute": "name",
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The disabled attribute for a <button> element."
                },
                "attribute": "disabled",
                "reflect": false
            },
            "value": {
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
                    "text": "The value attribute specifies the value for a <button> element."
                },
                "attribute": "value",
                "reflect": false
            },
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The href attribute specifies the URL of the page the link goes to"
                },
                "attribute": "href",
                "reflect": false
            },
            "rel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The rel attribute specifies the relationship between the current document and the linked document"
                },
                "attribute": "rel",
                "reflect": false
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The target attribute specifies where to open the linked document"
                },
                "attribute": "target",
                "reflect": false
            },
            "download": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink"
                },
                "attribute": "download",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "inheritedAttributes": {},
            "lang": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsClick",
                "name": "gcdsClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button has been clicked."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
                    "text": "Emitted when the button has focus."
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
                    "text": "Emitted when the button loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "validateType"
            }, {
                "propName": "buttonRole",
                "methodName": "validateButtonRole"
            }, {
                "propName": "size",
                "methodName": "validateSize"
            }, {
                "propName": "disabled",
                "methodName": "validateDisabled"
            }];
    }
}
//# sourceMappingURL=gcds-button.js.map
