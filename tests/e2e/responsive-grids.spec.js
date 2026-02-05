// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Tests de régression pour les grids responsive
 *
 * Contexte : Bug critique où expertise-grid restait en colonne unique
 * sur desktop à cause de variables CSS dans les media queries.
 *
 * Ces tests valident que les grids s'affichent correctement selon
 * la taille d'écran.
 */

test.describe('Grids Responsive', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Expertise-grid : 4 colonnes sur desktop', async ({ page }) => {
    // Définir viewport desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.waitForTimeout(300);

    const expertiseGrid = page.locator('.expertise-grid');

    // Vérifier que le grid existe
    if (await expertiseGrid.count() > 0) {
      // Obtenir le nombre de colonnes via grid-template-columns
      const gridColumns = await expertiseGrid.evaluate(el => {
        const style = window.getComputedStyle(el);
        const columns = style.gridTemplateColumns;
        // Compter le nombre de colonnes (chaque colonne génère une valeur)
        return columns.split(' ').length;
      });

      // Desktop (≥1024px) devrait avoir 4 colonnes
      expect(gridColumns).toBe(4);

      // Vérifier qu'on a au moins 4 items
      const items = expertiseGrid.locator('.expertise-item');
      const itemCount = await items.count();
      expect(itemCount).toBeGreaterThanOrEqual(4);
    }
  });

  test('Expertise-grid : 2 colonnes sur tablet', async ({ page }) => {
    // Définir viewport tablet
    await page.setViewportSize({ width: 800, height: 600 });
    await page.waitForTimeout(300);

    const expertiseGrid = page.locator('.expertise-grid');

    if (await expertiseGrid.count() > 0) {
      const gridColumns = await expertiseGrid.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.gridTemplateColumns.split(' ').length;
      });

      // Tablet (768px-1023px) devrait avoir 2 colonnes
      expect(gridColumns).toBe(2);
    }
  });

  test('Expertise-grid : 1 colonne sur mobile', async ({ page }) => {
    // Définir viewport mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);

    const expertiseGrid = page.locator('.expertise-grid');

    if (await expertiseGrid.count() > 0) {
      const gridColumns = await expertiseGrid.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.gridTemplateColumns.split(' ').length;
      });

      // Mobile (≤640px) devrait avoir 1 colonne
      expect(gridColumns).toBe(1);
    }
  });

  test('Grid générique responsive', async ({ page }) => {
    // Vérifier que les grids génériques (.grid, .grid-2, etc.) sont responsive
    const gridSelectors = ['.grid', '.grid-2', '.grid-3', '.grid-4'];

    for (const selector of gridSelectors) {
      const grid = page.locator(selector).first();

      if (await grid.count() > 0) {
        // Desktop
        await page.setViewportSize({ width: 1200, height: 800 });
        await page.waitForTimeout(200);

        const desktopColumns = await grid.evaluate(el => {
          const style = window.getComputedStyle(el);
          const display = style.display;
          return display === 'grid' ? style.gridTemplateColumns.split(' ').length : 1;
        });

        expect(desktopColumns).toBeGreaterThan(1);

        // Mobile
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(200);

        const mobileColumns = await grid.evaluate(el => {
          const style = window.getComputedStyle(el);
          const display = style.display;
          return display === 'grid' ? style.gridTemplateColumns.split(' ').length : 1;
        });

        // Sur mobile, devrait avoir moins de colonnes qu'en desktop
        expect(mobileColumns).toBeLessThanOrEqual(desktopColumns);
      }
    }
  });

  test('Comparison-grid : 2 colonnes sur tablet+, 1 sur mobile', async ({ page }) => {
    const comparisonGrid = page.locator('.comparison-grid');

    if (await comparisonGrid.count() > 0) {
      // Desktop
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.waitForTimeout(300);

      const desktopColumns = await comparisonGrid.evaluate(el => {
        return window.getComputedStyle(el).gridTemplateColumns.split(' ').length;
      });

      expect(desktopColumns).toBe(2);

      // Mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(300);

      const mobileColumns = await comparisonGrid.evaluate(el => {
        return window.getComputedStyle(el).gridTemplateColumns.split(' ').length;
      });

      expect(mobileColumns).toBe(1);
    }
  });

  test('Pas de débordement horizontal sur mobile', async ({ page }) => {
    // Vérifier qu'il n'y a pas de scroll horizontal sur mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);

    // Tolérance de 5px pour les arrondis
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 5);
  });
});
