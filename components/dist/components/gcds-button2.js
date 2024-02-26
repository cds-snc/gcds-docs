import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { i as inheritAttributes, o as observerConfig, a as assignLanguage } from './utils.js';
import { d as defineCustomElement$1 } from './gcds-icon2.js';

const I18N = {
  en: {
    label: 'Opens in a new tab.',
  },
  fr: {
    label: "S'ouvre dans un nouvel onglet.",
  },
};

const gcdsButtonCss = "@layer reset, default, roles, size, disabled, hover, focus, active, mobile;@layer reset{:host{display:inline-block}:host .gcds-button{box-sizing:border-box;cursor:pointer;text-decoration:none}:host slot{display:initial}}@layer default{:host .gcds-button{display:inline-block;font:var(--gcds-button-font);text-align:center;width:var(--gcds-button-width);text-wrap:balance;border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);padding:var(--gcds-button-padding);transition:all .15s ease-in-out}}@layer roles{:host .gcds-button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host .gcds-button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host .gcds-button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}:host .gcds-button.button--role-skip-to-content{left:0;position:absolute;top:var(--gcds-button-skip-top);width:inherit;z-index:3}:host .gcds-button.button--role-skip-to-content:not(:focus){clip:rect(0,0,0,0);height:0;margin:0;overflow:hidden;padding:0;width:0}}@layer size{:host .gcds-button.button--small{font:var(--gcds-button-small-font);padding:var(--gcds-button-small-padding)}}@layer disabled{:host .gcds-button[aria-disabled=true]{background-color:var(--gcds-button-shared-disabled-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-shared-disabled-text);cursor:not-allowed;pointer-events:none}}@layer hover{@media (hover:hover){:host .gcds-button:hover.button--role-danger{background-color:var(--gcds-button-danger-hover-background)}:host .gcds-button:hover.button--role-primary{background-color:var(--gcds-button-primary-hover-background)}:host .gcds-button:hover.button--role-secondary{background-color:var(--gcds-button-secondary-hover-background)}}}@layer focus{:host .gcds-button:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}}@layer active{:host .gcds-button:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}}@layer mobile{@media screen and (max-width:30rem){:host{display:block}:host .gcds-button{margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}}";
const GcdsButtonStyle0 = gcdsButtonCss;

const GcdsButton = /*@__PURE__*/ proxyCustomElement(class GcdsButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.handleClick = (e) => {
            if (this.clickHandler) {
                this.clickHandler(e);
            }
            else {
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
                        formButton.style.display = 'none';
                        form.appendChild(formButton);
                        formButton.click();
                        formButton.remove();
                    }
                }
            }
            // Has any inherited attributes changed on click
            this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        };
        this.onFocus = e => {
            if (this.focusHandler) {
                this.focusHandler(e);
            }
            this.gcdsFocus.emit();
        };
        this.onBlur = e => {
            if (this.blurHandler) {
                this.blurHandler(e);
            }
            this.gcdsBlur.emit();
        };
        this.type = 'button';
        this.buttonRole = 'primary';
        this.size = 'regular';
        this.buttonId = undefined;
        this.name = undefined;
        this.disabled = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.target = undefined;
        this.download = undefined;
        this.clickHandler = undefined;
        this.focusHandler = undefined;
        this.blurHandler = undefined;
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
        const values = ['primary', 'secondary', 'danger', 'skip-to-content'];
        if (!values.includes(newValue)) {
            this.buttonRole = 'primary';
        }
    }
    validateSize(newValue) {
        const values = ['regular', 'small'];
        if (!values.includes(newValue)) {
            this.size = 'regular';
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
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    /**
     * Focus element
     */
    async focusElement() {
        this.shadowElement.focus();
    }
    render() {
        const { type, buttonRole, size, buttonId, disabled, lang, name, href, rel, target, download, inheritedAttributes, } = this;
        const Tag = type != 'link' ? 'button' : 'a';
        const attrs = Tag === 'button'
            ? {
                type: type,
                ariaDisabled: disabled,
                name,
            }
            : {
                href,
                rel,
                target,
                download,
            };
        return (h(Host, null, h(Tag, Object.assign({}, attrs, { id: buttonId, onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onClick: e => this.handleClick(e), class: `gcds-button button--role-${buttonRole} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), h("slot", null), type === 'link' && target === '_blank' ? (h("gcds-icon", { name: "external-link", label: I18N[lang].label, "margin-left": "200" })) : null)));
    }
    get el() { return this; }
    static get watchers() { return {
        "type": ["validateType"],
        "buttonRole": ["validateButtonRole"],
        "size": ["validateSize"]
    }; }
    static get style() { return GcdsButtonStyle0; }
}, [1, "gcds-button", {
        "type": [1025],
        "buttonRole": [1025, "button-role"],
        "size": [1025],
        "buttonId": [1, "button-id"],
        "name": [1],
        "disabled": [4],
        "href": [1],
        "rel": [1],
        "target": [1],
        "download": [1],
        "clickHandler": [16],
        "focusHandler": [16],
        "blurHandler": [16],
        "inheritedAttributes": [32],
        "lang": [32],
        "focusElement": [64]
    }, undefined, {
        "type": ["validateType"],
        "buttonRole": ["validateButtonRole"],
        "size": ["validateSize"]
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