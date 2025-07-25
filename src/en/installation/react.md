---
title: Get started with React
layout: 'layouts/base.njk'
eleventyNavigation:
  key: reactEN
  title: React
  locale: en
  parent: installationEN
  order: 1
  description: View installation instructions for React or React-based projects.
  envExamples: This includes Next.js, Gatsby, and Remix.
  thumbnail: /images/common/installation/banner-react.svg
  alt:
  state: published
permalink: /en/installation/react/
translationKey: 'react'
date: 'git Last Modified'
---

# Get started with React

To make it easier to integrate GC Design System web components into React projects, the <gcds-link href="{{ links.npmGcdsComponentsReact }}" external>gcds-components-react</gcds-link> package provides React wrappers.

These wrappers make it easier to work with web components in the React ecosystem. They offer JSX bindings for properties and custom events, auto-completion, and type safety.

The web components inherit native properties and interoperability.

## React installation instructions

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

{% startBuilding 'en', '3' %}{% endstartBuilding %}

{% include "partials/needhelp.njk" %}
