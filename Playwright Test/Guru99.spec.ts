import { test } from '@playwright/test';
import { attachScreenshot } from './utils/screenshotHelper';

test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('https://demo.guru99.com/V4/');

    await page.locator('input[name="uid"]').fill('mngr652087');
    await page.locator('input[name="password"]').fill('syrypUr');
    await page.getByRole('button', { name: 'Login' }).click();

    await attachScreenshot(page, testInfo, 'Login Successful');
});

test('NewCustomer', async ({ page }, testInfo) => {

    await page.locator('a:text("New Customer")').click();

    await page.locator('input[name="name"]').fill('Roshani');
    await page.locator('input[value="f"]').click();
    //calander 

    // await page.mouse.wheel(0, -700);
    await page.locator('//input[@value="Submit"]').scrollIntoViewIfNeeded();

    await page.locator('//textarea[@name="addr"]').fill('Mumbai');
    await page.locator('//input[@name="city"]').fill('Mumbai');
    await page.locator('//input[@name="state"]').fill('MH');
    await page.locator('//input[@name="pinno"]').fill('400701');
    await page.locator('//input[@name="telephoneno"]').fill('1232145698');
    await page.locator('//input[@name="emailid"]').fill('roshni@gmail.com');
    await page.locator('//input[@name="password"]').fill('roshni@123');
    // await page.locator('//input[@value="Submit"]').click();
});
