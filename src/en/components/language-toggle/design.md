---
title: Language toggle
layout: 'layouts/component-documentation.njk'
translationKey: 'langtoggleDesign'
tags: ['langtoggleEN', 'design']
date: 'git Last Modified'
---

## Language toggle anatomy

The language toggle provides a link to the page in the other Official Language.

<ol class="anatomy-list">
  <li>The <strong>toggle link</strong> navigates to the page in the other Official Language and appears in short form on smaller screens, or viewports.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-lang-toggle-anatomy.svg" alt="Large screen sized language toggle with “Français” link and small screen sized language toggle with “FR” link. Each individual element of the component has a number pointing to it."/>

## Design and accessibility for the language toggle

### Check language toggle requirements

The language toggle is required in the header on Canada.ca pages and GC sites.

<gcds-details details-title="What’s required on Canada.ca and GC sites" class="mb-300">
  <gcds-text>Always include the language toggle in the header and maintain default settings.</gcds-text>
  <ul class="list-disc">
    <li>Keep the placement in the top right corner of the header where it’s predictable and findable.</li>
    <li>Only include English and French as options.</li>
    <li>In the language toggle link, include the opposite Official Language of the current page.</li>
  </ul>
</gcds-details>

<gcds-details details-title="What’s optional to include on a Canada.ca page" class="mb-300">
  <gcds-text margin-bottom="0">If needed, include links to content in other languages in the content area of the page.</gcds-text>
</gcds-details>
