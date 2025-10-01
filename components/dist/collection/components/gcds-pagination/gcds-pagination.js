import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, emitEvent } from "../../utils/utils";
import I18N from "./i18n/i18n";
import { constructHref, constructClasses } from "./utils/render";
/**
 * Pagination is a division of content into multiple linked pages.
 */
export class GcdsPagination {
    constructor() {
        this.listitems = [];
        this.mobilePrevNext = [];
        /*
         * Props
         */
        /**
         * Determines the pagination display style.
         */
        this.display = 'list';
    }
    watchCurrentPage(newValue) {
        this.currentStep = newValue;
    }
    /**
     * Convert url prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    urlChanged(newUrl) {
        if (typeof newUrl == 'string') {
            this.urlObject = JSON.parse(newUrl);
        }
        else if (typeof newUrl == 'object') {
            this.urlObject = newUrl;
        }
    }
    watchLang() {
        if (this.display == 'list') {
            this.configureListPagination();
        }
    }
    /**
     * Function to constuct <li> and <a> tags for display="list" pagination
     */
    configurePaginationStep(page, end, mobile) {
        const href = this.urlObject
            ? constructHref(this.urlObject, page, end)
            : 'javascript:void(0)';
        const linkAttrs = {
            'href': href,
            'tabindex': 0,
            'aria-label': !end
                ? I18N[this.lang].pageNumberOf
                    .replace('{#}', page)
                    .replace('{total}', this.totalPages)
                    .replace('{label}', this.label)
                : end == 'next'
                    ? `${I18N[this.lang].nextPage}: ${I18N[this.lang].pageNumberOf
                        .replace('{#}', ++page)
                        .replace('{total}', this.totalPages)
                        .replace('{label}', this.label)}`
                    : `${I18N[this.lang].previousPage}: ${I18N[this.lang].pageNumberOf
                        .replace('{#}', --page)
                        .replace('{total}', this.totalPages)
                        .replace('{label}', this.label)}`,
            'onBlur': () => this.gcdsBlur.emit(),
            'onFocus': () => this.gcdsFocus.emit(),
            'onClick': e => emitEvent(e, this.gcdsClick, { page: page, href }),
        };
        if (page == this.currentPage && !end) {
            linkAttrs['aria-current'] = 'page';
        }
        if (end) {
            return (h("li", null, end === 'next' ? (h("a", Object.assign({}, linkAttrs, { class: !mobile
                    ? 'gcds-pagination-end-button'
                    : 'gcds-pagination-end-button-mobile' }), h("span", null, I18N[this.lang].next), h("gcds-icon", { "margin-left": "150", name: "chevron-right" }))) : (h("a", Object.assign({}, linkAttrs, { class: !mobile
                    ? 'gcds-pagination-end-button'
                    : 'gcds-pagination-end-button-mobile' }), h("gcds-icon", { "margin-right": "150", name: "chevron-left" }), h("span", null, mobile
                ? I18N[this.lang].previousMobile
                : I18N[this.lang].previous)))));
        }
        else {
            return (h("li", { class: page != 1 && page != this.totalPages
                    ? constructClasses(page, this.currentPage, this.totalPages)
                    : '' }, h("a", Object.assign({}, linkAttrs), page)));
        }
    }
    /**
     * Function to render the right steps for display="list" pagination
     */
    configureListPagination() {
        this.listitems = [];
        this.mobilePrevNext = [];
        if (this.currentPage != 1) {
            this.listitems.push(this.configurePaginationStep(this.currentPage, 'previous'));
            this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, 'previous', true));
        }
        // Flags to see if ellipses already rendered
        let previousEllipses = false;
        let nextEllipses = false;
        for (let i = 1; i <= this.totalPages; i++) {
            // Left side mobile ellipses
            if (i == 2 &&
                this.currentPage < 6 &&
                this.currentPage > 3 &&
                this.totalPages > 9) {
                this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
            }
            else if (i == 2 &&
                this.totalPages < 10 &&
                this.totalPages > 5 &&
                this.currentPage > 3) {
                this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
            }
            if (i == this.currentPage ||
                i == 1 ||
                i == this.totalPages ||
                (i >= this.currentPage - 2 && i <= this.currentPage + 2) ||
                this.totalPages < 10) {
                this.listitems.push(this.configurePaginationStep(i));
            }
            else if ((this.currentPage <= 5 && i <= 7) ||
                (this.currentPage >= this.totalPages - 4 && i >= this.totalPages - 6)) {
                this.listitems.push(this.configurePaginationStep(i));
            }
            else if ((this.currentPage == 5 && i == 2) ||
                (this.currentPage == this.totalPages - 4 && i == this.totalPages - 1)) {
                this.listitems.push(this.configurePaginationStep(i));
            }
            else if (!previousEllipses && i < this.currentPage - 2) {
                this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
                previousEllipses = true;
            }
            else if (!nextEllipses &&
                i > this.currentPage + 2 &&
                i < this.totalPages) {
                this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
                nextEllipses = true;
            }
            // Right side mobile ellipses
            if (i == this.totalPages - 1 &&
                this.currentPage > this.totalPages - 5 &&
                this.currentPage < this.totalPages - 2 &&
                this.totalPages > 9) {
                this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
            }
            else if (i == this.totalPages - 1 &&
                this.totalPages < 10 &&
                this.totalPages > 5 &&
                this.currentPage < this.totalPages - 2) {
                this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
            }
        }
        if (this.currentPage != this.totalPages) {
            this.listitems.push(this.configurePaginationStep(this.currentPage, 'next'));
            this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, 'next', true));
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
        if (this.url && typeof this.url == 'string') {
            this.urlObject = JSON.parse(this.url);
        }
        else if (this.url && typeof this.url == 'object') {
            this.urlObject = this.url;
        }
        if (this.display == 'list') {
            this.configureListPagination();
        }
    }
    componentDidUpdate() {
        if (this.display == 'list') {
            this.configureListPagination();
        }
    }
    render() {
        const { display, label, previousHref, previousLabel, nextHref, nextLabel, lang, } = this;
        return (h(Host, { key: '7de8352d25f9bf89e58d2c3ed98a14ab62acb98b', role: "navigation", "aria-label": label }, h("div", { key: 'f63a8dbf6f85c1ec54abf67d01ef423ec8dcc2c7', class: "gcds-pagination" }, display === 'list' ? (h("div", null, h("ul", { class: "gcds-pagination-list" }, this.listitems), h("ul", { class: "gcds-pagination-list-mobile-prevnext" }, this.mobilePrevNext))) : (h("ul", { class: "gcds-pagination-simple" }, previousHref && (h("li", { class: "gcds-pagination-simple-previous" }, h("a", { href: previousHref, tabindex: 0, "aria-label": `${I18N[lang].previousPage}${previousLabel ? `: ${previousLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, previousHref) }, h("gcds-icon", { "margin-right": "150", name: "chevron-left" }), h("div", { class: "gcds-pagination-simple-text" }, I18N[lang].previous), h("span", null, previousLabel)))), nextHref && (h("li", { class: "gcds-pagination-simple-next" }, h("a", { href: nextHref, tabindex: 0, "aria-label": `${I18N[lang].nextPage}${nextLabel ? `: ${nextLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, nextHref) }, h("div", { class: "gcds-pagination-simple-text" }, I18N[lang].next), h("span", null, nextLabel), h("gcds-icon", { "margin-left": "150", name: "chevron-right" })))))))));
    }
    static get is() { return "gcds-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-pagination.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-pagination.css"]
        };
    }
    static get properties() {
        return {
            "display": {
                "type": "string",
                "attribute": "display",
                "mutable": false,
                "complexType": {
                    "original": "'list' | 'simple'",
                    "resolved": "\"list\" | \"simple\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines the pagination display style."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'list'"
            },
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
                    "text": "Navigation element label"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "previousHref": {
                "type": "string",
                "attribute": "previous-href",
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
                    "text": "Simple display - href for previous link"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "previousLabel": {
                "type": "string",
                "attribute": "previous-label",
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
                    "text": "Simple display - label for previous link"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "nextHref": {
                "type": "string",
                "attribute": "next-href",
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
                    "text": "Simple display - href for next link"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "nextLabel": {
                "type": "string",
                "attribute": "next-label",
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
                    "text": "Simple display - lable for next link"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "totalPages": {
                "type": "number",
                "attribute": "total-pages",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List display - Total number of pages"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "currentPage": {
                "type": "number",
                "attribute": "current-page",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List display - Current page number"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "url": {
                "type": "string",
                "attribute": "url",
                "mutable": false,
                "complexType": {
                    "original": "string | object",
                    "resolved": "object | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List display - URL object to create query strings and fragment on links"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "currentStep": {},
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
                    "text": "Emitted when the link has been clicked. Contains the href in event detail when using simple display,\nor an object with page and href when using list display."
                },
                "complexType": {
                    "original": "object | string",
                    "resolved": "object | string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "currentPage",
                "methodName": "watchCurrentPage"
            }, {
                "propName": "url",
                "methodName": "urlChanged"
            }, {
                "propName": "lang",
                "methodName": "watchLang"
            }];
    }
}
//# sourceMappingURL=gcds-pagination.js.map
