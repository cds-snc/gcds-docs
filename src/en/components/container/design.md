---
title: Container
layout: 'layouts/component-documentation.njk'
translationKey: 'containerDesign'
tags: ['containerEN', 'design']
date: 'git Last Modified'
---

## Container anatomy

<ol class="anatomy-list">
  <li>The <strong>container</strong> groups content together in a limited space that can hold text, images or other components. The width can be adjusted, for example, to limit the length of a line of text.</li>
  <li>The <strong>optional border</strong> surrounds the container showing the width.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-container-anatomy.svg" alt="The container component with numbers pointing to individual parts of the container anatomy." />

## Design and accessibility for containers

### Limit width of content

- Keep text line length below 75 characters for a comfortable, accessible reading length.
- Limit container width to stop large screens from displaying lines of text that are overly long and difficult to read.
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
