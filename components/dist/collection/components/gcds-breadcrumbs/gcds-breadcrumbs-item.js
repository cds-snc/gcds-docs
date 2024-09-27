import { Host, h } from "@stencil/core";
export class GcdsBreadcrumbsItem {
    constructor() {
        this.href = undefined;
    }
    render() {
        const { href } = this;
        return (h(Host, { key: '3da5881b7eba6bede5ffaf1e9640b99152332478', role: "listitem", class: "gcds-breadcrumbs-item" }, h("gcds-link", { key: '91361ed032a6ddfe13cef12783df531c1178c2b4', size: "regular", href: href }, h("slot", { key: '5053ab0d54759ef4080731fe78976a3d648be17c' }))));
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
