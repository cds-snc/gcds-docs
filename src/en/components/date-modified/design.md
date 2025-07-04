---
title: Date modified
layout: 'layouts/component-documentation.njk'
translationKey: 'datemodifiedDesign'
tags: ['datemodifiedEN', 'design']
date: 'git Last Modified'
---

## Date modified anatomy

<ol class="anatomy-list">
  <li>The <strong>label</strong> describes the type specified in the value. The label reads either: "Date modified" or "Version" depending on the component type.</li>
  <li>The <strong>value</strong> is either a numerical date formatted as YYYY-MM-DD or a version number.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-date-modified-anatomy.svg" alt="Date modified with 2023-01-30. Each individual element of the component has a number pointing to it." />

## Design and accessibility for date modified

### Check date modified requirements

The date modified is required on Canada.ca pages and GC sites.

<gcds-details details-title="What’s required on Canada.ca and GC sites" class="mb-300">
  <gcds-text>Always include the date modified and maintain default settings.</gcds-text>
  <div>
    <ul class="list-disc">
      <li>Place the date modified component on the left, between the main content of the page and the footer.</li>
      <li>Use the same placement of the date modified component across all web pages to make it findable.</li>
      <li>If your page includes the page feedback tool, place the date modified component below it.</li>
    </ul>
  </div>
</gcds-details>

<gcds-details details-title="What’s optional to include on Canada.ca pages" class="mb-300">
  <gcds-text margin-bottom="0">For applications, use a version number in place of a date.</gcds-text>
</gcds-details>

### Keep the format consistent

- Use the YYYY-MM-DD date format across all web pages.
- If using the version type, apply a standard version number format across all products.

### When to update the date modified

- Only update the date modified when you make a significant content change.
- Avoid updating for minor corrections, like typos, or small changes to the code.
