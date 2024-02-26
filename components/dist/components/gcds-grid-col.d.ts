import type { Components, JSX } from "../types/components";

interface GcdsGridCol extends Components.GcdsGridCol, HTMLElement {}
export const GcdsGridCol: {
    prototype: GcdsGridCol;
    new (): GcdsGridCol;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
