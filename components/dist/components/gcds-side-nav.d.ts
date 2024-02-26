import type { Components, JSX } from "../types/components";

interface GcdsSideNav extends Components.GcdsSideNav, HTMLElement {}
export const GcdsSideNav: {
    prototype: GcdsSideNav;
    new (): GcdsSideNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
