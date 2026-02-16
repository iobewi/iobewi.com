# 📊 AUDIT ÉDITORIAL — SITE IOBEWI

**Date** : 2026-02-16
**Version CDC** : v1.0
**Auditeur** : Claude Code
**Périmètre** : Conformité du contenu actuel au CDC éditorial

---

## Résumé exécutif

### 🔴 Violations critiques identifiées
- **Page d'accueil** : Contenu de niveau 2 présent (open source détaillé, contraintes techniques, projets techniques)
- **Page d'accueil** : Liste de logos techniques non contextualisés (violation explicite du CDC)
- **Architecture manquante** : Aucune page de niveau 2 n'existe actuellement

### 🟢 Points positifs
- Pages "Activités", "Réalisations" et "À propos" **parfaitement conformes au niveau 1**
- Structure narrative cohérente
- Ton et style globalement alignés avec le CDC

### 📈 Taux de conformité global
- **Niveau 0 (Accueil)** : 40% conforme ❌
- **Niveau 1 (Activités, Réalisations, À propos)** : 100% conforme ✅
- **Niveau 2** : 0% (inexistant) ❌

---

## 1. Analyse page par page

### 🏠 Page d'accueil (`src/index.md`)

**Niveau cible** : Niveau 0 (10-30 secondes de lecture)

#### ✅ Contenus conformes

| Section | Lignes | Conformité |
|---------|--------|------------|
| Hero principal | 9-23 | ✅ Proposition de valeur claire, tagline synthétique, CTAs appropriés |
| Ce que fait/ne fait pas IOBEWI | 76-101 | ✅ Permet de se situer rapidement, format binaire efficace |
| Les 4 expertises | 103-129 | ✅ Synthétique, 4 axes maximum respectés |
| Approche progressive | 212-224 | ✅ Narratif général acceptable |
| CTA final | 226-232 | ✅ Appel à l'action clair |

#### ❌ Violations identifiées

| Section | Lignes | Violation | Gravité | Règle CDC violée |
|---------|--------|-----------|---------|------------------|
| **Logos technologies** | 29-54 | Liste de 6 logos techniques (ESP32, RPi, Jetson, ROS 2, micro-ROS, CI/CD) sans contexte | 🔴 Critique | "Contenus interdits N0 : Listes techniques détaillées, Acronymes non contextualisés" |
| **Contributions open source** | 158-167 | Détails techniques : ROS 2/ros2_control, MyActuator, VESC, ESP micro-ROS, BMS Daly, ESP-IDF | 🔴 Critique | "Open source N0 : mention de principe uniquement" + "Contenus interdits N0 : Listes techniques détaillées" |
| **Cartes projets** | 174-198 | 4 cartes de projets avec détails techniques (RHACOBOT, R2BEWI, SCANBEWI, BALBEWI) | 🟠 Majeure | Contenu N1 en accueil. CDC : "Aucun contenu de niveau 1 ne doit polluer visuellement l'accueil" |
| **Contraintes notables** | 201-209 | Bloc entier sur contraintes techniques spécifiques | 🔴 Critique | CDC Niveau 2 : "Contraintes notables". Interdit N0 : "Contraintes projet spécifiques" |
| **Hero intro** | 24-74 | Volume de texte important (>30 secondes) | 🟡 Mineure | Dépasse le temps de lecture cible (10-30s) |

#### 📊 Temps de lecture estimé

- **Temps cible N0** : 10-30 secondes
- **Temps réel actuel** : ~3-4 minutes (sans scroll)
- **Écart** : +600% ❌

---

### 📋 Page Activités (`src/activites/index.md`)

**Niveau cible** : Niveau 1 (2-5 minutes de lecture)

#### ✅ Analyse de conformité

| Critère CDC N1 | Conforme | Commentaire |
|----------------|----------|-------------|
| Donner de la matière | ✅ | 4 activités détaillées avec cas d'usage |
| Montrer la compétence | ✅ | Technologies listées, contextes expliqués |
| Qualifier le lead | ✅ | Permet de savoir si IOBEWI correspond au besoin |
| Temps 2-5min | ✅ | ~3-4 minutes estimées |
| Ton explicatif structuré | ✅ | Structure répétitive claire |
| Contenus autorisés | ✅ | Expertises détaillées, types de projets |
| Contenus interdits | ✅ | Pas de détails d'implémentation profonds |
| CTAs | ✅ | "Échanger", "Discuter", "Comprendre" |

**Verdict** : ✅ **100% conforme au niveau 1**

---

### 🏗️ Page Réalisations (`src/realisations/index.md`)

**Niveau cible** : Niveau 1 (2-5 minutes de lecture)

#### ✅ Analyse de conformité

| Critère CDC N1 | Conforme | Commentaire |
|----------------|----------|-------------|
| Donner de la matière | ✅ | 3 réalisations structurées (R2BEWI, SCANBEWI, projets contributifs) |
| Exemples concrets | ✅ | Chaque réalisation = Contexte + Rôle + Contraintes + Livrables |
| Retours d'expérience synthétiques | ✅ | Enseignements présentés sans rentrer dans l'implémentation |
| Temps 2-5min | ✅ | ~3 minutes estimées |
| Ton explicatif | ✅ | Structure narrative cohérente |
| CTAs | ✅ | "Discuter de votre projet" |

**Verdict** : ✅ **100% conforme au niveau 1**

---

### 👤 Page À propos (`src/a-propos/index.md`)

**Niveau cible** : Niveau 1 (2-5 minutes de lecture)

#### ✅ Analyse de conformité

| Critère CDC N1 | Conforme | Commentaire |
|----------------|----------|-------------|
| Crédibilité | ✅ | Parcours du fondateur expliqué |
| Qualification | ✅ | 5 principes de travail clairement énoncés |
| Temps 2-5min | ✅ | ~2-3 minutes estimées |
| Ton explicatif | ✅ | Narratif sans jargon excessif |
| Pas de simplification marketing | ✅ | Honnête et factuel |

**Verdict** : ✅ **100% conforme au niveau 1**

---

### 📞 Page Contact (`src/contact/index.md`)

**Type** : Page fonctionnelle (hors CDC)

**Analyse** : ✅ Simple et efficace, pas de problème éditorial

---

## 2. Analyse de l'architecture de navigation

### Structure actuelle détectée

```
Niveau 0 : Accueil (/)
├─ Niveau 1 : Activités (/activites/)
├─ Niveau 1 : Réalisations (/realisations/)
├─ Niveau 1 : À propos (/a-propos/)
└─ Fonctionnel : Contact (/contact/)

Niveau 2 : ❌ AUCUNE PAGE
```

### ❌ Violations des règles de navigation

| Règle CDC | Statut | Commentaire |
|-----------|--------|-------------|
| "Aucun contenu de niveau 2 ne doit être accessible sans lien explicite depuis un niveau 1" | ⚠️ N/A | Pas de pages N2 |
| "Aucun contenu de niveau 1 ne doit polluer visuellement l'accueil" | ❌ Violé | Cartes projets + open source en accueil |
| "Chaque niveau doit donner envie de descendre, jamais de remonter" | ❌ Impossible | Pas de N2 vers lequel descendre |

---

## 3. Problèmes structurels majeurs

### 🔴 Problème #1 : Contenu N2 orphelin en accueil

**Contenu mal placé** :
- Contributions open source détaillées (lignes 158-167 de index.md)
- Contraintes notables (lignes 201-209 de index.md)
- Détails techniques des projets

**Solution requise** :
Créer des pages de niveau 2 dédiées et les lier depuis les pages N1

### 🔴 Problème #2 : Absence totale de niveau 2

**Pages manquantes** :
- Aucune page technique approfondie (5-15min)
- Aucune page "Conviction entre pairs"
- Aucune page avec méthodologie détaillée

**Impact** :
- Visiteurs techniques experts n'ont pas de contenu adapté
- Pas de progression naturelle du parcours
- Contradiction avec le CDC qui prévoit 3 niveaux

### 🟠 Problème #3 : Logos techniques non contextualisés

**Violation** : Section tech-sidebar (lignes 29-54 de index.md)

**Citation CDC** :
> "Contenus interdits [Niveau 0] : Listes techniques détaillées, Acronymes non contextualisés"

**Solution** :
- Option A : Supprimer complètement
- Option B : Remplacer par une phrase narrative ("ESP32 à Jetson, ROS 2 à micro-ROS")

---

## 4. Analyse du ton et du style

| Page | Ton cible CDC | Ton réel | Conformité |
|------|---------------|----------|------------|
| Accueil | Clair, calme, factuel, non démonstratif | Globalement conforme mais trop dense | ⚠️ Partiellement |
| Activités | Explicatif, structuré, pédagogique | Parfaitement aligné | ✅ |
| Réalisations | Explicatif, structuré, pédagogique | Parfaitement aligné | ✅ |
| À propos | Explicatif, structuré, pédagogique | Parfaitement aligné | ✅ |

---

## 5. Recommandations prioritaires

### 🔥 Priorité 1 : Nettoyer l'accueil (CRITIQUE)

**Actions** :
1. ❌ **Supprimer** la section tech-sidebar (logos)
2. ❌ **Déplacer** le bloc "Contributions open source" vers une page N2
3. ❌ **Déplacer** le bloc "Contraintes notables" vers une page N2
4. ⚠️ **Simplifier** les cartes projets ou les déplacer vers Réalisations (N1)

**Objectif** : Ramener le temps de lecture à 30-60 secondes (on peut être légèrement plus permissif que les 30s)

---

### 🔥 Priorité 2 : Créer les pages de niveau 2 (BLOQUANT)

**Pages à créer** :

#### 2.1 `/open-source/` (Niveau 2)
**Contenu** : Contributions techniques détaillées
- Portage ROS 2 / ros2_control des actionneurs MyActuator
- Intégration VESC via ESP micro-ROS
- Support BMS Daly
- Composants ESP-IDF
- Liens GitHub avec contexte technique

**Lien depuis** : Activités + Réalisations

#### 2.2 `/methodologie/` ou `/approche-technique/` (Niveau 2)
**Contenu** : Méthodologie progressive détaillée
- Contraintes notables (déplacées depuis accueil)
- Cycles de développement
- Pratiques d'outillage
- Cas réels approfondis avec choix techniques argumentés

**Lien depuis** : Activités + À propos

#### 2.3 `/projets/rhacobot/`, `/projets/r2bewi/`, etc. (Niveau 2)
**Contenu** : Pages dédiées par projet avec profondeur technique
- Architecture logicielle détaillée
- Choix techniques argumentés
- Schémas, pipelines
- Retours d'expérience approfondis

**Lien depuis** : Réalisations

---

### 🟡 Priorité 3 : Ajuster la navigation

**Actions** :
1. Ajouter des CTAs "Aller plus loin" dans les pages N1 vers les pages N2
2. S'assurer qu'aucun lien direct N0 → N2 n'existe
3. Vérifier que chaque page N2 a un breadcrumb clair

---

## 6. Plan de refonte proposé

### Phase 1 : Nettoyage accueil (2-3h)
- [ ] Supprimer les logos tech
- [ ] Déplacer contributions open source vers doc temporaire
- [ ] Déplacer contraintes notables vers doc temporaire
- [ ] Simplifier les cartes projets (garder juste les titres + 1 ligne)
- [ ] Vérifier le temps de lecture (<60s)

### Phase 2 : Création pages N2 (5-8h)
- [ ] Créer `/open-source/index.md`
- [ ] Créer `/methodologie/index.md`
- [ ] Créer `/projets/` avec sous-pages par projet
- [ ] Rédiger le contenu technique approfondi
- [ ] Ajouter schémas si nécessaire

### Phase 3 : Navigation (1-2h)
- [ ] Ajouter CTAs N1 → N2 dans Activités
- [ ] Ajouter CTAs N1 → N2 dans Réalisations
- [ ] Ajouter breadcrumbs sur pages N2
- [ ] Vérifier le parcours complet

### Phase 4 : Validation (1h)
- [ ] Relire chaque page avec le CDC
- [ ] Mesurer les temps de lecture réels
- [ ] Vérifier qu'aucun contenu n'est au mauvais niveau
- [ ] Tester la navigation N0 → N1 → N2

---

## 7. Checklist de validation post-refonte

### Niveau 0 (Accueil)
- [ ] Temps de lecture < 60 secondes
- [ ] Aucune liste technique détaillée
- [ ] Aucun acronyme non contextualisé
- [ ] Aucune contrainte projet spécifique
- [ ] Open source : mention de principe uniquement
- [ ] CTAs vers N1 uniquement

### Niveau 1 (Activités, Réalisations, À propos)
- [ ] Temps de lecture 2-5 minutes
- [ ] Expertises détaillées sans implémentation
- [ ] Exemples concrets présentés
- [ ] CTAs vers N2 présents et contextualisés
- [ ] Ton explicatif et structuré

### Niveau 2 (À créer)
- [ ] Temps de lecture 5-15 minutes
- [ ] Contraintes notables détaillées
- [ ] Méthodologie progressive expliquée
- [ ] Choix techniques argumentés
- [ ] Ton technique entre pairs
- [ ] Accessible uniquement via N1

### Navigation
- [ ] Aucun lien direct N0 → N2
- [ ] Liens N1 → N2 explicites et contextualisés
- [ ] Breadcrumbs sur toutes les pages N2

---

## 8. Conclusion

### État des lieux
Le site actuel présente une **incohérence structurelle majeure** :
- Les pages N1 sont exemplaires
- L'accueil (N0) est surchargé de contenu N2
- Il n'existe aucune page N2 pour recevoir ce contenu

### Impact utilisateur
- Les visiteurs **décideurs** (cible N0) sont submergés de détails techniques
- Les visiteurs **experts** (cible N2) n'ont pas de contenu adapté à leur niveau
- La progression éditoriale est cassée

### Effort de mise en conformité
- **Phase 1 (nettoyage)** : 2-3h — Impact immédiat
- **Phase 2 (création N2)** : 5-8h — Débloque l'architecture
- **Phase 3 (navigation)** : 1-2h — Finalise le parcours
- **Total estimé** : 8-13h de travail

### Bénéfices attendus
- ✅ Accueil efficace et non rebutant pour décideurs
- ✅ Parcours progressif respecté
- ✅ Contenu technique disponible pour pairs
- ✅ Conformité 100% au CDC éditorial
- ✅ Positionnement clair et assumé

---

## Annexe : Mapping complet du contenu

| Contenu actuel | Localisation | Niveau actuel | Niveau cible | Action |
|----------------|--------------|---------------|--------------|--------|
| Hero principal | index.md:9-23 | N0 | N0 | ✅ Conserver |
| Logos tech | index.md:29-54 | N0 | ❌ Supprimer | 🔴 Supprimer |
| Hero intro texte | index.md:55-73 | N0 | N0 | ✅ Conserver |
| Ce que fait/ne fait pas | index.md:76-101 | N0 | N0 | ✅ Conserver |
| 4 expertises | index.md:103-129 | N0 | N0 | ✅ Conserver |
| Intro projets | index.md:137-155 | N0 | N0 | ✅ Conserver |
| Contributions open source | index.md:158-167 | N0 | **N2** | 🔴 Déplacer |
| Cartes projets | index.md:174-198 | N0 | N1 ou N2 | 🟠 Déplacer |
| Contraintes notables | index.md:201-209 | N0 | **N2** | 🔴 Déplacer |
| Approche progressive | index.md:212-224 | N0 | N0 | ✅ Conserver |
| CTA final | index.md:226-232 | N0 | N0 | ✅ Conserver |
| Activités (tout) | activites/index.md | N1 | N1 | ✅ Conserver |
| Réalisations (tout) | realisations/index.md | N1 | N1 | ✅ Conserver |
| À propos (tout) | a-propos/index.md | N1 | N1 | ✅ Conserver |

---

**Prochaine étape recommandée** : Démarrer la Phase 1 (nettoyage accueil) pour un impact immédiat.
