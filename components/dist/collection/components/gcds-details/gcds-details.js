import { Host, h, } from "@stencil/core";
import { emitEvent } from "../../utils/utils";
export class GcdsDetails {
    constructor() {
        /**
         * Defines if the details panel is open by default or not.
         */
        this.open = false;
    }
    /**
     * Methods
     */
    /*
     * Toggle details open or closed
     */
    async toggle() {
        this.open = !this.open;
    }
    render() {
        const { detailsTitle, open } = this;
        return (h(Host, { key: '6d6050eb05cee9ffe72e93881dd7d2465846551a' }, h("div", { key: '9c1a67b54b602f6e4bc3c4472631b3bbe35217de', class: "gcds-details" }, h("button", { key: '7626fa188fa20abd22405efb652ec5a04b1db042', "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggle();
                }
            }, class: "details__summary", id: "details__summary" }, detailsTitle), h("div", { key: '483e4e1f8cca9cd32c68acfdc9e79b11332faf6c', id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary" }, h("slot", { key: '6a91db99b4d14fc480199620a46793d8579a394c' })))));
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
                "attribute": "details-title",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Emitted when the details has focus."
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
                    "text": "Emitted when the details loses focus."
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
                    "text": "Emitted when the details has been clicked."
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
            "toggle": {
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
                    "text": "Methods",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-details.js.map
