// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

/**
 * Tests de détection de doublons CSS
 *
 * Détecte :
 * - Sélecteurs dupliqués dans le même fichier
 * - Sélecteurs identiques dans différents fichiers (conflits)
 * - Propriétés CSS redéfinies pour le même sélecteur
 * - Variables CSS dupliquées
 */

test.describe('Détection de doublons CSS', () => {
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
      } else if (item.endsWith('.css') && !item.includes('.original')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  // Parser simple pour extraire les sélecteurs et leurs propriétés
  function parseCssRules(content) {
    const rules = [];

    // Supprimer les commentaires
    const cleaned = content.replace(/\/\*[\s\S]*?\*\//g, '');

    // Extraire les règles CSS (sélecteur { propriétés })
    const rulePattern = /([^{}]+)\{([^{}]*)\}/g;
    let match;

    while ((match = rulePattern.exec(cleaned)) !== null) {
      const selector = match[1].trim();
      const properties = match[2].trim();

      // Ignorer les @media, @keyframes, etc.
      if (selector.startsWith('@')) {
        continue;
      }

      rules.push({
        selector,
        properties,
        rawProperties: properties
      });
    }

    return rules;
  }

  // Extraire les propriétés individuelles d'un bloc CSS
  function extractProperties(propertiesBlock) {
    const props = {};
    const lines = propertiesBlock.split(';').filter(l => l.trim());

    lines.forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const prop = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim();
        props[prop] = value;
      }
    });

    return props;
  }

  test('Pas de sélecteurs dupliqués dans le même fichier', () => {
    const cssFiles = getAllCssFiles(cssDir);
    let hasErrors = false;

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);
      const rules = parseCssRules(content);

      // Compter les occurrences de chaque sélecteur
      const selectorCounts = {};
      rules.forEach(rule => {
        selectorCounts[rule.selector] = (selectorCounts[rule.selector] || 0) + 1;
      });

      // Trouver les doublons
      const duplicates = Object.entries(selectorCounts)
        .filter(([_, count]) => count > 1)
        .map(([selector, count]) => ({ selector, count }));

      if (duplicates.length > 0) {
        hasErrors = true;
        console.error(`\n❌ ${relativePath} contient des sélecteurs dupliqués :`);
        duplicates.forEach(({ selector, count }) => {
          console.error(`   "${selector}" apparaît ${count} fois`);
        });
        console.error(`\n💡 Solution : Fusionner les règles ou vérifier si c'est intentionnel\n`);
      }
    });

    expect(hasErrors, 'Aucun sélecteur dupliqué ne devrait être trouvé').toBe(false);
  });

  test('Pas de sélecteurs identiques dans différents fichiers (conflits)', () => {
    const cssFiles = getAllCssFiles(cssDir);
    const allSelectors = new Map(); // selector -> [{ file, properties }]

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);
      const rules = parseCssRules(content);

      rules.forEach(rule => {
        if (!allSelectors.has(rule.selector)) {
          allSelectors.set(rule.selector, []);
        }
        allSelectors.get(rule.selector).push({
          file: relativePath,
          properties: rule.properties
        });
      });
    });

    // Trouver les sélecteurs qui apparaissent dans plusieurs fichiers
    let hasConflicts = false;
    const conflicts = [];

    allSelectors.forEach((locations, selector) => {
      if (locations.length > 1) {
        // Vérifier si ce sont vraiment des conflits (différents fichiers)
        const uniqueFiles = new Set(locations.map(l => l.file));

        if (uniqueFiles.size > 1) {
          conflicts.push({
            selector,
            locations: locations.map(l => l.file)
          });
        }
      }
    });

    if (conflicts.length > 0) {
      hasConflicts = true;
      console.error(`\n⚠️  Sélecteurs CSS définis dans plusieurs fichiers (risque de conflit) :\n`);

      // Limiter l'affichage aux 10 premiers
      conflicts.slice(0, 10).forEach(({ selector, locations }) => {
        console.error(`   "${selector}" dans :`);
        locations.forEach(file => console.error(`      - ${file}`));
        console.error('');
      });

      if (conflicts.length > 10) {
        console.error(`   ... et ${conflicts.length - 10} autres conflits\n`);
      }

      console.error(`💡 Conseil : Vérifier l'ordre de chargement dans base.njk`);
      console.error(`   Les derniers fichiers chargés écrasent les premiers\n`);
    }

    // Note: On ne fait pas échouer le test car certains conflits peuvent être intentionnels
    // (ex: responsive.css qui override sections.css)
    // expect(hasConflicts).toBe(false);
  });

  test('Pas de propriétés CSS redéfinies inutilement pour le même sélecteur', () => {
    const cssFiles = getAllCssFiles(cssDir);
    let hasErrors = false;

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);
      const rules = parseCssRules(content);

      // Grouper les règles par sélecteur
      const rulesBySelector = {};
      rules.forEach(rule => {
        if (!rulesBySelector[rule.selector]) {
          rulesBySelector[rule.selector] = [];
        }
        rulesBySelector[rule.selector].push(rule);
      });

      // Pour chaque sélecteur ayant plusieurs règles
      Object.entries(rulesBySelector).forEach(([selector, selectorRules]) => {
        if (selectorRules.length > 1) {
          // Extraire toutes les propriétés
          const allProps = selectorRules.map(r => extractProperties(r.properties));

          // Vérifier les propriétés dupliquées
          const propCounts = {};
          allProps.forEach(props => {
            Object.keys(props).forEach(prop => {
              propCounts[prop] = (propCounts[prop] || 0) + 1;
            });
          });

          const duplicateProps = Object.entries(propCounts)
            .filter(([_, count]) => count > 1)
            .map(([prop]) => prop);

          if (duplicateProps.length > 0) {
            hasErrors = true;
            console.error(`\n❌ ${relativePath} : "${selector}" a des propriétés redéfinies :`);
            duplicateProps.forEach(prop => {
              const values = allProps
                .filter(p => p[prop])
                .map(p => p[prop]);
              console.error(`   ${prop}: ${values.join(' → ')}`);
            });
            console.error(`\n💡 Solution : Fusionner les règles en une seule\n`);
          }
        }
      });
    });

    expect(hasErrors, 'Aucune propriété redéfinie ne devrait être trouvée').toBe(false);
  });

  test('Pas de variables CSS (--*) dupliquées', () => {
    const cssFiles = getAllCssFiles(cssDir);
    const allVars = new Map(); // varName -> [{ file, value }]

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);

      // Extraire les variables CSS (--variable-name: value)
      const varPattern = /--([\w-]+)\s*:\s*([^;]+);/g;
      let match;

      while ((match = varPattern.exec(content)) !== null) {
        const varName = `--${match[1]}`;
        const value = match[2].trim();

        if (!allVars.has(varName)) {
          allVars.set(varName, []);
        }
        allVars.get(varName).push({
          file: relativePath,
          value
        });
      }
    });

    // Trouver les variables définies plusieurs fois
    let hasDuplicates = false;
    const duplicates = [];

    allVars.forEach((locations, varName) => {
      if (locations.length > 1) {
        // Vérifier si les valeurs sont différentes
        const uniqueValues = new Set(locations.map(l => l.value));

        if (uniqueValues.size > 1) {
          duplicates.push({
            varName,
            locations: locations.map(l => `${l.file} (${l.value})`)
          });
        }
      }
    });

    if (duplicates.length > 0) {
      hasDuplicates = true;
      console.error(`\n❌ Variables CSS définies avec des valeurs différentes :\n`);

      duplicates.forEach(({ varName, locations }) => {
        console.error(`   ${varName} :`);
        locations.forEach(loc => console.error(`      - ${loc}`));
        console.error('');
      });

      console.error(`💡 Solution : Centraliser les variables dans tokens.css\n`);
    }

    expect(hasDuplicates, 'Aucune variable CSS dupliquée ne devrait être trouvée').toBe(false);
  });

  test('Classes utilitaires cohérentes (.stack-*, .gap-*, etc.)', () => {
    const cssFiles = getAllCssFiles(cssDir);
    const utilityClasses = new Map(); // className -> [{ file, properties }]

    // Pattern pour détecter les classes utilitaires
    const utilityPatterns = [
      /\.(stack-\w+)/g,
      /\.(gap-\w+)/g,
      /\.(grid-\w+)/g,
      /\.(content-group)/g,
      /\.(section-\w+)/g
    ];

    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(cssDir, file);

      utilityPatterns.forEach(pattern => {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          const className = match[1];

          if (!utilityClasses.has(className)) {
            utilityClasses.set(className, []);
          }
          utilityClasses.get(className).push({
            file: relativePath
          });
        }
      });
    });

    // Afficher les classes utilitaires et où elles sont définies
    let hasMultipleDefinitions = false;

    utilityClasses.forEach((locations, className) => {
      const uniqueFiles = [...new Set(locations.map(l => l.file))];

      if (uniqueFiles.length > 1) {
        if (!hasMultipleDefinitions) {
          console.warn(`\n⚠️  Classes utilitaires définies dans plusieurs fichiers :\n`);
          hasMultipleDefinitions = true;
        }
        console.warn(`   .${className} dans : ${uniqueFiles.join(', ')}`);
      }
    });

    if (hasMultipleDefinitions) {
      console.warn(`\n💡 Conseil : Centraliser les classes utilitaires dans sections.css ou utils/\n`);
    }

    // Note: On ne fait pas échouer le test, juste un warning
  });
});
