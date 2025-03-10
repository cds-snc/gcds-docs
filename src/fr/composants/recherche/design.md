---
title: Recherche
layout: 'layouts/component-documentation.njk'
translationKey: 'searchDesign'
tags: ['searchFR', 'design']
date: 'git Last Modified'
---

## Structure du composant recherche

<ol class="anatomy-list">
  <li>Le <strong>champ de saisie</strong> est un espace permettant d’entrer des mots-clés de recherche.</li>
  <li>Le <strong>texte de remplacement</strong> est une invite visible dans le champ qui s’efface lorsqu’une 
personne saisit du texte. Il identifie la zone de recherche.</li>
  <li>Le <strong>bouton</strong> désigné à l’aide d’une icône de loupe, lance la recherche.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-search-anatomy.svg" alt="Image montrant la structure du composant recherche avec des chiffres pointant vers les parties individuelles du composant." />

## Accessibilité et design des recherche

### Placez le composant recherche à un endroit prévisible dans l'en-tête

- Placez le composant recherche dans l'<gcds-link href="{{ links.header }}">en-tête</gcds-link> sous la bascule de langue et alignez-le sur la <gcds-link href="{{ links.signature }}">signature du gouvernement du Canada</gcds-link>.
- Assurez-vous que l'en-tête est réactif afin que le composant recherche apparaisse sous la signature et la bascule de langue sur les appareils mobiles.
