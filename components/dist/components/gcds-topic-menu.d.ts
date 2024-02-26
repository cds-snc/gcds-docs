import type { Components, JSX } from "../types/components";

interface GcdsTopicMenu extends Components.GcdsTopicMenu, HTMLElement {}
export const GcdsTopicMenu: {
    prototype: GcdsTopicMenu;
    new (): GcdsTopicMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
