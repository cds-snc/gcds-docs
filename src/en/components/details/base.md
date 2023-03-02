---
layout: "layouts/base.njk"
github: https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-details
figma: https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=1098%3A2756&t=ciEmm7GYyGAY73zZ-0
permalink: false
tags: ['detailsEN', 'header']
---

<h1 class="mb-0">Details</h1>
<h2 class="mt-0 mb-400"><code>&lt;gcds-details&gt;</code></h2>

_Also called: accordion, collapse._

Details is an interactive switch for a person to expand or collapse content.

{% docLinks locale stage figma github %}
{% enddocLinks %}

<div class="my-500 b-sm b-gray">
  <p class="container-full font-semibold px-300 py-200 bb-sm b-gray bg-light">
    Details component preview
  </p>
  <div class="px-300 py-400">
    <gcds-details details-title="Learn more about this topic">
      <p>Additional information.</p>
    </gcds-details>
  </div>
</div>
