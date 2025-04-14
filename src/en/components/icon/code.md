---
title: Icon
layout: 'layouts/component-documentation.njk'
translationKey: 'iconCode'
tags: ['iconEN', 'code']
date: 'git Last Modified'
nocrawl: true
---

## Build an icon

Use an icon to emphasize an action or idea.

## Coding and accessibility for icons

### Select a relevant icon

Render an icon by changing the `name` attribute to a corresponding icon name.

<gcds-grid class="bg-light px-300 md:px-500 py-500 md:py-800 b-radius-lg" columns-desktop="repeat(4, 1fr)" columns-tablet="repeat(3, 1fr)" columns="1fr 1fr" tag="ul" gap="300" gap-tablet="450">
  <li class="list-none text-center">
    <gcds-icon name="info-circle" size="h2" label="A filled-in circle with the letter “i” in the centre."></gcds-icon>
    <p class="mb-0"><code>info-circle</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="warning-triangle" size="h2" label="A filled-in triangle with the letter “i” in the centre."></gcds-icon>
    <p class="mb-0"><code>warning-triangle</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="exclamation-circle" size="h2" label="A filled-in circle with an exclamation mark in the centre."></gcds-icon>
    <p class="mb-0"><code>exclamation-circle</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="checkmark-circle" size="h2" label="A filled-in circle with a checkmark in the centre."></gcds-icon>
    <p class="mb-0"><code>checkmark-circle</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="chevron-left" size="h2" label="An arrow pointing left."></gcds-icon>
    <p class="mb-0"><code>chevron-left</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="chevron-right" size="h2" label="An arrow pointing right."></gcds-icon>
    <p class="mb-0"><code>chevron-right</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="chevron-up" size="h2" label="An arrow pointing up."></gcds-icon>
    <p class="mb-0"><code>chevron-up</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="chevron-down" size="h2" label="An arrow pointing down."></gcds-icon>
    <p class="mb-0"><code>chevron-down</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="close" size="h2" label="An “x”."></gcds-icon>
    <p class="mb-0"><code>close</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="download" size="h2" label="An arrow pointing down towards a horizontal line."></gcds-icon>
    <p class="mb-0"><code>download</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="email" size="h2" label="An envelope."></gcds-icon>
    <p class="mb-0"><code>email</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="external" size="h2" label="An arrow pointing outside of the top right corner of a square."></gcds-icon>
    <p class="mb-0"><code>external</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="phone" size="h2" label="A telephone."></gcds-icon>
    <p class="mb-0"><code>phone</code></p>
  </li>
  <li class="list-none text-center">
    <gcds-icon name="search" size="h2" label="A magnifying glass."></gcds-icon>
    <p class="mb-0"><code>search</code></p>
  </li>
</gcds-grid>

### Specify the sizing scale

- Change the size of an icon by setting the `size` attribute to a specific font size, like `text-small` | `text` |  `h1` | `h2` | `h3` | `h4` | `h5` | `h6`.
- Match the icon size to its accompanying text by setting the `size` attribute to `inherit`.
- Set a minimum 24 x 24 pixel height/width for an interactive icon without text. If you can increase the size, 44 x 44 pixels exceeds accessibility standards, but is more accessible.

### Adjust the placement

Add a margin to the left or right of an icon by setting the `margin-left` or `margin-right` attribute to a spacing value, like `0` | `25` | `50` | `75` | `100` | `125` | `150` | `175`| `200` | `225`| `250` | `300` | `350`| `400` | `450` | `500` | `550` | `600` | `650` | `700` | `750` | `800` | `850` | `900` | `950` | `1000` | `1050` | `1100` | `1150` | `1200` | `1250`.

### Set label text

- Use the label property for an icon with no accompanying text.
- You don’t need to use the label property if an icon is decorative.

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-icon properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-icon--events-properties&lang=en"
  width="1200"
  height="950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
