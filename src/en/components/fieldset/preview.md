---
title: Fieldset component preview
layout: 'layouts/component-preview.njk'
tags: ['fieldsetEN', 'preview']
eleventyExcludeFromCollections: true
templateEngineOverride: njk
---

<gcds-fieldset fieldset-id="fieldset" legend="Legend" hint="Hint / Example message.">
  <gcds-input input-id="form-input" label="Input label" hint="Hint / Example message." size="6">
  </gcds-input>
  <gcds-select select-id="form-select" label="Select label" hint="Hint / Example message." default-value="Select option">

    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
