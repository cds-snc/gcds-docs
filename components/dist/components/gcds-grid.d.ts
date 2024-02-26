import type { Components, JSX } from "../types/components";

interface GcdsGrid extends Components.GcdsGrid, HTMLElement {}
export const GcdsGrid: {
    prototype: GcdsGrid;
    new (): GcdsGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
