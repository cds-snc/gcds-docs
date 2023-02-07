---
title: Checkbox
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-checkbox
figma: https://www.figma.com/community/file/1128687821123298228
permalink: false
tags: ["checkboxEN", "header"]
---

# {{ title }}

`<gcds-checkbox>`

_Also called: checklist, check list._

A checkbox is a question with a set of options for one or multiple selections.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="b-sm text-secondary px-250 py-500">

<gcds-fieldset
          fieldset-id="fieldset"
          legend="Checkbox button group"
          hint="They are in a fieldset"
        >
<gcds-checkbox
            checkbox-id="form-check"
            label="Checkbox option 1"
            hint="This is a hint."
            name="radio"
          ></gcds-checkbox>
<gcds-checkbox
            checkbox-id="form-check1"
            label="Checkbox option 2"
            hint="This is a hint."
            name="radio"
          ></gcds-checkbox>
</gcds-fieldset>

</div>
