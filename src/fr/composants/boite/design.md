---
title: Boîte
layout: 'layouts/component-documentation.njk'
translationKey: 'containerDesign'
tags: ['containerFR', 'design']
date: 'git Last Modified'
---

## Structure d’une boîte

<ol class="anatomy-list">
  <li>Le <strong>boîte</strong> regroupe du contenu dans un espace limité pouvant contenir du texte, des images et d’autres composants. La largeur peut être ajustée, notamment pour limiter la longueur d’une ligne de texte.</li>
  <li>La <strong>bordure optionnelle</strong> entoure la boîte en indiquant la largeur.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-container-anatomy.svg" alt="Le composant de boîte avec des numéros indiquant les différentes parties de la structure de la boîte." />

## Design et accessibilité des boîtes

### Limiter la largeur du contenu

- Veillez à ce que vos lignes de texte ne dépassent pas 65 caractères pour obtenir une longueur de lecture acceptable.
- Limitez la largeur de la boîte pour éviter que les grands écrans n’affichent des lignes de texte trop longues et difficiles à lire.
- Évitez de dépasser la largeur maximale de 71,25 rem (1140 px).

### Ajouter une taille de boîte

La propriété `size` définit la taille d’une boîte. Six tailles sont disponibles :

| Taille | REM      | Pixels (px) |
| ------ | -------- | ----------- |
| `full` | 100%     | 100%        |
| `xl`   | 71.25rem | 1140px      |
| `lg`   | 62rem    | 992px       |
| `md`   | 48rem    | 768px       |
| `sm`   | 30rem    | 480px       |
| `xs`   | 20rem    | 320px       |

<br/>

La taille de la boîte par défaut est `full`, ce qui signifie que la boîte occupera la largeur totale de la boîte parente.
