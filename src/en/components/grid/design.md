---
title: Grid
layout: 'layouts/component-documentation.njk'
translationKey: 'gridDesign'
tags: ['gridEN', 'design']
date: 'git Last Modified'
---

## Grid anatomy

<ol class="anatomy-list">
  <li>The <strong>container</strong> holds all elements within the grid and spans their combined width. The container is  responsive and can be centred.</li>
  <li>The <strong>column</strong>, also called grid item, sets a boundary around its contents to contain it within the width set for that column.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-grid-anatomy.svg" alt="Image showing the grid anatomy with four separate rectangles representing the columns of a grid" />

## Design and accessibility for grids

### Adjust layouts to optimize the experience on different screen sizes

- Optimize each grid component for the different screen sizes a person will use — or switch between — when they visit your site or use your product.
- Adapt for mobile, tablet, and large screens by defining each viewport layout for that grid component.
  - Smaller screens, like mobile devices, typically display a single column layout.
  - Medium-sized screens, like tablets, a single or 2-column layout.
  - Larger screens, like desktop, a 3- or 4- column layout.

Tip: Keep grid layouts simple by designing for mobile, tablet, and desktop experiences that work with any screen size.

### Limit width of content

- Keep text line length below 75 characters for a comfortable, accessible reading length.
- Limit column width to stop large screens from displaying lines of text that are overly long and difficult to read.
- Avoid exceeding the maximum width of 71.25rem (1140px) wide.

### Communicate meaning by adjusting spacing

Choose spacing to support ease of reading and help users better understand the messages you're communicating.

- Use smaller spacing tokens to group related concepts together.
- Use larger spacing tokens to separate elements into logical groups.
