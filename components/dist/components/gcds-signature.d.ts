import type { Components, JSX } from "../types/components";

interface GcdsSignature extends Components.GcdsSignature, HTMLElement {}
export const GcdsSignature: {
    prototype: GcdsSignature;
    new (): GcdsSignature;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
