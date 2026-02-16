# 📘 Guide de maintenance du CDC éditorial

**Version** : 1.0
**Date** : 2026-02-16
**Auteur** : Refonte éditoriale Phase 1-3

---

## 🎯 Objectif de ce guide

Ce document explique comment maintenir la conformité au CDC éditorial lors de l'ajout ou la modification de contenu sur le site IOBEWI.

---

## 📋 Rappel : Les 3 niveaux de lecture

### Niveau 0 : Accueil (10-60s)
- **Public** : Décideurs techniques, CTO, porteurs de projet
- **Objectif** : Comprendre en <60s, se situer, savoir où cliquer
- **Ton** : Clair, calme, factuel, non démonstratif

**✅ Contenus autorisés** :
- Proposition de valeur claire et synthétique
- 3-4 axes maximum
- CTAs vers niveaux supérieurs

**❌ Contenus interdits** :
- Listes techniques détaillées
- Contraintes projet spécifiques
- Méthodologie exhaustive
- Open source détaillé
- Acronymes non contextualisés

### Niveau 1 : Activités/Réalisations (2-5min)
- **Public** : Leads techniques, ingénieurs seniors, responsables R&D
- **Objectif** : Donner de la matière, montrer la compétence, qualifier
- **Ton** : Explicatif, structuré, pédagogique

**✅ Contenus autorisés** :
- Expertises détaillées
- Types de projets accompagnés
- Exemples concrets
- Contributions open source (présentation)
- Retours d'expérience synthétiques

**❌ Contenus interdits** :
- Détails d'implémentation profonds
- Choix techniques justifiés ligne par ligne
- Tutoriels techniques

### Niveau 2 : Pages techniques (5-15min)
- **Public** : Experts, pairs ingénieurs, architectes système
- **Objectif** : Convaincre un pair, donner confiance technique
- **Ton** : Technique, précis, honnête, argumenté

**✅ Contenus autorisés** :
- Contraintes notables
- Méthodologie progressive détaillée
- Choix techniques argumentés
- Cas réels approfondis
- Schémas, pipelines, architectures

**❌ Contenus interdits** :
- Simplifications marketing
- Promesses vagues

---

## ✅ Checklist : Avant de créer/modifier une page

### 1. Identifier le niveau cible

**Question** : Qui est le public principal de cette page ?
- Décideurs/Grand public → N0
- Leads techniques/Ingénieurs → N1
- Experts/Pairs → N2

### 2. Vérifier le temps de lecture

**Outils** : https://niram.org/read/ ou compter ~200 mots/minute

- N0 : <60 secondes (~150-200 mots max)
- N1 : 2-5 minutes (~400-1000 mots)
- N2 : 5-15 minutes (~1000-3000 mots)

### 3. Vérifier les contenus interdits

**Pour chaque niveau, scanner** :
- ❌ Y a-t-il des détails techniques N2 en N0 ?
- ❌ Y a-t-il des listes d'acronymes non expliqués en N0 ?
- ❌ Y a-t-il des contraintes spécifiques en N0 ?

### 4. Vérifier la navigation

**Règles** :
- ✅ N0 → liens vers N1 uniquement
- ✅ N1 → liens vers N0 et N2
- ✅ N2 → accessible uniquement via N1 (pas de lien direct depuis N0)

**Vérifier** :
- Les CTAs sont-ils appropriés au niveau ?
- Les breadcrumbs sont-ils corrects (pages N2 uniquement) ?

### 5. Vérifier le ton

**N0** : "On affirme, on ne prouve pas ici"
**N1** : "On montre que l'on sait faire"
**N2** : "On parle d'égal à égal"

---

## 🚨 Erreurs courantes à éviter

### ❌ Erreur 1 : Polluer l'accueil avec du N2

**Symptômes** :
- Listes techniques détaillées (ROS 2, micro-ROS, ESP-IDF...)
- Contraintes notables en page d'accueil
- Temps de lecture >2 minutes

**Solution** : Déplacer vers page N2 dédiée, ajouter CTA depuis N1

### ❌ Erreur 2 : Créer une page N2 sans lien depuis N1

**Symptômes** :
- Page technique profonde accessible directement depuis menu
- Pas de parcours progressif

**Solution** : Créer d'abord une section N1 qui présente le sujet, puis lier vers N2

### ❌ Erreur 3 : Mélanger les niveaux dans une même page

**Symptômes** :
- Page N1 avec sections très techniques
- Page N2 avec intro trop simplifiée

**Solution** : Découper en plusieurs pages ou homogénéiser le niveau

---

## 📂 Structure des fichiers

### Pages N0 (Accueil)
```
src/
└── index.md
```

### Pages N1
```
src/
├── activites/index.md
├── realisations/index.md
└── a-propos/index.md
```

### Pages N2
```
src/
├── open-source/index.md
├── methodologie/index.md
└── projets/
    ├── projet-1/index.md
    └── projet-2/index.md
```

---

## 🔧 Ajouter une nouvelle page N2

### Étape 1 : Créer le fichier

```bash
mkdir -p src/nom-page
touch src/nom-page/index.md
```

### Étape 2 : Front matter obligatoire

```yaml
---
title: "Titre de la page"
description: "Description SEO (150-160 caractères)"
layout: layouts/base.njk
permalink: "/nom-page/"
bodyClass: "has-hero"  # ou vide si pas de hero
breadcrumb:
  - label: "Accueil"
    url: "/"
  - label: "Section N1"
    url: "/section-n1/"
  - label: "Titre page N2"
---
```

### Étape 3 : Ajouter le breadcrumb

```html
<div class="container">
  {% include "partials/breadcrumb.njk" %}
</div>
```

### Étape 4 : Ajouter un lien depuis une page N1

Dans `src/section-n1/index.md`, ajouter :

```html
<div class="note-block">
  <p>
    Pour approfondir, consultez la page
    <a href="/nom-page/">Titre page N2 →</a>
  </p>
</div>
```

### Étape 5 : Tester

```bash
npx @11ty/eleventy
npm run serve
```

Vérifier :
- ✅ Breadcrumb s'affiche
- ✅ Navigation N1 → N2 fonctionne
- ✅ Pas de lien direct N0 → N2
- ✅ Temps de lecture 5-15min
- ✅ SEO ok (meta description, OpenGraph)

---

## 🧪 Tests de conformité

### Tests automatiques

```bash
# Vérifier la génération
npx @11ty/eleventy

# Lancer les tests E2E
npm test tests/e2e/

# Vérifier la validation HTML
npm run validate:html
```

### Tests manuels

**Checklist N0 (Accueil)** :
- [ ] Temps de lecture <60s
- [ ] Aucune liste technique
- [ ] Aucune contrainte spécifique
- [ ] CTAs vers N1 uniquement

**Checklist N1** :
- [ ] Temps de lecture 2-5min
- [ ] Exemples concrets présents
- [ ] Liens vers N2 contextualisés
- [ ] Pas de détails d'implémentation

**Checklist N2** :
- [ ] Temps de lecture 5-15min
- [ ] Breadcrumb présent
- [ ] Accessible uniquement via N1
- [ ] Contenu technique argumenté

---

## 📊 Suivi de conformité

### Audit périodique (trimestriel)

1. **Vérifier les temps de lecture**
   - Mesurer avec outil externe
   - Comparer avec temps cibles

2. **Vérifier la navigation**
   - Tester tous les parcours N0 → N1 → N2
   - Vérifier qu'aucun shortcut N0 → N2 n'existe

3. **Vérifier les contenus**
   - Relire avec le CDC
   - Identifier les dérives

4. **Mettre à jour la mémoire**
   - Documenter les nouveaux problèmes rencontrés
   - Mettre à jour MEMORY.md si nécessaire

---

## 🔗 Ressources

- **CDC éditorial** : `/docs/cdc-editorial.md`
- **Audit initial** : `/docs/audit-editorial.md`
- **Phase 1-2** : `/docs/phase1-validation.md` et `/docs/phase2-validation.md`
- **Checklist création page** : Section ci-dessus

---

## 📝 Historique des modifications

| Date | Changement | Auteur |
|------|------------|--------|
| 2026-02-16 | Création du guide suite refonte Phase 1-3 | Claude Code |
