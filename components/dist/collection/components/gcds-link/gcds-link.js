import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import { inheritAttributes } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsLink {
  constructor() {
    this.size = 'inherit';
    this.display = 'inline';
    this.href = undefined;
    this.rel = undefined;
    this.target = '_self';
    this.external = false;
    this.download = undefined;
    this.type = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
  }
  validateSize(newValue) {
    const values = ['regular', 'small', 'inherit'];
    if (!values.includes(newValue)) {
      this.size = 'inherit';
    }
  }
  validateDisplay(newValue) {
    const values = ['block', 'inline'];
    if (!values.includes(newValue)) {
      this.display = 'inline';
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
  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateSize(this.size);
    this.validateDisplay(this.display);
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'referrerpolicy',
    ]);
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
  }
  render() {
    const { size, lang, display, href, rel, target, external, download, type, inheritedAttributes, } = this;
    const attrs = {
      href,
      rel,
      target,
      download,
      type,
    };
    const isExternal = target === '_blank' || external;
    return (h(Host, null, h("a", Object.assign({ role: "link", tabIndex: 0 }, attrs, { class: `link--${size} ${display != 'inline' ? `d-${display}` : ''}`, ref: element => (this.shadowElement = element), target: isExternal ? '_blank' : target, rel: isExternal ? 'noopener noreferrer' : rel }, inheritedAttributes, { part: "link", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: () => this.gcdsClick.emit() }), h("slot", null), target === '_blank' || external ? (h("gcds-icon", { name: "external-link", label: i18n[lang].external, "margin-left": "100" })) : download !== undefined ? (h("gcds-icon", { name: "download", label: i18n[lang].download, "margin-left": "100" })) : href.toLowerCase().startsWith('mailto:') ? (h("gcds-icon", { "icon-style": "regular", name: "envelope", label: i18n[lang].email, "margin-left": "100" })) : (href.toLowerCase().startsWith('tel:') && (h("gcds-icon", { name: "phone", label: i18n[lang].phone, "margin-left": "100" }))))));
  }
  static get is() { return "gcds-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-link.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-link.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'regular' | 'small' | 'inherit'",
          "resolved": "\"inherit\" | \"regular\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the link size"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'inherit'"
      },
      "display": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'block' | 'inline'",
          "resolved": "\"block\" | \"inline\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Sets the display behavior of the link"
        },
        "attribute": "display",
        "reflect": false,
        "defaultValue": "'inline'"
      },
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
          "text": "The href attribute specifies the URL of the page the link goes to"
        },
        "attribute": "href",
        "reflect": false
      },
      "rel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The rel attribute specifies the relationship between the current document and the linked document"
        },
        "attribute": "rel",
        "reflect": false
      },
      "target": {
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
          "text": "The target attribute specifies where to open the linked document"
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      },
      "external": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Whether the link is external or not"
        },
        "attribute": "external",
        "reflect": false,
        "defaultValue": "false"
      },
      "download": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink"
        },
        "attribute": "download",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The type specifies the media type of the linked document"
        },
        "attribute": "type",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "inheritedAttributes": {},
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
          "text": "Emitted when the link has been clicked."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "size",
        "methodName": "validateSize"
      }, {
        "propName": "display",
        "methodName": "validateDisplay"
      }];
  }
}
//# sourceMappingURL=gcds-link.js.map
