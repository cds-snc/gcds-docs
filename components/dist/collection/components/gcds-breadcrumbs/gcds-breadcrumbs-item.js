import { Host, h } from "@stencil/core";
export class GcdsBreadcrumbsItem {
    constructor() {
        this.href = undefined;
    }
    render() {
        const { href } = this;
        return (h(Host, { role: "listitem", class: "gcds-breadcrumbs-item" }, h("a", { href: href }, h("slot", null))));
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
                "attribute": "href",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-breadcrumbs-item.js.map
