---
title: Container
layout: 'layouts/component-documentation.njk'
translationKey: 'containerCode'
tags: ['containerEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for containers](#coding-and-accessibility-for-containers)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for containers

### Limit width of content

- Keep text line length below 65 characters for a comfortable, accessible reading length.
- Limit column width to stop large screens from displaying lines of text that are overly long and difficult to read.
- Avoid exceeding the maximum width of 71.25rem (1140px) wide.

### Add a container size

The `size` property sets the size of the container. It comes in 6 sizes:

| Size   | REM      | Pixels (Px) |
| ------ | -------- | ----------- |
| `full` | 100%     | 100%        |
| `xl`   | 71.25rem | 1140px      |
| `lg`   | 62rem    | 992px       |
| `md`   | 48rem    | 768px       |
| `sm`   | 30rem    | 480px       |
| `xs`   | 20rem    | 320px       |

<br/>

By default, the container size will be set to `full` which means it will take up the entire width of the parent container.

### Align content with the page layout

Use `layout="page"` to visually align page content with the [header]({{ links.header }}) and [footer]({{ links.footer }}).

When `layout` is set to `page`, the container:

- Uses a maximum width of 71.25rem (1140px).
- Is centred automatically within the viewport.
- Switches to 90% width on smaller screens.
- Matches the layout behaviour of the header and footer components.

Using `layout="page"` ensures content maintains a consistent width, alignment, and reading experience across breakpoints. When `layout` is set to `page`, there is no need to define a container `size` or set `alignment`, as the page layout automatically controls width and alignment.

### Position the container

Use the `alignment` attribute to control how a container is positioned within its parent. It supports three options:

- `start` - position the container horizontally to the start of the available space.
- `center` - centres the container horizontally.
- `end` - position the container horizontally to the end of the available space.

**Note:** When the `layout` attribute is set to `page`, the `alignment` attribute is ignored, the page layout automatically manages width and centring.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `alignment`

The `alignment` attribute sets how the container is positioned within its parent. This property is ignored when `layout` is set to `page`, as the `page` `layout` has higher priority. The available options are:

- `center`
- `end`
- `start`

<!-- Force line break -->

{% examplesPreview "130" %}
<gcds-container alignment="center" size="sm" border padding="300">
  <p>Container</p>
</gcds-container>
{% endexamplesPreview %}

#### `border`

The `border` attribute controls whether the container has a border or not.

{% examplesPreview "130" %}
<gcds-container border padding="300">
  <p>Container</p>
</gcds-container>
{% endexamplesPreview %}

#### `layout`

The `layout` attribute sets how the container aligns with the page layout. The available options are:

- `full`
- `page`

<!-- Force line break -->

{% examplesPreview "130" %}
<gcds-container layout="full" border padding="300">
  <p>Container</p>
</gcds-container>
{% endexamplesPreview %}

#### `margin`

The `margin` attribute sets the container margin. Left and right margins are not applied if the container’s alignment attribute is defined, since alignment has higher priority.

{% examplesPreview "270" %}
<gcds-container margin="800" size="xs" border padding="300">
  <p>Container</p>
</gcds-container>
{% endexamplesPreview %}

#### `padding`

The `padding` attribute sets the container’s padding, which is the inner spacing between the container’s border and its content.

{% examplesPreview "190" %}
<gcds-container padding="600" border>
  <p>Container</p>
</gcds-container>
{% endexamplesPreview %}

#### `size`

The `size` attribute sets the width of the container. The available options are:

- `full` (default)
- `xl`
- `lg`
- `md`
- `sm`
- `xs`

<!-- Force line break -->

{% examplesPreview "130" %}
<gcds-container size="sm" border padding="300">
  <p>Container</p>
</gcds-container>
{% endexamplesPreview %}

#### `tag`

The `tag` attribute sets the HTML element used to render the container. By default, it is set to `div`.

{% examplesPreview "130" %}
<gcds-container tag="section" border padding="300">
  <p>Container</p>
</gcds-container>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

The `default` slot is for adding content inside the container.

{% examplesPreview "130" %}
<gcds-container border padding="300">
  <p>Container</p>
</gcds-container>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-container properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-container--events-properties&lang=en"
  width="1200"
  height="1500"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
