import type { Components, JSX } from "../types/components";

interface GcdsNotice extends Components.GcdsNotice, HTMLElement {}
export const GcdsNotice: {
    prototype: GcdsNotice;
    new (): GcdsNotice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
