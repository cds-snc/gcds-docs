import { h, Fragment } from "@stencil/core";
import { updateTableOptions } from "./table-helpers";
import I18N from "../i18n/i18n";
// ─── Render helpers ───────────────────────────────────────────────────────
/* Get appropriate sort icon based on column's sort state
 * @param column - the column to get the sort icon for
 * Returns an empty string if the column is not sortable, an up arrow if sorted ascending, a down arrow if sorted descending, and a generic sort icon if sortable but not currently sorted.
 */
const getSortIcon = (column) => {
    if (!(column === null || column === void 0 ? void 0 : column.getCanSort()))
        return '';
    const sorted = column.getIsSorted();
    if (sorted === 'asc')
        return 'arrow-up';
    if (sorted === 'desc')
        return 'arrow-down';
    return 'arrow-up-down';
};
/* Get appropriate sort button title based on column's sort state
 * @param column - the column to get the sort title for
 * @param lang - the current language for internationalization
 * Returns a string indicating the current sort state and the action that will be taken if the button is pressed.
 */
const getSortTitle = (column, lang) => {
    let sortText = '';
    if (column.getIsSorted() === 'asc') {
        sortText = I18N[lang].headingActivateDesc;
    }
    else if (column.getIsSorted() === 'desc') {
        sortText = I18N[lang].headingRemoveSort;
    }
    else if (column.getIsSorted() === false) {
        sortText = I18N[lang].headingActivateAsc;
    }
    return `${column.columnDef.header} ${sortText}`;
};
/* Get the current active sort badge based on the number of active sorting columns
 * @param count - the number of active sorting columns
 * @param lang - the current language for internationalization
 * Returns a badge element with the count of active sorting columns.
 */
const renderActiveBadge = (count, lang) => {
    return (h("span", { class: "gcds-table__active-count", "aria-label": `${I18N[lang].activeBadgeLabel.replace('{count}', count)}` }, count));
};
/* Get the current table status text based on the pagination and filtering state
 * @param el - the table element containing the current filter and pagination state
 * @param table - the TanStack Table instance to get row counts from
 * @param paginationState - the current pagination state to determine page index and size
 * @param lang - the current language for internationalization
 * Returns a string describing the current table status, such as how many rows are being shown, how many total rows there are, and how many match the current filter.
 */
const renderTableStatus = (el, table, paginationState, lang) => {
    var _a, _b;
    const currentPageIndex = (_a = paginationState === null || paginationState === void 0 ? void 0 : paginationState.pageIndex) !== null && _a !== void 0 ? _a : 0;
    const totalRows = table.getPreFilteredRowModel().rows.length;
    const filteredRows = table.getFilteredRowModel().rows.length;
    const paginationSize = (_b = paginationState === null || paginationState === void 0 ? void 0 : paginationState.pageSize) !== null && _b !== void 0 ? _b : 0;
    // Filtered results with multiple pages
    if (el.filter &&
        el.filterValue &&
        el.pagination &&
        table.getPageCount() > 1) {
        return I18N[lang].showingMatchesPagination
            .replace('{start}', currentPageIndex * paginationSize + 1)
            .replace('{end}', Math.min((currentPageIndex + 1) * paginationSize, totalRows))
            .replace('{filtered}', filteredRows);
        // Filtered results on singular page
    }
    else if (el.filter &&
        el.filterValue &&
        table.getPageCount() === 1) {
        return I18N[lang].showingMatches.replace('{matchNumber}', filteredRows);
        // No results match filter
    }
    else if (el.filter && el.filterValue && filteredRows === 0) {
        return I18N[lang].showingNoMatches;
        // Rows across multiple pages
    }
    else if (!el.filterValue && el.pagination && table.getPageCount() > 1) {
        return I18N[lang].showingPages
            .replace('{start}', currentPageIndex * paginationSize + 1)
            .replace('{end}', Math.min((currentPageIndex + 1) * paginationSize, totalRows))
            .replace('{total}', totalRows);
        // No rows avalable
    }
    else if (table.getRowCount() === 0) {
        return I18N[lang].showingNoRows;
        // Rows on one page
    }
    else {
        return I18N[lang].showingAllRows.replace('{total}', totalRows);
    }
};
const renderSortRadios = (element) => {
    var _a, _b;
    const { el, table, lang } = element;
    const radioOptions = [
        {
            id: 'nosort',
            label: `${I18N[lang].radioLabelNoSort}${((_a = element.initialSorting) === null || _a === void 0 ? void 0 : _a.length) === 0 ? ` — ${I18N[lang].default}` : ''}`,
            value: 'null',
        },
    ];
    let isSorted = 'null';
    ((_b = el === null || el === void 0 ? void 0 : el.columns) !== null && _b !== void 0 ? _b : [])
        .filter(col => col.sort !== false)
        .map(col => {
        var _a, _b, _c, _d;
        if ((_a = table === null || table === void 0 ? void 0 : table.getColumn(col.field)) === null || _a === void 0 ? void 0 : _a.getIsSorted()) {
            isSorted =
                ((_b = table === null || table === void 0 ? void 0 : table.getColumn(col.field)) === null || _b === void 0 ? void 0 : _b.getIsSorted()) === 'asc'
                    ? `asc-${col.field}`
                    : `desc-${col.field}`;
        }
        let ascDefaultLabel = '';
        let descDefaultLabel = '';
        if (((_d = (_c = element.initialSorting) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.id) === col.field) {
            if (element.initialSorting[0].desc) {
                descDefaultLabel = ` — ${I18N[lang].default}`;
            }
            else {
                ascDefaultLabel = ` — ${I18N[lang].default}`;
            }
        }
        radioOptions.push({
            id: `asc-${col.field}`,
            label: `${col.header} (${I18N[lang].ascending})${ascDefaultLabel}`,
            value: `asc-${col.field}`,
        });
        radioOptions.push({
            id: `desc-${col.field}`,
            label: `${col.header} (${I18N[lang].descending})${descDefaultLabel}`,
            value: `desc-${col.field}`,
        });
    });
    return (h("div", { class: "gcds-table__modal-sort" }, h("gcds-heading", { tag: "h3", "margin-top": "0", "margin-bottom": "0" }, h("div", null, h("gcds-icon", { name: "sort", size: "h6", "margin-right": "100", "aria-hidden": "true" }), I18N[lang].sort)), h("gcds-radios", { legend: I18N[lang].sort, "hide-legend": true, name: "sort", autoFocus: true, options: radioOptions, value: isSorted, ref: el => (element.sortRadios = el) })));
};
const getSortValue = (sort) => {
    if (!(sort === null || sort === void 0 ? void 0 : sort.length))
        return 'null';
    const { id, desc } = sort[0];
    return `${desc ? 'desc' : 'asc'}-${id}`;
};
const renderFilterSortModal = element => {
    const { filter, filterValue, lang } = element;
    return (h("div", { class: "gcds-table__filters" }, h("gcds-button", { size: "small", "button-role": "primary", onClick: () => element.filterSortModal.showModal() }, h("div", null, element.filter && element.sortEnabled() ? (h("gcds-icon", { name: "tune", size: "h5", "margin-right": "50" })) : element.filter ? (h("gcds-icon", { name: "filter", size: "h5", "margin-right": "50" })) : (h("gcds-icon", { name: "sort", size: "h5", "margin-right": "50" })), element.filter && element.sortEnabled()
        ? I18N[lang].filterAndSort
        : element.filter
            ? I18N[lang].filter
            : I18N[lang].sort, filter && filterValue && (h(Fragment, null, h("gcds-sr-only", { tag: "span" }, ":"), h("span", { class: "gcds-table__active-count", "aria-label": `${I18N[lang].activeBadgeLabel.replace('{count}', 1)}` }, "1"))))), h("dialog", { class: "gcds-table__modal", "aria-modal": "true", "aria-labelledby": "gcds-table__modal-heading", ref: el => (element.filterSortModal = el) }, h("div", { class: "gcds-table__modal-header" }, h("gcds-heading", { tag: "h2", id: "gcds-table__modal-heading", marginTop: "0", marginBottom: "0" }, I18N[lang].filterAndSort), h("gcds-button", { "button-role": "secondary", onClick: () => {
            element.filterSortModal.close();
            if (element.filter) {
                element.filterInput.value = element.initialFilter;
            }
            if (element.sortEnabled()) {
                element.sortRadios.value = getSortValue(element.initialSorting);
            }
        } }, I18N[lang].modalClose)), h("form", { class: "gcds-table__modal-body", onKeyUp: ev => {
            var _a, _b, _c, _d, _e;
            if (ev.key === 'Enter') {
                if (((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement) === element.filterInput ||
                    ((_d = (_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.activeElement) === element.sortRadios) {
                    ev.preventDefault();
                    (_e = element.filterSortModal.querySelector('form')) === null || _e === void 0 ? void 0 : _e.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                }
            }
        }, onSubmit: ev => {
            var _a;
            ev.preventDefault();
            if (element.filter) {
                element.filterValue = element.filterInput.value;
            }
            if (element.sortEnabled()) {
                const sortValue = element.sortRadios.value;
                if (sortValue === 'null') {
                    element.sorting = [];
                }
                else {
                    const [direction, field] = sortValue.split('-');
                    element.sorting = [
                        {
                            id: field,
                            desc: direction === 'desc',
                        },
                    ];
                }
            }
            updateTableOptions(element);
            element.filterSortModal.close();
            (_a = element.shadowElement) === null || _a === void 0 ? void 0 : _a.focus();
        } }, h("div", { class: "gcds-table__modal-content" }, element.filter && (h("gcds-input", { class: "gcds-table__modal-filter", type: "search", label: I18N[lang].filter, name: "filter", inputId: "gcds-table-filter", autoFocus: true, value: filterValue, ref: el => (element.filterInput = el) })), element.sortEnabled() && renderSortRadios(element)), h("div", { class: "gcds-table__modal-footer" }, h("gcds-button", { "button-role": "secondary", onClick: () => {
            if (element.filter) {
                element.filterInput.value = element.initialFilter;
            }
            if (element.sortEnabled()) {
                element.sortRadios.value = getSortValue(element.initialSorting);
            }
        } }, I18N[lang].modalResetAllButton), h("gcds-button", { "button-role": "primary", type: "submit" }, I18N[lang].modalApplyButton))))));
};
const renderFilterPills = (filterValue, lang, onRemove) => {
    if (!filterValue)
        return null;
    return (h("div", { class: "gcds-table__active-filter" }, h("button", { class: "gcds-table__pill", onClick: onRemove, title: I18N[lang].pillRemoveFilter }, h("gcds-sr-only", { tag: "span" }, I18N[lang].pillFilter), filterValue, h("gcds-icon", { name: "close", size: "text-small" }))));
};
const renderSortPills = (sorting, table, lang, onRemove) => {
    if ((sorting === null || sorting === void 0 ? void 0 : sorting.length) === 0)
        return null;
    return (h("div", { class: "gcds-table__active-sorting" }, h("span", { class: "gcds-table__sort-label" }, I18N[lang].pillSort), sorting === null || sorting === void 0 ? void 0 :
        sorting.map(sort => {
            const column = table.getColumn(sort.id);
            if (!column)
                return null;
            return (h("button", { class: "gcds-table__pill", onClick: () => onRemove(column.id), title: I18N[lang].pillRemoveSort }, `${column.columnDef.header} (${sort.desc ? I18N[lang].descending : I18N[lang].ascending})`, h("gcds-icon", { name: "close", size: "text-small" })));
        })));
};
export { getSortIcon, getSortTitle, renderActiveBadge, renderTableStatus, renderSortRadios, renderFilterSortModal, renderFilterPills, renderSortPills, };
