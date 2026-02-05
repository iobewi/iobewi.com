// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Tests E2E pour le header et la navigation
 * Valide les 3 cas du backlog qualité :
 * 1. État du header en haut de page
 * 2. État après scroll
 * 3. Bon positionnement après clic sur une ancre
 */

test.describe('Header et Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Naviguer vers la page d'accueil
    await page.goto('/');

    // Attendre que la page soit complètement chargée
    await page.waitForLoadState('networkidle');
  });

  test('1. État du header en haut de page', async ({ page }) => {
    // Vérifier que le header existe
    const header = page.locator('.site-header');
    await expect(header).toBeVisible();

    // Vérifier que le header est en position fixe ou absolue
    const position = await header.evaluate(el => window.getComputedStyle(el).position);
    expect(['fixed', 'absolute']).toContain(position);

    // Sur une page avec hero, le header devrait avoir la classe is-top
    const hasHero = await page.locator('.hero-band, .page-hero').count() > 0;

    if (hasHero) {
      // Vérifier la présence de is-top ou is-hero en haut de page
      const headerClasses = await header.evaluate(el => el.className);
      const hasTopOrHeroClass = headerClasses.includes('is-top') || headerClasses.includes('is-hero');
      expect(hasTopOrHeroClass).toBeTruthy();
    }

    // Vérifier que le logo est visible
    const logo = page.locator('.brand');
    await expect(logo).toBeVisible();

    // Vérifier que la navigation est visible
    const nav = page.locator('.nav');
    await expect(nav).toBeVisible();
  });

  test('2. État du header après scroll', async ({ page }) => {
    const header = page.locator('.site-header');

    // Attendre que le header soit visible
    await expect(header).toBeVisible();

    // Capturer l'état initial
    const initialClasses = await header.evaluate(el => el.className);

    // Scroller vers le bas de 500px
    await page.evaluate(() => window.scrollTo(0, 500));

    // Attendre un peu pour que les animations se terminent
    await page.waitForTimeout(300);

    // Vérifier que le header a la classe is-scrolled après le scroll
    const scrolledClasses = await header.evaluate(el => el.className);
    expect(scrolledClasses).toContain('is-scrolled');

    // Vérifier que l'état a changé
    expect(scrolledClasses).not.toEqual(initialClasses);
  });

  test('3. Positionnement correct après clic sur ancre', async ({ page }) => {
    // Trouver un lien d'ancre sur la page (si disponible)
    const anchorLinks = page.locator('a[href^="#"]');
    const anchorCount = await anchorLinks.count();

    // Si pas d'ancres, créer un élément de test
    if (anchorCount === 0) {
      await page.evaluate(() => {
        // Créer une section de test avec un ID
        const section = document.createElement('section');
        section.id = 'test-section';
        section.style.marginTop = '2000px';
        section.textContent = 'Section de test';
        document.body.appendChild(section);

        // Créer un lien vers cette section
        const link = document.createElement('a');
        link.href = '#test-section';
        link.textContent = 'Lien test';
        link.style.position = 'fixed';
        link.style.top = '200px';
        link.style.left = '50%';
        document.body.insertBefore(link, document.body.firstChild);
      });
    }

    // Attendre que le header soit visible
    const header = page.locator('.site-header');
    await expect(header).toBeVisible();

    // Obtenir la hauteur du header
    const headerHeight = await header.evaluate(el => el.offsetHeight);

    // Cliquer sur le premier lien d'ancre (ou notre lien de test)
    const firstAnchor = page.locator('a[href^="#"]').first();
    await expect(firstAnchor).toBeVisible();

    const targetId = await firstAnchor.getAttribute('href');
    await firstAnchor.click();

    // Attendre que le scroll soit terminé
    await page.waitForTimeout(500);

    // Vérifier que la cible est visible
    const targetElement = page.locator(targetId);
    await expect(targetElement).toBeVisible();

    // Vérifier que l'élément cible n'est pas masqué par le header
    const targetRect = await targetElement.boundingBox();

    if (targetRect) {
      // L'élément doit être visible en dessous du header
      expect(targetRect.y).toBeGreaterThanOrEqual(headerHeight - 10); // -10px de tolérance
    }
  });

  test('Navigation entre les pages', async ({ page }) => {
    // Vérifier que les liens de navigation fonctionnent
    const navLinks = page.locator('.nav-link');
    const navCount = await navLinks.count();

    expect(navCount).toBeGreaterThan(0);

    // Tester la navigation vers la page "À propos" si elle existe
    const aboutLink = page.locator('.nav-link[href*="a-propos"]');

    if (await aboutLink.count() > 0) {
      await aboutLink.click();
      await page.waitForLoadState('networkidle');

      // Vérifier que nous sommes sur la bonne page
      expect(page.url()).toContain('a-propos');

      // Vérifier que le header est toujours présent
      const header = page.locator('.site-header');
      await expect(header).toBeVisible();
    }
  });
});
