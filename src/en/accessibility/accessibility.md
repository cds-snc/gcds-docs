---
title: Accessibility
translationKey: accessibility
layout: 'layouts/base.njk'
eleventyNavigation:
  key: accessibilityEN
  title: Accessibility
  locale: en
  order: 4
  hideMain: true
---

# Accessibility in the GC Design System

## Our accessibility standards

The GC Design System meets or exceeds WCAG 2.1 AA, making it fully compliant with <gcds-link external href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=23601"> Government of Canada accessibility standards</gcds-link>. 

Public servants who use the components as intended are creating Government of Canada websites and applications in line with accessibility standards.

## Our accessibility checklist

The entire GC Design System builds in accessibility from the start to meet accessibility standards. This includes this website, as well as design tokens and components.

### Navigation

<gcds-details details-title="Focus states">
  <p>Interactive elements, like buttons, links, and form fields, have clear and visible focus states to guide people who use keyboard navigation.</p>
</gcds-details>

<gcds-details details-title="Keyboard navigation">
  <p>Keyboards can be used to navigate the system by people who cannot use a mouse.</p>
</gcds-details>

<gcds-details details-title="Screen reader compatibility">
  <p>Screen readers can be used to navigate the system by people using assistive technologies.</p>
</gcds-details>

<gcds-details details-title="Responsive design">
  <p>The components are responsive so people have consistent experiences regardless of the device they use.</p>
</gcds-details>

### Visuals

<gcds-details details-title="Colour contrast">
  <p>Text and interface elements meet or exceed the required colour contrast ratios to maintain readability for people with low vision or colour blindness.</p>
</gcds-details>

<gcds-details details-title="Non-colour indicators">
  <p>In addition to colour, visual cues like shapes, icons, or bold text, are used to indicate important information for people with colour blindness.</p> 
</gcds-details>

<gcds-details details-title="Screen magnifier compatibility">
  <p>Screen magnifiers can be used by people with low vision to zoom in on content without losing functionality.</p>
</gcds-details>

<gcds-details details-title="Browsers and assistive plugins compatibility.">
  <p>Accessibility formatting like Accessible Rich Internet Applications (ARIA) roles and landmarks is preserved and works in different environments.</p>
</gcds-details>

<gcds-details details-title="Alt text">
  <p>Images and non-text content include appropriate alt text to provide a description for people relying on screen readers.</p>
</gcds-details>

<gcds-details details-title="ARIA roles and attributes">
  <p>Accessible Rich Internet Applications (ARIA) roles and attributes are used so interactive elements, like menus, buttons, and forms, can be identified and operated by assistive technologies.</p> 
</gcds-details>


### Clarity

<gcds-details details-title="Clear form fields">
  <p>Form fields follow guidance to have accessible labels, clear instructions, and are compatible with assistive technologies.</p>
</gcds-details>

<gcds-details details-title="Clear and specific error messages">
  <p>Clear and actionable guidance appears when there are errors in forms or interactions so people know how to fix the error.</p>
</gcds-details>

## How we test for accessibility

<gcds-details details-title="Automated accessibility testing">
 <p>Before components are released, we leverage automated tools that scan tokens, components, and website for accessibility issues. This early-stage testing allows us to resolve common issues before deeper testing begins.</p>
</gcds-details>

<gcds-details details-title="Manual testing for accessibility needs">
  <p>We conduct testing with people who have accessibility needs, including individuals with various disabilities. This ensures our system is functional and usable in a range of scenarios that automated testing cannot fully capture.</p>
</gcds-details>

<gcds-details details-title="Research and best practices">
  <p>We’re always looking at new accessibility rules and best practices from different industries. We add new findings and suggestions to our design system guidance.</p>
</gcds-details>

<gcds-card
  card-title="Testing tools"
  href="https://design-system.alpha.canada.ca/en/accessibility/accessibility-testing"
  card-title-tag="h3"
  description="Tools and tips for teams who may choose to do their own testing before release. ">
</gcds-card>

## Contact us

If you have any questions or encounter any accessibility barriers while using the GC Design System,‌ [contact us]({{ links.contact }}).

We’re committed to addressing any issues promptly to ensure an inclusive experience for all.
