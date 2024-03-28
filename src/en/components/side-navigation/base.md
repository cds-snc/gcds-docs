---
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-side-nav
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=5633-11428&mode=design&t=4ltBpy3FPMc9pXcL-0
permalink: false
tags: ['sidenavigationEN', 'header']
---

# Side navigation <br>`<gcds-side-nav>`

_Also called: sidebar menu, lefhand nav, vertical navigation._

A side navigation is a vertical list of page links on the left side of the screen.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Side navigation component preview" "px-300 pt-400 pb-200" %}

<div aria-hidden="true">
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
</div>
{% endcomponentPreview %}
