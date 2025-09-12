---
title: Grid columns
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsGridColumnsEN
  title: Grid columns
  locale: en
  parent: shortcutsFlexboxGridEN
  order: 1
shortcuts:
  - class: 'grid-cols-1'
    style: 'grid-template-columns: repeat(1, minmax(0, 1fr));'
  - class: 'grid-cols-2'
    style: 'grid-template-columns: repeat(2, minmax(0, 1fr));'
  - class: 'grid-cols-3'
    style: 'grid-template-columns: repeat(3, minmax(0, 1fr));'
  - class: 'grid-cols-4'
    style: 'grid-template-columns: repeat(4, minmax(0, 1fr));'
  - class: 'grid-cols-5'
    style: 'grid-template-columns: repeat(5, minmax(0, 1fr));'
  - class: 'grid-cols-6'
    style: 'grid-template-columns: repeat(6, minmax(0, 1fr));'
  - class: 'grid-cols-7'
    style: 'grid-template-columns: repeat(7, minmax(0, 1fr));'
  - class: 'grid-cols-8'
    style: 'grid-template-columns: repeat(8, minmax(0, 1fr));'
  - class: 'grid-cols-9'
    style: 'grid-template-columns: repeat(9, minmax(0, 1fr));'
  - class: 'grid-cols-10'
    style: 'grid-template-columns: repeat(10, minmax(0, 1fr));'
  - class: 'grid-cols-11'
    style: 'grid-template-columns: repeat(11, minmax(0, 1fr));'
  - class: 'grid-cols-12'
    style: 'grid-template-columns: repeat(12, minmax(0, 1fr));'
  - class: 'grid-cols-none'
    style: 'grid-template-columns: none;'
translationKey: 'shortcutsGridColumns'
date: 'git Last Modified'
---

# Grid columns

The grid columns class sets the `grid-template-columns` property. It controls how space in a grid container is divided into columns. It sets how wide each column should be and how many columns the grid will have.

{% include "partials/shortcuts-table.njk" %}

## Examples

### 1 column<br/>`grid-cols-1`

This container uses a grid layout with 1 column. The 12 items are stacked vertically in a single column. Each item occupies its own row.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-1 gap-300">
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

### 2 columns<br/>`grid-cols-2`

This container uses a grid layout with 2 columns. The 12 items are laid out in 2 columns and 6 rows. Each item takes up 50% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-2 gap-300">
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

### 3 columns<br/>`grid-cols-3`

This container uses a grid layout with 3 columns. The 12 items are laid out in 3 columns and 4 rows. Each item takes up 33.33% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-3 gap-300">
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

### 4 columns<br/>`grid-cols-4`

This container uses a grid layout with 4 columns. The 12 items are laid out in 4 columns 3 rows. Each item takes up 25% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-4 gap-300">
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

### 5 columns<br/>`grid-cols-5`

This container uses a grid layout with 5 columns. The 12 items are laid out in 5 columns and 3 rows. Each item takes up 20% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-5 gap-300">
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

### 6 columns<br/>`grid-cols-6`

This container uses a grid layout with 6 columns. The 12 items are laid out in 6 columns and 2 rows. Each item takes up 16.67% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-6 gap-300">
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

### 7 columns<br/>`grid-cols-7`

This container uses a grid layout with 7 columns. The 12 items are laid out in 7 columns and 2 rows. Each item takes up 14.29% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-7 gap-300">
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

### 8 columns<br/>`grid-cols-8`

This container uses a grid layout with 8 columns. The 12 items are laid out in 8 columns and 2 rows. Each item takes up 12.5% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-8 gap-300">
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

### 9 columns<br/>`grid-cols-9`

This container uses a grid layout with 9 columns. The 12 items are laid out in 9 columns and 2 rows. Each item takes up 11.11% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-9 gap-300">
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

### 10 columns<br/>`grid-cols-10`

This container uses a grid layout with 10 columns. The 12 items are laid out in 10 columns and 2 rows. Each item takes up 10% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-10 gap-300">
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

### 11 columns<br/>`grid-cols-11`

This container uses a grid layout with 11 columns. The 12 items are laid out in 11 columns and 2 rows. Each item takes up 9.09% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-11 gap-300">
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

### 12 columns<br/>`grid-cols-12`

This container uses a grid layout with 12 columns. The 12 items are laid out in 12 columns and 1 row. Each item takes up 8.33% of the available container width.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-12 gap-300">
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

### None<br/>`grid-cols-none`

This container removes any explicit column definition. No columns are created and children won’t automatically be organized into columns.

{% shortcutPreview "example-styled-items" %}

<div class="d-grid grid-cols-none gap-300">
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
