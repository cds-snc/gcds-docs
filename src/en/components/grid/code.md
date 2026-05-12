---
title: Grid
layout: 'layouts/component-documentation.njk'
translationKey: 'gridCode'
tags: ['gridEN', 'code']
date: 'git Last Modified'
templateEngineOverride: njk,md
---

## On this page

- [Coding and accessibility for grids](#coding-and-accessibility-for-grids)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for grids

### Adjust layouts to optimize the experience on different screen sizes

- Optimize each grid component for the different screen sizes a person will use — or switch between — when they visit your site or use your product.
- Adapt for mobile, tablet, and large screens by defining each viewport layout for that grid component.
  - Smaller screens, like mobile devices, typically display a single column layout.
  - Medium-sized screens, like tablets, a single or 2-column layout.
  - Larger screens, like desktop, a 3- or 4- column layout.
- Use the `columns` property to add your layout for smaller screens or if you are using the same layout for all screens.
- Use the `columns-tablet` property to set your tablet layout **(48em and 768px and above)** or if you are using the same layout for medium and large screens.
- Use the `columns-desktop` property to define your layout for larger screens **(64em and 1024px and above)**.

Tip: Keep layouts simple. Consider optimizing each layout for mobile, tablet, and desktop to provide a better user experience for all viewports.

### Maintain standard tag usage to be accessible

By default, the `tag` property is set to use a `div` tag.

- Opt to change the tag to a context-appropriate value using standard tags. For example, when using an unordered list set the tag property to `ul`.
- Choose a tag from the list of available options for grid in the code builder. Using established standards for HTML tags that are semantic increase the accessibility of the content and improves the experience for everyone.

### Add spacing between columns

- Use the `gap` property to add spacing between your `columns` in the grid.
- Use GC Design System <a href="{{ links.designTokens }}">design tokens</a> as a reference for the size of the `gap` in the grid. The tokens measurements match up with the spacing values for the `gap` attribute (150-800).

### Choose an option for equal width columns

Opt out of setting the minimum and maximum width when you want to design equal-width columns without width restrictions. This will allow the grid and its columns to scale to the size of the viewport.

**Example displaying 3 columns for desktop, 2 columns for tablet, and 1 column for mobile:**

Desktop

<div class="b-sm mb-300 p-300">
  <gcds-grid tag="article" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
  </gcds-grid>
</div>

Tablet

<div class="b-sm mb-300 p-300">
  <gcds-grid tag="article" columns-tablet="1fr 1fr" columns="1fr">
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
  </gcds-grid>
</div>

Mobile

<div class="b-sm p-300">
  <gcds-grid tag="article" columns="1fr">
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
  </gcds-grid>
</div>

{% viewCode 'en', 'preview-grid-flexible', 'gcds-grid' %}
<gcds-grid tag="article" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">

<p>This is some example content to display the grid component.</p>
<p>This is some example content to display the grid component.</p>
<p>This is some example content to display the grid component.</p>
</gcds-grid>
{% endviewCode %}

Set the minimum and maximum width to design equal-width columns with restrictions to limit how wide they will span on any screen size.

- Set a minimum width when you want to prevent a column from being too narrow in smaller viewports.
- Set a maximum width when you want to prevent a column from being too wide in larger viewports.

**Example uses equal-width columns with a minimum width of 6.25rem (100px) and a maximum width of 18.75rem (300px) for all screen sizes:**

Desktop

<div class="showcase-preview b-sm mb-300 p-300">
  <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))">
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
  </gcds-grid>
</div>

Tablet

<div class="showcase-preview b-sm mb-300 p-300">
  <div class="container-md">
    <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))">
      <p>This is some example content to display the grid component.</p>
      <p>This is some example content to display the grid component.</p>
      <p>This is some example content to display the grid component.</p>
    </gcds-grid>
  </div>
</div>

Mobile

<div class="showcase-preview b-sm p-300">
  <div class="container-sm">
    <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))">
      <p>This is some example content to display the grid component.</p>
      <p>This is some example content to display the grid component.</p>
      <p>This is some example content to display the grid component.</p>
    </gcds-grid>
  </div>
</div>

{% viewCode 'en', 'preview-grid-fixed-width', 'gcds-grid' %}
<gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))">

<p>This is some example content to display the grid component.</p>
<p>This is some example content to display the grid component.</p>
<p>This is some example content to display the grid component.</p>
</gcds-grid>
{% endviewCode %}

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `align-content`

The `align-content` attribute sets the alignment of the grid along the block (column) axis when the total grid size is less than the size of its grid container. The available options are:

- `center`
- `end`
- `space-around`
- `space-between`
- `space-evenly`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "220", "example-styled-items examples-grid" %}
<gcds-grid align-content="space-between" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `align-items`

The `align-items` attribute sets the alignment of grid items along the block (column) axis. The available options are:

- `baseline`
- `center`
- `end`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "220", "example-styled-items" %}
<gcds-grid align-items="baseline" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p class="pb-800">2</p>
  <p class="pt-900">3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `alignment`

The `alignment` attribute sets the grid’s alignment if the grid container’s size is smaller than the parent’s size. The available options are:

- `center`
- `end`
- `start`

<!-- Force line break -->

{% examplesPreview "120", "example-styled-items" %}
<gcds-grid alignment="end" container="sm" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `columns`

The `columns` attribute defines the default number of grid columns for all viewports if `columns-tablet` and `columns-desktop` are not defined. Option to set different layouts for desktop with `columns-desktop` and for tablet with `columns-tablet`.

{% examplesPreview "220", "example-styled-items" %}
<gcds-grid columns="1fr 1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `columns-desktop`

The `columns-desktop` attribute provides the option to set a different number of grid columns for desktop screens.

{% examplesPreview "140", "example-styled-items" %}
<gcds-grid columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `columns-tablet`

The `columns-tablet` attribute provides the option to set a different number of grid columns for tablet screens. If `columns-desktop` is not defined, `columns-tablet` will be used to define the number of columns for desktop as well.

{% examplesPreview "220", "example-styled-items" %}
<gcds-grid columns-tablet="1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `container`

The `container` attribute defines the grid container size. The available options are:

- `full`
- `xl`
- `lg`
- `md`
- `sm`
- `xs`

<!-- Force line break -->

{% examplesPreview "140", "example-styled-items examples-grid-container" %}
<gcds-grid container="sm" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `display`

The `display` attribute defines the element as a `grid` or `inline-grid` container. The available options are:

- `grid` (default)
- `inline-grid`

<!-- Force line break -->

{% examplesPreview "140", "example-styled-items" %}
<gcds-grid display="inline-grid" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `gap`

The `gap` attribute defines the horizontal and vertical spacing between items in a grid container for all viewports if `gap-tablet` and `gap-desktop` are not defined. Option to set different spacing for desktop with `gap-desktop` and for tablet with `gap-tablet`.

{% examplesPreview "230", "example-styled-items" %}
<gcds-grid gap="450" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `gap-desktop`

The `gap-desktop` attribute provides the option to set horizontal and vertical spacing between items in a grid container for desktop screens.

{% examplesPreview "230", "example-styled-items" %}
<gcds-grid gap-desktop="800" gap="400" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `gap-tablet`

The `gap-tablet` attribute provides the option to set horizontal and vertical spacing between items in a grid container for tablet screens. If `gap-desktop` is not defined, `gap-tablet` will be used to define the spacing for desktop screens as well.

{% examplesPreview "240", "example-styled-items" %}
<gcds-grid gap-tablet="500" gap="400" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `justify-content`

The `justify-content` attribute sets the alignment of the grid along the inline (row) axis if the total grid size is less than the size of its grid container. The available options are:

- `center`
- `end`
- `space-around`
- `space-between`
- `space-evenly`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "140", "example-styled-items" %}
<gcds-grid justify-content="center" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `justify-items`

The `justify-items` attribute sets the alignment of the grid items along the inline (row) axis. The available options are:

- `center`
- `end`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "140", "example-styled-items" %}
<gcds-grid justify-items="center" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

#### `place-content`

The `place-content` attribute sets both the `align-content` and `justify-content` attributes. The available options are:

- `center`
- `end`
- `space-around`
- `space-between`
- `space-evenly`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "220", "example-styled-items" %}
<gcds-grid place-content="space-around" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `place-items`

The `place-items` attribute sets both the `align-items` and `justify-items` attributes. The available options are:

- `center`
- `end`
- `start`
- `stretch`

<!-- Force line break -->

{% examplesPreview "220", "example-styled-items" %}
<gcds-grid place-items="end" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</gcds-grid>
{% endexamplesPreview %}

#### `tag`

The `tag` attribute sets the HTML element used to render the grid container. By default, it is set to `div`. The available options are:

- `div` (default)
- `article`
- `aside`
- `dl`
- `main`
- `nav`
- `ol`
- `section`
- `ul`

<!-- Force line break -->

{% examplesPreview "140", "example-styled-items" %}
<gcds-grid tag="article" columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

<!-- ----- Slots section ----- -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for placing the grid items.

{% examplesPreview "140", "example-styled-items" %}
<gcds-grid columns-tablet="1fr 1fr 1fr" columns="1fr">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</gcds-grid>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-grid properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-grid--events-properties&lang=en"
  width="1200"
  height="2250"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
