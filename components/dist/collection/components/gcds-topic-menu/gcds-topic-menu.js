import { Host, Fragment, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import I18N from "./i18n/i18n";
import backup from "./backup/backup.min";
export class GcdsTopicMenu {
    constructor() {
        this.home = false;
        this.open = false;
        this.lang = undefined;
        this.navItems = [];
        this.navSize = undefined;
    }
    /**
     * Keyboard controls of theme and topic menu
     */
    async keyDownListener(e) {
        if (this.el == document.activeElement &&
            this.themeList.contains(document.activeElement.shadowRoot.activeElement)) {
            const key = e.key;
            const currentIndex = this.navItems.indexOf(document.activeElement.shadowRoot.activeElement);
            const activeElement = this.navItems[currentIndex];
            switch (key) {
                case 'ArrowDown':
                    e.preventDefault();
                    // If on last item, jump to first item
                    if (currentIndex + 1 > this.navItems.length - 1) {
                        await this.focusMenuLink(this.navItems, activeElement, 0);
                        // Jump to next item
                    }
                    else {
                        await this.focusMenuLink(this.navItems, activeElement, currentIndex + 1);
                    }
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    // If on first item, jump to last
                    if (currentIndex - 1 < 0) {
                        await this.focusMenuLink(this.navItems, activeElement, this.navItems.length - 1);
                        // Jump to next item
                    }
                    else {
                        await this.focusMenuLink(this.navItems, activeElement, currentIndex - 1);
                    }
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    // Theme links
                    if (activeElement.hasAttribute('aria-haspopup') &&
                        !activeElement.hasAttribute('data-keep-expanded')) {
                        await this.updateNavItemQueue(activeElement.parentNode.children[1]);
                        activeElement.setAttribute('aria-expanded', 'true');
                        this.navItems[0].focus();
                        // Most requested link - desktop
                    }
                    else if (activeElement.hasAttribute('aria-haspopup') &&
                        this.navSize == 'desktop') {
                        await this.focusMenuLink(this.navItems, activeElement, currentIndex + 1);
                        // Most requested link - mobile
                    }
                    else if (activeElement.hasAttribute('aria-haspopup') &&
                        this.navSize == 'mobile') {
                        await this.updateNavItemQueue(activeElement.parentNode.children[1]);
                        activeElement.setAttribute('aria-expanded', 'true');
                        this.navItems[0].focus();
                    }
                    break;
                case 'Enter':
                    if (activeElement.closest('ul').hasAttribute('data-top-menu')) {
                        await this.updateNavItemQueue(activeElement.parentNode.children[1]);
                        this.navItems[0].focus();
                    }
                    break;
                case 'ArrowLeft':
                case 'Escape': {
                    e.preventDefault();
                    const parentList = activeElement.closest('ul');
                    // In most requested menu
                    if (parentList.parentNode
                        .querySelector('a')
                        .hasAttribute('data-keep-expanded')) {
                        await this.updateNavItemQueue(parentList.parentNode.closest('ul'));
                        await this.focusMenuLink(this.navItems, activeElement, this.navItems.indexOf(parentList.parentNode.querySelector('a')));
                        // on mobile, close expandable area
                        if (this.navSize == 'mobile') {
                            parentList.parentNode
                                .querySelector('a')
                                .setAttribute('aria-expanded', 'false');
                        }
                        // Exit menu
                    }
                    else if (parentList.parentNode.closest('ul')) {
                        await this.updateNavItemQueue(parentList.parentNode.closest('ul'));
                        await this.focusMenuLink(this.navItems, activeElement, this.navItems.indexOf(parentList.parentNode.querySelector('a')));
                        if (this.navSize == 'mobile') {
                            parentList.parentNode
                                .querySelector('a')
                                .setAttribute('aria-expanded', 'false');
                        }
                        // Close theme and topic menu, focus menu button
                    }
                    else {
                        this.menuButton.focus();
                        await this.toggleNav();
                    }
                    break;
                }
                case 'Tab':
                    await this.toggleNav();
                    break;
            }
        }
    }
    /**
     * Close all theme menus
     */
    async closeAllMenus() {
        for (let x = 0; x < this.themeList.children.length; x++) {
            const themeLink = this.themeList.children[x].querySelector('a');
            themeLink.setAttribute('aria-expanded', 'false');
        }
    }
    /**
     * Toggle open theme and topic menu
     */
    async toggleNav() {
        this.open = !this.open;
        if (this.open) {
            // Check window size to set the state
            const mediaQuery = window.matchMedia('screen and (max-width: 991px)');
            const nav = this.el;
            if (mediaQuery.matches) {
                this.navSize = 'mobile';
            }
            else {
                this.navSize = 'desktop';
            }
            // Add change event listener to keep track of window changing size
            mediaQuery.addEventListener('change', async (e) => {
                if (e.matches) {
                    nav.updateNavSize('mobile');
                    nav.shadowRoot
                        .querySelectorAll('[data-keep-expanded]')
                        .forEach(el => {
                        el.setAttribute('aria-expanded', 'false');
                    });
                }
                else {
                    nav.updateNavSize('desktop');
                    nav.shadowRoot
                        .querySelectorAll('[data-keep-expanded]')
                        .forEach(el => {
                        el.setAttribute('aria-expanded', 'true');
                    });
                }
            });
            if (this.navSize == 'desktop') {
                this.themeList.children[0].children[0].setAttribute('aria-expanded', 'true');
            }
            else {
                // Close most requested on mobile
                this.el.shadowRoot
                    .querySelectorAll('[data-keep-expanded]')
                    .forEach(el => {
                    el.setAttribute('aria-expanded', 'false');
                });
            }
            setTimeout(() => {
                this.themeList.children[0].querySelector('a').focus();
            }, 50);
            await this.updateNavItemQueue(this.themeList);
        }
        else {
            this.closeAllMenus();
        }
    }
    /*
     * Pass new window size: desktop or mobile
     */
    async updateNavSize(size) {
        this.navSize = size;
    }
    /*
     * Get current navSize state
     */
    async getNavSize() {
        return this.navSize;
    }
    /**
     * Update keyboard focus queue
     */
    async updateNavItemQueue(parent) {
        const focusableElements = [];
        for (let x = 0; x < parent.children.length; x++) {
            const link = parent.children[x].querySelector('a');
            if (link) {
                focusableElements.push(link);
                if (link.hasAttribute('data-keep-expanded') &&
                    this.navSize == 'desktop') {
                    for (let c = 0; c < link.parentNode.children[1].children.length; c++) {
                        focusableElements.push(link.parentNode.children[1].children[c].querySelector('a'));
                    }
                }
            }
        }
        this.navItems = focusableElements;
    }
    /**
     * Focus menu link
     */
    focusMenuLink(queue, activeElement, nextStep) {
        if (activeElement.closest('ul').hasAttribute('data-top-menu') &&
            activeElement.hasAttribute('aria-haspopup') &&
            !activeElement.hasAttribute('data-keep-expanded')) {
            this.closeAllMenus();
        }
        else if (activeElement.hasAttribute('aria-haspopup') &&
            !activeElement.hasAttribute('data-keep-expanded')) {
            activeElement.setAttribute('aria-expanded', 'false');
        }
        queue[nextStep].focus();
        if (queue[nextStep].hasAttribute('aria-haspopup') &&
            this.navSize == 'desktop') {
            queue[nextStep].setAttribute('aria-expanded', 'true');
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
        try {
            const response = await fetch(`https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-${this.lang}.html`);
            this.listItems = await response.text();
        }
        catch (error) {
            this.listItems = backup[this.lang];
        }
    }
    async componentDidLoad() {
        const hostElement = this.el;
        let menuEnterTimer;
        // Since we load the HTML, loop through elements and add event listeners to add functionality
        for (let x = 0; x < this.themeList.children.length; x++) {
            const themeLink = this.themeList.children[x].querySelector('a');
            // Click
            themeLink.addEventListener('click', async (e) => {
                e.preventDefault();
                // Open topic lists
                if ((await hostElement.getNavSize()) == 'desktop') {
                    await hostElement.closeAllMenus();
                    themeLink.setAttribute('aria-expanded', 'true');
                }
                else {
                    if (themeLink.getAttribute('aria-expanded') == 'false') {
                        themeLink.setAttribute('aria-expanded', 'true');
                        await hostElement.updateNavItemQueue(themeLink.parentNode.children[1]);
                        setTimeout(() => {
                            themeLink.parentNode.children[1].children[0]
                                .querySelector('a')
                                .focus();
                        }, 50);
                    }
                    else {
                        await hostElement.closeAllMenus();
                        await hostElement.updateNavItemQueue(themeLink.closest('ul'));
                        setTimeout(() => {
                            themeLink.focus();
                        }, 50);
                    }
                }
            });
            // Hover actions
            themeLink.addEventListener('mouseenter', async () => {
                // Change active theme if hovering on menuitem
                if ((await hostElement.getNavSize()) == 'desktop') {
                    menuEnterTimer = setTimeout(async function () {
                        await hostElement.closeAllMenus();
                        themeLink.setAttribute('aria-expanded', 'true');
                    }, 400);
                }
            });
            // Cancel hover timer if mouseut before completes
            themeLink.addEventListener('mouseleave', () => {
                clearTimeout(menuEnterTimer);
            });
            // Most requested click
            const mostRequested = this.themeList.children[x]
                .querySelector('ul')
                .querySelector('[aria-haspopup]');
            mostRequested.addEventListener('click', async (e) => {
                e.preventDefault();
                if ((await hostElement.getNavSize()) == 'mobile') {
                    if (mostRequested.getAttribute('aria-expanded') == 'true') {
                        mostRequested.setAttribute('aria-expanded', 'false');
                    }
                    else {
                        mostRequested.setAttribute('aria-expanded', 'true');
                        const mostRequestedList = mostRequested.parentNode.querySelector('ul');
                        mostRequestedList.children[0].querySelector('a').focus();
                        await hostElement.updateNavItemQueue(mostRequestedList);
                    }
                }
            });
        }
    }
    render() {
        const { home, lang } = this;
        return (h(Host, { key: '916b7b16453365f35636a73ae748cffcb85f356b' }, h("nav", { key: 'bb4d79d8c9da99086df1b547e1a5749ebac71f8f', class: "gcds-topic-menu", "aria-labelledby": "gcds-topic-menu__heading" }, h("gcds-sr-only", { key: '29c985cdb30bee4bbb5b6bbd9767035cf9c931c5', id: "gcds-topic-menu__heading", tag: "h2" }, I18N[lang].menuLabelFull), h("button", { key: '5090d231a0db3a464b814fba5531039e29a35242', "aria-haspopup": "true", "aria-expanded": this.open.toString(), "aria-label": I18N[lang].buttonLabel, onClick: async () => await this.toggleNav(), ref: element => (this.menuButton = element), class: home && 'gcds-topic-menu--home' }, this.lang == 'en' ? (h(Fragment, null, h("gcds-sr-only", { tag: "span" }, I18N[lang].menuLabelHidden), I18N[lang].menuToggle)) : (h(Fragment, null, I18N[lang].menuToggle, h("gcds-sr-only", { tag: "span" }, I18N[lang].menuLabelHidden))), h("gcds-icon", { key: 'f1beea2f4474b8c978d888f8501e167f501af7e0', name: "chevron-down", "margin-left": "150", size: "caption" })), h("ul", { key: '969cbffc0095912f1dee1d372549056287c24664', role: "menu", "aria-orientation": "vertical", "data-top-menu": true, innerHTML: this.listItems, ref: element => (this.themeList = element) }))));
    }
    static get is() { return "gcds-topic-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-topic-menu.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-topic-menu.css"]
        };
    }
    static get properties() {
        return {
            "home": {
                "type": "boolean",
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
                    "text": "Sets the homepage styling"
                },
                "attribute": "home",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "open": {},
            "lang": {},
            "navItems": {},
            "navSize": {}
        };
    }
    static get methods() {
        return {
            "closeAllMenus": {
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
                    "text": "Close all theme menus",
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
                        "HTMLGcdsTopicMenuElement": {
                            "location": "global",
                            "id": "global::HTMLGcdsTopicMenuElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggle open theme and topic menu",
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
            "updateNavItemQueue": {
                "complexType": {
                    "signature": "(parent: any) => Promise<void>",
                    "parameters": [{
                            "name": "parent",
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
                    "text": "Update keyboard focus queue",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "keyDownListener",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=gcds-topic-menu.js.map
