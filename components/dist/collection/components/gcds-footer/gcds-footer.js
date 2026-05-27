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
        return (h(Host, { key: 'f1b8da552d3024692e8a2a617e9009aa3757fa14', role: "contentinfo", "aria-label": "Footer" }, h("gcds-sr-only", { key: '29c26f6e7b8fd4004a7f0ff572e101b12518c5a1', tag: "h2" }, I18N[lang].about), contextualLinksObject && contextualHeading && (h("div", { key: '56310768170e0095b55dc958685f31612f97884b', class: "gcds-footer__contextual" }, h("div", { key: '6f969587463df4f2486492421a9f0a2d08dbdc08', class: "contextual__container" }, h("nav", { key: 'c2cddfebf418a7d14eb50e9bb854c80d12c58c28', "aria-labelledby": "contextual__heading" }, h("h3", { key: '96f67bd4be77214e4f3aa794e87d6c6c8589646f', id: "contextual__heading", class: "contextual__heading" }, contextualHeading), h("ul", { key: '9acda60496ee805776ed0f1ff375da195d3a2616', class: "contextual__list" }, Object.keys(contextualLinksObject).map(key => {
            if (contextualLinkCount < 3) {
                contextualLinkCount++;
                return (h("li", null, h("gcds-link", { size: "small", href: contextualLinksObject[key] }, key)));
            }
        })))))), display === 'full' ? (h("div", { class: "gcds-footer__main" }, h("div", { class: "main__container" }, h("nav", { class: "main__govnav", "aria-labelledby": "govnav__heading" }, h("h3", { id: "govnav__heading" }, I18N[lang].gov.heading), h("ul", { class: "govnav__list" }, Object.keys(govNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: govNav[value].link }, govNav[value].text)))))), h("nav", { class: "main__themenav", "aria-labelledby": "themenav__heading" }, h("gcds-sr-only", { tag: "h4", id: "themenav__heading" }, I18N[lang].themes.heading), h("ul", { class: "themenav__list" }, Object.keys(themeNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: themeNav[value].link }, themeNav[value].text))))))))) : null, h("div", { key: '79a17bdbee68f0285ff012bd7cdd20ca866e664b', class: "gcds-footer__sub" }, h("div", { key: 'aef50d91b3e5516a243d4c291495d8e5d7037796', class: "sub__container" }, h("nav", { key: 'dcf518e4d3c42fd079127d1f941104d56399499a', "aria-labelledby": "sub__heading" }, h("gcds-sr-only", { key: 'e7aaa4d7bd8b60ec410c844804062bfeb0a41225', tag: "h3", id: "sub__heading" }, I18N[lang].site.heading), h("ul", { key: '4131cef714c576d9386e9bcfc7f0c002179e3de1' }, subLinks
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
                "attribute": "display",
                "defaultValue": "'compact'"
            },
            "contextualHeading": {
                "type": "string",
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
                "reflect": false,
                "attribute": "contextual-heading"
            },
            "contextualLinks": {
                "type": "string",
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
                "reflect": false,
                "attribute": "contextual-links"
            },
            "subLinks": {
                "type": "string",
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
                "reflect": false,
                "attribute": "sub-links"
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
