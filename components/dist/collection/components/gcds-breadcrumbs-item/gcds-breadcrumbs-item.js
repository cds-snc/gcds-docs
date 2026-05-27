import { Host, h, } from "@stencil/core";
/**
 * Breadcrumbs item represents a single link in the breadcrumbs navigation.
 *
 * @slot default - Slot for the breadcrumb item link label.
 */
export class GcdsBreadcrumbsItem {
    render() {
        const { href } = this;
        return (h(Host, { key: '682b212a6c22f60f5949b2664f5ace5bc172c3cf', role: "listitem", class: "gcds-breadcrumbs-item" }, h("gcds-link", { key: '00a6c00e78201987c9df9c1072547dc6465f29b1', size: "regular", href: href }, h("slot", { key: '6ea92ac89f08c8c9f64e727e92d4d68a60f9a2ba' }))));
    }
    static get is() { return "gcds-breadcrumbs-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-breadcrumbs-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-breadcrumbs-item.css"]
        };
    }
    static get properties() {
        return {
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the href of the breadcrumb item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "href"
            }
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
                    "text": "Emitted when the link has been clicked. Contains the href in the event detail."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
