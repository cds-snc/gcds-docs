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

const gcdsButtonCss = "@layer reset, default, roles, size, disabled, hover, focus, active, mobile;@layer reset{:host{display:inline-block}:host .gcds-button{box-sizing:border-box;cursor:pointer;text-decoration:none}:host slot{display:initial}}@layer default{:host .gcds-button{display:inline-block;font:var(--gcds-button-font);text-align:center;width:var(--gcds-button-width);text-wrap:balance;border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);padding:var(--gcds-button-padding);transition:all .15s ease-in-out}}@layer roles{:host .gcds-button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host .gcds-button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host .gcds-button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}}@layer size{:host .gcds-button.button--small{font:var(--gcds-button-small-font);padding:var(--gcds-button-small-padding)}}@layer disabled{:host .gcds-button[aria-disabled=true]{background-color:var(--gcds-button-shared-disabled-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-shared-disabled-text);cursor:not-allowed;pointer-events:none}}@layer hover{@media (hover:hover){:host .gcds-button:hover.button--role-danger{background-color:var(--gcds-button-danger-hover-background)}:host .gcds-button:hover.button--role-primary{background-color:var(--gcds-button-primary-hover-background)}:host .gcds-button:hover.button--role-secondary{background-color:var(--gcds-button-secondary-hover-background)}}}@layer focus{:host .gcds-button:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}}@layer active{:host .gcds-button:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}}@layer mobile{@media screen and (max-width:30rem){:host{display:block}:host .gcds-button{margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}}";
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
        const values = ['primary', 'secondary', 'danger'];
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
        return (h(Host, { key: 'f879906e23b82587fd539f65f4089d52f7ebac8f' }, h(Tag, Object.assign({ key: 'a2193325c515bcafa420a4c3b70aac52c4a4d248' }, attrs, { id: buttonId, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => this.handleClick(e), class: `gcds-button button--role-${buttonRole} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), h("slot", { key: '5d106a6af6fa23a394fc1387c3ccb96c93b7b490' }), type === 'link' && target === '_blank' ? (h("gcds-icon", { name: "external-link", label: I18N[lang].label, "margin-left": "200" })) : null)));
    }
    static get delegatesFocus() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "type": ["validateType"],
        "buttonRole": ["validateButtonRole"],
        "size": ["validateSize"]
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