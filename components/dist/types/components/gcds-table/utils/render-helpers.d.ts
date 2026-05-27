import { type Table, type Column, type PaginationState, type SortingState } from '@tanstack/table-core';
declare const getSortIcon: (column: Column<Record<string, unknown>>) => "arrow-up" | "arrow-down" | "arrow-up-down" | "";
declare const getSortTitle: (column: Column<Record<string, unknown>>, lang: string) => string;
declare const renderActiveBadge: (count: number, lang: string) => HTMLSpanElement;
declare const renderTableStatus: (el: HTMLGcdsTableElement, table: Table<Record<string, unknown>>, paginationState: PaginationState | undefined, lang: string) => string;
declare const renderSortRadios: (element: {
    initialSorting?: SortingState;
    sortRadios?: HTMLGcdsRadiosElement;
    el?: HTMLGcdsTableElement;
    table?: Table<Record<string, unknown>>;
    lang?: string;
}) => any;
declare const renderFilterSortModal: (element: any) => any;
declare const renderFilterPills: (filterValue: string, lang: string, onRemove: () => void) => any;
declare const renderSortPills: (sorting: SortingState, table: Table<Record<string, unknown>>, lang: string, onRemove: (columnId: string) => void) => any;
export { getSortIcon, getSortTitle, renderActiveBadge, renderTableStatus, renderSortRadios, renderFilterSortModal, renderFilterPills, renderSortPills, };
