---
title: Button
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: buttonEN
  title: Button
  locale: en
  parent: componentsEN
  otherNames: call to action, CTA.
  description: An interactive object that emphasizes an action.
  thumbnail: /images/common/components/preview-button.svg
  alt: A dark blue box with a white box inside of it represents a button with a label.
  state: published
translationKey: 'button'
tags: ['buttonEN', 'usage']
permalink: /en/components/button/
date: 'git Last Modified'
---

Take a look at what buttons do to see if they fit the problem you're solving for. Then select the best subtype, called the button role, for the use case you need to meet.

## Problems buttons solve

Use a button to initiate an action, like:

- Start a task or flow.
- Submit, save, or delete form data.
- Make a choice or give consent.
- Sign in to an account.
- Move forward or back in a sequence.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0">Related components</h2>

<a href="{{ links.link }}" class="link-light">Links</a> to navigate to a new page, website, file, or section on the current page.

<a href="{{ links.details }}" class="link-light">Details</a> to hide or show a section of content.

</article>

## Choose a button type

The button type changes the HTML to do a specific task. Pick the type based on the function you need.

### Button type

Use the button type when you're expecting a person to:

- Delete, copy, or download information.
- Make a binary choice.
- Give consent or agreement.

### Submit type

Use the submit type when you're expecting a person to:

- Send a form or a request.
- Save information.
- Sign in or sign out of an account.

### Reset type

Use the reset type when you're expecting a person to:

- Clear data entered on a form.

Tip: Use the reset type sparingly as it’s a destructive action.

### Link type

Use the link type when you’re expecting a person to:

- Navigate to other pages or external sites.

Note: Use the [link component]({{ links.link }}) when you need to embed a link in paragraph text or navigation bars.

## Choose a button role

The button role changes the styling of a button to visually signal its action. Pick the role that best fits the action.

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "Primary button preview" "px-225 py-300" "mt-500" %}
  <gcds-button button-role="primary">Submit</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3>Primary button</h3>
    <ul class="list-disc mb-300">
      <li>Critical actions in a flow or as the default button.</li>
      <li>Only use a single time.</li>
    </ul>
    <p>Note: More than one main call to action on the same page makes it harder for a person to know what to do next.</p>
  </div>

  {% componentPreview "Start button preview" "px-225 py-300" "mt-500" %}
  <gcds-button button-role="start">Start</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3>Start button</h3>
    <p>Formerly called supertask button.</p>
    <ul class="list-disc mb-300">
      <li>The start of a task or flow.</li>
      <li>Bigger than other buttons, so use by itself and not beside other buttons.</li>
      <li>Only use once on a page.</li>
    </ul>
    <p>Tip: Use either primary button or start button on a page, not both. </p>
  </div>

  {% componentPreview "Secondary button preview" "px-225 py-300" "mt-500" %}
  <gcds-button button-role="secondary">Cancel</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3>Secondary button uses</h3>
    <ul class="list-disc mb-300">
      <li>Supporting actions.</li>
      <li>To highlight a common action but not the most important one.</li>
      <li>Can use more than once on a page if there are multiple secondary options.</li>
    </ul>
  </div>

  {% componentPreview "Danger button preview" "px-225 py-300" "mt-500" %}
  <gcds-button button-role="danger">Delete</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3>Danger button uses</h3>
    <ul class="list-disc mb-300">
      <li>Serious actions like removing, clearing, or deleting information.</li>
      <li>Changes that may be difficult to reverse.</li>
    </ul>
    <p>Tip: For permanent actions, ask a second time so a person explicitly agrees before accepting.</p>
  </div>
</gcds-grid>
</div>
