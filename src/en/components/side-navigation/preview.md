---
title: Side navigation component preview
layout: 'layouts/component-preview.njk'
tags: ['sidenavigationEN', 'preview']
eleventyExcludeFromCollections: true
templateEngineOverride: njk
---

<gcds-side-nav label="GC Forms">
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>
  <gcds-nav-group menu-label="Features" open-trigger="Features">
    <gcds-nav-group menu-label="Build and manage forms yourself" open-trigger="Build and manage forms yourself">
      <gcds-nav-link href="#">Review in both official languages side-by-side</gcds-nav-link>
      <gcds-nav-link href="#">Get form responses delivered securely</gcds-nav-link>
      <gcds-nav-link href="#">Test forms before publishing</gcds-nav-link>
    </gcds-nav-group>
    <gcds-nav-group menu-label="Publish trusted, user-friendly forms" open-trigger="Publish trusted, user-friendly forms">
      <gcds-nav-link href="#">Forms that people can fill out anywhere</gcds-nav-link>
      <gcds-nav-link href="#">Forms that save time and effort</gcds-nav-link>
      <gcds-nav-link href="#">Forms with the GC look and feel</gcds-nav-link>
    </gcds-nav-group>
  </gcds-nav-group>
  <gcds-nav-link href="#">Guidance</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
</gcds-side-nav>
