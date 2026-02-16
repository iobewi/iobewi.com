---
title: "Méthodologie"
description: "L'approche progressive d'IOBEWI pour structurer et faire mûrir des projets embarqués et robotiques."
layout: layouts/base.njk
permalink: "/methodologie/"
bodyClass: "has-hero"
breadcrumb:
  - label: "Accueil"
    url: "/"
  - label: "Activités"
    url: "/activites/"
  - label: "Méthodologie"
    url: "/methodologie/"
---

{% comment %}<div class="container">{% include "partials/breadcrumb.njk" %}</div>{% endcomment %}
<div class="page-hero snap-item">
  <div class="container">
    <div class="page-hero-content">
      <h1>Méthodologie et approche technique</h1>
      <p class="lead">
        IOBEWI accompagne les projets techniques selon une démarche progressive, ancrée dans les contraintes réelles des systèmes embarqués et robotiques. Cette approche vise à structurer des bases exploitables, en respectant le rythme du projet et les besoins des équipes.
      </p>
    </div>
  </div>
</div>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Contraintes notables des systèmes embarqués et robotiques</h2>
  </div>
  <div class="animate-on-scroll slide-up delay-100">
    <p class="lead">
      Les projets d'accompagnement d'IOBEWI sont confrontés à des contraintes spécifiques qui influencent fortement les choix techniques et méthodologiques. Ces contraintes sont assumées et intégrées dès la phase de cadrage.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Contraintes matérielles et physiques</h3>
    <ul>
      <li><strong>Dépendance forte au matériel</strong> : Tout choix logiciel doit être validé sur le matériel cible (MCU, capteurs, actionneurs). Les simulations ne suffisent pas.</li>
      <li><strong>Cycles de test physiques</strong> : Les itérations nécessitent du temps de manipulation, d'assemblage et de mesure. La rapidité du développement logiciel est limitée par le matériel.</li>
      <li><strong>Hétérogénéité des plateformes</strong> : Un projet peut combiner des microcontrôleurs (ESP32), des SBC (Raspberry Pi, Jetson), des capteurs variés et des protocoles multiples (I2C, SPI, CAN, UART).</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Contraintes de déploiement et de reproductibilité</h3>
    <ul>
      <li><strong>Environnements de build complexes</strong> : Les chaînes d'outillage embarqué (ESP-IDF, cross-compilation, ROS 2) nécessitent des configurations précises et reproductibles.</li>
      <li><strong>Tests embarqués limités</strong> : Les tests unitaires classiques ne couvrent pas les interactions matériel/logiciel. Les tests d'intégration nécessitent du matériel physique.</li>
      <li><strong>Documentation implicite</strong> : Les projets embarqués cumulent souvent des choix techniques non documentés, rendant la reprise difficile.</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-400">
    <h3>Contraintes organisationnelles</h3>
    <ul>
      <li><strong>Ressources limitées</strong> : Les projets sont souvent menés par de petites équipes, avec des budgets et des délais serrés. La montée en compétence doit être progressive.</li>
      <li><strong>Équipes pluridisciplinaires</strong> : Les projets embarqués mêlent mécanique, électronique et logiciel. La coordination et la transmission sont essentielles.</li>
      <li><strong>Prototypes en évolution permanente</strong> : Les projets passent par des phases d'exploration où le matériel et les objectifs changent fréquemment.</li>
    </ul>
  </div>
  <div class="note-block animate-on-scroll fade-in delay-500">
    <p>
      Ces contraintes ne sont pas des obstacles, mais des réalités assumées. L'approche d'IOBEWI consiste à les intégrer dès le départ, en adaptant les pratiques d'outillage et de structuration au contexte réel du projet.
    </p>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Approche progressive par phases</h2>
  </div>
  <div class="animate-on-scroll slide-up delay-100">
    <p class="lead">
      L'accompagnement d'IOBEWI suit une démarche itérative, structurée en phases distinctes. Chaque phase s'appuie sur les enseignements de la précédente et introduit progressivement les outils et pratiques nécessaires.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Phase 1 : Exploration et cadrage</h3>
    <p><strong>Objectif</strong> : Comprendre le contexte, les besoins et les contraintes du projet.</p>
    <ul>
      <li>Analyse de l'état existant (matériel, logiciel, documentation)</li>
      <li>Identification des zones de fragilité et des dépendances critiques</li>
      <li>Définition d'un périmètre d'intervention réaliste</li>
      <li>Proposition d'un plan de structuration progressif</li>
    </ul>
    <p><strong>Livrables</strong> : Document de cadrage, identification des risques, plan d'action priorisé.</p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Phase 2 : Structuration et prototypage</h3>
    <p><strong>Objectif</strong> : Transformer les expérimentations en bases techniques exploitables.</p>
    <ul>
      <li>Clarification de l'architecture matériel/logiciel</li>
      <li>Découpage fonctionnel et identification des interfaces</li>
      <li>Prototypage itératif avec retours terrain</li>
      <li>Documentation progressive des choix techniques</li>
    </ul>
    <p><strong>Livrables</strong> : Architecture documentée, prototypes validés, bases techniques structurées.</p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-400">
    <h3>Phase 3 : Outillage et reproductibilité</h3>
    <p><strong>Objectif</strong> : Fiabiliser le socle technique et faciliter l'exploitation.</p>
    <ul>
      <li>Mise en place d'environnements de développement reproductibles (conteneurs, scripts)</li>
      <li>Intégration de tests automatisés (CI/CD adapté à l'embarqué)</li>
      <li>Documentation technique et guides d'utilisation</li>
      <li>Gestion de versions et stratégie de déploiement</li>
    </ul>
    <p><strong>Livrables</strong> : Pipeline CI/CD, documentation exploitable, environnements reproductibles.</p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-500">
    <h3>Phase 4 : Montée en maturité et autonomie</h3>
    <p><strong>Objectif</strong> : Rendre l'équipe autonome sur son socle technique.</p>
    <ul>
      <li>Transmission des pratiques et des outils</li>
      <li>Formation et accompagnement des équipes</li>
      <li>Consolidation de la documentation et des processus</li>
      <li>Validation de l'autonomie sur des cas réels</li>
    </ul>
    <p><strong>Livrables</strong> : Équipe autonome, processus documentés, socle technique pérenne.</p>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Pratiques d'outillage et d'automatisation</h2>
  </div>
  <div class="two-col-editorial animate-on-scroll slide-up">
    <div>
      <h3>Environnements conteneurisés</h3>
      <p>
        L'utilisation de conteneurs (Docker, Podman) permet de garantir la reproductibilité des environnements de développement et de build, même dans des contextes embarqués complexes (ESP-IDF, cross-compilation, ROS 2).
      </p>
    </div>
    <div>
      <h3>CI/CD adapté à l'embarqué</h3>
      <p>
        Les pipelines d'intégration continue sont adaptés aux contraintes de l'embarqué : build cross-compilé, tests sur matériel physique (quand possible), génération de firmware flashable, validation de l'intégration ROS 2.
      </p>
    </div>
  </div>
  <div class="two-col-editorial animate-on-scroll slide-up delay-200">
    <div>
      <h3>Tests et validation</h3>
      <p>
        La stratégie de tests combine tests unitaires (logique pure), tests d'intégration (simulation ROS 2) et tests physiques (validation matériel). L'objectif est de couvrir un maximum de cas sans dépendre uniquement du matériel.
      </p>
    </div>
    <div>
      <h3>Documentation technique</h3>
      <p>
        La documentation est intégrée au code et maintenue en continu. Elle couvre l'architecture, les choix techniques, les interfaces matérielles, les procédures de build et de déploiement. L'objectif est de faciliter la reprise et la transmission.
      </p>
    </div>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Cas réels et retours d'expérience</h2>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-100">
    <h3>Structuration d'une plateforme robotique hétérogène</h3>
    <p>
      <strong>Contexte</strong> : Plateforme combinant ESP32 (contrôle bas niveau), Raspberry Pi (traitement), capteurs LiDAR et IMU, actionneurs motorisés.
    </p>
    <p>
      <strong>Approche</strong> : Clarification des interfaces (micro-ROS pour ESP32, ROS 2 pour SBC), découpage fonctionnel (perception, contrôle, navigation), mise en place d'un pipeline CI/CD, documentation progressive.
    </p>
    <p>
      <strong>Résultat</strong> : Socle technique exploitable, temps de build réduit de 2h à 10min, documentation permettant à un nouveau développeur de démarrer en 1 journée.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Montée en maturité d'un prototype exploratoire</h3>
    <p>
      <strong>Contexte</strong> : Prototype fonctionnel mais fragile (code non structuré, dépendances implicites, déploiement manuel).
    </p>
    <p>
      <strong>Approche</strong> : Audit du code existant, identification des dépendances, refactoring progressif, conteneurisation de l'environnement, tests automatisés sur les parties critiques.
    </p>
    <p>
      <strong>Résultat</strong> : Prototype consolidé, reproductibilité garantie, déploiement automatisé, dette technique réduite de 70%.
    </p>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Transmission et autonomie</h2>
  </div>
  <div class="two-col-editorial animate-on-scroll slide-up">
    <div>
      <p>
        L'objectif final de l'accompagnement est de rendre les équipes autonomes sur leur socle technique. Cela passe par une transmission progressive des pratiques, une documentation exploitable et une validation sur des cas réels.
      </p>
    </div>
    <div>
      <p>
        L'autonomie ne signifie pas l'absence de support, mais la capacité de l'équipe à comprendre, maintenir et faire évoluer son système sans dépendance forte à un intervenant externe.
      </p>
    </div>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="cta-hero animate-on-scroll scale-in">
    <h2>Discuter de votre contexte technique</h2>
    <p>
      <strong>Cette méthodologie s'adapte au contexte de chaque projet. IOBEWI intervient aux côtés des équipes pour structurer, outiller et transmettre.</strong>
    </p>
    <a class="btn btn-primary" href="/contact/">Échanger sur votre projet</a>
  </div>
</section>
