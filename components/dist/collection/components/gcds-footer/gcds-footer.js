import { Host, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import I18N from './i18n/i18n';
export class GcdsFooter {
  constructor() {
    this.display = undefined;
    this.wordmarkVariant = undefined;
    this.contextualHeading = undefined;
    this.contextualLinks = undefined;
    this.subLinks = undefined;
    this.lang = undefined;
  }
  validateDisplay(newValue) {
    if (newValue != 'compact' && newValue != 'full') {
      this.display = 'compact';
    }
  }
  /**
   * Convert contextual links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  contextualLinksChanged(newContextualLinks) {
    if (typeof newContextualLinks == "string") {
      this.contextualLinksObject = JSON.parse(newContextualLinks);
    }
    else if (typeof newContextualLinks == "object") {
      this.contextualLinksObject = newContextualLinks;
    }
  }
  /**
   * Convert sub links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  subLinksChanged(newSubLinks) {
    if (typeof newSubLinks == "string") {
      this.subLinksObject = JSON.parse(newSubLinks);
    }
    else if (typeof newSubLinks == "object") {
      this.subLinksObject = newSubLinks;
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
    this.validateDisplay;
    if (this.contextualLinks && typeof this.contextualLinks == "string") {
      this.contextualLinksObject = JSON.parse(this.contextualLinks);
    }
    else if (this.contextualLinks && typeof this.contextualLinks == "object") {
      this.contextualLinksObject = this.contextualLinks;
    }
    if (this.subLinks && typeof this.subLinks == "string") {
      this.subLinksObject = JSON.parse(this.subLinks);
    }
    else if (this.subLinks && typeof this.subLinks == "object") {
      this.subLinksObject = this.subLinks;
    }
  }
  get renderSignature() {
    let signVariant = this.wordmarkVariant ? this.wordmarkVariant : "colour";
    if (!!this.el.querySelector('[slot="signature"]')) {
      return h("slot", { name: "wordmark" });
    }
    else {
      return (h("div", { class: "sub__wordmark" }, h("gcds-signature", { type: "wordmark", variant: signVariant, lang: this.lang })));
    }
  }
  render() {
    const { lang, display, contextualHeading, contextualLinksObject, subLinks, subLinksObject, renderSignature } = this;
    const govNav = I18N[lang].gov.menu;
    const themeNav = I18N[lang].themes.menu;
    const siteNav = I18N[lang].site.menu;
    let contextualLinkCount = 0;
    let subLinkCount = 0;
    return (h(Host, { role: "contentinfo" }, h("h2", { class: "gcds-footer__header" }, I18N[lang].about), (contextualLinksObject && contextualHeading) &&
      h("div", { class: "gcds-footer__contextual" }, h("div", { class: "contextual__container" }, h("nav", { "aria-label": contextualHeading }, h("h3", { class: "contextual__header" }, contextualHeading), h("ul", { class: "contextual__list" }, Object.keys(contextualLinksObject).map((key) => {
        if (contextualLinkCount < 3) {
          contextualLinkCount++;
          return (h("li", null, h("a", { href: contextualLinksObject[key] }, key)));
        }
      }))))), display === "full" ?
      (h("div", { class: "gcds-footer__main" }, h("div", { class: "main__container" }, h("nav", { class: "main__govnav", "aria-label": I18N[lang].gov.heading }, h("h3", null, I18N[lang].gov.heading), h("ul", { class: "govnav__list" }, Object.keys(govNav).map((value) => h("li", null, h("a", { href: govNav[value].link }, govNav[value].text))))), h("nav", { class: "main__themenav", "aria-label": I18N[lang].themes.heading }, h("h4", { class: "themenav__header" }, I18N[lang].themes.heading), h("ul", { class: "themenav__list" }, Object.keys(themeNav).map((value) => h("li", null, h("a", { href: themeNav[value].link }, themeNav[value].text))))))))
      : null, h("div", { class: "gcds-footer__sub" }, h("div", { class: "sub__container" }, h("nav", { "aria-label": I18N[lang].site.heading }, h("h3", { class: "sub__header" }, I18N[lang].site.heading), h("ul", null, subLinks ?
      Object.keys(subLinksObject).map((key) => {
        if (subLinkCount < 5) {
          subLinkCount++;
          return (h("li", null, h("a", { href: subLinksObject[key] }, key)));
        }
      })
      :
        Object.keys(siteNav).map((value) => {
          return (h("li", null, h("a", { href: siteNav[value].link }, siteNav[value].text)));
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
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Display mode of the footer"
        },
        "attribute": "display",
        "reflect": true
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
        "propName": "display",
        "methodName": "validateDisplay"
      }, {
        "propName": "contextualLinks",
        "methodName": "contextualLinksChanged"
      }, {
        "propName": "subLinks",
        "methodName": "subLinksChanged"
      }];
  }
}
