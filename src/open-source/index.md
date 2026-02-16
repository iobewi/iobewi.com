---
title: "Open Source"
description: "Contributions et travaux open source d'IOBEWI autour de ROS 2, micro-ROS et des systèmes embarqués."
layout: layouts/base.njk
permalink: "/open-source/"
bodyClass: "has-hero"
breadcrumb:
  - label: "Accueil"
    url: "/"
  - label: "Activités"
    url: "/activites/"
  - label: "Open Source"
    url: "/open-source/"
---

{% comment %}<div class="container">{% include "partials/breadcrumb.njk" %}</div>{% endcomment %}
<div class="page-hero snap-item">
  <div class="container">
    <div class="page-hero-content">
      <h1>Contributions et travaux open source</h1>
      <p class="lead">
        L'open source est un signal de sérieux et un engagement technique. IOBEWI contribue activement à l'écosystème de la robotique embarquée, en partageant des briques réutilisables et en capitalisant sur les retours de la communauté.
      </p>
    </div>
  </div>
</div>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Contributions ROS 2 et ros2_control</h2>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-100">
    <h3>Portage et intégration d'actionneurs MyActuator</h3>
    <p>
      IOBEWI a développé et publié une intégration complète des actionneurs <strong>MyActuator</strong> pour <strong>ROS 2</strong> en s'appuyant sur le framework <strong>ros2_control</strong>. Cette contribution permet de piloter ces actionneurs de manière standard au sein d'un système ROS 2, en respectant les interfaces et les conventions de l'écosystème.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Contraintes techniques</h3>
    <ul>
      <li>Gestion de la communication série propriétaire des actionneurs</li>
      <li>Respect des interfaces ros2_control (hardware_interface, controller_interface)</li>
      <li>Intégration dans un pipeline de contrôle temps réel</li>
      <li>Documentation et exemples d'utilisation</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Résultats</h3>
    <p>
      Cette contribution a été utilisée dans plusieurs projets robotiques et a reçu des retours positifs de la communauté. Elle illustre la capacité d'IOBEWI à structurer des briques logicielles réutilisables et à documenter des choix techniques complexes.
    </p>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Intégration de contrôleurs moteurs VESC via ESP micro-ROS</h2>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-100">
    <h3>Contexte</h3>
    <p>
      Les contrôleurs moteurs <strong>VESC</strong> sont largement utilisés dans les projets de robotique mobile et de traction électrique. IOBEWI a réalisé le portage complet de l'interface VESC pour <strong>ROS 2</strong> en passant par un microcontrôleur <strong>ESP32</strong> exécutant <strong>micro-ROS</strong>.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Architecture technique</h3>
    <ul>
      <li>Communication UART entre ESP32 et VESC (protocole propriétaire)</li>
      <li>Agent micro-ROS embarqué sur ESP32 pour publier les données dans ROS 2</li>
      <li>Intégration dans un graphe ROS 2 standard (topics, services, paramètres)</li>
      <li>Gestion des modes de contrôle (courant, vitesse, position)</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Choix techniques</h3>
    <p>
      Le passage par micro-ROS permet de déporter la logique de communication sur un microcontrôleur dédié, libérant ainsi les ressources du système principal (SBC) tout en maintenant une intégration native dans ROS 2. Cette approche est particulièrement adaptée aux plateformes mobiles contraintes en ressources.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-400">
    <h3>Retours d'expérience</h3>
    <p>
      Cette intégration a été validée sur plusieurs plateformes robotiques et a permis de simplifier l'architecture logicielle en remplaçant des solutions custom par une brique standardisée ROS 2. La contribution a été publiée sur GitHub et documentée pour favoriser sa réutilisation.
    </p>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Support BMS Daly pour ROS 2 via ESP micro-ROS</h2>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-100">
    <h3>Contexte</h3>
    <p>
      Les systèmes de gestion de batterie (BMS) <strong>Daly</strong> sont couramment utilisés dans les projets robotiques mobiles. IOBEWI a développé une intégration complète permettant de monitorer l'état de la batterie directement dans ROS 2, en passant par un microcontrôleur ESP32.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Fonctionnalités</h3>
    <ul>
      <li>Lecture de la tension, du courant et de l'état de charge (SoC)</li>
      <li>Publication des données dans ROS 2 via micro-ROS</li>
      <li>Alertes et diagnostics en temps réel</li>
      <li>Intégration dans un système de supervision robotique</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Contribution</h3>
    <p>
      Cette brique logicielle a été publiée sur GitHub et documentée. Elle permet de fiabiliser la gestion énergétique des plateformes mobiles en centralisant les données de batterie dans le graphe ROS 2, facilitant ainsi la supervision et la prise de décision.
    </p>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Composants et drivers ESP-IDF</h2>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-100">
    <p>
      Au-delà des contributions ROS 2, IOBEWI développe et publie régulièrement des composants pour <strong>ESP-IDF</strong>, le framework officiel des microcontrôleurs ESP32. Ces composants couvrent des besoins récurrents en robotique embarquée : communication série, gestion de capteurs, interfaçage de périphériques.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Exemples de composants publiés</h3>
    <ul>
      <li>Drivers de communication pour protocoles propriétaires</li>
      <li>Abstraction de périphériques I2C, SPI, UART</li>
      <li>Utilitaires de diagnostic et de logging</li>
      <li>Exemples d'intégration avec micro-ROS</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Démarche</h3>
    <p>
      Ces composants sont documentés, testés et publiés sous licence open source. Ils reflètent les besoins réels rencontrés sur les projets d'accompagnement et visent à réduire le temps de démarrage sur des problématiques récurrentes.
    </p>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Méthodologie de contribution</h2>
  </div>
  <div class="two-col-editorial animate-on-scroll slide-up">
    <div>
      <h3>Principes</h3>
      <ul>
        <li>Partager des briques réutilisables, pas des solutions complètes clé en main</li>
        <li>Documenter les choix techniques et les contraintes</li>
        <li>Respecter les conventions et les standards de l'écosystème</li>
        <li>Capitaliser sur les retours de la communauté</li>
      </ul>
    </div>
    <div>
      <h3>Bénéfices</h3>
      <ul>
        <li>Validation des choix techniques par des pairs</li>
        <li>Amélioration continue via les retours utilisateurs</li>
        <li>Visibilité et crédibilité technique</li>
        <li>Contribution à l'écosystème robotique embarqué</li>
      </ul>
    </div>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>Explorer les contributions</h2>
  </div>
  <div class="animate-on-scroll fade-in delay-100">
    <p class="lead" style="text-align: center; max-width: 750px; margin: 0 auto var(--stack-3);">
      L'ensemble des contributions d'IOBEWI est disponible sur GitHub. Chaque dépôt est documenté et accompagné d'exemples d'utilisation.
    </p>
  </div>
  <div class="animate-on-scroll fade-in delay-200" style="text-align: center; margin-top: var(--stack-3);">
    <a class="btn btn-primary" href="https://github.com/iobewi" target="_blank" rel="noopener">Voir les dépôts sur GitHub →</a>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="cta-hero animate-on-scroll scale-in">
    <h2>Échanger autour de contributions techniques</h2>
    <p>
      <strong>Ces contributions illustrent la capacité d'IOBEWI à structurer des briques logicielles réutilisables et à documenter des choix techniques complexes.</strong>
    </p>
    <a class="btn btn-primary" href="/contact/">Prendre contact</a>
  </div>
</section>
