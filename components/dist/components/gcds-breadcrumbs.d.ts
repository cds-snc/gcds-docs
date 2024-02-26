import type { Components, JSX } from "../types/components";

interface GcdsBreadcrumbs extends Components.GcdsBreadcrumbs, HTMLElement {}
export const GcdsBreadcrumbs: {
    prototype: GcdsBreadcrumbs;
    new (): GcdsBreadcrumbs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
