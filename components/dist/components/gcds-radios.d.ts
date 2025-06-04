import type { Components, JSX } from "../types/components";

interface GcdsRadios extends Components.GcdsRadios, HTMLElement {}
export const GcdsRadios: {
    prototype: GcdsRadios;
    new (): GcdsRadios;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
