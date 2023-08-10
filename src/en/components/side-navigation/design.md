---
title: Side navigation
layout: "layouts/component-documentation.njk"
translationKey: "sidenavigationDesign"
tags: ['sidenavigationEN', 'design']
date: "git Last Modified"
---

## Side navigation anatomy

<ol class="anatomy-list">
  <li>The <strong>label</strong> identifies the product site using text or a logo. It also labels the navigation landmark which will be used by assistive technologies. </li>
  <li>The <strong>nav link</strong> is a link to a page or section on the product site.</li>
  <li>The <strong>nav group</strong> is a collection of nav links related to the nav group name. It can be collapsed and expanded.</li>
  <li>The <strong>nav group label</strong> identifies the nav group and acts as a button to expand and collapse the nav group.</li>
  <li>The <strong>nav group chevron icon</strong> points up when the nav group is collapsed and down when it’s expanded.</li>
  <li>The <strong>nav link with active indicator</strong> gives visual prominence to the current page.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-side-nav-anatomy.svg" alt="Side navigation anatomy showing the labels the label, the nav link, the nav group, the nav group label, the nav group chevron icon, the nav link with active indicator."/>

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

- Opt to include a second or third level with a navigaßtion group to the side navigation.
- Use a hierarchical structure of up to 3 levels to categorize and order nav group items in a logical manner.
- Nest items into categories consistent with the product’s information architecture.

### Organize nav group items alphabetically

Improve findability in nav groups with 7 or more nav links by ordering the links alphabetically – or numerically for items represented by numbers.
