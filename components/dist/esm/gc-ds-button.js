import { p as promiseResolve, b as bootstrapLazy } from './index-05f562ba.js';

/*
 Stencil Client Patch Browser v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["gc-ds-button",[[1,"gc-ds-button",{"label":[1]}]]]], options);
});
