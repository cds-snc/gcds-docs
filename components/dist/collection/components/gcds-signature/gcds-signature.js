import { Host, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import SignatureEn from './assets/sig-blk-en.svg';
import SignatureFr from './assets/sig-blk-fr.svg';
import WordmarkEn from './assets/wmms-spl-en.svg';
import WordmarkFr from './assets/wmms-spl-fr.svg';
export class GcdsSignature {
  constructor() {
    this.type = undefined;
    this.variant = undefined;
    this.hasLink = undefined;
    this.lang = undefined;
  }
  validateType(newValue) {
    if (newValue != 'signature' && newValue != 'wordmark') {
      this.type = 'signature';
    }
  }
  validateVariant(newValue) {
    if (newValue != 'colour' && newValue != 'white') {
      this.variant = 'colour';
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
    this.validateType;
    this.validateVariant;
    this.updateLang();
  }
  get selectSVG() {
    switch (this.type) {
      case 'wordmark':
        if (this.lang == 'en') {
          return WordmarkEn;
        }
        else {
          return WordmarkFr;
        }
      case 'signature':
      default:
        if (this.lang == 'en') {
          return SignatureEn;
        }
        else {
          return SignatureFr;
        }
    }
  }
  render() {
    const { type, hasLink, lang, selectSVG } = this;
    const linkText = lang == "en" ? "https://canada.ca/en.html" : "https://canada.ca/fr.html";
    return (h(Host, null, hasLink && type === 'signature' ? (h("a", { href: linkText, innerHTML: selectSVG })) : (h("div", { class: "gcds-signature", innerHTML: selectSVG }))));
  }
  static get is() { return "gcds-signature"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-signature.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-signature.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'signature' | 'wordmark'",
          "resolved": "\"signature\" | \"wordmark\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of graphic to render"
        },
        "attribute": "type",
        "reflect": true
      },
      "variant": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'colour' | 'white'",
          "resolved": "\"colour\" | \"white\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The colour variant to render"
        },
        "attribute": "variant",
        "reflect": true
      },
      "hasLink": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Has link to canada.ca. Only applies to signature"
        },
        "attribute": "has-link",
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
        "propName": "type",
        "methodName": "validateType"
      }, {
        "propName": "variant",
        "methodName": "validateVariant"
      }];
  }
}
