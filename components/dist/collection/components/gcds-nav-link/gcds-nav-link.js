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
        return (h(Host, { key: 'a381fdebeff295a9a9e40ff6f09bab36e12256d2', role: "listitem" }, h("a", Object.assign({ key: '374dc368ccd6314793c1bccc6a6d25029bc5861d', class: `gcds-nav-link gcds-nav-link--${this.navStyle}`, href: href }, linkAttrs, { tabIndex: 0, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, href), ref: element => (this.linkElement = element) }), h("slot", { key: 'e558346c42b2eeee6907d4c671729ed711b6cc12' }))));
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
