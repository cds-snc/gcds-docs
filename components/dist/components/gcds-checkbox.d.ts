import type { Components, JSX } from "../types/components";

interface GcdsCheckbox extends Components.GcdsCheckbox, HTMLElement {}
export const GcdsCheckbox: {
    prototype: GcdsCheckbox;
    new (): GcdsCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
