import { Host, h, } from "@stencil/core";
import { emitEvent } from "../../utils/utils";
export class GcdsDetails {
    constructor() {
        /**
         * Defines if the details panel is open by default or not.
         */
        this.open = false;
        /*
         * Handle the details being toggled by other means (e.g., ctrl+f)
         */
        this.handleToggle = (ev) => {
            this.open = !this.open;
            this.open = ev.target.open;
        };
    }
    /**
     * Listen to beforeprint and afterprint events to handle details state
     * when printing. This ensures that the details are open when printing,
     * and closed after printing if they were closed before.
     */
    handleBeforePrint() {
        if (!this.open) {
            this.toggle();
            this.detailsElement.setAttribute('data-was-closed', 'true');
        }
    }
    handleAfterPrint() {
        var _a;
        if (((_a = this.detailsElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-was-closed')) === 'true') {
            this.toggle();
            this.detailsElement.removeAttribute('data-was-closed');
        }
    }
    /**
     * Methods
     */
    /*
     * Toggle details open or closed
     */
    async toggle() {
        this.open = !this.open;
        this.detailsElement.open = this.open;
    }
    render() {
        const { detailsTitle, open } = this;
        return (h(Host, { key: '97560262fb89f07b8636dacd7fd2f7a062871870' }, h("div", { key: 'c6a66d4df786e0670510a0104b7724e13f30ec61', class: "gcds-details" }, h("button", { key: '835be4466b36b70bb222799c5a9083124702be71', "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggle();
                }
            }, class: "details__summary", id: "details__summary" }, detailsTitle), h("details", { key: 'ac3464270d4cd77d74cd9f816c8245df7242e8ca', open: open, id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary", onToggle: ev => this.handleToggle(ev), ref: element => (this.detailsElement = element) }, h("summary", { key: 'e083e978875266315f6e495b9c49d0e0a2568bda' }, detailsTitle), h("slot", { key: '0d3bb51e8bf1dcf62026235acc4d69add5998ee0' })))));
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
    static get listeners() {
        return [{
                "name": "beforeprint",
                "method": "handleBeforePrint",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "afterprint",
                "method": "handleAfterPrint",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=gcds-details.js.map
