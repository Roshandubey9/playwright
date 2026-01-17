import { Page } from '@playwright/test';

/**
 * Select date from calendar
 * @param page Playwright page
 * @param dateInputLocator locator of date input field
 * @param day day number (1-31)
 * @param monthYearText example: "January, 2026"
 */
export async function selectDate(
  page: Page,
  dateInputLocator: string,
  day: string,
  monthYearText: string
) {
  // Open date picker
  await page.locator(dateInputLocator).click();

  // Navigate month/year until expected month-year appears
  while (true) {
    const currentMonthYear = await page.locator('.ui-datepicker-title').innerText();
    if (currentMonthYear.trim() === monthYearText) {
      break;
    }
    await page.locator('.ui-datepicker-next').click();
  }

  // Select day
  await page.locator(`//a[text()="${day}"]`).click();
}
