'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62a29892.js');

function format(label) {
  return (label ? ` ${label}` : 'Fallback Button Label');
}

const myComponentCss = ":host{display:block}:host button{background-color:var(--gcds-colour-base-red-500);border:none;color:var(--gcds-colour-utils-white);cursor:pointer;padding:0.5rem 1rem}";

let MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.label);
  }
  render() {
    return index.h("button", null, this.getText());
  }
};
MyComponent.style = myComponentCss;

exports.gc_ds_button = MyComponent;
