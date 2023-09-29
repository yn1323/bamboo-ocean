import { test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('about:blank')
  await page.goto('http://localhost:8910/')
  await page.locator('html').click()
  await page
    .getByText('My default route is named home, link to me with `Home`')
    .click()
})
