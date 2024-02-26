import type { Components, JSX } from "../types/components";

interface GcdsErrorMessage extends Components.GcdsErrorMessage, HTMLElement {}
export const GcdsErrorMessage: {
    prototype: GcdsErrorMessage;
    new (): GcdsErrorMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
