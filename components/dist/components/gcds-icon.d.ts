import type { Components, JSX } from "../types/components";

interface GcdsIcon extends Components.GcdsIcon, HTMLElement {}
export const GcdsIcon: {
    prototype: GcdsIcon;
    new (): GcdsIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
