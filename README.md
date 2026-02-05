# Site IOBEWI (Eleventy)

![Tests](https://github.com/iobewi/iobewi.com/workflows/Tests%20E2E%20et%20Validation/badge.svg)
![Build](https://github.com/iobewi/iobewi.com/workflows/Build%20et%20Validation/badge.svg)
![Quality](https://github.com/iobewi/iobewi.com/workflows/Qualité%20du%20Code/badge.svg)

Ce dépôt héberge le site vitrine **iobewi.com** en version statique via **Eleventy (11ty)**.
L'objectif est d'avoir une base simple, lisible et contrôlable, tout en conservant la structure validée (5 pages + mentions légales).

**Caractéristiques** :
- ✅ Site statique ultra-rapide
- ✅ Architecture CSS modulaire
- ✅ 30 tests automatisés (E2E + validation CSS)
- ✅ CI/CD avec GitHub Actions
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Glassmorphism et animations fluides

## Structure

- `src/` : contenu (pages) et assets
- `src/_includes/` : layouts
- `src/_data/` : données globales (navigation, métadonnées)
- `_site/` : sortie générée par Eleventy

## Lancer en local

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

## Tests

Le projet inclut 30 tests automatisés :

```bash
npm test                  # Lancer tous les tests
npm run test:ui          # Mode interface graphique
npm run test:headed      # Voir le navigateur
npm run test:debug       # Mode debug
npm run test:report      # Voir le rapport HTML
```

**Couverture des tests** :
- ✅ Header et navigation (4 tests)
- ✅ Page d'accueil (13 tests)
- ✅ Grids responsive (6 tests)
- ✅ Validation CSS (6 tests)
- ✅ Effets visuels (glassmorphism, animations, variables CSS)

Voir [tests/README.md](tests/README.md) pour plus de détails.

## CI/CD - GitHub Actions

Le projet utilise 3 workflows automatiques :

1. **Tests E2E et Validation** (`test.yml`)
   - Exécute les 30 tests Playwright
   - Upload des rapports en cas d'échec
   - Commentaire automatique sur les PR

2. **Build et Validation** (`build.yml`)
   - Build Eleventy
   - Vérification des pages générées
   - Statistiques du build

3. **Qualité du Code** (`quality.yml`)
   - Tests unitaires CSS
   - Vérification de la structure
   - Détection de fichiers problématiques

Voir [.github/workflows/README.md](.github/workflows/README.md) pour la documentation complète.

## Documentation

- [Cahier des charges](docs/cdc.md) - Structure et principes du site
- [Backlog qualité](docs/backlog-qualite.md) - Opportunités d'amélioration
- [Tests](tests/README.md) - Documentation des tests
- [GitHub Actions](.github/workflows/README.md) - CI/CD
