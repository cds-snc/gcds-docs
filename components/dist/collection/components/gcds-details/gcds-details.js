import { Host, h, } from "@stencil/core";
import { emitEvent } from "../../utils/utils";
export class GcdsDetails {
    constructor() {
        this.detailsTitle = undefined;
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
        return (h(Host, { key: '6a7b027fb3c8f1c64e1e55c6be71acff23b8641c' }, h("div", { key: '3a1b6576b108a69f7790f0698ccf0180743bd882', class: "gcds-details" }, h("button", { key: 'ac9a5185db8182a144ebbd9275a9da7d04076608', "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggle();
                }
            }, class: "details__summary", id: "details__summary" }, detailsTitle), h("div", { key: '21d41431237eaf81e5f41de477961ba24aeb05ba', id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary" }, h("slot", { key: '7f1525c909982ea86e1ece24ca34559f3f7731c6' })))));
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
