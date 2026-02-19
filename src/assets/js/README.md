# Modal.js - Module Modal Générique

Module JavaScript réutilisable pour gérer des modals avec chargement de données JSON.

## Utilisation

### 1. Inclure le module dans votre page

```html
<script src="/assets/js/modal.js"></script>
```

### 2. Initialiser le modal avec vos options

```html
<script>
ModalHandler({
  modalId: "modal",                                    // ID du conteneur modal
  contentId: "modal-content",                          // ID de la zone de contenu
  triggerSelector: "button.card[data-modal-key]",      // Sélecteur des déclencheurs
  closeSelector: "[data-modal-close]",                 // Sélecteur des boutons de fermeture
  dataUrl: "/assets/data/votre-fichier.json",          // URL du fichier JSON
  dataAttr: "modalKey",                                // Attribut data à utiliser (camelCase)
  renderContent: function(key, data) {                 // Fonction de rendu personnalisée (optionnelle)
    return `<h2>${data.title}</h2>...`;
  }
});
</script>
```

### 3. Structure HTML requise

```html
<!-- Déclencheurs (tuiles/cards) -->
<button class="card" data-modal-key="projet1">
  <h3>Projet 1</h3>
  <p>Description...</p>
</button>

<!-- Modal -->
<div class="modal" id="modal" aria-hidden="true">
  <div class="modal-backdrop" data-modal-close></div>
  <div class="modal-panel" role="dialog" aria-modal="true">
    <button class="modal-close" type="button" data-modal-close>×</button>
    <div id="modal-content">
      <!-- Contenu injecté ici -->
    </div>
  </div>
</div>
```

### 4. Structure du fichier JSON

```json
{
  "projet1": {
    "title": "Titre du projet",
    "lead": "Description courte",
    "leftTitle": "Section gauche",
    "leftList": ["Point 1", "Point 2"],
    "rightTitle": "Section droite",
    "rightText": "Texte de la section droite",
    "links": [
      { "label": "Lien 1", "url": "https://..." }
    ]
  }
}
```

## Options

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `modalId` | string | `"modal"` | ID du conteneur modal |
| `contentId` | string | `"modal-content"` | ID de la zone de contenu |
| `triggerSelector` | string | `"button.card[data-modal-key]"` | Sélecteur CSS des déclencheurs |
| `closeSelector` | string | `"[data-modal-close]"` | Sélecteur CSS des boutons de fermeture |
| `dataUrl` | string | - | URL du fichier JSON à charger |
| `dataAttr` | string | `"modalKey"` | Nom de l'attribut data (camelCase) |
| `renderContent` | function | `defaultRender` | Fonction de rendu personnalisée |

## Fonction de rendu personnalisée

Vous pouvez personnaliser le rendu du contenu :

```javascript
ModalHandler({
  // ... autres options
  renderContent: function(key, data) {
    return `
      <h1>${data.title}</h1>
      <p>${data.description}</p>
      <a href="${data.url}">En savoir plus</a>
    `;
  }
});
```

## Exemples d'utilisation

### Page Open Source
`/ressources/open-source/` - Format par défaut avec 2 colonnes

### Page Réalisations (à venir)
Format personnalisé avec gallery ou autre layout

## API

L'initialisation retourne un objet avec des méthodes publiques :

```javascript
const modal = ModalHandler({ ... });

modal.open("projet1");  // Ouvrir le modal avec la clé "projet1"
modal.close();          // Fermer le modal
```

## Accessibilité

Le module gère automatiquement :
- Focus management (retour au déclencheur à la fermeture)
- ARIA attributes (aria-hidden, aria-modal)
- Fermeture au clavier (Escape)
- Scroll lock (classe `is-modal-open` sur `<html>`)
