import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$2 } from './gcds-icon2.js';

const I18N = {
  "en": {
    next: "Next",
    previous: "Previous",
    nextPage: "Next page",
    previousPage: "Previous page",
    pageNumber: "Page {#}",
    pageNumberOf: "Page {#} of {total} of {label}"
  },
  "fr": {
    next: "Suivante",
    previous: "Précédente",
    nextPage: "Page suivante",
    previousPage: "Page précédente",
    pageNumber: "Page {#}",
    pageNumberOf: "Page {#} sur {total} des {label}"
  }
};

/**
 * Function to constuct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
function constructHref(url, page, end) {
  let fragment = "";
  let qs = "";
  let count = 0;
  for (const key in url.queryStrings) {
    let queryKey = key;
    let queryValue = url.queryStrings[key];
    if (key.includes("::")) {
      let incrementer = key.split("::")[1];
      let regExp = /\{\{([^)]+)\}\}/;
      let matches = regExp.exec(url.queryStrings[key]);
      // Offeset numbers
      if (incrementer == "offset") {
        let pageNumber = page;
        if (end == "next") {
          ++pageNumber;
        }
        else if (end == "previous") {
          --pageNumber;
        }
        queryValue = matches ?
          url.queryStrings[key].replace(`{{${matches[1]}}}`, `${((pageNumber - 1) * Number(matches[1]))}`)
          :
            ((pageNumber - 1) * url.queryStrings[key]);
        queryKey = queryKey.replace("::offset", "");
      }
      // Match page number
      if (incrementer == "match") {
        let pageNumber = page;
        if (end == "next") {
          ++pageNumber;
        }
        else if (end == "previous") {
          --pageNumber;
        }
        queryValue = matches ?
          url.queryStrings[key].replace(`{{${matches[1]}}}`, `${(pageNumber * Number(matches[1]))}`)
          :
            (pageNumber * url.queryStrings[key]);
        queryKey = queryKey.replace("::match", "");
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
  let href = `${qs}${fragment}`;
  return href;
}
/**
 * Function to constuct classes to help with mobile sizing
 */
function constructClasses(page, current, total) {
  if (total <= 5) {
    return "";
  }
  else if (current == 1 || current == total) {
    if (current - page == 4 || current - page == -4) {
      return "gcds-pagination-list-breakpoint-360";
    }
    else if (current - page == 5 || current - page == -5) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page > 5 || current - page < -5) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
  else if (current == 2 || current == (total - 1)) {
    if (current - page == 3 || current - page == -3) {
      return "gcds-pagination-list-breakpoint-360";
    }
    else if (current - page == 4 || current - page == -4) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page > 4 || current - page < -4) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
  else if ((current > 2 && current < (total - 1)) && (total < 10 && current == 5)) {
    if (current - page == 2 || current - page == -2) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page >= 3 || current - page <= -3) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
  else if (current > 2 && current < (total - 1)) {
    if (current - page == 2 || current - page == -2) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page == 3 || current - page == -3) {
      return "gcds-pagination-list-breakpoint-460";
    }
    else if (current - page > 3 || current - page < -3) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
}

const gcdsPaginationCss = ".sc-gcds-pagination-h{display:block}.sc-gcds-pagination-h ul.sc-gcds-pagination{list-style:none;padding:0}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination{margin:var(--gcds-pagination-listitem-margin)}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination{border-radius:var(--gcds-pagination-border-radius);color:var(--gcds-pagination-default-text);font:var(--gcds-pagination-font)}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:hover{background:var(--gcds-pagination-hover-background)}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:focus{background-color:var(--gcds-pagination-focus-background);color:var(--gcds-pagination-focus-text);outline:var(--gcds-pagination-focus-outline-width) solid var(--gcds-pagination-focus-background);outline-offset:var(--gcds-pagination-border-width)}.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:active:not(:focus),.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination a[aria-current*=page].sc-gcds-pagination:not(:focus){background:var(--gcds-pagination-active-background);border-color:var(--gcds-pagination-active-background);color:var(--gcds-pagination-active-text)}@media screen and (max-width:24em){.sc-gcds-pagination-h ul.sc-gcds-pagination li.sc-gcds-pagination{margin:var(--gcds-pagination-mobile-list-item-margin)}}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.sc-gcds-pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:2.75rem;-ms-flex-pack:center;justify-content:center;min-width:2.75rem}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.gcds-pagination-end-button-mobile.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.gcds-pagination-end-button-mobile.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile.sc-gcds-pagination{height:auto;min-width:auto;padding:var(--gcds-pagination-list-end-button-padding);width:auto}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-mobile-prevnext.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-mobile-prevnext.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination{display:none}@media screen and (max-width:49em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination{border:var(--gcds-pagination-border-width) solid}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:focus,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination:focus{border-color:var(--gcds-pagination-focus-background)}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination>span.gcds-pagination-list-ellipses.sc-gcds-pagination{min-width:auto}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination:has(>a.gcds-pagination-end-button).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination:has(>a.gcds-pagination-end-button).sc-gcds-pagination{margin:0}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.sc-gcds-pagination .gcds-pagination-end-button.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.sc-gcds-pagination .gcds-pagination-end-button.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-mobile-prevnext.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-mobile-prevnext.sc-gcds-pagination{display:block}}@media screen and (max-width:34.75em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-488.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-488.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-488.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-488).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-488.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-488).sc-gcds-pagination{display:list-item}}@media screen and (max-width:32.5em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-460.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-460.sc-gcds-pagination{display:none;margin:0}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-460.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-460).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-460.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-460).sc-gcds-pagination{display:list-item}}@media screen and (max-width:31em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-420.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-420.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-420.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-420).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-420.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-420).sc-gcds-pagination{display:list-item}}@media screen and (max-width:25.75em){.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-360.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-360.sc-gcds-pagination{display:none}.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-breakpoint-360.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-360).sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-breakpoint-360.sc-gcds-pagination+.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination,.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination li.gcds-pagination-list-mobile-ellipses.sc-gcds-pagination:has(+.gcds-pagination-list-breakpoint-360).sc-gcds-pagination{display:list-item}}.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination{display:none;margin:var(--gcds-pagination-mobile-list-prevnext-margin)}@media screen and (max-width:49em){.sc-gcds-pagination-h ul.gcds-pagination-list-mobile-prevnext.sc-gcds-pagination{display:-ms-flexbox;display:flex}}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination{display:inline-block;-ms-flex-pack:justify;justify-content:space-between;margin:var(--gcds-pagination-simple-listitem-margin);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination{display:grid;padding:var(--gcds-pagination-simple-padding)}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination>gcds-icon.sc-gcds-pagination{grid-area:icon}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination>.gcds-pagination-simple-text.sc-gcds-pagination{grid-area:text;margin:var(--gcds-pagination-simple-listitem-text-margin)}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination a.sc-gcds-pagination>span.sc-gcds-pagination{font-weight:var(--gcds-pagination-simple-label-font-weight);grid-area:label;text-decoration:underline}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.gcds-pagination-simple-previous.sc-gcds-pagination a.sc-gcds-pagination{grid-template-areas:\"icon text\" \"icon label\";grid-template-columns:.25fr 1fr}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.gcds-pagination-simple-next.sc-gcds-pagination{float:right}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.gcds-pagination-simple-next.sc-gcds-pagination a.sc-gcds-pagination{grid-template-areas:\"text icon\" \"label icon\";grid-template-columns:1fr .25fr}@media screen and (max-width:25.75em){.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination{display:block}.sc-gcds-pagination-h ul.gcds-pagination-simple.sc-gcds-pagination li.sc-gcds-pagination:last-of-type{float:none}}";

const GcdsPagination$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcdsPageChange = createEvent(this, "gcdsPageChange", 7);
    this.listitems = [];
    this.mobilePrevNext = [];
    this.onPageChange = (e) => {
      if (this.pageChangeHandler) {
        this.pageChangeHandler(e);
      }
      this.gcdsPageChange.emit();
    };
    this.display = "list";
    this.label = undefined;
    this.previousHref = undefined;
    this.previousLabel = undefined;
    this.nextHref = undefined;
    this.nextLabel = undefined;
    this.totalPages = undefined;
    this.currentPage = undefined;
    this.url = undefined;
    this.pageChangeHandler = undefined;
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
    if (typeof newUrl == "string") {
      this.urlObject = JSON.parse(newUrl);
    }
    else if (typeof newUrl == "object") {
      this.urlObject = newUrl;
    }
  }
  watchLang() {
    if (this.display == "list") {
      this.configureListPagination();
    }
  }
  /**
   * Function to constuct <li> and <a> tags for display="list" pagination
   */
  configurePaginationStep(page, end, mobile) {
    let linkAttrs = {
      onClick: (e) => this.onPageChange(e),
      href: this.urlObject ? constructHref(this.urlObject, page, end) : "javascript:void(0)",
      "aria-label": !end ?
        I18N[this.lang].pageNumberOf.replace('{#}', page).replace('{total}', this.totalPages).replace('{label}', this.label)
        :
          end == "next" ?
            `${I18N[this.lang].nextPage}: ${I18N[this.lang].pageNumberOf.replace('{#}', ++page).replace('{total}', this.totalPages).replace('{label}', this.label)}`
            :
              `${I18N[this.lang].previousPage}: ${I18N[this.lang].pageNumberOf.replace('{#}', --page).replace('{total}', this.totalPages).replace('{label}', this.label)}`,
    };
    if (page == this.currentPage && !end) {
      linkAttrs['aria-current'] = "page";
    }
    if (end) {
      return (h("li", null, end === "next" ?
        h("a", Object.assign({}, linkAttrs, { class: !mobile ? "gcds-pagination-end-button" : "gcds-pagination-end-button-mobile" }), I18N[this.lang].next, h("gcds-icon", { "margin-left": "200", name: "arrow-right" }))
        :
          h("a", Object.assign({}, linkAttrs, { class: !mobile ? "gcds-pagination-end-button" : "gcds-pagination-end-button-mobile" }), h("gcds-icon", { "margin-right": "200", name: "arrow-left" }), I18N[this.lang].previous)));
    }
    else {
      return (h("li", { class: page != 1 && page != this.totalPages ? constructClasses(page, this.currentPage, this.totalPages) : "" }, h("a", Object.assign({}, linkAttrs), page)));
    }
  }
  /**
   * Function to render the right steps for display="list" pagination
   */
  configureListPagination() {
    this.listitems = [];
    this.mobilePrevNext = [];
    if (this.currentPage != 1) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "previous"));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, "previous", true));
    }
    // Flags to see if ellipses already rendered
    let previousEllipses = false;
    let nextEllipses = false;
    for (let i = 1; i <= this.totalPages; i++) {
      // Left side mobile ellipses
      if (i == 2 && this.currentPage < 6 && this.currentPage > 3 && this.totalPages > 9) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      else if (i == 2 && this.totalPages < 10 && this.totalPages > 5 && this.currentPage > 3) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      if (i == this.currentPage ||
        (i == 1 || i == this.totalPages) ||
        (i >= (this.currentPage - 2) && i <= (this.currentPage + 2)) ||
        this.totalPages < 10) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      else if ((this.currentPage <= 5 && i <= 7) || (this.currentPage >= this.totalPages - 4 && i >= this.totalPages - 6)) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      else if ((this.currentPage == 5 && i == 2) || (this.currentPage == this.totalPages - 4 && i == this.totalPages - 1)) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      else if (!previousEllipses && i < (this.currentPage - 2)) {
        this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
        previousEllipses = true;
      }
      else if (!nextEllipses && i > (this.currentPage + 2) && i < this.totalPages) {
        this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
        nextEllipses = true;
      }
      // Right side mobile ellipses
      if (i == this.totalPages - 1 && this.currentPage > this.totalPages - 5 && this.currentPage < this.totalPages - 2 && this.totalPages > 9) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      else if (i == this.totalPages - 1 && this.totalPages < 10 && this.totalPages > 5 && this.currentPage < this.totalPages - 2) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
    }
    if (this.currentPage != this.totalPages) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "next"));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, "next", true));
    }
  }
  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
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
    if (this.url && typeof this.url == "string") {
      this.urlObject = JSON.parse(this.url);
    }
    else if (this.url && typeof this.url == "object") {
      this.urlObject = this.url;
    }
    if (this.display == "list") {
      this.configureListPagination();
    }
  }
  componentDidUpdate() {
    if (this.display == "list") {
      this.configureListPagination();
    }
  }
  render() {
    const { display, label, previousHref, previousLabel, nextHref, nextLabel, lang } = this;
    return (h(Host, { role: "navigation", "aria-label": label }, display === "list" ?
      h("div", null, h("ul", { class: "gcds-pagination-list" }, this.listitems), h("ul", { class: "gcds-pagination-list-mobile-prevnext" }, this.mobilePrevNext))
      :
        h("ul", { class: "gcds-pagination-simple" }, previousHref &&
          h("li", { class: "gcds-pagination-simple-previous" }, h("a", { href: previousHref, "aria-label": `${I18N[lang].previousPage}${previousLabel ? `: ${previousLabel}` : ""}`, onClick: (e) => this.onPageChange(e) }, h("gcds-icon", { "margin-right": "200", name: "arrow-left" }), h("div", { class: "gcds-pagination-simple-text" }, I18N[lang].previous), h("span", null, previousLabel))), nextHref &&
          h("li", { class: "gcds-pagination-simple-next" }, h("a", { href: nextHref, "aria-label": `${I18N[lang].nextPage}${nextLabel ? `: ${nextLabel}` : ""}`, onClick: (e) => this.onPageChange(e) }, h("div", { class: "gcds-pagination-simple-text" }, I18N[lang].next), h("span", null, nextLabel), h("gcds-icon", { "margin-left": "200", name: "arrow-right" }))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "currentPage": ["watchCurrentPage"],
    "url": ["urlChanged"],
    "lang": ["watchLang"]
  }; }
  static get style() { return gcdsPaginationCss; }
}, [2, "gcds-pagination", {
    "display": [1],
    "label": [1],
    "previousHref": [1, "previous-href"],
    "previousLabel": [513, "previous-label"],
    "nextHref": [1, "next-href"],
    "nextLabel": [513, "next-label"],
    "totalPages": [2, "total-pages"],
    "currentPage": [514, "current-page"],
    "url": [1],
    "pageChangeHandler": [16],
    "currentStep": [32],
    "lang": [32]
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
