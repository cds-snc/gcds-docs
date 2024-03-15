---
title: Grid
layout: 'layouts/component-documentation.njk'
translationKey: 'gridCode'
tags: ['gridEN', 'code']
date: 'git Last Modified'
---

## Build a grid

Use grids to create flexible and responsive layouts for various screen sizes. The grid component uses CSS grid to allow for more complex layouts.

## Code and accessibility for grids

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

### Add spacing between columns

- Add space between columns to reduce the cognitive load of reading content too densely packed together.
- Whenever possible, align objects both vertically and horizontally.
- Use the `gap` property to add spacing between your `columns` in the grid.
- Use GC Design System <gcds-link href="{{ links.designTokens }}">design tokens</gcds-link> as a reference for the size of the `gap` in the grid. The tokens measurements match up with the spacing values for the `gap` attribute.

### Choose an option for equal width columns

Opt out of setting the minimum and maximum width when you want to design equal-width columns without width restrictions. This will allow the grid and its columns to scale to the size of the viewport.

**Example displaying 3 columns for desktop, 2 columns for tablet, and 1 column for mobile:**

Desktop

<div class="b-sm mb-400 p-400">
  <gcds-grid tag="article" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" gap="300">
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
  </gcds-grid>
</div>

Tablet

<div class="b-sm mb-400 p-400">
  <gcds-grid tag="article" columns-tablet="1fr 1fr" columns="1fr" gap="300">
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
  </gcds-grid>
</div>

Mobile

<div class="b-sm p-400">
  <gcds-grid tag="article" columns="1fr" gap="300">
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
  </gcds-grid>
</div>

{% viewCode "en" "preview-grid-flexible" "gcds-grid" %}
<gcds-grid tag="article" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" gap="300">

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

<div class="showcase-preview b-sm mb-400 p-400">
  <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))" gap="500">
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
    <p>This is some example content to display the grid component.</p>
  </gcds-grid>
</div>

Tablet

<div class="showcase-preview b-sm mb-400 p-400">
  <div class="container-md">
    <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))" gap="500">
      <p>This is some example content to display the grid component.</p>
      <p>This is some example content to display the grid component.</p>
      <p>This is some example content to display the grid component.</p>
    </gcds-grid>
  </div>
</div>

Mobile

<div class="showcase-preview b-sm p-400">
  <div class="container-sm">
    <gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))" gap="500">
      <p>This is some example content to display the grid component.</p>
      <p>This is some example content to display the grid component.</p>
      <p>This is some example content to display the grid component.</p>
    </gcds-grid>
  </div>
</div>

{% viewCode "en" "preview-grid-fixed-width" "gcds-grid" %}
<gcds-grid tag="article" columns="repeat(auto-fit, minmax(100px, 300px))" gap="500">

  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
</gcds-grid>
{% endviewCode %}

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
