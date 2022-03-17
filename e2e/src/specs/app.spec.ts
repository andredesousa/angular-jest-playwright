import { expect, test } from '@playwright/test';
import { AppPage } from '../page-objects/app.po';

const { describe, beforeEach } = test;

describe('App', () => {
  let appPage: AppPage;

  beforeEach(async ({ page }) => {
    appPage = new AppPage(page);
  });

  test('should display welcome message', async () => {
    await appPage.navigateTo('/');

    await expect(appPage.getTitleText()).toHaveText('Angular app is running!');
  });
});
