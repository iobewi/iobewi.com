# Formulaires de contenu — Site iobewi.com

Ce document regroupe l’ensemble des **formulaires normatifs** permettant de produire le contenu final du site **iobewi.com**.

Il doit être utilisé **après validation du CDC**.
Aucune modification de structure n’est autorisée lors du remplissage.

---

## FORM A — Page Accueil

### A.1 Accroche principale

**Phrase principale (qui / quoi) :**
> IOBEWI vous accompagne dans la conception de systèmes embarqués, du matériel jusqu’au logiciel.

**Phrase secondaire (périmètre / champ d’action) :**
> Avec une méthodologie et des outils pensés pour faire grandir les projets.

**CTA principal (libellé) :**
> Comment IOBEWI peut vous accompagner ?

**CTA secondaire (optionnel) :**
> ……………………………………………………………………………………

---

### A.2 Présentation synthétique d’IOBEWI

**Description courte (3 à 5 phrases max) :**
> IOBEWI intervient sur la conception et la montée en maturité d’ensembles matériels et logiciels destinés aux plateformes embarquées.
Son approche s’appuie sur des valeurs de partage et de collaboration, issues des pratiques open source et communautaires.
Les projets sont abordés de manière exploratoire en phase amont, puis progressivement structurés et outillés afin d’atteindre un niveau de maturité compatible avec l’exploitation et la livraison continue.
Fort de ces valeurs technologiques, IOBEWI intègre progressivement des algorithmes décisionnels jusque dans les systèmes embarqués, afin d’apporter des capacités locales de traitement, de perception ou de décision, du microcontrôleur aux plateformes embarquées plus avancées.

**Ce que fait IOBEWI (mots-clés) :**
- structuration matériel-logiciel
- plateformes embarquées
- prototypage et montée en maturité
- outillage et méthodologie
- exploitation et livraison continue
- algorithmes décisionnels embarqués
- accompagnement sur le cycle de vie

**Ce que IOBEWI ne fait pas (implicite) :**
- intégration de solutions clés en main
- revente de matériel ou de licences
- conception de composants électroniques
- développement applicatif généraliste
- production industrielle de masse
- prestations sans continuité technique

---

### A.3 Activités (aperçu)

#### **1. Structuration d’écosystèmes embarqués**

**Description :**
Structuration d’écosystèmes matériels et logiciels autour de plateformes embarquées existantes, incluant la conception mécanique, l’intégration électronique et le prototypage physique par fabrication additive (FDM, résine) et usinage léger.

**CTA de section :**

> Découvrir cette activité

---

#### **2. Prototypage et montée en maturité**

**Description :**
Transformation de prototypes fonctionnels en bases techniques exploitables, depuis la phase exploratoire du projet, en passant par le cadrage des besoins, pour aboutir à un découpage en éléments simples, base d’un développement maîtrisé.

**CTA de section :**

> Voir la démarche

---

#### **3. Outillage, reproductibilité et exploitation**

**Description :**
Mise en place d’un outillage favorisant la reproductibilité et l’exploitation, incluant des environnements conteneurisés, des chaînes CI/CD avec tests et non-régression, une gestion du code et des évolutions, ainsi qu’une base documentaire structurée.

**CTA de section :**

> Comprendre l’approche

---

#### **4. Algorithmes décisionnels embarqués**

**Description :**
Intégration progressive d’algorithmes de traitement, de perception ou de décision au sein des plateformes embarquées, lorsque la maturité des systèmes permet leur déploiement et leur exploitation locale.

**CTA de section :**

> Explorer les usages


---

## **A.4 — Élément de crédibilité (VERSION COMPLÉTÉE)**

### **Types de projets / contextes**

* démonstrateurs techniques
* collaboration open source
* mise en place de socles techniques embarqués

---

### **Rôle d’IOBEWI**

* explorer et prototyper
* structurer des bases techniques
* intégrer matériel, logiciel et outillage
* formaliser et transmettre des démarches techniques

---

### **Contributions et travaux open source**

* portage et intégration **ROS 2 / ros2_control** d’actionneurs **MyActuator**
* portage et intégration **ROS 2** de contrôleurs moteurs **VESC** via **ESP micro-ROS**
* support **BMS Daly** pour **ROS 2** via **ESP micro-ROS**
* développement et publication de composants et de drivers pour **ESP-IDF**
* contributions publiques réutilisées, avec retours de la communauté

*(Travaux accessibles publiquement via GitHub, utilisés comme socles techniques et supports d’itération.)*

---

### **Travaux et formats illustratifs**

### **RHACOBOT**

**Description :**
Projet robotique open source servant de démonstrateur technique autour de **ROS 2**, du contrôle d’actionneurs et de l’intégration embarquée.
RHACOBOT constitue une plateforme matérielle concrète, servant de support à l’expérimentation d’architectures logicielles, d’interfaces matérielles et de chaînes d’outillage.

---

### **R2BEWI**

**Description :**
Projet open source issu des travaux menés avec RHACOBOT, R2BEWI en prolonge les principes tout en visant une plateforme plus polyvalente.
Il intègre une couche de perception de l’environnement plus élaborée et sert également de support à des travaux exploratoires autour de l’application de pratiques CI/CD adaptées aux contraintes spécifiques de la robotique et des systèmes embarqués.

---

### **SCANBEWI**

**Description :**
Travail exploratoire centré sur la captation LiDAR et la production de cartographies 2D exploitables, actuellement en phase de validation matérielle.
SCANBEWI sert de socle technique pour expérimenter l’intégration de capteurs, le traitement embarqué des données, ainsi que leur restitution et exploitation logicielle dans des contextes professionnels.

---

### **BALBEWI**

**Description :**
Projet conceptuel resté à l’état exploratoire, ayant servi de cadre de réflexion autour de la structuration de socles techniques embarqués.
BALBEWI a contribué à faire émerger des axes méthodologiques et techniques, sans dépasser à ce stade la phase de conception.

---

### Contraintes notables
- contraintes spécifiques aux systèmes embarqués et robotiques (déploiement, tests, reproductibilité)
- dépendance forte au matériel, aux chaînes d’outillage et aux cycles de test physiques
- projets à fort contenu technique, en cours de structuration et de consolidation
- ressources et équipes volontairement limitées, favorisant des démarches itératives
---

### A.5 Posture & méthode (optionnel)

Les projets sont abordés de manière progressive, de l’exploration et des retours d’expérience jusqu’au cadrage, au découpage et au développement.
Les outils, tests et pratiques de livraison sont introduits au rythme du projet et de ses contraintes.
L’objectif est de transmettre des bases techniques exploitables et de rendre le projet autonome, jusqu’à la fin de l’accompagnement.

---

## **A.6 — CTA final (version validée)**

### **Phrase d’introduction**

> **IOBEWI accompagne les équipes dans la structuration et la maturation de leurs projets techniques, en s’adaptant à leur contexte et à leurs dynamiques existantes.**

### **CTA final (libellé)**

> **Échangeons sur votre accompagnement**

---

## **FORM B — Page Activités**

### **Introduction (2–3 phrases)**

> Les activités d’IOBEWI couvrent l’ensemble des phases techniques nécessaires à la structuration et à la maturation de projets embarqués et robotiques.
> Elles s’inscrivent dans une démarche d’accompagnement progressif, adaptée aux contraintes matérielles, humaines et organisationnelles propres à chaque contexte.
> Chaque activité peut intervenir seule ou s’articuler avec les autres selon le niveau de maturité du projet.

---

## **1. Structuration d’écosystèmes embarqués**

**Description (2–3 phrases) :**
IOBEWI accompagne la structuration d’écosystèmes matériels et logiciels autour de plateformes embarquées existantes.
Cela inclut l’intégration mécanique et électronique, l’architecture logicielle, ainsi que la mise en cohérence des différents sous-systèmes constituant le socle technique du projet.

**Cas d’usage typiques :**

* plateforme embarquée hétérogène (MCU, SBC, capteurs, actionneurs)
* projet existant manquant de structuration globale
* besoin de clarification des interfaces matériel / logiciel
* démonstrateur technique à consolider

**Technologies (optionnel) :**

* ESP32 / ESP-IDF
* SBC (Raspberry Pi, Jetson)
* ROS 2 / micro-ROS
* prototypage mécanique (FDM, résine)

**CTA final :**

> Échanger sur la structuration de votre plateforme

---

## **2. Prototypage et montée en maturité**

**Description (2–3 phrases) :**
À partir de prototypes ou d’idées techniques existantes, IOBEWI aide à transformer des expérimentations en bases exploitables.
L’accompagnement porte sur le cadrage fonctionnel, le découpage des besoins et la formalisation progressive des choix techniques.

**Cas d’usage typiques :**

- prototype fonctionnel nécessitant clarification et structuration
- phase exploratoire avec besoin de retours terrain
- projet technique manquant de lisibilité ou de découpage fonctionnel
- besoin d’orienter les choix techniques vers des bases plus pérennes

**Technologies (optionnel) :**

* prototypage rapide matériel
* firmware embarqué
* ROS 2 / outils de simulation
* instrumentation et mesures terrain

**CTA final :**

> Discuter de la maturité de votre prototype

---

## **3. Outillage, reproductibilité et exploitation**

**Description (2–3 phrases) :**
IOBEWI accompagne la mise en place d’outils favorisant la reproductibilité, la maintenance et l’exploitation des systèmes embarqués.
Cet accompagnement porte sur l’organisation du code, les environnements de développement, les tests, la documentation et les pratiques de livraison, en tenant compte des contraintes matérielles et du contexte des équipes.

**Cas d’usage typiques :**

* difficulté à reproduire un build ou un déploiement
* dette technique croissante
* absence de tests ou de documentation exploitable
* besoin de fiabilisation sur la durée

**Technologies (optionnel) :**

* ESP-IDF
* environnements conteneurisés
* CI/CD embarqué
* gestion de versions et documentation technique

**CTA final :**

> Comprendre comment fiabiliser votre socle technique

---

## **4. Algorithmes décisionnels embarqués**

**Description (2–3 phrases) :**
Lorsque la maturité du système le permet, IOBEWI accompagne l’intégration d’algorithmes de traitement, de perception ou de décision directement au niveau embarqué.
L’objectif est d’apporter des capacités locales d’analyse et d’autonomie, en cohérence avec les contraintes matérielles et énergétiques.

**Cas d’usage typiques :**

* traitement local de données capteurs
* perception embarquée
* logique décisionnelle distribuée
* réduction de dépendance aux traitements distants

**Technologies (optionnel) :**

* traitement du signal embarqué
* perception (LiDAR, vision, capteurs)
* architectures distribuées
* algorithmes embarqués adaptés aux MCU et SBC

**CTA final :**

> Explorer les possibilités de décision embarquée

------

## FORM C — Page Réalisations

**Introduction (1–2 phrases) :**
> **IOBEWI est une structure récente, construite sur un travail préparatoire de long terme autour des systèmes embarqués, de la robotique et de l’outillage technique.
> Les réalisations présentées ici reflètent cette phase continue de recherche, d’expérimentation et de structuration, qui constitue le socle sur lequel IOBEWI accompagne aujourd’hui les équipes.**

### **R2BEWI — Une convergence d’idées**
*Plateforme robotique comme support d’accompagnement*


**Contexte :**
R2BEWI est une plateforme robotique conçue par IOBEWI comme support central de travail et d’expérimentation.
Elle vise à rassembler, au sein d’un même socle, des problématiques de robotique, de contrôle d’actionneurs, de perception de l’environnement et d’outillage logiciel.

**Rôle d’IOBEWI :**
IOBEWI est à l’origine de la conception et de la structuration de R2BEWI, menée comme un projet interne servant de vitrine du savoir-faire et de la méthode de la structure.
Ce projet constitue un cadre de référence sur lequel s’appuie aujourd’hui l’accompagnement proposé aux équipes.

**Contraintes principales :**

* complexité et hétérogénéité matérielle
* dépendance forte aux cycles de tests physiques
* nécessité de concilier exploration continue et lisibilité technique

**Livrables / résultats :**

* plateforme robotique fonctionnelle conçue en interne
* socle technique intégrant contrôle, perception et outillage
* support de démonstration et d’expérimentation pour l’accompagnement

---

### **Projets contributifs**

**RHACOBOT**
Plateforme robotique open source développée en amont, ayant servi de base pour structurer les briques initiales de contrôle d’actionneurs, d’intégration ROS 2 et d’interfaces embarquées.

**TRXBEWI**
Plateforme robotique basée sur un châssis de type crawler, intégrant des capteurs de perception (LiDAR, vision) et destinée à explorer des problématiques de navigation et de traitement embarqué.

> Les enseignements issus de ces deux plateformes ont naturellement convergé vers R2BEWI, en combinant la robustesse mécanique de l’une avec les enjeux de perception et d’algorithmie embarquée de l’autre.

---

### **SCANBEWI — Outil de cartographie embarquée accessible**

**Contexte :**
SCANBEWI est un outil de captation LiDAR et de production de cartographies 2D simplifiées, destiné à un public large.
Il s’adresse à des contextes où des acteurs non spécialistes — tels que des agents immobiliers ou des architectes — ont besoin d’une représentation fiable et directement exploitable de l’espace, sans recourir à des outils lourds ou complexes.

**Rôle d’IOBEWI :**
IOBEWI a conçu SCANBEWI comme un support d’exploration autour de la simplification des chaînes de captation, de traitement et de restitution des données spatiales.
L’accent est mis sur l’accessibilité des usages, tout en respectant les contraintes techniques liées aux systèmes embarqués.

**Contraintes principales :**

* compromis entre précision et simplicité d’usage
* dépendance au matériel de captation embarqué
* nécessité de rendre les résultats lisibles pour des non-spécialistes
* contraintes de calcul et d’autonomie

**Livrables / résultats :**

* chaîne de captation LiDAR embarquée simplifiée
* production de cartographies 2D directement exploitables
* outil de démonstration pour des usages métiers non métrologiques
* retours d’expérience exploitables pour l’accompagnement

---

**CTA final (à valider) :**

> Échanger autour d’une démarche de convergence technique

---

## FORM D — Page À propos

**Présentation générale :**
 > IOBEWI est une société par actions simplifiée (SAS) dédiée à l’accompagnement de projets techniques autour des systèmes embarqués, de la robotique et de l’outillage associé.
 > Son positionnement repose sur une pratique ancrée dans le réel, construite par l’expérimentation, la structuration progressive et la transmission de bases techniques exploitables.

**Parcours / positionnement :**
> **IOBEWI est née du parcours technique de son fondateur**, construit sur une progression allant du support et de l’intégration logicielle vers l’administration système, l’ingénierie système et les pratiques DevOps.
> Bien que principalement orienté logiciel et infrastructure, ce parcours a été régulièrement confronté à des contraintes proches de l’embarqué, notamment à travers des systèmes distribués, des environnements contraints et des problématiques de fiabilité en conditions réelles.
>
> Avec le temps, un besoin de renouer plus directement avec le matériel s’est imposé, conduisant à une réappropriation progressive des plateformes embarquées, des environnements de prototypage jusqu’aux microcontrôleurs.
> Cette trajectoire a permis de faire cohabiter des méthodes issues du monde système et DevOps avec les contraintes propres aux MCU, à la robotique et aux systèmes embarqués, en prenant ROS et la robotique comme terrain naturel de convergence.
>
> C’est de cette hybridation entre pratiques logicielles structurantes et ancrage matériel que s’est construit le positionnement d’IOBEWI aujourd’hui.

**Principes de travail (3–5 max) :**

* **Accompagnement structuré et contractualisé**
  IOBEWI intervient dans un cadre défini, aux côtés des équipes, pour structurer et faire mûrir les projets, sans s’y substituer.

* **Confrontation au terrain et au matériel**
  Les choix techniques sont guidés par le matériel, les contraintes physiques et les conditions d’exploitation réelles, avant toute abstraction théorique.

* **Hybridation des pratiques**  
  IOBEWI transpose des pratiques d’outillage, d’automatisation et de reproductibilité issues du monde DevOps vers les contraintes des microcontrôleurs, des plateformes embarquées et de la robotique.

* **Structuration progressive et lisibilité**
  Les outils, architectures et pratiques sont introduits progressivement, au rythme du projet, avec pour objectif la compréhension et la maintenabilité.

* **Autonomie comme objectif final**
  L’accompagnement vise à rendre les équipes capables d’exploiter, de faire évoluer et de maintenir leur socle technique de manière autonome.

---

## FORM E — Page Contact

**Message d’introduction :**
Vous souhaitez échanger autour d’un projet technique, d’une démarche d’accompagnement ou d’un besoin de structuration autour des systèmes embarqués ou de la robotique.
IOBEWI intervient dans un cadre professionnel et contractuel, aux côtés des équipes, pour clarifier, structurer et faire mûrir les projets selon leur contexte.

**Email de contact :**
contact@iobewi.com

**Zone d’intervention (optionnel) :**
France (interventions à distance ou sur site selon le contexte du projet)

**Liens externes (optionnel) :**
* **GitHub** : [https://github.com/iobewi](https://github.com/iobewi)
* **LinkedIn** : [https://www.linkedin.com/company/iobewi](https://www.linkedin.com/company/iobewi)

---

**Fin des formulaires**

