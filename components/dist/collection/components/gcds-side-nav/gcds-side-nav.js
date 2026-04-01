import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import { handleKeyDownNav, getNavItems } from "../../utils/menus/utils";
import I18N from "./i18n/i18n";
/**
 * A side navigation is a vertical list of page links on the left side of the screen.
 *
 * @slot home - Slot for the home link or site title.
 * @slot default - Slot for the navigation groups and navigation links.
 */
export class GcdsSideNav {
    constructor() {
        /**
         * Queue of nav items for keyboard navigation
         */
        this.navItems = [];
    }
    async focusInListener(e) {
        if (this.el.contains(e.target) && !this.navSize) {
            const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
            const nav = this.el;
            const mobileTrigger = this.mobile;
            if (mediaQuery.matches) {
                this.navSize = 'desktop';
            }
            else {
                this.navSize = 'mobile';
            }
            await this.updateNavItemQueue(this.el);
            mediaQuery.addEventListener('change', async function (e) {
                if (e.matches) {
                    nav.updateNavSize('desktop');
                    await nav.updateNavItemQueue(nav);
                    if (mobileTrigger.hasAttribute('open')) {
                        mobileTrigger.toggleNav();
                    }
                }
                else {
                    nav.updateNavSize('mobile');
                    await nav.updateNavItemQueue(nav);
                }
            });
        }
    }
    async focusOutListener(e) {
        if (e.relatedTarget !== null &&
            e.relatedTarget !== this.el &&
            !this.el.contains(e.relatedTarget)) {
            if (this.navSize == 'mobile') {
                if (this.mobile.hasAttribute('open')) {
                    await this.mobile.toggleNav();
                }
            }
        }
    }
    async keyDownListener(e) {
        var _a;
        if (this.el.contains(document.activeElement)) {
            handleKeyDownNav(e, this.el, this.navItems);
        }
        if (this.navSize === 'mobile' &&
            ((_a = this.mobile) === null || _a === void 0 ? void 0 : _a.open) &&
            e.key === 'Escape') {
            // Close mobile nav on ESC
            await this.mobile.toggleNav();
        }
    }
    async gcdsClickListener(e) {
        if (this.el.contains(e.target)) {
            // Update tab queue when clicking mobile menu
            if (e.target == this.el && this.navSize == 'mobile') {
                await this.updateNavItemQueue(e.target);
                // Update tab queue when clicking dropdown
            }
            else if (e.target.nodeName == 'GCDS-NAV-GROUP' &&
                !e.target.hasAttribute('open')) {
                await this.updateNavItemQueue(this.el);
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
    /*
     * Get current navSize state
     */
    async getNavSize() {
        return this.navSize;
    }
    /*
     * Pass new window size: desktop or mobile
     */
    async updateNavSize(size) {
        this.navSize = size;
    }
    /*
     * Update item queue for keyboard navigation based on passed element
     */
    async updateNavItemQueue(el, includeElement) {
        if (includeElement) {
            const childElements = await getNavItems(el);
            this.navItems = [el, ...childElements];
        }
        else {
            this.navItems = await getNavItems(el);
        }
        if (this.navSize == 'mobile') {
            this.navItems = [...this.navItems, this.mobile];
        }
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { label, lang } = this;
        return (h(Host, { key: 'cb1dce8bcf9a4f6f6a83f40b9ae35a1f69eecb55' }, h("nav", { key: '4d6e131139f437afa494865a9a16546c28378764', "aria-label": `${label}${I18N[lang].navLabel}`, class: "gcds-side-nav" }, h("ul", { key: '545b0eed21a11fcb2795a81ca3ad54f29a4311c6' }, h("gcds-nav-group", { key: '62c894a97778e43064b83341ce52b064c4555779', menuLabel: I18N[lang].menuLabel, closeTrigger: I18N[lang].closeTrigger, openTrigger: I18N[lang].menuLabel, class: "gcds-mobile-nav", ref: element => (this.mobile = element), lang: lang }, h("slot", { key: 'edaa0c63d976d732bc5294c59e2b0346572a2a31', name: "home" }, h("li", { key: '45d762b61ace15f094077513b2aa09794e63e9e0', class: "gcds-side-nav__heading" }, label)), h("slot", { key: '2ed4c1c3c852a3213fa095ce9f0df30ac437abd4' }))))));
    }
    static get is() { return "gcds-side-nav"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-side-nav.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-side-nav.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Label for navigation landmark"
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
            "navItems": {},
            "navSize": {}
        };
    }
    static get methods() {
        return {
            "getNavSize": {
                "complexType": {
                    "signature": "() => Promise<\"desktop\" | \"mobile\">",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<\"desktop\" | \"mobile\">"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "updateNavSize": {
                "complexType": {
                    "signature": "(size: any) => Promise<void>",
                    "parameters": [{
                            "name": "size",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "updateNavItemQueue": {
                "complexType": {
                    "signature": "(el: any, includeElement?: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "el",
                            "type": "any",
                            "docs": ""
                        }, {
                            "name": "includeElement",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "focusin",
                "method": "focusInListener",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "focusOutListener",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "keyDownListener",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "gcdsClick",
                "method": "gcdsClickListener",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=gcds-side-nav.js.map
