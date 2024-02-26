import type { Components, JSX } from "../types/components";

interface GcdsErrorSummary extends Components.GcdsErrorSummary, HTMLElement {}
export const GcdsErrorSummary: {
    prototype: GcdsErrorSummary;
    new (): GcdsErrorSummary;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
