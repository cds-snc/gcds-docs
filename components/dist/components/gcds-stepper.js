import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, l as logError } from './utils.js';
import { d as defineCustomElement$3 } from './gcds-heading2.js';
import { d as defineCustomElement$2 } from './gcds-sr-only2.js';

const I18N = {
  en: {
    step: 'Step',
    of: 'of',
  },
  fr: {
    step: 'Étape',
    of: 'sur',
  },
};

const gcdsStepperCss = "@layer reset, default;@layer reset{:host{display:block}}@layer default{:host .gcds-stepper .gcds-stepper__steps{display:block;font:var(--gcds-stepper-font-desktop);margin:var(--gcds-stepper-margin-desktop)}@media only screen and (width < 48em){:host .gcds-stepper .gcds-stepper__steps{font:var(--gcds-stepper-font-mobile);margin:var(--gcds-stepper-margin-mobile)}}}";
const GcdsStepperStyle0 = gcdsStepperCss;

const GcdsStepper$1 = /*@__PURE__*/ proxyCustomElement(class GcdsStepper extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.currentStep = undefined;
        this.totalSteps = undefined;
        this.tag = 'h2';
        this.errors = [];
        this.lang = undefined;
    }
    validateCurrentStep() {
        if (this.currentStep <= 0 ||
            isNaN(this.currentStep) ||
            this.currentStep > this.totalSteps) {
            this.errors.push('currentStep');
        }
        else if (this.errors.includes('currentStep')) {
            this.errors.splice(this.errors.indexOf('currentStep'), 1);
        }
    }
    validateTotalSteps() {
        if (this.totalSteps <= 0 ||
            isNaN(this.totalSteps) ||
            this.totalSteps < this.currentStep) {
            this.errors.push('totalSteps');
        }
        else if (this.errors.includes('totalSteps')) {
            this.errors.splice(this.errors.indexOf('totalSteps'), 1);
        }
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
    validateChildren() {
        if (this.el.innerHTML.trim() == '') {
            this.errors.push('children');
        }
        else if (this.errors.includes('children')) {
            this.errors.splice(this.errors.indexOf('children'), 1);
        }
    }
    validateRequiredProps() {
        this.validateCurrentStep();
        this.validateTotalSteps();
        this.validateChildren();
        if (this.errors.includes('totalSteps') ||
            this.errors.includes('currentStep') ||
            this.errors.includes('children')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-stepper', this.errors);
        }
    }
    render() {
        const { currentStep, lang, totalSteps, tag } = this;
        return (h(Host, { key: '02cdb3239e32828d727d13a891c52d5dfd10020e' }, this.validateRequiredProps() && (h("gcds-heading", { key: 'c3725caf65235a7f572394b2ef79276462e0e793', tag: tag, class: "gcds-stepper", "margin-top": "0", "margin-bottom": "300" }, h("span", { key: '81cba93ebbfd826286a0cd5eef917312e7c49a03', class: "gcds-stepper__steps" }, `${I18N[lang].step} ${currentStep} ${I18N[lang].of} ${totalSteps}`, h("gcds-sr-only", { key: 'b962eb08c6f6407d1e935d0081b998d175960b5c' }, " : ")), h("slot", { key: '0997a5e29a9b1c052fa8ca5c25e41bcd17bcec2e' })))));
    }
    get el() { return this; }
    static get watchers() { return {
        "currentStep": ["validateCurrentStep"],
        "totalSteps": ["validateTotalSteps"]
    }; }
    static get style() { return GcdsStepperStyle0; }
}, [1, "gcds-stepper", {
        "currentStep": [1026, "current-step"],
        "totalSteps": [1026, "total-steps"],
        "tag": [1],
        "errors": [32],
        "lang": [32]
    }, undefined, {
        "currentStep": ["validateCurrentStep"],
        "totalSteps": ["validateTotalSteps"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-stepper", "gcds-heading", "gcds-sr-only"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-stepper":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsStepper$1);
            }
            break;
        case "gcds-heading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-sr-only":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsStepper = GcdsStepper$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsStepper, defineCustomElement };

//# sourceMappingURL=gcds-stepper.js.map