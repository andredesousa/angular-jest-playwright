import { Locator, Page } from '@playwright/test';

export class AppPage {
  constructor(private readonly page: Page) {}

  navigateTo(path: string): Promise<unknown> {
    return this.page.goto(path);
  }

  getTitleText(): Locator {
    return this.page.locator('#message-section');
  }
}
