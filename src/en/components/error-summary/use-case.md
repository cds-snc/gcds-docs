---
title: Error summary
layout: 'layouts/component-documentation.njk'
eleventyNavigation:
  key: errorsummaryEN
  title: Error summary
  locale: en
  parent: componentsEN
  otherNames: error overview.
  description: A list of user errors on a page or in a flow.
  thumbnail: /images/common/components/preview-error-summary.svg
  alt: A red rectangle holds one thick grey line above a stack of three smaller thick red lines representing a heading and links.
  state: published
translationKey: 'errorsummary'
tags: ['errorsummaryEN', 'usage']
permalink: /en/components/error-summary/
---

Take a look at what problems error summaries solve to see if they fit the problem you're solving for.

GC Design System form components come with default error handling. When a person tries to submit a form, any errors to required components will prompt an error summary.

## Problems that error summaries solve

Use an error summary to interrupt a person who's submitting a form when there is a problem or a series of problems to:

- Make errors obvious so a person knows about them and how to address them.
- List <gcds-link href="{{ links.errorMessage }}">error messages</gcds-link> when a person needs to add information or make a correction to two or more components before they can submit a form.

<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">
  <h2 class="mt-0">Related components</h2>

<a href="{{ links.errorMessage }}" class="link-light">Error message</a> for describing a problem blocking a user action, related to a single component.

</article>
