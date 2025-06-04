import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { e as emitEvent, o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$2 } from './gcds-icon2.js';

const I18N = {
  en: {
    next: 'Next',
    previous: 'Previous',
    previousMobile: 'Prev',
    nextPage: 'Next page',
    previousPage: 'Previous page',
    pageNumber: 'Page {#}',
    pageNumberOf: 'Page {#} of {total} of {label}',
  },
  fr: {
    next: 'Suivante',
    previous: 'Précédent',
    previousMobile: 'Préc.',
    nextPage: 'Page suivante',
    previousPage: 'Page précédente',
    pageNumber: 'Page {#}',
    pageNumberOf: 'Page {#} sur {total} des {label}',
  },
};

/**
 * Function to constuct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
function constructHref(url, page, end) {
    let fragment = '';
    let qs = '';
    let count = 0;
    for (const key in url.queryStrings) {
        let queryKey = key;
        let queryValue = url.queryStrings[key];
        if (key.includes('::')) {
            const incrementer = key.split('::')[1];
            const regExp = /\{\{([^)]+)\}\}/;
            const matches = regExp.exec(url.queryStrings[key]);
            // Offeset numbers
            if (incrementer == 'offset') {
                let pageNumber = page;
                if (end == 'next') {
                    ++pageNumber;
                }
                else if (end == 'previous') {
                    --pageNumber;
                }
                queryValue = matches
                    ? url.queryStrings[key].replace(`{{${matches[1]}}}`, `${(pageNumber - 1) * Number(matches[1])}`)
                    : (pageNumber - 1) * url.queryStrings[key];
                queryKey = queryKey.replace('::offset', '');
            }
            // Match page number
            if (incrementer == 'match') {
                let pageNumber = page;
                if (end == 'next') {
                    ++pageNumber;
                }
                else if (end == 'previous') {
                    --pageNumber;
                }
                queryValue = matches
                    ? url.queryStrings[key].replace(`{{${matches[1]}}}`, `${pageNumber * Number(matches[1])}`)
                    : pageNumber * url.queryStrings[key];
                queryKey = queryKey.replace('::match', '');
            }
        }
        if (count == 0) {
            qs += `?${queryKey}=${queryValue}`;
        }
        else {
            qs += `&${queryKey}=${queryValue}`;
        }
        ++count;
    }
    if (url.fragment) {
        fragment = `#${url.fragment}`;
    }
    const href = `${qs}${fragment}`;
    return href;
}
/**
 * Function to constuct classes to help with mobile sizing
 */
function constructClasses(page, current, total) {
    if (total <= 5) {
        return '';
    }
    else if (current == 1 || current == total) {
        if (current - page == 4 || current - page == -4) {
            return 'gcds-pagination-list-breakpoint-xxs';
        }
        else if (current - page == 5 || current - page == -5) {
            return 'gcds-pagination-list-breakpoint-xs';
        }
        else if (current - page > 5 || current - page < -5) {
            return 'gcds-pagination-list-breakpoint-sm';
        }
    }
    else if (current == 2 || current == total - 1) {
        if (current - page == 3 || current - page == -3) {
            return 'gcds-pagination-list-breakpoint-xxs';
        }
        else if (current - page == 4 || current - page == -4) {
            return 'gcds-pagination-list-breakpoint-xs';
        }
        else if (current - page > 4 || current - page < -4) {
            return 'gcds-pagination-list-breakpoint-sm';
        }
    }
    else if (current > 2 && current < total - 1 && total < 10 && current == 5) {
        if (current - page == 2 || current - page == -2) {
            return 'gcds-pagination-list-breakpoint-xs';
        }
        else if (current - page >= 3 || current - page <= -3) {
            return 'gcds-pagination-list-breakpoint-sm';
        }
    }
    else if (current > 2 && current < total - 1) {
        if (current - page == 2 || current - page == -2) {
            return 'gcds-pagination-list-breakpoint-xxs';
        }
        else if (current - page == 3 || current - page == -3) {
            return 'gcds-pagination-list-breakpoint-xs';
        }
        else if (current - page > 3 || current - page < -3) {
            return 'gcds-pagination-list-breakpoint-sm';
        }
    }
}

const gcdsPaginationCss = "@layer reset, default, list, simple, wide, compact, hover, active, focus;@layer reset{:host{display:block}:host .gcds-pagination ul{list-style:none;padding:0}}@layer default{:host .gcds-pagination{container:component pagination/inline-size}:host .gcds-pagination li{margin:var(--gcds-pagination-listitem-margin)}:host .gcds-pagination li a{border-radius:var(--gcds-pagination-border-radius);color:var(--gcds-pagination-default-text);font:var(--gcds-pagination-font-desktop)}@media only screen and (width < 48em){:host .gcds-pagination li a{font:var(--gcds-pagination-font-mobile)}}}@layer list{:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext){display:flex;flex-direction:row;margin:0 auto;width:fit-content}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses{align-items:center;display:flex;height:3rem;justify-content:center;min-width:3rem}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile{height:auto;min-width:auto;padding:var(--gcds-pagination-list-end-button-padding);text-decoration:none;width:auto}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile span{text-decoration:underline}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-mobile-prevnext{display:none}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-list-mobile-ellipses{display:none}:host .gcds-pagination .gcds-pagination-list-mobile-prevnext{display:flex;margin:var(--gcds-pagination-mobile-list-prevnext-margin)}}@layer simple{:host .gcds-pagination-simple{display:flex;flex-direction:column;justify-content:space-between}:host .gcds-pagination-simple li{display:inline-block;justify-content:space-between;margin:var(--gcds-pagination-simple-listitem-margin);width:fit-content}:host .gcds-pagination-simple li a{display:grid;padding:var(--gcds-pagination-simple-padding)}:host .gcds-pagination-simple li a>gcds-icon{grid-area:icon}:host .gcds-pagination-simple li a>.gcds-pagination-simple-text{grid-area:text;margin:var(--gcds-pagination-simple-listitem-text-margin)}:host .gcds-pagination-simple li a>span{font-weight:var(--gcds-pagination-simple-label-font-weight);grid-area:label}:host .gcds-pagination-simple .gcds-pagination-simple-next a,:host .gcds-pagination-simple .gcds-pagination-simple-previous a{text-decoration:none}:host .gcds-pagination-simple .gcds-pagination-simple-next a .gcds-pagination-simple-text,:host .gcds-pagination-simple .gcds-pagination-simple-next a span,:host .gcds-pagination-simple .gcds-pagination-simple-previous a .gcds-pagination-simple-text,:host .gcds-pagination-simple .gcds-pagination-simple-previous a span{text-decoration:underline}:host .gcds-pagination-simple .gcds-pagination-simple-previous a{grid-template-areas:\"icon text\" \"icon label\";grid-template-columns:.25fr 1fr}:host .gcds-pagination-simple .gcds-pagination-simple-next a{grid-template-areas:\"text icon\" \"label icon\";grid-template-columns:1fr .25fr}}@layer wide{@container pagination (width > 44em){:host .gcds-pagination-list-mobile-prevnext{display:none}}@container pagination (width > 20em){:host .gcds-pagination-simple{flex-direction:row}:host .gcds-pagination-simple .gcds-pagination-simple-next{margin-left:auto}}}@layer compact{@container pagination (width <= 44em){:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a{border:var(--gcds-pagination-border-width) solid}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses{min-width:auto}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li:has(>a.gcds-pagination-end-button){margin:0}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li .gcds-pagination-end-button{display:none}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-mobile-prevnext{display:block}}@container pagination (width <= 30em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-sm{display:none}}@container pagination (width <= 27.5em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-xs{display:none}}@container pagination (width <= 25em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-xxs{display:none}}@container pagination (width <= 19em){:host .gcds-pagination-list li{margin:var(--gcds-pagination-mobile-list-item-margin)}}}@layer hover{@media (hover:hover){:host .gcds-pagination ul li a:hover{background:var(--gcds-pagination-hover-background);color:var(--gcds-pagination-hover-text)}}}@layer active{:host .gcds-pagination ul li a:active:not(:focus),:host .gcds-pagination ul li a[aria-current*=page]:not(:focus){background:var(--gcds-pagination-active-background);border-color:var(--gcds-pagination-active-background);color:var(--gcds-pagination-active-text);text-decoration:none}}@layer focus{:host .gcds-pagination ul li a:focus{background-color:var(--gcds-pagination-focus-background);border-color:var(--gcds-pagination-focus-background);box-shadow:var(--gcds-pagination-focus-box-shadow);color:var(--gcds-pagination-focus-text);outline:var(--gcds-pagination-focus-outline-width) solid var(--gcds-pagination-focus-background);outline-offset:var(--gcds-pagination-border-width);text-decoration:none}}";
const GcdsPaginationStyle0 = gcdsPaginationCss;

const GcdsPagination$1 = /*@__PURE__*/ proxyCustomElement(class GcdsPagination extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.listitems = [];
        this.mobilePrevNext = [];
        this.display = 'list';
        this.label = undefined;
        this.previousHref = undefined;
        this.previousLabel = undefined;
        this.nextHref = undefined;
        this.nextLabel = undefined;
        this.totalPages = undefined;
        this.currentPage = undefined;
        this.url = undefined;
        this.currentStep = undefined;
        this.lang = undefined;
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
        return (h(Host, { key: 'db7f79c101fc1772545f376d3b5842af2ba7fcf9', role: "navigation", "aria-label": label }, h("div", { key: 'da067061cb08e93e7781ed97f2c56e686943f3b2', class: "gcds-pagination" }, display === 'list' ? (h("div", null, h("ul", { class: "gcds-pagination-list" }, this.listitems), h("ul", { class: "gcds-pagination-list-mobile-prevnext" }, this.mobilePrevNext))) : (h("ul", { class: "gcds-pagination-simple" }, previousHref && (h("li", { class: "gcds-pagination-simple-previous" }, h("a", { href: previousHref, tabindex: 0, "aria-label": `${I18N[lang].previousPage}${previousLabel ? `: ${previousLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, previousHref) }, h("gcds-icon", { "margin-right": "150", name: "chevron-left" }), h("div", { class: "gcds-pagination-simple-text" }, I18N[lang].previous), h("span", null, previousLabel)))), nextHref && (h("li", { class: "gcds-pagination-simple-next" }, h("a", { href: nextHref, tabindex: 0, "aria-label": `${I18N[lang].nextPage}${nextLabel ? `: ${nextLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, nextHref) }, h("div", { class: "gcds-pagination-simple-text" }, I18N[lang].next), h("span", null, nextLabel), h("gcds-icon", { "margin-left": "150", name: "chevron-right" })))))))));
    }
    get el() { return this; }
    static get watchers() { return {
        "currentPage": ["watchCurrentPage"],
        "url": ["urlChanged"],
        "lang": ["watchLang"]
    }; }
    static get style() { return GcdsPaginationStyle0; }
}, [1, "gcds-pagination", {
        "display": [1],
        "label": [1],
        "previousHref": [1, "previous-href"],
        "previousLabel": [513, "previous-label"],
        "nextHref": [1, "next-href"],
        "nextLabel": [513, "next-label"],
        "totalPages": [2, "total-pages"],
        "currentPage": [514, "current-page"],
        "url": [1],
        "currentStep": [32],
        "lang": [32]
    }, undefined, {
        "currentPage": ["watchCurrentPage"],
        "url": ["urlChanged"],
        "lang": ["watchLang"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-pagination", "gcds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-pagination":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsPagination$1);
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsPagination = GcdsPagination$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsPagination, defineCustomElement };

//# sourceMappingURL=gcds-pagination.js.map