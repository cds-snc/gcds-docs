---
layout: 'layouts/base.njk'
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-lang-toggle
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/GC-Design-System?type=design&node-id=1780-5094&mode=design&t=2my46MmKTAF9hApN-0
permalink: false
tags: ['langtoggleEN', 'header']
---

# Language toggle <br>`<gcds-lang-toggle>`

_Also called: language switch, language selector._

The language toggle is a link to the same content in the other Official Language.

{% requiredOn locale true true %}
{% endrequiredOn %}

{% docLinks locale stage figma github %}
{% enddocLinks %}

{% baseComponentPreview "Language toggle component preview" page.filePathStem %}
{% endbaseComponentPreview %}
