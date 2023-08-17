/* gcds custom elements */
export { GcdsAlert as GcdsAlert } from '../types/components/gcds-alert/gcds-alert';
export { GcdsBreadcrumbs as GcdsBreadcrumbs } from '../types/components/gcds-breadcrumbs/gcds-breadcrumbs';
export { GcdsBreadcrumbsItem as GcdsBreadcrumbsItem } from '../types/components/gcds-breadcrumbs/gcds-breadcrumbs-item';
export { GcdsButton as GcdsButton } from '../types/components/gcds-button/gcds-button';
export { GcdsCard as GcdsCard } from '../types/components/gcds-card/gcds-card';
export { GcdsCheckbox as GcdsCheckbox } from '../types/components/gcds-checkbox/gcds-checkbox';
export { GcdsContainer as GcdsContainer } from '../types/components/gcds-container/gcds-container';
export { GcdsDateModified as GcdsDateModified } from '../types/components/gcds-date-modified/gcds-date-modified';
export { GcdsDetails as GcdsDetails } from '../types/components/gcds-details/gcds-details';
export { GcdsErrorMessage as GcdsErrorMessage } from '../types/components/gcds-error-message/gcds-error-message';
export { GcdsErrorSummary as GcdsErrorSummary } from '../types/components/gcds-error-summary/gcds-error-summary';
export { GcdsFieldset as GcdsFieldset } from '../types/components/gcds-fieldset/gcds-fieldset';
export { GcdsFileUploader as GcdsFileUploader } from '../types/components/gcds-file-uploader/gcds-file-uploader';
export { GcdsFooter as GcdsFooter } from '../types/components/gcds-footer/gcds-footer';
export { GcdsGrid as GcdsGrid } from '../types/components/gcds-grid/gcds-grid';
export { GcdsHeader as GcdsHeader } from '../types/components/gcds-header/gcds-header';
export { GcdsHint as GcdsHint } from '../types/components/gcds-hint/gcds-hint';
export { GcdsIcon as GcdsIcon } from '../types/components/gcds-icon/gcds-icon';
export { GcdsInput as GcdsInput } from '../types/components/gcds-input/gcds-input';
export { GcdsLabel as GcdsLabel } from '../types/components/gcds-label/gcds-label';
export { GcdsLangToggle as GcdsLangToggle } from '../types/components/gcds-lang-toggle/gcds-lang-toggle';
export { GcdsNavGroup as GcdsNavGroup } from '../types/components/gcds-nav-group/gcds-nav-group';
export { GcdsNavLink as GcdsNavLink } from '../types/components/gcds-nav-link/gcds-nav-link';
export { GcdsPagination as GcdsPagination } from '../types/components/gcds-pagination/gcds-pagination';
export { GcdsPhaseBanner as GcdsPhaseBanner } from '../types/components/gcds-phase-banner/gcds-phase-banner';
export { GcdsRadio as GcdsRadio } from '../types/components/gcds-radio/gcds-radio';
export { GcdsSelect as GcdsSelect } from '../types/components/gcds-select/gcds-select';
export { GcdsSideNav as GcdsSideNav } from '../types/components/gcds-side-nav/gcds-side-nav';
export { GcdsSignature as GcdsSignature } from '../types/components/gcds-signature/gcds-signature';
export { GcdsStepper as GcdsStepper } from '../types/components/gcds-stepper/gcds-stepper';
export { GcdsTextarea as GcdsTextarea } from '../types/components/gcds-textarea/gcds-textarea';
export { GcdsTopNav as GcdsTopNav } from '../types/components/gcds-top-nav/gcds-top-nav';
export { GcdsVerifyBanner as GcdsVerifyBanner } from '../types/components/gcds-verify-banner/gcds-verify-banner';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

/**
 * Used to specify a nonce value that corresponds with an application's CSP.
 * When set, the nonce will be added to all dynamically created script and style tags at runtime.
 * Alternatively, the nonce value can be set on a meta tag in the DOM head
 * (<meta name="csp-nonce" content="{ nonce value here }" />) which
 * will result in the same behavior.
 */
export declare const setNonce: (nonce: string) => void

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
