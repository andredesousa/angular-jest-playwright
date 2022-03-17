/**
 * Playwright configuration file, see link for more information:
 * https://playwright.dev/docs/test-configuration
 *
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
module.exports = {
  webServer: {
    command: 'ng serve -c production',
    port: 4200,
    timeout: 120 * 1000,
    reuseExistingServer: true
  },
  use: {
    baseURL: 'http://localhost:4200/',
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    testDir: 'src/specs',
  },
  workers: 4,
  reporter: [['html', { open: 'never', outputFolder: 'build/e2e' }]],
};
