# Site IOBEWI (Eleventy)

Ce dépôt héberge le site vitrine **iobewi.fr** en version statique via **Eleventy (11ty)**.
L’objectif est d’avoir une base simple, lisible et contrôlable, tout en conservant la structure validée (5 pages + mentions légales).

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

## Déploiement GitHub Pages

Le workflow `.github/workflows/eleventy.yml` construit le site et le publie via GitHub Pages.
