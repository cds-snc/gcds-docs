import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import { inheritAttributes, emitEvent } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * A link is a navigational element that brings a person to a new page, website, file, or section on the current page.
 *
 * @slot default - Slot for the link content.
 */
export class GcdsLink {
    constructor() {
        /**
         * Props
         */
        /**
         * Sets the main style of the link.
         */
        this.linkRole = 'default';
        /**
         * Set the link size
         */
        this.size = 'inherit';
        /**
         * Sets the display behavior of the link
         */
        this.display = 'inline';
        /**
         * The target attribute specifies where to open the linked document
         */
        this.target = '_self';
        /**
         * Whether the link is external or not
         */
        this.external = false;
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
    }
    validateLinkRole(newValue) {
        const values = ['default', 'light'];
        if (!values.includes(newValue)) {
            this.linkRole = 'default';
        }
    }
    validateSize(newValue) {
        const values = ['regular', 'small', 'inherit'];
        if (!values.includes(newValue)) {
            this.size = 'inherit';
        }
    }
    validateDisplay(newValue) {
        const values = ['block', 'inline'];
        if (!values.includes(newValue)) {
            this.display = 'inline';
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
        this.validateLinkRole(this.linkRole);
        this.validateSize(this.size);
        this.validateDisplay(this.display);
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'referrerpolicy',
        ]);
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    /**
     * Returns the correct icon for the link, if applicable.
     * If none of these conditions match, no icon is rendered.
     */
    getIcon() {
        const { href, target, external, download, lang } = this;
        const isExternal = target === '_blank' || external;
        if (isExternal) {
            return h("gcds-icon", { name: "external", label: i18n[lang].external });
        }
        if (download !== undefined) {
            return h("gcds-icon", { name: "download", label: i18n[lang].download });
        }
        if (href === null || href === void 0 ? void 0 : href.toLowerCase().startsWith('mailto:')) {
            return h("gcds-icon", { name: "email", label: i18n[lang].email });
        }
        if (href === null || href === void 0 ? void 0 : href.toLowerCase().startsWith('tel:')) {
            return h("gcds-icon", { name: "phone", label: i18n[lang].phone });
        }
        return null;
    }
    render() {
        const { size, display, href, rel, target, external, download, type, inheritedAttributes, linkRole, } = this;
        const attrs = {
            href,
            rel,
            target,
            download,
            type,
        };
        const isExternal = target === '_blank' || external;
        return (h(Host, { key: '7fa892f419ed82d2218a8166cb9df9087309f049' }, h("a", Object.assign({ key: '1b771e086f262c942e89359aab40a242cdeca8e7', tabIndex: 0 }, attrs, { class: `gcds-link link--${size} ${display != 'inline' ? `d-${display}` : ''} ${linkRole != 'default' ? `role-${linkRole}` : ''}`, ref: element => (this.shadowElement = element), target: isExternal ? '_blank' : target, rel: isExternal ? 'noopener noreferrer' : rel }, inheritedAttributes, { part: "link", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, href) }), h("slot", { key: '86a797523cf073c1e75e3adfb224ff10f8344a76' }), this.getIcon() && (h("span", { key: '61a96d99ba2782a0853bdc7d4dff5a4a250f8858', class: "text-icon-group" }, "\u00A0", this.getIcon())))));
    }
    static get is() { return "gcds-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-link.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-link.css"]
        };
    }
    static get properties() {
        return {
            "linkRole": {
                "type": "string",
                "attribute": "link-role",
                "mutable": true,
                "complexType": {
                    "original": "'default' | 'light'",
                    "resolved": "\"default\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the main style of the link."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": true,
                "complexType": {
                    "original": "'regular' | 'small' | 'inherit'",
                    "resolved": "\"inherit\" | \"regular\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the link size"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'inherit'"
            },
            "display": {
                "type": "string",
                "attribute": "display",
                "mutable": true,
                "complexType": {
                    "original": "'block' | 'inline'",
                    "resolved": "\"block\" | \"inline\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Sets the display behavior of the link"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'inline'"
            },
            "href": {
                "type": "string",
                "attribute": "href",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
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
                "optional": true,
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The target attribute specifies where to open the linked document"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'_self'"
            },
            "external": {
                "type": "boolean",
                "attribute": "external",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Whether the link is external or not"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The type specifies the media type of the linked document"
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
                "method": "gcdsFocus",
                "name": "gcdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the link has focus."
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
                    "text": "Emitted when the link loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsClick",
                "name": "gcdsClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the link has been clicked. Contains the href in the event detail."
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
                "propName": "linkRole",
                "methodName": "validateLinkRole"
            }, {
                "propName": "size",
                "methodName": "validateSize"
            }, {
                "propName": "display",
                "methodName": "validateDisplay"
            }];
    }
}
//# sourceMappingURL=gcds-link.js.map
