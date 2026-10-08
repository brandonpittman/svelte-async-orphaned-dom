import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit({ compilerOptions: { experimental: { async: true } }, adapter: adapter() })]
});
