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

{% componentPreview "Side navigation component preview" "pt-400 pb-200" %}
<gcds-side-nav label="Side navigation component preview">
  <gcds-nav-link href="#">Nav link 1</gcds-nav-link>
  <gcds-nav-link href="#">Nav link 2</gcds-nav-link>
  <gcds-nav-group menu-label="nav-group" open-trigger="Nav group">
    <gcds-nav-group menu-label="nav-group" open-trigger="Nav group">
      <gcds-nav-link href="#">Nav link 1</gcds-nav-link>
      <gcds-nav-link href="#">Nav link 2</gcds-nav-link>
    </gcds-nav-group>
    <gcds-nav-group menu-label="nav-group" open-trigger="Nav group">
      <gcds-nav-link href="#">Nav link 1</gcds-nav-link>
      <gcds-nav-link href="#">Nav link 2</gcds-nav-link>
    </gcds-nav-group>
    <gcds-nav-group menu-label="nav-group" open-trigger="Nav group">
      <gcds-nav-link href="#">Nav link 1</gcds-nav-link>
      <gcds-nav-link href="#">Nav link 2</gcds-nav-link>
      <gcds-nav-link href="#">Nav link 3</gcds-nav-link>
    </gcds-nav-group>
  </gcds-nav-group>
  <gcds-nav-link href="#">Nav link 3</gcds-nav-link>
</gcds-side-nav>
{% endcomponentPreview %}
