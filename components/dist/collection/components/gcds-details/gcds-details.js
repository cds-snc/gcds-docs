import { Host, h } from "@stencil/core";
export class GcdsDetails {
    constructor() {
        this.detailsTitle = undefined;
        this.open = false;
    }
    render() {
        const { detailsTitle, open } = this;
        return (h(Host, null, h("button", { "aria-expanded": open.toString(), "aria-controls": "details__panel", onClick: () => (this.open = !open), class: "details__summary", id: "details__summary" }, detailsTitle), h("div", { id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary" }, h("slot", null))));
    }
    static get is() { return "gcds-details"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-details.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-details.css"]
        };
    }
    static get properties() {
        return {
            "detailsTitle": {
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
                    "text": "The details title summarizes the panel content."
                },
                "attribute": "details-title",
                "reflect": false
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines if the details panel is open by default or not."
                },
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-details.js.map
