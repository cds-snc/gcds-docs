import type { Components, JSX } from "../types/components";

interface GcdsDateModified extends Components.GcdsDateModified, HTMLElement {}
export const GcdsDateModified: {
    prototype: GcdsDateModified;
    new (): GcdsDateModified;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
