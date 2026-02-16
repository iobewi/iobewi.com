const { test, expect } = require('@playwright/test');

test.describe('Navigation Dropdown "Ressources"', () => {

  test.describe('Sur desktop (> 768px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.goto('/');
      await page.waitForTimeout(500); // Attendre le JS
    });

    test('1. Le dropdown "Ressources" est visible', async ({ page }) => {
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      await expect(dropdownToggle).toBeVisible();

      const text = await dropdownToggle.textContent();
      expect(text).toContain('Ressources');
    });

    test('2. Le menu dropdown est caché par défaut', async ({ page }) => {
      const dropdownMenu = page.locator('.nav-dropdown-menu');

      // Le menu existe dans le DOM
      await expect(dropdownMenu).toBeAttached();

      // Mais n'est pas visible (opacity: 0)
      const opacity = await dropdownMenu.evaluate(el =>
        window.getComputedStyle(el).opacity
      );
      expect(parseFloat(opacity)).toBe(0);

      // Et n'est pas interactif (visibility: hidden)
      const visibility = await dropdownMenu.evaluate(el =>
        window.getComputedStyle(el).visibility
      );
      expect(visibility).toBe('hidden');
    });

    test('3. Hover sur "Ressources" ouvre le menu', async ({ page }) => {
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const dropdownMenu = page.locator('.nav-dropdown-menu');

      // État initial
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'false');

      // Hover sur le bouton
      await dropdownToggle.hover();
      await page.waitForTimeout(300); // Attendre la transition

      // Vérifier que le menu est ouvert
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');

      const opacity = await dropdownMenu.evaluate(el =>
        window.getComputedStyle(el).opacity
      );
      expect(parseFloat(opacity)).toBeGreaterThan(0.9);
    });

    test('4. Le menu reste ouvert quand on descend vers les items', async ({ page }) => {
      const dropdownContainer = page.locator('.nav-item-dropdown');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const dropdownMenu = page.locator('.nav-dropdown-menu');
      const firstItem = page.locator('.nav-dropdown-item').first();

      // Hover sur le bouton pour ouvrir
      await dropdownToggle.hover();
      await page.waitForTimeout(300);

      // Descendre vers le premier item du menu
      await firstItem.hover();
      await page.waitForTimeout(300); // Attendre le délai de fermeture (150ms)

      // Le menu doit RESTER ouvert
      const opacity = await dropdownMenu.evaluate(el =>
        window.getComputedStyle(el).opacity
      );
      expect(parseFloat(opacity)).toBeGreaterThan(0.9);

      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');
    });

    test('5. Clic sur "Ressources" toggle le menu', async ({ page }) => {
      const dropdownToggle = page.locator('.nav-dropdown-toggle');

      // État initial : fermé
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'false');

      // Premier clic : ouvre
      await dropdownToggle.click();
      await page.waitForTimeout(200);
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');

      // Deuxième clic : ferme
      await dropdownToggle.click();
      await page.waitForTimeout(200);
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'false');
    });

    test('6. Clic sur "Open Source" navigue correctement', async ({ page }) => {
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const openSourceLink = page.locator('.nav-dropdown-item').filter({ hasText: 'Open Source' });

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(200);

      // Vérifier que le lien est visible
      await expect(openSourceLink).toBeVisible();

      // Cliquer sur le lien
      await openSourceLink.click();
      await page.waitForLoadState('networkidle');

      // Vérifier la navigation
      expect(page.url()).toContain('/open-source/');
    });

    test('7. Clic sur "Méthodologie" navigue correctement', async ({ page }) => {
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const methodologieLink = page.locator('.nav-dropdown-item').filter({ hasText: 'Méthodologie' });

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(200);

      // Vérifier que le lien est visible
      await expect(methodologieLink).toBeVisible();

      // Cliquer sur le lien
      await methodologieLink.click();
      await page.waitForLoadState('networkidle');

      // Vérifier la navigation
      expect(page.url()).toContain('/methodologie/');
    });

    test('8. Clic à l\'extérieur ferme le dropdown', async ({ page }) => {
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const body = page.locator('body');

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(200);
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');

      // Cliquer à l'extérieur (sur le body)
      await body.click({ position: { x: 10, y: 10 } });
      await page.waitForTimeout(200);

      // Vérifier que le dropdown est fermé
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'false');
    });

    test('9. La touche Escape ferme le dropdown', async ({ page }) => {
      const dropdownToggle = page.locator('.nav-dropdown-toggle');

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(200);
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');

      // Appuyer sur Escape
      await page.keyboard.press('Escape');
      await page.waitForTimeout(200);

      // Vérifier que le dropdown est fermé
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'false');
    });

    test('10. Sortir du dropdown avec la souris le ferme (avec délai)', async ({ page }) => {
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const dropdownMenu = page.locator('.nav-dropdown-menu');
      const body = page.locator('body');

      // Ouvrir le dropdown en hover
      await dropdownToggle.hover();
      await page.waitForTimeout(300);
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');

      // Sortir du dropdown
      await body.hover({ position: { x: 10, y: 10 } });

      // Attendre le délai de fermeture (150ms)
      await page.waitForTimeout(200);

      // Vérifier que le dropdown est fermé
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'false');

      const opacity = await dropdownMenu.evaluate(el =>
        window.getComputedStyle(el).opacity
      );
      expect(parseFloat(opacity)).toBe(0);
    });
  });

  test.describe('Sur mobile (≤ 768px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
      await page.goto('/');
      await page.waitForTimeout(500);
    });

    test('11. Le dropdown "Ressources" est visible dans le menu hamburger', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');

      // Ouvrir le menu hamburger
      await hamburger.click();
      await page.waitForTimeout(400);

      // Vérifier que le dropdown est visible
      await expect(dropdownToggle).toBeVisible();

      const text = await dropdownToggle.textContent();
      expect(text).toContain('Ressources');
    });

    test('12. Clic sur "Ressources" ouvre le sous-menu SANS fermer le hamburger', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const header = page.locator('.site-header');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');

      // Ouvrir le menu hamburger
      await hamburger.click();
      await page.waitForTimeout(400);
      await expect(header).toHaveClass(/is-menu-open/);

      // État initial du dropdown : fermé
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'false');

      // Cliquer sur "Ressources"
      await dropdownToggle.click();
      await page.waitForTimeout(400);

      // Vérifier que le dropdown est ouvert
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');

      // CRITIQUE : le menu hamburger doit RESTER ouvert
      await expect(header).toHaveClass(/is-menu-open/);
      await expect(hamburger).toHaveAttribute('aria-expanded', 'true');
    });

    test('13. Le sous-menu s\'affiche avec une transition max-height', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const dropdownMenu = page.locator('.nav-dropdown-menu');

      // Ouvrir le menu hamburger
      await hamburger.click();
      await page.waitForTimeout(400);

      // État initial : max-height = 0
      let maxHeight = await dropdownMenu.evaluate(el =>
        window.getComputedStyle(el).maxHeight
      );
      expect(maxHeight).toBe('0px');

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(400); // Attendre la transition

      // max-height doit être > 0 (500px selon CSS)
      maxHeight = await dropdownMenu.evaluate(el =>
        window.getComputedStyle(el).maxHeight
      );
      expect(maxHeight).not.toBe('0px');
      expect(parseFloat(maxHeight)).toBeGreaterThan(100);
    });

    test('14. Les items du dropdown sont visibles quand ouvert', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const openSourceItem = page.locator('.nav-dropdown-item').filter({ hasText: 'Open Source' });
      const methodologieItem = page.locator('.nav-dropdown-item').filter({ hasText: 'Méthodologie' });

      // Ouvrir le menu hamburger
      await hamburger.click();
      await page.waitForTimeout(400);

      // Les items ne sont pas visibles (max-height: 0)
      await expect(openSourceItem).not.toBeVisible();
      await expect(methodologieItem).not.toBeVisible();

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(400);

      // Les items sont maintenant visibles
      await expect(openSourceItem).toBeVisible();
      await expect(methodologieItem).toBeVisible();
    });

    test('15. Clic sur "Open Source" navigue ET ferme le hamburger', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const header = page.locator('.site-header');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const openSourceItem = page.locator('.nav-dropdown-item').filter({ hasText: 'Open Source' });

      // Ouvrir le menu hamburger
      await hamburger.click();
      await page.waitForTimeout(400);

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(400);

      // Cliquer sur "Open Source"
      await openSourceItem.click();
      await page.waitForLoadState('networkidle');

      // Vérifier la navigation
      expect(page.url()).toContain('/open-source/');

      // CRITIQUE : le menu hamburger doit être fermé
      await expect(header).not.toHaveClass(/is-menu-open/);
      await expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    });

    test('16. Clic sur "Méthodologie" navigue ET ferme le hamburger', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const header = page.locator('.site-header');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const methodologieItem = page.locator('.nav-dropdown-item').filter({ hasText: 'Méthodologie' });

      // Ouvrir le menu hamburger
      await hamburger.click();
      await page.waitForTimeout(400);

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(400);

      // Cliquer sur "Méthodologie"
      await methodologieItem.click();
      await page.waitForLoadState('networkidle');

      // Vérifier la navigation
      expect(page.url()).toContain('/methodologie/');

      // CRITIQUE : le menu hamburger doit être fermé
      await expect(header).not.toHaveClass(/is-menu-open/);
      await expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    });

    test('17. Cliquer à nouveau sur "Ressources" ferme le sous-menu', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const header = page.locator('.site-header');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');

      // Ouvrir le menu hamburger
      await hamburger.click();
      await page.waitForTimeout(400);

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(400);
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');

      // Fermer le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(400);
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'false');

      // Le menu hamburger doit RESTER ouvert
      await expect(header).toHaveClass(/is-menu-open/);
    });
  });

  test.describe('Tests responsive', () => {
    test('18. Le dropdown s\'adapte lors du redimensionnement desktop → mobile', async ({ page }) => {
      await page.goto('/');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const dropdownMenu = page.locator('.nav-dropdown-menu');

      // Commencer en desktop
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.waitForTimeout(300);

      // En desktop, le dropdown peut être ouvert au hover
      await dropdownToggle.hover();
      await page.waitForTimeout(300);
      await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');

      // Passer en mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(300);

      // Le dropdown devrait se fermer automatiquement
      // (ou rester fermé, selon l'implémentation)
      const position = await dropdownMenu.evaluate(el =>
        window.getComputedStyle(el).position
      );
      // En mobile, le dropdown devient static
      expect(position).toBe('static');
    });

    test('19. Le dropdown s\'adapte lors du redimensionnement mobile → desktop', async ({ page }) => {
      await page.goto('/');
      const hamburger = page.locator('.mobile-menu-toggle');
      const dropdownToggle = page.locator('.nav-dropdown-toggle');
      const dropdownMenu = page.locator('.nav-dropdown-menu');

      // Commencer en mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(300);

      // Ouvrir le menu hamburger
      await hamburger.click();
      await page.waitForTimeout(400);

      // Ouvrir le dropdown
      await dropdownToggle.click();
      await page.waitForTimeout(400);

      // Passer en desktop
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.waitForTimeout(400);

      // En desktop, le dropdown devient absolute
      const position = await dropdownMenu.evaluate(el =>
        window.getComputedStyle(el).position
      );
      expect(position).toBe('absolute');

      // Le menu hamburger devrait se fermer (géré par mobile-menu.spec.js)
      // Le dropdown peut rester ouvert ou se fermer selon l'implémentation
    });
  });
});
