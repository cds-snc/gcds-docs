---
title: Search
translationKey: searchresults
layout: 'layouts/base.njk'
hidesearch: true
nocrawl: true
date: 'git Last Modified'
eleventyNavigation:
  key: searchresultsEN
  title: Search
  locale: en
  order: 5
  hideMain: true
---

# Search results

<gcds-search
  action="/en/search"
  search-id="ds-search"
  placeholder="GC Design System"
  id="searchbar"
>
</gcds-search>

<gcds-text size="small">
  Don’t include personal information (telephone, email, SIN, financial, medical, or work details).
</gcds-text>

<div id="results-count"></div>

<div id="results"></div>

<div id="pagination"></div>
