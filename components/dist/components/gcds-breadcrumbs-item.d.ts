import type { Components, JSX } from "../types/components";

interface GcdsBreadcrumbsItem extends Components.GcdsBreadcrumbsItem, HTMLElement {}
export const GcdsBreadcrumbsItem: {
    prototype: GcdsBreadcrumbsItem;
    new (): GcdsBreadcrumbsItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
