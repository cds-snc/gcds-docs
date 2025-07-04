---
title: Accessibility testing
translationKey: accessibilitytest
layout: 'layouts/base.njk'
eleventyNavigation:
  key: accessibilityTestingEN
  title: Accessibility testing
  parent: accessibilityEN
  locale: en
---

# Accessibility testing tools

## Modern testing for modern components

Older testing tools and practices may not work properly with modern components. Here’s how to make sure your digital product is accessible:

1. Use our modern web components that [we've tested]({{ links.accessibility }}).
2. Follow the accessibility guidance on our [component pages]({{ links.components }}).
3. Test your digital product in your context to make sure it’s clear and works for people using assistive technology.

## Testing tools

If you want to do your own testing, here are some tools and processes you can use to get better coverage for your website or app.

These tools are not provided or endorsed by the Government of Canada. Reference our [Terms of use]({{ links.termsOfUse }}) when interacting with websites not under the control of Government of Canada.

### Automated tools

Use automated tools to detect common accessibility issues.

<gcds-details details-title="Free tools">

#### Code

<ul class="list-disc ps-400 mb-300">
  <li>
    <gcds-link external href="https://docs.deque.com/devtools-for-web/4/en/welcome-axe-devtools">Axe DevTools</gcds-link>
  </li>
  <li>
    <gcds-link external href="https://developer.chrome.com/docs/lighthouse/overview">Google Lighthouse</gcds-link>
  </li>
  <li>
    <gcds-link external href="https://pa11y.org/tutorials/">Pa11y CLI</gcds-link>
  </li>
  <li>
    <gcds-link external href="https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html">Firefox Accessibility Inspector</gcds-link>
  </li>
  <li>
    <p class="mb-0"><gcds-link external href="https://www.npmjs.com/package/axe-core"> Axe-core</gcds-link> by itself, or with a browser automation framework like:</p>
    <ul class="ps-400 mb-300">
      <li>
        <gcds-link external href="https://playwright.dev/docs/accessibility-testing">Playwright</gcds-link>
      </li>
      <li>
        <gcds-link external href="https://www.npmjs.com/package/@axe-core/puppeteer">Puppeteer</gcds-link>
      </li>
    </ul>
  </li>
</ul>
  
#### Figma

- <gcds-link external href="https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker">Stark contrast and accessibility checker</gcds-link>

</gcds-details>

<gcds-details details-title="Paid tools">

#### Code

- <gcds-link external href="https://www.deque.com/axe/devtools/">Axe DevTools Pro</gcds-link>
- <gcds-link external href="https://help.siteimprove.com/support/solutions/folders/80000324160">Siteimprove</gcds-link>
- <gcds-link external href="https://www.levelaccess.com/">Level Access</gcds-link>

</gcds-details>

### Accessibility tree

Use the accessibility tree for debugging web accessibility issues. It shows a simplified version of the DOM that screen readers and assistive technologies use to interpret content. 

Here’s how to access the accessibility tree in different browsers:

<gcds-details details-title="Chrome accessibility tree">

1. Open **developer tools** using ctrl+shift+i on PC or cmd+option+i on Mac.
2. Select the **elements** tab.
3. Select the **accessibility** panel.
    - If you don’t see it, select **more** (⋮) and then **accessibility**.

</gcds-details>

<gcds-details details-title="Firefox accessibility tree">

1. Open **developer tools** using ctrl+shift+i on PC or cmd+option+i on Mac.
2. Select the **inspector** tab.
3. Select an element in the **HTML structure**.
4. Select **accessibility**. 
    - If you don’t see the it, select the **three-dot menu** (...) in the DevTools toolbar and then **settings**.
    - Under default developer tools, enable **accessibility** panel.

</gcds-details>

<gcds-details details-title="Edge accessibility tree">

1. Open **developer tools** using ctrl+shift+i on PC or cmd+option+i on Mac.
2. Select the **elements** tab.
3. Select the **accessibility** panel.

</gcds-details>

<gcds-details details-title="Safari accessibility tree">

1. Enable the **developer menu**.
    - Select **Safari** from the top menu, then **settings**, then **advanced**.
    - Check the **show features for web developers** box. It’s now enabled.
2. Open **inspector** using option+command+i.
3. Select the **audit** tab.
4. Select an element and go to the **accessibility** section in the sidebar.

</gcds-details>

### Usability assessments and testing

It’s important to test with people with disabilities to make sure your digital product is accessible. You can do this by using a government service to assess your product, recruiting people with disabilities yourself for research, or using paid services that will do that for you.

<gcds-details details-title="Government of Canada services">

- <gcds-link external href="https://a11y.canada.ca/en/additional-resources/">Digital accessibility toolkit</gcds-link>

</gcds-details>

<gcds-details details-title="Paid services">

- <gcds-link external href="https://makeitfable.com/">Fable</gcds-link>

</gcds-details>

## Contact us

If you have any questions about or run into barriers when doing additional accessibility testing for GC Design System, [contact us]({{ links.contact }}).
