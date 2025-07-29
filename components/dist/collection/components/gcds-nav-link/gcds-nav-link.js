import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, emitEvent } from "../../utils/utils";
export class GcdsNavLink {
    /**
     * Focus the link element
     */
    async focusLink() {
        this.linkElement.focus();
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
        this.updateLang();
        if (this.el.closest('gcds-top-nav')) {
            if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
                this.navStyle = 'topnav';
            }
            else {
                this.navStyle = 'dropdown';
            }
        }
        else {
            this.navStyle = 'sidenav';
        }
    }
    render() {
        const { current, href } = this;
        const linkAttrs = {};
        if (current) {
            linkAttrs['aria-current'] = 'page';
        }
        return (h(Host, { key: '5a76c200c2d515b82addfbcee6fd932491889505', role: "listitem" }, h("a", Object.assign({ key: 'e07cc786a25123e192d0bec025c0ab7a77078d8b', class: `gcds-nav-link gcds-nav-link--${this.navStyle}`, href: href }, linkAttrs, { tabIndex: 0, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, href), ref: element => (this.linkElement = element) }), h("slot", { key: '32e5be57f63a00cb58b79ed2ac9650327e1c9c17' }))));
    }
    static get is() { return "gcds-nav-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-nav-link.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-nav-link.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Link href"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "current": {
                "type": "boolean",
                "attribute": "current",
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
                    "text": "Current page flag"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "lang": {},
            "navStyle": {}
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
                    "text": "Emitted when the link has been clicked."
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
            }];
    }
    static get methods() {
        return {
            "focusLink": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Focus the link element",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-nav-link.js.map
