import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
export class GcdsStepper {
    constructor() {
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
        return (h(Host, { key: '237512cb8b5d8a3e516d8f832fc01ff6bb592d29' }, this.validateRequiredProps() && (h("gcds-heading", { key: '4280179cd8b0edc2d0abcf32d286d467b1d80c56', tag: tag, class: "gcds-stepper", "margin-top": "0", "margin-bottom": "225" }, h("span", { key: 'dbf96a764e6ebd0131d5b3bd61197dddd359c493', class: "gcds-stepper__steps" }, `${i18n[lang].step} ${currentStep} ${i18n[lang].of} ${totalSteps}`, h("gcds-sr-only", { key: 'e28f042579d393ffb0fd3c2ad70761d3112e9ab0' }, " : ")), h("slot", { key: 'e9557a09c6120174b16a184956e96b95efc695f1' })))));
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
                "mutable": true,
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
                "mutable": true,
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
            },
            "tag": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'h1' | 'h2' | 'h3'",
                    "resolved": "\"h1\" | \"h2\" | \"h3\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Defines the heading tag to render"
                },
                "attribute": "tag",
                "reflect": false,
                "defaultValue": "'h2'"
            }
        };
    }
    static get states() {
        return {
            "errors": {},
            "lang": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "currentStep",
                "methodName": "validateCurrentStep"
            }, {
                "propName": "totalSteps",
                "methodName": "validateTotalSteps"
            }];
    }
}
//# sourceMappingURL=gcds-stepper.js.map
