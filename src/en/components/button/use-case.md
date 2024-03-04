---
title: Button
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: buttonEN
  title: Button
  locale: en
  parent: componentsEN
  otherNames: call to action, CTA.
  description: An interactive object that highlights an action.
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

Use a button for important actions a person using your product can initiate to:

- Give a command related to form data.
- Make a choice or give consent.
- Starting a flow, like a tutorial, or sign in to a secure space.
- Move between steps in a sequence.
- Skip past navigational elements to get to main content.

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">
  <h2 class="mt-0 mb-400">Related components</h2>

<a href="{{ links.link }}" class="link-light">Links</a> to provide navigation to a new page, website, or section on the current page or files for download.

<a href="{{ links.details }}" class="link-light">Details</a> to provide a way to hide or show a section of content.

</article>

## Choose a button type

Set the button type based on the function you need and your product context.

### Button type

Use the button type when you're expecting a person to:

- Delete, copy, or download information.
- Make a binary choice.
- Give consent or agreement.

### Submit type

Use the submit type when you're expecting a person to:

- Send a form or a request.
- Save information.
- Sign in or sign out of a secure space.

### Reset type

Use the reset type when you're expecting a person to:

- Clear data entered on a form.

### Link type

Use the link type when you're expecting a person to:

- Link to other pages or external sites, using the link type.

Note: Always use the [link component]({{ links.link }}) when you need to embed a link in body or paragraph text.

## Choose a button role

A role is a button sub-type that has a specific use on a page.

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Primary button preview" "px-300 py-400" "" %}
  <gcds-button button-role="primary">Primary</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Primary button uses</h3>
    <ul class="list-disc mb-400">
      <li>The most important action on a page.</li>
      <li>Critical actions in a flow or as the default button.</li>
      <li>Only use a single time.</li>
    </ul>
    <p>Note: More than one main call to action on the same page reduces impact and makes it harder for a person to know what to do next.</p>
  </div>
</gcds-grid>
<br/>
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Secondary button preview" "px-300 py-400" "" %}
  <gcds-button button-role="secondary">Secondary</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Secondary button uses</h3>
    <ul class="list-disc mb-400">
      <li>Supporting actions.</li>
      <li>To highlight an important, common action but not the most important one.</li>
      <li>If needed, more than once on a page for important alternative task options.</li>
    </ul>
  </div>
</gcds-grid>
<br/>
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Danger button preview" "px-300 py-400" "" %}
  <gcds-button button-role="danger">Danger</gcds-button>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Danger button uses</h3>
    <ul class="list-disc mb-400">
      <li>To flag serious actions like removing, clearing, or deleting information.</li>
      <li>For actions when changes may be difficult to reverse.</li>
    </ul>
    <p>Tip: For permanent actions, ask a second time so a person explicitly agrees before accepting.</p>
  </div>
</gcds-grid>
</div>
