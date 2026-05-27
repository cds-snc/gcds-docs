---
title: Table
layout: 'layouts/component-documentation.njk'
translationKey: 'tableCode'
tags: ['tableEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for tables](#coding-and-accessibility-for-tables)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for tables

### Use the correct component name

- Use `gcds-table` in HTML, Vue, or React.
- Use `gcds-table-ng` in Angular.

### Define your columns and data

To build a table, you need at minimum to define the columns and the data.

- Use the `columns` attribute to define the table’s columns and their behaviour.
- Use the `data` attribute to populate the table with content.

### Provide an accessible caption

Use the `caption` slot to give an accessible name to the table, so that assistive technologies can identify it and announce it.

### Add filtering for narrowing results

Set `filter` to `true` to allow filtering, so people can narrow down results by keyword.

### Add sorting for reordering data

- Set `sort` to `true` to allow people to sort the table by column, so they can reorganize data by priority, recency, or magnitude, for example.
- If the table has a default sort order that reflects how people are most likely to first read the data, set it using the `sortDirection` property in the relevant column object.

### Add pagination for managing large datasets

- Set `pagination` to true to split data into pages.
- Adjust `pagination-size-options` to control how many rows are shown per page.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)
- [Slots](#section-slot)


<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `columns`

Use the `columns` attribute to define the columns of the table. Pass an array of objects, where each object defines a column and controls how it looks and behaves.

Each column object takes the following properties:

- `alignment`: Use `alignment` to control how the content inside the column cells is positioned horizontally. Set to `start` to align content to the left, `center` to align it to the middle, or `end` to align it to the right.
- `field`: Use `field` to define the unique id that connects the column to the correct data. The value must match the key used for that data in your data object.
- `header`: Use `header` to set the column heading that appears at the top of the column.
- `rowHeader`: Set `rowHeader` to true if you want to mark each cell in the column as a row header. Row headers label what each row is about.
- `slotted`: Set `slotted` to true to flag that the cell will render custom content. To see how each framework handles this, go to [Framework-specific slots for custom content](#framework-specific-slots-for-custom-content).
- `sort`: Set `sort` to `true` to allow people to sort the table by that column.
- `sortDirection`: Use `sortDirection` to set a default sort order for the column when the page loads. Set to `asc` for ascending order or `desc` for descending order.

#### `data`

Use `data` to pass the content of the table. Pass an array of objects where each object represents one row, and each key matches a column `field`.

[Preview and code snippet]

#### `filter`

Set `filter` to `true` to display a filter input, so people can narrow down results by keyword.

[Preview and code snippet]

#### `filter-value`

Use `filter-value` to set a default keyword in the filter input, so some rows are already filtered when the table loads. By default, there’s no set value.

[Preview and code snippet]

#### `pagination`

Set `pagination` to `true` to split the table into pages when there are many rows. By default, `pagination` is set to `false`.

[Preview and code snippet]

#### `pagination-current-page`

Use `pagination-current-page` to set which page is displayed when the table first loads. By default, it’s set to `1`, which shows the first page.

[Preview and code snippet]

#### `pagination-size`

Use `pagination-size `to set how many rows are displayed per page. The default is `10`.

[Preview and code snippet]

#### `pagination-size-options`

Use `pagination-size-options` to define the page size choices available to people in the row control. The default options are `[10, 25, 50, 0]`.

**Note**: Including `0` in the options adds an “All” choice that displays all rows at once. Use with caution on large datasets, as it may affect performance.

[Preview and code snippet]

#### `sort`

Set `sort` to `true` to allow users to sort the table by clicking on column headers. Set to `false` to disable sorting across all columns. By default, `sort` is set to `false`.

**Note**: The `sort` property in each column object has the final say. If a column sets `sort` to false, that column will not be sortable even if the table-level `sort` is set to `true`.

[Preview and code snippet]

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `caption`

Use the `caption` slot to give an accessible name to the table, so that assistive technologies can identify it and announce it.

[Preview and code snippet]

#### Framework-specific slots for custom content

Use custom cell content when you need something more than plain text in a cell, like a link, image, or button. To enable custom content for a column, set `slotted` to `true` in your column object.

Each framework handles custom cell content differently. HTML, Vue, and Angular use slots or directives, while React uses the `renderCell` property.

<gcds-details details-title="HTML example">

  Use the `cell:<field>` slot to define custom content for a specific column. Replace `<field>` with the `field` name you set in the column object.

  Use `data-bind-*` to pass a row value directly into an attribute.

  Use `data-bind-template-*` when you need to insert a row value inside a string before assigning it to an attribute. For example, use it to build an image’s `alt` and `src` attributes.

  If interactive elements need to use the row data in their functions, you can use the properties of `row`, `rowIndex`, `column` and `value` through `this`.

  [Preview and code snippet for HTML]

</gcds-details>

<gcds-details details-title="Vue example">

  Use the `#<field>` slot to define custom content for a specific column. Replace `<field>` with the `field` name you set in the column object.

  Use `{ row }` to access row data inside the slot.

  [Preview and code snippet for Vue]

</gcds-details>

<gcds-details details-title="Angular example">

  Use the `gcdsCell=”<field>”` directive to assign custom cell content to the correct column.

  If interactive elements need to use the row data in their functions, you can use the properties of `row`, `rowIndex`, `column` and `value` through `let-*`.

  [Preview and code snippet for Angular]

</gcds-details>

<gcds-details details-title="React example">

  Use the `renderCell` property to define the content to render in the cell. Unlike the other frameworks, React uses a `renderCell` property instead of slots. This property extends the column object with a function that returns what to display.

  [Preview and code snippet for React]

</gcds-details>

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-table properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-table--events-properties&lang=en"
  width="1200"
  height="1050"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
