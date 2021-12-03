'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62a29892.js');

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["gc-ds-button.cjs",[[1,"gc-ds-button",{"label":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
