import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import I18N from "./i18n/i18n";
export class GcdsFooter {
    constructor() {
        /**
         * Props
         */
        /**
         * Display mode of the footer
         */
        this.display = 'compact';
    }
    /**
     * Convert contextual links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    contextualLinksChanged(newContextualLinks) {
        if (typeof newContextualLinks == 'string') {
            this.contextualLinksObject = JSON.parse(newContextualLinks);
        }
        else if (typeof newContextualLinks == 'object') {
            this.contextualLinksObject = newContextualLinks;
        }
    }
    /**
     * Convert sub links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    subLinksChanged(newSubLinks) {
        if (typeof newSubLinks == 'string') {
            this.subLinksObject = JSON.parse(newSubLinks);
        }
        else if (typeof newSubLinks == 'object') {
            this.subLinksObject = newSubLinks;
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
        if (this.contextualLinks && typeof this.contextualLinks == 'string') {
            this.contextualLinksObject = JSON.parse(this.contextualLinks);
        }
        else if (this.contextualLinks &&
            typeof this.contextualLinks == 'object') {
            this.contextualLinksObject = this.contextualLinks;
        }
        if (this.subLinks && typeof this.subLinks == 'string') {
            this.subLinksObject = JSON.parse(this.subLinks);
        }
        else if (this.subLinks && typeof this.subLinks == 'object') {
            this.subLinksObject = this.subLinks;
        }
    }
    get renderSignature() {
        const signVariant = this.wordmarkVariant ? this.wordmarkVariant : 'colour';
        if (this.el.querySelector('[slot="signature"]')) {
            return h("slot", { name: "wordmark" });
        }
        else {
            return (h("div", { class: "sub__wordmark" }, h("gcds-signature", { type: "wordmark", variant: signVariant, lang: this.lang })));
        }
    }
    render() {
        const { lang, display, contextualHeading, contextualLinksObject, subLinks, subLinksObject, renderSignature, } = this;
        const govNav = I18N[lang].gov.menu;
        const themeNav = I18N[lang].themes.menu;
        const siteNav = I18N[lang].site.menu;
        let contextualLinkCount = 0;
        let subLinkCount = 0;
        return (h(Host, { key: '321e99b2faa82fcf0a88f62dec9e5449ab2b67bb', role: "contentinfo", "aria-label": "Footer" }, h("gcds-sr-only", { key: 'ae00217f2f2d7e548d5d184573fb1a6264409f19', tag: "h2" }, I18N[lang].about), contextualLinksObject && contextualHeading && (h("div", { key: '630f772b1771f9a7051a0adc36e4143dec5149f6', class: "gcds-footer__contextual" }, h("div", { key: 'acaf3de4ec14f9cf5874b67c2f15fdc970fa6411', class: "contextual__container" }, h("nav", { key: 'cddae229d1beb9ade4aae46950e35a2ea2203ae8', "aria-labelledby": "contextual__heading" }, h("h3", { key: 'f73bd15b238d93e418c6a813a7048b34b0510d72', id: "contextual__heading", class: "contextual__heading" }, contextualHeading), h("ul", { key: '614c50407f7555ce4249b90832934cb0ce829889', class: "contextual__list" }, Object.keys(contextualLinksObject).map(key => {
            if (contextualLinkCount < 3) {
                contextualLinkCount++;
                return (h("li", null, h("gcds-link", { size: "small", href: contextualLinksObject[key] }, key)));
            }
        })))))), display === 'full' ? (h("div", { class: "gcds-footer__main" }, h("div", { class: "main__container" }, h("nav", { class: "main__govnav", "aria-labelledby": "govnav__heading" }, h("h3", { id: "govnav__heading" }, I18N[lang].gov.heading), h("ul", { class: "govnav__list" }, Object.keys(govNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: govNav[value].link }, govNav[value].text)))))), h("nav", { class: "main__themenav", "aria-labelledby": "themenav__heading" }, h("gcds-sr-only", { tag: "h4", id: "themenav__heading" }, I18N[lang].themes.heading), h("ul", { class: "themenav__list" }, Object.keys(themeNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: themeNav[value].link }, themeNav[value].text))))))))) : null, h("div", { key: 'c753c6c0324fb8fd4ae8655388c8eeca73365cf2', class: "gcds-footer__sub" }, h("div", { key: 'a4b5d0dd745603deebbdbc3332d41e59368a26f3', class: "sub__container" }, h("nav", { key: 'c69dbfb52e56e601442edac9507fd95b667e7477', "aria-labelledby": "sub__heading" }, h("gcds-sr-only", { key: '8ccf5212c6088334b6481451461f81f7d4acdc7c', tag: "h3", id: "sub__heading" }, I18N[lang].site.heading), h("ul", { key: '0e007ae6b61536d63f31ddbd6da0216555b85004' }, subLinks
            ? Object.keys(subLinksObject).map(key => {
                if (subLinkCount < 5) {
                    subLinkCount++;
                    return (h("li", null, h("gcds-link", { size: "small", href: subLinksObject[key] }, key)));
                }
            })
            : Object.keys(siteNav).map(value => {
                return (h("li", null, h("gcds-link", { size: "small", href: siteNav[value].link }, siteNav[value].text)));
            }))), renderSignature))));
    }
    static get is() { return "gcds-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-footer.css"]
        };
    }
    static get properties() {
        return {
            "display": {
                "type": "string",
                "attribute": "display",
                "mutable": true,
                "complexType": {
                    "original": "'compact' | 'full'",
                    "resolved": "\"compact\" | \"full\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Display mode of the footer"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'compact'"
            },
            "wordmarkVariant": {
                "type": "string",
                "attribute": "wordmark-variant",
                "mutable": false,
                "complexType": {
                    "original": "'colour' | 'white'",
                    "resolved": "\"colour\" | \"white\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "GcdsSignature - The variant of the Government of Canada wordmark"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "contextualHeading": {
                "type": "string",
                "attribute": "contextual-heading",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Heading for contextual slot and nav landmark"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "contextualLinks": {
                "type": "string",
                "attribute": "contextual-links",
                "mutable": true,
                "complexType": {
                    "original": "string | object",
                    "resolved": "object | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Object of list items for contextual band. Format: { link-label: link-href }"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "subLinks": {
                "type": "string",
                "attribute": "sub-links",
                "mutable": true,
                "complexType": {
                    "original": "string | object",
                    "resolved": "object | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Object of list items for sub-footer. Format: { link-label: link-href }"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "lang": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "contextualLinks",
                "methodName": "contextualLinksChanged"
            }, {
                "propName": "subLinks",
                "methodName": "subLinksChanged"
            }];
    }
}
//# sourceMappingURL=gcds-footer.js.map
