import type { Components, JSX } from "../types/components";

interface GcdsRadioGroup extends Components.GcdsRadioGroup, HTMLElement {}
export const GcdsRadioGroup: {
    prototype: GcdsRadioGroup;
    new (): GcdsRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
