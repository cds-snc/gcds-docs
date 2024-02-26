import type { Components, JSX } from "../types/components";

interface GcdsPhaseBanner extends Components.GcdsPhaseBanner, HTMLElement {}
export const GcdsPhaseBanner: {
    prototype: GcdsPhaseBanner;
    new (): GcdsPhaseBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
