---
title: "Méthodologie"
description: "L'approche progressive d'IOBEWI pour structurer et faire mûrir des projets embarqués et robotiques."
layout: layouts/base.njk
permalink: "/ressources/methodologie/"
bodyClass: "has-hero"
breadcrumb:
  - label: "Accueil"
    url: "/"
  - label: "Ressources"
    url: "/ressources/"
  - label: "Méthodologie"
    url: "/ressources/methodologie/"
---
<div class="page-hero snap-item">
  <div class="container">
    <div class="page-hero-content">
      <p class="eyebrow"><a href="/ressources/">← Ressources</a></p>
      <h1>Méthodologie et approche technique</h1>
      <p class="lead">
        IOBEWI accompagne les projets techniques selon une démarche progressive, ancrée dans les contraintes réelles des systèmes embarqués et robotiques.
        Cette approche vise à structurer des bases exploitables, en respectant le rythme du projet et les besoins des équipes.
      </p>
    </div>
  </div>
</div>
<section class="section container snap-item">
  <div class="content-group animate-on-scroll fade-in delay-150">
    <p><strong>Objectif :</strong> structurer un socle technique exploitable, réduire la dette implicite et sécuriser l’évolution du système.</p>
  </div>
  <!-- ===================================================== -->
  <!-- Contraintes -->
  <!-- ===================================================== -->
  <div class="section-title animate-on-scroll fade-in">
    <h2>Contraintes notables des systèmes embarqués et robotiques</h2>
  </div>
  <div class="animate-on-scroll slide-up delay-100">
    <p class="lead">
      Les contraintes spécifiques de l’embarqué influencent les choix techniques et méthodologiques. Elles sont intégrées dès le cadrage
      et guident les arbitrages.
    </p>
  </div>
  <div class="grid animate-on-scroll slide-up delay-200">
    <div class="card">
      <h3>Contraintes matérielles et physiques</h3>
      <ul>
        <li><strong>Dépendance forte au matériel</strong> : validation sur cible (MCU, capteurs, actionneurs).</li>
        <li><strong>Cycles de test physiques</strong> : manipulation, assemblage, mesure.</li>
        <li><strong>Hétérogénéité des plateformes</strong> : MCU + SBC + bus variés (I2C, SPI, CAN, UART).</li>
      </ul>
    </div>
    <div class="card">
      <h3>Déploiement et reproductibilité</h3>
      <ul>
        <li><strong>Environnements de build complexes</strong> : ESP-IDF, cross-compilation, ROS 2.</li>
        <li><strong>Tests embarqués limités</strong> : besoin de tests d’intégration sur matériel.</li>
        <li><strong>Documentation implicite</strong> : choix non formalisés, reprise difficile.</li>
      </ul>
    </div>
  </div>
  <div class="grid animate-on-scroll slide-up delay-300">
    <div class="card">
      <h3>Contraintes organisationnelles</h3>
      <ul>
        <li><strong>Ressources limitées</strong> : montée en compétence progressive.</li>
        <li><strong>Équipes pluridisciplinaires</strong> : coordination mécanique/électronique/logiciel.</li>
        <li><strong>Prototypes en évolution</strong> : objectifs et matériel changent fréquemment.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Point de méthode</h3>
      <p>
        Ces contraintes ne sont pas des obstacles, mais des réalités assumées. L'approche d'IOBEWI consiste à les intégrer dès le départ,
        en adaptant l’outillage et la structuration au contexte réel du projet.
      </p>
    </div>
  </div>
  <!-- ===================================================== -->
  <!-- Approche système -->
  <!-- ===================================================== -->
  <div class="section-title animate-on-scroll fade-in" style="margin-top: var(--stack-3); border-top: 0px solid var(--border); padding-top: var(--stack-3);">
    <h2>Approche système : de la conception à l'intégration</h2>
  </div>
  <div class="animate-on-scroll slide-up delay-100">
    <p class="lead">
      Démarche intégrée où mécanique, électronique et logiciel sont pensés simultanément pour réduire les incohérences découvertes trop tard.
    </p>
  </div>
  <div class="grid animate-on-scroll slide-up delay-200">
    <div class="card">
      <h3>Chaîne d'intégration typique</h3>
      <ol>
        <li>Analyse des contraintes fonctionnelles et physiques</li>
        <li>Conception mécanique et architecture des volumes</li>
        <li>Architecture électronique adaptée à l'intégration</li>
        <li>Conception PCB</li>
        <li>Fabrication et prototypage</li>
        <li>Intégration firmware</li>
        <li>Instrumentation et critères d'acceptation</li>
        <li>Tests croisés matériel / logiciel</li>
        <li>Itérations maîtrisées</li>
      </ol>
    </div>
    <div class="card">
      <h3>Rôle structurant de la mécanique</h3>
      <p>La conception mécanique intervient en amont et conditionne :</p>
      <ul>
        <li>la gestion des contraintes thermiques</li>
        <li>la fiabilité des assemblages</li>
        <li>l'accessibilité à la maintenance</li>
        <li>la robustesse globale du système</li>
      </ul>
    </div>
  </div>
  <!-- ===================================================== -->
  <!-- Phases -->
  <!-- ===================================================== -->
  <div class="section-title animate-on-scroll fade-in" style="margin-top: var(--stack-3); border-top: 0px solid var(--border); padding-top: var(--stack-3);">
    <h2>Approche progressive par phases</h2>
  </div>
  <div class="animate-on-scroll slide-up delay-100">
    <p class="lead">
      Démarche itérative structurée en phases, chacune introduisant progressivement les outils et pratiques nécessaires.
    </p>
  </div>
  <div class="grid animate-on-scroll slide-up delay-200">
    <div class="card">
      <h3>Phase 1 : Exploration et cadrage</h3>
      <p><strong>Objectif</strong> : comprendre le contexte, les besoins et les contraintes.</p>
      <ul>
        <li>Analyse de l'état existant (matériel, logiciel, documentation)</li>
        <li>Identification des zones de fragilité et dépendances critiques</li>
        <li>Définition d'un périmètre réaliste</li>
        <li>Plan de structuration progressif</li>
      </ul>
      <p><strong>Livrables</strong> : note de cadrage, backlog priorisé + jalons.</p>
    </div>
    <div class="card">
      <h3>Phase 2 : Structuration et prototypage</h3>
      <p><strong>Objectif</strong> : transformer les expérimentations en bases exploitables.</p>
      <ul>
        <li>Clarification architecture matériel/logiciel</li>
        <li>Découpage fonctionnel et interfaces</li>
        <li>Prototypage itératif avec retours terrain</li>
        <li>Documentation progressive</li>
      </ul>
      <p><strong>Livrables</strong> : architecture documentée, prototypes validés, bases structurées.</p>
    </div>
  </div>
  <div class="grid animate-on-scroll slide-up delay-300">
    <div class="card">
      <h3>Phase 3 : Outillage et reproductibilité</h3>
      <p><strong>Objectif</strong> : fiabiliser le socle technique et faciliter l'exploitation.</p>
      <ul>
        <li>Environnements reproductibles (conteneurs, scripts)</li>
        <li>CI/CD adapté à l’embarqué</li>
        <li>Documentation et guides</li>
        <li>Gestion de versions et stratégie de déploiement</li>
      </ul>
      <p><strong>Livrables</strong> : pipeline CI, docs exploitables, environnements reproductibles.</p>
    </div>
    <div class="card">
      <h3>Phase 4 : Montée en maturité et autonomie</h3>
      <p><strong>Objectif</strong> : rendre l'équipe autonome sur son socle technique.</p>
      <ul>
        <li>Transmission des pratiques et des outils</li>
        <li>Formation et accompagnement</li>
        <li>Consolidation documentation et processus</li>
        <li>Validation sur cas réels</li>
      </ul>
      <p><strong>Livrables</strong> : autonomie, processus documentés, socle pérenne.</p>
    </div>
  </div>
  <!-- ===================================================== -->
  <!-- Outillage -->
  <!-- ===================================================== -->
  <div class="section-title animate-on-scroll fade-in" style="margin-top: var(--stack-3); border-top: 0px solid var(--border); padding-top: var(--stack-3);">
    <h2>Pratiques d'outillage et d'automatisation</h2>
  </div>
  <div class="grid animate-on-scroll slide-up delay-100">
    <div class="card">
      <h3>Environnements conteneurisés</h3>
      <p>
        Les conteneurs garantissent la reproductibilité des environnements de développement et de build, même avec ESP-IDF, ROS 2 et cross-compilation.
      </p>
    </div>
    <div class="card">
      <h3>CI/CD adapté à l'embarqué</h3>
      <p>
        Pipelines adaptés : build cross-compilé, tests (quand possible sur matériel), génération d’artefacts flashables, validation d’intégration.
      </p>
    </div>
  </div>
  <div class="grid animate-on-scroll slide-up delay-200">
    <div class="card">
      <h3>Tests et validation</h3>
      <p>
        Combinaison de tests unitaires (logique pure), tests d’intégration (simulation ROS 2) et tests physiques (validation matériel).
      </p>
    </div>
    <div class="card">
      <h3>Documentation technique</h3>
      <p>
        Documentation intégrée au code : architecture, choix techniques, interfaces matérielles, procédures de build et déploiement.
      </p>
    </div>
  </div>
  <!-- ===================================================== -->
  <!-- Retours d'expérience -->
  <!-- ===================================================== -->
  <div class="section-title animate-on-scroll fade-in" style="margin-top: var(--stack-3); border-top: 0px solid var(--border); padding-top: var(--stack-3);">
    <h2>Cas réels et retours d'expérience</h2>
  </div>
  <p class="card-foot animate-on-scroll fade-in">
    Exemples issus de plateformes internes et contributives. Ordres de grandeur indicatifs (variables selon contexte), données anonymisées.
  </p>
  <div class="grid animate-on-scroll slide-up delay-100">
    <div class="card">
      <h3>Plateforme robotique hétérogène</h3>
      <p><strong>Contexte</strong> : ESP32 (bas niveau), Raspberry Pi (traitement), LiDAR/IMU, actionneurs.</p>
      <p><strong>Approche</strong> : interfaces (micro-ROS/ROS 2), découpage, CI/CD, documentation progressive.</p>
      <p><strong>Résultat</strong> : socle exploitable, temps de build réduit, onboarding accéléré.</p>
    </div>
    <div class="card">
      <h3>Prototype exploratoire en montée en maturité</h3>
      <p><strong>Contexte</strong> : prototype fragile (code non structuré, déploiement manuel).</p>
      <p><strong>Approche</strong> : audit, refactoring progressif, conteneurisation, tests ciblés.</p>
      <p><strong>Résultat</strong> : reproductibilité garantie, déploiement automatisé, réduction de dépendances implicites.</p>
    </div>
  </div>
  <!-- ===================================================== -->
  <!-- Transmission -->
  <!-- ===================================================== -->
  <div class="section-title animate-on-scroll fade-in" style="margin-top: var(--stack-3); border-top: 0px solid var(--border); padding-top: var(--stack-3);">
    <h2>Transmission et autonomie</h2>
  </div>
  <div class="grid animate-on-scroll slide-up delay-100">
    <div class="card">
      <p>
        L'objectif final est de rendre les équipes autonomes sur leur socle technique : transmission progressive des pratiques,
        documentation exploitable, validation sur cas réels.
      </p>
    </div>
    <div class="card">
      <p>
        L'autonomie ne signifie pas l'absence de support, mais la capacité à comprendre, maintenir et faire évoluer le système
        sans dépendance à une personne clé.
      </p>
    </div>
  </div>
</section>
<section class="section container snap-item">
  <div class="cta-block animate-on-scroll scale-in">
    <h2>Discuter de votre contexte technique</h2>
    <p>
      <strong>Cette méthodologie s'adapte au contexte de chaque projet. IOBEWI intervient aux côtés des équipes pour structurer, outiller et transmettre.</strong>
    </p>
    <a class="btn btn-primary" href="/contact/">Échanger sur votre projet</a>
  </div>
</section>
