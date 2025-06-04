---
title: Groupe de boutons radio
layout: 'layouts/component-documentation.njk'
translationKey: 'radiogroupCode'
tags: ['radiogroupFR', 'code']
date: "git Last Modified"
---

## Créer un groupe de boutons radio

Utilisez un groupe de boutons radio avec un [jeu de champs]({{ links.fieldset }}) lorsque vous attendez d’une personne qu’elle ne sélectionne qu’une réponse parmi une courte liste d’options.

Le groupe de boutons radio aide les gens à faire un choix grâce à un nombre limité d’options.


## Codage et accessibilité du groupe de boutons radio

### Appliquez les attributs requis

Pour que le groupe de boutons radio fonctionne correctement, utilisez toujours les attributs suivants avec `<gcds-radio-group>` :
- `name`
- `options`

### Utilisez l’attribut options avec le groupe de boutons radio

L’attribut options utilise un tableau d’objets pour rendre chaque bouton radio. Voici un exemple de l’un des objets :

{% highlight "js" %}
{
  'id'!: '',
  'label'!: '',
  'value'!: '',
  'required'?: '',
  'disabled'?: '',
  'checked'?: '',
  'hint'?: '',
}
{% endhighlight %}


- À l’intérieur de l’attribut options, utilisez toujours les propriétés `id`, `label` et `value` de l’objet pour chaque bouton radio. Les autres propriétés sont facultatives.
