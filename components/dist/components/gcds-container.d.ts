import type { Components, JSX } from "../types/components";

interface GcdsContainer extends Components.GcdsContainer, HTMLElement {}
export const GcdsContainer: {
    prototype: GcdsContainer;
    new (): GcdsContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
