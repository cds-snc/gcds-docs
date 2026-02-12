---
title: Container
layout: 'layouts/component-documentation.njk'
translationKey: 'containerCode'
tags: ['containerEN', 'code']
date: 'git Last Modified'
---

## Build a container

Use containers to add a wrapper element with a defined maximum width, providing a container for other content and components that are typically arranged vertically from top to bottom.

## Code and accessibility for containers

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
