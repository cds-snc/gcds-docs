import { Host, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';
export class GcdsAlert {
  constructor() {
    this.onDismiss = (e) => {
      this.gcdsDismiss.emit();
      if (this.dismissHandler) {
        this.dismissHandler(e);
      }
      else {
        this.isOpen = false;
      }
    };
    this.alertRole = 'info';
    this.container = 'full';
    this.dismissHandler = undefined;
    this.heading = undefined;
    this.hideCloseBtn = false;
    this.hideRoleIcon = false;
    this.isFixed = false;
    this.isOpen = true;
    this.lang = undefined;
  }
  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
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
    const { alertRole, container, heading, hideCloseBtn, hideRoleIcon, isFixed, isOpen, lang } = this;
    return (h(Host, null, isOpen ?
      h("div", { class: `gcds-alert alert--role-${alertRole} ${isFixed ? 'alert--is-fixed' : ''}`, role: "alert", "aria-label": alertRole === 'danger' ? i18n[lang].label.danger
          : alertRole === 'info' ? i18n[lang].label.info
            : alertRole === 'success' ? i18n[lang].label.success
              : alertRole === 'warning' ? i18n[lang].label.warning
                : null }, h("gcds-container", { size: isFixed ? container : 'full', centered: true }, h("div", { class: "alert__container" }, (!hideRoleIcon &&
        h("gcds-icon", { "aria-hidden": "true", class: "alert__icon", size: "h5", name: alertRole === 'danger' ? 'exclamation-circle'
            : alertRole === 'info' ? 'info-circle'
              : alertRole === 'success' ? 'check-circle'
                : alertRole === 'warning' ? 'exclamation-triangle'
                  : null })), h("div", { class: "alert__content" }, h("p", { class: "alert__heading" }, h("strong", null, heading)), h("slot", null)), (!hideCloseBtn &&
        h("button", { class: "alert__close-btn", onClick: (e) => this.onDismiss(e), "aria-label": i18n[lang].closeBtn }, h("gcds-icon", { "aria-hidden": "true", name: "times", size: "text" }))))))
      : null));
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
        "attribute": "alert-role",
        "reflect": false,
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
        "attribute": "container",
        "reflect": false,
        "defaultValue": "'full'"
      },
      "dismissHandler": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Function",
          "resolved": "Function",
          "references": {
            "Function": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Callback when the close button is clicked."
        }
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
        "attribute": "heading",
        "reflect": false
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
        "attribute": "hide-close-btn",
        "reflect": false,
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
        "attribute": "hide-role-icon",
        "reflect": false,
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
        "attribute": "is-fixed",
        "reflect": false,
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