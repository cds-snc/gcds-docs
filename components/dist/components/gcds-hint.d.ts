import type { Components, JSX } from "../types/components";

interface GcdsHint extends Components.GcdsHint, HTMLElement {}
export const GcdsHint: {
    prototype: GcdsHint;
    new (): GcdsHint;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
