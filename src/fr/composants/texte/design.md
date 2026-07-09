---
title: Texte
layout: 'layouts/component-documentation.njk'
translationKey: 'textDesign'
tags: ['textFR', 'design']
# date: "git Last Modified"
---

## Structure du composant texte

<ol class="anatomy-list">
  <li>Le composant <strong>texte</strong> ne contient pas de titre. Son sujet est lié à l'idée principale du titre correspondant.</li>
  <li>Le <strong>titre</strong> est une ligne de texte mis en évidence qui introduit le paragraphe ou tout autre contenu du corps qui le suit immédiatement. Le titre donne une structure aux sections de texte selon un ordre hiérarchique.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-text-anatomy.svg" alt="Une ligne de grand texte en caractères gras au-dessus d'un bloc de texte plus petit. Le texte en gras indique « Ceci est un titre » et le bloc de contenu écrit indique « Il s'agit d'un texte lié au titre qui décrit plus en détail le sujet ou l'action du titre. Le texte est généralement une ou plusieurs lignes ou paragraphes qui forment le contenu d'une section ou introduisent une liste à puces, un tableau ou tout autre contenu, comme une image ou une vidéo. » Un libellé avec un « 1 » pointe vers le plus petit bloc de texte et un libellé avec « 2 » pointe vers le texte gras plus grand." />

## Conception et accessibilité du composant texte

### Rédigez du contenu facile à lire en un coup d'oeil

- Structurez le contenu de façon à placer d'abord l'information la plus importante pour accomplir la tâche.
- Gardez le contenu bref et axé sur les tâches. Notre «&nbsp;besoin de dire&nbsp;» n'est pas égal au «&nbsp;besoin de savoir&nbsp;» d'un lecteur.
- Supprimez les détails et les explications inutiles. Incluez uniquement les renseignements dont une personne a besoin.
- Utilisez des phrases courtes qui expriment une seule idée. Indiquez clairement qui ou quoi effectue l'action dans chaque phrase.
- Évitez de présenter trop tôt de l'information qui pourrait plutôt être placée là où une personne en a besoin. Au lieu d'expliquer un processus, rendez-le plus facile à suivre et à comprendre.

Conseil : Demandez-vous si le message pourrait être interprété autrement.

### Adoptez un ton humain

- Utilisez le même langage que les personnes qui utilisent votre produit. Renseignez-vous sur elles et leur façon de s'exprimer en lisant leurs demandes ou problèmes et en testant vos messages avec elles dans le cadre de recherches auprès des utilisateurs.
- Utilisez un langage simple et conversationnel, comme si vous décriviez la situation directement à la personne.
- Autant que possible, remplacez le jargon et les termes technique, comme _code invalide_, _champ non reconnu_, et _obligatoire_ par des termes plus simples. Si vous devez les utiliser, fournissez une brève définition après le terme.
- Utilisez la majuscule seulement en début de phrase et évitez les points d'exclamation.

Conseil : Pour adopter un ton plus humain, faites comme si vous parliez à quelqu'un à voix haute. Le contenu sonne-t-il naturellement lorsque vous le prononcez de vive voix?

### Choisissez la taille de texte

- Définissez la taille du texte en fonction du rôle du contenu et du contexte du produit.
- Utilisez le texte normal pour la plupart du contenu autre que les titres. Le texte normal utilise la taille de police par défaut.
- Utiliser le petit texte uniquement pour les informations complémentaires, comme les légendes ou les notes de bas de page.

### Utilisez les styles de texte avec parcimonie

- Ne soulignez que les liens.
- Utilisez le gras plutôt que l'italique pour mettre en évidence des points importants ou pour faire ressortir des termes dans le contenu.
- Limitez l'utilisation du gras pour préserver la lisibilité et l'accessibilité.
- Évitez d'utiliser du texte en gras comme titre. Le [titre]({{ links.heading }}) est le composant accessible conçu pour identifier les sections de contenu.
- Évitez d'utiliser l'italique pour de gros blocs de texte, des paragraphes entiers ou du contenu long. L'italique est souvent difficile à lire pour les personnes ayant une déficience visuelle ou un handicap cognitif.
- Utilisez uniquement l'italique dans les cas suivants :
  - Références juridiques, comme la _Loi canadienne sur l'accessibilité_.
  - Mots dans d'autres langues, y compris le latin.
  - Titres de publications, d'œuvres d'art et de documents mathématiques ou scientifiques.
- Utilisez le texte à espacement fixe (_monospace_) pour le code, les commandes, les noms de fichiers et tout autre contenu technique qui doit être lu ou copié tel quel.
