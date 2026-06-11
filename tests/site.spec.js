const { test, expect } = require('@playwright/test');

test.describe('Pages load', () => {
  test('home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/OC Musculoskeletal Medical Center/);
    await expect(page.getByText('(949) 200-1964').first()).toBeVisible();
    await expect(page.getByText('Salamatipour').first()).toBeVisible();
  });

  test('SMS opt-in page', async ({ page }) => {
    await page.goto('/contact.html');
    await expect(page).toHaveTitle(/SMS Text Message Opt-In/);
    await expect(page.locator('#sms-opt-in-form')).toBeVisible();
  });

  test('privacy policy page', async ({ page }) => {
    await page.goto('/privacy-policy.html');
    await expect(page).toHaveTitle(/Privacy Policy/);
  });

  test('terms page', async ({ page }) => {
    await page.goto('/terms.html');
    await expect(page).toHaveTitle(/Terms/);
  });
});

test.describe('SMS opt-in form', () => {
  test('submits and shows success message', async ({ page }) => {
    await page.goto('/contact.html');
    await page.fill('#full-name', 'Test User');
    await page.fill('#phone', '(949) 555-0100');
    await page.check('#sms-consent');
    await page.click('.form-submit');
    await expect(page.locator('#sms-success')).toBeVisible();
    await expect(page.locator('#sms-opt-in-form')).toBeHidden();
  });
});

test.describe('Navigation', () => {
  test('back to home link on contact page', async ({ page }) => {
    await page.goto('/contact.html');
    await page.click('text=Back to OCMSK Home');
    await expect(page).toHaveTitle(/OC Musculoskeletal Medical Center/);
  });

  test('privacy policy link in footer', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Privacy Policy' }).click();
    await expect(page).toHaveTitle(/Privacy Policy/);
  });
});
