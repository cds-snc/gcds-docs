import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { h as handleKeyDownNav, g as getNavItems } from './utils2.js';
import { d as defineCustomElement$3 } from './gcds-icon2.js';
import { d as defineCustomElement$2 } from './gcds-nav-group2.js';

const I18N = {
  en: {
    closeTrigger: 'Close',
    menuLabel: 'Menu',
    navLabel:
      ' - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.',
  },
  fr: {
    closeTrigger: 'Fermer',
    menuLabel: 'Menu',
    navLabel:
      " - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement.",
  },
};

const gcdsTopNavCss = "@layer reset, default, desktop;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0}:host ul{padding:0}}@layer default{:host .gcds-top-nav .gcds-top-nav__container{display:flex;flex-direction:column;margin-inline:auto;max-width:var(--gcds-top-nav-max-width);width:90%}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-top-nav{background-color:var(--gcds-top-nav-background)}:host .gcds-top-nav .gcds-top-nav__container{align-items:flex-end;flex-direction:row}:host .gcds-top-nav .nav-container__list{align-items:flex-end;display:flex;width:fit-content}:host .gcds-top-nav .nav-container__list.nav-list--right{margin-inline-start:auto}:host .gcds-top-nav .nav-container__list.nav-list--center{margin-inline:auto}}}";
const GcdsTopNavStyle0 = gcdsTopNavCss;

const GcdsTopNav$1 = /*@__PURE__*/ proxyCustomElement(class GcdsTopNav extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    get el() { return this; }
    static get style() { return GcdsTopNavStyle0; }
}, [1, "gcds-top-nav", {
        "label": [1],
        "alignment": [1],
        "lang": [32],
        "navItems": [32],
        "navSize": [32],
        "getNavSize": [64],
        "updateNavSize": [64],
        "updateNavItemQueue": [64]
    }, [[4, "focusin", "focusInListener"], [4, "focusout", "focusOutListener"], [4, "keydown", "keyDownListener"], [4, "gcdsClick", "gcdsClickListener"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-top-nav", "gcds-icon", "gcds-nav-group"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-top-nav":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsTopNav$1);
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-nav-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsTopNav = GcdsTopNav$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsTopNav, defineCustomElement };

//# sourceMappingURL=gcds-top-nav.js.map