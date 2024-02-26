import type { Components, JSX } from "../types/components";

interface GcdsSrOnly extends Components.GcdsSrOnly, HTMLElement {}
export const GcdsSrOnly: {
    prototype: GcdsSrOnly;
    new (): GcdsSrOnly;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
