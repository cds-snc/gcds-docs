import type { Components, JSX } from "../types/components";

interface GcdsLink extends Components.GcdsLink, HTMLElement {}
export const GcdsLink: {
    prototype: GcdsLink;
    new (): GcdsLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
