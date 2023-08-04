---
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-top-nav
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=4738-10759&mode=design&t=PaKRkbpFLPNx99bv-0
permalink: false
tags: ['topnavEN', 'header']
---

# Top navigation <br>`<gcds-top-nav>`

_Also called: site menu, navigation, navbar._

A top navigation is a horizontal list of page links.

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% componentPreview "Top navigation component preview" %}
<gcds-top-nav label="topbar" alignment="right" lang="en">
  <gcds-nav-link href="#red" slot="home">Home</gcds-nav-link>
  <gcds-nav-link href="#red">Installation</gcds-nav-link>
  <gcds-nav-link href="#red">Foundations</gcds-nav-link>
  <gcds-nav-link href="#red" current >Components</gcds-nav-link>
  <gcds-nav-group menu-label="Contact us submenu"  open-trigger="Contact us">
    <gcds-nav-link href="#red">GitHub</gcds-nav-link>
    <gcds-nav-link href="#red">Slack</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>
{% endcomponentPreview %}
