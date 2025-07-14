import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import { handleKeyDownNav, getNavItems } from "../../utils/menus/utils";
import I18N from "./i18n/i18n";
export class GcdsTopNav {
    constructor() {
        /**
         * Nav alignment
         */
        this.alignment = 'left';
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
                        const childNavGroups = nav.querySelectorAll('gcds-nav-group');
                        childNavGroups.forEach(navGroup => {
                            if (navGroup.hasAttribute('open')) {
                                navGroup.toggleNav();
                            }
                        });
                    }
                }
                else {
                    nav.updateNavSize('mobile');
                    const childNavGroups = nav.querySelectorAll('gcds-nav-group');
                    childNavGroups.forEach(navGroup => {
                        if (navGroup.hasAttribute('open')) {
                            navGroup.toggleNav();
                        }
                    });
                    await nav.updateNavItemQueue(nav);
                }
            });
        }
    }
    async focusOutListener(e) {
        if (!this.el.contains(e.relatedTarget)) {
            if (this.navSize == 'mobile') {
                if (this.mobile.hasAttribute('open')) {
                    await this.mobile.toggleNav();
                }
            }
        }
    }
    async keyDownListener(e) {
        if (this.el.contains(document.activeElement)) {
            handleKeyDownNav(e, this.el, this.navItems);
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
                await this.updateNavItemQueue(e.target, true);
                e.target.focusTrigger();
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
        if (el == this.el && this.navSize == 'mobile') {
            this.navItems = [...this.navItems, this.mobile];
        }
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { label, alignment, lang } = this;
        return (h(Host, { key: '075e8da394395c86fb088489ff1ecede74fc6347' }, h("div", { key: 'fe8bdf04cc35123ed4b2c9bdeeb496631019e763', class: "gcds-top-nav" }, h("nav", { key: '577ac71a9dee2abfc042904d8f7e9eb52b08ec20', "aria-label": `${label}${I18N[lang].navLabel}` }, h("ul", { key: '29fc7c8752e5ca58166fb333a0e4490661457a14', class: "gcds-top-nav__container" }, h("gcds-nav-group", { key: '8426a5f31322333b78fc43c90ef1aa015acd35bb', menuLabel: I18N[lang].menuLabel, closeTrigger: I18N[lang].closeTrigger, openTrigger: I18N[lang].menuLabel, class: "gcds-mobile-nav gcds-mobile-nav-topnav", ref: element => (this.mobile = element), lang: lang }, h("slot", { key: '0db61f118321b7f0fda937aab3bad5181c479e68', name: "home" }), h("li", { key: 'b038955f36cfb628ff66033d778531bc27df945b', class: `nav-container__list nav-list--${alignment}` }, h("ul", { key: '26cda13cd85fa693e854bb762c7fd8983a332c89', class: `nav-container__list nav-list--${alignment}` }, h("slot", { key: 'f2efc2eef1e66ee701177ec9796d83b7856554da' })))))))));
    }
    static get is() { return "gcds-top-nav"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-top-nav.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-top-nav.css"]
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
            },
            "alignment": {
                "type": "string",
                "attribute": "alignment",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'center' | 'right'",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Nav alignment"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'left'"
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
//# sourceMappingURL=gcds-top-nav.js.map
