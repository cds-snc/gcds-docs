import type { Components, JSX } from "../types/components";

interface GcdsText extends Components.GcdsText, HTMLElement {}
export const GcdsText: {
    prototype: GcdsText;
    new (): GcdsText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
