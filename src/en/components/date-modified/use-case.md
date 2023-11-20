---
title: Date modified
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: datemodifiedEN
  title: Date modified
  locale: en
  parent: componentsEN
  otherNames: last updated, version date.
  description: A timestamp of the last page update.
  thumbnail: /images/common/components/preview-date-modified.svg
  alt: Date Modified showing timestamp of the last page update.
  tag: Core
  state: published
translationKey: 'datemodified'
tags: ['datemodifiedEN', 'usage']
permalink: /en/components/date-modified/
date: 'git Last Modified'
---

## Problems date modified solves

Use date modified to:

- Log the date that a web page was last changed.
- Identify an application’s current version.

<article class="bg-full-width bg-primary text-light pt-500 pb-400 my-500">
  <h2 class="mt-0 mb-400">Related components</h2>

<a href="{{ links.footer }}" class="link-light">Footer</a> for placing the Government of Canada branded footer landmark.

</article>

## Component types

<div class="remove-empty-p">
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Date type preview" "px-300 py-400" "" %}
  <gcds-date-modified>2023-08-22</gcds-date-modified>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Date type</h3>
    <p class="mb-400">Use the date type to:</p>
    <ul class="list-disc mb-400">
      <li>Identify the date a web page or website was last changed.</li>
    </ul>
  </div>
</gcds-grid>
<br/>
<gcds-grid columns="1fr" columns-tablet="1fr 2fr" gap="500" align-items="start">
  {% componentPreview "Version type preview" "px-300 py-400" "" %}
  <gcds-date-modified type="version">1.0.0</gcds-date-modified>
  {% endcomponentPreview %}
  <div>
    <h3 class="mb-400">Version type</h3>
    <p class="mb-400">Use the Version type to:</p>
    <ul class="list-disc mb-400">
      <li>Identify the current version of an application.</li>
    </ul>
  </div>
</gcds-grid>
</br>
