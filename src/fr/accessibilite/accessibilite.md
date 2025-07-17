---
title: Accessibilité
translationKey: accessibility
layout: 'layouts/base.njk'
eleventyNavigation:
  key: accessibilityFR
  title: Accessibilité
  locale: fr
  order: 4
  hideMain: true
---

# Accessibilité au sein de Système de design GC

## Nos normes d’accessibilité

L’outil Système de design GC respecte ou dépasse les exigences des Règles pour l’accessibilité des contenus Web (WCAG) niveau 2.1 AA, ce qui le rend totalement conforme aux <gcds-link external href="https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=23601"> normes d’accessibilité du gouvernement du Canada </gcds-link>.

Les fonctionnaires qui utilisent ce système de design et ces lignes directrices créent des sites Web et applications du gouvernement du Canada correspondant aux normes d’accessibilité.

## Notre liste de vérification en matière d’accessibilité

Système de design GC intègre l’accessibilité dès le départ pour répondre aux exigences posées par les normes d’accessibilité. Cela comprend ce site Web, ainsi que les unités de style et les composants.

### Navigation

<gcds-details details-title="États ciblés">
  <gcds-text margin-bottom="0">Les éléments interactifs, comme les boutons, les liens et les champs de formulaires, ont des états ciblés clairs et visibles pour guider les personnes qui utilisent la navigation au clavier.</gcds-text>
</gcds-details>

<gcds-details details-title="Navigation au clavier">
  <gcds-text margin-bottom="0">Les personnes ne pouvant pas utiliser de souris peuvent se servir d’un clavier pour la navigation au sein du système.</gcds-text>
</gcds-details>

<gcds-details details-title="Compatibilité avec les lecteurs d’écran">
  <gcds-text margin-bottom="0">Les personnes utilisant des technologies d’assistance peuvent se servir des lecteurs d’écran pour la navigation au sein du système.</gcds-text>
</gcds-details>

<gcds-details details-title="Conception réactive">
  <gcds-text margin-bottom="0">Les composants sont réactifs de manière à offrir des expériences uniformes, quel que soit l’appareil que les gens utilisent.</gcds-text>
</gcds-details>

### Visuels

<gcds-details details-title="Contraste de couleurs">
  <gcds-text margin-bottom="0">Les éléments de texte et d’interface respectent ou dépassent les ratios exigés en matière de contraste de couleurs pour garantir leur lisibilité par les personnes ayant une visuelle partielle ou le daltonisme.</gcds-text>
</gcds-details>

<gcds-details details-title="Indicateurs autres que les couleurs">
  <gcds-text margin-bottom="0">Des repères visuels autres que les couleurs, comme des formes, des icônes ou du texte en gras, sont utilisés pour indiquer les renseignements importants aux personnes ayant une déficience dans la perception des couleurs.</gcds-text>
</gcds-details>

<gcds-details details-title="Compatibilité avec les loupes d’écran">
  <gcds-text margin-bottom="0">Les personnes ayant une incapacité visuelle peuvent utiliser des loupes d’écran pour agrandir le contenu sans perdre en fonctionnalité.</gcds-text>
</gcds-details>

<gcds-details details-title="Compatibilité avec les navigateurs et avec les modules d’extension d’assistance">
  <gcds-text margin-bottom="0">La mise en forme pour l’accessibilité (comme les rôles et points caractéristiques ARIA [Accessible Rich Internet Applications ou « applications Internet enrichies accessibles »]) est préservée et fonctionne dans différents environnements.</gcds-text>
</gcds-details>

<gcds-details details-title="Texte de remplacement">
  <gcds-text margin-bottom="0">Les images et le contenu non textuel comprennent du texte de remplacement approprié afin d’offrir une description aux personnes ayant besoin de lecteurs d’écran.</gcds-text>
</gcds-details>

<gcds-details details-title="Rôles et attributs ARIA">
  <gcds-text margin-bottom="0">Les rôles et attributs ARIA (Accessible Rich Internet Applications ou « applications Internet enrichies accessibles ») sont utilisés afin que les éléments interactifs, comme les menus, les boutons et les formulaires, puissent être reconnus et utilisés par les technologies d’assistance.</gcds-text>
</gcds-details>

### Clarté

<gcds-details details-title="Champs de formulaires clairs">
  <gcds-text margin-bottom="0">Conformément aux lignes directrices, les champs de formulaires comprennent des étiquettes accessibles et des instructions claires et sont compatibles avec les technologies d’assistance.</gcds-text>
</gcds-details>

<gcds-details details-title="Messages d’erreur clairs et précis">
  <gcds-text margin-bottom="0">En cas d’erreur dans les formulaires ou les interactions, des lignes directrices claires et exploitables s’affichent pour expliquer comment corriger l’erreur en question.</gcds-text>
</gcds-details>

## Nos tests en matière d’accessibilité

<gcds-details details-title="Tests d’accessibilité automatisés">
 <gcds-text margin-bottom="0">Avant le lancement de nouveaux composants, nous utilisons des outils automatisés permettant d’examiner les unités de style, les composants et le site Web pour déceler les éventuels problèmes d’accessibilité. Ces tests précoces nous permettent de résoudre les problèmes courants avant le début des tests approfondis.</gcds-text>
</gcds-details>

<gcds-details details-title="Tests manuels à des fins d’accessibilité">
  <gcds-text margin-bottom="0">Nous effectuons des tests auprès de personnes présentant des besoins en matière d’accessibilité, y compris des personnes ayant des handicaps divers. De cette manière, nous veillons à ce que notre système soit fonctionnel et utilisable dans une variété de scénarios que les tests automatisés ne permettent pas de totalement prendre en compte.</gcds-text>
</gcds-details>

<gcds-details details-title="Recherche et meilleures pratiques">
  <gcds-text margin-bottom="0">Nous guettons toujours les nouvelles règles d’accessibilité et meilleures pratiques issues de différentes industries. Nous intégrons les nouvelles observations et suggestions aux lignes directrices de notre système de design.</gcds-text>
</gcds-details>

<gcds-card
card-title="Outils de test"
href="{{ links.accessibilityTesting }}"
card-title-tag="h3"
description="Outils et conseils pour les équipes qui choisissent de faire leurs propres tests avant la publication."
class="mt-600"> </gcds-card>

## Contactez-nous

Si vous avec des questions ou si vous rencontrez des obstacles en matière d’accessibilité lors de l’utilisation de Système de design GC, ‌[contactez-nous]({{ links.contact }}).

Nous nous engageons à résoudre rapidement tout problème afin de garantir une expérience inclusive pour tous et toutes.
