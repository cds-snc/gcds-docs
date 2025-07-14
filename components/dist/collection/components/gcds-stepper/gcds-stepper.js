import { Host, h } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
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
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-stepper', this.errors);
        }
    }
    render() {
        const { currentStep, lang, totalSteps, tag } = this;
        return (h(Host, { key: '6e9ef763863d74aabd0e06b6126638c680c9de68' }, this.validateRequiredProps() && (h("gcds-heading", { key: 'd6d6b6e34b726d0c878b42a5fe9acfff1ef15a09', tag: tag, class: "gcds-stepper", "margin-top": "0", "margin-bottom": "225" }, h("span", { key: '832e9f340126888cbde32219a4bc5c41c64768de', class: "gcds-stepper__steps" }, `${i18n[lang].step} ${currentStep} ${i18n[lang].of} ${totalSteps}`, h("gcds-sr-only", { key: '09142960d870e811eae871d22c8e217025747080' }, " : ")), h("slot", { key: '1e03b643830f949011400d1c0b25e849359a74d1' })))));
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
