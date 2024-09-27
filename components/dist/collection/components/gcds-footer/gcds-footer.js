import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import I18N from "./i18n/i18n";
export class GcdsFooter {
    constructor() {
        this.display = 'compact';
        this.wordmarkVariant = undefined;
        this.contextualHeading = undefined;
        this.contextualLinks = undefined;
        this.subLinks = undefined;
        this.lang = undefined;
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
        return (h(Host, { key: 'd1db0f4906c46f81dfef9216c16ed60ecb181ca0', role: "contentinfo", "aria-label": "Footer" }, h("gcds-sr-only", { key: 'f1a49651dc54e05e5d35b8e9032acfdd301aea8f', tag: "h2" }, I18N[lang].about), contextualLinksObject && contextualHeading && (h("div", { key: '0653b6f5184d59e0c05097ec58a002c1196cc6a5', class: "gcds-footer__contextual" }, h("div", { key: '57eaa5f31ada47ae4caad4b18b277288c9f53bab', class: "contextual__container" }, h("nav", { key: 'ac6f6e81891dd1915f6e68d6b95c6d54b5d4f60b', "aria-labelledby": "contextual__heading" }, h("h3", { key: 'ae738dfd4f19c28c17b385084b3a0a42de474ad4', id: "contextual__heading", class: "contextual__heading" }, contextualHeading), h("ul", { key: 'd8cb78f64e69d82a18105eb4f5c9669947a3bb07', class: "contextual__list" }, Object.keys(contextualLinksObject).map(key => {
            if (contextualLinkCount < 3) {
                contextualLinkCount++;
                return (h("li", null, h("gcds-link", { size: "small", href: contextualLinksObject[key] }, key)));
            }
        })))))), display === 'full' ? (h("div", { class: "gcds-footer__main" }, h("div", { class: "main__container" }, h("nav", { class: "main__govnav", "aria-labelledby": "govnav__heading" }, h("h3", { id: "govnav__heading" }, I18N[lang].gov.heading), h("ul", { class: "govnav__list" }, Object.keys(govNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: govNav[value].link }, govNav[value].text)))))), h("nav", { class: "main__themenav", "aria-labelledby": "themenav__heading" }, h("gcds-sr-only", { tag: "h4", id: "themenav__heading" }, I18N[lang].themes.heading), h("ul", { class: "themenav__list" }, Object.keys(themeNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: themeNav[value].link }, themeNav[value].text))))))))) : null, h("div", { key: '21eef26e7495178731f8a463e148a137ffd724fc', class: "gcds-footer__sub" }, h("div", { key: 'd00863d474fdc71d492e0bac3f25e9edeea764ed', class: "sub__container" }, h("nav", { key: '8638c7c81ca3f4eaa957494e761222f6a232b3c4', "aria-labelledby": "sub__heading" }, h("gcds-sr-only", { key: 'eefe1e5294f3c0f99500381203da332c3209586b', tag: "h3", id: "sub__heading" }, I18N[lang].site.heading), h("ul", { key: 'd2c6324afb1553d345d9613f43432890d3f7e56c' }, subLinks
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
                "attribute": "display",
                "reflect": true,
                "defaultValue": "'compact'"
            },
            "wordmarkVariant": {
                "type": "string",
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
                "attribute": "wordmark-variant",
                "reflect": false
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
                "attribute": "contextual-heading",
                "reflect": false
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
                "attribute": "contextual-links",
                "reflect": false
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
                "attribute": "sub-links",
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
