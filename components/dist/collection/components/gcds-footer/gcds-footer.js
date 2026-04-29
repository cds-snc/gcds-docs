import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import I18N from "./i18n/i18n";
/**
 * The footer is the responsive Government of Canada branded footer landmark.
 */
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
        if (this.el.querySelector('[slot="signature"]')) {
            return h("slot", { name: "wordmark" });
        }
        else {
            return (h("div", { class: "sub__wordmark" }, h("gcds-signature", { type: "wordmark", lang: this.lang })));
        }
    }
    render() {
        const { lang, display, contextualHeading, contextualLinksObject, subLinks, subLinksObject, renderSignature, } = this;
        const govNav = I18N[lang].gov.menu;
        const themeNav = I18N[lang].themes.menu;
        const siteNav = I18N[lang].site.menu;
        let contextualLinkCount = 0;
        let subLinkCount = 0;
        return (h(Host, { key: '6a0f9c4059caa2e30ef02a4bb51a552152c2bc4e', role: "contentinfo", "aria-label": "Footer" }, h("gcds-sr-only", { key: 'c6303a1cec09909530a3301fa5e5b2ef991a41d1', tag: "h2" }, I18N[lang].about), contextualLinksObject && contextualHeading && (h("div", { key: '07b21b1d7d83972f74c8bb0ab78a9e54f84c87eb', class: "gcds-footer__contextual" }, h("div", { key: '64417ee815a86dbf4871972bcfd138721dfdc497', class: "contextual__container" }, h("nav", { key: '4de71bc121ab044532922ce8e21278dc2d9329df', "aria-labelledby": "contextual__heading" }, h("h3", { key: '1ddcfa84c72e86ffb9c1558988dbc70c940e6c98', id: "contextual__heading", class: "contextual__heading" }, contextualHeading), h("ul", { key: '10f038c6286ca9e9e0ec1892797bd22d5cd7c1cf', class: "contextual__list" }, Object.keys(contextualLinksObject).map(key => {
            if (contextualLinkCount < 3) {
                contextualLinkCount++;
                return (h("li", null, h("gcds-link", { size: "small", href: contextualLinksObject[key] }, key)));
            }
        })))))), display === 'full' ? (h("div", { class: "gcds-footer__main" }, h("div", { class: "main__container" }, h("nav", { class: "main__govnav", "aria-labelledby": "govnav__heading" }, h("h3", { id: "govnav__heading" }, I18N[lang].gov.heading), h("ul", { class: "govnav__list" }, Object.keys(govNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: govNav[value].link }, govNav[value].text)))))), h("nav", { class: "main__themenav", "aria-labelledby": "themenav__heading" }, h("gcds-sr-only", { tag: "h4", id: "themenav__heading" }, I18N[lang].themes.heading), h("ul", { class: "themenav__list" }, Object.keys(themeNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: themeNav[value].link }, themeNav[value].text))))))))) : null, h("div", { key: '4909ad3592fd2304df8353e11947eca69aaa56aa', class: "gcds-footer__sub" }, h("div", { key: '3c4d3282dd8ead4b87df28591d94d6e6d327ef8d', class: "sub__container" }, h("nav", { key: 'ee1baa7d6ea78245af3451f128182683b51649a8', "aria-labelledby": "sub__heading" }, h("gcds-sr-only", { key: 'fa65fa21472446b67ea15179f27394ff95f238bf', tag: "h3", id: "sub__heading" }, I18N[lang].site.heading), h("ul", { key: '630f20304416893db2c67a6cda4400205a822a4b' }, subLinks
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
    static get events() {
        return [{
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
            }, {
                "method": "gcdsClick",
                "name": "gcdsClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the link has been clicked. Contains the href in the event detail."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
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
