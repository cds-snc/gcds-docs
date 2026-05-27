import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, emitEvent } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * Alert displays an alert message with an optional heading, icon, and close button.
 *
 * @slot default - Slot for the main content of the alert.
 */
export class GcdsAlert {
    constructor() {
        /**
         * Props
         */
        /**
         * Defines alert role.
         */
        this.alertRole = 'info';
        /**
         * Defines the max width of the alert content.
         */
        this.container = 'full';
        /**
         * Defines if the alert's close button is displayed or not.
         */
        this.hideCloseBtn = false;
        /**
         * Defines if the alert's role icon is displayed or not.
         */
        this.hideRoleIcon = false;
        /**
         * Defines if the alert's position is fixed.
         */
        this.isFixed = false;
        /**
         * States
         */
        /**
         * Specifies if the alert is open or not.
         */
        this.isOpen = true;
    }
    /*
     * Observe lang attribute change
     */
    updateLang() {
        const observer = new MutationObserver(mutations => {
            if (mutations[0].oldValue != this.el.lang) {
                this.lang = this.el.lang;
            }
        });
        observer.observe(this.el, observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { alertRole, container, heading, hideCloseBtn, hideRoleIcon, isFixed, isOpen, lang, } = this;
        return (h(Host, { key: '196150e847d3cea200cdb167c2cd2fee5cb2cea5' }, isOpen ? (h("div", { class: `gcds-alert alert--role-${alertRole} ${isFixed ? 'alert--is-fixed' : ''}`, role: "alert", "aria-label": alertRole === 'danger'
                ? i18n[lang].label.danger
                : alertRole === 'info'
                    ? i18n[lang].label.info
                    : alertRole === 'success'
                        ? i18n[lang].label.success
                        : alertRole === 'warning'
                            ? i18n[lang].label.warning
                            : null }, h("gcds-container", { size: isFixed ? container : 'full', alignment: "center" }, h("div", { class: "alert__container" }, !hideRoleIcon && (h("gcds-icon", { "aria-hidden": "true", class: "alert__icon", size: "h5", "margin-right": "175", name: (alertRole === 'danger'
                ? 'exclamation-circle'
                : alertRole === 'info'
                    ? 'info-circle'
                    : alertRole === 'success'
                        ? 'checkmark-circle'
                        : alertRole === 'warning'
                            ? 'warning-triangle'
                            : undefined) })), h("div", { class: "alert__content" }, h("p", { class: "alert__heading" }, h("strong", null, heading)), h("slot", null)), !hideCloseBtn && (h("button", { class: "alert__close-btn", onClick: e => {
                const event = emitEvent(e, this.gcdsDismiss);
                if (event) {
                    this.isOpen = false;
                }
            }, "aria-label": i18n[lang].closeBtn }, h("gcds-icon", { "aria-hidden": "true", name: "close", size: "text" }))))))) : null));
    }
    static get is() { return "gcds-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-alert.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-alert.css"]
        };
    }
    static get properties() {
        return {
            "alertRole": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'danger' | 'info' | 'success' | 'warning'",
                    "resolved": "\"danger\" | \"info\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines alert role."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "alert-role",
                "defaultValue": "'info'"
            },
            "container": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'",
                    "resolved": "\"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the max width of the alert content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "container",
                "defaultValue": "'full'"
            },
            "heading": {
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
                    "text": "Defines the alert heading."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading"
            },
            "hideCloseBtn": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines if the alert's close button is displayed or not."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide-close-btn",
                "defaultValue": "false"
            },
            "hideRoleIcon": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines if the alert's role icon is displayed or not."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide-role-icon",
                "defaultValue": "false"
            },
            "isFixed": {
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
                    "text": "Defines if the alert's position is fixed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-fixed",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "lang": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsDismiss",
                "name": "gcdsDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Events"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
