import type { Components, JSX } from "../types/components";

interface GcdsHeader extends Components.GcdsHeader, HTMLElement {}
export const GcdsHeader: {
    prototype: GcdsHeader;
    new (): GcdsHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
