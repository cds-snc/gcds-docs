---
title: Search
layout: 'layouts/component-documentation.njk'
translationKey: 'searchDesign'
tags: ['searchEN', 'design']
date: 'git Last Modified'
---

## Search anatomy

<ol class="anatomy-list">
  <li>The <strong>input field</strong> is a space to enter search keywords.</li>
  <li>The <strong>placeholder text</strong> is a prompt visible before a person types. It identifies the search area.</li>
  <li>The <strong>button</strong>, labelled with a magnifying glass, initiates a search.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-search-anatomy.svg" alt="A search box with the words “Search Canada.ca” inside next to a magnifying glass button immediately on the right. Each individual element of the component has a number pointing to it." />

## Design and accessibility for search

### Check search requirements

Here’s what’s required for search on GC sites.

- Search is required in the <gcds-link href="{{ links.header }}">header</gcds-link> on Canada.ca standard and campaign pages.
- It's optional for other Canada.ca pages and GC sites.

<gcds-details details-title="What’s required on a Canada.ca standard or campaign page" class="mb-300">
  <gcds-text>Always include the search in the header of a standard or campaign page and maintain the default settings.</gcds-text>
  <ul class="list-disc">
    <li>Use default GC Search indexing.</li>
    <li>Set indexing across Canada.ca content or at an institution or program level.</li>
    <li>For a Canada.ca site-wide search, maintain the default search prompt text “Search Canada.ca” in English and <span lang="fr">“Rechercher dans Canada.ca”</lang> in French.</li>
    <li>For an institution, program, or product specific search, use the following search prompt text:
      <ul class="ms-300">
        <li>“Search [institution/program/product]” in English</li>
        <li>“<span lang="fr">Rechercher dans [institution/programme/produit]</span>” in French</li>
      </ul>
    </li>
  <li>Avoid acronyms unless necessary to shorten text for accessibility.</li>
  </ul>
  <gcds-text margin-bottom="0"><strong>Note:</strong> As an exception, pages solely intended for a public service audience may apply a customized search indexation in particular contexts.</gcds-text>
</gcds-details>

<gcds-details details-title="What’s optional to include on a Canada.ca standard or campaign page" class="mb-300">
  <gcds-text margin-bottom="0">Opt to add a search for other datasets within the content area of the page.</gcds-text>
</gcds-details>

### Opt to set up an additional search

- If a secondary search is needed with other datasets, place that search within the content area of the page.
- Clearly identify the search area, so a person searching understands the constraints ahead of time.
