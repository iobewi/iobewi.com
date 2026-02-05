// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Configuration Playwright pour les tests E2E
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  // Timeout par test
  timeout: 30000,

  // Nombre de tentatives en cas d'échec
  retries: 2,

  // Workers en parallèle (1 = séquentiel, utile pour debug)
  workers: 1,

  // Reporter
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list']
  ],

  use: {
    // URL de base pour les tests
    baseURL: 'http://localhost:8080',

    // Collect trace en cas d'échec
    trace: 'on-first-retry',

    // Screenshot en cas d'échec
    screenshot: 'only-on-failure',

    // Video en cas d'échec
    video: 'retain-on-failure',
  },

  // Configuration du serveur web pour les tests
  webServer: {
    command: 'npx @11ty/eleventy --serve --port=8080',
    port: 8080,
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
  },

  // Projets (navigateurs à tester)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Décommenter pour tester sur d'autres navigateurs
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // Tests mobile
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  ],
});
