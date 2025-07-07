---
title: Checkboxes component preview
layout: 'layouts/component-preview.njk'
tags: ['checkboxesEN', 'preview']
eleventyExcludeFromCollections: true
templateEngineOverride: njk
---

<gcds-checkboxes
  legend="Legend"
  hint="Hint / Example message."
  name="checkexample"
  options='[
    {
      "id": "form-check-1",
      "label": "Label",
      "hint": "Description or example to make the option clearer.",
      "value": "check1"
    },
    {
      "id": "form-check-2",
      "label": "Label",
      "hint": "Description or example to make the option clearer.",
      "value": "check2"
    }
  ]'
>
</gcds-checkboxes>
