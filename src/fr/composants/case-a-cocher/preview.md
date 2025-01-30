---
title: Aperçu du composant de case à cocher
layout: 'layouts/component-preview.njk'
tags: ['checkboxFR', 'preview']
eleventyExcludeFromCollections: true
templateEngineOverride: njk
---

<gcds-fieldset fieldset-id="fieldset" legend="Légende" hint="Texte explicatif/Exemple de message.">
  <gcds-checkbox
    checkbox-id="form-check-1"
    label="Libellé"
    hint="Ceci est une description ou un exemple à titre de clarification."
    name="radio"
    checked>
  </gcds-checkbox>
  <gcds-checkbox
    checkbox-id="form-check-2"
    label="Libellé"
    hint="Ceci est une description ou un exemple à titre de clarification."
    name="radio">
  </gcds-checkbox>
</gcds-fieldset>
