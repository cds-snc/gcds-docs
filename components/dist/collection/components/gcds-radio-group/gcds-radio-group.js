import { Host, h, } from "@stencil/core";
import { assignLanguage, inheritAttributes, observerConfig, } from "../../utils/utils";
export class GcdsRadioGroup {
    constructor() {
        this.onBlur = () => {
            this.gcdsBlur.emit();
        };
        this.onChange = e => {
            this.gcdsChange.emit(e.target.value);
            this.internals.setFormValue(e.target.value, 'checked');
            const changeEvt = new e.constructor(e.type, e);
            this.el.dispatchEvent(changeEvt);
        };
        this.options = undefined;
        this.name = undefined;
        this.hasError = undefined;
        this.parentError = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
    }
    validateOptions() {
        if (typeof this.options == 'object') {
            this.optionObject = this.options;
        }
        else if (typeof this.options == 'string') {
            this.optionObject = JSON.parse(this.options);
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateOptions();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        this.optionObject &&
            this.optionObject.map(radio => {
                if (radio.checked) {
                    this.internals.setFormValue(radio.value, 'checked');
                }
            });
    }
    /**
     * Event listener for gcds-fieldset errors
     */
    gcdsGroupError(e) {
        if (e.srcElement.contains(this.el)) {
            this.hasError = true;
            this.parentError = e.detail;
        }
    }
    gcdsGroupErrorClear(e) {
        if (e.srcElement.contains(this.el) && this.hasError) {
            this.hasError = false;
            this.parentError = '';
        }
    }
    render() {
        const { lang, name, hasError, parentError, inheritedAttributes } = this;
        return (h(Host, null, this.optionObject &&
            this.optionObject.map(radio => {
                const attrsInput = Object.assign({ name, disabled: radio.disabled, required: radio.required, value: radio.value, checked: radio.checked }, inheritedAttributes);
                if (radio.hint || parentError) {
                    const hintID = radio.hint ? `hint-${radio.id} ` : '';
                    const errorID = parentError ? `parent-error ` : '';
                    attrsInput['aria-describedby'] = `${hintID}${errorID}${attrsInput['aria-describedby']
                        ? `${attrsInput['aria-describedby']}`
                        : ''}`;
                }
                if (hasError) {
                    attrsInput['aria-invalid'] = 'true';
                }
                return (h("div", { class: `gcds-radio ${radio.disabled ? 'gcds-radio--disabled' : ''} ${hasError ? 'gcds-radio--error' : ''}` }, h("input", Object.assign({ id: radio.id, type: "radio" }, attrsInput, { onChange: e => this.onChange(e), onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), ref: element => (this.shadowElement = element) })), h("gcds-label", { label: radio.label, "label-for": radio.id, lang: lang }), radio.hint ? (h("gcds-hint", { "hint-id": radio.id }, radio.hint)) : null));
            }), parentError && (h("span", { id: `parent-error`, hidden: true }, parentError))));
    }
    static get is() { return "gcds-radio-group"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-radio-group.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-radio-group.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Array<RadioObject>",
                    "resolved": "RadioObject[] | string",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "RadioObject": {
                            "location": "local",
                            "path": "/home/runner/work/gcds-components/gcds-components/packages/web/src/components/gcds-radio-group/gcds-radio-group.tsx",
                            "id": "src/components/gcds-radio-group/gcds-radio-group.tsx::RadioObject"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Options to render radio buttons"
                },
                "attribute": "options",
                "reflect": false
            },
            "name": {
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
                    "text": "Name attribute for an input element."
                },
                "attribute": "name",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "hasError": {},
            "parentError": {},
            "inheritedAttributes": {},
            "lang": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsChange",
                "name": "gcdsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the radio button is checked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsFocus",
                "name": "gcdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the radio has focus."
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
                    "text": "Emitted when the radio loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "options",
                "methodName": "validateOptions"
            }];
    }
    static get listeners() {
        return [{
                "name": "gcdsGroupError",
                "method": "gcdsGroupError",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "gcdsGroupErrorClear",
                "method": "gcdsGroupErrorClear",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=gcds-radio-group.js.map
