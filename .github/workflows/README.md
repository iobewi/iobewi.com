# GitHub Actions - CI/CD

Ce dossier contient les workflows GitHub Actions pour l'intégration et le déploiement continus.

## Architecture

Le projet utilise une architecture **optimisée** avec workflows dépendants pour éviter les exécutions redondantes :

```
Pull Request → ci.yml (quality → build → test-e2e) → Merge → pages.yml (déploiement)
```

---

## Workflows disponibles

### 🔄 `ci.yml` - Pipeline CI Complet

**Déclencheurs** :
- Pull requests vers `main` et `develop`

**Jobs** (exécutés séquentiellement) :

#### 1️⃣ **quality** - Tests Unitaires & Qualité
- Tests unitaires CSS (Playwright)
- Vérification structure du projet (src/, tests/)
- Statistiques du code (CSS, JS, Markdown, tests)

**Durée** : ~1 minute

#### 2️⃣ **build** - Build Eleventy
- Build du site (`npm run build`)
- Vérification pages principales (index, activités, réalisations, etc.)
- Upload du site généré (`_site/`) comme artifact
- Statistiques du build (taille, fichiers)

**Durée** : ~30-60 secondes

**Dépendances** : Requiert `quality` ✅

**Artefacts** :
- `site-build` : Site complet (conservé 7 jours)

#### 3️⃣ **test-e2e** - Tests E2E
- Download de l'artifact `site-build`
- Lancement serveur HTTP local
- Exécution tests E2E Playwright
- Upload des rapports en cas d'échec

**Durée** : ~1-2 minutes

**Dépendances** : Requiert `build` ✅

**Artefacts en cas d'échec** :
- `playwright-report` : Rapport HTML, screenshots, vidéos

**Durée totale du pipeline** : ~3-4 minutes

---

### 🔒 `enforce-branch.yml` - Protection Branche Main

**Déclencheurs** :
- Pull requests vers `main`

**Actions** :
- Vérifie que la PR provient uniquement de `develop`
- Bloque toutes les autres branches (feature, hotfix, etc.)

**Durée** : ~5 secondes

**Pourquoi** : Garantit un workflow Git propre (`feature → develop → main`)

---

### 🚀 `pages.yml` - Déploiement GitHub Pages

**Déclencheurs** :
- Automatique : quand `ci.yml` se termine avec succès sur `main`
- Manuel : `workflow_dispatch`

**Actions** :
1. Télécharge l'artifact `site-build` créé par `ci.yml`
2. Upload vers GitHub Pages
3. Déploiement automatique

**Durée** : ~30-40 secondes

**Important** : ✅ Garantie de cohérence — ce qui est testé dans `ci.yml` = ce qui est déployé

**URL de déploiement** : `https://VOTRE_ORG.github.io/iobewi.com/`

---

## Flux de travail complet

### Développement d'une fonctionnalité

```bash
# 1. Créer une branche feature
git checkout -b feature/nouvelle-fonctionnalite

# 2. Développer et tester localement
npm test

# 3. Créer une PR vers develop
# → Déclenche ci.yml (quality → build → test-e2e)

# 4. Si CI ✅, merger vers develop
# → Rien ne se passe (pas de déploiement)

# 5. Créer une PR de develop vers main
# → Déclenche ci.yml + enforce-branch.yml

# 6. Si tout ✅, merger vers main
# → ci.yml se termine avec succès
# → pages.yml se déclenche automatiquement (workflow_run)
# → Réutilise l'artifact site-build déjà testé
# → Déploiement en ~30s
```

### Protection contre les erreurs

- ❌ PR depuis `feature/xxx` vers `main` → **Bloquée** (enforce-branch.yml)
- ❌ Tests échouent → **Merge impossible** (ci.yml required)
- ❌ Build échoue → **Pas de déploiement** (pipeline interrompu)

---

## Badges de statut

Ajoutez ces badges dans votre README.md :

```markdown
![CI Pipeline](https://github.com/VOTRE_ORG/iobewi.com/workflows/CI%20Pipeline/badge.svg)
![GitHub Pages](https://github.com/VOTRE_ORG/iobewi.com/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
```

Remplacez `VOTRE_ORG` par le nom de votre organisation ou utilisateur GitHub.

---

## Résolution des problèmes

### Les tests échouent en CI mais passent en local

1. **Timeouts** : Augmentez les timeouts dans `playwright.config.js`
2. **Résolution d'écran** : Vérifiez que les tests sont indépendants de la résolution
3. **Ressources** : GitHub Actions a des ressources limitées, certains tests peuvent être plus lents

### Le build échoue dans ci.yml

1. Vérifiez que toutes les dépendances sont dans `package.json`
2. Vérifiez que `npm ci` fonctionne en local
3. Consultez les logs du job `build` dans Actions

### Les artefacts ne sont pas disponibles

1. Les artefacts sont conservés 7 jours
2. L'artifact `site-build` est créé uniquement si le job `build` réussit
3. L'artifact `playwright-report` est créé uniquement si les tests E2E échouent

### Le déploiement GitHub Pages échoue

1. Vérifiez que GitHub Pages est activé dans Settings → Pages
2. Vérifiez les permissions du workflow (Settings → Actions → General)
3. Consultez les logs de `pages.yml`

### L'artifact site-build n'est pas trouvé par pages.yml

1. Vérifiez que `ci.yml` s'est bien terminé avec succès sur `main`
2. L'artifact `site-build` doit exister (conservé 7 jours)
3. Si l'artifact est expiré, re-déclenchez `ci.yml` manuellement (workflow_dispatch)
4. Vérifiez que `dawidd6/action-download-artifact` a les bonnes permissions (`actions: read`)

---

## Optimisations

### Pourquoi des jobs dépendants au lieu de workflows parallèles ?

**Ancienne architecture** (3 workflows en parallèle) :
```
PR → quality.yml (tests unitaires)
  → build.yml (build)
  → test.yml (tests E2E)
```
❌ Problèmes :
- Les 3 workflows font `npm ci` (3× installation)
- `test.yml` refait le build déjà fait par `build.yml`
- Exécution inutile si quality échoue

**Nouvelle architecture** (jobs dépendants + réutilisation d'artifacts) :
```
PR → ci.yml → quality → build → test-e2e
                         ↓
                    (artifact site-build)
                         ↓
Merge → pages.yml réutilise l'artifact → déploiement
```
✅ Avantages :
- `npm ci` fait 1 seule fois (quality)
- `test-e2e` réutilise l'artifact de `build`
- `pages.yml` réutilise le même artifact (pas de rebuild)
- Si quality échoue, rien ne s'exécute après
- **Garantie : ce qui est testé = ce qui est déployé**
- **~50% plus rapide et économique**

### Performance

- **Durée totale d'une PR** : ~3-4 minutes (au lieu de ~5-6 minutes)
- **Durée déploiement** : ~30s (au lieu de ~1min30)
- **Coût** : Réduit de ~50% (moins de minutes Actions consommées)
- **Cache** : npm cache activé (`cache: 'npm'`)
- **Artifacts** : Réutilisés entre jobs et workflows

---

## Personnalisation

### Ajouter un workflow de notification

Créez `notify.yml` pour être alerté en cas d'échec :

```yaml
name: Notify on Failure

on:
  workflow_run:
    workflows: ["CI Pipeline"]
    types: [completed]
    branches: [main]

jobs:
  notify:
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    runs-on: ubuntu-latest
    steps:
      - name: Send notification
        run: |
          # Slack, Discord, Email, etc.
```

### Modifier les branches surveillées

Dans `ci.yml`, modifiez :

```yaml
on:
  pull_request:
    branches: [ main, develop, staging ]  # Ajoutez vos branches
```

### Ajouter des checks supplémentaires

Ajoutez un job au pipeline `ci.yml` :

```yaml
jobs:
  quality:
    # ... existant ...

  lint:
    name: Linting
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint

  build:
    needs: [quality, lint]  # Attend quality ET lint
    # ... existant ...
```

---

## Sécurité

- **Secrets** : Utilisez GitHub Secrets pour les tokens et clés API
- **Permissions** : Les workflows ont accès en lecture au code par défaut
- **Dependencies** : Les actions officielles sont épinglées sur une version majeure (`@v4`)
- **Protection branches** : `enforce-branch.yml` empêche les merges directs vers `main`
- **Action tierce** : `dawidd6/action-download-artifact@v6` est utilisée dans `pages.yml` pour télécharger les artifacts entre workflows (nécessaire car `actions/download-artifact` ne supporte pas ce cas d'usage)

---

## Monitoring

### GitHub Actions Summary

Chaque job génère un résumé visible dans l'interface GitHub :

- **quality** : Structure du projet + statistiques du code
- **build** : Statistiques du build (taille, fichiers générés)
- **test-e2e** : Résultat des tests E2E

### Consulter l'historique

1. **Actions** → **CI Pipeline** → Sélectionner une exécution
2. Cliquer sur un job pour voir les logs détaillés
3. Télécharger les artifacts si disponibles

---

## Coût et limites

**GitHub Actions gratuit** :
- Dépôts publics : Illimité
- Dépôts privés : 2000 minutes/mois

**Consommation estimée** :
- 1 PR complète (CI) : ~4 minutes
- 1 déploiement (Pages) : ~1 minute
- **~20 PR/mois** = ~100 minutes (~5% du quota gratuit)
