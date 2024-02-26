import type { Components, JSX } from "../types/components";

interface GcdsTopNav extends Components.GcdsTopNav, HTMLElement {}
export const GcdsTopNav: {
    prototype: GcdsTopNav;
    new (): GcdsTopNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
