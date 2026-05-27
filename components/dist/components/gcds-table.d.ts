import type { Components, JSX } from "../types/components";

interface GcdsTable extends Components.GcdsTable, HTMLElement {}
export const GcdsTable: {
    prototype: GcdsTable;
    new (): GcdsTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
