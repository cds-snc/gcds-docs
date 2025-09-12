---
title: Grid rows
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsGridRowsEN
  title: Grid rows
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'grid-rows-1'
    style: 'grid-template-rows: repeat(1, minmax(0, 1fr));'
  - class: 'grid-rows-2'
    style: 'grid-template-rows: repeat(2, minmax(0, 1fr));'
  - class: 'grid-rows-3'
    style: 'grid-template-rows: repeat(3, minmax(0, 1fr));'
  - class: 'grid-rows-4'
    style: 'grid-template-rows: repeat(4, minmax(0, 1fr));'
  - class: 'grid-rows-5'
    style: 'grid-template-rows: repeat(5, minmax(0, 1fr));'
  - class: 'grid-rows-6'
    style: 'grid-template-rows: repeat(6, minmax(0, 1fr));'
  - class: 'grid-rows-7'
    style: 'grid-template-rows: repeat(7, minmax(0, 1fr));'
  - class: 'grid-rows-8'
    style: 'grid-template-rows: repeat(8, minmax(0, 1fr));'
  - class: 'grid-rows-9'
    style: 'grid-template-rows: repeat(9, minmax(0, 1fr));'
  - class: 'grid-rows-10'
    style: 'grid-template-rows: repeat(10, minmax(0, 1fr));'
  - class: 'grid-rows-11'
    style: 'grid-template-rows: repeat(11, minmax(0, 1fr));'
  - class: 'grid-rows-12'
    style: 'grid-template-rows: repeat(12, minmax(0, 1fr));'
  - class: 'grid-rows-none'
    style: 'grid-template-rows: none;'
translationKey: 'shortcutsGridRows'
date: 'git Last Modified'
---

# Grid rows

The grid rows class sets the `grid-template-rows` property. It controls how space in a grid container is divided into rows. It sets how many rows the grid will have and the height of each row.

{% include "partials/shortcuts-table.njk" %}

## Examples

### 1 row<br/>`grid-rows-1`

This container uses a grid layout with 1 row. The 12 items are stacked horizontally in a single row. Each items occupies its own column.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-1 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 2 rows<br/>`grid-rows-2`

This container uses a grid layout with 2 rows. The 12 items are laid out in 2 rows and 6 columns. Each items up 50% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-2 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 3 rows<br/>`grid-rows-3`

This container uses a grid layout with 3 rows. The 12 items are laid out in 4 rows and 3 columns. Each item takes up 33.33% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-3 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 4 rows<br/>`grid-rows-4`

This container uses a grid layout with 4 rows. The 12 items are laid out in 4 rows and 3 columns. Each item takes up 25% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-4 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 5 rows<br/>`grid-rows-5`

This container uses a grid layout with 5 rows. The 12 items are laid out in 5 rows and 3 columns. Each item takes up 20% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-5 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 6 rows<br/>`grid-rows-6`

This container uses a grid layout with 6 rows. The 12 items are laid out in 6 rows and 2 columns. Each items takes up 16.67% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-6 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 7 rows<br/>`grid-rows-7`

This container uses a grid layout with 7 rows. The 12 items are laid out in 7 rows and 2 columns. Each items takes up 14.29% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-7 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 8 rows<br/>`grid-rows-8`

This container uses a grid layout with 8 rows. The 12 items are laid out in 8 rows and 2 columns. Each item takes up 12.5% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-8 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 9 rows<br/>`grid-rows-9`

This container uses a grid layout with 9 rows. The 12 items are laid out in 9 rows and 2 columns. Each item takes up 11.11% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-9 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 10 rows<br/>`grid-rows-10`

This container uses a grid layout with 10 rows. The 12 items are laid out in 10 rows and 2 columns. Each item takes up 10% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-10 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 11 rows<br/>`grid-rows-11`

This container uses a grid layout with 11 rows. The 12 items are laid out in 11 rows and 2 columns. Each item takes up 9.09% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-11 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### 12 rows<br/>`grid-rows-12`

This container uses a grid layout with 12 rows. The 12 items are laid out in 12 rows and 1 column. Each item takes up 8.33% of the available container height.

{% shortcutPreview "example-styled-items example-grid-row" %}

<div class="d-grid grid-rows-12 gap-300">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</div>
{% endshortcutPreview %}

### None<br/>`grid-rows-none`

This container removes any explicit row definition. Each row’s height will be determined by its content unless other sizing rules are applied.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-rows-none gap-300">
  <p>No rows are defined, and the grid layout is not applied.</p>
  <p>No rows are defined, and the grid layout is not applied.</p>
  <p>No rows are defined, and the grid layout is not applied.</p>
</div>
{% endshortcutPreview %}
