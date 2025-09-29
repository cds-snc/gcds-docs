---
title: Install Angular
layout: 'layouts/base.njk'
eleventyNavigation:
  key: angularEN
  title: Angular
  locale: en
  parent: installationEN
  order: 2
  description: View installation instructions for Angular or Angular-based projects.
  thumbnail: /images/common/start-using/banner-angular.svg
  alt:
  state: published
permalink: /en/start-using/develop/angular/
translationKey: 'angular'
date: 'git Last Modified'
---

# Install Angular

To make it easier to integrate GC Design System web components into Angular projects, the <gcds-link href="{{ links.npmGcdsComponentsAngular }}" external>gcds-components-angular</gcds-link> package provides Angular wrappers.

These wrappers make it easier to work with web components in the Angular ecosystem by preventing unnecessary repaints through detached change detection, and enabling form controls to work with `ngModel` and reactive forms.

The web components inherit native properties and interoperability.

## Angular installation instructions

Follow these steps to install and use GC Design System components in your Angular project.

### 1. Install the package

Navigate to your project’s root folder and run the following command:

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-angular
```

### 2. Import GC Design System

Place the following code in the `app.module.ts` file of your app:

```js
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    GcdsComponentsModule
  ],
  providers: [],
  bootstrap: [...]
})

export class AppModule { }
```

Place the following code in the `styles.scss` file of your app to import GC Design System styles:

```js
@import '../node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css';
```

{% addCssShortcuts 'en', '3' %}{% endaddCssShortcuts %}

Add the following code in the `styles.scss` file of your app to import CSS Shortcuts:

```js
@import '../node_modules/@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css';
```

{% startBuilding 'en', '4' %}{% endstartBuilding %}

{% include "partials/needhelp.njk" %}
