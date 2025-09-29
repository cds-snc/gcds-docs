---
title: Install React
layout: 'layouts/base.njk'
eleventyNavigation:
  key: reactEN
  title: React
  locale: en
  parent: installationEN
  order: 1
  description: View installation instructions for React or React-based projects.
  envExamples: This includes Next.js, Gatsby, and Remix.
  thumbnail: /images/common/get-started/banner-react.svg
  alt:
  state: published
permalink: /en/get-started/develop/react/
translationKey: 'react'
date: 'git Last Modified'
---

# Install React

To make it easier to integrate GC Design System web components into React projects, the <gcds-link href="{{ links.npmGcdsComponentsReact }}" external>gcds-components-react</gcds-link> package provides React wrappers.

These wrappers make it easier to work with web components in the React ecosystem. They offer JSX bindings for properties and custom events, auto-completion, and type safety.

The web components inherit native properties and interoperability.

## React installation instructions

Follow these steps to install and use GC Design System components in your React project.

### 1. Install the package

Navigate to your project’s root folder and run the following command:

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-react
```

### 2. Import GC Design System

Place the following code in the `index.js` file of your app to import GC Design System styles:

```js
import '@cdssnc/gcds-components-react/gcds.css';
```

{% addCssShortcuts 'en', '3' %}{% endaddCssShortcuts %}

Add the following code in the `index.js` file of your app to import GC Design System CSS Shortcuts:

```js
import '@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css';
```

{% startBuilding 'en', '4' %}{% endstartBuilding %}

{% include "partials/needhelp.njk" %}
