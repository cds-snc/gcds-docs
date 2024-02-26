import type { Components, JSX } from "../types/components";

interface GcdsCard extends Components.GcdsCard, HTMLElement {}
export const GcdsCard: {
    prototype: GcdsCard;
    new (): GcdsCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
