---
title: Réinitialisation des styles
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsResetStylesFR
  title: Réinitialisation des styles
  locale: fr
  parent: shortcutsFR
  order: 1
translationKey: 'shortcutsResetStyles'
date: 'git Last Modified'
---

# Réinitialisation des styles

Les raccourcis CSS incluent dans sa feuille de style des styles de réinitialisation. Les styles de réinitialisation suppriment les styles de navigateur incohérents et appliquent des styles par défaut qui correspondent à ceux de Système de design GC. Ils affichent les éléments de manière prévisible et cohérente sur les navigateurs.

Par défaut, ces styles suivent les normes de Canada.ca et fournissent un point de départ uniforme pour les éléments HTML de base. Certains éléments pourraient encore nécessiter l’application de styles supplémentaires selon vos besoins.

## Survol

Les styles de réinitialisation suivants sont définis par défaut :

- Dimensionnement et espacement universels des boîtes
- Styles de lien accessibles
- Typographie intégrée de Canada.ca
- Listes sans styles
- Images adaptées aux boîtes
- Styles de champs de formulaire unifiés
- Styles de tableaux simplifiés
- Paramètres de mouvement accessibles

## Exemples

### Dimensionnement et espacement universels

Tous les éléments sont définis à `box-sizing: border-box`. La marge intérieure et les bordures sont incluses dans la largeur et la hauteur totales de l’élément. Les marges et les marges intérieures sont réinitialisées à `0` pour un espacement cohérent.

```html
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### Styles de lien accessibles

Le style des liens correspond à notre [composant lien]({{ links.link }}) et respecte les normes de Canada.ca. Leur état ciblé est clair avec des changements distincts de la couleur de l’arrière-plan, de la couleur du texte, du rayon de bordure et de l’ombre de la boîte pour améliorer la visibilité et l’accessibilité d’un élément ciblé.

{% shortcutPreview %}

<a href="...">
  Les styles de lien GCDS par défaut sont intégrés dans ce lien.
</a>
{% endshortcutPreview %}

### Typographie intégrée de Canada.ca

Le texte et les titres utilisent nos [unités de style typographiques réactifs]({{ links.typography }}). Les styles appliqués correspondent à nos [composants]({{ links.components }}) et <gcds-link href="{{ links.canadaStandardsTypography }}" external>aux normes de Canada.ca</gcds-link>.

Ils sont sujets à des limites de caractères définies pour créer des longueurs de ligne équilibrées et cohérentes. Cela aide à la lisibilité et à l’accessibilité en général.

{% shortcutPreview %}

<h3>Les styles typographiques par défaut des titres H3 sont intégrés dans ce titre.</h3>
<p>Les styles typographiques par défaut du texte sont intégrés dans ce texte.</p>
{% endshortcutPreview %}

### Listes sans styles

Tous les types de listes (ordonnées et non ordonnées) s’affichent sans leur style par défaut, comme les puces, les numéros, les marges et le remplissage.

{% shortcutPreview %}

<ul>
  <li>Élément de liste par défaut 1</li>
  <li>Élément de liste par défaut 2</li>
  <li>Élément de liste par défaut 3</li>
</ul>
{% endshortcutPreview %}

### Images adaptées aux boîtes

Les images sont réactives par défaut. Elles sont réglées à une larguer maximale `max-width` de `100%`, ce qui empêche le débordement de la boîte et maintient les proportions d’origine.

{% shortcutPreview "" %}

<img src="/images/common/css-shortcuts/image-example.png" alt="Une bannière horizontale avec des fleurs violettes." />
{% endshortcutPreview %}

### Styles de champs de formulaire unifiés

Tous les éléments de formulaire (`input`, `select` et `textarea`) héritent la famille de polices et la taille de police du corps du texte par souci de cohérence.

Les bordures autour des jeux de champs sont supprimées pour créer une apparence de formulaire plus uniforme et propre.

{% shortcutPreview %}

<fieldset>
  <legend>Adresse de livraison</legend>
  <div>
    <label for="shipping_name">Nom</label>
    <input type="text" name="shipping_name" id="shipping_name">
  </div>
  <div>
    <label for="shipping_street">Rue</label>
    <input type="text" name="shipping_street" id="shipping_street">
  </div>
</fieldset>
{% endshortcutPreview %}

### Styles de tableaux simplifiés

Les styles de tableau suppriment l’espacement par défaut des cellules. Les bordures des tableaux se rejoignent en une seule ligne pour une mise en page plus uniforme.

{% shortcutPreview %}

<table>
  <thead>
    <tr>
      <th class="b-sm">Nom de famille</th>
      <th class="b-sm">Prénom</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="b-sm">Sayed</td>
      <td class="b-sm">Fiza</td>
    </tr>
    <tr>
      <td class="b-sm">Walker</td>
      <td class="b-sm">Morgan</td>
    </tr>
  </tbody>
</table>
{% endshortcutPreview %}

### Paramètres de mouvement accessibles

Par défaut, un support a été ajouté pour les personnes qui ont activé la préférence « Réduire le mouvement » dans les paramètres de leur navigateur.

La requête `@media (prefers-reduced-motion: reduce)` définit diverses propriétés comme `animation-duration`, `transition-duration` et `scroll-behavior` à des valeurs minimales ou par défaut, désactivant ainsi les animations et les transitions.

```html
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
```
