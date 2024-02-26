import type { Components, JSX } from "../types/components";

interface GcdsFileUploader extends Components.GcdsFileUploader, HTMLElement {}
export const GcdsFileUploader: {
    prototype: GcdsFileUploader;
    new (): GcdsFileUploader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
