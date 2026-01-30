# Cahier des charges — Site vitrine iobewi.fr

## 1. Contexte & objectif

IOBEWI a validé l’utilisation de **Hugo** comme générateur de site statique à l’issue d’une phase de prototypage rapide.
Le présent document constitue le **cahier des charges normatif** pour la **structure, la navigation et la forme des contenus** du site vitrine **iobewi.fr**.

Objectifs :

* cadrer le périmètre fonctionnel du site,
* figer les décisions structurantes avant toute production de contenu,
* servir de référence unique pour l’implémentation Hugo.

---

## 2. Principes directeurs (figés)

* Site **statique** (Hugo only)
* Sobriété visuelle et fonctionnelle
* Navigation courte et lisible
* Aucun JavaScript tiers opaque
* Contenu prioritaire sur l’esthétique
* Pérennité et maintenabilité

---

## 3. Publics cibles

* Interlocuteurs techniques
* Décideurs techniques / R&D
* Partenaires techniques

Le site **n’est pas** un site marketing grand public.

---

## 4. Navigation principale (figée)

Menu principal (5 entrées maximum) :

* Accueil
* Activités
* Réalisations
* À propos
* Contact

Présent de manière constante sur l’ensemble du site.

---

## 5. Navigation secondaire (footer)

* Mentions légales
* Plan du site (optionnel)
* Lien GitHub (optionnel)

Aucune navigation complexe ou redondante.

---

## 6. Arborescence Hugo (figée)

```text
content/
├── _index.md              # Accueil
│
├── activites/
│   └── _index.md          # Activités
│
├── realisations/
│   └── _index.md          # Réalisations
│
├── a-propos/
│   └── _index.md          # À propos
│
├── contact/
│   └── _index.md          # Contact
│
└── mentions-legales/
    └── _index.md          # Mentions légales
```

Les URLs sont en français, explicites et stables.

---

## 7. Rôle fonctionnel des pages (sans contenu)

### Accueil

* Présentation immédiate d’IOBEWI
* Orientation vers Activités et Contact

### Activités

* Description des domaines d’intervention
* Page pivot du site

### Réalisations

* Preuves concrètes
* Projets réels, éventuellement anonymisés

### À propos

* Humanisation
* Méthode et posture professionnelle

### Contact

* Prise de contact simple
* CTA final du site

---

## 8. Contraintes de navigation

* Profondeur maximale : **2 niveaux**
* Aucun sous-menu complexe
* Chaque page dispose d’un objectif principal et d’un CTA principal

---

## 9. Éléments exclus (à ce stade)

* Blog / actualités
* Page “Technologies” isolée
* Catalogue de services marketing
* Animations lourdes
* Scripts tiers non maîtrisés

---

## 10. Production du contenu

La production du contenu final est réalisée **exclusivement** à partir du document séparé :

**FORM – Contenus site iobewi.fr**

Ce document regroupe les formulaires normatifs pour l’ensemble des pages :

* Accueil
* Activités
* Réalisations
* À propos
* Contact

Aucun contenu ne doit être rédigé directement dans le présent CDC.

---

## 11. Statut du document

* Document **normatif** pour la structure et la forme
* Toute modification nécessite une révision explicite
* Toute implémentation Hugo doit être strictement conforme à ce cadre

---

**Fin du CDC — iobewi.fr**
