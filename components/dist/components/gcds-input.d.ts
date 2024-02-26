import type { Components, JSX } from "../types/components";

interface GcdsInput extends Components.GcdsInput, HTMLElement {}
export const GcdsInput: {
    prototype: GcdsInput;
    new (): GcdsInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
