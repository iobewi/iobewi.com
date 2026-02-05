# Backlog qualité — opportunités d'amélioration

Ce backlog liste 4 tâches ciblées identifiées après une revue rapide du code et du contenu.

## 1) Corriger une coquille typographique

- **Constat** : le titre « Ce que IOBEWI ne fait pas » est grammaticalement incorrect.
- **Source** : `src/index.md`.
- **Tâche proposée** : remplacer par « Ce qu’IOBEWI ne fait pas ».
- **Critère d'acceptation** : la section d'accueil affiche « Ce qu’IOBEWI ne fait pas » sans modifier le style ni la structure de la page.

## 2) Corriger un bug JavaScript (offset de scroll)

- **Constat** : le smooth scroll calcule la hauteur de header avec le sélecteur `.header`, alors que le composant utilise `.site-header`.
- **Source** : `src/assets/js/animations.js` et `src/_includes/partials/header.njk`.
- **Tâche proposée** : aligner le sélecteur sur `.site-header` et vérifier le positionnement des ancres sur mobile/desktop.
- **Critère d'acceptation** : un clic sur un lien d'ancre n'est plus masqué par le header fixe.

## 3) Corriger un commentaire / anomalie de documentation interne du code

- **Constat** : un commentaire indique « Log pour debug (à retirer en production) » alors que le `console.log` est encore exécuté.
- **Source** : `src/assets/js/animations.js`.
- **Tâche proposée** : soit retirer le log, soit le protéger derrière une condition d'environnement explicite (mode dev).
- **Critère d'acceptation** : aucun log debug non nécessaire en production, et commentaire cohérent avec le comportement réel.

## 4) Améliorer la stratégie de test

- **Constat** : le projet ne contient pas de tests automatisés alors qu'il y a de la logique front (scroll, classes dynamiques, ancres).
- **Source** : scripts npm de `package.json` + JS front.
- **Tâche proposée** : ajouter un test E2E minimal (Playwright) qui valide :
  1. l'état du header en haut de page ;
  2. l'état après scroll ;
  3. le bon positionnement après clic sur une ancre.
- **Critère d'acceptation** : une commande dédiée (ex. `npm run test:e2e`) s'exécute en CI et couvre ces trois cas.
