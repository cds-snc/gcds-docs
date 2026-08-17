import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, emitEvent, closestElement, } from "../../utils/utils";
/**
 * Navigational group with expandable or dropdown functionality, allowing for better organization of navigation links.
 *
 * @slot default - Slot for the list of navigation links.
 */
export class GcdsNavGroup {
    constructor() {
        /**
         * Has the nav group been expanded
         */
        this.open = false;
    }
    // Close dropdowns on focusout when on desktop screen size
    async focusOutListener(e) {
        if ((e.target === this.el || this.el.contains(e.target)) &&
            !this.el.contains(e.relatedTarget) &&
            this.navStyle.includes('dropdown') &&
            this.open &&
            window.innerWidth >= 1024) {
            setTimeout(() => this.toggleNav(), 200);
        }
    }
    /**
     * Focus button element
     */
    async focusTrigger() {
        this.triggerElement.focus();
    }
    /**
     * Toggle the nav open or closed
     */
    async toggleNav() {
        this.open = !this.open;
        // Close any child nav-groups
        for (let i = 0; i < this.el.children.length; i++) {
            if (this.el.children[i].nodeName == 'GCDS-NAV-GROUP' &&
                this.el.children[i].hasAttribute('open')) {
                this.el.children[i].toggleNav();
            }
        }
        // Dropdown exception - Close child dropdown nav-groups if opened in mobile menu
        if (this.el.classList.contains('gcds-mobile-nav-topnav')) {
            const topnav = closestElement('gcds-top-nav', this.el);
            const childNavGroups = topnav.querySelectorAll('gcds-nav-group');
            childNavGroups.forEach(navGroup => {
                if (navGroup.hasAttribute('open')) {
                    navGroup.toggleNav();
                }
            });
        }
        // Remove ability to scroll page when mobile menu is open
        if (this.el.classList.contains('gcds-mobile-nav')) {
            if (this.open) {
                this.navPosiiton = window.scrollY;
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            }
            else {
                document.body.style.removeProperty('position');
                document.body.style.removeProperty('width');
                window.scrollTo(0, this.navPosiiton);
            }
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
            // Set the navStyle to 'dropdown' and add a class for alignment if specified
            this.navStyle = 'dropdown';
            // Get the alignment value from the parent + append the corresponding class
            const alignment = this.el.parentNode.getAttribute('alignment');
            if (alignment === 'end') {
                this.navStyle += ' dropdown-right';
            }
            if (this.open) {
                this.open = false;
            }
        }
        else {
            this.navStyle = 'expandable';
        }
        if (this.el.parentNode.nodeName == 'GCDS-NAV-GROUP' &&
            !this.el.parentNode.classList.contains('gcds-mobile-nav') &&
            this.el.closest('gcds-top-nav')) {
            this.el.remove();
        }
    }
    render() {
        const { closeTrigger, menuLabel, open, openTrigger } = this;
        return (h(Host, { key: '8efaebea0ab6428172adfc217a9776627c387c66', role: "listitem", open: open }, h("div", { key: 'eceeb19cdbd3a2a8dd911e4c41291e638f31f557', class: "gcds-nav-group__container" }, h("button", { key: 'b2a1b3752a706917730b1710ba98ee311bc985f1', "aria-haspopup": "true", tabIndex: 0, "aria-expanded": open.toString(), ref: element => (this.triggerElement = element), class: `gcds-nav-group__trigger gcds-trigger--${this.navStyle}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggleNav();
                }
            } }, h("gcds-icon", { key: '0e2ec9a5e0abcfe0867a17fb80cd664388836156', name: (this.navStyle === 'expandable'
                ? open
                    ? 'chevron-down'
                    : 'chevron-right'
                : open
                    ? 'chevron-up'
                    : 'chevron-down') }), closeTrigger && open ? closeTrigger : openTrigger), h("ul", { key: '98536eaa85d01be41c0de3648ef8a30564087265', "aria-label": menuLabel, class: `gcds-nav-group__list gcds-nav--${this.navStyle}` }, h("slot", { key: 'c8c093f448d0451e032cb3d7dafbcd0b35435baf' })))));
    }
    static get is() { return "gcds-nav-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-nav-group.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-nav-group.css"]
        };
    }
    static get properties() {
        return {
            "closeTrigger": {
                "type": "string",
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
                    "text": "Label for the expanded button trigger"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "close-trigger"
            },
            "menuLabel": {
                "type": "string",
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
                    "text": "Label for the nav group menu"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "menu-label"
            },
            "openTrigger": {
                "type": "string",
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
                    "text": "Label for the collapsed button trigger"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open-trigger"
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Has the nav group been expanded"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "lang": {},
            "navStyle": {},
            "navPosiiton": {}
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
                    "text": "Emitted when the button has been focus."
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
                    "text": "Emitted when the button blurs."
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
            "focusTrigger": {
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
                    "text": "Focus button element",
                    "tags": []
                }
            },
            "toggleNav": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLGcdsNavGroupElement": {
                            "location": "global",
                            "id": "global::HTMLGcdsNavGroupElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggle the nav open or closed",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "focusout",
                "method": "focusOutListener",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
