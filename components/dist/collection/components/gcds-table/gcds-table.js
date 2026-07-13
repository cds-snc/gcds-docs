import { Host, h, } from "@stencil/core";
import { createTable, } from "@tanstack/table-core";
import { assignLanguage } from "../../utils/utils";
import I18N from "./i18n/i18n";
import { buildInitialSorting, buildTableOptions, updateTableOptions, parseSizeOptions, } from "./utils/table-helpers";
import { getSortIcon, getSortTitle, renderTableStatus, renderFilterSortModal, renderFilterPills, renderSortPills, } from "./utils/render-helpers";
/**
 * A table is a structured layout of related data in rows and columns.
 *
 * @slot caption - Slot to give an accessible name to the table, so that assistive technologies can identify it and announce it.
 * @slot cell:<field> - Slot to assign HTML content to a table cell, where <field> corresponds to the `field` property of a column definition.
 */
export class GcdsTable {
    constructor() {
        // ─── Props ────────────────────────────────────────────────────────────────
        /** Column definitions */
        this.columns = [];
        /** Row data */
        this.data = [];
        /** Enable global column sorting (can be overridden per column) */
        this.sort = false;
        /** Enable pagination */
        this.pagination = false;
        /** Current page index */
        this.paginationCurrentPage = 1;
        /** Number of rows per page */
        this.paginationSize = 10;
        /**
         * Available page-size options.
         * Use 0 to represent "All rows".
         */
        // prettier-ignore
        this.paginationSizeOptions = [10, 25, 50, 0];
        /** Enable global filter */
        this.filter = false;
        /** Current filter string */
        this.filterValue = '';
        // ─── Internal state ───────────────────────────────────────────────────────
        this.sorting = [];
        // @ts-ignore - this is used in building table options
        this.columnFilters = [];
        this.globalFilter = this.filterValue;
        this.paginationState = {
            pageIndex: Math.max(0, this.paginationCurrentPage - 1),
            pageSize: this.pagination
                ? this.paginationSize === 0
                    ? Number.MAX_SAFE_INTEGER
                    : this.paginationSize
                : Number.MAX_SAFE_INTEGER,
        };
        // TanStack table instance (not reactive – mutations trigger re-renders via @State)
        this.table = null;
        this.lastEmittedRowIds = '';
        // Flags to help stop multiple rendering on first load
        this.isInitializing = true;
        this.hasRenderedOnce = false;
        // Store initial values to determine if they have been changed by the user
        // @ts-ignore - these are used in event handlers to reset filter/sort state
        this.initialFilter = this.filterValue;
        // @ts-ignore - these are used in event handlers to reset filter/sort state
        this.initialSorting = [];
    }
    // ─── Watchers ─────────────────────────────────────────────────────────────
    onColumnsChange(newVal) {
        if (this.isInitializing)
            return;
        if (typeof newVal === 'string') {
            try {
                this.columns = JSON.parse(newVal);
            }
            catch (e) {
                console.error('[gcds-table] Invalid JSON in column-data:', e);
            }
        }
        updateTableOptions(this);
        this.syncSlottedElements();
    }
    onDataChange(newVal) {
        if (this.isInitializing)
            return;
        if (typeof newVal === 'string') {
            try {
                this.data = JSON.parse(newVal);
            }
            catch (e) {
                console.error('[gcds-table] Invalid JSON in data property:', e);
            }
        }
        updateTableOptions(this);
        this.syncSlottedElements();
    }
    onSortChange() {
        if (this.isInitializing)
            return;
        this.onDataChange(this.data);
    }
    onPaginationChange(newVal) {
        if (this.isInitializing)
            return;
        if (newVal) {
            this.paginationState = {
                pageIndex: Math.max(0, this.paginationCurrentPage - 1),
                pageSize: this.paginationSize === 0
                    ? Number.MAX_SAFE_INTEGER
                    : this.paginationSize,
            };
        }
        else {
            this.paginationState = {
                pageIndex: Math.max(0, this.paginationCurrentPage - 1),
                pageSize: Number.MAX_SAFE_INTEGER,
            };
        }
        this.onDataChange(this.data);
    }
    onPageChange(newPage) {
        var _a;
        if (this.isInitializing)
            return;
        newPage = Math.round(newPage);
        this.paginationState = Object.assign(Object.assign({}, this.paginationState), { pageIndex: Math.max(0, newPage - 1) });
        (_a = this.table) === null || _a === void 0 ? void 0 : _a.setOptions(prev => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { pagination: this.paginationState }) })));
    }
    onPageSizeChange(newSize) {
        var _a, _b, _c, _d;
        if (this.isInitializing)
            return;
        newSize = Math.round(newSize);
        const totalRows = (_c = (_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getPreFilteredRowModel()) === null || _b === void 0 ? void 0 : _b.rows.length) !== null && _c !== void 0 ? _c : 0;
        if (newSize === 0) {
            this.paginationState = {
                pageIndex: 0,
                pageSize: totalRows === 0 ? 1 : totalRows,
            };
        }
        else {
            this.paginationState = {
                pageIndex: this.paginationState.pageIndex + 1 > Math.ceil(totalRows / newSize)
                    ? 0
                    : this.paginationState.pageIndex,
                pageSize: newSize === 0 ? totalRows : newSize,
            };
        }
        (_d = this.table) === null || _d === void 0 ? void 0 : _d.setOptions(prev => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { pagination: this.paginationState }) })));
    }
    onSizeOptionsChange(newVal) {
        if (this.isInitializing)
            return;
        this.paginationSizeOptions = parseSizeOptions(newVal);
        updateTableOptions(this);
    }
    onFilterValueChange(newVal) {
        var _a;
        if (this.isInitializing)
            return;
        if (!this.filter && newVal !== '') {
            this.filterValue = '';
            return;
        }
        this.globalFilter = newVal;
        (_a = this.table) === null || _a === void 0 ? void 0 : _a.setOptions(prev => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { globalFilter: this.globalFilter }) })));
    }
    onLangChange(newVal) {
        if (this.isInitializing)
            return;
        this.lang = newVal;
    }
    // ─── Helpers ──────────────────────────────────────────────────────────────
    initTable() {
        this.table = createTable(buildTableOptions(this));
    }
    emitStateChangeIfDirty() {
        var _a, _b;
        const rows = (_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getRowModel().rows) !== null && _b !== void 0 ? _b : [];
        // Compute a stable fingerprint of the current visible row set
        const rowIdFingerprint = rows.map(r => r.id).join(',');
        // Only emit if the visible rows have actually changed
        if (rowIdFingerprint === this.lastEmittedRowIds)
            return;
        this.lastEmittedRowIds = rowIdFingerprint;
        this.gcdsTableStateChange.emit({
            visibleRows: rows.map((row, rowIndex) => ({
                rowId: row.id,
                rowIndex,
                original: row.original,
            })),
            page: this.paginationState.pageIndex + 1,
            pageSize: this.paginationSize,
            filterValue: this.filterValue,
            sorting: this.sorting.length > 0 ? this.sorting : null,
        });
    }
    sortEnabled() {
        var _a;
        return (this.sort || ((_a = this.columns) !== null && _a !== void 0 ? _a : []).some(col => col.sort));
    }
    getTemplate(columnKey) {
        return this.el.querySelector(`template[slot="cell:${columnKey}"]`);
    }
    applyBindings(el, row) {
        const bindings = Array.from(el.attributes).filter(attr => attr.name.startsWith('data-bind'));
        for (const binding of bindings) {
            let prop;
            let value;
            if (binding.name === 'data-bind-template') {
                prop = 'textContent';
                value = binding.value.replace(/\{(\w+)\}/g, (_, field) => { var _a; return String((_a = row[field]) !== null && _a !== void 0 ? _a : ''); });
            }
            else if (binding.name === 'data-bind') {
                prop = 'textContent';
                value = row[binding.value];
            }
            else if (binding.name.startsWith('data-bind-template-')) {
                prop = binding.name.replace('data-bind-template-', '');
                value = binding.value.replace(/\{(\w+)\}/g, (_, field) => { var _a; return String((_a = row[field]) !== null && _a !== void 0 ? _a : ''); });
            }
            else {
                prop = binding.name.replace('data-bind-', '');
                value = row[binding.value];
            }
            if (prop in el) {
                el[prop] = value;
            }
            else {
                el.setAttribute(prop, String(value !== null && value !== void 0 ? value : ''));
            }
        }
    }
    /*
     * Clone elements from templates to use in slots
     */
    createSlottedElements() {
        var _a, _b;
        const slottedColumns = this.columns.filter(s => s.slotted && !s.managed);
        const rows = (_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getCoreRowModel().rows) !== null && _b !== void 0 ? _b : [];
        rows.forEach(row => {
            slottedColumns.forEach(column => {
                const slotName = this.getManagedSlotName(row.id, column.field);
                const template = this.getTemplate(column.field);
                if (!template)
                    return;
                const clone = template.content.cloneNode(true);
                const wrapper = document.createElement('span');
                wrapper.setAttribute('slot', slotName);
                wrapper.appendChild(clone);
                const child = wrapper.querySelector('*');
                if (child) {
                    this.applyBindings(child, row.original);
                    child.row = row.original;
                    child.column = column;
                    child.rowIndex = row.index;
                    child.value = row.getValue(column.field);
                }
                this.el.appendChild(wrapper);
            });
        });
    }
    syncSlottedElements() {
        var _a, _b;
        const slottedColumns = this.columns.filter(s => s.slotted && !s.managed);
        if (slottedColumns.length === 0)
            return;
        const rows = (_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getCoreRowModel().rows) !== null && _b !== void 0 ? _b : [];
        // Index slotted elements
        const existingMap = new Map();
        this.el.querySelectorAll('[slot^="cell-"]').forEach(el => {
            existingMap.set(el.getAttribute('slot'), el);
        });
        // Check if slotted elements already exist or need to be created based on rows
        rows.forEach(row => {
            slottedColumns.forEach(column => {
                const slotName = this.getManagedSlotName(row.id, column.field);
                const existing = existingMap.get(slotName);
                if (existing) {
                    // Slot already in the DOM — just refresh its bindings.
                    const child = existing.querySelector('*');
                    if (child) {
                        this.applyBindings(child, row.original);
                        child.row = row.original;
                        child.column = column;
                        child.rowIndex = row.index;
                        child.value = row.getValue(column.field);
                    }
                    // Mark as handled so it isn't removed below.
                    existingMap.delete(slotName);
                }
                else {
                    // New row/column combination — create from scratch.
                    const template = this.getTemplate(column.field);
                    if (!template)
                        return;
                    const clone = template.content.cloneNode(true);
                    const wrapper = document.createElement('span');
                    wrapper.setAttribute('slot', slotName);
                    wrapper.appendChild(clone);
                    const child = wrapper.querySelector('*');
                    if (child) {
                        this.applyBindings(child, row.original);
                        child.row = row.original;
                        child.column = column;
                        child.rowIndex = row.index;
                        child.value = row.getValue(column.field);
                    }
                    this.el.appendChild(wrapper);
                }
            });
        });
        // Remove stale slotted elements
        existingMap.forEach(el => el.remove());
    }
    // ─── Event handlers ───────────────────────────────────────────────────────
    /*
     * Handle sort toggling by updating table state
     */
    handleSortToggle(columnId) {
        var _a;
        const col = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getColumn(columnId);
        if (!(col === null || col === void 0 ? void 0 : col.getCanSort()))
            return;
        col.toggleSorting();
    }
    /*
     * Handle page size selection by updating table state and focusing the table
     */
    handlePageSizeSelect(e) {
        const select = e.target;
        const val = Number(select.value);
        this.paginationSize = val;
    }
    /*
     * Handle pagination control clicks by updating table state and focusing the table
     */
    handlePaginationClick(e) {
        var _a, _b;
        this.paginationCurrentPage = e.detail.page;
        // focus table here to ensure keyboard users can navigate from pagination controls to table rows
        (_a = this.shadowElement) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = this.shadowElement) === null || _b === void 0 ? void 0 : _b.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    getManagedSlotName(row, columnField) {
        return `cell-${row}-${columnField}`;
    }
    // ─── Methods ────────────────────────────────────────────────────────────
    async getVisibleRows() {
        var _a, _b;
        return ((_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getRowModel().rows.map(row => ({
            rowId: row.id,
            rowIndex: row.index,
            original: row.original,
        }))) !== null && _b !== void 0 ? _b : []);
    }
    // ─── Lifecycle ────────────────────────────────────────────────────────────
    componentWillLoad() {
        this.isInitializing = true;
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        // Validate if information is being passed as JSON strings and parse it
        if (typeof this.columns === 'string') {
            try {
                this.columns = JSON.parse(this.columns);
            }
            catch (e) {
                console.error(e);
            }
        }
        if (typeof this.data === 'string') {
            try {
                this.data = JSON.parse(this.data);
            }
            catch (e) {
                console.error(e);
            }
        }
        this.paginationSizeOptions = parseSizeOptions(this.paginationSizeOptions);
        // Seed initial sort from sortDirection column definitions
        if (this.sortEnabled()) {
            this.sorting = buildInitialSorting(this.columns);
        }
        this.initialSorting = this.sorting;
        this.paginationState = {
            pageIndex: Math.max(0, this.paginationCurrentPage - 1),
            pageSize: this.pagination
                ? this.paginationSize === 0
                    ? Number.MAX_SAFE_INTEGER
                    : this.paginationSize
                : Number.MAX_SAFE_INTEGER,
        };
        this.initTable();
        if (this.table) {
            this.createSlottedElements();
        }
        this.isInitializing = false;
    }
    componentDidRender() {
        if (!this.hasRenderedOnce) {
            this.hasRenderedOnce = true;
            return;
        }
        this.emitStateChangeIfDirty();
    }
    // ─── Render ───────────────────────────────────────────────────────────────
    render() {
        var _a;
        if (!this.table)
            return null;
        const headerGroups = this.table.getHeaderGroups();
        const rows = this.pagination
            ? this.table.getPaginationRowModel().rows
            : this.table.getRowModel().rows;
        return (h(Host, null, h("section", { class: "gcds-table" }, this.el.querySelector('[slot="caption"]') && (h("div", { id: "gcds-table__caption" }, h("slot", { name: "caption" }))), (this.filter || this.sortEnabled()) && renderFilterSortModal(this), h("div", { class: "gcds-table__active-pills" }, this.filter && renderFilterPills(this.filterValue, this.lang, () => {
            this.filterValue = '';
            updateTableOptions(this);
        }), renderSortPills(this.sorting, this.table, this.lang, (columnId) => {
            this.sorting = this.sorting.filter(s => s.id !== columnId);
            updateTableOptions(this);
        })), h("div", { class: "gcds-table__row-management" }, this.pagination && (h("div", { class: "gcds-table__page-size" }, h("gcds-select", { label: I18N[this.lang].rowsPerPage, name: "page-size", selectId: "gcds-table-page-size", value: this.paginationSize.toString(), onChange: e => this.handlePageSizeSelect(e) }, this.paginationSizeOptions.map(opt => (h("option", { key: opt, value: opt }, opt === 0 ? I18N[this.lang].all : opt)))))), h("span", { class: "gcds-table__page-info", role: "status", "aria-live": "polite" }, renderTableStatus(this.el, this.table, this.paginationState, this.lang))), h("table", { class: "gcds-table__table", tabindex: "-1", "aria-labelledby": this.el.querySelector('[slot="caption"]')
                ? 'gcds-table__caption'
                : undefined, ref: el => {
                if (el)
                    this.shadowElement = el;
            } }, h("thead", null, headerGroups.map(hg => (h("tr", { key: hg.id }, hg.headers.map(header => {
            var _a;
            const colDef = ((_a = this.columns) !== null && _a !== void 0 ? _a : []).find(c => c.field === header.id);
            const canSort = header.column.getCanSort();
            const alignmentClass = (colDef === null || colDef === void 0 ? void 0 : colDef.alignment)
                ? `alignment-${colDef.alignment}`
                : '';
            const iconName = getSortIcon(header.column);
            return (h("th", { key: header.id, class: `gcds-table__th ${alignmentClass}`, scope: "col", "aria-sort": header.column.getIsSorted() === 'asc'
                    ? 'ascending'
                    : header.column.getIsSorted() === 'desc'
                        ? 'descending'
                        : canSort
                            ? 'none'
                            : undefined }, canSort ? (h("button", { onClick: () => this.handleSortToggle(header.id), title: getSortTitle(header.column, this.lang) }, colDef === null || colDef === void 0 ? void 0 :
                colDef.header, iconName && (h("gcds-icon", { name: iconName, class: "gcds-table__sort-icon", "aria-hidden": "true" })))) : (colDef === null || colDef === void 0 ? void 0 : colDef.header)));
        }))))), h("tbody", null, rows.length === 0 ? (h("tr", null, h("td", { class: "gcds-table__empty", colSpan: ((_a = this.columns) !== null && _a !== void 0 ? _a : []).length }, this.filter && this.filterValue !== '' ? (h("div", null, h("gcds-heading", { tag: "h3", "heading-role": "secondary", "margin-top": "0", "margin-bottom": "100" }, I18N[this.lang].noResultsHeading), h("gcds-text", { "text-role": "secondary", "margin-bottom": "200" }, I18N[this.lang].noResultsText), h("gcds-button", { onClick: () => (this.filterValue = this.initialFilter) }, I18N[this.lang].noResultsClearFilter))) : (h("div", null, h("gcds-heading", { tag: "h3", "heading-role": "secondary", "margin-top": "0", "margin-bottom": "100" }, I18N[this.lang].noDataHeading), h("gcds-text", { "text-role": "secondary", "margin-bottom": "0" }, I18N[this.lang].noDataText)))))) : (rows.map(row => (h("tr", { key: row.id, "data-test": row.id, class: "gcds-table__row" }, row.getVisibleCells().map(cell => {
            var _a, _b;
            const colDef = ((_a = this.columns) !== null && _a !== void 0 ? _a : []).find(c => c.field === cell.column.id);
            const isSlotted = colDef === null || colDef === void 0 ? void 0 : colDef.slotted;
            let cellContent;
            let Tag = 'td';
            let scope = {};
            // Check if table header in row
            if (colDef === null || colDef === void 0 ? void 0 : colDef.rowHeader) {
                Tag = 'th';
                scope = {
                    scope: 'row',
                };
            }
            const fallbackValue = String((_b = cell.getValue()) !== null && _b !== void 0 ? _b : '');
            cellContent = !isSlotted ? (fallbackValue) : (h("slot", { name: this.getManagedSlotName(row.id, cell.column.id) }, fallbackValue));
            return (h(Tag, Object.assign({ key: cell.id, class: `gcds-table__td${(colDef === null || colDef === void 0 ? void 0 : colDef.alignment) ? ` alignment-${colDef.alignment}` : ''}`, "data-column": colDef === null || colDef === void 0 ? void 0 : colDef.header, "data-cell": `${cell.column.id}-${row.id}` }, scope), cellContent));
        }))))))), (this.pagination && this.paginationSize !== 0 && rows.length != 0) &&
            (this.table.getFilteredRowModel().rows.length > this.paginationSize) &&
            (h("gcds-pagination", { display: "list", currentPage: this.paginationState.pageIndex + 1, totalPages: this.table.getPageCount(), label: I18N[this.lang].paginationLabel, onGcdsClick: e => this.handlePaginationClick(e), lang: this.lang })))));
    }
    static get is() { return "gcds-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./gcds-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-table.css"]
        };
    }
    static get properties() {
        return {
            "columns": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | TableColumn[]",
                    "resolved": "TableColumn[] | string",
                    "references": {
                        "TableColumn": {
                            "location": "import",
                            "path": "./utils/table-helpers",
                            "id": "src/components/gcds-table/utils/table-helpers.ts::TableColumn",
                            "referenceLocation": "TableColumn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column definitions"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "columns",
                "defaultValue": "[]"
            },
            "data": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | object[]",
                    "resolved": "object[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Row data"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data",
                "defaultValue": "[]"
            },
            "sort": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable global column sorting (can be overridden per column)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sort",
                "defaultValue": "false"
            },
            "pagination": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable pagination"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pagination",
                "defaultValue": "false"
            },
            "paginationCurrentPage": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current page index"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pagination-current-page",
                "defaultValue": "1"
            },
            "paginationSize": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of rows per page"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pagination-size",
                "defaultValue": "10"
            },
            "paginationSizeOptions": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | number[]",
                    "resolved": "number[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Available page-size options.\nUse 0 to represent \"All rows\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pagination-size-options",
                "defaultValue": "[10, 25, 50, 0]"
            },
            "filter": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable global filter"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "filter",
                "defaultValue": "false"
            },
            "filterValue": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current filter string"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "filter-value",
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "sorting": {},
            "columnFilters": {},
            "globalFilter": {},
            "paginationState": {},
            "lang": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsTableStateChange",
                "name": "gcdsTableStateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GcdsTableStateChange",
                    "resolved": "GcdsTableStateChange",
                    "references": {
                        "GcdsTableStateChange": {
                            "location": "import",
                            "path": "./utils/table-helpers",
                            "id": "src/components/gcds-table/utils/table-helpers.ts::GcdsTableStateChange",
                            "referenceLocation": "GcdsTableStateChange"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "getVisibleRows": {
                "complexType": {
                    "signature": "() => Promise<{ rowId: string; rowIndex: number; original: Record<string, unknown>; }[]>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Record": {
                            "location": "global",
                            "id": "global::Record"
                        }
                    },
                    "return": "Promise<{ rowId: string; rowIndex: number; original: Record<string, unknown>; }[]>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "columns",
                "methodName": "onColumnsChange"
            }, {
                "propName": "data",
                "methodName": "onDataChange"
            }, {
                "propName": "sort",
                "methodName": "onSortChange"
            }, {
                "propName": "pagination",
                "methodName": "onPaginationChange"
            }, {
                "propName": "paginationCurrentPage",
                "methodName": "onPageChange"
            }, {
                "propName": "paginationSize",
                "methodName": "onPageSizeChange"
            }, {
                "propName": "paginationSizeOptions",
                "methodName": "onSizeOptionsChange"
            }, {
                "propName": "filterValue",
                "methodName": "onFilterValueChange"
            }, {
                "propName": "lang",
                "methodName": "onLangChange"
            }];
    }
}
