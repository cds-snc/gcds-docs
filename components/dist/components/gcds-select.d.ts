import type { Components, JSX } from "../types/components";

interface GcdsSelect extends Components.GcdsSelect, HTMLElement {}
export const GcdsSelect: {
    prototype: GcdsSelect;
    new (): GcdsSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
