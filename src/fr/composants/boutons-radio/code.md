---
title: Boutons radio
layout: 'layouts/component-documentation.njk'
translationKey: 'radiosCode'
tags: ['radiosFR', 'code']
date: "git Last Modified"
---

## Créer des boutons radio

Utilisez des boutons radio lorsque vous vous attendez à ce qu'une personne ne sélectionne qu'une seule réponse parmi une courte liste d'options.

Les boutons radio aident les gens à faire un choix grâce à un nombre limité d'options.

## Codage et accessibilité des boutons radio

### Appliquer les attributs requis

Pour que les boutons radio fonctionnent correctement, utilisez toujours les attributs suivants avec `gcds-radios` :

- `name`  
- `legend`  
- `options`

### Utiliser l'attribut `options` avec le groupe de boutons radio

L'attribut `options` utilise un tableau d'objets pour rendre chaque bouton radio. Voici en exemple l'un de ces objets :

```javascript
{
  'id'!: '',
  'label'!: '',
  'value'!: '',
  'checked'?: '',
  'hint'?: '',
}
```

À l'intérieur de l'attribut `options`, utilisez toujours les propriétés `id`, `label` et `value` de l'objet pour chaque bouton radio. Les autres propriétés sont facultatives.

### Utiliser l'attribut `value`

L'attribut `value` fournit une référence rapide aux valeurs des boutons radio sélectionnés à l'intérieur du composant `gcds-radios`.

{% include "partials/error-message.njk" %}

### Ajouter du texte explicatif pour assurer le succès d'une tâche

Utilisez l'attribut `hint` ou la clé `hint` de l'objet `options` pour ajouter du texte explicatif afin d'aider une personne à faire une sélection et à éviter un état d'erreur.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-radios."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-radios--events-properties&lang=fr"
  width="1200"
  height="1770"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>