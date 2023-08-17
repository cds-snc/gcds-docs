import { Host, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';
export class GcdsStepper {
  constructor() {
    this.currentStep = undefined;
    this.totalSteps = undefined;
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
    const { currentStep, lang, totalSteps } = this;
    return (h(Host, null, h("h6", { class: "gcds-stepper" }, `${i18n[lang].step} ${currentStep} ${i18n[lang].of} ${totalSteps}`)));
  }
  static get is() { return "gcds-stepper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-stepper.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-stepper.css"]
    };
  }
  static get properties() {
    return {
      "currentStep": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the current step."
        },
        "attribute": "current-step",
        "reflect": false
      },
      "totalSteps": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the total amount of steps."
        },
        "attribute": "total-steps",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "lang": {}
    };
  }
  static get elementRef() { return "el"; }
}
