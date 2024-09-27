import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import { handleKeyDownNav, getNavItems } from "../../utils/menus/utils";
import I18N from "./i18n/i18n";
export class GcdsTopNav {
    constructor() {
        this.label = undefined;
        this.alignment = 'left';
        this.lang = undefined;
        this.navItems = [];
        this.navSize = undefined;
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
        return (h(Host, { key: '42af640e82c9762d93317c27a17a92acda227221' }, h("div", { key: 'f443220a73b848ba7680edf4a5b6864c5ae04000', class: "gcds-top-nav" }, h("nav", { key: '6f80708a70689a118a4999e5b51f3d8e336dc199', "aria-label": `${label}${I18N[lang].navLabel}` }, h("ul", { key: 'da5d44e8fa22794dee111c6846c742dd10e8a92c', class: "gcds-top-nav__container" }, h("gcds-nav-group", { key: 'b9987354f437554282e4cec40556269a69d5b5ff', menuLabel: I18N[lang].menuLabel, closeTrigger: I18N[lang].closeTrigger, openTrigger: I18N[lang].menuLabel, class: "gcds-mobile-nav gcds-mobile-nav-topnav", ref: element => (this.mobile = element), lang: lang }, h("slot", { key: '50eb9b1c747becc71d287fd6e54a6a154be08f99', name: "home" }), h("li", { key: '993a9d649a5845c6508e0fb38c65990f062c548a', class: `nav-container__list nav-list--${alignment}` }, h("ul", { key: 'aee7825fbfd1b0fc9ec2fde6b4b01141aea1618c', class: `nav-container__list nav-list--${alignment}` }, h("slot", { key: '770e5b28a68efef61bd321a54b5e96e7c52f553c' })))))))));
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
                "attribute": "label",
                "reflect": false
            },
            "alignment": {
                "type": "string",
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
                "attribute": "alignment",
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
