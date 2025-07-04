---
title: Aperçu du composant de jeu de champs
layout: 'layouts/component-preview.njk'
tags: ['fieldsetFR', 'preview']
eleventyExcludeFromCollections: true
templateEngineOverride: njk
---

<gcds-fieldset legend="Légende" legend-size="h3" hint="Texte explicatif/Exemple de message.">
  <gcds-input input-id="form-input" label="Étiquette de champ" hint="Texte explicatif/Exemple de message." size="6">
  </gcds-input>
  <gcds-select select-id="form-select" label="Étiquette de sélection" hint="Texte explicatif/Exemple de message." default-value="Sélectionnez l'option">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </gcds-select>
</gcds-fieldset>
