import { test, expect } from '@playwright/test';

for (const [name, path, link] of [
	['component-only page', '/', 'home'],
	['control: page with its own element', '/inline', 'inline']
]) {
	test(`${name}, loaded, left, client-mounted again, then left for an awaiting layout, leaves no DOM behind`, async ({ page }) => {
		await page.goto(path);
		await page.waitForLoadState('networkidle');
		await page.getByRole('link', { name: 'other' }).click();
		await expect(page.locator('#other')).toBeVisible();

		await page.getByRole('link', { name: link }).click();
		await expect(page.locator('#child')).toBeVisible();

		await page.getByRole('link', { name: 'next' }).click();
		await expect(page.locator('#next')).toBeVisible();
		await expect(page.locator('#child')).toHaveCount(0);
	});
}

test('control: component-only page, hydrated then left the same way, leaves no DOM behind', async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('networkidle');

	await page.getByRole('link', { name: 'next' }).click();
	await expect(page.locator('#next')).toBeVisible();
	await expect(page.locator('#child')).toHaveCount(0);
});
