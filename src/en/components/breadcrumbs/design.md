---
title: Breadcrumbs
layout: 'layouts/component-documentation.njk'
translationKey: 'breadcrumbsDesign'
tags: ['breadcrumbsEN', 'design']
date: 'git Last Modified'
---

## Breadcrumbs anatomy

<ol class="anatomy-list">
  <li>The <strong>Canada.ca link</strong> navigates to the Canada.ca home page in the current language.</li>
  <li>The <strong>chevron</strong> sits between each link and points to the next/subordinate link.</li>
  <li>The <strong>home page link</strong> navigates back to the home page of the current webpage or site.</li>
  <li>The <strong>parent page link</strong> navigates to the parent page of the current page. You can have up to three parent page links in addition to the homepage and the Canada.ca home or 5 in total.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-breadcrumbs-anatomy.svg" alt="Breadcrumbs anatomy showing three links in a row with an arrow icon between them." />

### Breadcrumbs anatomy – with header and H1 title

<ol class="anatomy-list">
  <li>The <gcds-link href="{{ links.header }}"><strong>header</strong></gcds-link> is part of a trusted brand — for apps, forms, or other transactional digital services.</li>
  <li>The <strong>home page link</strong> navigates back to the home page of the current webpage or site.</li>
  <li>The <strong>parent page link</strong> navigates to the parent page of the current page. You can have up to three parent page links in addition to the homepage and the Canada.ca home or 5 in total.</li>
  <li>The <strong>H1 title</strong> is a separate element from the breadcrumbs component. It tells readers what the page or site is about and acts a signpost, giving them a sense of place.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-breadcrumbs-anatomy-with-header.svg" alt="Breadcrumbs anatomy showing three links in a row with an arrow icon between them below the header component." />

## Design and accessibility for breadcrumbs

### Include the right links in your breadcrumbs

- Include only parent page links and leave out the current page. It's stated in the page title, just beneath the breadcrumbs.
- Add up to 3 parent page links if using both the Canada.ca and home page links, for a maximum of 5 breadcrumbs links.
- Avoid duplication by linking each breadcrumb to a unique page.

### Structure breadcrumb levels based on site navigation

Breadcrumbs represent the location of the current page in relation to the site's navigation model.

- Order breadcrumb levels by their corresponding level in the site's hierarchy.
- Avoid using the breadcrumbs component to show progress through the user journey.
- Limit breadcrumbs to 5 levels. Displaying too many levels of breadcrumbs items can be overwhelming.

Tip: If using with other navigation components, like the <gcds-link href="{{ links.topNav }}">top navigation</gcds-link> and <gcds-link href="{{ links.sideNav }}">side navigation</gcds-link>, align both sets of links, so elements reflect a similar path through the site. This provides a consistent navigation experience and helps visitors understand their current location.

### Write specific parent page link text

- Make link text clear and specific to help a person decide if they should leave the current page. Spell out where a person will go or what they'll find when they select a link.
- Keep parent link text short (ideally under 20 characters) and distinctive so a person can scan the links in the breadcrumbs and find what they're looking for.
- Shorten parent page link text to improve readability and reduce space. Where possible, reflect the title of the page in the breadcrumb without including the full page name.

### Place breadcrumbs before the main element

Place breadcrumbs at the top of a page, before the main content. This way a skip-to-content link can work to let a person skip all navigation links, including breadcrumbs.
