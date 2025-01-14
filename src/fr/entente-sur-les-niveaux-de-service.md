---
title: Entente sur les niveaux de service
translationKey: sla
layout: 'layouts/base.njk'
eleventyNavigation:
  key: slaFR
  title: Entente sur les niveaux de service
  locale: fr
  order: 7
  hideMain: true
---

# Système de design GC : Entente sur les niveaux de service

Le Service numérique canadien (SNC), d’<gcds-link href="https://www.canada.ca/fr/emploi-developpement-social.html" external>Emploi et Développement social Canada</gcds-link>, possède et exploite le service Système de design GC. Ce service permet aux ministères du gouvernement fédéral canadien de concevoir et de créer des expériences fiables, prévisibles et accessibles, sur le Web ou sous forme d’application.

L’équipe de Système de design GC fait référence à l’équipe du SNC qui administre Système de design GC.

**Vous êtes client de Système de design GC si vous êtes :**

- — un ministère ou un organisme gouvernemental utilisant Système de design GC;
- — un·e employé·e ou un fournisseur officiel actuel·le d’un ministère ou d’un organisme utilisant Système de design GC.

**Cette entente couvre les responsabilités du SNC pour le Système de design GC. Exclusions :**

- Les appareils tels que les ordinateurs ou les téléphones cellulaires.
- Les sites Web, services en ligne ou applications utilisant Système de design GC.

## Responsabilités

### Le Service numérique canadien (SNC) a les responsabilités suivantes :

- Héberger [Système de design GC]({{ links.home }}) ainsi qu’offrir l’assistance qui s’y rapporte.
- Répondre aux demandes de soutien et aux questions durant les heures normales de travail (de 9 h à 17 h, heure de l’Est).
- Intervenir dans un délai d’un jour ouvrable en cas d’incident. Système de design GC respecte la <gcds-link href="https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=32611" external>directive sur la gestion de la sécurité du SCT</gcds-link> et dispose d’un processus d’intervention en cas d’incident afin de résoudre rapidement les problèmes.
- De corriger les vulnérabilités de sécurité en temps et lieu, là où le SNC est responsable d’évaluer le niveau de menace d’une vulnérabilité de sécurité; Les vulnérabilités majeures sont corrigées le plus tôt possible et au plus tard une semaine après la découverte de la cause racine. Les délais de traitement peuvent être plus longs pour les aspects qui dépendent de code externe.
- Rétablir le fonctionnement du système en cas d’interruption imprévue du service.
- Alerter la clientèle par le biais de notre [site Web]({{ links.home }}) et de la [liste de diffusion]({{ links.contact }}) si Système de design GC est indisponible pour quelque raison que ce soit, et ce, dès que le SNC apprend la situation. 
- Veiller à ce que le système fonctionne et à ce que le temps de chargement des pages soit inférieur à 10 secondes au Canada dans le cas d’une connexion Internet haute vitesse, à moins que le produit ne soit victime d’une attaque de déni de service ou qu’il y ait d’autres problèmes avec [les fournisseurs d’infrastructure et de plateforme de Système de design GC](#les-fournisseurs-dinfrastructure-et-de-plateforme-de-systeme-de-design-gc-ont-les-responsabilites-suivantes-).
- Partager les journaux de l’application avec le Centre canadien pour la cybersécurité (CCC) : Système de design GC respecte l’<gcds-link href="https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/services-informatique-nuage/orientation-utilisation-securisee-services-commerciaux-informatique-nuage-amops.html" external>Orientation sur l’utilisation sécurisée des services commerciaux d’informatique en nuage : Avis de mise en œuvre de la Politique sur la sécurité (AMOPS).</gcds-link>

### Les fournisseurs d’infrastructure et de plateforme de Système de design GC ont les responsabilités suivantes :

- Fournir l’infrastructure d’infonuagique du service Amazon Web Services (AWS) et appliquer les <gcds-link href="https://aws.amazon.com/service-terms/" external>conditions de service AWS</gcds-link>.
- Fournir le réseau de diffusion de contenu (RDC) d’<gcds-link href="https://aws.amazon.com/cloudfront/sla/" external>Amazon CloudFront</gcds-link>.
- Fournir le service Figma et appliquer <gcds-link href="https://www.figma.com/legal/tos/" external>les conditions de service Figma</gcds-link>.
- Fournir le référentiel logiciel à code source ouvert <gcds-link href="https://www.npmjs.com/" external>npm</gcds-link>.

Le SNC n’est pas responsable des problèmes ou des interruptions de service de l’infrastructure AWS, d’Amazon CloudFront, de Figma ou de npm pouvant avoir des conséquences sur le temps de fonctionnement et la disponibilité de Système de design GC.

Le SNC est tenu de transmettre à la clientèle toute information relative à une interruption du service AWS, Amazon CloudFront, Figma ou npm, et ce, par le biais du [site Web]({{ links.home }}) et de la [liste de diffusion]({{ links.contact }}) de Système de design GC.

## Garantie sur le temps de fonctionnement

La présente entente sur les niveaux de service (ENS) vise l’infrastructure utilisant la [base de code]({{ links.installation }}) et la [base de données]({{ links.home }}) de Système de design GC.

Le SNC garantit que chaque année, Système de design GC fonctionnera 99 % du temps et ne sera pas immobilisé plus de 1 % du temps durant les heures normales d’ouverture.

Le SNC s’engage à maintenir un taux de disponibilité de 99 % – en dehors des maintenances d’urgence programmées et des périodes de maintenance planifiées (telles que définies dans la présente entente) – et ce, pour chaque trimestre.

L’équipe de Système de design GC adopte une approche de livraison continue, aussi peut-il arriver que des corrections soient apportées au produit plusieurs fois par jour sans aucun temps d’arrêt. Le temps d’arrêt correspond à une interruption imprévue ou à un autre évènement du service entraînant une réduction perceptible de la qualité du service pour l’utilisateur·rice ou à un évènement ayant des conséquences sur le service existant et entraînant une indisponibilité totale ou partielle du service pour le ou la client·e.

Si l’équipe de Système de design GC doit planifier une interruption de service, elle en informera la clientèle une semaine à l’avance par le biais de son [site Web]({{ links.home }}) et de la [liste de diffusion]({{ links.contact }}) et tentera de faire en sorte que le temps d’arrêt planifié n’interfère pas avec l’exploitation du système.

Cette garantie sur le temps de fonctionnement exclut toute immobilisation d’Amazon, ou d’autres fournisseurs d’infrastructure. Amazon promet un taux de temps de fonctionnement de 99,9 % dans <gcds-link href="https://aws.amazon.com/messaging/sla/" external>son ENS</gcds-link>.

## Soutien technique

Le SNC offrira des services de soutien réactifs afin de surveiller les problèmes, d’en faire un suivi et de les résoudre, que ces problèmes soient décelés par le biais d’un suivi interne ou exposés par le biais d’un signalement par la clientèle.

### Disponibilité du service

| Problème | Première intervention | Mises à jour continues |
|---|---|---|
| Service indisponible | Huit heures, durant les heures normales d’ouverture | Toutes les deux heures par la suite |
| Service affecté (problèmes de performance, erreurs intermittentes) | Un jour ouvrable | Une par jour (ouvrable) |
| Service rétabli et fonctionnel | Deux jours ouvrables | S. O. |

### Contacts relatifs au service et temps de réponse

La clientèle doit diriger toutes ses demandes de soutien vers la partie de notre référentiel GitHub consacrée aux <gcds-link href="https://github.com/cds-snc/gcds-components/issues/new/choose" external>nouveaux problèmes</gcds-link> ou nous [contacter]({{ links.contact }}) par le biais de notre site Web. Le SNC répondra aux demandes dans un délai d’un (1) jour ouvrable suivant la réception de ces dernières, et ce, du lundi au vendredi, de 9 h à 17 h (heure de l’Est). Les tickets de service sont consignés dans Freshdesk. Ils seront clôturés au bout de 10 jours si aucune réponse n’est reçue de la part de l’entité cliente.

| Description | Première intervention | Résolution* |
|---|---|---|
| Création d’un nouveau ticket | Un jour ouvrable | Cinq jours ouvrables |
| Ticket portant le statut « En attente d’action de la clientèle » | Non applicable | Dix jours ouvrables, puis clôture si aucune action supplémentaire n’est requise |
| Service affecté (problèmes de performance, erreurs intermittentes) | Un jour ouvrable | Cinq jours ouvrables |

\* La résolution se définit comme la réponse aux requêtes de la clientèle concernant l’interface ou les aspects techniques du produit, les demandes de fonctionnalités ou le traitement des problèmes liés à npm, au rdc, à Figma ou au site Web.

### Période de maintenance planifiée

Une « période de maintenance planifiée » se définit comme une perte complète ou partielle de disponibilité du service que l’équipe de Système de design GC prévoit pour permettre à l’exécution des travaux de maintenance. Une perte de disponibilité du service durant une période de maintenance planifiée n’est pas considérée comme une interruption de service.

L’équipe de Système de design GC notifiera la clientèle de toute période de maintenance planifiée au moins deux jours ouvrables avant le début de la période en question par le biais de son [site Web]({{ links.home }}) et de la [liste de diffusion]({{ links.contact }}). Les périodes de maintenance planifiées seront programmées pour survenir en dehors des périodes d’activité élevée.

Une perte de disponibilité du service survenant en dehors d’une période de maintenance planifiée mais causée par des travaux effectués durant la période de maintenance planifiée est considérée comme une interruption de service. Les renseignements liés aux périodes de maintenance planifiée sont communiqués par le biais de la [liste de diffusion]({{ links.contact }}).

### Avis de mise hors service

Si le SNC n’est plus en mesure d’offrir du soutien technique pour Système de design GC et de l’exploiter pour des raisons qui échappent à son contrôle, il en informera la clientèle deux mois à l’avance par le biais de son [site Web]({{ links.home }}) et de la [liste de diffusion]({{ links.contact }}).

Si le SNC doit mettre hors service Système de design GC, l’équipe du service collaborera avec la clientèle pour veiller à la continuité des expériences offertes Système de design GC, sur le Web ou sous forme d’application, et lui fournira une analyse des solutions alternatives.

### Le système de design GC est un logiciel libre

Système de design GC est un produit à code source ouvert permettant à des tiers de créer leur propre version à l’aide du code disponible sur <gcds-link href="https://github.com/cds-snc/gcds-components" external>GitHub</gcds-link>.

Veuillez noter que certains composants de Système de design GC contiennent les <gcds-link href="https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/communications-gouvernementales/exigences-image-marque/protection-juridique-symboles-officiels-gouvernement-canada.html" external>symboles officiels du gouvernement du Canada</gcds-link> qui sont déposés et qui ne peuvent être utilisés que pour les communications, les opérations et les activités du gouvernement du Canada.

- Conformément aux [conditions d’utilisation de Système de design GC]({{ links.termsofuse }}), la clientèle a pour responsabilité de veiller à ce que les <gcds-link href="https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/communications-gouvernementales/exigences-image-marque/protection-juridique-symboles-officiels-gouvernement-canada.html" external>symboles officiels du gouvernement du Canada</gcds-link> ne soient utilisés que lorsque la loi l’autorise et conformément au <gcds-link href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/norme-graphique.html" external>Programme fédéral de l’image de marque</gcds-link> du Canada.
