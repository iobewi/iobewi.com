# Backlog qualité — opportunités d'amélioration

Ce backlog liste 4 tâches ciblées identifiées après revue du code (contenu, JS, docs, tests).

## 1) Corriger une coquille typographique

- **Constat** : dans la home, la puce technologie affiche `MicroROS` alors que la graphie utilisée ailleurs est `micro-ROS`.
- **Source** : `src/index.md`.
- **Tâche proposée** : harmoniser le libellé en `micro-ROS` (au minimum pour `data-label`, et éventuellement le texte visible si nécessaire).
- **Critère d'acceptation** : la terminologie affichée dans l'interface est cohérente sur toute la page d'accueil.

## 2) Corriger un bug JavaScript (ripple non appliqué)

- **Constat** : `initRippleEffect()` cible `.tech-chip`, mais les éléments interactifs présents sur la page sont rendus avec `.tech-sidebar-item`.
- **Source** : `src/assets/js/animations.js` + `src/index.md`.
- **Tâche proposée** : étendre le sélecteur JS aux classes réellement utilisées (ex. `.tech-chip, .tech-sidebar-item`) ou normaliser le markup vers une seule classe.
- **Critère d'acceptation** : l'effet ripple est déclenché sur les chips technologiques visibles en page d'accueil.

## 3) Corriger une anomalie de documentation

- **Constat** : la documentation d'architecture parle encore de **Hugo** et du domaine **iobewi.fr**, alors que le projet courant est en **Eleventy** et utilise `iobewi.com`.
- **Source** : `docs/cdc.md`.
- **Tâche proposée** : mettre à jour le CDC pour refléter la stack et le domaine actuels (Eleventy, arborescence `src/`, scripts npm réels).
- **Critère d'acceptation** : un nouveau contributeur peut suivre la documentation sans contradiction avec le code du dépôt.

## 4) Améliorer un test (couverture comportementale)

- **Constat** : les tests E2E vérifient la visibilité des chips mais pas l'effet d'interaction (injection/suppression de `.ripple-effect`).
- **Source** : `tests/e2e/homepage.spec.js` + `src/assets/js/animations.js`.
- **Tâche proposée** : ajouter un test Playwright qui clique une puce techno et vérifie :
  1. apparition d'un élément `.ripple-effect` ;
  2. disparition après le délai prévu (600 ms).
- **Critère d'acceptation** : le test échoue si l'effet ripple n'est pas câblé sur les bons sélecteurs.
