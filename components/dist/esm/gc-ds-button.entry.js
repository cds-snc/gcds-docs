import { r as registerInstance, h } from './index-05f562ba.js';

function format(label) {
  return (label ? ` ${label}` : 'Fallback Button Label');
}

const myComponentCss = ":host{display:block}:host button{background-color:var(--gcds-colour-base-red-500);border:none;color:var(--gcds-colour-utils-white);cursor:pointer;padding:0.5rem 1rem}";

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.label);
  }
  render() {
    return h("button", null, this.getText());
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as gc_ds_button };
