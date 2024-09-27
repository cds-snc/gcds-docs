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

const gcdsSideNavCss = "@layer reset, default, desktop, mobile;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}}@layer default{:host{width:100%}:host .gcds-side-nav__heading{font:var(--gcds-side-nav-heading-font);margin-block-end:var(--gcds-side-nav-heading-margin);padding:var(--gcds-side-nav-heading-padding)}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-side-nav{max-width:var(--gcds-side-nav-max-width)}}}@layer mobile{@media only screen and (width < 64em){:host .gcds-side-nav__heading{display:block;height:0;margin:0;overflow:hidden;padding:0;width:0}}}";
const GcdsSideNavStyle0 = gcdsSideNavCss;

const GcdsSideNav$1 = /*@__PURE__*/ proxyCustomElement(class GcdsSideNav extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.label = undefined;
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
        return (h(Host, { key: '217410f35dc8c612e70afe175fb239de2eaaaf6e' }, h("nav", { key: '998dc3d451a69c9fdd1e20fba6225010116c44d7', "aria-label": `${label}${I18N[lang].navLabel}`, class: "gcds-side-nav" }, h("h2", { key: '31f128c4a51ffae7220e65d20f17d87822eb4894', class: "gcds-side-nav__heading" }, label), h("ul", { key: 'e47ce7a1bf273d23c2dacf3bfbcef7bdcb4eaf6b' }, h("gcds-nav-group", { key: '66045fe6eb15f4e2c2db1065de97857f74892a51', menuLabel: I18N[lang].menuLabel, closeTrigger: I18N[lang].closeTrigger, openTrigger: I18N[lang].menuLabel, class: "gcds-mobile-nav", ref: element => (this.mobile = element), lang: lang }, h("slot", { key: '8eeaad2a7387c7ff7de2438fbbb294da280b4e58' }))))));
    }
    get el() { return this; }
    static get style() { return GcdsSideNavStyle0; }
}, [1, "gcds-side-nav", {
        "label": [1],
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
    const components = ["gcds-side-nav", "gcds-icon", "gcds-nav-group"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-side-nav":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsSideNav$1);
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

const GcdsSideNav = GcdsSideNav$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsSideNav, defineCustomElement };

//# sourceMappingURL=gcds-side-nav.js.map