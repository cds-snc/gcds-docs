import type { Components, JSX } from "../types/components";

interface GcdsNavGroup extends Components.GcdsNavGroup, HTMLElement {}
export const GcdsNavGroup: {
    prototype: GcdsNavGroup;
    new (): GcdsNavGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
