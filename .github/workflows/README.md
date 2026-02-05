# GitHub Actions - CI/CD

Ce dossier contient les workflows GitHub Actions pour l'intégration et le déploiement continus.

## Workflows disponibles

### 🧪 `test.yml` - Tests E2E et Validation

**Déclencheurs** :
- Push sur `main` et `upgrade-ux`
- Pull requests vers `main`

**Actions** :
1. Installation des dépendances
2. Installation de Playwright avec Chromium
3. Exécution des 30 tests (E2E + validation CSS)
4. Upload des rapports et vidéos en cas d'échec
5. Commentaire automatique sur les PR en cas d'échec

**Durée** : ~1-2 minutes

**Artefacts en cas d'échec** :
- Rapport HTML Playwright
- Screenshots des tests échoués
- Vidéos des sessions de test

---

### 🏗️ `build.yml` - Build et Validation

**Déclencheurs** :
- Push sur `main` et `upgrade-ux`
- Pull requests vers `main`

**Actions** :
1. Installation des dépendances
2. Build Eleventy (`npm run build`)
3. Vérification que toutes les pages sont générées
4. Statistiques du build (taille, nombre de fichiers)
5. Upload du site généré

**Durée** : ~30-60 secondes

**Artefacts** :
- Site complet dans `_site/` (disponible 7 jours)

---

### 🔍 `quality.yml` - Qualité du Code

**Déclencheurs** :
- Push sur `main` et `upgrade-ux`
- Pull requests vers `main`

**Actions** :
1. Tests unitaires CSS (validation)
2. Vérification de la structure du projet
3. Détection de fichiers problématiques (backup, temporaires)
4. Statistiques du code (CSS, JS, tests)
5. Résumé dans le GitHub Actions Summary

**Durée** : ~30-60 secondes

---

## Badges de statut

Ajoutez ces badges dans votre README.md :

```markdown
![Tests](https://github.com/VOTRE_ORG/iobewi.com/workflows/Tests%20E2E%20et%20Validation/badge.svg)
![Build](https://github.com/VOTRE_ORG/iobewi.com/workflows/Build%20et%20Validation/badge.svg)
![Quality](https://github.com/VOTRE_ORG/iobewi.com/workflows/Qualité%20du%20Code/badge.svg)
```

Remplacez `VOTRE_ORG` par le nom de votre organisation ou utilisateur GitHub.

---

## Résolution des problèmes

### Les tests échouent en CI mais passent en local

1. **Timeouts** : Augmentez les timeouts dans `playwright.config.js`
2. **Résolution d'écran** : Vérifiez que les tests sont indépendants de la résolution
3. **Ressources** : GitHub Actions a des ressources limitées, certains tests peuvent être plus lents

### Le build échoue

1. Vérifiez que toutes les dépendances sont dans `package.json`
2. Vérifiez que `npm ci` fonctionne en local
3. Consultez les logs du build dans Actions

### Les artefacts ne sont pas disponibles

1. Les artefacts sont conservés 3-7 jours
2. Vérifiez que le workflow a bien échoué (les artefacts ne sont uploadés qu'en cas d'échec pour les tests)

---

## Personnalisation

### Ajouter un workflow de déploiement

Créez `deploy.yml` pour déployer automatiquement sur votre hébergement :

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - name: Deploy to hosting
        run: |
          # Vos commandes de déploiement ici
```

### Modifier les branches surveillées

Dans chaque workflow, modifiez :

```yaml
on:
  push:
    branches: [ main, develop, staging ]  # Ajoutez vos branches
```

### Ajouter des notifications

Pour recevoir des notifications Slack/Discord/Email en cas d'échec, ajoutez des steps avec les actions correspondantes.

---

## Sécurité

- **Secrets** : Utilisez GitHub Secrets pour les tokens et clés API
- **Permissions** : Les workflows ont accès en lecture au code par défaut
- **Dependencies** : Les actions utilisées sont épinglées sur une version majeure (`@v4`)

---

## Performance

Les 3 workflows s'exécutent en parallèle, donc le temps total est celui du workflow le plus long (~2 minutes pour les tests).

**Coût** : GitHub Actions est gratuit pour les dépôts publics. Pour les dépôts privés, vous avez 2000 minutes/mois gratuites.
