import { Host, h, } from "@stencil/core";
/**
 * Breadcrumbs item represents a single link in the breadcrumbs navigation.
 *
 * @slot default - Slot for the breadcrumb item link label.
 */
export class GcdsBreadcrumbsItem {
    render() {
        const { href } = this;
        return (h(Host, { key: '95b1e4dcb1f26c4bbecaed7084c46f7440a939c9', role: "listitem", class: "gcds-breadcrumbs-item" }, h("gcds-link", { key: 'c60332192cfe17f487017acbd89a49adbc288e19', size: "regular", href: href }, h("slot", { key: '34993248082e9a129d2753695db93a7b5ac771f1' }))));
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
                "attribute": "href",
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
                "reflect": false
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
//# sourceMappingURL=gcds-breadcrumbs-item.js.map
