---
pagination:
    data: utility.typography
    size: 1
    alias: prop
permalink: "en/utility/{{ prop.name | slugify }}/"
layout: "layouts/utility-documentation.njk"
eleventyComputed:
  title: "{{ prop.name }}"
  translateKey: "{{ prop.name }}UF"
---
