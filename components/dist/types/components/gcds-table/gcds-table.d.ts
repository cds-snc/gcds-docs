import { EventEmitter } from '../../stencil-public-runtime';
import { TableColumn, GcdsTableStateChange } from './utils/table-helpers';
/**
 * A table is a structured layout of related data in rows and columns.
 *
 * @slot caption - Slot to give an accessible name to the table, so that assistive technologies can identify it and announce it.
 * @slot cell:<field> - Slot to assign HTML content to a table cell, where <field> corresponds to the `field` property of a column definition.
 */
export declare class GcdsTable {
    el: HTMLGcdsTableElement;
    private shadowElement;
    private sortRadios;
    private filterInput;
    private filterSortModal;
    /** Column definitions */
    columns: string | TableColumn[];
    /** Row data */
    data: string | object[];
    /** Enable global column sorting (can be overridden per column) */
    sort: boolean;
    /** Enable pagination */
    pagination: boolean;
    /** Current page index */
    paginationCurrentPage: number;
    /** Number of rows per page */
    paginationSize: number;
    /**
     * Available page-size options.
     * Use 0 to represent "All rows".
     */
    paginationSizeOptions: string | number[];
    /** Enable global filter */
    filter: boolean;
    /** Current filter string */
    filterValue: string;
    private sorting;
    private columnFilters;
    private globalFilter;
    private paginationState;
    lang: string;
    gcdsTableStateChange: EventEmitter<GcdsTableStateChange>;
    private table;
    private lastEmittedRowIds;
    private isInitializing;
    private hasRenderedOnce;
    private initialFilter;
    private initialSorting;
    onColumnsChange(newVal: string | TableColumn[]): void;
    onDataChange(newVal: string | object[]): void;
    onSortChange(): void;
    onPaginationChange(newVal: boolean): void;
    onPageChange(newPage: number): void;
    onPageSizeChange(newSize: number): void;
    onSizeOptionsChange(newVal: string | number[]): void;
    onFilterValueChange(newVal: string): void;
    onLangChange(newVal: string): void;
    private initTable;
    private emitStateChangeIfDirty;
    private sortEnabled;
    private getTemplate;
    private applyBindings;
    private createSlottedElements;
    private syncSlottedElements;
    private handleSortToggle;
    private handlePageSizeSelect;
    private handlePaginationClick;
    private getManagedSlotName;
    getVisibleRows(): Promise<{
        rowId: string;
        rowIndex: number;
        original: Record<string, unknown>;
    }[]>;
    componentWillLoad(): void;
    componentDidRender(): void;
    render(): any;
}
