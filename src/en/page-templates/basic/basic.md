---
title: Basic Page Template
layout: 'layouts/page-templates-overview.njk'
eleventyNavigation:
  key: basicPageTemplateEN
  title: Basic
  locale: en
  parent: pageTemplatesEN
  description: Starting point for any web page. 
  descriptionSecondaryText: Offers a basic, accessible page structure and hierarchy and includes the elements required for most GC pages.
  state: published
#  tag: Canada.ca required
  order: 1
translationKey: 'heading'
tags: ["templates"]
date: "git Last Modified"
github: https://github.com/cds-snc/gcds-examples/blob/feat/add-basic-page-templates/templates/english/basic-page-template.html
figma: https://figma.com
---

# Basic Page Template
The Basic Page template provides accessibility essentials for page structure and heading hierarchy. Brand elements, like the header and footer, make it recognizable as a Government of Canada page.

## When to use
For use on Canada.ca and other GC sites.
The basic page template is for non-specialized pages across Canada.ca and is an optional template. It has the starting elements needed for a simple page and those required for most GC pages. You can use it as a canvas to add or combine <gcds-link href="{{ links.components }}">components</gcds-link> from the GC Design System.

## Preview
<gcds-link external href="{{ links.pageTemplatesBasicPreview }}">Open this example in a new tab</gcds-link>
<div class="b-sm mb-400 p-400">
  <img class="b-sm b-default p-400" src="/images/en/basic_page_template_30p.png" alt="A basic page template includes the Government of Canada header and footer, H1, H2 and H3 heading sections with text underneath each section."/>
</div>


<gcds-link external href="{{ links.pageTemplatesBasicCode }}">Open the code in a new tab</gcds-link>
{% viewCode "en" "basic-page-template-code" "basic-page-template-code" %}{% include 'partials/templates/en/basic-page-template.njk' %}
{% endviewCode %}

## How to implement
To implement page templates into your project or to prototype in HTML, download the specific template you need in GitHub:
- <gcds-link external href="{{ links.pageTemplatesBasicGithubLink }}">Basic page template</gcds-link>
- Basic page table of contents template

To prototype in Figma, find the Basic Page Template (link) in the GC Design System library.

## Design considerations

### Improve navigation on longer pages
Include an "On this page" section with bulleted anchor links for pages with four or more sections. Anchor links  to improve navigation and help people find relevant content.

### Preview "On this page"

- Preview here
- Code here

### Maintain a logical heading structure
- Follow the hierarchy logic within the page template to structure your content for everyone, including people using assistive technology.
- Use appropriate heading levels (H1-H6) to reflect the structure of your content.
- Write clear and consistent headings, and maintain default character limits for each heading line for a comfortable reading length.
- For consistency and accessibility, use GC Design System components like <gcds-link href="{{ links.heading }}">Heading</gcds-link>, <gcds-link href="{{ links.text }}">Text</gcds-link>, and <gcds-link href="{{ links.screenreaderOnly }}">Screenreader-only</gcds-link>.
- For any custom-built elements, follow the Government of Canada’s <gcds-link href="{{ links.tbsStandardsOnWebA11y }}" external>Standard on Web Accessibility</gcds-link>.

## Accessibility highlights
The Basic Page template is built using the following components that meet WCAG 2.1 AA accessibility standards:
- Container
- Date modified
- Footer
- Header (includes search and breadcrumbs)
- Heading
- Link
- Text

The Basic Page template includes:
- A clear heading hierarchy you can use to structure your content logically for everyone, including people using assistive technologies, by following <gcds-link href="{{ links.heading }}">Heading</gcds-link> guidance.  
- GC Design System **tokens** meet level AA of the <gcds-link href="{{ links.wcag }}" external>Web Content Accessibility Guidelines (WCAG 2.1)</gcds-link> colour contrast standards for text and interactive elements and level AAA for both tap targets and visual presentation.