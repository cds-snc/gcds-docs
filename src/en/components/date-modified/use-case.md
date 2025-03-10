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
  alt: A thick grey line, above a representation the page footer, represents the last page update text.
  tag: Canada.ca required
  state: published
translationKey: 'datemodified'
tags: ['datemodifiedEN', 'usage']
permalink: /en/components/date-modified/
date: 'git Last Modified'
---
Date modified is a required component for Canada.ca pages.

## Problems date modified solves

Use date modified to:

- Log the date that a web page was last changed.
- Identify an application’s current version.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0">Related components</h2>

<a href="{{ links.footer }}" class="link-light">Footer</a> for placing the Government of Canada branded footer landmark.

</article>

## Component types

<div class="remove-empty-p">
<gcds-grid class="mb-300" columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "Date type preview" "px-225 py-300" "" %}
  <gcds-date-modified>2023-08-22</gcds-date-modified>
  {% endcomponentPreview %}
  <div>
    <h3 class="mt-0">Date type</h3>
    <p>Use the date type to:</p>
    <ul class="list-disc mb-300">
      <li>Identify the date a web page or website was last changed.</li>
    </ul>
  </div>
</gcds-grid>

<gcds-grid columns="1fr" columns-tablet="1fr 2fr" align-items="start">
  {% componentPreview "Version type preview" "px-225 py-300" "" %}
  <gcds-date-modified type="version">1.0.0</gcds-date-modified>
  {% endcomponentPreview %}
  <div>
    <h3 class="mt-0">Version type</h3>
    <p>Use the Version type to:</p>
    <ul class="list-disc mb-300">
      <li>Identify the current version of an application.</li>
    </ul>
  </div>
</gcds-grid>
