import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { e as emitEvent, i as inheritAttributes, o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$1 } from './gcds-icon2.js';

const I18N = {
  en: {
    label: 'Opens in a new tab.',
  },
  fr: {
    label: "S'ouvre dans un nouvel onglet.",
  },
};

const gcdsButtonCss = "@layer reset, default, roles, size, disabled, hover, focus, active, mobile;@layer reset{:host{display:inline-block}:host .gcds-button{box-sizing:border-box;cursor:pointer;text-decoration:none}:host slot{display:initial}}@layer default{:host .gcds-button{display:inline-block;text-align:center;width:var(--gcds-button-width);text-wrap:balance;border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);font:var(--gcds-button-font-desktop);padding:var(--gcds-button-padding);transition:all .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-button{font:var(--gcds-button-font-mobile)}}}@layer roles{:host .gcds-button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host .gcds-button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host .gcds-button.button--role-start{background-color:var(--gcds-button-start-default-background);color:var(--gcds-button-start-default-text);font:var(--gcds-button-start-font-desktop);padding:var(--gcds-button-start-padding)}@media only screen and (width < 48em){:host .gcds-button.button--role-start{font:var(--gcds-button-start-font-mobile)}}:host .gcds-button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}}@layer size{:host .gcds-button.button--small{font:var(--gcds-button-small-font);padding:var(--gcds-button-small-padding)}}@layer disabled{:host([disabled]){pointer-events:none}:host([disabled]) .gcds-button[aria-disabled=true]{cursor:not-allowed;opacity:var(--gcds-button-shared-disabled-opacity);pointer-events:none}}@layer hover{@media (hover:hover){:host .gcds-button:hover.button--role-danger{background-color:var(--gcds-button-danger-hover-background)}:host .gcds-button:hover.button--role-primary{background-color:var(--gcds-button-primary-hover-background)}:host .gcds-button:hover.button--role-start{background-color:var(--gcds-button-start-hover-background)}:host .gcds-button:hover.button--role-secondary{background-color:var(--gcds-button-secondary-hover-background)}}}@layer focus{:host .gcds-button:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}}@layer active{:host .gcds-button:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}}@layer mobile{@media screen and (max-width:30rem){:host{display:block}:host .gcds-button{margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}}";
const GcdsButtonStyle0 = gcdsButtonCss;

const GcdsButton = /*@__PURE__*/ proxyCustomElement(class GcdsButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.handleClick = (e) => {
            // Check button type, only emit value if type is "submit"
            const emitValue = this.type === 'submit' ? this.value : undefined;
            const event = emitEvent(e, this.gcdsClick, emitValue);
            if (event) {
                if (!this.disabled && this.type != 'button' && this.type != 'link') {
                    // Attach button to form
                    const form = this.el.closest('form');
                    if (form) {
                        e.preventDefault();
                        const formButton = document.createElement('button');
                        formButton.type = this.type;
                        if (this.name) {
                            formButton.name = this.name;
                        }
                        if (this.value) {
                            formButton.value = this.value;
                        }
                        formButton.style.display = 'none';
                        form.appendChild(formButton);
                        formButton.click();
                        formButton.remove();
                    }
                }
                // Has any inherited attributes changed on click
                this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
            }
        };
        this.type = 'button';
        this.buttonRole = 'primary';
        this.size = 'regular';
        this.buttonId = undefined;
        this.name = undefined;
        this.disabled = undefined;
        this.value = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.target = undefined;
        this.download = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
    }
    validateType(newValue) {
        const values = ['submit', 'reset', 'button', 'link'];
        if (!values.includes(newValue)) {
            this.type = 'button';
        }
    }
    validateButtonRole(newValue) {
        const values = ['start', 'primary', 'secondary', 'danger'];
        if (!values.includes(newValue)) {
            this.buttonRole = 'primary';
        }
        else if (newValue === 'start' && this.size === 'small') {
            this.size = 'regular';
        }
    }
    validateSize(newValue) {
        const values = ['regular', 'small'];
        if (!values.includes(newValue) || this.buttonRole === 'start') {
            this.size = 'regular';
        }
    }
    validateDisabled(newValue) {
        if (newValue === false || (newValue === true && this.type === 'link')) {
            this.el.removeAttribute('disabled');
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
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateType(this.type);
        this.validateButtonRole(this.buttonRole);
        this.validateSize(this.size);
        this.validateDisabled(this.disabled);
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { type, buttonRole, size, buttonId, disabled, lang, name, href, rel, target, download, value, inheritedAttributes, } = this;
        const Tag = type != 'link' ? 'button' : 'a';
        const attrs = Tag === 'button'
            ? {
                type: type,
                ariaDisabled: disabled,
                name,
                value,
            }
            : {
                href,
                rel,
                target,
                download,
            };
        return (h(Host, { key: '59ad0b1cafa83cb3a101d48e07d29c92ffe3c714' }, h(Tag, Object.assign({ key: 'cd037c7872f680306f1e10f69b7b02f95da9e77b' }, attrs, { id: buttonId, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => !disabled ? this.handleClick(e) : e.stopImmediatePropagation(), class: `gcds-button button--role-${buttonRole} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), h("slot", { key: 'aa1a34a400c9bbaf88f03e0d39c628f13a713798' }), type === 'link' && target === '_blank' ? (h("gcds-icon", { name: "external", label: I18N[lang].label, "margin-left": "150" })) : null)));
    }
    static get delegatesFocus() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "type": ["validateType"],
        "buttonRole": ["validateButtonRole"],
        "size": ["validateSize"],
        "disabled": ["validateDisabled"]
    }; }
    static get style() { return GcdsButtonStyle0; }
}, [17, "gcds-button", {
        "type": [1025],
        "buttonRole": [1025, "button-role"],
        "size": [1025],
        "buttonId": [1, "button-id"],
        "name": [1],
        "disabled": [4],
        "value": [1],
        "href": [1],
        "rel": [1],
        "target": [1],
        "download": [1],
        "inheritedAttributes": [32],
        "lang": [32]
    }, undefined, {
        "type": ["validateType"],
        "buttonRole": ["validateButtonRole"],
        "size": ["validateSize"],
        "disabled": ["validateDisabled"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-button", "gcds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsButton);
            }
            break;
        case "gcds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { GcdsButton as G, defineCustomElement as d };

//# sourceMappingURL=gcds-button2.js.map