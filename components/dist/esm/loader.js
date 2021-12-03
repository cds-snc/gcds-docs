import { p as promiseResolve, b as bootstrapLazy } from './index-05f562ba.js';

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["gc-ds-button",[[1,"gc-ds-button",{"label":[1]}]]]], options);
  });
};

export { defineCustomElements };
