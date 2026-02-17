---
title: "Réalisations"
description: "Réalisations et travaux de recherche appliquée autour des systèmes embarqués."
layout: layouts/base.njk
permalink: "/realisations/"
bodyClass: "has-hero"
---

<div class="page-hero snap-item">
  <div class="container">
    <div class="page-hero-content">
      <h1>Réalisations et recherche appliquée</h1>
      <p class="lead">
        IOBEWI est une structure récente, construite sur un travail préparatoire de long terme autour des systèmes embarqués, de la robotique et de l'outillage technique. Les réalisations présentées ici reflètent cette phase continue de recherche, d'expérimentation et de structuration.
      </p>
    </div>
  </div>
</div>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>R2BEWI : Démonstrateur d'architecture système</h2>
  </div>
  <div class="lead-with-badges animate-on-scroll slide-up delay-100">
    <p class="lead">Plateforme multi-SoC conçue pour valider des choix d'architecture en conditions réelles</p>
    <div class="tech-badges">
      <img class="tech-badge" src="/assets/images/tech/espressif.svg" alt="Espressif">
      <img class="tech-badge" src="/assets/images/tech/Raspberry_Pi_logo.svg" alt="Raspberry Pi">
      <img class="tech-badge" src="/assets/images/tech/Nvidia-jetson-Logo.svg" alt="NVIDIA Jetson">
      <img class="tech-badge" src="/assets/images/tech/ros.svg" alt="ROS 2">
      <img class="tech-badge" src="/assets/images/tech/uros.svg" alt="micro-ROS">
    </div>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Contexte</h3>
    <p>
      R2BEWI est une plateforme conçue pour éprouver, en conditions réelles, les patterns d'architecture au cœur de l'accompagnement IOBEWI. Elle intègre délibérément une hétérogénéité matérielle (Espressif, Raspberry Pi, NVIDIA Jetson) reliée par ROS 2 et micro-ROS, pour valider comment structurer la communication, le découpage des responsabilités et la cohérence d'ensemble dans un système embarqué complexe.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Rôle d'IOBEWI</h3>
    <p>
      IOBEWI a conçu et structuré R2BEWI comme terrain d'épreuve de ses propres décisions architecturales. Chaque choix (découpage des couches, protocoles de communication, stratégie de test, intégration mécanique-électronique-firmware) a été justifié et documenté. Ce projet est aujourd'hui la référence concrète sur laquelle s'appuient les accompagnements proposés aux équipes.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-400">
    <h3>Défis architecturaux adressés</h3>
    <ul>
      <li>faire cohabiter des SoC aux contraintes très différentes au sein d'un même graphe ROS 2</li>
      <li>gérer la frontière temps réel / best-effort entre micro-ROS et ROS 2 sans perdre la cohérence système</li>
      <li>maintenir un projet en exploration continue sans sacrifier la reproductibilité ni la lisibilité</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-500">
    <h3>Ce que R2BEWI valide</h3>
    <p>Architecture distribuée validée sur un socle multi-SoC (ESP32 + SBC), intégrant communication temps réel et séparation claire des responsabilités.</p>
    <ul>
      <li>une stratégie d'intégration multi-SoC documentée et reproductible</li>
      <li>un modèle de découpage des responsabilités entre microcontrôleur et calculateur principal</li>
      <li>une chaîne mécanique-électronique-firmware pensée comme un système dès la conception</li>
      <li>un socle d'expérimentation directement transposable aux projets accompagnés</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-600">
    <h3>Origines : projets contributifs</h3>
    <p>Deux plateformes exploratoires dont les enseignements ont directement alimenté la conception de R2BEWI.</p>
  </div>
  <div class="grid-2 animate-on-scroll fade-in delay-700">
    <div class="project-card-compact">
      <h3>RHACOBOT</h3>
      <p>Plateforme robotique open source développée en amont, ayant servi de base pour structurer les briques initiales de contrôle d'actionneurs, d'intégration ROS 2 et d'interfaces embarquées.</p>
      <a href="https://github.com/iobewi/rhacobot" class="card-link">Explorer le projet
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
      <div class="tech-badges">
        <img class="tech-badge" src="/assets/images/tech/ros.svg" alt="ROS 2">
        <img class="tech-badge" src="/assets/images/tech/espressif.svg" alt="Espressif">
        <img class="tech-badge" src="/assets/images/tech/Raspberry_Pi_logo.svg" alt="Raspberry Pi">
      </div>
    </div>
    <div class="project-card-compact">
      <h3>TRXBEWI</h3>
      <p>Plateforme robotique basée sur un châssis de type crawler, intégrant des capteurs de perception (LiDAR, vision) et destinée à explorer des problématiques de navigation et de traitement embarqué.</p>
      <a href="https://github.com/iobewi/trxbewi" class="card-link">Explorer le projet
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
      <div class="tech-badges">
        <img class="tech-badge" src="/assets/images/tech/ros.svg" alt="ROS 2">
        <img class="tech-badge" src="/assets/images/tech/Raspberry_Pi_logo.svg" alt="Raspberry Pi">
        <img class="tech-badge" src="/assets/images/tech/Nvidia-jetson-Logo.svg" alt="NVIDIA Jetson">
      </div>
    </div>
  </div>
  <p>Les enseignements issus de ces deux plateformes ont naturellement convergé vers R2BEWI, en combinant la robustesse mécanique de l'une avec les enjeux de perception et d'algorithmie embarquée de l'autre.</p>
  <div class="note-block animate-on-scroll fade-in delay-800">
    <p>
    Pour approfondir les contributions techniques et comprendre les choix d'architecture, consultez la page <a href="/open-source/">Contributions open source →</a></p>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="section-title animate-on-scroll fade-in">
    <h2>SCANBEWI : Outil de cartographie embarquée accessible</h2>
  </div>
  <div class="lead-with-badges animate-on-scroll fade-in delay-100">
    <p class="lead">Outil de captation LiDAR embarqué pour la cartographie 2D accessible</p>
    <div class="tech-badges">
      <img class="tech-badge" src="/assets/images/tech/espressif.svg" alt="Espressif">
      <img class="tech-badge" src="/assets/images/tech/cicd.svg" alt="CI/CD">
    </div>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-200">
    <h3>Contexte</h3>
    <p>
      SCANBEWI est un outil de captation LiDAR et de production de cartographies 2D simplifiées, destiné à un public large. Il s'adresse à des contextes où des acteurs non spécialistes, tels que des agents immobiliers ou des architectes, ont besoin d'une représentation fiable et directement exploitable de l'espace, sans recourir à des outils lourds ou complexes.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-300">
    <h3>Rôle d'IOBEWI</h3>
    <p>
      IOBEWI a conçu SCANBEWI comme un support d'exploration autour de la simplification des chaînes de captation, de traitement et de restitution des données spatiales. L'accent est mis sur l'accessibilité des usages, tout en respectant les contraintes techniques liées aux systèmes embarqués.
    </p>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-400">
    <h3>Contraintes principales</h3>
    <ul>
      <li>compromis entre précision et simplicité d'usage</li>
      <li>dépendance au matériel de captation embarqué</li>
      <li>nécessité de rendre les résultats lisibles pour des non-spécialistes</li>
      <li>contraintes de calcul et d'autonomie</li>
    </ul>
  </div>
  <div class="content-group animate-on-scroll fade-in delay-500">
    <h3>Livrables / résultats</h3>
    <ul>
      <li>chaîne de captation LiDAR embarquée simplifiée</li>
      <li>production de cartographies 2D directement exploitables</li>
      <li>boîtier conçu sous Fusion 360 : compacité, accès maintenance et dissipation thermique passive intégrés dès la conception</li>
      <li>outil de démonstration pour des usages métiers non métrologiques</li>
      <li>retours d'expérience exploitables pour l'accompagnement</li>
    </ul>
  </div>
</section>

<section class="section container section-major snap-item">
  <div class="cta-hero animate-on-scroll scale-in">
    <h2>Échanger autour d'une démarche de convergence technique</h2>
    <p>
      <strong>Ces réalisations illustrent la démarche d'accompagnement d'IOBEWI : partir du terrain, structurer progressivement et rendre les projets exploitables.</strong>
    </p>
    <a class="btn btn-primary" href="/contact/">Discuter de votre projet</a>
  </div>
</section>
