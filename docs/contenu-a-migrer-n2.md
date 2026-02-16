# Contenu à migrer vers pages Niveau 2

**Date** : 2026-02-16
**Source** : `src/index.md`
**Destination** : Pages N2 à créer

---

## 1. Bloc "Contributions et travaux open source"

**Source** : index.md lignes 158-167
**Destination cible** : `/open-source/index.md` (à créer)

```html
<article class="featured-block animate-on-scroll scale-in delay-200">
  <h3>Contributions et travaux open source</h3>
  <ul>
    <li>Portage et intégration <strong>ROS 2 / ros2_control</strong> d'actionneurs <strong>MyActuator</strong></li>
    <li>Portage et intégration <strong>ROS 2</strong> de contrôleurs moteurs <strong>VESC</strong> via <strong>ESP micro-ROS</strong></li>
    <li>Support <strong>BMS Daly</strong> pour <strong>ROS 2</strong> via <strong>ESP micro-ROS</strong></li>
    <li>Développement et publication de composants et de drivers pour <strong>ESP-IDF</strong></li>
    <li>Contributions publiques réutilisées, avec retours de la communauté</li>
  </ul>
</article>

<p class="explore-links animate-on-scroll fade-in delay-300">
  <a href="https://github.com/iobewi" target="_blank" rel="noopener">Explorer sur GitHub →</a>
</p>
```

---

## 2. Bloc "Contraintes notables"

**Source** : index.md lignes 201-209
**Destination cible** : `/methodologie/index.md` (à créer)

```html
<article class="note-block animate-on-scroll fade-in delay-400">
  <h3>Contraintes notables</h3>
  <ul>
    <li>Contraintes spécifiques aux systèmes embarqués et robotiques (déploiement, tests, reproductibilité)</li>
    <li>Dépendance forte au matériel, aux chaînes d'outillage et aux cycles de test physiques</li>
    <li>Projets à fort contenu technique, en cours de structuration et de consolidation</li>
    <li>Ressources et équipes volontairement limitées, favorisant des démarches itératives</li>
  </ul>
</article>
```

---

## 3. Cartes projets détaillées

**Source** : index.md lignes 177-197
**Destination cible** : Pages individuelles `/projets/{nom}/` (à créer) OU déplacer vers `/realisations/`

```html
<article class="project-card-compact animate-on-scroll slide-up stagger-1" data-icon="robot">
  <h3>RHACOBOT</h3>
  <p>Démonstrateur robotique open source autour de <strong>ROS 2</strong>, du contrôle d'actionneurs et de l'intégration embarquée.</p>
  <p class="card-foot">Plateforme d'expérimentation d'architectures logicielles et d'outillage</p>
</article>
<article class="project-card-compact animate-on-scroll slide-up stagger-2" data-icon="puzzle">
  <h3>R2BEWI</h3>
  <p>Plateforme polyvalente issue de RHACOBOT, avec perception enrichie.</p>
  <p class="card-foot">Support d'expérimentation CI/CD pour la robotique</p>
</article>
<article class="project-card-compact animate-on-scroll slide-up stagger-3" data-icon="radar">
  <h3>SCANBEWI</h3>
  <p>Exploration LiDAR et cartographies 2D exploitables.</p>
  <p class="card-foot">Captation, traitement embarqué et restitution logicielle</p>
</article>
<article class="project-card-compact animate-on-scroll slide-up stagger-4" data-icon="brain">
  <h3>BALBEWI</h3>
  <p>Cadre conceptuel pour structurer des socles techniques embarqués.</p>
  <p class="card-foot">Réflexion sur les axes méthodologiques</p>
</article>
```

---

## 4. Logos technologies (tech-sidebar)

**Source** : index.md lignes 29-54
**Action** : ❌ **SUPPRIMER** (violation CDC - acronymes non contextualisés)

**Alternative** : Remplacer par une phrase narrative si nécessaire, par exemple :
> "Du microcontrôleur (ESP32) aux plateformes de calcul (Raspberry Pi, Jetson), en passant par ROS 2 et micro-ROS, avec une attention particulière à l'outillage CI/CD."

Mais selon le CDC, même cette alternative est limite pour le N0. Mieux vaut supprimer complètement.

---

## Notes pour la création des pages N2

### Page `/open-source/index.md`

**Structure suggérée** :
- Introduction : L'open source comme signal de sérieux
- Contributions ROS 2 détaillées (MyActuator, VESC, BMS Daly)
- Composants ESP-IDF
- Méthodologie de contribution
- Retours de la communauté
- Liens GitHub détaillés

### Page `/methodologie/index.md`

**Structure suggérée** :
- Introduction : Approche progressive
- Contraintes notables (déplacées depuis accueil)
- Méthodologie détaillée par phase
- Outillage et pratiques
- Cas réels avec choix techniques argumentés

### Pages `/projets/{nom}/index.md`

**Structure suggérée par projet** :
- Contexte et objectifs
- Architecture technique détaillée
- Stack technologique complet
- Choix techniques argumentés
- Résultats et enseignements
- Schémas et pipelines
