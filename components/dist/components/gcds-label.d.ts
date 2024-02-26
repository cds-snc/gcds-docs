import type { Components, JSX } from "../types/components";

interface GcdsLabel extends Components.GcdsLabel, HTMLElement {}
export const GcdsLabel: {
    prototype: GcdsLabel;
    new (): GcdsLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
