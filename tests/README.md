# Tests E2E avec Playwright

Ce dossier contient les tests end-to-end (E2E) du site IOBEWI, implémentés avec [Playwright](https://playwright.dev/).

## Installation

Les dépendances sont déjà installées si vous avez exécuté `npm install`. Sinon :

```bash
npm install
npx playwright install chromium
```

## Lancer les tests

### Mode headless (par défaut)
```bash
npm test
```

### Mode interface graphique (debug)
```bash
npm run test:ui
```

### Mode headed (voir le navigateur)
```bash
npm run test:headed
```

### Mode debug (pas à pas)
```bash
npm run test:debug
```

### Voir le rapport HTML
```bash
npm run test:report
```

## Structure des tests

### `tests/e2e/header.spec.js`
Tests du header et de la navigation, couvrant les 3 scénarios du backlog qualité :

1. **État du header en haut de page**
   - Vérifie que le header est visible
   - Vérifie les classes CSS (`is-top`, `is-hero`)
   - Vérifie que le logo et la navigation sont visibles

2. **État du header après scroll**
   - Vérifie que le header change d'état après le scroll
   - Vérifie que la classe `is-scrolled` est ajoutée

3. **Positionnement correct après clic sur ancre**
   - Vérifie que les liens d'ancre fonctionnent
   - Vérifie que l'élément cible n'est pas masqué par le header fixe
   - Vérifie le calcul correct de l'offset

4. **Navigation entre les pages**
   - Vérifie que les liens de navigation fonctionnent
   - Vérifie que le header est présent sur toutes les pages

### `tests/e2e/homepage.spec.js`
Tests de la page d'accueil :

- Affichage du hero principal
- Affichage de la navigation
- Affichage des sections (expertise-grid, etc.)
- Affichage du footer
- Fonctionnement des boutons CTA
- Responsive design (mobile/desktop)
- Animations au scroll
- Accessibilité de base

## Configuration

La configuration est dans `playwright.config.js` :

- **Serveur de test** : Eleventy sur le port 8080
- **Navigateurs** : Chromium (desktop)
- **Retry** : 2 tentatives en cas d'échec
- **Screenshots** : Pris automatiquement en cas d'échec
- **Vidéos** : Enregistrées en cas d'échec
- **Traces** : Collectées à la première retry

## Rapports

Après l'exécution des tests :

- **Rapport HTML** : `playwright-report/index.html`
- **Résultats bruts** : `test-results/`
- **Screenshots** : Dans `test-results/` pour les tests échoués
- **Vidéos** : Dans `test-results/` pour les tests échoués

## CI/CD

Pour intégrer dans une CI (GitHub Actions, GitLab CI, etc.) :

```yaml
# Exemple GitHub Actions
- name: Install dependencies
  run: npm ci

- name: Install Playwright Browsers
  run: npx playwright install --with-deps chromium

- name: Run tests
  run: npm test

- name: Upload test results
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```

## Debugging

Si un test échoue :

1. **Voir le rapport HTML** : `npm run test:report`
2. **Voir les screenshots** : Dans `test-results/`
3. **Lancer en mode debug** : `npm run test:debug`
4. **Lancer en mode headed** : `npm run test:headed`

## Extension des tests

Pour ajouter de nouveaux tests :

1. Créer un nouveau fichier `tests/e2e/nom-du-test.spec.js`
2. Importer Playwright : `const { test, expect } = require('@playwright/test');`
3. Écrire les tests avec `test.describe()` et `test()`
4. Lancer : `npm test`

Exemple :

```javascript
const { test, expect } = require('@playwright/test');

test.describe('Ma nouvelle fonctionnalité', () => {
  test('doit faire quelque chose', async ({ page }) => {
    await page.goto('/');
    const element = page.locator('.my-element');
    await expect(element).toBeVisible();
  });
});
```

## Ressources

- [Documentation Playwright](https://playwright.dev/)
- [API Reference](https://playwright.dev/docs/api/class-test)
- [Best Practices](https://playwright.dev/docs/best-practices)
