import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
export class GcdsNavLink {
  constructor() {
    this.onClick = e => {
      this.gcdsClick.emit(e);
    };
    this.onFocus = e => {
      this.gcdsFocus.emit(e);
    };
    this.onBlur = e => {
      this.gcdsBlur.emit(e);
    };
    this.href = undefined;
    this.current = undefined;
    this.lang = undefined;
    this.navStyle = undefined;
  }
  /**
   * Focus the link element
   */
  async focusLink() {
    this.linkElement.focus();
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
    if (this.el.closest('gcds-top-nav')) {
      if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
        this.navStyle =
          this.el.slot == 'home' ? 'topnav gcds-nav-link--home' : 'topnav';
      }
      else {
        this.navStyle = 'dropdown';
      }
    }
    else {
      this.navStyle = 'sidenav';
    }
  }
  render() {
    const { current, href } = this;
    const linkAttrs = {};
    if (current) {
      linkAttrs['aria-current'] = 'page';
    }
    return (h(Host, { role: "presentation", class: `gcds-nav-link--${this.navStyle}` }, h("a", Object.assign({ class: "gcds-nav-link", href: href }, linkAttrs, { role: "menuitem", onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onClick: e => this.onClick(e), ref: element => (this.linkElement = element) }), h("slot", null))));
  }
  static get is() { return "gcds-nav-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-nav-link.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-nav-link.css"]
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
          "text": "Link href"
        },
        "attribute": "href",
        "reflect": true
      },
      "current": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Current page flag"
        },
        "attribute": "current",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "lang": {},
      "navStyle": {}
    };
  }
  static get events() {
    return [{
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
      }, {
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
      }];
  }
  static get methods() {
    return {
      "focusLink": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Focus the link element",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-nav-link.js.map
