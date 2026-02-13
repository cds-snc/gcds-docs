---
title: Sélection
layout: 'layouts/component-documentation.njk'
translationKey: 'selectDesign'
tags: ['selectFR', 'design']
date: 'git Last Modified'
---

## Structure de la sélection

<ol class="anatomy-list">
  <li>L'<strong>étiquette</strong> indique le choix que représente la sélection.</li>
  <li>Le <strong>texte explicatif</strong> fournit un contexte supplémentaire ou des exigences sur la question et la réponse attendue.</li>
  <li>La <strong>valeur par défaut</strong> peut être utilisée comme un espace réservé pour la sélection.</li>
  <li>L'<strong>icône</strong> est utilisée comme aide visuelle pour indiquer que le champ peut être agrandi.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-select-anatomy.svg" alt="Le composant sélection avec des chiffres pointant les parties individuelles de la structure de la sélection." />

## Design et accessibilité de la sélection

### Faites en sorte que les options de sélection soient claires

- Limitez le texte de chaque option à quelques mots ou à une phrase courte.
- En règle générale, les options sont classées par ordre alphabétique. Dans certains cas, il peut être utile de classer les options de la plus commune à la moins commune.
- Lorsque possible, ajoutez une option telle que «&nbsp;Aucun&nbsp;» ou «&nbsp;Aucun des éléments ci-dessus&nbsp;».

### Aidez l'utilisateur·rice à comprendre comment utiliser les sélections

- Ne partez pas du principe qu'une personne saura utiliser une sélection.
- Utilisez le texte explicatif pour expliquer aux utilisateur·rice·s qui ne sont pas à l'aide avec la sélection qu'ils et elles ne peuvent choisir qu'une seule option. Par exemple, «&nbsp;Sélectionnez l'option la plus pertinente&nbsp;».
- Évitez de présélectionner une option de sélection. Cela augmente les risques que les utilisateur·rice·s sautent une question ou soumettent une mauvaise réponse.
- Lorsque possible, ajoutez une option telle que «&nbsp;Aucun&nbsp;» ou «&nbsp;Aucun des éléments ci-dessus&nbsp;». Une fois sélectionnée, une option ne peut être désélectionnée, ou inversée, à moins de choisir une autre option dans le groupe. Le cas échéant, le ou la répondant·e est obligé·e de sélectionner une mauvaise option ou d'abandonner la tâche.

### Utilisez d'autres questions pour réduire le nombre d'options de sélection

- Essayez de poser des questions aux utilisateur·rice·s avant d'utiliser la sélection afin de réduire le nombre d'options.
- Si une liste d'éléments contient moins d'options (6-7 éléments ou moins), envisagez plutôt l'utilisation de <gcds-link href="{{ links.radio }}">boutons radio</gcds-link>.

### Masquez l’étiquette seulement lorsque le but est clair
- Masquez visuellement l’étiquette seulement lorsque le but de la sélection est clairement communiqué par le contexte, rendant l’étiquette visuellement redondante, comme dans les cas suivants&nbsp;:
  - tableaux ou autres mises en page où l’espace est limité;
  - paramètres et configurations.
- Fournissez toujours une étiquette pour soutenir les technologies d’assistance.
- N’ajoutez pas de texte explicatif si vous masquez l’étiquette, puisque celui-ci manque alors de contexte et peut distraire ou prêter à confusion.
