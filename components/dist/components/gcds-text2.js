import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { S as SpacingArray } from './spacing.js';

const gcdsTextCss = "@layer reset, default, display, limit, margin, role, size, style, weight;@layer reset{:host{color:var(--gcds-text-role-primary);display:block}:host .gcds-text{box-sizing:border-box;display:inherit;margin:0}:host .gcds-text slot{display:initial}}@layer default{:host .gcds-text{font:var(--gcds-text-size-body-desktop)}@media only screen and (width < 48em){:host .gcds-text{font:var(--gcds-text-size-body-mobile)}}}@layer display{:host.d-block{display:block}:host.d-flex{display:flex}:host.d-inline{display:inline}:host.d-inline-block{display:inline-block}:host.d-inline-flex{display:inline-flex}:host.d-none{display:none}}@layer limit{:host .gcds-text.limit{max-width:var(--gcds-text-character-limit)}}@layer margin{:host .gcds-text.mt-0{margin-block-start:var(--gcds-text-spacing-0)}:host .gcds-text.mt-25{margin-block-start:var(--gcds-text-spacing-25)}:host .gcds-text.mt-50{margin-block-start:var(--gcds-text-spacing-50)}:host .gcds-text.mt-75{margin-block-start:var(--gcds-text-spacing-75)}:host .gcds-text.mt-100{margin-block-start:var(--gcds-text-spacing-100)}:host .gcds-text.mt-125{margin-block-start:var(--gcds-text-spacing-125)}:host .gcds-text.mt-150{margin-block-start:var(--gcds-text-spacing-150)}:host .gcds-text.mt-175{margin-block-start:var(--gcds-text-spacing-175)}:host .gcds-text.mt-200{margin-block-start:var(--gcds-text-spacing-200)}:host .gcds-text.mt-225{margin-block-start:var(--gcds-text-spacing-225)}:host .gcds-text.mt-250{margin-block-start:var(--gcds-text-spacing-250)}:host .gcds-text.mt-300{margin-block-start:var(--gcds-text-spacing-300)}:host .gcds-text.mt-350{margin-block-start:var(--gcds-text-spacing-350)}:host .gcds-text.mt-400{margin-block-start:var(--gcds-text-spacing-400)}:host .gcds-text.mt-450{margin-block-start:var(--gcds-text-spacing-450)}:host .gcds-text.mt-500{margin-block-start:var(--gcds-text-spacing-500)}:host .gcds-text.mt-550{margin-block-start:var(--gcds-text-spacing-550)}:host .gcds-text.mt-600{margin-block-start:var(--gcds-text-spacing-600)}:host .gcds-text.mt-650{margin-block-start:var(--gcds-text-spacing-650)}:host .gcds-text.mt-700{margin-block-start:var(--gcds-text-spacing-700)}:host .gcds-text.mt-750{margin-block-start:var(--gcds-text-spacing-750)}:host .gcds-text.mt-800{margin-block-start:var(--gcds-text-spacing-800)}:host .gcds-text.mt-850{margin-block-start:var(--gcds-text-spacing-850)}:host .gcds-text.mt-900{margin-block-start:var(--gcds-text-spacing-900)}:host .gcds-text.mt-950{margin-block-start:var(--gcds-text-spacing-950)}:host .gcds-text.mt-1000{margin-block-start:var(--gcds-text-spacing-1000)}:host .gcds-text.mt-1050{margin-block-start:var(--gcds-text-spacing-1050)}:host .gcds-text.mt-1100{margin-block-start:var(--gcds-text-spacing-1100)}:host .gcds-text.mt-1150{margin-block-start:var(--gcds-text-spacing-1150)}:host .gcds-text.mt-1200{margin-block-start:var(--gcds-text-spacing-1200)}:host .gcds-text.mt-1250{margin-block-start:var(--gcds-text-spacing-1250)}:host .gcds-text.mb-0{margin-block-end:var(--gcds-text-spacing-0)}:host .gcds-text.mb-25{margin-block-end:var(--gcds-text-spacing-25)}:host .gcds-text.mb-50{margin-block-end:var(--gcds-text-spacing-50)}:host .gcds-text.mb-75{margin-block-end:var(--gcds-text-spacing-75)}:host .gcds-text.mb-100{margin-block-end:var(--gcds-text-spacing-100)}:host .gcds-text.mb-125{margin-block-end:var(--gcds-text-spacing-125)}:host .gcds-text.mb-150{margin-block-end:var(--gcds-text-spacing-150)}:host .gcds-text.mb-175{margin-block-end:var(--gcds-text-spacing-175)}:host .gcds-text.mb-200{margin-block-end:var(--gcds-text-spacing-200)}:host .gcds-text.mb-225{margin-block-end:var(--gcds-text-spacing-225)}:host .gcds-text.mb-250{margin-block-end:var(--gcds-text-spacing-250)}:host .gcds-text.mb-300{margin-block-end:var(--gcds-text-spacing-300)}:host .gcds-text.mb-350{margin-block-end:var(--gcds-text-spacing-350)}:host .gcds-text.mb-400{margin-block-end:var(--gcds-text-spacing-400)}:host .gcds-text.mb-450{margin-block-end:var(--gcds-text-spacing-450)}:host .gcds-text.mb-500{margin-block-end:var(--gcds-text-spacing-500)}:host .gcds-text.mb-550{margin-block-end:var(--gcds-text-spacing-550)}:host .gcds-text.mb-600{margin-block-end:var(--gcds-text-spacing-600)}:host .gcds-text.mb-650{margin-block-end:var(--gcds-text-spacing-650)}:host .gcds-text.mb-700{margin-block-end:var(--gcds-text-spacing-700)}:host .gcds-text.mb-750{margin-block-end:var(--gcds-text-spacing-750)}:host .gcds-text.mb-800{margin-block-end:var(--gcds-text-spacing-800)}:host .gcds-text.mb-850{margin-block-end:var(--gcds-text-spacing-850)}:host .gcds-text.mb-900{margin-block-end:var(--gcds-text-spacing-900)}:host .gcds-text.mb-950{margin-block-end:var(--gcds-text-spacing-950)}:host .gcds-text.mb-1000{margin-block-end:var(--gcds-text-spacing-1000)}:host .gcds-text.mb-1050{margin-block-end:var(--gcds-text-spacing-1050)}:host .gcds-text.mb-1100{margin-block-end:var(--gcds-text-spacing-1100)}:host .gcds-text.mb-1150{margin-block-end:var(--gcds-text-spacing-1150)}:host .gcds-text.mb-1200{margin-block-end:var(--gcds-text-spacing-1200)}:host .gcds-text.mb-1250{margin-block-end:var(--gcds-text-spacing-1250)}}@layer variants.role{:host .gcds-text.role-primary{color:var(--gcds-text-role-primary)}:host .gcds-text.role-secondary{color:var(--gcds-text-role-secondary)}:host .gcds-text.role-light{color:var(--gcds-text-role-light)}}@layer variants.size{:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-desktop)}@media only screen and (width < 48em){:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-mobile)}}}@layer variants.style{:host .gcds-text ::slotted(em){font-style:italic}}@layer variants.weight{:host .gcds-text ::slotted(strong){font-weight:var(--gcds-text-weight-bold)}}";
const GcdsTextStyle0 = gcdsTextCss;

const GcdsText = /*@__PURE__*/ proxyCustomElement(class GcdsText extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.textRole = 'primary';
        this.characterLimit = true;
        this.display = 'block';
        this.marginTop = '0';
        this.marginBottom = '300';
        this.size = 'body';
    }
    validateTextRole(newValue) {
        const values = ['light', 'primary', 'secondary'];
        if (!values.includes(newValue)) {
            this.textRole = 'primary';
        }
    }
    validateDisplay(newValue) {
        const values = [
            'block',
            'flex',
            'inline',
            'inline-block',
            'inline-flex',
            'none',
        ];
        if (!values.includes(newValue)) {
            this.display = 'block';
        }
    }
    validateMarginTop(newValue) {
        if (!SpacingArray.includes(newValue)) {
            this.marginTop = '0';
        }
    }
    validateMarginBottom(newValue) {
        if (!SpacingArray.includes(newValue)) {
            this.marginBottom = '300';
        }
    }
    validateSize(newValue) {
        const values = ['body', 'small'];
        if (!values.includes(newValue)) {
            this.size = 'body';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTextRole(this.textRole);
        this.validateDisplay(this.display);
        this.validateMarginTop(this.marginTop);
        this.validateMarginBottom(this.marginBottom);
        this.validateSize(this.size);
    }
    render() {
        const { characterLimit, display, marginTop, marginBottom, size, textRole } = this;
        return (h(Host, { key: 'b0b6d2eef2c482062861893a43f7508d984a398f', class: `${display != 'block' ? `d-${display}` : ''}` }, h("p", { key: '6d1c418740f62a70b5dd130adbd471eda5702288', class: `
            gcds-text
            ${textRole ? `role-${textRole}` : ''}
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
            ${size === 'small' ? `size-small` : ''}
          `, part: "text" }, size === 'small' ? (h("small", null, h("slot", null))) : (h("slot", null)))));
    }
    get el() { return this; }
    static get watchers() { return {
        "textRole": ["validateTextRole"],
        "display": ["validateDisplay"],
        "marginTop": ["validateMarginTop"],
        "marginBottom": ["validateMarginBottom"],
        "size": ["validateSize"]
    }; }
    static get style() { return GcdsTextStyle0; }
}, [1, "gcds-text", {
        "textRole": [1025, "text-role"],
        "characterLimit": [4, "character-limit"],
        "display": [1025],
        "marginTop": [1025, "margin-top"],
        "marginBottom": [1025, "margin-bottom"],
        "size": [1025]
    }, undefined, {
        "textRole": ["validateTextRole"],
        "display": ["validateDisplay"],
        "marginTop": ["validateMarginTop"],
        "marginBottom": ["validateMarginBottom"],
        "size": ["validateSize"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-text"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsText);
            }
            break;
    } });
}

export { GcdsText as G, defineCustomElement as d };

//# sourceMappingURL=gcds-text2.js.map