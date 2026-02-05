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

    // Scroller au-delà du hero (qui fait ~80vh minimum)
    // Le header.js change d'état quand scrollY > heroBottom
    await page.evaluate(() => {
      const hero = document.querySelector('.hero-band') || document.querySelector('.hero');
      const header = document.querySelector('.site-header');
      if (hero && header) {
        const heroBottom = hero.offsetTop + hero.offsetHeight - header.offsetHeight;
        // Scroller juste après le hero
        window.scrollTo(0, heroBottom + 100);
      } else {
        // Fallback: scroller beaucoup
        window.scrollTo(0, window.innerHeight * 1.5);
      }
    });

    // Attendre que le JavaScript traite l'événement de scroll
    await page.waitForTimeout(500);

    // Vérifier que le header a la classe is-scrolled après le scroll
    const scrolledClasses = await header.evaluate(el => el.className);
    expect(scrolledClasses).toContain('is-scrolled');

    // Vérifier que l'état a changé
    expect(scrolledClasses).not.toEqual(initialClasses);
  });

  test('3. Positionnement correct après clic sur ancre', async ({ page }) => {
    // Créer une section de test avec un ID en bas de page
    await page.evaluate(() => {
      // Créer une section de test avec un ID
      const section = document.createElement('section');
      section.id = 'test-section';
      section.style.marginTop = '2000px';
      section.style.height = '500px';
      section.style.backgroundColor = '#f0f0f0';
      section.style.padding = '20px';
      section.textContent = 'Section de test pour ancrage';
      document.body.appendChild(section);

      // Créer un lien vers cette section dans le header
      const nav = document.querySelector('.nav');
      if (nav) {
        const link = document.createElement('a');
        link.href = '#test-section';
        link.textContent = 'Test';
        link.className = 'nav-link';
        nav.appendChild(link);
      }
    });

    // Attendre que le header soit visible
    const header = page.locator('.site-header');
    await expect(header).toBeVisible();

    // Obtenir la hauteur du header
    const headerHeight = await header.evaluate(el => el.offsetHeight);

    // Trouver le lien de test
    const testAnchor = page.locator('a[href="#test-section"]');
    await expect(testAnchor).toBeVisible();

    // Cliquer sur le lien (avec force car il peut être masqué par d'autres éléments)
    await testAnchor.click({ force: true });

    // Attendre que le scroll soit terminé
    await page.waitForTimeout(1000);

    // Vérifier que la cible est visible dans le viewport
    const targetElement = page.locator('#test-section');
    await expect(targetElement).toBeVisible();

    // Vérifier que l'élément cible n'est pas masqué par le header
    const targetRect = await targetElement.boundingBox();

    if (targetRect) {
      // L'élément doit être visible en dessous du header (avec tolérance)
      expect(targetRect.y).toBeGreaterThanOrEqual(headerHeight - 20); // -20px de tolérance
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
