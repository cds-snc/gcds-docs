import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsErrorSummary {
    constructor() {
        this.errorLinksObject = {};
        this.heading = undefined;
        this.listen = true;
        this.errorLinks = undefined;
        this.lang = undefined;
        this.errorQueue = {};
        this.hasSubmitted = false;
    }
    listenChanged() {
        if (this.errorLinks) {
            this.listen = false;
        }
    }
    /**
     * Convert contextual links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    errorLinksChanged(newErrorLinks) {
        if (typeof newErrorLinks == 'string') {
            this.errorLinks = JSON.parse(newErrorLinks);
        }
        else if (typeof newErrorLinks == 'object') {
            this.errorLinks = newErrorLinks;
        }
        this.errorQueue = this.errorLinks;
        // Turn off listen if error-links is being used
        if (this.listen) {
            this.listen = false;
        }
    }
    errorListener(e) {
        if (this.listen && e.target.closest('form') == this.el.closest('form')) {
            this.errorLinksObject[e.detail.message] = e.target;
        }
    }
    validListener(e) {
        if (this.listen && e.target.closest('form') == this.el.closest('form')) {
            for (const [key, value] of Object.entries(this.errorLinksObject)) {
                if (value == e.target) {
                    delete this.errorLinksObject[key];
                }
            }
            if (this.errorQueue) {
                const sortedErrorList = this.sortErrors();
                this.errorQueue = Object.assign({}, sortedErrorList);
            }
        }
    }
    submitListener(e) {
        if (this.listen && e.target.closest('form') == this.el.closest('form')) {
            this.hasSubmitted = true;
            // Time out to collect gcdsError events before rendering
            setTimeout(() => {
                const sortedErrorList = this.sortErrors();
                this.errorQueue = Object.assign({}, sortedErrorList);
                // Time out to let list render
                setTimeout(() => {
                    this.shadowElement.focus();
                }, 50);
            }, 100);
        }
    }
    /*
     * Sort error object based on the order form compoennts appear in the form
     */
    sortErrors() {
        const sortable = Object.entries(this.errorLinksObject).map(([key, value]) => [
            key,
            value,
            value.getBoundingClientRect().y,
        ]);
        sortable.sort(function (a, b) {
            return a[2] - b[2];
        });
        const objSorted = {};
        sortable.forEach(function (item) {
            objSorted[item[0]] = item[1];
        });
        return objSorted;
    }
    /*
     * Focus element on error link click with label visible
     */
    focusElement(id) {
        var _a;
        const element = document.querySelector(id);
        let target = `[for=${id.replace('#', '')}]`;
        (_a = element.closest('form').querySelector(target)) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        element.focus();
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
        this.listenChanged();
        // Format error-links string / object
        if (this.errorLinks && typeof this.errorLinks == 'string') {
            this.errorQueue = Object.assign({}, JSON.parse(this.errorLinks));
        }
        else if (this.errorLinks && typeof this.errorLinks == 'object') {
            this.errorQueue = Object.assign({}, this.errorLinks);
        }
    }
    render() {
        const { heading, errorQueue, lang, hasSubmitted, errorLinks } = this;
        return (h(Host, { key: 'dd90e9455ea1a422d5f4559c62df271259923249' }, h("div", { key: 'bb61b6d2eea84aead7d06e0355b464bf2e2281bb', role: "alert", tabindex: "-1", ref: element => (this.shadowElement = element), class: `gcds-error-summary ${(hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0
                ? 'gcds-show'
                : ''}` }, h("gcds-heading", { key: '170edbb97c73a0928aaa571f33eee36b72fee740', tag: "h2", "margin-top": "0", "margin-bottom": "225" }, heading !== null && heading !== void 0 ? heading : i18n[lang].heading), h("ol", { key: 'ce1c06b5047c8a1632a955c3cb5d7ed833a7284b', class: "summary__errorlist" }, (hasSubmitted || errorLinks) &&
            Object.keys(errorQueue).length > 0 &&
            Object.keys(errorQueue).map(key => {
                return (h("li", { class: "summary__listitem" }, h("gcds-link", { size: "regular", href: errorLinks ? key : '#', onClick: e => {
                        e.preventDefault();
                        errorLinks
                            ? this.focusElement(key)
                            : errorQueue[key].focus();
                    } }, errorLinks ? errorQueue[key] : key)));
            })))));
    }
    static get is() { return "gcds-error-summary"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-error-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-error-summary.css"]
        };
    }
    static get properties() {
        return {
            "heading": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set error summary heading"
                },
                "attribute": "heading",
                "reflect": true
            },
            "listen": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies if the error summary should listen for GcdsError event to generate error list."
                },
                "attribute": "listen",
                "reflect": false,
                "defaultValue": "true"
            },
            "errorLinks": {
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
                    "text": "Object of list items for error list. Format: { link-href: link-label }"
                },
                "attribute": "error-links",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "lang": {},
            "errorQueue": {},
            "hasSubmitted": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "listen",
                "methodName": "listenChanged"
            }, {
                "propName": "errorLinks",
                "methodName": "errorLinksChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "gcdsError",
                "method": "errorListener",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "gcdsValid",
                "method": "validListener",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "submit",
                "method": "submitListener",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=gcds-error-summary.js.map
