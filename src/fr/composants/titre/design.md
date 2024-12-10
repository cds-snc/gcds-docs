---
title: Titre
layout: 'layouts/component-documentation.njk'
translationKey: 'headingDesign'
tags: ['headingFR', 'design']
# date: "git Last Modified"
---

## Anatomie d'un titre

<ol class="anatomy-list">
  <li>Le <strong>titre</strong> est une ligne de texte mis en évidence qui introduit le paragraphe ou tout autre contenu du corps qui le suit immédiatement. La proéminence visuelle du titre diminue en fonction de son niveau dans l'ordre hiérarchique. L'accent est davantage mis visuellement sur le premier titre, le H1, que sur un titre subordonné comme un H5 ou un H6. Les technologies d'assistance, telles que les lecteurs d'écran, identifient les titres en fonction de leur niveau.</li>
  <li>Le composant <strong>texte</strong> ne contient pas de titre. Son sujet est lié à l'idée principale du titre correspondant.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-heading-anatomy.svg" alt="Un titre en gros caractères au-dessus d'un bloc de texte plus petit. Le texte en se lit comme suit : « Ceci est un titre. » Le bloc suivant se lit comme suit : « Il s'agit de texte qui décrit plus en détail le sujet ou l'action indiqués dans la section qui suit. Le texte est généralement constitué d'une ou de plusieurs lignes ou paragraphes de contenu pour la section. On peut aussi s'en servir pour introduire une liste à puces, un tableau ou d'autres contenus, comme une image ou une vidéo. » Il y a une étiquette pointant vers le plus grand texte indiquant « 1 » et il y a une étiquette pointant vers le plus petit bloc de texte qui indique « 2 »." />

## Conception et accessibilité du composant titre

### Classez les niveaux de titre de manière hiérarchique

Les niveaux de titre suivent un ordre séquentiel et hiérarchique : les niveaux supérieurs ont un texte d'affichage plus grand que les niveaux inférieurs.

- Définissez des niveaux de titre corrects et cohérents pour aligner les titres codés et visuels sur une page. Des titres cohérents favorisent une expérience équitable pour les personnes qui utilisent des technologies d'assistance.
- Classez les titres de manière séquentielle, du plus bas au plus élevé (H1 à H6).
- Évitez de sauter des niveaux de titre. Restructurez plutôt le contenu de manière à ce que les titres soient utilisés de manière séquentielle, du plus grand (H1) au plus petit (H6).
- N'utilisez un titre H1 qu'une seule fois sur une page. D'autres types de titres peuvent être utilisés plusieurs fois.
- Utilisez les titres H2 pour décrire les sections individuelles. Chaque section doit avoir un titre H2.
- Utilisez les titres H3 à H6 dans les sections. Les sections peuvent contenir plusieurs titres H3-H6, à condition qu'ils soient placés dans l'ordre hiérarchique.

### Maintenez des limites de caractères accessibles

- Conservez les limites de caractères par défaut pour chaque ligne de titre afin d'obtenir une longueur de lecture agréable et accessible. Ces valeurs par défaut créent une longueur de ligne équilibrée et cohérente entre les tailles de police des titres.
- Limitez les limites de caractères aux longueurs suivantes pour maintenir un équilibre visuel entre les titres d'une page :
  - 31 caractères pour H1.
  - 35 caractères pour H2.
  - 40 caractères pour H3.
  - 45 caractères pour H4.
  - 50 caractères pour H5.
  - 57 caractères pour H6.

### Rédigez des titres clairs et cohérents

- Utilisez la majuscule initiale.
- Incluez un seul titre H1 descriptif pour chaque page afin de communiquer le contenu et l'objectif de la page — le titre de la page.
- Utilisez des sous-titres pour diviser le contenu. Divisez le contenu en plus petites sections et regroupez les éléments communs.
- Faites en sorte que chaque titre soit distinctif et indiquez clairement le contenu que l'on trouve dans cette section.
- Lorsque vous avez épuisé les titres et autres éléments de style disponibles, envisagez d'utiliser des épaisseurs de police pour mettre en évidence les mots dans le corps du texte.
- Lorsque vous passez de l'anglais au français, gardez à l'esprit que les titres seront environ 30 % plus longs en français.

### Utiliser un espacement cohérent

- Conservez l'espacement par défaut pour une expérience de lecture agréable et accessible. Ces valeurs par défaut créent des espaces visuels et des séparations entre les différentes sections.
- Conservez les valeurs d'espacement suivantes pour maintenir un équilibre visuel entre les titres d'une page :
  - Marge inférieure : 400 pour tous les niveaux.
  - Marge supérieure : 0 pour H1 et 500 pour H2 et 3.
