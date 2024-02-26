import type { Components, JSX } from "../types/components";

interface GcdsFooter extends Components.GcdsFooter, HTMLElement {}
export const GcdsFooter: {
    prototype: GcdsFooter;
    new (): GcdsFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
