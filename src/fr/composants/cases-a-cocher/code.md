---
title: Cases à cocher
layout: 'layouts/component-documentation.njk'
translationKey: 'checkboxesCode'
tags: ['checkboxesFR', 'code']
date: 'git Last Modified'
---

## Codage et accessibilité des icônes

### Appliquer les attributs requis

Pour que les cases à cocher fonctionnent correctement, utilisez toujours les attributs suivants avec `gcds-checkbox` :

- `name`  
- `options`

### Utiliser l'attribut `options` avec les cases à cocher

L'attribut `options` utilise un tableau d'objets pour rendre chaque case à cocher. Voici en exemple l'un de ces objets :

```javascript
{
  'id'!: '',
  'label'!: '',
  'value'?: '',
  'checked'?: '',
  'hint'?: '',
}
```

À l'intérieur de l'attribut `options`, utilisez toujours les propriétés `id` et `label` de l'objet pour chaque case à cocher. Les autres propriétés sont facultatives.

### Utiliser l'attribut `value`

- L'attribut `value` fournit une référence rapide aux valeurs des cases cochées à l'intérieur du composant `gcds-checkboxes`.  
- L'attribut `value` est formaté comme un tableau de chaînes. Exemple : `[“checkboxOneValue”, checkboxTwoValue”]`

{% include "partials/error-message.njk" %}

### Pour un groupe de cases à cocher

- Utilisez l'attribut `legend` lorsque vous passez plus d'un objet à l'attribut `options`. Lorsqu'il y a plus d'une case à cocher, il faut définir l'attribut `legend` pour que le composant `gcds-checkboxes` puisse afficher son rendu.  
- Utilisez les attributs `hint` et `error-message` pour ajouter des renseignements supplémentaires au jeu de champs intégré à `gcds-checkboxes`.

### Pour une seule case à cocher

- Passez un seul objet à l'attribut `options` pour afficher une seule case à cocher sans jeu de champs.  
- Utilisez les attributs `hint` et `error-message` pour ajouter des renseignements supplémentaires à la case à cocher.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-checkboxes."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-checkboxes--events-properties&lang=fr"
  width="1200"
  height="1950"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
