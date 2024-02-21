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

- Keep text line length below 75 characters for a comfortable, accessible reading length.
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

### Centre the container

Containers are not centered automatically. To centre a container on a page, add the `centered` property.

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
