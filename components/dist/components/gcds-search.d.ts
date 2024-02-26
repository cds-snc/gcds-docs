import type { Components, JSX } from "../types/components";

interface GcdsSearch extends Components.GcdsSearch, HTMLElement {}
export const GcdsSearch: {
    prototype: GcdsSearch;
    new (): GcdsSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
