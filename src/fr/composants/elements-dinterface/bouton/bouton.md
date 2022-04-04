---
title: Bouton
layout: "layouts/base.njk"
eleventyNavigation:
  key: buttonFR
  title: Bouton
  locale: fr
  parent: basicFR
  order: 1
translationKey: "button"
onThisPage:
  0: Comment utiliser le bouton de base
  1: Personnaliser le bouton
  2: Quand utiliser les boutons
  3: Composants apparentés
  4: Où placer les boutons
  5: Écrire un bon libellé de boutons
  6: Ajouter une icône aux boutons
---

# Bouton

Un bouton est un objet interactif visant à attirer l’attention d’une personne sur une action importante ou fréquente qu’elle peut réaliser.

## Comment utiliser le bouton de base

On utilise les boutons pour des actions initiées par un utilisateur comme les consentements ou les refus, les déplacements dans un site ou les opérations relatives à des informations. 

Un bouton peut avoir divers états prédéfinis : par défaut <span lang="en">(default)</span>, de survol <span lang="en">(hover)</span>, ciblé <span lang="en">(focus)</span>, appuyé <span lang="en">(active)</span> et désactivé <span lang="en">(disabled)</span>. Ces états changent quand une personne interagit avec le bouton.

### Bouton principal

<gcds-button
  button-role="primary"
>
  Principal
</gcds-button>

On utilise le bouton principal pour l’action la plus importante.

Employez-le pour les actions essentielles dans un parcours utilisateur ou comme bouton par défaut.

Évitez d’avoir plus d’un bouton principal par page. Cela diminuerait l’effet du bouton, en plus de créer une incertitude sur la prochaine action à faire. 

{% viewCode "fr" "primary-show" %}

``` html
<gcds-button
  button-role="primary"
>
  Principal
</gcds-button>
```

{% endviewCode %}

### Bouton secondaire

<gcds-button
  button-role="secondary"
>
  Secondaire
</gcds-button>

On utilise le bouton secondaire pour les actions soutenant l’action principale. 

Employez-le pour attirer l’attention sur une action importante et fréquente, mais pas essentielle.

Vous pouvez l’utiliser plus d’une fois par page pour les actions optionnelles importantes.

{% viewCode "fr" "secondary-show" %}

``` html
<gcds-button
  button-role="secondary"
>
  Secondaire
</gcds-button>
```

{% endviewCode %}

### Bouton destructeur

<gcds-button
  button-role="destructive"
>
  Destructeur
</gcds-button>

On utilise le bouton destructeur pour signaler la sévérité d’une action qui retire, efface ou supprime des informations.

Employez-le pour les actions irréversibles ou difficilement réversibles.

Bon à savoir : pour les actions irréversibles, demandez à la personne de confirmer son choix.

{% viewCode "fr" "destructive-show" %}

``` html
<gcds-button
  button-role="destructive"
>
  Destructeur
</gcds-button>
```

{% endviewCode %}

### Bouton d’évitement « Passer au contenu »

<gcds-button
  button-role="skip-to-content"
>
  Passer au contenu
</gcds-button>

On utilise le bouton d’évitement (visible ou masqué) pour aider une personne à passer directement au contenu principal. 

Employez-le pour accélérer la navigation. C’est un raccourci qui saute les liens de navigation d’une page ou d’autres éléments de navigation.

Ce bouton évite aux personnes d’appuyer sur Tabulation sans relâche ou de faire défiler longuement une page.

{% viewCode "fr" "skipto-show" %}

``` html
<gcds-button
  button-role="skip-to-content"
>
  Passer au contenu
</gcds-button>
```

{% endviewCode %}

## Personnaliser le bouton

Vous pouvez modifier les paramètres visuels par défaut pour créer un bouton personnalisé.

### Type

Cette propriété permet de définir le comportement du bouton. Par exemple, celui-ci peut agir comme lien (d’ancrage ou vers une autre page) ou comme bouton (pour activer un script ou envoyer un formulaire).
 
La propriété type peut prendre les valeurs suivantes :
- button: For activating scripts
- submit: For submitting forms
- reset: For resetting interfaces
- link: For acting like a traditional link

### Colour

Choisissez une couleurs parmi la palette de couleurs.

### Display

Définissez le type d’affichage du bouton.
 
### Style

Définissez le style visuel du bouton.

## Quand utiliser les boutons

Utilisez les boutons pour des actions importantes comme :

- enregistrer, supprimer, copier, télécharger
- effacer le texte saisi dans un champ
- envoyer un formulaire ou une demande
- donner un consentement ou une autorisation
- faire un choix entre 2 options
- accéder à une zone de connexion sécurisée, à un formulaire ou à un tutoriel
- passer au contenu principal d’une page

Dans les applications Web ou mobiles, les boutons remplacent les hyperliens pour :

- contrôler les déplacements, par exemple d’un écran à l’autre dans une séquence d’écrans
- lier à une page externe (tout en faisant savoir qu’il s’agit d’un lien externe)

## Composants apparentés

**Liens** : à utiliser quand une action est de moindre importance.

**Boutons radio ou listes déroulantes** : à utiliser quand vous offrez plusieurs options et qu’il faut en choisir une.

**Cases à cocher** : à utiliser quand vous offrez plusieurs options et qu’on peut en choisir plusieurs.

## Où placer les boutons

Placez les boutons à des endroits habituels et prévisibles de façon à ce qu’une personne trouve facilement l’action qu’elle veut faire.

Offrez rapidement un chemin vers la prochaine action pour épargner aux personnes les longs défilements d’écran, les multiples tabulations ou les frappes de clavier inutiles. 

Vérifiez que l’emplacement du bouton assure un bon contraste entre le contour du bouton et l’arrière-plan.

### Ajouter un bouton d’évitement

Permettez aux personnes de sauter un groupe de liens de navigation grâce à un bouton d’évitement.

Pour que le bouton ne cache rien, configurez-le de sorte qu’il pousse le contenu vers le bas. Pour l’affichage en version bureau, placez le bouton d’évitement dans le coin supérieur gauche de la page pour ne pas entrecouper le contenu.

## Écrire un bon libellé de boutons

## Assurer la lisibilité des libellés

Décrivez l’action du bouton à l’aide d’un libellé court et précis.

Mettez une majuscule initiale au premier mot seulement.

## Choisir des libellés clairs et descriptifs

Rédigez un libellé spécifique à chaque bouton dans une page. Si vous réutilisez les mêmes libellés, une personne naviguant d’un bouton à l’autre entendra les mêmes mots se répéter sans savoir à quelle action ils se rapportent.

Évitez les formules vagues et génériques ou celles qui se ressemblent trop d’un bouton à l’autre. Elles portent à confusion et nuisent aux personnes cherchant à accomplir une tâche.

Évitez les expressions qui pourraient être étrangères à des personnes dont le français n’est pas la langue première.

## Ajouter une icône aux boutons

Les icônes peuvent agir comme aide visuelle si elles sont utilisées avec parcimonie et de façon prévisible.

Évitez d’utiliser une icône seule, sans texte.

Si vous ajoutez une icône à un bouton, alignez le libellé à gauche.
