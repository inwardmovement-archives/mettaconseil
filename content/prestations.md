---
title: "Prestations"
description: "Les prestations que nous offrons"
layout: prestations
---

<div class="grid-prestations">
  <div class="nav flex-column nav-pills" id="prestations-tab" role="tablist" aria-orientation="vertical">
    <a class="nav-link active" id="organisation-si-tab" data-toggle="pill" href="#organisation-si" role="tab" aria-controls="organisation-si" aria-selected="true">Organisation et SI</a>
    <a class="nav-link" id="developpement-web-tab" data-toggle="pill" href="#developpement-web" role="tab" aria-controls="developpement-web" aria-selected="false">Développement web</a>
    <a class="nav-link" id="gestion-informatique-tab" data-toggle="pill" href="#gestion-informatique" role="tab" aria-controls="gestion-informatique" aria-selected="false">Gestion informatique</a>
  </div>
  <div class="tab-content" id="prestations-tabContent">
    <div class="tab-pane fade show active" id="organisation-si" role="tabpanel" aria-labelledby="organisation-si-tab">
{{< prestation nom="Organisation et Systèmes d'Information" >}}
<p class="lead text-center">Vous nous confiez la mise en place d'un système vous permettant de gérer les tâches organisationnelles indispensables au fonctionnement de votre collectif</p>

---

L'objectif est d'équiper votre collectif d'une organisation et d'un système d'information (SI) lui permettant de fonctionner :
- un processus de décision,
- une plateforme collaborative reliant tous les membres,
- les processus de gestion des membres,
- etc.

Les particularités de cette organisation et de ce système d'information sont les suivantes :
- structurés autour de la motivation individuelle propre à chaque participant,
- très simple à comprendre et à utiliser,
- facile à installer,
- sans rupture avec l'organisation existante (s'installe en recouvrement du système existant),
- à couts quasi nuls,
- visant à éviter les souffrances organisationnelles.

La singularité de ce système : **il met automatiquement en place des synergies avec les collectifs œuvrant sur des sujets semblables** ou reliés de près ou de loin.

Le système proposé s'appuie sur les principes organisationnels suivants :
- une *éthique claire*, c'est-à-dire une *finalité précise* : un but commun permet une prise de décision plus rationnelle sur la base des meilleurs arguments. Metta Conseil préconise la priorité donnée à l'allègement de la souffrance qui présente des avantages en termes organisationnels.
- la *décision par consentement* : c'est un processus de décision qui tend à sélectionner les meilleurs arguments rationnels.
- l'organisation *par centres d'intérêt* : l'intérêt de chacun pour les sous-projets constitue l'énergie naturelle qui fait avancer le projet global (stratégie du « projet latéral »).
- la *[transparence radicale](https://fr.wikipedia.org/wiki/Transparence_radicale)* : c'est un élément de sécurisation (donne de la confiance en externe et évite les dérapages en interne).
- la *gratuité* de la participation.
{{< /prestation >}}
    </div>
    <div class="tab-pane fade" id="developpement-web" role="tabpanel" aria-labelledby="developpement-web-tab">
{{< prestation nom="Développement web" >}}
<p class="lead text-center">Vous nous confiez la création ou la refonte de votre site Internet</p>

---

{{< alert "success" >}}
Nous travaillons avec l'architecture [JAMstack](https://jamstack.org/) : c'est une nouvelle façon de créer des sites Web et applications offrant de meilleures performances, une sécurité accrue, une évolutivité à cout réduit et une meilleure expérience de développement.
{{< /alert >}}

#### Technologies utilisées
<div class="table-responsive">
  <table class="table table-sm table-striped">
    <tbody>
{{< table/tr >}}
  {{< table/td row="true" >}}[Hugo](https://gohugo.io/){{< /table/td >}}
  {{< table/td >}}Générateur de site statique{{< /table/td >}}
{{< /table/tr >}}
{{< table/tr >}}
  {{< table/td row="true" >}}[Bootstrap](https://getbootstrap.com/){{< /table/td >}}
  {{< table/td >}}Framework CSS{{< /table/td >}}
{{< /table/tr >}}
{{< table/tr >}}
  {{< table/td row="true" >}}[Lunr](https://lunrjs.com/){{< /table/td >}}
  {{< table/td >}}Moteur de recherche{{< /table/td >}}
{{< /table/tr >}}
{{< table/tr >}}
  {{< table/td row="true" >}}[Fauna](https://fauna.com/){{< /table/td >}}
  {{< table/td >}}Base de données{{< /table/td >}}
{{< /table/tr >}}
{{< table/tr >}}
  {{< table/td row="true" >}}[Netlify](https://www.netlify.com/){{< /table/td >}}
  {{< table/td >}}Hébergement du site{{< /table/td >}}
{{< /table/tr >}}
{{< table/tr >}}
  {{< table/td row="true" >}}[Git](https://git-scm.com/){{< /table/td >}}
  {{< table/td >}}Gestion de versions{{< /table/td >}}
{{< /table/tr >}}
{{< table/tr >}}
  {{< table/td row="true" >}}[GitHub](https://github.com/){{< /table/td >}}
  {{< table/td >}}Hébergement du code source, intégration et déploiement continus{{< /table/td >}}
{{< /table/tr >}}
  </tbody>
  </table>
</div>

{{< /prestation >}}
    </div>
    <div class="tab-pane fade" id="gestion-informatique" role="tabpanel" aria-labelledby="gestion-informatique-tab">
{{< prestation nom="Gestion informatique" >}}
<p class="lead text-center">Vous nous confiez la gestion de certaines tâches organisationnelles</p>

---

Les tâches envisageables sont aussi variées que :
- edition de contenu web
- prise de notes en réunion et diffusion du compte-rendu
- gestion de newsletter
- animation des réseaux sociaux
- tâches administratives diverses

{{< /prestation >}}
    </div>
  </div>
</div>
