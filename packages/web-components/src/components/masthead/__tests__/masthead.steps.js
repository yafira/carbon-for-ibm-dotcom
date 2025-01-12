/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('cds-masthead-*', () => {
  describe('With wide screen', () => {
    beforeEach(async () => {
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto(
        `http://localhost:${process.env.PORT}/iframe.html?id=components-masthead--default&mock`
      );
    });

    it('should support clicking the logo', async () => {
      const promiseNavigation = page.waitForNavigation();
      await page.click('cds-masthead-logo');
      await promiseNavigation;
      expect(await page.evaluate(() => window.location.href)).toMatch(
        'https://www.ibm.com'
      );
    });

    it('should support navigating in profile menu', async () => {
      await page.click('cds-masthead-profile');
      const promiseNavigation = page.waitForNavigation();
      await page.click('cds-masthead-profile-item[href*="authorize"]');
      await promiseNavigation;
      expect(await page.evaluate(() => window.location.href)).toMatch(
        'https://idaas.iam.ibm.com'
      );
    });

    it('should support navigating in top nav menu', async () => {
      await page.click('cds-megamenu-top-nav-menu:first-of-type');
      const promiseNavigation = page.waitForNavigation();
      await page.click('cds-megamenu-link-with-icon:first-of-type');
      await promiseNavigation;
      expect(await page.evaluate(() => window.location.href)).toMatch(
        'https://www.ibm.com'
      );
    });

    it('should support showing/hiding the search box', async () => {
      await page.click('cds-masthead-search button[part="open-button"]');
      await expect(page).toHaveSelector(
        'cds-masthead-search input[part="search-input"]',
        { state: 'visible' }
      );
      await page.click('cds-masthead-search button[part="close-button"]');
      await expect(page).toHaveSelector(
        'cds-masthead-search input[part="search-input"]',
        { state: 'hidden' }
      );
    });
  });

  describe('With narrow screen', () => {
    beforeEach(async () => {
      await page.setViewportSize({ width: 672, height: 720 });
      await page.goto(
        `http://localhost:${process.env.PORT}/iframe.html?id=components-masthead--default&mock`
      );
    });

    it('should support navigating in left nav menu', async () => {
      await page.click('cds-masthead-menu-button');
      await page.click('cds-left-nav-menu[title*="Products"]');
      await page.click('cds-left-nav-menu[title="Industries"]');
      await page.click('cds-left-nav-menu-item[title="Healthcare"]');
      expect(await page.evaluate(() => window.location.href)).toMatch(
        'https://www.ibm.com/industries/healthcare'
      );
    });
  });
});
