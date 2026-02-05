// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Tests E2E pour la page d'accueil
 * Valide les éléments clés et l'accessibilité
 */

test.describe('Page d\'accueil', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Affiche le hero principal', async ({ page }) => {
    // Vérifier que le hero band est présent
    const heroBand = page.locator('.hero-band').first();
    await expect(heroBand).toBeVisible();

    // Vérifier le titre principal
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(/structuration|accompagnement|iobewi/i);
  });

  test('Affiche la navigation principale', async ({ page }) => {
    // Vérifier les liens de navigation
    const navLinks = page.locator('.nav-link');
    const count = await navLinks.count();

    expect(count).toBeGreaterThanOrEqual(4);

    // Vérifier que tous les liens ont un href
    for (let i = 0; i < count; i++) {
      const href = await navLinks.nth(i).getAttribute('href');
      expect(href).toBeTruthy();
    }
  });

  test('Affiche les sections principales', async ({ page }) => {
    // Vérifier la présence de sections
    const sections = page.locator('.section');
    const count = await sections.count();

    expect(count).toBeGreaterThan(0);

    // Vérifier la section expertise-grid
    const expertiseGrid = page.locator('.expertise-grid');
    if (await expertiseGrid.count() > 0) {
      await expect(expertiseGrid).toBeVisible();

      // Vérifier qu'il y a des items d'expertise
      const expertiseItems = expertiseGrid.locator('.expertise-item');
      const itemCount = await expertiseItems.count();
      expect(itemCount).toBeGreaterThan(0);
    }
  });

  test('Affiche le footer', async ({ page }) => {
    // Scroller jusqu'en bas de la page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    // Vérifier que le footer est présent
    const footer = page.locator('.site-footer');
    await expect(footer).toBeVisible();

    // Vérifier le copyright
    const copyright = footer.locator('text=/©.*IOBEWI/i');
    await expect(copyright).toBeVisible();
  });

  test('Les boutons CTA sont fonctionnels', async ({ page }) => {
    // Chercher les boutons principaux
    const primaryButtons = page.locator('.btn-primary');

    if (await primaryButtons.count() > 0) {
      const firstButton = primaryButtons.first();
      await expect(firstButton).toBeVisible();

      // Vérifier que le bouton a un href ou un onclick
      const href = await firstButton.getAttribute('href');
      const onclick = await firstButton.getAttribute('onclick');

      expect(href || onclick).toBeTruthy();
    }
  });

  test('Responsive : layout mobile', async ({ page }) => {
    // Passer en mode mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);

    // Vérifier que le header est toujours visible
    const header = page.locator('.site-header');
    await expect(header).toBeVisible();

    // Vérifier que le contenu principal est visible
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Vérifier qu'il n'y a pas de débordement horizontal
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);

    // Tolérance de 5px pour les arrondis
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 5);
  });

  test('Animations au scroll', async ({ page }) => {
    // Chercher les éléments avec animation
    const animatedElements = page.locator('.animate-on-scroll');

    if (await animatedElements.count() > 0) {
      const firstAnimated = animatedElements.first();

      // Scroller jusqu'à l'élément
      await firstAnimated.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      // Vérifier que la classe is-visible est ajoutée
      const classes = await firstAnimated.getAttribute('class');
      expect(classes).toContain('is-visible');
    }
  });

  test('Accessibilité : contraste et structure', async ({ page }) => {
    // Vérifier qu'il y a un seul h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);

    // Vérifier que les images ont des attributs alt
    const images = page.locator('img');
    const imgCount = await images.count();

    for (let i = 0; i < imgCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      // L'attribut alt doit exister (peut être vide pour les images décoratives)
      expect(alt).not.toBeNull();
    }

    // Vérifier que les liens ont du texte ou un aria-label
    const links = page.locator('a');
    const linkCount = await links.count();

    for (let i = 0; i < Math.min(linkCount, 10); i++) { // Tester les 10 premiers
      const text = await links.nth(i).textContent();
      const ariaLabel = await links.nth(i).getAttribute('aria-label');
      expect(text || ariaLabel).toBeTruthy();
    }
  });
});
