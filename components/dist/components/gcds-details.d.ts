import type { Components, JSX } from "../types/components";

interface GcdsDetails extends Components.GcdsDetails, HTMLElement {}
export const GcdsDetails: {
    prototype: GcdsDetails;
    new (): GcdsDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
