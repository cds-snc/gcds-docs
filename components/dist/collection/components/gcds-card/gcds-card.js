import { Host, h, Fragment } from "@stencil/core";
export class GcdsCard {
  constructor() {
    this.type = 'link';
    this.cardTitle = undefined;
    this.titleElement = 'a';
    this.href = undefined;
    this.description = undefined;
    this.tag = undefined;
    this.imgSrc = undefined;
    this.imgAlt = undefined;
  }
  get hasCardFooter() {
    return !!this.el.querySelector('[slot="footer"]');
  }
  render() {
    const { type, cardTitle, titleElement, href, description, tag, imgSrc, imgAlt, hasCardFooter, } = this;
    const Element = titleElement;
    return (h(Host, null, h("div", { class: `gcds-card gcds-card--${type}` }, imgSrc && (h("img", { src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), tag && h("span", { class: "gcds-card__tag" }, tag), Element != 'a' ? (h(Element, { class: "gcds-card__title" }, h("a", { href: href }, cardTitle))) : (h("a", { href: href, class: "gcds-card__title" }, cardTitle)), description && h("p", { class: "gcds-card__description" }, description), hasCardFooter && (h(Fragment, null, h("div", { class: "gcds-card__spacer" }), h("slot", { name: "footer" }))))));
  }
  static get is() { return "gcds-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-card.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-card.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'link' | 'action'",
          "resolved": "\"action\" | \"link\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type attribute specifies how the card renders as a link"
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'link'"
      },
      "cardTitle": {
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
          "text": "The card title attribute specifies the title that appears on the card"
        },
        "attribute": "card-title",
        "reflect": true
      },
      "titleElement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'h3' | 'h4' | 'h5' | 'h6' | 'a'",
          "resolved": "\"a\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The title element attribute specifies HTML element the title renders as"
        },
        "attribute": "title-element",
        "reflect": false,
        "defaultValue": "'a'"
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
        "reflect": true
      },
      "description": {
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
          "text": "The description attribute specifies the body of text that appears on the card"
        },
        "attribute": "description",
        "reflect": true
      },
      "tag": {
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
          "text": "The tag attribute specifies the tag text that appears above the card title"
        },
        "attribute": "tag",
        "reflect": true
      },
      "imgSrc": {
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
          "text": "The img src attribute specifies the path to the image"
        },
        "attribute": "img-src",
        "reflect": true
      },
      "imgAlt": {
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
          "text": "The img alt attribute specifies the alt text for the image provided, if none, image will be decorative"
        },
        "attribute": "img-alt",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-card.js.map
