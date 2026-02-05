const { test, expect } = require('@playwright/test');

test.describe('Menu Hamburger Mobile', () => {

  test.describe('Sur mobile (≤ 768px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
      await page.goto('/');
    });

    test('1. Le bouton hamburger est visible', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      await expect(hamburger).toBeVisible();
    });

    test('2. Le menu de navigation est caché par défaut', async ({ page }) => {
      const nav = page.locator('.nav');

      // Le menu existe mais n'est pas visible (opacity: 0, pointer-events: none)
      await expect(nav).toBeAttached();

      // Vérifier que le menu n'est pas interactif par défaut
      const opacity = await nav.evaluate(el => window.getComputedStyle(el).opacity);
      expect(parseFloat(opacity)).toBeLessThan(0.5);
    });

    test('3. Cliquer sur le hamburger ouvre le menu', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const header = page.locator('.site-header');
      const nav = page.locator('.nav');

      // Vérifier l'état initial
      await expect(hamburger).toHaveAttribute('aria-expanded', 'false');
      await expect(header).not.toHaveClass(/is-menu-open/);

      // Cliquer sur le hamburger
      await hamburger.click();
      await page.waitForTimeout(400); // Attendre l'animation

      // Vérifier que le menu est ouvert
      await expect(hamburger).toHaveAttribute('aria-expanded', 'true');
      await expect(header).toHaveClass(/is-menu-open/);

      // Vérifier que le menu est maintenant visible
      const opacity = await nav.evaluate(el => window.getComputedStyle(el).opacity);
      expect(parseFloat(opacity)).toBeGreaterThan(0.9);
    });

    test('4. Cliquer à nouveau sur le hamburger ferme le menu', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const header = page.locator('.site-header');

      // Ouvrir le menu
      await hamburger.click();
      await page.waitForTimeout(400);
      await expect(header).toHaveClass(/is-menu-open/);

      // Fermer le menu
      await hamburger.click();
      await page.waitForTimeout(400);

      // Vérifier que le menu est fermé
      await expect(hamburger).toHaveAttribute('aria-expanded', 'false');
      await expect(header).not.toHaveClass(/is-menu-open/);
    });

    test('5. Cliquer sur un lien de navigation ferme le menu', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const header = page.locator('.site-header');
      const firstNavLink = page.locator('.nav-link').first();

      // Ouvrir le menu
      await hamburger.click();
      await page.waitForTimeout(400);
      await expect(header).toHaveClass(/is-menu-open/);

      // Cliquer sur un lien (utiliser force: true car le lien peut être intercepté)
      await firstNavLink.click({ force: true });
      await page.waitForTimeout(400);

      // Vérifier que le menu est fermé
      await expect(hamburger).toHaveAttribute('aria-expanded', 'false');
      await expect(header).not.toHaveClass(/is-menu-open/);
    });

    test('6. La touche Escape ferme le menu', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const header = page.locator('.site-header');

      // Ouvrir le menu
      await hamburger.click();
      await page.waitForTimeout(400);
      await expect(header).toHaveClass(/is-menu-open/);

      // Appuyer sur Escape
      await page.keyboard.press('Escape');
      await page.waitForTimeout(400);

      // Vérifier que le menu est fermé
      await expect(hamburger).toHaveAttribute('aria-expanded', 'false');
      await expect(header).not.toHaveClass(/is-menu-open/);
    });

    test('7. Le scroll du body est bloqué quand le menu est ouvert', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');

      // Vérifier l'état initial
      let bodyPosition = await page.evaluate(() => document.body.style.position);
      expect(bodyPosition).toBe('');

      // Ouvrir le menu
      await hamburger.click();
      await page.waitForTimeout(400);

      // Vérifier que le scroll est bloqué (position fixed)
      bodyPosition = await page.evaluate(() => document.body.style.position);
      expect(bodyPosition).toBe('fixed');

      // Fermer le menu
      await hamburger.click();
      await page.waitForTimeout(400);

      // Vérifier que le scroll est rétabli
      bodyPosition = await page.evaluate(() => document.body.style.position);
      expect(bodyPosition).toBe('');
    });

    test('8. L\'icône hamburger se transforme en X quand le menu est ouvert', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');
      const firstLine = page.locator('.hamburger-icon span').nth(0);
      const secondLine = page.locator('.hamburger-icon span').nth(1);
      const thirdLine = page.locator('.hamburger-icon span').nth(2);

      // État initial des lignes
      const initialOpacity = await secondLine.evaluate(el =>
        window.getComputedStyle(el).opacity
      );
      expect(parseFloat(initialOpacity)).toBe(1);

      // Ouvrir le menu
      await hamburger.click();
      await page.waitForTimeout(400);

      // Vérifier la transformation en X
      // La ligne du milieu doit être invisible
      const openOpacity = await secondLine.evaluate(el =>
        window.getComputedStyle(el).opacity
      );
      expect(parseFloat(openOpacity)).toBeLessThan(0.5);

      // Les lignes du haut et du bas doivent être transformées (rotate)
      const firstTransform = await firstLine.evaluate(el =>
        window.getComputedStyle(el).transform
      );
      const thirdTransform = await thirdLine.evaluate(el =>
        window.getComputedStyle(el).transform
      );

      // Vérifier qu'il y a une transformation (pas "none")
      expect(firstTransform).not.toBe('none');
      expect(thirdTransform).not.toBe('none');
    });
  });

  test.describe('Sur desktop (> 768px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.goto('/');
    });

    test('9. Le bouton hamburger est caché sur desktop', async ({ page }) => {
      const hamburger = page.locator('.mobile-menu-toggle');

      // Le bouton existe dans le DOM mais n'est pas visible
      await expect(hamburger).toBeAttached();

      const display = await hamburger.evaluate(el =>
        window.getComputedStyle(el).display
      );
      expect(display).toBe('none');
    });

    test('10. Le menu de navigation est toujours visible sur desktop', async ({ page }) => {
      const nav = page.locator('.nav');

      // Le menu doit être visible sans interaction
      await expect(nav).toBeVisible();

      // Vérifier que l'opacity est à 1 (pas caché)
      const opacity = await nav.evaluate(el =>
        window.getComputedStyle(el).opacity
      );
      expect(parseFloat(opacity)).toBe(1);
    });

    test('11. Les liens de navigation sont cliquables sur desktop', async ({ page }) => {
      const navLinks = page.locator('.nav-link');
      const count = await navLinks.count();

      expect(count).toBeGreaterThan(0);

      // Vérifier que le premier lien est cliquable
      const firstLink = navLinks.first();
      await expect(firstLink).toBeVisible();
      await expect(firstLink).not.toBeDisabled();
    });
  });

  test.describe('Tests responsive', () => {
    test('12. Le menu s\'adapte lors du redimensionnement', async ({ page }) => {
      await page.goto('/');
      const hamburger = page.locator('.mobile-menu-toggle');
      const nav = page.locator('.nav');

      // Commencer en desktop
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.waitForTimeout(300);

      let display = await hamburger.evaluate(el =>
        window.getComputedStyle(el).display
      );
      expect(display).toBe('none');

      // Passer en mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(300);

      display = await hamburger.evaluate(el =>
        window.getComputedStyle(el).display
      );
      expect(display).not.toBe('none');

      // Vérifier que le menu est caché sur mobile
      const opacity = await nav.evaluate(el =>
        window.getComputedStyle(el).opacity
      );
      expect(parseFloat(opacity)).toBeLessThan(0.5);
    });
  });
});
