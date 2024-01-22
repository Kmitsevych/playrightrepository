
import { test, expect } from '@playwright/test';
const randomNumber = () => {
    return Math.floor(Math.random() * 1000);
}
test('User Registration ', async ({ page }) => {
  
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');

  await page.click('text=Sign up');
  await page.click('#signupName');
  await page.locator('#signupName').click();
  await page.locator('#signupName').fill('Kate');
  await expect(page.locator('#signupName')).toBeVisible();
  await page.click('#signupLastName');
  await page.locator('#signupLastName').fill('Mitsevych');
  await expect(page.locator('#signupLastName')).toBeVisible();
  await page.click('label:has-text("Name")');
  await page.getByLabel('Name').fill('email+${randomNumber()}@mail.com');
  await page.click('label:has-text("Password")');
  await page.getByLabel('Password', { exact: true }).fill('Pas12345');
  await page.click('label:has-text("Re-enter password")');
  await page.getByLabel('Re-enter password').fill('Pas12345');
  await page.click('button:has-text("Register")');

});




