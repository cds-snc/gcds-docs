import type { Components, JSX } from "../types/components";

interface GcdsTextarea extends Components.GcdsTextarea, HTMLElement {}
export const GcdsTextarea: {
    prototype: GcdsTextarea;
    new (): GcdsTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
