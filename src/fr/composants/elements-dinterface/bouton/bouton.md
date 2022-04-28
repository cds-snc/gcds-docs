---
title: Bouton - Composansts
layout: "layouts/base.njk"
eleventyNavigation:
  key: buttonFR
  title: Bouton
  locale: fr
  parent: basicFR
  order: 1
translationKey: "button"
onThisPage:
  0: Le bouton de base
  1: Comment modifier le bouton
  2: Cas réglés par le bouton
  3: Composants apparentés
  4: Où placer les boutons
  5: Rédiger un bon libellé de bouton
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-button
---

<header>

# Bouton

`<gcds-button>`

Un bouton est un objet interactif visant à attirer l’attention d’une personne sur une action importante ou fréquente qu’elle peut réaliser.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

<section aria-label="Le bouton de base">

## Le bouton de base

On utilise le bouton pour indiquer une action pouvant être effectuée par un utilisateur.

Un bouton peut avoir divers états prédéfinis : par défaut <span lang="en">(*default*)</span>, de survol <span lang="en">(*hover*)</span>, ciblé <span lang="en">(*focus*)</span>, appuyé <span lang="en">(*active*)</span> et désactivé <span lang="en">(*disabled*)</span>. Ces états changent quand une personne interagit avec le bouton.

### Bouton principal

<gcds-button
  button-role="primary"
  button-type="button"
>
  Principal
</gcds-button>

On utilise le bouton principal pour l’action la plus importante.

Utilisez-le pour les actions essentielles dans un parcours utilisateur ou comme bouton par défaut.

Évitez d’avoir plus d’un bouton principal par page. Cela diminuerait l’effet du bouton, en plus de créer une incertitude sur la prochaine action à faire.

{% viewCode locale "primary" "Principal" %}

``` html
<gcds-button
  button-role="primary"
  button-type="button"
>
  Principal
</gcds-button>
```

{% endviewCode %}

### Bouton secondaire

<gcds-button
  button-role="secondary"
  button-type="button"
>
  Secondaire
</gcds-button>

On utilise le bouton secondaire pour les actions soutenant l’action principale.

Utilisez-le pour attirer l’attention sur une action importante et fréquente, mais pas essentielle.

Vous pouvez l’utiliser plus d’une fois par page pour les actions optionnelles importantes.

{% viewCode locale "secondary" "Secondaire" %}

``` html
<gcds-button
  button-role="secondary"
  button-type="button"
>
  Secondaire
</gcds-button>
```

{% endviewCode %}

### Bouton destructeur

<gcds-button
  button-role="destructive"
  button-type="button"
>
  Destructeur
</gcds-button>

On utilise le bouton destructeur pour signaler la sévérité d’une action qui retire, efface ou supprime des informations.

Utilisez-le pour les actions irréversibles ou difficilement réversibles.

Bon à savoir : pour les actions irréversibles, demandez à la personne de confirmer son choix.

{% viewCode locale "destructive" "Destructeur" %}

``` html
<gcds-button
  button-role="destructive"
  button-type="button"
>
  Destructeur
</gcds-button>
```

{% endviewCode %}

### Bouton d’évitement « Passer au contenu »

<gcds-button
  button-role="skip-to-content"
  button-type="button"
>
  Passer au contenu
</gcds-button>

On utilise le bouton d’évitement (visible ou masqué) pour aider une personne à passer directement au contenu principal.

Utilisez-le pour accélérer la navigation. C’est un raccourci qui saute les liens ou autres éléments de navigation d’une page.

Ce bouton évite aux personnes d’appuyer sur Tabulation sans relâche ou de faire défiler longuement une page.

{% viewCode locale "skip-to-content" "Passer au contenu" %}

``` html
<gcds-button
  button-role="skip-to-content"
  button-type="button"
>
  Passer au contenu
</gcds-button>
```

{% endviewCode %}

</section>

<section aria-label="Comment modifier le bouton">

## Comment modifier le bouton

Il peut arriver que les options par défaut ne permettent pas de répondre aux besoins des personnes utilisant votre produit. Vous pouvez modifier le composant pour créer un bouton personnalisé, adapté à un cas particulier.

### Type, style et rôle des boutons

#### Type du bouton

Définissez le type de bouton en fonction du comportement désiré du bouton.

L’attribut `button-type` peut prendre les valeurs suivantes :
<div lang="en">

- `button`
- `submit`
- `reset`
- `link`

</div>

#### Rôle du bouton

L’attribut `button-role` peut prendre les valeurs suivantes :
<div lang="en">

- `destructive`
- `primary`
- `secondary`
- `skip-to-content`

</div>

#### Style du bouton

L’attribut `button-style` peut prendre les valeurs suivantes :
<div lang="en">

- `outline`
- `solid`
- `text-only`

</div>

### Ajouter une icône aux boutons

Les icônes peuvent agir comme aide visuelle si elles sont utilisées avec parcimonie et de façon prévisible. Évitez d’utiliser une icône seule, sans texte. Si vous ajoutez une icône à un bouton, alignez le libellé à gauche.

### Appliquer les bases du système de design

Choisissez des unités de style pour la typographie parmi les [bases du système de design du GC]({{ "/fr/bases/" | url }}). Les unités de style pour la couleur et l’espacement seront bientôt disponibles!

</section>

<section aria-label="Cas réglés par le bouton">

## Cas réglés par le bouton

Utilisez les boutons pour des actions importantes effectuées par l’utilisateur comme :
- enregistrer, supprimer, copier, télécharger
- effacer le texte saisi dans un champ
- envoyer un formulaire ou une demande
- donner un consentement ou une autorisation
- faire un choix entre 2 options
- accéder à une zone de connexion sécurisée, à un formulaire ou à un tutoriel
- passer au contenu principal d’une page

Dans les applications Web ou mobiles, les boutons remplacent les hyperliens pour :

- contrôler les déplacements, par exemple d’un écran à l’autre dans une séquence d’écrans
- lier à une page externe (ne pas oublier d’indiquer qu’il s’agit d’un lien externe)

</section>

<section aria-label="Composants apparentés">

## Composants apparentés

**Boutons radio ou listes déroulantes** : à utiliser quand vous offrez plusieurs options et qu’il faut en choisir une.

**Cases à cocher** : à utiliser quand vous offrez plusieurs options et qu’on peut en choisir plusieurs.

</section>

<section aria-label="Où placer les boutons">

## Où placer les boutons

Placez les boutons à des endroits habituels et prévisibles de façon à ce qu’une personne trouve facilement l’action qu’elle veut faire.

Offrez rapidement un chemin vers la prochaine action pour épargner aux personnes les longs défilements d’écran, les multiples tabulations ou les frappes de clavier inutiles.

Vérifiez que l’emplacement du bouton assure un bon contraste entre le contour du bouton et l’arrière-plan.

### Ajouter un bouton d’évitement

Permettez aux personnes de sauter un groupe de liens de navigation grâce à un bouton d’évitement.

Pour que le bouton ne cache rien, configurez-le de sorte qu’il pousse le contenu vers le bas. En version bureau, placez le bouton d’évitement dans le coin supérieur gauche de la page pour ne pas entrecouper le contenu.

</section>

<section aria-label="Rédiger un bon libellé de bouton">

## Rédiger un bon libellé de bouton

### Assurer la lisibilité du libellé

Décrivez l’action du bouton à l’aide d’un libellé court et précis.

Mettez une majuscule initiale au premier mot seulement.

### Choisir un libellé clair et descriptif

Rédigez un libellé spécifique à chaque bouton dans une même page. Si vous réutilisez les mêmes libellés, une personne naviguant d’un bouton à l’autre entendra les mêmes mots se répéter sans savoir à quelle action ils se rapportent.

Évitez les formules vagues et génériques ou celles qui se ressemblent trop d’un bouton à l’autre. Elles portent à confusion et nuisent aux personnes cherchant à accomplir une tâche.

Évitez les expressions qui pourraient être étrangères à des personnes dont le français n’est pas la langue première.

</section>
