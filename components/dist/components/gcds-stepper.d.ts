import type { Components, JSX } from "../types/components";

interface GcdsStepper extends Components.GcdsStepper, HTMLElement {}
export const GcdsStepper: {
    prototype: GcdsStepper;
    new (): GcdsStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
