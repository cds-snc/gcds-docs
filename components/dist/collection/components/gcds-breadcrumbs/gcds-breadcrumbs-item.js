import { Host, h } from "@stencil/core";
export class GcdsBreadcrumbsItem {
    render() {
        const { href } = this;
        return (h(Host, { key: '8b605a4957ab5346d22dced80f73e1a5f4ac555b', role: "listitem", class: "gcds-breadcrumbs-item" }, h("gcds-link", { key: 'd3c3af1d26322cb3ef0fbf6f8778bc0f4c3bf9c4', size: "regular", href: href }, h("slot", { key: 'f20dcd2b71127031fc0334fe3673821e08aefb56' }))));
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-breadcrumbs-item.js.map
