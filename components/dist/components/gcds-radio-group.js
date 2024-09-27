import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage, i as inheritAttributes } from './utils.js';
import { d as defineCustomElement$4 } from './gcds-hint2.js';
import { d as defineCustomElement$3 } from './gcds-label2.js';
import { d as defineCustomElement$2 } from './gcds-text2.js';

const gcdsRadioGroupCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-radio{border:0;padding:0}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before{box-sizing:border-box;content:\"\";cursor:pointer}}@layer default{:host .gcds-radio{color:var(--gcds-radio-default-text);font:var(--gcds-radio-font);margin:var(--gcds-radio-margin)!important;max-width:var(--gcds-radio-max-width);min-height:calc(var(--gcds-radio-input-height-and-width) - var(--gcds-radio-padding));padding:var(--gcds-radio-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-radio :is(gcds-label,gcds-hint){padding:var(--gcds-radio-label-padding)!important}:host .gcds-radio gcds-hint::part(hint){margin:0}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before,:host .gcds-radio input{position:absolute}:host .gcds-radio gcds-label:before,:host .gcds-radio input{height:var(--gcds-radio-input-height-and-width);left:0;top:0;width:var(--gcds-radio-input-height-and-width)}:host .gcds-radio input{opacity:0}:host .gcds-radio gcds-label{width:fit-content}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before{border-radius:var(--gcds-radio-border-radius)}:host .gcds-radio gcds-label:before{border:var(--gcds-radio-input-border-width) solid;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-radio gcds-label:after{background-color:currentcolor;height:var(--gcds-radio-check-height-and-width);left:var(--gcds-radio-check-left);opacity:0;top:var(--gcds-radio-check-top);transition:opacity .2s ease-in-out;width:var(--gcds-radio-check-height-and-width)}:host .gcds-radio input:checked+gcds-label:after{opacity:1}}@layer disabled{:host .gcds-radio.gcds-radio--disabled{color:var(--gcds-radio-disabled-text)}:host .gcds-radio.gcds-radio--disabled gcds-label:after,:host .gcds-radio.gcds-radio--disabled gcds-label:before{cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label:before{background-color:var(--gcds-radio-disabled-background);border-color:var(--gcds-radio-disabled-border)}}@layer error{:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label:before{border-color:var(--gcds-radio-danger-border)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label:after{background-color:var(--gcds-radio-danger-border)}}@layer focus{:host .gcds-radio:focus-within{color:var(--gcds-radio-focus-text)}:host .gcds-radio:focus-within input:focus+gcds-label:before{background:var(--gcds-radio-focus-background);box-shadow:var(--gcds-radio-focus-box-shadow);outline:var(--gcds-radio-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-radio-input-border-width)}:host .gcds-radio:focus-within input:focus+gcds-label:after{background-color:currentcolor}}";
const GcdsRadioGroupStyle0 = gcdsRadioGroupCss;

const GcdsRadioGroup$1 = /*@__PURE__*/ proxyCustomElement(class GcdsRadioGroup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.internals = this.attachInternals();
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
        return (h(Host, { key: '1b1197d92fe73076a39aed5beb6659ebca4d6dea' }, this.optionObject &&
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
            }), parentError && (h("span", { key: 'b60d8d247b2f194432e70a23e1b65fab31ef2f6e', id: `parent-error`, hidden: true }, parentError))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "options": ["validateOptions"]
    }; }
    static get style() { return GcdsRadioGroupStyle0; }
}, [81, "gcds-radio-group", {
        "options": [1],
        "name": [513],
        "hasError": [32],
        "parentError": [32],
        "inheritedAttributes": [32],
        "lang": [32]
    }, [[16, "gcdsGroupError", "gcdsGroupError"], [16, "gcdsGroupErrorClear", "gcdsGroupErrorClear"]], {
        "options": ["validateOptions"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-radio-group", "gcds-hint", "gcds-label", "gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-radio-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsRadioGroup$1);
            }
            break;
        case "gcds-hint":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "gcds-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "gcds-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const GcdsRadioGroup = GcdsRadioGroup$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsRadioGroup, defineCustomElement };

//# sourceMappingURL=gcds-radio-group.js.map