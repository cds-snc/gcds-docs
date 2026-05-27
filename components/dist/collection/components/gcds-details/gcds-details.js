import { Host, h, } from "@stencil/core";
import { emitEvent } from "../../utils/utils";
/**
 * Details is an interactive switch for a person to expand or collapse content.
 *
 * @slot default - Slot for the main content of the details panel.
 */
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
        return (h(Host, { key: 'a8855995ccdee282fc82fbc3faf8bd3640a8d5f9' }, h("div", { key: 'f84122872e89f4da0b2fce92ef38fb3628ad4c0f', class: "gcds-details" }, h("button", { key: '3caac4040fbbe5c65d702295dc47e3d2dcab26f4', "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggle();
                }
            }, class: "details__summary", id: "details__summary" }, detailsTitle), h("details", { key: '50968918b5228addc1dd75a22d84899cf505c5df', open: open, id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary", onToggle: ev => this.handleToggle(ev), ref: element => (this.detailsElement = element) }, h("summary", { key: '913ae5d54310b2661f0f98f4a3c785fee46d8065' }, detailsTitle), h("slot", { key: '03045642ba8da8b1ccb58221cb91198aa10287dc' })))));
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "details-title"
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open",
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
