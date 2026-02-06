# Tests unitaires

Ce dossier contient les tests unitaires pour valider le code CSS et HTML généré du site.

## Tests disponibles

### `css-validation.spec.js`

Valide la qualité et la cohérence des fichiers CSS :
- Accolades équilibrées
- Pas de variables CSS dans les media queries (non supportées)
- Breakpoints standardisés
- Pas de @import (préférer `<link>`)
- Fichiers non vides
- Détection de code commenté en masse

### `html-validation.spec.js`

**Nouveau test** pour détecter les problèmes de génération HTML causés par Liquid/Markdown :

#### Problème détecté

Lorsqu'on écrit du HTML dans les fichiers `.md`, **les lignes vides sont interprétées par Liquid comme des séparations de paragraphes** et génèrent des balises `<p>` automatiques.

Cela crée du **HTML invalide** :

```html
<!-- ❌ INVALIDE - produit par des lignes vides dans le .md -->
<section>
  <div>...</div>

  <p><div>...</div></p>  <!-- HTML INVALIDE ! -->
</section>
```

#### Impact

- HTML invalide (`<p>` ne peut pas contenir de `<div>`)
- Les sélecteurs CSS ne fonctionnent plus comme attendu
- Les espacements CSS ne s'appliquent pas correctement

#### Solution

**Supprimer toutes les lignes vides entre les divs** dans les zones HTML des fichiers `.md` :

```html
<!-- ✅ VALIDE - pas de ligne vide -->
<section>
  <div>...</div>
  <div>...</div>  <!-- Pas de ligne vide avant ! -->
  <div>...</div>
</section>
```

#### Tests effectués

1. **Pas de `<p><div>` invalides** : Détecte les balises `<p>` contenant des `<div>`
2. **Balises équilibrées** : Compte les balises ouvrantes et fermantes
3. **Classes importantes** : Vérifie la présence des classes CSS critiques

## Exécution des tests

```bash
# Tous les tests unitaires
npm test tests/unit/

# Test HTML uniquement
npm test tests/unit/html-validation.spec.js

# Test CSS uniquement
npm test tests/unit/css-validation.spec.js

# Mode UI (interactif)
npm run test:ui
```

## Quand exécuter ces tests

- ✅ **Avant chaque commit** de modifications CSS ou HTML
- ✅ **Après avoir modifié** un fichier `.md` contenant du HTML
- ✅ **En CI/CD** (automatiquement)
- ✅ **Après un rebuild** Eleventy (`npx @11ty/eleventy`)

## Bonnes pratiques

### Pour éviter les HTML invalides

1. **Ne jamais laisser de lignes vides** entre les divs dans les zones HTML des `.md`
2. **Toujours rebuild** avant de tester : `npx @11ty/eleventy`
3. **Exécuter les tests** après modifications : `npm test tests/unit/`

### Structure recommandée

```html
<!-- ✅ BON - Pas de lignes vides entre les divs -->
<section class="section container">
  <div class="content-group">
    <h3>Titre</h3>
    <p>Texte</p>
  </div>
  <div class="content-group">
    <h3>Titre 2</h3>
    <p>Texte 2</p>
  </div>
</section>

<!-- ❌ MAUVAIS - Lignes vides créent du HTML invalide -->
<section class="section container">
  <div class="content-group">
    <h3>Titre</h3>
    <p>Texte</p>
  </div>

  <div class="content-group">  <!-- ← Ligne vide avant = <p><div> invalide ! -->
    <h3>Titre 2</h3>
    <p>Texte 2</p>
  </div>
</section>
```

## Ajouter de nouveaux tests

Pour ajouter un test :

1. Créer un fichier `*.spec.js` dans `tests/unit/`
2. Utiliser Playwright Test (`@playwright/test`)
3. Documenter le test dans ce README

Exemple de structure :

```js
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test.describe('Mon groupe de tests', () => {
  test('Mon test', () => {
    // Test ici
    expect(true).toBeTruthy();
  });
});
```
