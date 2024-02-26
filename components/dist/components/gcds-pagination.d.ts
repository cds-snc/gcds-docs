import type { Components, JSX } from "../types/components";

interface GcdsPagination extends Components.GcdsPagination, HTMLElement {}
export const GcdsPagination: {
    prototype: GcdsPagination;
    new (): GcdsPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
