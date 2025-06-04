import type { Components, JSX } from "../types/components";

interface GcdsCheckboxes extends Components.GcdsCheckboxes, HTMLElement {}
export const GcdsCheckboxes: {
    prototype: GcdsCheckboxes;
    new (): GcdsCheckboxes;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
