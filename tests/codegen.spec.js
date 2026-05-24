import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('img', { name: 'menu' }).click();
  await page.getByRole('button', { name: 'Sign out' }).click();
  await expect(page.getByRole('link', { name: 'New user? Signup' })).toBeVisible();
});



test('test123', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@1');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'New user? Signup' })).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(3).click();
  const page1 = await page1Promise;
});



test('test98765', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('link', { name: 'New user? Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('ramesh');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ramesh.vu@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).click();
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).fill('123456789');
  await page.getByText('Java', { exact: true }).click();
  await page.getByText('JavaScript').click();
  await page.getByText('JS').click();
  await page.locator('#gender2').check();
  await page.locator('#state').selectOption('Maharashtra');
  await page.locator('#hobbies').selectOption('Playing');
  await page.locator('#hobbies').selectOption('Reading');
  await page.locator('#hobbies').selectOption('Singing');
  await page.getByRole('button', { name: 'Sign up' }).click();
});