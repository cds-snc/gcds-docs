import type { Components, JSX } from "../types/components";

interface GcdsFieldset extends Components.GcdsFieldset, HTMLElement {}
export const GcdsFieldset: {
    prototype: GcdsFieldset;
    new (): GcdsFieldset;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
