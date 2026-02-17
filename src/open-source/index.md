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
    <div class="section-title-row">
      <h2>Contributions ROS 2 et ros2_control</h2>
      <div class="tech-badges">
        <img class="tech-badge" src="/assets/images/tech/ros.svg" alt="ROS 2">
      </div>
    </div>
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
      Publiée sur GitHub avec documentation et exemples d'usage, conçue pour respecter les conventions ros2_control. Brique réutilisable et structurée, éprouvée sur les plateformes robotiques internes d'IOBEWI.
    </p>
  </div>
  <div class="section-link-end animate-on-scroll fade-in delay-400">
    <a href="https://github.com/ioio2995/myactuator_ros2_control" class="card-link" target="_blank" rel="noopener">Explorer le projet <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
  </div>
</section>


<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <div class="section-title-row">
      <h2>Driver ROS 2 pour capteurs IMU WitMotion</h2>
      <div class="tech-badges">
        <img class="tech-badge" src="/assets/images/tech/ros.svg" alt="ROS 2">
      </div>
    </div>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-100">
    <h3>Contexte</h3>
    <p>
      Les capteurs <strong>WitMotion</strong> (IMU, magnétomètre, baromètre, GPS) sont utilisés dans de nombreux projets robotiques et embarqués. IOBEWI a développé et publié un driver <strong>ROS 2</strong> en C++ permettant d'intégrer ces capteurs directement dans un graphe ROS 2, avec communication série asynchrone via <strong>asio</strong>.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Points techniques</h3>
    <ul>
      <li>Communication série asynchrone (asio) — indépendante de la plateforme</li>
      <li>Publication de 12 topics ROS 2 selon les messages activés sur le capteur</li>
      <li>Configuration par fichier ou ligne de commande (port, débit, fréquence, frame)</li>
      <li>Documentation, exemples de lancement et paramètres exposés</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Résultats</h3>
    <p>
      8 étoiles GitHub et 1 fork — signal de réutilisation réelle par d'autres équipes. Brique publiée, documentée et utilisable sans modification dans un projet ROS 2 standard.
    </p>
  </div>
  <div class="section-link-end animate-on-scroll fade-in delay-400">
    <a href="https://github.com/ioio2995/witmotion_ros2" class="card-link" target="_blank" rel="noopener">Explorer le projet <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <div class="section-title-row">
      <h2>Support BMS Daly pour ROS 2 via ESP micro-ROS</h2>
      <div class="tech-badges">
        <img class="tech-badge" src="/assets/images/tech/ros.svg" alt="ROS 2">
        <img class="tech-badge" src="/assets/images/tech/uros.svg" alt="micro-ROS">
        <img class="tech-badge" src="/assets/images/tech/espressif.svg" alt="Espressif">
      </div>
    </div>
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
  <div class="section-link-end animate-on-scroll fade-in delay-400">
    <a href="https://github.com/ioio2995/uros_DalyBMS" class="card-link" target="_blank" rel="noopener">Explorer le projet <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <div class="section-title-row">
      <h2>Librairie de composants pour ESP-IDF</h2>
      <div class="tech-badges">
        <img class="tech-badge" src="/assets/images/tech/espressif.svg" alt="Espressif">
      </div>
    </div>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-100">
    <p>Au-delà des contributions ROS 2, IOBEWI développe et maintient une librairie de composants pour <strong>ESP-IDF</strong>, le framework officiel des microcontrôleurs ESP32.</p>
    <p>Ce dépôt constitue une base modulaire destinée à structurer le développement de systèmes embarqués. Les composants sont organisés de manière cohérente afin de distinguer clairement l'accès matériel, la logique applicative et les mécanismes d'intégration.</p>
    <p>L'objectif n'est pas de proposer des exemples isolés, mais de mettre à disposition un ensemble de briques réutilisables, maintenables et évolutives.</p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Organisation des composants</h3>
    <p>La librairie regroupe notamment :</p>
    <ul>
      <li>Des composants dédiés à l'interfaçage matériel</li>
      <li>Des bibliothèques indépendantes du matériel</li>
      <li>Des modules d'intégration</li>
      <li>Des applications de référence démontrant des chaînes fonctionnelles complètes</li>
    </ul>
    <p>Cette organisation facilite la lisibilité, la réutilisation et l'intégration progressive dans des projets embarqués plus larges.</p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Démarche</h3>
    <p>Les composants sont documentés, versionnés et pensés pour s'intégrer dans une architecture cohérente. Le dépôt reflète une approche d'ingénierie structurée visant à améliorer la maintenabilité et la reproductibilité des développements.</p>
  </div>
  <div class="section-link-end animate-on-scroll fade-in delay-400">
    <a href="https://github.com/iobewi/iobewi-idf-components" class="card-link" target="_blank" rel="noopener">Explorer le projet <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
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
  <div class="cta-hero animate-on-scroll scale-in">
    <h2>Échanger autour de contributions techniques</h2>
    <p>
      <strong>Ces contributions illustrent la capacité d'IOBEWI à structurer des briques logicielles réutilisables et à documenter des choix techniques complexes.</strong>
    </p>
    <a class="btn btn-primary" href="/contact/">Prendre contact</a>
  </div>
</section>
