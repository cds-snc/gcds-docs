import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import { inheritAttributes, emitEvent } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * The button is an interactive object that emphasizes an action.
 *
 * @slot default - Slot for the button/link label.
 */
export class GcdsButton {
    constructor() {
        /**
         * Props
         */
        /**
         * Set button types
         */
        // prettier-ignore
        this.type = 'button';
        /**
         * Set the main style
         */
        this.buttonRole = 'primary';
        /**
         * Set the button size
         */
        this.size = 'regular';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
        this.handleClick = (e) => {
            // Check button type, emit value with submit button and href with link.
            const emitValue = this.type === 'submit'
                ? this.value
                : this.type === 'link'
                    ? this.href
                    : undefined;
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
        return (h(Host, { key: 'e9340ebfb8c10ce33a593b6b7f54394949317506' }, h(Tag, Object.assign({ key: 'c62ba255b62ddbff1c3dbef61a4e64973df1bccb' }, attrs, { id: buttonId, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => !disabled ? this.handleClick(e) : e.stopImmediatePropagation(), class: `gcds-button button--role-${buttonRole} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), h("slot", { key: 'f922fc8e16a85bce258204ff670bc6aaa81ca119' }), type === 'link' && target === '_blank' ? (h("gcds-icon", { name: "external", label: i18n[lang].label, "margin-left": "150" })) : null)));
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
                "attribute": "type",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'button'"
            },
            "buttonRole": {
                "type": "string",
                "attribute": "button-role",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'regular'"
            },
            "buttonId": {
                "type": "string",
                "attribute": "button-id",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "name": {
                "type": "string",
                "attribute": "name",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "href": {
                "type": "string",
                "attribute": "href",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "rel": {
                "type": "string",
                "attribute": "rel",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "target": {
                "type": "string",
                "attribute": "target",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "download": {
                "type": "string",
                "attribute": "download",
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
                "getter": false,
                "setter": false,
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
                    "text": "Emitted when the button has been clicked. Contains the value or href in the event detail."
                },
                "complexType": {
                    "original": "string | void",
                    "resolved": "string | void",
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
