import type { Components, JSX } from "../types/components";

interface GcdsButton extends Components.GcdsButton, HTMLElement {}
export const GcdsButton: {
    prototype: GcdsButton;
    new (): GcdsButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
