'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-147671a4.js');

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["gcds-button.cjs",[[1,"gcds-button",{"label":[1],"type":[1025],"state":[1],"task":[1],"variant":[1],"name":[1],"href":[1],"rel":[1],"target":[1],"download":[1],"customBorderWeight":[1,"custom-border-weight"],"customBorderStyle":[1,"custom-border-style"],"customBorderColor":[1,"custom-border-color"],"customMargin":[1,"custom-margin"],"customDisplay":[1,"custom-display"],"customBackgroundColor":[1,"custom-background-color"],"customBoxShadow":[1,"custom-box-shadow"],"customCapitalization":[1,"custom-capitalization"]}]]],["gcds-site-menu.cjs",[[1,"gcds-site-menu"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
