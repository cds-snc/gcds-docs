import type { Components, JSX } from "../types/components";

interface GcdsAlert extends Components.GcdsAlert, HTMLElement {}
export const GcdsAlert: {
    prototype: GcdsAlert;
    new (): GcdsAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
