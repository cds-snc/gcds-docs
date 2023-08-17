import type { Components, JSX } from "../types/components";

interface GcdsRadio extends Components.GcdsRadio, HTMLElement {}
export const GcdsRadio: {
  prototype: GcdsRadio;
  new (): GcdsRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
