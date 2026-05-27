import { getCoreRowModel, getSortedRowModel, getPaginationRowModel, getFilteredRowModel, } from "@tanstack/table-core";
const buildInitialSorting = (columns) => {
    return (columns !== null && columns !== void 0 ? columns : [])
        .filter(col => col.sortDirection)
        .map(col => ({
        id: col.field,
        desc: col.sortDirection === 'desc',
    }));
};
const buildColumnDefs = (columns, sort) => {
    return (columns !== null && columns !== void 0 ? columns : []).map(col => ({
        id: col.field,
        accessorKey: col.field,
        header: col.header,
        // Per-column sort: falls back to global `sort` prop
        enableSorting: col.sort !== undefined ? col.sort : sort,
    }));
};
const buildTableOptions = (GcdsTable) => {
    var _a;
    return {
        data: ((_a = GcdsTable.data) !== null && _a !== void 0 ? _a : []),
        columns: buildColumnDefs(GcdsTable.columns, GcdsTable.sort),
        state: {
            sorting: GcdsTable.sorting,
            columnFilters: GcdsTable.columnFilters,
            globalFilter: GcdsTable.globalFilter,
            pagination: GcdsTable.paginationState,
            columnPinning: {},
        },
        onStateChange: () => { },
        renderFallbackValue: null,
        // Sorting
        enableSorting: GcdsTable.sortEnabled(),
        sortDescFirst: false,
        manualSorting: false,
        onSortingChange: (updater) => {
            var _a;
            GcdsTable.sorting =
                typeof updater === 'function' ? updater(GcdsTable.sorting) : updater;
            (_a = GcdsTable.table) === null || _a === void 0 ? void 0 : _a.setOptions((prev) => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { sorting: GcdsTable.sorting }) })));
        },
        // Filtering
        enableFilters: GcdsTable.filter,
        onGlobalFilterChange: (updater) => {
            var _a;
            GcdsTable.globalFilter =
                typeof updater === 'function'
                    ? updater(GcdsTable.globalFilter)
                    : updater;
            (_a = GcdsTable.table) === null || _a === void 0 ? void 0 : _a.setOptions((prev) => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { globalFilter: GcdsTable.globalFilter }) })));
        },
        // Pagination
        manualPagination: false,
        onPaginationChange: (updater) => {
            var _a;
            GcdsTable.paginationState =
                typeof updater === 'function'
                    ? updater(GcdsTable.paginationState)
                    : updater;
            GcdsTable.paginationCurrentPage = GcdsTable.paginationState.pageIndex + 1;
            (_a = GcdsTable.table) === null || _a === void 0 ? void 0 : _a.setOptions((prev) => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { pagination: GcdsTable.paginationState }) })));
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: GcdsTable.pagination
            ? getPaginationRowModel()
            : undefined,
        getFilteredRowModel: GcdsTable.filter ? getFilteredRowModel() : undefined,
        // Keep pagination active even when disabled so state is consistent
        autoResetPageIndex: true,
    };
};
const updateTableOptions = (GcdsTable) => {
    if (GcdsTable.table) {
        GcdsTable.table.setOptions((prev) => (Object.assign(Object.assign({}, prev), buildTableOptions(GcdsTable))));
        // Force re-render by touching the sorting property
        GcdsTable.sorting = [...GcdsTable.sorting];
    }
};
const parseSizeOptions = (options) => {
    const defaultValue = [10, 25, 50, 0];
    if (typeof options === 'string') {
        try {
            const parsed = JSON.parse(options);
            if (Array.isArray(parsed) &&
                parsed.every(opt => typeof opt === 'number')) {
                return parsed;
            }
            else {
                console.error('[gcds-table] Invalid pagination-size-options format. Expected JSON array of numbers.');
                return defaultValue;
            }
        }
        catch (e) {
            console.error('[gcds-table] Error parsing pagination-size-options:', e);
            return defaultValue;
        }
    }
    if (Array.isArray(options) && options.every(v => typeof v === 'number')) {
        return options;
    }
    console.error('[gcds-table] Invalid pagination-size-options type. Expected string or array of numbers.');
    return defaultValue;
};
export { buildInitialSorting, buildColumnDefs, buildTableOptions, updateTableOptions, parseSizeOptions, };
