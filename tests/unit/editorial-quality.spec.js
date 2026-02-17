// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

/**
 * Tests de qualité éditoriale — détection "anti-IA visible"
 *
 * Scanne les fichiers sources .md, .css et .js du projet.
 * Détecte les patterns caractéristiques d'un texte généré par IA :
 * - Connecteurs de remplissage ("ainsi,", "de plus,", "par ailleurs")
 * - Verbes fades et constructions passives ("permettant de", "visant à")
 * - Constructions nominales lourdes ("la mise en place de", "l'ensemble des")
 * - Emphases marketing vides ("particulièrement adapté", "innovant")
 * - Formules creuses ("il est important de", "à noter que")
 * - Tirets cadratins résiduels
 * - Points de suspension mal formés
 */

// Patterns à détecter, organisés par catégorie
const PATTERNS = [
  // ── Connecteurs de remplissage ──────────────────────────────────────────
  {
    id: 'connecteur-ainsi',
    label: 'Connecteur de remplissage',
    pattern: /\bainsi,/gi,
    example: '"ainsi, il convient de..." → supprimer ou reformuler',
  },
  {
    id: 'connecteur-de-plus',
    label: 'Connecteur de remplissage',
    pattern: /\bde plus,/gi,
    example: '"de plus, ..." → supprimer ou reformuler',
  },
  {
    id: 'connecteur-par-ailleurs',
    label: 'Connecteur de remplissage',
    pattern: /\bpar ailleurs\b/gi,
    example: '"par ailleurs, ..." → supprimer ou reformuler',
  },
  {
    id: 'connecteur-en-effet',
    label: 'Connecteur de remplissage',
    pattern: /\ben effet,/gi,
    example: '"en effet, ..." → reformuler directement',
  },
  {
    id: 'connecteur-a-noter',
    label: 'Formule creuse',
    pattern: /à noter que/gi,
    example: '"à noter que..." → dire directement ce qu\'il y a à noter',
  },

  // ── Formules creuses ────────────────────────────────────────────────────
  {
    id: 'formule-il-est-important',
    label: 'Formule creuse',
    pattern: /il est important (de|d'|que)/gi,
    example: '"il est important de..." → si c\'est important, le dire directement',
  },
  {
    id: 'formule-il-est-essentiel',
    label: 'Formule creuse',
    pattern: /il est essentiel (de|d'|que)/gi,
    example: '"il est essentiel de..." → idem',
  },
  {
    id: 'formule-il-convient',
    label: 'Formule creuse',
    pattern: /il convient de/gi,
    example: '"il convient de..." → formuler à l\'impératif ou à l\'indicatif',
  },

  // ── Verbes fades ────────────────────────────────────────────────────────
  {
    id: 'verbe-permettant',
    label: 'Verbe fade (participe)',
    pattern: /permettant (ainsi |de |d'|à |les |la |le )/gi,
    example: '"permettant de..." → sujet + verbe actif',
  },
  {
    id: 'verbe-visant',
    label: 'Verbe fade (participe)',
    pattern: /visant à/gi,
    example: '"visant à..." → reformuler avec un verbe principal',
  },
  {
    id: 'verbe-facilitant',
    label: 'Verbe fade (participe)',
    pattern: /facilitant (ainsi |la |le |les |l')/gi,
    example: '"facilitant ainsi..." → reformuler',
  },
  {
    id: 'verbe-favorisant',
    label: 'Verbe fade (participe)',
    pattern: /favorisant\b/gi,
    example: '"favorisant..." → reformuler avec un verbe actif',
  },

  // ── Constructions nominales lourdes ────────────────────────────────────
  {
    id: 'nominal-mise-en-place',
    label: 'Construction lourde',
    pattern: /la mise en place (de|d')/gi,
    example: '"la mise en place de..." → "mettre en place" ou verbe direct',
  },
  {
    id: 'nominal-ensemble-des',
    label: 'Construction lourde',
    pattern: /l'ensemble des/gi,
    example: '"l\'ensemble des..." → "tous les" ou reformuler',
  },

  // ── Emphases marketing vides ────────────────────────────────────────────
  {
    id: 'emphase-particulierement',
    label: 'Emphase vide',
    pattern: /particulièrement (adapté|efficace|important|pertinent|utile)/gi,
    example: '"particulièrement adapté..." → dire pourquoi ou supprimer',
  },
  {
    id: 'emphase-innovant',
    label: 'Emphase marketing',
    pattern: /\binnovant\b/gi,
    example: '"innovant" → dire en quoi concrètement',
  },
  {
    id: 'emphase-optimal',
    label: 'Emphase vide',
    pattern: /\boptimal(e|es|ement)?\b/gi,
    example: '"optimal..." → préciser ou supprimer',
  },

  // ── Caractères typographiques à proscrire ───────────────────────────────
  {
    id: 'tiret-cadratin',
    label: 'Tiret cadratin',
    pattern: / — /g,
    example: '" — " → remplacer par :, , ou ( )',
  },
  {
    id: 'points-suspension-simples',
    label: 'Points de suspension mal formés',
    pattern: /(?<!\.)\.\.(?!\.)/g,
    example: '".." → utiliser "…" (ellipse) ou "..." (3 points)',
  },
];

// Chemins à ignorer (docs internes, générés, dépendances)
const IGNORED_PATHS = [
  'docs/',
  'node_modules/',
  '_site/',
  'CLAUDE.md',
  'README',
  'tests/',
];

// Extensions à scanner
const EXTENSIONS = ['.md', '.css', '.js'];

function getSourceFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getSourceFiles(fullPath));
    } else if (EXTENSIONS.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

function isIgnored(filePath) {
  return IGNORED_PATHS.some(p => filePath.includes(p));
}

function getLineContext(content, index, length) {
  const start = content.lastIndexOf('\n', index) + 1;
  const end = content.indexOf('\n', index + length);
  return content.slice(start, end === -1 ? undefined : end).trim();
}

/**
 * Vérifie si le contexte est une ligne à ignorer selon le type de fichier.
 * - .md  : ignore les commentaires HTML et Liquid
 * - .css : ignore les sélecteurs / déclarations CSS (pas les commentaires)
 * - .js  : rien à ignorer (les patterns prose ne matchent pas le code JS)
 */
function isIgnoredContext(context, ext) {
  if (ext === '.md') {
    return context.startsWith('<!--') || context.includes('{% comment %}');
  }
  if (ext === '.css') {
    // Ignorer les lignes de code CSS pur (propriétés, sélecteurs) — les patterns
    // prose ne peuvent apparaître qu'en commentaires, mais on vérifie quand même
    // que la ligne n'est pas une URL ou une valeur CSS contenant un mot-clé
    const trimmed = context.trimStart();
    // Ligne de code CSS (pas un commentaire) : contient ':' ou '{' ou '}' sans '/*'
    if (!trimmed.startsWith('/*') && !trimmed.startsWith('*') && !trimmed.startsWith('//')) {
      if (trimmed.includes('{') || trimmed.includes('}') || /^\w[\w-]*\s*:/.test(trimmed)) {
        return true;
      }
    }
    return false;
  }
  return false;
}

test.describe('Qualité éditoriale — détection anti-IA', () => {
  const srcDir = path.join(__dirname, '../../src');

  test('Aucun marqueur "IA visible" dans les fichiers sources (.md, .css, .js)', () => {
    const files = getSourceFiles(srcDir).filter(f => !isIgnored(f));
    const violations = [];

    for (const file of files) {
      const ext = path.extname(file);
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(srcDir, file);

      for (const { id, label, pattern, example } of PATTERNS) {
        pattern.lastIndex = 0;
        let match;
        while ((match = pattern.exec(content)) !== null) {
          const context = getLineContext(content, match.index, match[0].length);
          if (isIgnoredContext(context, ext)) continue;
          violations.push({
            file: relativePath,
            ext,
            label,
            id,
            found: match[0],
            context: context.substring(0, 100),
            example,
          });
        }
      }
    }

    if (violations.length > 0) {
      const report = violations.map(v =>
        `\n  [${v.label}] ${v.file}\n  Trouvé  : "${v.found}"\n  Contexte: ${v.context}\n  Fix     : ${v.example}`
      ).join('\n');
      console.error(`\n❌ ${violations.length} marqueur(s) "IA visible" détecté(s) :${report}\n`);
    }

    expect(violations.length, `${violations.length} marqueur(s) "IA visible" à corriger`).toBe(0);
  });
});
