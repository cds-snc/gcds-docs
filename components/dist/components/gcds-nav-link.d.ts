import type { Components, JSX } from "../types/components";

interface GcdsNavLink extends Components.GcdsNavLink, HTMLElement {}
export const GcdsNavLink: {
    prototype: GcdsNavLink;
    new (): GcdsNavLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
