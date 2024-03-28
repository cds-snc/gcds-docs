---
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-top-nav
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=4738-10759&mode=design&t=PaKRkbpFLPNx99bv-0
permalink: false
tags: ['topnavigationEN', 'header']
---

# Top navigation <br>`<gcds-top-nav>`

_Also called: site menu, navigation, navbar._

A top navigation is a horizontal list of page links.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Top navigation component preview" %}

<div aria-hidden="true">
  <gcds-top-nav label="Top navigation component preview" alignment="right" lang="en">
    <gcds-nav-link href="#red" slot="home">GC Notify</gcds-nav-link>
    <gcds-nav-link href="#red">Why GC Notify</gcds-nav-link>
    <gcds-nav-group menu-label="Features submenu" open-trigger="Features">
      <gcds-nav-link href="#red" current>Create reusable templates</gcds-nav-link>
      <gcds-nav-link href="#red">Personalize messages</gcds-nav-link>
      <gcds-nav-link href="#red">Schedule messages</gcds-nav-link>
      <gcds-nav-link href="#red">Send messages automatically</gcds-nav-link>
    </gcds-nav-group>
    <gcds-nav-link href="#red">Contact us</gcds-nav-link>
  </gcds-top-nav>
</div>
{% endcomponentPreview %}
