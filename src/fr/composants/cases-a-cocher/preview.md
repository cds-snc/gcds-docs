---
title: Aperçu du composant de cases à cocher
layout: 'layouts/component-preview.njk'
tags: ['checkboxesFR', 'preview']
eleventyExcludeFromCollections: true
templateEngineOverride: njk
---

<gcds-checkboxes
  legend="Légende"
  hint="Texte explicatif/Exemple de message."
  name="checkexample"
  options='[
    {
      "id": "form-check-1",
      "label": "Libellé",
      "hint": "Ceci est une description ou un exemple à titre de clarification.",
      "value": "check1"
    },
    {
      "id": "form-check-2",
      "label": "Libellé",
      "hint": "Ceci est une description ou un exemple à titre de clarification.",
      "value": "check2"
    }
  ]'
>
</gcds-checkboxes>
