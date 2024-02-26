import type { Components, JSX } from "../types/components";

interface GcdsHeading extends Components.GcdsHeading, HTMLElement {}
export const GcdsHeading: {
    prototype: GcdsHeading;
    new (): GcdsHeading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
