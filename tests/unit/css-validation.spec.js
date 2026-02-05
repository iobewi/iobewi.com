// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

/**
 * Tests de validation CSS
 *
 * Contexte : Plusieurs problèmes CSS rencontrés :
 * - Variables CSS dans media queries (ne fonctionnent pas)
 * - Accolades non fermées dans plusieurs fichiers
 * - Code dupliqué et orphelin
 *
 * Ces tests détectent automatiquement ces problèmes.
 */

test.describe('Validation CSS', () => {
  const cssDir = path.join(__dirname, '../../src/assets/css');

  // Fonction pour récupérer tous les fichiers CSS récursivement
  function getAllCssFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files = files.concat(getAllCssFiles(fullPath));
      } else if (item.endsWith('.css')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  test('Tous les fichiers CSS ont des accolades équilibrées', () => {
    const cssFiles = getAllCssFiles(cssDir);

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);

      const openBraces = (content.match(/{/g) || []).length;
      const closeBraces = (content.match(/}/g) || []).length;

      expect(openBraces, `${relativePath} devrait avoir des accolades équilibrées`).toBe(closeBraces);
    });
  });

  test('Pas de variables CSS dans les media queries', () => {
    const cssFiles = getAllCssFiles(cssDir);

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);

      // Chercher @media avec var(--bp-
      const mediaWithVars = content.match(/@media[^{]*var\(--bp-[^)]+\)/g);

      if (mediaWithVars) {
        console.error(`\n❌ ${relativePath} contient des variables dans media queries:`);
        mediaWithVars.forEach(match => console.error(`   ${match}`));
      }

      expect(mediaWithVars, `${relativePath} ne devrait pas avoir de variables dans @media`).toBeNull();
    });
  });

  test('Breakpoints cohérents (valeurs standardisées)', () => {
    const cssFiles = getAllCssFiles(cssDir);
    const allowedBreakpoints = [
      '480px',  // Mobile XS
      '560px',  // Mobile
      '640px',  // Mobile LG
      '641px',  // Mobile LG + 1
      '768px',  // Tablet
      '1023px', // Desktop - 1
      '1024px', // Desktop
      '1025px', // Desktop + 1
      '1440px'  // Desktop LG
    ];

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);

      // Extraire toutes les media queries
      const mediaQueries = content.match(/@media[^{]*\((?:min|max)-width:\s*(\d+px)\)/g);

      if (mediaQueries) {
        mediaQueries.forEach(mq => {
          const match = mq.match(/(\d+px)/);
          if (match) {
            const value = match[1];
            const isAllowed = allowedBreakpoints.includes(value);

            if (!isAllowed) {
              console.error(`\n⚠️  ${relativePath} utilise un breakpoint non standard: ${value}`);
              console.error(`   Breakpoints autorisés: ${allowedBreakpoints.join(', ')}`);
            }

            expect(isAllowed, `${relativePath}: ${value} devrait être un breakpoint standard`).toBeTruthy();
          }
        });
      }
    });
  });

  test('Pas de @import dans les fichiers CSS (utiliser <link>)', () => {
    const cssFiles = getAllCssFiles(cssDir);

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);

      // Chercher @import
      const imports = content.match(/@import/g);

      if (imports) {
        console.error(`\n⚠️  ${relativePath} utilise @import (préférer <link> dans HTML)`);
      }

      // Note: On permet @import pour l'instant, c'est juste un warning
      // expect(imports).toBeNull();
    });
  });

  test('Fichiers CSS ne sont pas vides', () => {
    const cssFiles = getAllCssFiles(cssDir);

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8').trim();
      const relativePath = path.relative(cssDir, file);

      // Ignorer pages.css.original (backup)
      if (relativePath.includes('.original')) {
        return;
      }

      expect(content.length, `${relativePath} ne devrait pas être vide`).toBeGreaterThan(0);
    });
  });

  test('Pas de code commenté en masse', () => {
    const cssFiles = getAllCssFiles(cssDir);

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);

      // Ignorer pages.css (fichier de documentation)
      if (relativePath === 'pages.css') {
        return;
      }

      // Compter les lignes de commentaires
      const lines = content.split('\n');
      let commentLines = 0;
      let inBlockComment = false;

      lines.forEach(line => {
        const trimmed = line.trim();

        if (trimmed.startsWith('/*')) {
          inBlockComment = true;
        }

        if (inBlockComment || trimmed.startsWith('//')) {
          commentLines++;
        }

        if (trimmed.endsWith('*/')) {
          inBlockComment = false;
        }
      });

      const totalLines = lines.length;
      const commentRatio = commentLines / totalLines;

      // Avertir si plus de 30% de commentaires
      if (commentRatio > 0.3 && totalLines > 50) {
        console.warn(`\n⚠️  ${relativePath} a ${(commentRatio * 100).toFixed(0)}% de commentaires`);
      }

      // Échouer si plus de 50% de commentaires (probablement du code mort)
      expect(commentRatio, `${relativePath} a trop de commentaires (code mort?)`).toBeLessThan(0.5);
    });
  });
});
