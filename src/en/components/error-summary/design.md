---
title: Error summary
layout: 'layouts/component-documentation.njk'
translationKey: 'errorsummaryDesign'
tags: ['errorsummaryEN', 'design']
---

## Error summary anatomy

<ol class="anatomy-list">
  <li>The <strong>heading</strong> communicates that there's a problem. This is set by default and can be edited to be more specific.</li>
  <li>The <strong>error summary</strong> is a collection of error messages on the page, listed in order of their appearance on the form.</li>
  <li>The <strong>error summary item</strong> links to the error context and includes the same text as the error message (a call to action statement to address the error).</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-error-summary-anatomy.svg" alt="Button anatomy showing the Button label branching to the container and arrow icon." />

## Design and accessibility for error summaries

### Create usable error summaries

Keep in mind that errors interrupt the flow of a person's action in your product. This can be jarring and uncomfortable.

- Provide a clear path to fixing the error. Errors elicit an emotional response that is heightened when the problem is difficult or impossible to resolve.
- Make the <gcds-link href="{{ links.errorMessage }}">error message</gcds-link> and recovery obvious to get a person back on task and regain momentum.
- Keep the error summary list readable with short and specific error messages.
- Limit the number of form components on a page that require a response.

### Use the error summary with your own component instances

- Add error messages for your own (non-GC Design System) component instances in your forms.
- Match the error summary item content to each of your error messages.
- Order errors in the error summary in the same order that they appear on the form.
