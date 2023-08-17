import { Host, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';
export class GcdsLangToggle {
  constructor() {
    this.href = undefined;
    this.lang = undefined;
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
  }
  render() {
    const { lang, href } = this;
    return (h(Host, null, h("div", null, h("h2", null, i18n[lang].heading), h("a", { href: href, lang: i18n[lang].abbreviation }, h("span", null, i18n[lang].language), h("abbr", { title: i18n[lang].language }, i18n[lang].abbreviation)))));
  }
  static get is() { return "gcds-lang-toggle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-lang-toggle.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-lang-toggle.css"]
    };
  }
  static get properties() {
    return {
      "href": {
        "type": "string",
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
          "text": "The href attribute specifies the URL of the opposite language page"
        },
        "attribute": "href",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "lang": {}
    };
  }
  static get elementRef() { return "el"; }
}
