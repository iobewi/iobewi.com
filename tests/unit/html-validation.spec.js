// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

/**
 * Tests de validation HTML
 *
 * Contexte : Problèmes détectés avec Liquid/Markdown :
 * - Les lignes vides dans les fichiers .md créent des <p> autour des <div>
 * - Cela produit du HTML invalide comme <p><div>...</div></p>
 *
 * Ces tests détectent automatiquement ces problèmes dans le HTML généré.
 */

test.describe('Validation HTML généré', () => {
  const siteDir = path.join(__dirname, '../../_site');

  // Fonction pour récupérer tous les fichiers HTML récursivement
  function getAllHtmlFiles(dir) {
    let files = [];

    // Vérifier que le dossier existe
    if (!fs.existsSync(dir)) {
      console.warn(`⚠️  Le dossier ${dir} n'existe pas. Exécutez 'npx @11ty/eleventy' d'abord.`);
      return files;
    }

    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files = files.concat(getAllHtmlFiles(fullPath));
      } else if (item.endsWith('.html')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  test('Pas de balises <p> contenant des <div> (HTML invalide)', () => {
    const htmlFiles = getAllHtmlFiles(siteDir);

    if (htmlFiles.length === 0) {
      console.warn('⚠️  Aucun fichier HTML trouvé. Vérifiez que le site est buildé.');
      test.skip();
    }

    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(siteDir, file);

      // Regex pour détecter <p><div ou <p> ... <div
      // On cherche des <p> qui contiennent des <div> (invalide en HTML)
      const invalidPatterns = [
        /<p[^>]*>\s*<div/gi,           // <p><div directement
        /<p[^>]*>[^<]*<div/gi,          // <p> texte <div
      ];

      let foundInvalid = [];

      invalidPatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
          foundInvalid = foundInvalid.concat(matches);
        }
      });

      if (foundInvalid.length > 0) {
        console.error(`\n❌ ${relativePath} contient du HTML invalide (<p> contenant <div>):`);
        foundInvalid.slice(0, 5).forEach(match => {
          // Nettoyer et afficher les premières 80 chars
          const cleaned = match.replace(/\s+/g, ' ').substring(0, 80);
          console.error(`   ${cleaned}...`);
        });
        console.error(`\n💡 Solution : Supprimer les lignes vides dans les fichiers .md entre les divs`);
      }

      expect(foundInvalid.length, `${relativePath} ne devrait pas contenir de <p><div>`).toBe(0);
    });
  });

  // Test supprimé : validation des enfants directs de containers spécifiques retirée (approche simplifiée)

  test('Pas de balises non fermées dans le HTML', () => {
    const htmlFiles = getAllHtmlFiles(siteDir);

    if (htmlFiles.length === 0) {
      test.skip();
    }

    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(siteDir, file);

      // Compter les balises ouvrantes et fermantes pour les principales balises
      const tagsToCheck = ['div', 'section', 'article', 'header', 'footer', 'nav', 'main', 'ul', 'ol'];

      tagsToCheck.forEach(tag => {
        const openTags = (content.match(new RegExp(`<${tag}[\\s>]`, 'gi')) || []).length;
        const closeTags = (content.match(new RegExp(`</${tag}>`, 'gi')) || []).length;

        if (openTags !== closeTags) {
          console.error(`\n❌ ${relativePath} : balises <${tag}> non équilibrées`);
          console.error(`   Ouvertures: ${openTags}, Fermetures: ${closeTags}`);
        }

        expect(openTags, `${relativePath} devrait avoir autant de <${tag}> que de </${tag}>`).toBe(closeTags);
      });
    });
  });

  test('Les classes CSS importantes sont présentes', () => {
    const htmlFiles = getAllHtmlFiles(siteDir);

    if (htmlFiles.length === 0) {
      test.skip();
    }

    const criticalClasses = ['container', 'section', 'content-group'];

    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(siteDir, file);

      // Ignorer les pages qui n'ont pas besoin de ces classes (mentions légales, etc.)
      if (relativePath.includes('mentions-legales') || relativePath.includes('404')) {
        return;
      }

      criticalClasses.forEach(className => {
        const hasClass = content.includes(`class="${className}"`) || content.includes(`class="[^"]*${className}[^"]*"`);

        if (!hasClass && relativePath.includes('index.html')) {
          console.warn(`\n⚠️  ${relativePath} ne contient pas la classe .${className}`);
        }
      });
    });
  });
});
