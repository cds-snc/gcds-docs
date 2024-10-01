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
nocrawl: true
---

# Accessibility statement
## Our commitment to accessibility
At the Canadian Digital Service, we think everyone should be able to use our services, no matter their ability. We’re committed to building digital services that are inclusive, barrier-free, and easy to use for everyone. Our GC Design System is built to ensure that public servants have the tools they need to create accessible digital products for Canadians.

Our Design System follows the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards as a minimum requirement. Still, our goal is to go beyond compliance by integrating accessibility into every step of our design and development process.

## How we build accessible components
To ensure accessibility, our components and design patterns undergo a rigorous development process that includes:
1. WCAG 2.1 AA Compliance: Our components are independently audited to ensure they meet the criteria for WCAG 2.1 AA. This covers all four principles of accessibility:
  - Perceivable: Ensuring content is available in ways people can perceive, whether visually, audibly, or through assistive technologies.
  - Operable: Components can be navigated and interacted with via multiple input methods, including keyboard and assistive devices.
  - Understandable: Information and user interfaces are intuitive, predictable, and error-tolerant.
  - Robust: Components are compatible with various assistive technologies and can adapt as technologies evolve.
2. Automated Accessibility Testing: We leverage automated tools that scan our codebase for accessibility issues like missing alt-text, ARIA roles, and colour contrast problems. This early-stage testing allows us to resolve common issues before deeper testing begins.

3. User Testing with Accessibility Needs: We conduct real-world testing with people who have accessibility needs, including individuals with various disabilities. This ensures our designs are functional and usable in a range of scenarios that automated testing cannot fully capture.

4. Market Research and Best Practices: We continuously research evolving accessibility standards and best practices from across industries, incorporating new findings and recommendations into our design system.</li> </list>

## Our component development checklist
Our design system follows a comprehensive checklist to ensure each component meets accessibility standards and provides an optimal user experience:
- **Colour Contrast Check**: Ensuring that text and interface elements meet or exceed the required colour contrast ratios to maintain readability for people with visual impairments.
- **Focus States**: Make sure that interactive elements, such as buttons, links, and form fields, have clear and visible focus states to guide keyboard navigation users.
- **Keyboard Navigation Support**: All components are fully accessible through keyboard navigation, enabling users who cannot use a mouse to operate every part of the interface.
- **Screen Magnifier Compatibility**: Ensuring components function properly with screen magnifiers, allowing users to zoom in on content without losing clarity or functionality.
- **Screen Reader Compatibility**: Every component is tested with screen readers to ensure it’s correctly announced and navigable for people who rely on assistive technologies.
- **Form Components Accessibility**: We check form elements for accessible labels, clear instructions, error messaging, and compatibility with assistive technologies.
- **Non-Colour Indicators**: Avoiding the use of colour alone to convey information. Instead, we use additional visual or textual cues (e.g., shapes, icons, or bold text) to indicate important information.
- **Clear and Specific Error Messages**: When errors occur in forms or interactions, we ensure users receive clear, actionable guidance that explains how to correct the issue.
- **Responsive Design**: All components are fully responsive and tested across different devices and screen sizes to ensure they provide a consistent experience.
- **Compatibility Across Browsers and Assistive Plugins**: We test components using various browsers and plugins such as the Axe Accessibility tool to ensure each component passes all automated AA-level checks. We also ensure that accessibility formatting such as Accessible Rich Internet Applications (ARIA) roles and landmarks is preserved and functional in different environments.

## Website accessibility
Beyond the components in our design system, the accessibility of this documentation website is equally important. We’re committed to ensuring the site itself is accessible to everyone, including individuals with disabilities. Here’s how we ensure the accessibility of our website:
- **Alt Text for Images**: All images and non-text content on the website include appropriate alt text to provide a description for users relying on screen readers.
- **ARIA Roles and Attributes**: Our website leverages Accessible Rich Internet Applications (ARIA) roles and attributes to ensure that interactive elements, such as menus, buttons, and forms, are easily identified and operated by assistive technologies.
- **Keyboard Navigation**: Every page of our website is fully operable via a keyboard, ensuring that users can navigate through links, buttons, and forms without a mouse.
- **Accessible Forms**: Forms on our website are designed with clear labels and instructions, error messaging, and support for keyboard and screen readers.
- **Responsive Design**: Our website is built to be responsive, providing a consistent and accessible experience on desktop, tablet, and mobile devices.
- **Focus Management**: We ensure that interactive elements have clear focus states, making it possible for people to navigate through content using their keyboard.
- **Non-Colour Indicators**: Like our components, we ensure that information on the website is conveyed using non-colour indicators, such as bold text, underlines, or icons, to assist people with colour vision deficiencies.

## Ongoing Efforts
Accessibility is an ongoing process, and we continuously strive to improve. We regularly audit our design system and website, incorporating user feedback and adopting new technologies to make our resources as accessible as possible.
We welcome any feedback from people on how we can continue to improve the accessibility of our design system and website.

## Contact Us
If you have any questions or encounter any accessibility barriers while using GC Design System or the documentation website,  [reach out to us]({{ links.contact }}). We’re committed to addressing any issues promptly to ensure an inclusive experience for all.
