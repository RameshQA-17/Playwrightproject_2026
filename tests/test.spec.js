import { test, expect } from "@playwright/test";

test("Orange crm", async ({ page }) => {
  test.setTimeout(70000);

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // 🔐 Login
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole('button', { name: 'Login' }).click();

  // 👉 Go to PIM
  await page.getByRole('link', { name: 'PIM' }).click();

  // 👉 Click Add Employee
  await page.getByRole('button', { name: 'Add' }).click();

  // 👉 Upload image
  await page.locator("input[type='file']").setInputFiles("Testdata/Testfile.png");

  // 👉 Fill employee details
  await page.getByPlaceholder("First Name").fill("Ramesh");
  await page.getByPlaceholder("Middle Name").fill("Kumar");
  await page.getByPlaceholder("Last Name").fill("Thakur");

  // 👉 Enable Login Details
  await page.locator(".oxd-switch-input").click();

  // 👉 Create unique username (important to avoid duplicate error)
  const username = "Ramesh" + Date.now();

  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByLabel('Password').fill("Ramesh_909090");
  await page.getByLabel('Confirm Password').fill("Ramesh_909090");

  // 👉 Save
  await page.getByRole('button', { name: 'Save' }).click();

  // ✅ Validate save success
  await expect(page.getByText(/Successfully Saved/i)).toBeVisible();

  // 👉 Go back to PIM (Employee List)
  await page.getByRole('link', { name: 'PIM' }).click();

  // 👉 Search using Employee Name (NOT username)
  await page.getByPlaceholder("Type for hints...").first().fill("Ramesh");

  // 👉 Select from dropdown (VERY IMPORTANT)
  await page.getByText("Ramesh Kumar Thakur").click();

  // 👉 Click Search
  await page.getByRole('button', { name: 'Search' }).click();

  // ✅ Validate search result
  await expect(page.getByText(/Record/)).toBeVisible({ timeout: 10000 });

  // 👉 Select user
  await page.locator(".oxd-checkbox-input").first().click();

  // 👉 Delete user
  await page.locator("i.bi-trash").click();
  await page.getByRole('button', { name: 'Yes, Delete' }).click();

  // 👉 Logout
  await page.locator(".oxd-userdropdown-name").click();
  await page.getByText("Logout").click();
});