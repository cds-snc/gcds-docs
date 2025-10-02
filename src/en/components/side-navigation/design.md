---
title: Side navigation
layout: 'layouts/component-documentation.njk'
translationKey: 'sidenavigationDesign'
tags: ['sidenavigationEN', 'design']
date: 'git Last Modified'
---

## Side navigation anatomy

<ol class="anatomy-list">
  <li>The <strong>nav landmark label</strong> displays the product or site name and is used by assistive technologies.</li>
  <li>The <strong>nav link</strong> takes a person to a page. The link is highlighted in blue to indicate the current page state.</li>
  <li>The <strong>nav group</strong> displays the group name and expands and collapses the submenu. The submenu is a list of related nav links that are revealed when the nav group expands. The chevron icon points right when the submenu is hidden and down when it’s revealed. </li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-side-nav-anatomy.svg" alt="The side nav image shows 7 elements. 1. The nav landmark label is in larger bolded text at the top, left aligned. 2. The first example of the nav link is just beneath in blue text and underlined and in the second example the text is bolded and highlighted by a light blue rectangle. 3. The nav group is a chevron pointing down followed by bolded text. 4. The submenu points to 3 nav links stacked vertically beneath the nav group."/>

## Design and accessibility for side navigation

### Set the label

- The label can be a shorter version of the full name.
- For logos, include descriptive text.

Note: On mobile, the label does not link to the homepage.

### Choose meaningful nav link text

- Make link text clear and specific to help a person decide if they should leave the current page. Spell out where a person will go or what they’ll find when they select a link.
- Keep link text short and distinctive so a person can scan the links and find what they’re looking for.
- If using breadcrumbs, align the content hierarchy in both sets of links, so each component reflects a similar path through the site.

Tip: Read nav link text aloud in sequence to note similarities in how link text sounds when read by an assistive device.

### Add navigation groups to the side navigation

- Opt to include a second or third level with a navigation group to the side navigation.
- Use a hierarchical structure of up to 3 levels to categorize and order nav group items in a logical manner.
- Nest items into categories consistent with the product’s information architecture.

### Organize nav group items

- Generally, order top level items by importance or highest priority for the person using your service.
- Logically group like items in category sets and base your ordering on the type of information in a set and what it will be used for.
- For known-item searching, order the links alphabetically – or numerically for items represented by numbers.
- Use a sequential order for sets of process-based tasks or information that is time based that could follow a natural chronological order.
- Test category names, divisions, and ordering to use the words and mental models that will be most intuitive to people using them.
