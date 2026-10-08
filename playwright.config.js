import { defineConfig } from '@playwright/test';

export default defineConfig({
	testMatch: 'repro.test.js',
	webServer: { command: 'npm run preview -- --port 4399 --strictPort', port: 4399 },
	use: { baseURL: 'http://localhost:4399' },
	projects: [{ name: 'webkit', use: { browserName: 'webkit' } }, { name: 'chromium', use: { browserName: 'chromium' } }]
});
