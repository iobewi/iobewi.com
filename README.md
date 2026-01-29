# Hugo POC (Joomla → statique)

Ce dépôt est un **POC rapide** pour héberger une vitrine sur **GitHub Pages** en utilisant **Hugo**.

## Ce qui est inclus
- Un site Hugo minimal (sans thème) avec 3 pages : Accueil / À propos / Contact
- Reprise d'assets depuis l'export Joomla :
  - `static/assets/images/iobewi/...`
  - `static/assets/css/helium.css` + `static/assets/css/custom.css` (compilés Gantry)

> Note: le CSS Gantry est prévu pour le markup Joomla/Gantry, donc l'intégration ici est "best effort".

## Lancer en local
Installer Hugo, puis :

```bash
hugo server -D
```

## Déployer sur GitHub Pages
1. Pousser ce repo sur GitHub
2. Repo → Settings → Pages → Source : **GitHub Actions**
3. Le workflow `.github/workflows/hugo.yml` publie automatiquement.

## Point important : contenu Joomla
Un export de fichiers Joomla **ne contient généralement pas** les articles / menus (stockés en base MySQL).
Pour migrer le contenu, il faudra :
- soit un export DB (tables `#__content`, `#__menu`, etc.)
- soit un export via outil (ex: extension ou dump JSON/HTML)

