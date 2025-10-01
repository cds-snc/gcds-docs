import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * A stepper is a progress tracker for a multi-step process.
 *
 * @slot default - Slot for the heading content.
 */
export class GcdsStepper {
    constructor() {
        /**
         * Defines the heading tag to render
         */
        this.tag = 'h2';
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
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
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-stepper', this.errors);
        }
    }
    render() {
        const { currentStep, lang, totalSteps, tag } = this;
        return (h(Host, { key: '668131869ea8b9e4542e097e28efbfae9b5a6bae' }, this.validateRequiredProps() && (h("gcds-heading", { key: 'e50a066d662ef3e606e21da157731de6e6b6b78a', tag: tag, class: "gcds-stepper", "margin-top": "0", "margin-bottom": "225" }, h("span", { key: 'c573ba75a978b689698fb8eab50caa08853d12e3', class: "gcds-stepper__steps" }, `${i18n[lang].step} ${currentStep} ${i18n[lang].of} ${totalSteps}`, h("gcds-sr-only", { key: 'fea60de171d7e2412957e922944421f9cbb6d379' }, " : ")), h("slot", { key: '679d080d48b257b840ee9d78e693f06df548faee' })))));
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
                "attribute": "current-step",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "totalSteps": {
                "type": "number",
                "attribute": "total-steps",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tag": {
                "type": "string",
                "attribute": "tag",
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
                "getter": false,
                "setter": false,
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
