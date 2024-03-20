---
title: Screenreader-only
layout: 'layouts/component-documentation.njk'
translationKey: 'screenreaderonlyDesign'
tags: ['screenreaderonlyEN', 'design']
date: 'git Last Modified'
---

## Screenreader-only anatomy

<ol class="anatomy-list">
  <li><strong>list</strong></li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-screenreader-only-anatomy.svg" alt="TO DO" />

## Design and accessibility for the screenreader-only component

### Write helpful screenreader-only content

- Flag contextual information exclusively communicated through visual styling that’s absent from ‌semantic HTML.
- Keep screenreader-only content clear and very brief. Adding too much text unnecessarily increases the cognitive load.
- Provide additional text content specifically for assistive technologies only when the interface design relies on visual information to communicate.
- Avoid including additional information that’s unavailable in the interface.
- Avoid duplicating any information included in descriptive text (alt-text). If the descriptive text already provides the context, the screenreader-only component may not be needed.
