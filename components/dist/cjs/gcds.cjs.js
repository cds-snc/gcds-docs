'use strict';

const index = require('./index-faa8db83.js');

/*
 Stencil Client Patch Browser v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('gcds.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["gcds-input.cjs",[[2,"gcds-input",{"disabled":[4],"errorMessage":[1,"error-message"],"hideLabel":[4,"hide-label"],"hint":[1],"inputId":[1,"input-id"],"label":[1],"required":[4],"size":[2],"type":[1],"value":[1025]}]]],["gcds-textarea.cjs",[[2,"gcds-textarea",{"cols":[2],"disabled":[4],"errorMessage":[1,"error-message"],"hideLabel":[4,"hide-label"],"hint":[1],"label":[1],"required":[4],"rows":[2],"textareaCharacterCount":[2,"textarea-character-count"],"textareaId":[1,"textarea-id"],"value":[1025]}]]],["gcds-site-menu.cjs",[[1,"gcds-site-menu",{"menuDesktopLayout":[1025,"menu-desktop-layout"],"menuMobileLayout":[1025,"menu-mobile-layout"],"menuAlignment":[1,"menu-alignment"],"menuPosition":[1,"menu-position"]}]]],["gcds-grid.cjs",[[1,"gcds-grid",{"display":[1],"container":[1],"gridTemplateColumns":[1,"grid-template-columns"],"gridTemplateColumnsTablet":[1,"grid-template-columns-tablet"],"gridTemplateColumnsDesktop":[1,"grid-template-columns-desktop"],"gap":[1],"alignContent":[1,"align-content"],"justifyContent":[1,"justify-content"],"placeContent":[1,"place-content"],"alignItems":[1,"align-items"],"justifyItems":[1,"justify-items"],"placeItems":[1,"place-items"],"tag":[1]}]]],["gcds-button.cjs",[[1,"gcds-button",{"buttonType":[1025,"button-type"],"buttonRole":[1025,"button-role"],"buttonStyle":[1025,"button-style"],"name":[1],"disabled":[4],"href":[1],"rel":[1],"target":[1],"download":[1],"customBorderWeight":[1,"custom-border-weight"],"customBorderStyle":[1,"custom-border-style"],"customBorderColor":[1,"custom-border-color"],"customMargin":[1,"custom-margin"],"customDisplay":[1,"custom-display"],"customBackgroundColor":[1,"custom-background-color"],"customBoxShadow":[1,"custom-box-shadow"],"customCapitalization":[1,"custom-capitalization"],"inheritedAttributes":[32],"focusElement":[64]}]]],["gcds-error-message_3.cjs",[[1,"gcds-error-message",{"messageId":[1,"message-id"],"message":[1]}],[1,"gcds-hint",{"hint":[1],"hintId":[1,"hint-id"]}],[2,"gcds-label",{"hideLabel":[4,"hide-label"],"label":[1],"labelFor":[1,"label-for"],"required":[4]}]]]], options);
});
