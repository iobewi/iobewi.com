# ✅ CHECKLIST : Nouvelle page

**Utilisation** : Cocher chaque élément avant de publier une nouvelle page.

---

## 🎯 1. Avant de commencer

- [ ] **J'ai identifié le niveau cible** : N0 / N1 / N2
- [ ] **J'ai lu le CDC éditorial** (`/docs/cdc-editorial.md`)
- [ ] **Je connais le public cible** de cette page
- [ ] **Je connais l'objectif** de cette page

---

## 📝 2. Contenu

### Respect du niveau

- [ ] Le **temps de lecture** respecte le niveau cible
  - N0 : <60s (~150-200 mots)
  - N1 : 2-5min (~400-1000 mots)
  - N2 : 5-15min (~1000-3000 mots)

- [ ] Le **ton** est approprié au niveau
  - N0 : Clair, calme, factuel
  - N1 : Explicatif, structuré
  - N2 : Technique, précis, argumenté

- [ ] Les **contenus interdits** ne sont PAS présents
  - N0 : Pas de listes techniques, pas de contraintes spécifiques
  - N1 : Pas de détails d'implémentation profonds
  - N2 : Pas de simplifications marketing

### Qualité

- [ ] Le **titre** est clair et descriptif
- [ ] L'**intro** explique l'objectif de la page
- [ ] Le contenu est **structuré** (sections, hiérarchie)
- [ ] Les **exemples** sont concrets et pertinents
- [ ] La **conclusion** ou **CTA** est présent

---

## 🔗 3. Navigation

- [ ] Les **breadcrumbs** sont présents (pages N2 uniquement)
- [ ] Les **liens internes** respectent la hiérarchie
  - N0 : CTAs vers N1 uniquement
  - N1 : Liens vers N0 et N2
  - N2 : Pas de lien direct depuis N0
- [ ] Les **CTAs** sont appropriés au niveau
  - N0 : "Découvrir", "Voir"
  - N1 : "Aller plus loin", "Consulter"
  - N2 : Liens techniques, GitHub

---

## 🔍 4. SEO

- [ ] **Title** défini dans le front matter
- [ ] **Description** définie (150-160 caractères)
- [ ] **Permalink** défini et cohérent
- [ ] **URL** claire et descriptive
- [ ] **OpenGraph** sera généré automatiquement (vérifier)

---

## 🎨 5. Technique

### Front matter obligatoire

- [ ] `title` : Le titre de la page
- [ ] `description` : Description SEO
- [ ] `layout: layouts/base.njk`
- [ ] `permalink` : L'URL de la page
- [ ] `bodyClass` : "has-hero" ou vide
- [ ] `breadcrumb` : (N2 uniquement) Array avec chemin

### Composants

- [ ] **Breadcrumb** inclus (N2 uniquement)
  ```html
  <div class="container">
    {% include "partials/breadcrumb.njk" %}
  </div>
  ```

- [ ] **Hero** présent si `bodyClass: "has-hero"`
- [ ] **Sections** utilisent les classes appropriées
- [ ] **CTAs** utilisent les classes boutons standard

---

## 🧪 6. Tests

### Tests locaux

- [ ] **Build Eleventy** sans erreur
  ```bash
  npx @11ty/eleventy
  ```

- [ ] **Serveur local** fonctionne
  ```bash
  npm run serve
  ```

- [ ] **Page accessible** dans le navigateur

### Tests manuels

- [ ] **Navigation** fonctionne (breadcrumb, liens)
- [ ] **Responsive** (mobile, tablet, desktop)
- [ ] **Temps de lecture** vérifié avec outil
- [ ] **Accessibilité** (titres, contraste, aria)

### Tests automatiques

- [ ] **Tests E2E** passent (si ajoutés)
  ```bash
  npm test tests/e2e/
  ```

- [ ] **Validation HTML** ok
  ```bash
  npm run validate:html
  ```

---

## 📊 7. Validation finale

### Conformité CDC

- [ ] **Niveau correct** : Le contenu correspond au niveau cible
- [ ] **Parcours respecté** : Navigation progressive N0 → N1 → N2
- [ ] **Ton cohérent** : Style d'écriture approprié

### Documentation

- [ ] **Guide mis à jour** si nouvelle convention
- [ ] **Mémoire mise à jour** si problème rencontré
- [ ] **Commit message** descriptif

---

## ✨ 8. Publication

- [ ] **Commit** créé avec message clair
  ```bash
  git add .
  git commit -m "Feat: ajout page [nom]"
  ```

- [ ] **Tests CI/CD** passent (si configuré)
- [ ] **Review** demandée (si workflow PR)
- [ ] **Merge** vers main/production

---

## 🎉 9. Post-publication

- [ ] **Vérifier en production** : Page accessible
- [ ] **Tester partage social** : OpenGraph ok
- [ ] **Vérifier analytics** : Tracking fonctionne
- [ ] **Documenter** : Ajouter aux notes si besoin

---

## 📋 Template : Front matter page N2

```yaml
---
title: "Titre de la page"
description: "Description SEO (150-160 caractères max)"
layout: layouts/base.njk
permalink: "/nom-page/"
bodyClass: "has-hero"
breadcrumb:
  - label: "Accueil"
    url: "/"
  - label: "Section parente"
    url: "/section-parente/"
  - label: "Titre page actuelle"
---
```

---

## 🆘 En cas de doute

1. **Relire le CDC** : `/docs/cdc-editorial.md`
2. **Consulter le guide** : `/docs/guide-maintenance-cdc.md`
3. **Vérifier une page existante** conforme au même niveau
4. **Faire un audit** avec la checklist du guide de maintenance

---

**Version** : 1.0
**Date** : 2026-02-16
