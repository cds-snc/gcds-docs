'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-64738ed4.js');

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["gcds-input.cjs",[[2,"gcds-input",{"disabled":[4],"errorMessage":[1,"error-message"],"hideLabel":[4,"hide-label"],"hint":[1],"inputId":[1,"input-id"],"label":[1],"required":[4],"type":[1],"value":[1025]}]]],["gcds-textarea.cjs",[[2,"gcds-textarea",{"cols":[2],"disabled":[4],"errorMessage":[1,"error-message"],"hideLabel":[4,"hide-label"],"hint":[1],"label":[1],"required":[4],"rows":[2],"textareaCharacterCount":[2,"textarea-character-count"],"textareaId":[1,"textarea-id"],"value":[1025]}]]],["gcds-button.cjs",[[1,"gcds-button",{"label":[1],"type":[1025],"state":[1],"task":[1],"variant":[1],"name":[1],"href":[1],"rel":[1],"target":[1],"download":[1],"customBorderWeight":[1,"custom-border-weight"],"customBorderStyle":[1,"custom-border-style"],"customBorderColor":[1,"custom-border-color"],"customMargin":[1,"custom-margin"],"customDisplay":[1,"custom-display"],"customBackgroundColor":[1,"custom-background-color"],"customBoxShadow":[1,"custom-box-shadow"],"customCapitalization":[1,"custom-capitalization"]}]]],["gcds-site-menu.cjs",[[1,"gcds-site-menu",{"menuDesktopLayout":[1025,"menu-desktop-layout"],"menuMobileLayout":[1025,"menu-mobile-layout"],"menuAlignment":[1,"menu-alignment"],"menuPosition":[1,"menu-position"]}]]],["gcds-error-message_3.cjs",[[1,"gcds-error-message",{"messageId":[1,"message-id"],"message":[1]}],[1,"gcds-hint",{"hint":[1],"hintId":[1,"hint-id"]}],[2,"gcds-label",{"hideLabel":[4,"hide-label"],"label":[1],"labelFor":[1,"label-for"],"required":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
